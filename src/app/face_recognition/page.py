import cv2
import face_recognition
import os
import sys
from datetime import datetime

# 1. Create a folder to store the saved faces
save_folder = "Captured_Faces"
os.makedirs(save_folder, exist_ok=True)

# 2. Camera Connection & Fallback Logic
ip_camera_url = "http://192.0.0.2:8080/video"

print("Attempting to connect to IP Camera...")
cap = cv2.VideoCapture(ip_camera_url)

# Test if the camera is opened AND can read at least one frame
success = False
if cap.isOpened():
    success, _ = cap.read()

# Fallback: If IP camera fails, switch to device camera
if not success:
    print("IP Camera not found or unreachable. Falling back to default device camera...")
    cap.release()  # Release the failed IP stream
    
    cap = cv2.VideoCapture(0)  # '0' is the default built-in/USB webcam
    if cap.isOpened():
        success, _ = cap.read()
        
    if not success:
        print("Error: Could not access the default device camera either. Exiting.")
        sys.exit()
else:
    print("Successfully connected to IP Camera.")

# Configure the main window to be resizable
cv2.namedWindow('Live Feed', cv2.WINDOW_NORMAL)
cv2.resizeWindow('Live Feed', 800, 600)

print("\n--- CONTROLS ---")
print("Press 'c' to Capture faces (saves and pops them up)")
print("Press 's' to Save the entire full-screen frame")
print("Press 'q' to Quit the application")

while True:
    success, frame = cap.read()
    if not success:
        print("Video stream lost. Exiting...")
        break
        
    # Scale down for faster detection
    small_frame = cv2.resize(frame, (0, 0), None, 0.25, 0.25)
    rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)
    
    # Find all face locations in the current frame
    face_locations = face_recognition.face_locations(rgb_small_frame)
    
    # Create a copy of the frame for display to keep saved images clean
    display_frame = frame.copy()
    
    # Draw green boxes around faces on the display frame
    for face_loc in face_locations:
        top, right, bottom, left = [coord * 4 for coord in face_loc]
        cv2.rectangle(display_frame, (left, top), (right, bottom), (0, 255, 0), 2)
        
    # Show the rescaled live feed
    cv2.imshow('Live Feed', display_frame)

    # Key Listeners
    key = cv2.waitKey(1) & 0xFF
    
    # 1. Press 'q' to Quit
    if key == ord('q'):
        print("Closing application...")
        break
        
    # 2. Press 'c' to Capture faces
    elif key == ord('c'):
        if len(face_locations) == 0:
            print("No faces detected to capture!")
        else:
            print(f"Captured {len(face_locations)} face(s)!")
            for i, face_loc in enumerate(face_locations):
                top, right, bottom, left = [coord * 4 for coord in face_loc]

                face_width = right - left
                face_height = bottom - top

                # Center of detected face
                face_center_x = (left + right) // 2

                # Make the crop approximately 3:4
                crop_width = int(face_width * 3.0)
                crop_height = int(crop_width * 4 / 3)

                # Position face around the upper-middle of the portrait
                crop_left = face_center_x - crop_width // 2
                crop_top = top - int(face_height * 0.7)

                crop_right = crop_left + crop_width
                crop_bottom = crop_top + crop_height

                # Shift crop back inside the frame
                if crop_left < 0:
                    crop_right -= crop_left
                    crop_left = 0

                if crop_right > frame.shape[1]:
                    shift = crop_right - frame.shape[1]
                    crop_left -= shift
                    crop_right = frame.shape[1]

                if crop_top < 0:
                    crop_bottom -= crop_top
                    crop_top = 0

                if crop_bottom > frame.shape[0]:
                    shift = crop_bottom - frame.shape[0]
                    crop_top -= shift
                    crop_bottom = frame.shape[0]

                # Final safety limits
                crop_left = max(0, crop_left)
                crop_top = max(0, crop_top)
                crop_right = min(frame.shape[1], crop_right)
                crop_bottom = min(frame.shape[0], crop_bottom)

                face_image = frame[crop_top:crop_bottom, crop_left:crop_right]
                
                if face_image.size > 0:
                    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
                    filename = f"{save_folder}/face_{timestamp}.jpg"
                    cv2.imwrite(filename, face_image)
                    
                    # Pop up the resultant face in a new window
                    window_title = f"Captured Face {i+1}"
                    cv2.imshow(window_title, face_image)
                    
    # 3. Press 's' to Capture the full screen frame
    elif key == ord('s'):
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{save_folder}/full_screen_{timestamp}.jpg"
        cv2.imwrite(filename, frame) 
        print(f"Full screen captured and saved to {filename}")

# Clean up windows and network stream
cap.release()
cv2.destroyAllWindows()
export type Student = { id: string; name: string; sid: string; dept: string; sem: number; att: number; cr: number; status: "On Track" | "Need Attention" | "Monitor" };
export const DEPTS = ["CSE", "IT", "ECE", "ME", "EE", "CE"];
const names = ["Arjun Sen","Priya Roy","Rahul Das","Ananya Dutta","Amit Verma","Sneha Pal","Riya Sharma","Kunal Mitra","Ishita Ghosh","Rohan Bose","Meera Nair","Sourav Saha","Tanya Kapoor","Vikram Singh","Debjani Roy","Aditya Rao","Pooja Iyer","Nikhil Jain","Sayan Paul","Ritika Sen"];
const att = [84,91,68,87,72,76,92,80,88,65,90,74,85,79,93,71,86,82,69,89];
const cr = [67,82,51,71,58,62,85,60,74,49,78,55,70,64,88,57,72,66,46,80];
export const seedStudents: Student[] = names.map((name, i) => ({
  id: String(i + 1), name, sid: `STU-2026-${1048 + i}`, dept: DEPTS[i % 6], sem: (i % 4) * 2 + 1,
  att: att[i], cr: cr[i], status: att[i] < 70 ? "Need Attention" : att[i] < 80 ? "Monitor" : "On Track",
}));
export const statusStyle: Record<string, string> = {
  "On Track": "bg-emerald-50 text-emerald-700", "Need Attention": "bg-red-50 text-red-700", Monitor: "bg-amber-50 text-amber-700",
};
export const pctColor = (n: number) => (n >= 80 ? "text-emerald-600" : n >= 70 ? "text-amber-600" : "text-red-600");

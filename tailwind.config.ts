import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: "#0B1F36", surface: "#F5F7FB", brand: "#2563EB" }, fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] } } },
  plugins: [],
};
export default config;

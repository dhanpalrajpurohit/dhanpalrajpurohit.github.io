import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["wg77xg-5173.csb.app"], // 👈 use your sandbox host
  },
});

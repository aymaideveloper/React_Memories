// vite.configs.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/React_Memories/" : "/",
  // Use "/React_Memories/" base for production (GitHub Pages), "/" for development
  plugins: [react(), eslint()],
}));

// npm install eslint --save-dev
// npm install eslint@8.56.0 --save-dev
// npm install vite-plugin-eslint --save-dev
// npm install eslint-config-react-app --save-dev

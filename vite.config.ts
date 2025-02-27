import { sentryVitePlugin } from "@sentry/vite-plugin";
/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sentryVitePlugin({
      org: "nari-studio",
      project: "bible",
    }),
  ],
  base: "/",
  // test: {
  //   environment: "jsdom",
  //   globals: true,
  //   setupFiles: ["./src/setupTests.ts"],
  // },

  build: {
    sourcemap: true,
  },
});

/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ["jotai/babel/preset"],
      },
    }),
    visualizer({ gzipSize: true }),
    splitVendorChunkPlugin(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/vitest.setup.ts"],
  },
});

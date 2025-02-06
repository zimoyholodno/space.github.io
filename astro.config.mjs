import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import FullReload from "vite-plugin-full-reload";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks()],
  trailingSlash: "never",
  devToolbar: { enabled: false },
  outDir: "build",
  build: {
    format: "file",
    inlineStylesheets: "never",
    assets: "js/bundle",
  },
  scopedStyleStrategy: "class",
  vite: {
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      minify: false,
      rollupOptions: {
        output: {
          hashCharacters: "hex",
          assetFileNames: ({ name }) => {
            if (name.includes("style")) return "css/custom-style.css";
            if (name.includes("css")) return "css/[name].css";
            if (name.includes("js")) return "js/name-[hash].js";
            return "other/[name]-[hash][extname]";
          },
          entryFileNames: ({ name }) => {
            if (name.includes("hoisted")) return "js/entry/[name]-[hash].js";
            return "js/entry/[name].js";
          },
        },
      },
    },
    css: {
      devSourcemap: true,
      modules: false,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/mixins.scss";',
        },
      },
    },
    plugins: [FullReload(["public/js/**/*.js"])],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// Routes to pre-render to static HTML at build time so crawlers, AI
// agents, and link-preview bots see real content (not the empty SPA shell).
const PRERENDER_ROUTES = [
  "/",
  "/what-is-squirrelling",
  "/privacy-policy",
  "/terms-of-service",
  "/payment-security",
  "/verify-email",
  "/delete-account",
  "/budget-calculator",
  "/round-up-calculator",
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 4000,
          maxConcurrentRoutes: 2,
          headless: true,
          executablePath:
            process.env.PUPPETEER_EXECUTABLE_PATH ||
            "/bin/chromium" ||
            undefined,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));

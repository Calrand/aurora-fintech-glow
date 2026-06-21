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
        // JSDOM renderer works on any Node host (including cPanel shared
        // hosting) — no Chromium binary required, unlike puppeteer.
        renderer: "@prerenderer/renderer-jsdom",
        rendererOptions: {
          renderAfterTime: 5000,
          maxConcurrentRoutes: 1,
        },
        postProcess(renderedRoute: {
          route: string;
          html: string;
        }) {
          // Strip the loading-screen markup if it got captured before the
          // real page rendered, so crawlers never see only "Loading...".
          renderedRoute.html = renderedRoute.html.replace(
            /<div class="fixed inset-0 bg-fintech-dark[\s\S]*?Loading your financial future\.\.\.<\/p><\/div>/,
            ""
          );
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

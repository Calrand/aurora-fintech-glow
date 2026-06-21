import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

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
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 6000,
          maxConcurrentRoutes: 2,
          headless: true,
          // Let puppeteer find its bundled Chrome (downloaded via the
          // `puppeteer` package's postinstall). Falls back to a system
          // chromium binary if PUPPETEER_EXECUTABLE_PATH is set.
          executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
          args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
          ],
        },
        postProcess(renderedRoute: { route: string; html: string }) {
          // Strip the loading screen if it was still on-screen at capture.
          renderedRoute.html = renderedRoute.html.replace(
            /<div class="fixed inset-0 bg-fintech-dark[\s\S]*?Loading your financial future\.\.\.<\/p><\/div>/,
            ""
          );
        },
      }),
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "dist", emptyOutDir: true },
}));

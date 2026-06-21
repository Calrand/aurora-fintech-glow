import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://squirrelll.ing";

const ROUTE_META: Record<
  string,
  { title: string; description: string; h1: string }
> = {
  "/": {
    title: "Squirrelll.ing - Community Based Micro-Fintech Platform",
    description: "Save & Invest using micro-fintech with Squirrelll.ing.",
    h1: "Squirrelll.ing - Community Based Micro-Fintech Platform",
  },
  "/what-is-squirrelling": {
    title: "What is Squirrellling? | Squirrelll.ing",
    description:
      "Learn what Squirrellling is and how our community-based micro-fintech platform helps you save and invest.",
    h1: "What is Squirrellling?",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Squirrelll.ing",
    description: "How Squirrelll.ing collects, uses, and protects your data.",
    h1: "Privacy Policy",
  },
  "/terms-of-service": {
    title: "Terms of Service | Squirrelll.ing",
    description: "The terms governing your use of Squirrelll.ing.",
    h1: "Terms of Service",
  },
  "/payment-security": {
    title: "Payment Security | Squirrelll.ing",
    description:
      "How Squirrelll.ing keeps your payments and financial data secure.",
    h1: "Payment Security",
  },
  "/verify-email": {
    title: "Verify Email | Squirrelll.ing",
    description: "Verify your email address for your Squirrelll.ing account.",
    h1: "Verify Email",
  },
  "/delete-account": {
    title: "Delete Account | Squirrelll.ing",
    description: "Request deletion of your Squirrelll.ing account.",
    h1: "Delete Account",
  },
  "/budget-calculator": {
    title: "Free Budget Calculator | Squirrelll.ing",
    description:
      "Plan your monthly budget with our free, easy-to-use budget calculator.",
    h1: "Budget Calculator",
  },
  "/round-up-calculator": {
    title: "Round-Up Savings Calculator | Squirrelll.ing",
    description:
      "See how much you could save by rounding up everyday purchases with Squirrelll.ing.",
    h1: "Round-Up Savings Calculator",
  },
};

function staticSeoPlugin(): Plugin {
  return {
    name: "static-seo-routes",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(distDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const baseHtml = fs.readFileSync(indexPath, "utf8");

      for (const [route, meta] of Object.entries(ROUTE_META)) {
        const canonical = `${SITE}${route === "/" ? "/" : route}`;
        let html = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
          .replace(
            /<meta\s+name="description"[^>]*>/,
            `<meta name="description" content="${meta.description}">`
          )
          .replace(
            /<meta\s+property="og:title"[^>]*>/,
            `<meta property="og:title" content="${meta.title}">`
          )
          .replace(
            /<meta\s+name="twitter:title"[^>]*>/,
            `<meta name="twitter:title" content="${meta.title}">`
          )
          .replace(
            /<meta\s+property="og:description"[^>]*>/,
            `<meta property="og:description" content="${meta.description}">`
          )
          .replace(
            /<meta\s+name="twitter:description"[^>]*>/,
            `<meta name="twitter:description" content="${meta.description}">`
          )
          .replace(
            /<meta\s+property="og:url"[^>]*>/,
            `<meta property="og:url" content="${canonical}">`
          );

        // Inject canonical + crawler-visible H1 content inside #root.
        html = html.replace(
          "</head>",
          `<link rel="canonical" href="${canonical}" /></head>`
        );
        html = html.replace(
          '<div id="root"></div>',
          `<div id="root"><h1>${meta.h1}</h1><p>${meta.description}</p></div>`
        );

        if (route === "/") {
          fs.writeFileSync(indexPath, html);
        } else {
          const outDir = path.join(distDir, route.replace(/^\//, ""));
          fs.mkdirSync(outDir, { recursive: true });
          fs.writeFileSync(path.join(outDir, "index.html"), html);
        }
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" && staticSeoPlugin(),
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "dist", emptyOutDir: true },
}));


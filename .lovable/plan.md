## Plan: make Squirrelll.ing crawlable like fhse.world, without changing the visible site

### What will stay the same
- The live site UI, branding, colors, logos, routes, calculators, waitlist sections, and page layout will remain the same.
- Users with JavaScript enabled should see the exact same React app experience.
- Existing SEO files remain: `sitemap.xml`, `robots.txt`, `llms.txt`, and OG image.

### Why the current result is still failing
- `fhse.world` returns real page content directly in the initial HTML.
- `squirrelll.ing` currently returns only the loading screen in initial HTML, so non-browser crawlers still cannot read the content.
- The current prerender setup is snapshotting too early / snapshotting the loader instead of the final page.

### Implementation steps
1. **Remove the blocking loader from prerendered/static output**
   - Change startup logic so production/prerender crawlers never snapshot `Loading your financial future...`.
   - Keep the loading screen only for normal browser runtime if needed.

2. **Make the build output contain real HTML per route**
   - Adjust the prerender configuration so each important route outputs static HTML with actual page body content.
   - Ensure the app signals readiness only after the actual page is rendered, not while the loader is visible.

3. **Preserve client-side hydration**
   - Keep React hydration working after crawlers receive static HTML.
   - Avoid hydration mismatches by removing the temporary hardcoded fallback approach or making it compatible with prerendered output.

4. **Validate against both sites**
   - Fetch `squirrelll.ing` style output locally/preview after the change and confirm markdown extraction shows real Squirrelll.ing content, not just metadata or loader text.
   - Confirm routes like `/what-is-squirrelling`, `/budget-calculator`, and `/round-up-calculator` also expose body text.

5. **Republish after implementation**
   - Since this affects deployed frontend HTML, the site must be republished/updated for the custom domain cache to refresh.

### Technical direction
- Keep the app on Vite + React, but fix the static prerender pipeline so the deployed output behaves like `fhse.world`: crawlers get rendered HTML immediately.
- The design does not need to be rebuilt; this is an output/rendering-layer fix, not a redesign.
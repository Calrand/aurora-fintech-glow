
# Goal

Keep the current live site fully intact while building and testing a new "Squirrellling philosophy-first" version you can preview, compare, and either promote or discard — with zero risk to what's live today.

You have three viable ways to do this. Pick one; I'll implement it.

---

## Option A — Remix into a separate project (safest, fully isolated) — RECOMMENDED

Create a full copy of this project as a new Lovable project (a "remix"). The current project keeps serving `squirrelll.ing` unchanged. The remix gets its own preview URL (e.g. `philosophy-squirrelll.lovable.app`) where I rebuild the site around the new philosophy.

- Zero risk to the live site — different project, different deploy, different domain.
- You can share the remix URL for feedback without touching production.
- If you approve, we either: (a) point the custom domain at the remix, or (b) port the approved changes back into this project.
- Downside: future content updates (new FAQs, articles, etc.) have to be made in whichever project you decide is "canonical" — the two don't auto-sync.

**How to start it:** you do this from the Lovable UI — right-click this project in the sidebar (or use the ⋯ menu) → **Remix**. Then open the new project and tell me "implement the philosophy plan here" and I'll build it out per `.lovable/plan.md`.

---

## Option B — Parallel routes inside this project (already partially done)

Keep the current homepage at `/` untouched. Build the entire new philosophy version under a `/v2/*` route tree inside this same project:

- `/v2` — new philosophy-led homepage
- `/v2/daily-pool` — flagship page
- `/v2/what-is-squirrellling` — concept home
- `/v2/ask`, `/v2/money-guides`, `/v2/concepts`, `/v2/research`, `/v2/about`
- All `/v2/*` routes get `noindex, nofollow` and are added to `Disallow:` in `robots.txt` (same pattern already used for `/test-page`).

You'd preview at `squirrelll.ing/v2`. When approved, we swap `/v2/*` → `/*` in one pass.

- Pros: single project, one deploy, easy to A/B compare side-by-side by opening two tabs.
- Cons: doubles the route count in the codebase temporarily; `staticSeoPlugin` + sitemap generator need `/v2/*` explicitly excluded from indexing (I'll handle it).

---

## Option C — GitHub branch

If you connect this project to GitHub (Plus (+) menu → GitHub → Connect project), Lovable has experimental branch-switching (Account Settings → Labs → GitHub Branch Switching). I could then work on a `philosophy` branch while `main` stays untouched, and you'd preview each branch independently.

- Pros: proper version-control isolation; merge when ready.
- Cons: branch switching is still experimental in Lovable; less friendly than A or B if you're not comfortable with Git.

---

## My recommendation

**Option A (Remix)** if you want the strongest guarantee that nothing on the live site can break, and you're okay clicking Remix in the UI yourself.

**Option B (`/v2/*` routes)** if you'd rather stay in this one project and want me to do everything from here without you touching the Lovable UI. It's the fastest path to a testable philosophy site today.

---

## Which do you want?

Reply with **A**, **B**, or **C** (or tell me a variation). If **B**, I'll follow `.lovable/plan.md` and build the full philosophy-first experience under `/v2/*` with noindex/robots protection, leaving the current site 100% untouched.

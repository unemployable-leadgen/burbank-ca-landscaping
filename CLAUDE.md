# CLAUDE.md — Landscaping (lead-gen site)

## What this project is
A local lead-generation website for **landscaping in Burbank, California**.
Static site, rented/handed to a local business owner later. Built to
rank in organic search (no reliance on GMB initially) and convert
visitors into calls.

## Build constraints (important)
- **Static HTML/CSS only. No framework** (no React/Next.js). A small
  amount of vanilla JS is fine for the mobile menu and contact form
  only.
- Keep pages fast and lightweight (small images, minimal JS). Page
  speed is an SEO factor.
- Deployed on Cloudflare (Workers static assets) later; keep output as
  plain static files.

## The rules live in ./shared-rules (git submodule — DO NOT edit here)
All writing, SEO, and structure rules are in the `shared-rules/`
submodule. Read them before writing anything. They are the source of
truth:
- `shared-rules/project-instructions.md` — the master rules (limits,
  style, banned phrases, banned punctuation, SEO). Numbers live here.
- `shared-rules/content-writing-rules.md` — HOW to write pages.
- `shared-rules/homepage-structure.md` — exact homepage layout.
- `shared-rules/checklist-pre-output.md` — run this before delivering
  any page.
- `shared-rules/google-trends-rules.md` — service-list + keyword
  validation.
- `shared-rules/niche-city-criteria.md` — niche/city selection
  criteria.
- `shared-rules/new-site-setup.md` — repo/submodule/CLAUDE.md setup
  for a brand-new site.

If a rule and this file ever disagree on a NUMBER,
`project-instructions.md` wins. Do not restate the numbers in this
file.

## Site specifics
- **Service:** Landscaping (residential focus; include related
  sub-services found via competitor research; validate every
  candidate service with Google Trends before adding a page).
- **City:** Burbank, California (San Fernando Valley city, hot dry
  summers and mild winters, mostly single-family homes on established
  lots with older, sometimes overgrown or drought-stressed
  landscaping, strong local emphasis on water-wise/drought-tolerant
  design given SoCal water restrictions, mix of hillside and flat
  residential lots).
- **Primary keyword pattern:** "landscaping Burbank CA" (primary
  first in title tag; H1 slightly different).
- **Pages:** homepage + one page per validated service. Follow the
  service page structure in content-writing-rules.md.

## Related repos (never copy content from these — reference structure only)
- Burbank, CA window cleaning site (sibling repo, same city, different
  trade). Different trade category with no common bundling pattern
  with landscaping, so this is unlikely to cannibalize it, but flagged
  per the user's request if competitor research suggests otherwise for
  Burbank specifically.
- Any other window cleaning or house painting site in this project.
If this site's CSS is structurally cloned from any sibling repo,
follow "Content Originality" in project-instructions.md and the
sibling-repo diff check in checklist-pre-output.md: structure/CSS
reuse is fine, but written content, palette, and logo must be
independently derived, and verified with an actual text diff before
delivery, not just a mental check.

## Workflow for this build
1. Read the shared-rules files first (especially
   content-writing-rules.md and homepage-structure.md).
2. Do competitor content research per content-writing-rules.md: average
   broad-area top rankers + any same-city competitors. Original content
   only.
3. Build the homepage to homepage-structure.md.
4. Build each validated service page to the service-page structure.
5. Run checklist-pre-output.md against every page before considering it
   done.

## Hard guardrails (from project-instructions.md — never violate)
- No em dashes anywhere. Use a period or comma.
- No banned phrases (see project-instructions.md).
- All content original, never copy competitor text.
- No keyword stuffing.
- End every page with a clear call to action.

## Current placeholders (flag until replaced)
- Phone number: (847) 242-8940 (placeholder, same as other rented sites)
- Domain: burbanklandscaping.com (placeholder, city+niche.com pattern)
- Formspree form action: YOUR_FORM_ID (placeholder, real endpoint to
  follow once the site is planned)
- Photos: placeholder blocks only, with image-prompts.md documenting an
  AI generation prompt, target dimensions, and alt text per placeholder

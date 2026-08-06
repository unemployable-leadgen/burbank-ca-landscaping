# Image Prompts

**Status: fulfilled.** All 21 images below are live in `images/` as
optimized JPEGs (heroes resized to 1600x900, inline/detail shots to
700x933, service card thumbnails cropped to 600x450), wired into
their pages as real `<img>` tags. The prompts and alt text are kept
here as documentation and in case any single image needs
regenerating later. The original full-resolution AI generations are
preserved in `/originals/` (git-ignored, not deployed) if you want to
recrop or re-export any of them differently.

Each entry below lists the file path the site expects, target
dimensions, an AI image-generation prompt, and the alt text used.

Style guardrails used for every prompt: photorealistic, natural
daylight, generic "trusted local contractor" look, no readable text
or logos in-frame, no people's faces in close-up (keep it
property-focused).

---

## 1. Hero photo (homepage)

- **File path:** `images/landscaping-burbank-ca-hero.jpg`
- **Target dimensions:** 1600x900 (16:9, full-bleed banner)
- **Prompt:** "Photorealistic wide-angle photo of a freshly landscaped
  backyard in a Southern California suburb. Drought-tolerant
  landscaping: native grasses, gray-green succulents, decomposed
  granite pathway, a few olive or Mediterranean-style trees for shade.
  Single-family home with stucco exterior visible in the background,
  clear blue sky, warm late-afternoon sunlight, no people, no readable
  text or logos."
- **Alt text:** "drought-tolerant landscaping in a Burbank California backyard"

## 1b. Homepage services grid card thumbnails (6 images)

Each of the 6 service cards on the homepage needs a small 4:3
thumbnail so the card isn't text-only. These reuse the same source
photo as that service's own hero photo (see entries 4-9 below),
just cropped/resized to 4:3 instead of 16:9, no separate prompt
needed. File paths:

- `images/landscape-design-burbank-ca-card.jpg` (crop of entry 4's hero)
- `images/drought-tolerant-landscaping-burbank-ca-card.jpg` (crop of entry 5's hero)
- `images/artificial-turf-burbank-ca-card.jpg` (crop of entry 6's hero)
- `images/sprinkler-repair-burbank-ca-card.jpg` (crop of entry 7's hero)
- `images/sod-installation-burbank-ca-card.jpg` (crop of entry 8's hero)
- `images/lawn-care-maintenance-burbank-ca-card.jpg` (crop of entry 9's hero)

Alt text on each matches that service's hero alt text (see the
corresponding entry below).

## 2. Inline supporting photo (homepage, intro column)

- **File path:** `images/drought-tolerant-landscaping-irrigation-burbank-ca.jpg`
- **Target dimensions:** 700x933 (3:4 portrait)
- **Prompt:** "Photorealistic close-up photo of a black drip irrigation
  line running through a mulched garden bed next to drought-tolerant
  plants (agave, lavender, ornamental grasses). Shallow depth of
  field, natural daylight, no people, no readable text or logos."
- **Alt text:** "drip irrigation line in a drought-tolerant landscaping project in Burbank California"

## 3. Open Graph / social share image (homepage)

- **File path:** `images/landscaping-burbank-ca-og.jpg`
- **Target dimensions:** 1200x630
- **Prompt:** Can reuse a cropped/resized version of the hero photo
  (`landscaping-burbank-ca-hero.jpg`) once generated, framed to keep the
  landscaped yard centered at this wider aspect ratio. If generating
  separately: same prompt as the hero photo above, composed for a
  1200x630 crop.
- **Alt text:** N/A (social preview image, no alt attribute needed)

---

## 4. Landscape Design & Installation (service page)

- **Hero file path:** `images/landscape-design-burbank-ca-hero.jpg` (1600x900, 16:9)
- **Hero prompt:** "Photorealistic wide-angle photo of a newly installed residential landscape design: mixed planting beds, a stone or paver pathway, defined lawn edge, single-family home with stucco exterior in the background. Southern California suburb, natural daylight, no people, no readable text or logos."
- **Hero alt text:** "landscape design and installation project in a Burbank California front yard"
- **Inline file path:** `images/landscape-design-plan-burbank-ca.jpg` (700x933, 3:4 portrait)
- **Inline prompt:** "Photorealistic photo of a hand-drawn or printed landscape design plan held or laid over a view of the actual yard it corresponds to, showing the transition from plan to real planting. Natural daylight, no people's faces, no readable text beyond generic plan lines."
- **Inline alt text:** "landscape design plan for a Burbank California yard"

## 5. Drought-Tolerant Landscaping & Turf Removal (service page)

- **Hero file path:** `images/drought-tolerant-landscaping-burbank-ca-hero.jpg` (1600x900, 16:9)
- **Hero prompt:** "Photorealistic wide-angle photo of a drought-tolerant front yard: native grasses, gray-green succulents, decomposed granite groundcover, a few Mediterranean-style shrubs. Southern California suburb, single-family home in background, clear sky, no people, no readable text or logos."
- **Hero alt text:** "drought-tolerant landscaping with native plants in a Burbank California yard"
- **Inline file path:** `images/drought-tolerant-landscaping-plants-burbank-ca.jpg` (700x933, 3:4 portrait)
- **Inline prompt:** "Photorealistic close-up photo of native and Mediterranean drought-tolerant plants (agave, lavender, ornamental grasses) in a mulched bed. Shallow depth of field, natural daylight, no people, no readable text."
- **Inline alt text:** "close-up of native drought-tolerant plants in a Burbank landscaping project"

## 6. Artificial Turf Installation (service page)

- **Hero file path:** `images/artificial-turf-burbank-ca-hero.jpg` (1600x900, 16:9)
- **Hero prompt:** "Photorealistic wide-angle photo of a freshly installed artificial turf lawn in a backyard, clean seams, realistic green blades, single-family home visible in background. Natural daylight, no people, no readable text or logos."
- **Hero alt text:** "artificial turf installation in a Burbank California backyard"
- **Inline file path:** `images/artificial-turf-closeup-burbank-ca.jpg` (700x933, 3:4 portrait)
- **Inline prompt:** "Photorealistic close-up photo of realistic artificial turf blades and infill, showing texture and seam detail. Natural daylight, no people, no readable text."
- **Inline alt text:** "close-up of pet-friendly artificial turf blades installed in Burbank California"

## 7. Sprinkler & Irrigation Repair (service page)

- **Hero file path:** `images/sprinkler-repair-burbank-ca-hero.jpg` (1600x900, 16:9)
- **Hero prompt:** "Photorealistic wide-angle photo of a technician kneeling in a residential lawn repairing a sprinkler head, tools nearby, single-family home in background. Natural daylight, face not prominently visible, no readable text or logos."
- **Hero alt text:** "sprinkler and irrigation repair technician working in a Burbank California yard"
- **Inline file path:** `images/irrigation-controller-burbank-ca.jpg` (700x933, 3:4 portrait)
- **Inline prompt:** "Photorealistic photo of a modern smart irrigation controller mounted on an exterior stucco wall near a garden hose bib. Natural daylight, no people, no readable text on the controller display beyond generic icons."
- **Inline alt text:** "smart irrigation controller installed on an exterior wall in Burbank California"

## 8. Sod Installation (service page)

- **Hero file path:** `images/sod-installation-burbank-ca-hero.jpg` (1600x900, 16:9)
- **Hero prompt:** "Photorealistic wide-angle photo of a freshly installed, evenly green sod lawn in a residential front yard, visible seam lines, single-family home in background. Natural daylight, no people, no readable text or logos."
- **Hero alt text:** "freshly completed sod installation in a Burbank California yard"
- **Inline file path:** `images/sod-seams-burbank-ca.jpg` (700x933, 3:4 portrait)
- **Inline prompt:** "Photorealistic close-up photo of freshly laid sod rolls with tight, brick-pattern seams, showing installation detail. Natural daylight, no people, no readable text."
- **Inline alt text:** "close-up of new sod seams in a Burbank California lawn installation"

## 9. Lawn Care & Maintenance (service page)

- **Hero file path:** `images/lawn-care-maintenance-burbank-ca-hero.jpg` (1600x900, 16:9)
- **Hero prompt:** "Photorealistic wide-angle photo of a landscaping crew member mowing a well-kept residential lawn, single-family home in background. Natural daylight, face not prominently visible, no readable text or logos."
- **Hero alt text:** "lawn care and maintenance crew mowing a yard in Burbank California"
- **Inline file path:** `images/lawn-edging-burbank-ca.jpg` (700x933, 3:4 portrait)
- **Inline prompt:** "Photorealistic close-up photo of a crew member's hands and edging tool creating a clean line along a lawn edge next to a walkway. Natural daylight, no readable text."
- **Inline alt text:** "crew member edging a lawn along a walkway in Burbank California"

---

**Still needed:** the Google Map embed in the footer is not an
AI-generated photo, it's a real embed that goes live once the Google
Business Profile is approved. No prompt needed for that block.

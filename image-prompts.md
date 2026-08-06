# Image Prompts

Placeholder blocks are used on the site until real photography is
generated and dropped in. Each entry below lists the file path the
site expects, target dimensions, an AI image-generation prompt, and
the alt text to pair with the photo once it replaces the placeholder.

Style guardrails for every prompt: photorealistic, natural daylight,
generic "trusted local contractor" look, no readable text or logos
in-frame, no people's faces in close-up (keep it property-focused).

---

## 1. Hero photo (homepage)

- **File path:** `images/landscaping-burbank-ca-hero.jpg`
- **Target dimensions:** 1920x1080 (16:9, full-bleed banner)
- **Prompt:** "Photorealistic wide-angle photo of a freshly landscaped
  backyard in a Southern California suburb. Drought-tolerant
  landscaping: native grasses, gray-green succulents, decomposed
  granite pathway, a few olive or Mediterranean-style trees for shade.
  Single-family home with stucco exterior visible in the background,
  clear blue sky, warm late-afternoon sunlight, no people, no readable
  text or logos."
- **Alt text:** "drought-tolerant landscaping in a Burbank California backyard"

## 2. Inline supporting photo (homepage, intro column)

- **File path:** `images/drought-tolerant-landscaping-irrigation-burbank-ca.jpg`
- **Target dimensions:** 900x1200 (3:4 portrait)
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

**Still needed:** the Google Map embed in the footer is not an
AI-generated photo, it's a real embed that goes live once the Google
Business Profile is approved. No prompt needed for that block.

More entries will be added here as each service page is built.

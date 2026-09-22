# Mary Ann EliteProperties — Site Extraction Package

This package has everything I pulled from https://maryanneliteproperties.com/ by crawling every page reachable from the main navigation and homepage project cards.

## Files in this package
1. **01-content-extraction.md** — Full text/content of every page (Home, About, Services, Contact, Privacy Policy), page by page, in the order they appear on-screen, plus a summary of site structure and data-quality issues to flag.
2. **02-projects.md** — Deep-dive on all 6 property/project landing pages hosted on the domain (Star Luxoria, Star Highway City/"Star Luxor", Vaigai Enclave, Vibul Avenue, Guru Nagar, Meenakshi Nagar), including their unique copy, pricing, plot sizes, and location-highlight tables.
3. **03-links-and-media.md** — Every internal page URL, every external link (Canva brochures, Google Drive PDFs, WhatsApp CTAs, socials), every image asset URL used on the site, and the Google Maps query strings used per project.

## About "plugins needed to extract"
No plugin was needed on my end — I read the live pages directly and pulled the text, links, and image URLs straight from the rendered HTML. Nothing to install for that part.

If your question was instead about **what WordPress plugins the current site itself runs on** (useful if you're rebuilding within WordPress rather than a fresh stack), here's what I could identify from the page source:
- **Elementor** (v3.27.7) — the page builder used to design every page
- **WPForms Lite** — powers the "Enquire Now" / "Get In Touch" / "Schedule A Site Visit" contact forms

If you tell me what stack you're rebuilding in (WordPress again, or something like Next.js/React, Webflow, Shopify, etc.), I can:
- Recommend the right plugin/tool stack for that platform (e.g. for WordPress: Elementor Pro + a proper forms plugin + an SEO plugin; for a custom build: a headless CMS, form backend like Formspree, etc.)
- Turn this content into ready-to-use page templates or an actual site draft (artifact/HTML) instead of just extracted text

## Data-quality issues found (worth fixing during the rebuild)
- Several homepage "View Details" project cards link to the wrong inner page (Jay Square and Ananthajith both point to the Star Luxor/Parapathi page instead of their own).
- The "/meenakshi-garden-poonjuthi/" URL actually shows "Guru Nagar/Kunnathur" content, not Meenakshi Garden content — genuine Meenakshi Garden (Poonjuthi) content only exists on a separate external Gamma microsite, not on the WordPress site.
- The Services page content (Web Design / Graphic Design / Content Writing) is unrelated generic agency template copy — not real-estate services — and its "Explore"/"Get In Touch" buttons don't go anywhere.
- The Privacy Policy page is still the default unedited WordPress placeholder text.
- The About page has a leftover reference to "Isha Homes" (a different company name) instead of Mary Ann EliteProperties.
- Every project's "Location Highlights" tables (schools/colleges/hospitals/entertainment/transport) are identical across all 6 projects and reference Chennai-area landmarks (IIT Madras – Thaiyur, Kovalam Beach, Vandalur) rather than Madurai — these look like unedited template placeholder data.
- Some "brochure" buttons actually link to WhatsApp chat instead of an actual PDF.

Full detail on each of these is inline in the files above, flagged with ⚠.

## Next steps I can help with
- Fetch the external Meenatchi Garden (Poonjuthi) Gamma microsite content too, so it's fully complete
- Download/inspect specific images directly rather than just linking to them
- Draft the new website (as an HTML page you can preview, or as copy organized into a doc/spreadsheet) once you tell me the target platform and whether you want the flagged issues corrected in the new version

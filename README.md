# Graphene Power BD

Static industrial website built with Astro. Run `npm ci`, `npm run dev`, `npm run build`. Deploy the **contents** of dist/ to cPanel public_html after backing up existing files. No runtime server or database.

## Content
Product families and scope follow the public Powerbreeze reference (https://www.powerbreezebd.com/products/ and https://www.powerbreezebd.com/services/), rewritten as general equipment information. Confirm Graphene product availability, supplier authorization, specifications, contact details, logos, photos, certificates and client records before publishing. V2 uses publicly linked Powerbreeze reference photos for local design review, not verified Graphene inventory. These third-party URLs can break; get permission and replace with authorized, optimized local copies before deployment. Categories without accessible photos deliberately display a text-only tile. Legacy SVGs are not used in the visible product UI. The inquiry tool downloads a local text brief; it does not submit information.

## Architecture
src/data/catalog.ts drives catalogue and static detail pages; src/data/pages.ts drives overview pages. Shared Site layout and site.css define the graphite/lime visual system. No external runtime dependencies beyond Astro are required for this initial version. React, Tailwind and GSAP can be introduced when an interaction requires them.

## Verification
Run npm ci and npm run build; inspect dist routes and test navigation, search, filter, mobile menu and inquiry download in browser. Do not deploy unverified business content.

## V3 visual direction — Energy in motion
A midnight-indigo, electric-cyan and apricot design with organic wave boundaries, sculpted photographic masks, orbit link, asymmetric photo editorial and interactive equipment directory. Product search and filter routes remain static. Existing external reference photography remains subject to permissions, availability and replacement with approved local images. No new dependencies.

## V4
Source-backed facts for all 12 equipment families, tables for tray dimensions, generator and cooling tower series, source links, custom scrollbar and page progress rail. Cable tray dimensions checked against the reference PDF. Generator headline and series discrepancy disclosed. Graphene supplier availability and certification are unverified. Original larger photos could not be accessed; existing thumbnails are kept at small sizes and missing imagery is not fabricated. No new runtime dependencies.

## V5 theme and motion
Three editable palette colors, curated presets, reset, early restoration from origin-local storage, and cross-tab synchronization. All existing CSS color literals and inline homepage SVG colors are tokenized; photos retain their natural colors. Palette derivation preserves original relative luminance, so very dark/light user choices are adapted to readable UI shades. Native same-origin view transitions and scroll-linked enhancements are progressive and disabled for reduced-motion preferences. No new dependencies.

## Visual catalogue V6
All existing named equipment configurations have individual tiles at /products/gallery/ and on family pages. Manufacturer/reference images are sourced and labeled with photo/render/thumbnail distinctions. Some entries have no verified matching photo: they deliberately link to the source rather than display unrelated imagery. The family-level ventilation example is Systemair, not VENCO. Third-party images are remote; permission, local caching and higher-resolution replacements are required before production publication. The actual photographed product is not guaranteed to be Graphene inventory.

## Original Graphene catalogues
All customer-facing brochure downloads are original Graphene Power BD PDF selection guides, including 12 family brochures and one full portfolio. Competitor catalogue links have been removed from the public document UI; internal research provenance is in docs/catalogue-research.json. These are indicative selection documents, not certified datasheets, quotations, authorized dealership claims or stock guarantees. Reference photos remain separately credited and require permission before commercial publication.

## Semantic equipment image mapping
All 89 entries have a curated image association. Product-type, family and system-context examples are labeled separately, with photo credit and source links. Some accessories or special configurations are shown in the context of the installed equipment, not as exact product photos. New Wikimedia photos have license attribution. External image availability and third-party commercial permissions remain subject to verification; no invented product images. Compatible alternates are used on load errors when available. The cable tray family now has a real installation photo.

## Anime.js motion sequences
Anime.js 4.2.2 is pinned with its lockfile. `src/lib/sequence.ts` orchestrates staggered hero title masks, photographic reveal, SVG circuit drawing, animated grid and morphing wave, viewport-triggered section/card entrances. Existing navigation, filters, theme, scrollbar and pointer remain functional. Reduced-motion preferences stop and revert animation; decorative loops pause outside the hero and when the tab is hidden. The static build bundles the library with Astro/Vite; no runtime CDN or server required. Research: https://animejs.com/ and its Timeline, Stagger and SVG documentation.

The engineering-story energy trace uses Anime.js onScroll with playback synchronized to viewport progress, reverses naturally on upward scroll, and is reverted if reduced motion is enabled.

## V10 kinetic motion
Added an original three-chapter scroll-led Energy Journey (desktop sticky scene, mobile/static chapter layout), a pointer-reactive hero light and layered parallax, image-mask reveals using Anime.js, interaction impulses and more pronounced entrance/page transitions. Motion preserves static navigation and reduced-motion fallback. No new dependencies.

## Navigation transitions (V10 baseline)
The approved V10 content motion is unchanged. Same-origin pages opt into browser-native cross-document view transitions: curved entrance masks, outgoing scene shrink, theme-colored energy gradient, independent header and direction-aware history transitions. Browsers without native support use a short themed curtain for regular internal page links, with a pre-paint sessionStorage handoff and automatic timeout recovery. Same-page anchors, external links, downloads, modified clicks, new tabs, filters and form behavior are not intercepted. Reduced motion bypasses the effect. No new dependency or runtime server.

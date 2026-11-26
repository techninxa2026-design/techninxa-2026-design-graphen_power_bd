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

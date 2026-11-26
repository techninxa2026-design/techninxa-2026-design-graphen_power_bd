# Graphene Power BD

Static industrial website built with Astro. Run `npm ci`, `npm run dev`, `npm run build`. Deploy the **contents** of dist/ to cPanel public_html after backing up existing files. No runtime server or database.

## Content
Product families and scope follow the public Powerbreeze reference (https://www.powerbreezebd.com/products/ and https://www.powerbreezebd.com/services/), rewritten as general equipment information. Confirm Graphene product availability, supplier authorization, specifications, contact details, logos, photos, certificates and client records before publishing. Equipment SVGs are original conceptual illustrations, not verified model imagery. The inquiry tool downloads a local text brief; it does not submit information.

## Architecture
src/data/catalog.ts drives catalogue and static detail pages; src/data/pages.ts drives overview pages. Shared Site layout and site.css define the graphite/lime visual system. No external runtime dependencies beyond Astro are required for this initial version. React, Tailwind and GSAP can be introduced when an interaction requires them.

## Verification
Run npm ci and npm run build; inspect dist routes and test navigation, search, filter, mobile menu and inquiry download in browser. Do not deploy unverified business content.

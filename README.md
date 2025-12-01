# Samay Raina Tour Sponsorship Site

## Overview
Single-page marketing site promoting sponsorship opportunities for Samay Raina's Still Alive Tour 2026. The project is a static HTML/CSS/JavaScript implementation enhanced with GSAP-powered motion design to highlight key content sections and drive conversions through embedded enquiry forms.

## Features
- Hero banner swaps between `desktop.jpg`, `tablet.jpg`, and `Phone.jpg`, fading in via GSAP for device-specific promo art.
- Sponsorship popup capturing the same five lead details via the identical city dropdown.
- About and Audience sections showcasing reach, demographics, and a feature portrait of Samay Raina.
- Interactive pricing selector that reveals package inclusions and venue capacities.
- Contact form now streamlined to the same five lead fields with quick contact actions.
- GSAP-driven hero timeline and ScrollTrigger scroll-based reveals.

## Feature Mapping
| Feature | Location | Description |
| ------- | -------- | ----------- |
| Hero Banner | `index.html` (`#hero`), `styles.css` (`.hero-section`, `.hero-image*`) | Responsive promotional artwork (desktop/tablet/phone) |
| Lead Capture Popup | `index.html` (`#popup-overlay`) | Entry popup prompting sponsorship enquiry submission |
| About Section | `index.html` (`#about`) | Stats, achievements, and highlights for Samay Raina |
| Audience & Tour Snapshot | `index.html` (`#audience`) | City list, target demographics, and benefits |
| Pricing Selector | `index.html` (`#packages`), `script.js` (`updatePricing`) | City/type selectors with dynamic inclusions list and venue capacities |
| Contact Section | `index.html` (`#contact`) | Streamlined form with consistent city dropdown plus quick contact actions |
| Global Styles | `styles.css` | Layout, typography, color palette, responsive rules |
| Animations | `script.js` (`initAnimations`) | GSAP hero timeline, ScrollTrigger scroll reveals |

## Setup & Usage
1. **Requirements:** Modern desktop or mobile browser. No build step or server dependency required.
2. **Local Preview (recommended):** Serve the folder via VS Code Live Server or any static server (`python -m http.server`), then open `http://localhost:8000`.
3. **Direct Open:** Double-click `index.html` to open in a browser (some browsers limit local font/CDN loading; a local server avoids this).
4. **Dependencies:** GSAP 3.12.5 + ScrollTrigger via CDN (see `<head>` of `index.html`). Ensure network access for CDN delivery.

## Current Status
- ✅ Page structure, styling, and forms load without errors.
- ✅ GSAP hero entrance animations run on initial load.
- ✅ ScrollTrigger-based reveals activate when plugin loads successfully.
- ⚠️ Scroll-based animations gracefully disable if ScrollTrigger CDN fails (user still sees full content).

## Animation Notes
- `script.js` registers ScrollTrigger inside a guarded setup; hero timeline always executes when GSAP is present.
- Scroll-based animations use `ScrollTrigger.batch` for staggered card reveals and individual triggers for section fades.
- Console logging (`[Animations]`) surfaces INFO/WARN/ERROR states for easier debugging.

## Testing Checklist
- Open the site and confirm the hero banner image fades into view.
- Scroll to About/Audience/Packages/Contact; ensure elements fade/flip in (when ScrollTrigger available).
- Select city and sponsorship type; verify pricing data (including venue capacity) updates correctly.
- Submit each form; an alert should confirm receipt, and forms should reset.

## Maintenance Notes
- Update this README after any feature, dependency, or animation changes.
- If introducing build tooling or additional dependencies, document version requirements and environment steps here.


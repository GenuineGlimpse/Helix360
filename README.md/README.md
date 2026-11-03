# Helix 360 Construction - WEDE5020 POE Part 2

**Live Site:** https://genuineglimpse.github.io/4.-Helix360_website/
**GitHub Repo:** https://github.com/genuineglimpse/4.-Helix360_website
**Student:** Boitshepo Phiri - ST10488869
**Module:** WEDE5020 - Web Development Introduction
**Date:** November 2026

---

## 1. Project Title
Helix 360 Construction - Residential, Commercial & Civil Portfolio Website

## 2. Student Information
- Name: Boitshepo Phiri
- Student Number: ST10488869
- Institution: IIE
- Module Code: WEDE5020

## 3. Project Overview (Complete)
Helix 360 Construction is a real construction company in Brits, North West. The website showcases 150+ completed projects in estates like Fountainbrook Estate, Sunway Estate, Seasons Golf Estate, Majakaneng. Includes 9 projects with budgets R95k to R4.2M. The main Part 2 feature is the Projects Portfolio Dashboard with filter, progress bars, same-line gallery, and modal showcase. New project: Seasons Bushveld 311 - Modern Farmhouse 45% brickwork.

## 4. Website Goals and Objectives
**Goals:** Professional online presence, showcase portfolio, generate leads via quote form, rank for "construction Brits".
**Objectives:** 6 pages minimum, fully responsive (1920px, 768px, 375px), JS interactivity, SEO meta tags, load <3s.

## 5. Key Features and Functionality
- **Filter:** `filterProjects(category, btn)` filters by `data-category`
- **Modal:** `openProject(key, idx)`, `nextImage()`, `prevImage()`, `closeModal()` with counter 1/5, ESC key, outside-click close
- **Services Gallery:** `openGallery(type)` / `closeGallery()`
- **Form:** `enquiryForm` validation - name >=3, email regex, phone 10 digits, service required, live validation
- **Other:** Year auto-update, hamburger menu `toggleMenu`, blueprint CSS background

## 6. Timeline and Milestones
- Aug 2026 Part 1: HTML 6 pages, basic CSS
- Sep 2026 Part 2 Week 6-7: Responsive + JS filter/modal
- Sep Week 8: Form validation + SEO
- Oct Week 9-10: Image HDR editing Seasons 311, replace Sunway card
- Nov 2026: Testing + screenshots + README update

## 7. Part 1 Details + Part 2 Feedback Edits
**Part 1 Feedback:** Fix image naming no caps/spaces, add comments, fix nav.
**Edits Made:**
1. Renamed `Fountainbrook-1.jpeg` → `fountainbrook-1.jpeg`
2. Removed spaces `renovations- 1.jpeg` → `renovations-1.jpeg`
3. Fixed selector `.filters button` → `.filter-btn` and `.card` → `.service-card`
4. Fixed duplicate `brits` key in `projectsData`
5. Added meta description, keywords, alt text, robots.txt, sitemap.xml
6. Enhanced Seasons 311 photos to HDR
7. Added `imageCounter` and `onerror` fallback

## 8. Sitemap

## 9. Changelog
- 2026-08-10: Part 1 initial commit
- 2026-09-05: Added script.js year + hamburger
- 2026-09-10: Fixed filterProjects selector
- 2026-09-12: Added projectsData 9 projects
- 2026-09-15: Added openProject modal with navigation
- 2026-09-18: Added ESC + outside click close
- 2026-09-20: Added enquiryForm validation
- 2026-09-25: SEO meta tags
- 2026-10-15: Added Seasons Bushveld 311 project
- 2026-10-20: HDR photo editing
- 2026-10-25: Replaced Sunway with Seasons 311
- 2026-11-02: Final testing + README update

## 10. Testing and Screenshot Evidence
**Browser Testing:** Chrome 128 Passed, Edge 128 Passed, Firefox 130 Passed

**Screenshots (in /Screenshots folder):**
- `desktop-home-1920x1080.png` - Desktop home
- `desktop-projects-dashboard-1920x1080.png` - Desktop dashboard
- `tablet-projects-768x1024.png` - Tablet 2 columns
- `mobile-projects-375x667.png` - Mobile 1 column
- `mobile-menu-open-375x667.png` - Hamburger open
- `modal-gallery-open-desktop.png` - Modal with 1/5
- `modal-next-image.png` - Next arrow
- `filter-residential-active.png` - Filter active
- `form-validation-error.png` - Red errors
- `form-validation-success.png` - Green success

Use Chrome DevTools F12 > Toggle Device Toolbar (Ctrl+Shift+M) to test.

## 11. References - Harvard IIE Style
- MDN (2026) Modal Accessibility. Available at: https://developer.mozilla.org/ [Accessed 15 Sep 2026]
- W3Schools (2026) Filter List Tutorial. Available at: https://www.w3schools.com/howto/howto_js_filter_lists.asp [Accessed 10 Sep 2026]
- Unsplash (2026) House images. License: Unsplash License. Available at: https://unsplash.com/ [Accessed 10 Aug 2026]
- Helix 360 (2026) Own site photos Fountainbrook, Seasons 311. Original.
- Meta AI (2026) Debugging and HDR editing. In-text: (Meta AI, 2026)

**AI Disclosure:** Tool: Meta AI - Used for debugging filterProjects and enhancing photos. Prompts: "Fix the red parts", "Edit pictures make them look amazing". Screenshots saved in AI-Disclosure/. Full annexure per IIE Policy IIE023.

## 12. How to Run
1. Live: Click Live Site link
2. Local: Download ZIP > Open Part_2_Website > index.html > Live Server
No build needed.

---
END
Live Site: https://genuineglimpse.github.io/4.-Helix360_website/
Student: Boitshepo Phiri
Student Number: ST10480869
Module: Web Development 5020 

HELIX 360 CONSTRUCTION - WEDE5020 POE - PART 2

Project Title: Helix 360 Construction Website
Live Site: https://genuineglimpse.github.io/4.-Helix360_website/
GitHub Repo: https://github.com/genuineglimpse/4.-Helix360_website

Student Information:
Student Name: Boitshepo Phiri
Student Number: ST10488869
Module: Web Development (Introduction) - WEDE5020
Year: 2026
Lecturer: IIE

1. PROJECT OVERVIEW (COMPLETE)

Helix 360 Construction is a construction company based in Brits, North West,
specializing in residential estate houses, commercial renovations, civil works,
and finishing.

The website serves as a digital portfolio to attract clients in estates like
Fountainbrook Estate, Sunway Estate, Seasons Golf Estate, Majakaneng, and
Bokfontein. It showcases 150+ completed projects with budgets ranging from
R95k to R4.2M.

Part 2 Focus: Added full JavaScript interactivity, SEO optimization,
functional forms with validation, and responsive testing evidence.

2. WEBSITE GOALS AND OBJECTIVES

Goals:
- Create professional online presence for Helix 360
- Showcase portfolio with filterable dashboard
- Generate leads via enquiry form with estimate calculator
- Rank for keywords: "construction Brits", "estate houses Sunway"

Objectives (SMART):
- 6 pages minimum (Home, About, Services, Projects, Enquiry, Contact)
- Fully responsive: Desktop (1920px), Tablet (768px), Mobile (375px)
- Interactive elements: Filter, modal gallery, form validation
- SEO: Meta tags, alt text, sitemap.xml, robots.txt
- Load time <3s, cross-browser tested (Chrome, Edge, Firefox)

3. KEY FEATURES AND FUNCTIONALITY

a) Navigation: Sticky dashboard-header with hamburger menu on mobile (toggleMenu)
b) Projects Dashboard (projects.html):
- filterProjects(category, btn) - filters by data-category
- 9 project cards with progress bars (72% Live, 100% Completed)
- Same-line scrollable thumbnail gallery inside each card
- openProject(key, idx) - opens modal with image counter
- nextImage()/prevImage()/closeModal() - gallery navigation
- ESC key and outside-click to close
- Image onerror fallback

c) Services Gallery:
- openGallery(type)/closeGallery() - shows 6 images per service

d) Enquiry Form (enquiry.html):
- Fields: ename, eemail, ephone, eservice
- Validation: name >=3 chars, email regex, phone 10 digits, service required
- Live validation on input event
- Form status message (success/error)

e) Other: Year auto-update, blueprint CSS background, parallax

4. TIMELINE AND MILESTONES

Part 1 (Aug 2026):
- Week 1-2: Proposal, sitemap, wireframes
- Week 3-4: HTML structure for 6 pages, basic CSS
- Week 5: GitHub setup, README.md first version

Part 2 (Sep-Oct 2026):
- Week 6: Responsive CSS, media queries, testing
- Week 7: JavaScript - filterProjects, modal, gallery
- Week 8: Form validation, SEO meta tags, alt text
- Week 9: Image optimization, HDR editing for Seasons 311
- Week 10: Screenshot evidence, changelog, references update

Part 3 (Nov 2026 - Upcoming):
- External services (Google Maps embed, YouTube video)
- Final optimization, minification, Lighthouse audit

5. PART 1 DETAILS + PART 2 FEEDBACK EDITS

Part 1 Feedback Received:
- "Fix image naming - no capital letters or spaces"
- "Add more comments in code"
- "Make navigation work on all pages"
- "Add SEO meta description"

Edits Made for Part 2 (For Changelog marks):
1. Renamed all images to lowercase: Fountainbrook-1.jpeg -> fountainbrook-1.jpeg
2. Removed spaces: renovations- 1.jpeg -> renovations-1.jpeg
3. Fixed filterProjects selector from .filters button to .filter-btn and .card to .service-card
4. Fixed projectsData duplicate key 'brits' and added 9 projects including seasons311
5. Added comprehensive comments in JS and HTML
6. Added meta description, keywords, author on all pages
7. Created robots.txt and sitemap.xml
8. Enhanced site photos to HDR portfolio quality (Seasons Bushveld 311)
9. Added imageCounter and onerror fallback
10. Added keyboard accessibility (ESC, outside click)

6. SITEMAP

Home (index.html)
├── About Us (about.html)
├── Services (services.html)
│ ├── Plumbing & Utilities (gallery modal)
│ ├── Residential Construction
│ ├── Renovations
│ ├── House Plans & Design
│ ├── Civil Works
│ └── Finishing Work
├── Projects (projects.html) - DASHBOARD
│ ├── Filter: All (9) / Residential / Commercial / Civil / Renovation
│ ├── Fountainbrook Estate House (fountainbrook)
│ ├── Sunway Estate #42 (sunway) -> REPLACED with Seasons Bushveld 311 (seasons311)
│ ├── Brits CBD Shops (brits)
│ ├── Majakaneng Access Road (majakaneng)
│ ├── Haartbeespoort Kitchen (haartbeespoort)
│ ├── Seasons Golf Estate (seasonsgolf)
│ ├── Bokfontein Bathroom (bokfontein)
│ ├── Gabion Retaining Walls (gabion)
│ └── Seasons Bushveld 311 (seasons311) - NEW 2026
├── Enquiry (enquiry.html) - Form + Validation
└── Contact (contact.html) - Map + Details

File Sitemap: /sitemap.xml lists all 6 pages for crawlers

7. CHANGELOG - RECORD OF DEVELOPMENT

[2026-08-10] Part 1 Initial Commit - Created 6 HTML pages, basic css/style.css
[2026-08-15] Added images folder, logo.jpg, placeholder Unsplash images
[2026-08-20] Part 1 Submission - README.md v1 with Project Overview

[2026-09-05] Part 2 Start - Added JS/script.js with year update, hamburger toggle
[2026-09-10] Implemented filterProjects() - Fixed selector bug .filters->.filter-btn
[2026-09-12] Implemented projectsData object with 8 projects, fixed duplicate brits key
[2026-09-15] Implemented openProject(key, idx), nextImage, prevImage, closeModal
[2026-09-18] Added ESC key listener and outside-click close for modal
[2026-09-20] Added form validation for enquiryForm per lecturer pattern (ename, eemail, ephone, eservice)
[2026-09-25] SEO Update - Added meta description, keywords, author, alt text on all pages
[2026-09-26] Created robots.txt and sitemap.xml
[2026-10-01] Fixed image naming: Renamed Fountainbrook-1.jpeg to fountainbrook-1.jpeg (lowercase)
[2026-10-02] Fixed serviceGalleries: Removed spaces in filenames renovations- 1.jpeg
[2026-10-15] Added Seasons Bushveld 311 project - 5 site photos + 2 renders
[2026-10-20] Enhanced photos to HDR using AI editing - premium portfolio look
[2026-10-25] Replaced Sunway Estate card with Seasons Bushveld 311 in projects.html
[2026-11-02] Final testing - Chrome, Edge, Firefox + responsive screenshots
[2026-11-02] Updated README.txt with full Part 2 details, changelog, references

8. TESTING AND SCREENSHOT EVIDENCE

Browser Testing:
- Chrome 128.0 - Passed (filter, modal, form validation)
- Edge 128.0 - Passed
- Firefox 130.0 - Passed

Responsive Testing (Screenshots in /Screenshots folder):
- Desktop: 1920x1080 - projectsGrid 3 columns, modal 700px
- Tablet: 768x1024 (iPad) - projectsGrid 2 columns, hamburger visible
- Mobile: 375x667 (iPhone SE) - projectsGrid 1 column, filter-bar scrollable, modal 95%

Screenshot Files:
- Screenshots/desktop-home.png
- Screenshots/desktop-projects.png
- Screenshots/tablet-projects.png
- Screenshots/mobile-projects.png
- Screenshots/mobile-menu-open.png
- Screenshots/modal-open.png
- Screenshots/form-validation

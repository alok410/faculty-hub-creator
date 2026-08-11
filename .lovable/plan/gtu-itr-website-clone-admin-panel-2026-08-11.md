# GTU-ITR Website Clone + Admin Panel

Rebuild gtuitr.gtu.ac.in as a modern Lovable app that looks near-identical to the current site, with a secure admin panel for banners, news and updates.

## Visual approach

Match the existing site closely: red/blue GTU header strip with logo, horizontal mega-menu navigation, full-width homepage image slider, scrolling "Updates" ticker, "News" notice list with PDF links, "What We Have" feature blocks, counter stats (Faculties / Books / Students / Laboratories), student testimonials, footer with social links and quick links. Same typography feel (Poppins / Bebas Neue style) and same section order.

## Pages (full site, built in phases)

Phase 1 - shell + home
- Header, mega-menu nav, footer, homepage (slider, updates ticker, news, features, stats, testimonials)

Phase 2 - institute
- Vision & Objectives, Message from VC / Registrar / Principal, Achievements, Media Coverage, AICTE disclosures, Mandatory Disclosure, Regulations, Institute Committees

Phase 3 - academics & departments
- Civil, Computer, Electrical, Mechanical, Humanities (degree + diploma faculty pages), Minor Degree, MSc IT, PGDCS, Solar Energy Course, SIEMENS Center of Excellence, Academic Calendar

Phase 4 - admissions & students
- Degree Engineering admission, Diploma admission, MSc IT admission, PGDCS admission, Placement, Alumni, Students, Student Clubs, Facility, Transportation, Gallery, Anti-Ragging, Women Cell, Grievance, Inquiry Form, Contact

Every page gets its own URL and its own SEO title/description. External links (GTU portal, payment, social) stay pointing to the original destinations.

## Admin panel

Login at /auth, admin area at /admin (protected). Only accounts you grant the admin role can enter; new signups get no access until approved.

Manage:
- Banners - upload slider images, caption, link, display order, show/hide
- News - title, PDF/document upload or link, date, order, publish toggle
- Updates - ticker text, optional link, date range, publish toggle

The public homepage reads live from these, so changes appear instantly. Faculty, committees, gallery and page content are planned as a later phase (admin scope can be extended once this is running).

## Technical notes

- Lovable Cloud (database + auth + file storage) powers the admin.
- Tables: `banners`, `news`, `updates`, plus `profiles` and a separate `user_roles` table with a `has_role()` security-definer function - roles are never stored on the profile row.
- RLS: public read of published rows only; insert/update/delete restricted to admins. Storage bucket for banner images and news PDFs with public read, admin write.
- Design tokens (GTU red/blue palette, fonts, radii) defined once in `src/styles.css`; no hardcoded colors in components.
- Content pages are static React routes seeded with the current site's text, editable later.
- Images: the original site's photos aren't downloadable into the project wholesale, so hero/banner/campus imagery will be generated to match the existing look; you can replace them via the admin banner uploader.

## First delivery

Phase 1 + the full admin panel (banners, news, updates) end to end, then the remaining page phases in follow-up rounds.

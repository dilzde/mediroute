# HOSPITAL DIGITAL PLATFORM — ANTIGRAVITY BUILD PROMPT

> **How to use this file:** Paste this entire document into Antigravity as the build instruction. It is written as a single production-grade specification, not a toy prototype. Build strictly to this spec — no placeholder "Lorem ipsum" pages, no fake AI chatbots, no unfinished flows. Everything described here must be functional or clearly stubbed with a TODO comment and a tracking issue, never silently skipped.

---

## 0. PROJECT BRIEF

Build a production-ready hospital website and patient portal for a private Kenyan hospital (name/logo TBD — see Section 3, Admin Settings). The hospital offers general outpatient care, specialist consultations, surgical services (including laparoscopic/minimally invasive surgery), diagnostics, and both **in-person and remote (video/phone) consultations**. The platform must feel like a real, trustworthy Kenyan private hospital website — in the tier of Nairobi Hospital, Aga Khan University Hospital Nairobi, MP Shah Hospital, and AAR Hospital — not a generic SaaS template.

**Non-negotiables:**
- No AI-generated "stock" clichés: no purple-blue gradient blobs, no generic 3D render hero images, no fake glassmorphism cards floating for no reason, no robot/chatbot iconography unless a real chat feature exists, no meaningless gradient text, no emoji used as icons in production UI.
- Every icon is from a single consistent icon set (Lucide or Phosphor — pick one and never mix).
- Every image either comes from a curated illustration set (see Section 8) or is a real photograph slot fed from the admin CMS — never a broken image icon in production.
- Copy must sound like it was written by a hospital's communications team, not marketing filler. Short, factual, warm, never overpromising ("AI-powered diagnosis," "guaranteed cure," etc. are forbidden claims).
- Fully responsive: mobile-first, then tablet, then desktop. A patient booking an appointment from a low-end Android phone on 3G in Kenya is the primary persona — optimize for that first.

---

## 1. TECH STACK (stable, boring, production-proven — no bleeding-edge or experimental libraries)

| Layer | Choice | Why |
|---|---|---|
| Frontend framework | **Next.js 14 (App Router, stable channel)** with TypeScript | SSR/SSG for SEO on public pages, React Server Components for performance on slow connections |
| Styling | **Tailwind CSS** + **shadcn/ui** (Radix primitives) | Accessible by default, no runtime CSS-in-JS overhead, consistent design tokens |
| Forms & validation | **React Hook Form + Zod** | Type-safe validation shared between client and server |
| Backend / API | **Next.js Route Handlers** for BFF layer, calling a **Node.js (NestJS) or Django REST** service — pick **NestJS + TypeScript** for a single-language stack | Keeps one language across the stack; NestJS gives structured modules for Doctors, Appointments, Admin, Auth |
| Database | **PostgreSQL** (via Supabase or a managed instance e.g. Neon/RDS) with **Prisma ORM** | Relational integrity for appointments/doctors/schedules; row-level security if using Supabase |
| Auth | **NextAuth.js / Auth.js** for patients (email+OTP or phone+OTP), separate **role-based admin auth** (Admin, Doctor, Front-Desk, Super-Admin) with JWT + refresh tokens | Kenyan users mostly trust phone-number login over email — support both |
| File/image storage | **S3-compatible bucket** (AWS S3 or Backblaze B2) behind a CDN (CloudFront/Bunny CDN) | For hospital photos, doctor headshots, logo, lab report PDFs |
| Notifications | **Africa's Talking API** (SMS) or **Twilio**, plus **WhatsApp Business API**, plus email via **Resend or SendGrid** | Kenyan patients expect SMS/WhatsApp appointment reminders, not just email |
| Payments (optional module, admin-toggleable) | **M-Pesa Daraja API** (STK Push) + card fallback via **Flutterwave or Paystack** | For deposits/consultation prepayment where the hospital chooses to require it |
| Phone consultations | **No video SDK needed.** Native `tel:` link / "Call Now" button that opens the patient's phone dialer at the scheduled time, or the hospital's call center dials out to the patient's booked number | Simplest, cheapest, most reliable option for a Kenyan audience — most "online consultations" in practice are just scheduled phone calls, not video |
| Video consultations (optional, phase 2) | Only add **Daily.co or Twilio Video** later if the hospital specifically wants true video calls | Keep launch scope lean; phone-first covers the vast majority of remote-consultation demand |
| Search | **Postgres full-text search** for doctor/service search (Algolia only if catalog grows past a few hundred items) | Keep infra simple at launch |
| Hosting | **Vercel** (frontend) + **Railway/Render/Fly.io** (NestJS API + Postgres) or full AWS if the hospital wants in-country-adjacent hosting | Stable, well-documented, easy CI/CD |
| Monitoring | **Sentry** (errors) + **Vercel Analytics/Plausible** (privacy-respecting analytics, no invasive tracking of patient data) | Healthcare data discipline — no third-party ad trackers anywhere near patient flows |
| CI/CD | **GitHub Actions** → auto-deploy on merge to `main`, staging branch for QA | Standard, boring, reliable |

**Explicitly avoid:** experimental frontend frameworks, unmaintained npm packages, client-side-only rendering for public marketing pages (bad SEO), storing patient health data in plain text, any "AI chatbot" unless specifically scoped later as a separate phase with a real LLM integration and clear medical-disclaimer guardrails.

---

## 2. INFORMATION ARCHITECTURE (sitemap)

```
/                          Homepage
/find-a-doctor             Doctor directory + search/filter
/find-a-doctor/[slug]      Individual doctor profile
/services                  All services overview
/services/[slug]           Individual service page (e.g. laparoscopic surgery)
/conditions                Conditions/specialties we treat
/conditions/[slug]         Individual condition page
/book                      Appointment booking flow (multi-step)
/consultations/online      Telehealth / phone consultation explainer + booking
/patient-resources         Insurance, NHIF/SHA, pre-op instructions, FAQs, downloadable forms
/about                     Mission, history, accreditations, leadership
/about/facilities          Photos/virtual tour of wards, theatres, labs
/contact                   Locations, emergency line, map
/emergency                 Persistent, always-reachable emergency info (see Section 6)
/patient/login             Patient portal login (OTP-based)
/patient/dashboard         Patient portal: upcoming appointments, history, documents
/patient/appointments/[id] Appointment detail / reschedule / cancel / join video call
/admin/*                   Admin CMS (role-gated, see Section 3)
```

---

## 3. ADMIN / CMS MODULE (build this early — it unblocks everything else)

Because the hospital's final name, logo, and full service list are **not yet confirmed**, the entire public site must pull its identity and content from an admin-editable configuration layer. Nothing about hospital identity should be hardcoded.

### 3.1 Settings → Identity
- Hospital name (short + full legal name)
- Logo upload (SVG/PNG, light + dark variants), favicon
- Primary/secondary brand color pickers (constrained to accessible contrast ratios against white/black — validate with a contrast checker before allowing save)
- Tagline / mission statement
- Contact details: main line, emergency line, WhatsApp number, email, physical address(es) with map pins for multiple branches
- Operating hours per department (Outpatient, Emergency is always 24/7, Pharmacy, Labs)
- Social links
- Accreditation badges (e.g. SHA/NHIF accreditation, ISO certification) — image upload + label

### 3.2 Content → Services
CRUD interface for services with fields: name, short description, long description (rich text), category (Surgical / Diagnostic / Outpatient / Maternity / Dental / etc.), icon, cover image, related doctors, related conditions, "what to expect" steps, FAQs, whether bookable directly, price range (optional, admin can hide pricing entirely — many Kenyan hospitals don't publish prices).

Pre-seed with realistic starting content (admin can edit/remove later):
- **Surgical Services:** General Surgery, Laparoscopic (Minimally Invasive) Surgery, Orthopaedic Surgery, ENT Surgery, Urology, Gynaecological Surgery, Ophthalmic Surgery, Plastic & Reconstructive Surgery
- **Outpatient & Specialist Clinics:** Internal Medicine, Paediatrics, Obstetrics & Gynaecology, Cardiology, Dermatology, Dental, Ophthalmology, Psychiatry/Mental Health, Physiotherapy
- **Diagnostics:** Laboratory Services, Radiology (X-ray, Ultrasound, CT, MRI), Endoscopy
- **Emergency & Critical Care:** 24/7 Accident & Emergency, ICU/HDU
- **Maternity:** Antenatal, Labour & Delivery, Postnatal, NICU
- **Wellness:** Vaccination/Immunization, Executive Health Screening/Medical Checkup Packages
- **Telehealth:** Online Doctor Consultation, Phone Consultation, Prescription Refill Requests

### 3.3 Content → Doctors
CRUD for doctor profiles: name, headshot, specialty/sub-specialty, qualifications (degrees, board certifications), **KMPDC registration number field** (Kenya Medical Practitioners and Dentists Council — build validation format, even if not live-verified via API at launch), languages spoken, bio, years of experience, which branch(es) they consult at, consultation type supported (in-person / video / phone / all), weekly availability schedule, consultation fee (optional/admin-hideable), rating display (only if the hospital enables patient reviews — off by default until a moderation flow exists).

### 3.4 Content → Conditions Treated
Simple CRUD: condition name, short description, related specialties, related services — powers the `/conditions` cross-linking so patients searching "I have knee pain" land on Orthopaedics.

### 3.5 Appointments Management (Front-Desk/Admin role)
- Calendar view (day/week/month) per doctor and per branch
- Manually create/edit/cancel/reschedule appointments (for phone-in bookings)
- Mark appointment status: Requested → Confirmed → Checked-in → Completed → No-show → Cancelled
- Filter by service, doctor, date range, consultation type
- Export to CSV for hospital records

### 3.6 Media Library
Central place to upload and reuse hospital photography, illustration assets, and doctor headshots across the CMS.

### 3.7 Roles
- **Super Admin** — full access including identity/branding
- **Admin** — content and appointments, no billing/identity changes
- **Front Desk** — appointments only, no content edits
- **Doctor** — sees only their own schedule and patient list, can add clinical notes (kept separate from marketing content, encrypted at rest)

---

## 4. PUBLIC-FACING PAGES — DETAILED SPEC

### 4.1 Homepage
Structure top to bottom (reference the Mercy Health-style layout you shared, adapted to a Kenyan hospital tone — confident, editorial, not cluttered):

1. **Header (sticky):** Logo (left) · Nav (Find a Doctor · Services · Conditions · Patient Resources · About) · Language switcher (English / Kiswahili — build i18n scaffolding from day one even if only English ships first) · Prominent black/brand "Book Appointment" pill button (top right, always visible)
2. **Hero:** Large, confident headline (e.g. "Quality healthcare, close to home" — admin-editable), sub-line, and the **primary search widget**: "Find a doctor, specialty, or condition" text input + branch/location dropdown + search button. This is the single most important element on the page — make it big, make it work with keyboard and touch equally well.
3. **Quick-access service tiles** (3–4 cards, admin-curated "featured services" — e.g. Book a Consultation / Emergency Care / Maternity / Health Checkup Packages), each with an editorial illustration or photo, title, and arrow link — mirroring the tile pattern in your reference image but with real hospital content instead of vaccination-arm stock photography unless the hospital actually wants that.
4. **"Why choose us" strip:** 3–4 stat/trust markers (years of service, number of specialists, accreditations, beds) — pull live counts from the CMS where possible instead of hardcoding.
5. **Find a Doctor preview:** horizontally scrollable carousel of 6–8 featured doctors with photo, name, specialty, "Book" CTA per card, "View all doctors" link.
6. **Surgical Services spotlight:** dedicated section for surgery (laparoscopy etc.) with a short explainer, an icon-based list of surgical specialties, and a CTA to `/services/surgery`. This matters because it's explicitly a differentiator the hospital wants to highlight.
7. **Online Consultation banner:** clear section explaining "See a doctor without leaving home" — video or phone, how it works in 3 steps, CTA to `/consultations/online`.
8. **Patient resources strip:** Insurance/NHIF-SHA accepted logos, downloadable pre-op checklist, FAQ link.
9. **Testimonials/Trust** (only if the hospital has real, consented patient stories — never fabricate quotes; leave this section admin-hideable if no content exists yet).
10. **Emergency callout bar:** persistent, high-contrast strip with the 24/7 emergency number and "Get Directions" — this should also be reachable from a floating action button on mobile (see Section 6).
11. **Footer:** Sitemap columns, branch addresses with mini-maps, social links, regulatory/accreditation badges, newsletter opt-in (optional), copyright.

### 4.2 Find a Doctor (`/find-a-doctor`)
- Filter sidebar (collapsible drawer on mobile): Specialty, Branch/Location, Consultation type (In-person/Video/Phone), Gender (optional, some patients have real preference needs), Language spoken, Availability (Today / This week)
- Search bar with live filtering
- Grid of doctor cards: photo, name, specialty, branch, next available slot, "Book" button
- Sort by: Soonest availability / Name A–Z / Most experienced

### 4.3 Doctor Profile (`/find-a-doctor/[slug]`)
- Header: photo, name, credentials, specialty, KMPDC reg. number, languages, branches
- Tabs or sections: About · Specialties & Conditions Treated · Availability Calendar · Patient Info (fees, insurance accepted, what to bring)
- Sticky "Book Appointment with Dr. X" CTA that deep-links into the booking flow pre-filled with this doctor

### 4.4 Services Overview (`/services`) and Service Detail (`/services/[slug]`)
- Overview page groups services by category (Surgical, Outpatient, Diagnostics, Maternity, Emergency, Telehealth, Wellness) using tabs or anchor-linked sections
- Each service detail page: hero image/illustration, description, "Conditions this treats," "What to expect" step list, related doctors carousel, FAQs accordion, CTA to book
- **Laparoscopic/surgical pages specifically** should include: a plain-language explainer of what the procedure/approach is, recovery expectations, pre-op instructions link (PDF from Patient Resources), and a note to consult a surgeon for personalized advice (medical disclaimer footer on every clinical page — required, not optional)

### 4.5 Conditions (`/conditions`, `/conditions/[slug]`)
Searchable A–Z list of conditions; each links to relevant services and doctors. This is what lets a patient type "hernia" into the homepage search and land in the right place.

### 4.6 Book Appointment (`/book`) — the core flow
Multi-step, progress-indicator wizard, resumable (save state so a dropped connection doesn't lose progress — critical on Kenyan mobile data):

1. **What do you need?** — Choose: Specific Doctor / Specific Service / "Not sure, help me find the right doctor" (this last option routes to a short symptom-to-specialty triage list, NOT a diagnostic AI — just a simple mapping, clearly labeled as non-diagnostic)
2. **Choose consultation type** — In-person (select branch) / Video call / Phone call
3. **Choose doctor & slot** — Calendar with real-time availability pulled from the doctor's schedule; clearly show timezone (EAT) and duration
4. **Your details** — Name, phone (required, primary channel), email (optional), DOB, whether new or returning patient, insurance provider (dropdown incl. SHA/NHIF successor, private insurers, or "Self-pay"), reason for visit (free text, optional)
5. **Confirm & submit** — Summary screen, terms acknowledgment, submit
6. **Confirmation screen + automated SMS/WhatsApp/email** with appointment reference number, add-to-calendar (.ics) button, and instructions (what to bring for in-person; how to join for video)

Booking creates a `Requested` status appointment; front-desk can auto-confirm or manually confirm depending on hospital preference (admin toggle).

### 4.7 Online Consultations (`/consultations/online`)
Explains video vs phone consultation, pricing transparency (or "confirmed on booking" if hospital doesn't publish prices), technical requirements (data/wifi needed, supported devices), a plain 3-step "How it works," and links into the same booking flow filtered to telehealth-enabled doctors.

For a **phone consultation**, the appointment detail page (`/patient/appointments/[id]`) shows the scheduled time and a prominent **"Call Now"** button using a native `tel:` link — tapping it opens the phone's own dialer pre-filled with the hospital's consultation line (or, if the hospital prefers to call the patient, the page simply confirms "The doctor will call you on [number] at [time]" with no action needed from the patient). This is deliberately simple: one number, one tap, no app, no SDK, no data usage, and it works on any phone including basic feature phones for the "hospital calls you" model.

**Video consultation is an optional phase-2 add-on**, not part of the initial build. If the hospital later wants true video calls, that's the point to introduce Daily.co/Twilio Video inside this same appointment page — but launch scope should stay phone-first for reliability and cost.

### 4.8 Patient Resources (`/patient-resources`)
- Insurance & payment info (accepted schemes, SHA/NHIF guidance, M-Pesa payment instructions if enabled)
- Downloadable forms (pre-admission form, pre-op instructions PDF, medical records request form)
- FAQs (accordion, categorized: Appointments, Billing, Visiting Hours, Emergency)
- Patient rights & responsibilities

### 4.9 About (`/about`, `/about/facilities`)
Mission/vision (admin-editable rich text, matching the tone of the "One Ministry" example you shared but content fully controlled by admin, not hardcoded to any specific religious framing unless the client confirms that), history timeline, leadership team, accreditations, and a facilities gallery (real photos once available; tasteful illustration placeholders until then — never a broken-image state).

### 4.10 Contact (`/contact`)
Branch list with embedded maps (Google Maps or Mapbox), phone numbers by department, a general inquiry form (goes to admin inbox, not a booking), and directions/parking info.

### 4.11 Emergency (`/emergency`)
Always accessible, high contrast, minimal distraction: 24/7 emergency line as a tap-to-call button, ambulance request info if offered, nearest branch with A&E, and a short "when to go to the ER vs. book a regular appointment" guide.

---

## 5. PATIENT PORTAL (`/patient/*`)

- **Login:** phone number + OTP (via SMS) as primary method, email+OTP as fallback. No passwords to remember — this matches Kenyan consumer app expectations (M-Pesa-style OTP flows).
- **Dashboard:** Upcoming appointments (with join/reschedule/cancel actions), past visit history, downloadable documents (lab results, invoices, prescriptions — only if the hospital chooses to expose these; keep this module admin-toggleable since it touches sensitive health records and needs proper access control from day one)
- **Appointment detail page:** full details, map/directions for in-person, join-call button for video (enabled only within the pre-call window), cancellation policy notice, reschedule flow reusing the booking wizard pre-filled
- **Profile:** manage personal info, saved insurance details, notification preferences (SMS/WhatsApp/email toggles)

Data handling note: any page displaying lab results, prescriptions, or clinical notes must treat this as sensitive health data — encrypt at rest, log access, and never cache in a way that leaks between logged-out sessions on shared devices (common in Kenyan cybercafé/shared-phone contexts).

---

## 6. MOBILE-SPECIFIC REQUIREMENTS

- Bottom sticky action bar on mobile for key pages: "Call Now" / "Book Appointment" — always one thumb-tap away
- Floating emergency button (small, unobtrusive, always accessible, never covering primary content) linking to `/emergency`
- Tap targets minimum 44×44px, generous spacing — this audience includes older patients
- Forms use native mobile input types (`tel`, `date`, `email`) so the correct keyboard appears
- Test and optimize for low-end Android devices and slower 3G/4G — lazy-load below-the-fold images, keep JS bundles lean, use Next.js image optimization everywhere, avoid heavy animation libraries
- Works fully without JavaScript for critical read-only content (progressive enhancement for SEO and reliability) where feasible with the App Router's server components

---

## 7. DESIGN SYSTEM

Establish this as an actual `design-tokens` file/theme in the codebase, not ad hoc Tailwind classes scattered everywhere.

- **Typography:** One confident, slightly editorial display typeface for headlines (a geometric sans like the one in your reference — e.g. a licensed equivalent of "Neue Montreal" or "General Sans" family) paired with a highly legible body typeface (e.g. Inter or IBM Plex Sans) for accessibility across age groups and screen qualities. Load via `next/font` for performance, no FOUT.
- **Color:** Primary brand color (admin-configurable, default to a trustworthy deep blue or forest green — avoid clinical cold sterile pure-white-and-red palettes that read as generic hospital-slop; look at how Mercy Health uses black/white/cream restraint with one accent color) + neutral grayscale palette + one warm accent for CTAs. Always validate WCAG AA contrast.
- **Grid & spacing:** 8px base spacing scale, 12-column responsive grid, generous whitespace — the reference image's confident use of negative space and oversized display type is the right direction; replicate that restraint, not clutter.
- **Imagery style:** Two consistent visual languages used deliberately:
  1. **Real photography** for doctors, facilities, and hero moments — warm, natural lighting, diverse Kenyan patients and staff, never stock-photo-obvious poses.
  2. **A single consistent flat-illustration style** (in the spirit of your second reference image — soft rounded shapes, limited palette, friendly but not childish) for empty states, onboarding, telehealth explainers, and any spot where real photography isn't available yet. **Never mix illustration styles from different packs** — this is a top AI-slop tell. Source a single illustration library (e.g. one cohesive set from Storyset/Humaaans-style, licensed) or commission a matching custom set, and reuse only from that set. See Section 8 for the specific asset plan.
- **Components:** Build a proper shared component library (Button, Card, Badge, Tabs, Accordion, Calendar, Stepper, Toast, Modal, Skeleton loaders) via shadcn/ui, themed to the tokens above — don't hand-roll one-off styled divs per page.
- **Motion:** Subtle, purposeful only (fade/slide-in on scroll for hero sections, smooth accordion/tab transitions). No parallax gimmicks, no bouncy skeuomorphic effects.

---

## 8. IMAGE & VISUAL ASSET PLAN

Since real hospital photography won't exist until the client provides it, the illustration set must come from **one licensed illustration library, in one sub-style, recolored to the brand palette** — Antigravity cannot generate this artwork itself, so build against a real source rather than leaving it as an open task.

**Recommended source (pick one, do not mix):**
- **unDraw** (undraw.co) — free, open license, single flat-illustration style, ships as SVG with one editable accent color per image so it can be recolored programmatically to match the hospital's brand color from Section 3.1. This is the closest free match to the tone of the reference visual (soft rounded shapes, limited palette, friendly but professional).
- **Storyset** (storyset.com) — alternative with more scene variety; has several internally-consistent sub-styles (e.g. "Rafiki," "Bro," "Amico," "Cuate") — lock in exactly **one** sub-style for the whole project and never mix, since mixing styles is the single biggest tell of an unpolished build. Paid tier exposes an API Antigravity can script against for batch download + recolor.
- **Blush.design** — kits are grouped by individual artist; pick one kit/artist and stay within it for the same reason.

**Implementation steps for Antigravity:**
1. Select the library and exact sub-style up front and record the choice in the design-tokens file so it's never re-decided ad hoc later.
2. Download/export the SVGs for the specific scene list below, recoloring each to the brand primary + neutral palette (most of these libraries expose recolorable layers/fills in their SVG markup — script the color substitution rather than hand-editing each file).
3. Store the resulting SVGs in the codebase under `/public/illustrations/` **and** register each one in the admin Media Library (Section 3.6), tagged by category, so non-developers can swap a specific illustration for a real photo later without touching code.
4. Reference illustrations via a shared `<Illustration name="..." />` component (not raw `<img>` tags scattered around) so a future brand-color change or a swap to real photography only requires updating the component/library, not every page.

Specific scenes needed, covering every service/section so nothing falls back to a generic stock photo:

- Doctor consulting a patient (general outpatient)
- Surgeon/theatre team (surgical services — tasteful, not graphic)
- Laparoscopic/minimally-invasive surgery concept (abstract instrument/monitor illustration, not literal internal-body imagery)
- Nurse taking vitals (general care)
- Mother and newborn (maternity)
- Doctor on a phone call with a patient at home (phone consultation — see Section 5 for the call flow this illustrates)
- Lab technician with samples (diagnostics)
- Pharmacist handing over medication
- Ambulance/emergency response (for `/emergency`, used carefully — reassuring, not alarming)
- Reception/check-in desk scene
- Health checkup/wellness scene (executive screening)
- Child and paediatrician (paediatrics)
- Physiotherapy session
- Patient recovering in a hospital bed with a visitor/well-wisher (general wellbeing/inpatient care — matches the warmth of the reference "flowers and fruit" scene)

If, at launch, a specific scene isn't available in the chosen library at acceptable quality, the fallback order is: (a) try the alternate library from the list above for that one scene only, keeping recoloring consistent, (b) commission a single custom illustration from a freelance illustrator matched to the same style as a last resort — never substitute a mismatched style or an unrelated stock photo just to fill the gap.

---

## 9. ACCESSIBILITY & COMPLIANCE

- WCAG 2.1 AA minimum across the entire public site and patient portal
- Full keyboard navigation, visible focus states, proper ARIA labeling on all interactive components (calendar, stepper, modals)
- Kenya Data Protection Act (2019) compliance: explicit consent capture on booking forms, a real Privacy Policy page describing what patient data is collected and why, data retention policy, and a patient data-deletion request mechanism
- Medical disclaimer footer on all clinical/service content: "This information is for general guidance only and does not replace professional medical advice. Please consult a doctor for diagnosis and treatment."
- No unauthorized-sounding clinical claims anywhere in copy (no "cure," no "guaranteed," no unverified statistics)

---

## 10. NON-FUNCTIONAL REQUIREMENTS

- **Performance budget:** Largest Contentful Paint < 2.5s on a simulated mid-tier Android + 4G profile; total JS payload on the homepage under ~200KB gzipped where achievable
- **SEO:** Server-rendered public pages, proper meta tags/OpenGraph per page, structured data (schema.org `MedicalOrganization`, `Physician`, `MedicalProcedure`) so Google can show rich results for doctor/service searches
- **Uptime target:** 99.5%+, with the Emergency page and Contact info specifically cached/available even if the dynamic booking backend has an outage (static fallback)
- **Testing:** Unit tests for booking logic and availability calculation (Jest), integration tests for the booking API (Supertest), E2E tests for the critical booking flow end-to-end (Playwright)
- **Environments:** local → staging → production, with seed data scripts so the dev/staging environment always has realistic sample doctors/services/appointments for QA without touching real patient data

---

## 11. BUILD PHASES (suggested order for Antigravity to execute)

1. **Foundation** — repo scaffold (Next.js + NestJS monorepo or two repos), design tokens, shared component library, Prisma schema (Hospital, Branch, Doctor, Service, Condition, Appointment, Patient, Admin/Role, Media), auth scaffolding (patient OTP + admin RBAC)
2. **Admin CMS core** — Identity settings, Services CRUD, Doctors CRUD, Conditions CRUD, Media Library — this unblocks realistic content for every following phase
3. **Public marketing pages** — Homepage, Services, Doctors directory/profile, Conditions, About, Contact, Patient Resources, Emergency — all wired to real CMS content, seeded with the illustration set from Section 8
4. **Booking engine** — availability calculation, the multi-step booking wizard, SMS/WhatsApp/email confirmations, front-desk appointment management calendar
5. **Patient portal** — OTP login, dashboard, appointment detail, reschedule/cancel
6. **Telehealth (phone-first)** — phone consultation booking + "Call Now" tel-link flow + scheduled callback flow (video call is a later, optional phase)
7. **Payments (if enabled)** — M-Pesa STK push + card fallback, tied to appointment deposits
8. **Polish pass** — accessibility audit, performance audit, i18n scaffolding for Kiswahili, cross-device QA, analytics/monitoring wiring
9. **Launch checklist** — Privacy Policy/Terms finalized with real legal review, real hospital content swapped in for placeholder illustrations where available, load test the booking flow, staging → production cutover

---

## 12. OPEN ITEMS FOR CLIENT CONFIRMATION (do not silently assume — flag these back)

- Final hospital name, legal entity name, and logo
- Which specific branches/locations exist and their exact service offerings
- Whether pricing is published publicly or disclosed only after booking
- Which insurance schemes are accepted (list of names)
- Whether M-Pesa/card prepayment is required at booking or payment happens fully at the facility
- Whether patient portal will expose lab results/prescriptions digitally at launch or in a later phase
- Real hospital photography and doctor headshots — timeline for receiving these to replace illustration placeholders
- Kiswahili content — full translation availability at launch or phase 2

---

**End of build prompt.** Antigravity should treat every numbered section above as binding scope. Where the spec is ambiguous, prefer the more conservative, more accessible, more Kenya-context-appropriate choice, and leave a comment flagging the assumption for review rather than guessing silently.

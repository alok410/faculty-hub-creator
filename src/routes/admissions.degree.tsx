import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Download,
  Calendar,
  Building2,
  Users,
  Award,
  ArrowRight,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export const Route = createFileRoute("/admissions/degree")({
  head: () => ({
    meta: [
      { title: "Bachelor of Engineering (B.E.) Admissions 2026-27 | GTU-ITR" },
      {
        name: "description",
        content:
          "Admission guidelines, eligibility criteria, ACPC counselling, and vacant quota notifications for Bachelor of Engineering (B.E.) at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Bachelor of Engineering (B.E.) Admissions 2026-27 | GTU-ITR" },
      {
        property: "og:description",
        content: "B.E. degree admission process through ACPC at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/admissions/degree" },
    ],
    links: [{ rel: "canonical", href: "/admissions/degree" }],
  }),
  component: DegreeAdmissionPage,
});

const STATS = [
  { label: "Governing Body", value: "100% ACPC", icon: ShieldCheck, desc: "Centralized Gujarat Govt counseling" },
  { label: "Approved Intake", value: "AICTE Approved", icon: Award, desc: "All departments recognized by GTU" },
  { label: "Lateral Entry", value: "D2D Direct 2nd Yr", icon: GraduationCap, desc: "For eligible diploma graduates" },
  { label: "Minor Degree", value: "Available", icon: BookOpen, desc: "Specialization in emerging tech" },
];

const PROGRAMMES = [
  {
    name: "Computer Engineering",
    duration: "4 Years (8 Semesters)",
    intake: "60 Seats",
    highlights: "AI/ML, Web Systems, Cloud Computing, Siemens CAD/CAM & ACES Club",
  },
  {
    name: "Mechanical Engineering",
    duration: "4 Years (8 Semesters)",
    intake: "60 Seats",
    highlights: "Siemens Center of Excellence, CNC/CIM, Robotics, SSIP Prototyping",
  },
  {
    name: "Civil Engineering",
    duration: "4 Years (8 Semesters)",
    intake: "60 Seats",
    highlights: "Structural CAD, Advanced Surveying, Environmental Lab & Field Camps",
  },
  {
    name: "Electrical Engineering",
    duration: "4 Years (8 Semesters)",
    intake: "60 Seats",
    highlights: "Anchor Institute of Solar Energy, VFD Drives & Switchgear Test Benches",
  },
];

const ADMISSION_STEPS = [
  { step: "Step 01", title: "ACPC Online Registration", desc: "Register online on ACPC portal (jacpcldce.ac.in) using GUJCET / JEE Main credentials." },
  { step: "Step 02", title: "Document Verification", desc: "Upload Std 12 marksheet, GUJCET scorecard, category certificates, and identity proof." },
  { step: "Step 03", title: "Choice Filling & Mock Round", desc: "Select GTU-ITR Mehsana as your preferred college code during the choice filling window." },
  { step: "Step 04", title: "Seat Allotment & Confirmation", desc: "Secure allotment letter, pay tuition token fee, and complete reporting at the campus." },
];

const NOTICES = [
  {
    title: "B.E. First Year Vacant Quota (VQ) Notice 2026-27",
    url: "https://gtuitr.gtu.ac.in/gperiDoc/BE%20FIRST%20YEAR%20VQ%20ADMISSION%20NOTICE%202026%20%282%29.pdf",
    tag: "AY 2026-27",
  },
  {
    title: "Diploma to Degree (D2D) Vacant Quota Notice 2026-27",
    url: "https://gtuitr.gtu.ac.in/gperiDoc/D2d%20Vacant%20Quota%20Admission%20Notice%20for%20AY%202026-27.pdf",
    tag: "AY 2026-27 D2D",
  },
  {
    title: "First Year B.E. Vacant Quota Archive Notice",
    url: "https://gtuitr.gtu.ac.in/gperiDoc/BE%20VQ%20NOTICE%20-2025.pdf",
    tag: "Archive",
  },
  {
    title: "Revised D to D Vacant Quota Archive Notice",
    url: "https://gtuitr.gtu.ac.in/gperiDoc/Revised%20D%20to%20D%20VQ%20Notice%20-2025.pdf",
    tag: "Archive",
  },
];

function DegreeAdmissionPage() {
  return (
    <PageShell
      title="Bachelor of Engineering (B.E.) Admissions"
      subtitle="Join North Gujarat's premier engineering college managed directly by Gujarat Technological University (GTU)."
    >
      {/* Top Banner Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-primary-foreground">
              <s.icon className="h-6 w-6 text-brand-red" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Intro Box */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Admission 2026-27 Open</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Four-Year B.E. Degree Programmes
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <a
            href="http://www.jacpcldce.ac.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
          >
            <ExternalLink className="h-4 w-4" /> Official ACPC Portal
          </a>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          Admission to the Bachelor of Engineering (B.E.) program is 100% governed by the Admission Committee for
          Professional Courses (ACPC), Government of Gujarat. All courses are approved by AICTE, New Delhi and affiliated
          with Gujarat Technological University (GTU), Ahmedabad. Course curricula are delivered by experienced doctoral
          and master&apos;s faculties along with practicing industry specialists.
        </p>
      </div>

      {/* Programmes Offered Grid */}
      <div className="mb-12 space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Undergraduate Disciplines</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {PROGRAMMES.map((prog, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-base font-bold text-brand-navy">{prog.name}</h4>
                  <Badge className="bg-brand-surface text-brand-navy border border-border text-[10px] uppercase">
                    {prog.duration}
                  </Badge>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                  <strong className="text-brand-navy">Focus &amp; Facilities:</strong> {prog.highlights}
                </p>
              </div>
              <div className="mt-5 border-t border-border/70 pt-3 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-red">Approved AICTE Intake: {prog.intake}</span>
                <Link to="/enquiry" className="font-bold uppercase text-brand-navy hover:underline">
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility & Step-by-Step ACPC Process */}
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Eligibility & Process */}
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Eligibility Criteria</h3>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="space-y-4 text-xs leading-relaxed text-foreground/85">
              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">First-Year B.E. (Fresh Admission)</p>
                <p className="mt-1">
                  Candidate must have passed Standard 12th (Science Stream) examination with Physics and Mathematics as
                  compulsory subjects along with Chemistry / Biology / Computer / Vocational subject, securing the minimum
                  percentage prescribed by ACPC, and appeared in <strong>GUJCET 2026</strong> or <strong>JEE (Main) 2026</strong>.
                </p>
              </div>

              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">Direct Second Year B.E. (D2D Lateral Entry)</p>
                <p className="mt-1">
                  Candidates who have successfully completed a 3-year Diploma in Engineering from a recognized university or
                  technical board are eligible for lateral admission directly into Semester-3 of the relevant B.E. branch.
                </p>
              </div>
            </div>

            <h4 className="mt-8 font-heading text-base font-bold uppercase text-brand-navy">ACPC Counseling Flow</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ADMISSION_STEPS.map((s, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-3.5 shadow-2xs">
                  <span className="rounded bg-brand-navy px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                    {s.step}
                  </span>
                  <p className="mt-2 font-heading text-xs font-bold text-brand-navy">{s.title}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vacant Quota & Help Desk */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h4 className="font-heading text-base font-bold uppercase text-brand-navy">Vacant Quota (VQ) Notices</h4>
            <p className="mt-1 text-xs text-muted-foreground">Official notifications for institutional round admissions.</p>
            <div className="mb-4 mt-2 h-0.5 w-10 bg-brand-red" />

            <div className="space-y-3">
              {NOTICES.map((n, idx) => (
                <a
                  key={idx}
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border p-3 text-xs transition-all hover:border-brand-navy/60 hover:shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-brand-red shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-navy">{n.title}</p>
                      <p className="text-[10px] text-muted-foreground">{n.tag}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <h4 className="font-heading text-sm font-bold uppercase text-white">Need Admission Counseling?</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              Visit our Mehsana campus admission help-desk for choice filling assistance, document verification, and campus
              tours.
            </p>
            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/90 space-y-1">
              <p><strong>Desk:</strong> +91-9909039233</p>
              <p><strong>Email:</strong> admission_gperi@gtu.edu.in</p>
              <p><strong>24x7 Women Helpline:</strong> +91 7827170170</p>
            </div>
            <Link
              to="/enquiry"
              className="mt-6 block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Enquire Online Now
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

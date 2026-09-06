import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  CheckCircle2,
  Download,
  Award,
  ExternalLink,
  ShieldCheck,
  Building2,
  FileCheck,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/admissions/diploma")({
  head: () => ({
    meta: [
      { title: "Diploma Engineering Admissions 2026-27 | GTU-ITR" },
      {
        name: "description",
        content:
          "Diploma Engineering admissions after 10th Standard at GTU-ITR Mehsana. 50% ACPDC seats & 50% Management Quota (MQ). Vacant quota notices and direct admission helpline.",
      },
      { property: "og:title", content: "Diploma Engineering Admissions 2026-27 | GTU-ITR" },
      {
        property: "og:description",
        content: "Diploma engineering admissions after SSC at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/admissions/diploma" },
    ],
    links: [{ rel: "canonical", href: "/admissions/diploma" }],
  }),
  component: DiplomaAdmissionPage,
});

const STATS = [
  { label: "Seat Distribution", value: "50% ACPDC + 50% MQ", icon: ShieldCheck, desc: "Government counselling & direct quota" },
  { label: "Eligibility", value: "After 10th (SSC)", icon: GraduationCap, desc: "Maths, Science & English passed" },
  { label: "Career Path", value: "Direct D2D to B.E.", icon: Award, desc: "Seamless entry into 2nd year degree" },
  { label: "Lab Exposure", value: "Siemens CoE", icon: BookOpen, desc: "Early hands-on industrial skills" },
];

const BRANCHES = [
  {
    name: "Diploma in Computer Engineering",
    duration: "3 Years (6 Semesters)",
    desc: "Computer fundamentals, C/C++ programming, database administration, web development, and hardware maintenance.",
  },
  {
    name: "Diploma in Mechanical Engineering",
    duration: "3 Years (6 Semesters)",
    desc: "Workshop technology, manufacturing processes, machine drafting, thermal engineering, and CNC machine basics.",
  },
  {
    name: "Diploma in Civil Engineering",
    duration: "3 Years (6 Semesters)",
    desc: "Surveying, building construction materials, concrete technology, hydraulics, and civil computer-aided drafting.",
  },
  {
    name: "Diploma in Electrical Engineering",
    duration: "3 Years (6 Semesters)",
    desc: "Electrical machines, basic electronics, power generation, transmission systems, and industrial electrical wiring.",
  },
];

const NOTICES = [
  {
    title: "Diploma First Year Vacant Quota (VQ) Notice 2026-27",
    url: "https://gtuitr.gtu.ac.in/gperiDoc/DIPLOMA%20ADMISSION%20VQ%20NOTICE%20_2026_%20GTU%20-ITR.pdf",
    tag: "AY 2026-27",
  },
  {
    title: "C to D (Second Year Diploma) Vacant Quota Notice",
    url: "https://gtuitr.gtu.ac.in/gperiDoc/C%20TO%20D%20VQ%20NOTICE%202025.pdf",
    tag: "Lateral Entry",
  },
];

function DiplomaAdmissionPage() {
  return (
    <PageShell
      title="Diploma Engineering Admissions"
      subtitle="3-Year Technical Diploma programs after 10th Standard (SSC) providing robust foundational engineering skills and direct pathways to B.E. Degree."
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
              <p className="font-display text-base font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Intro Overview Card */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Admissions Open 2026-27</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              3-Year Diploma Engineering Programs
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <a
            href="http://www.jacpcldce.ac.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
          >
            <ExternalLink className="h-4 w-4" /> ACPDC Diploma Portal
          </a>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          GTU-ITR established Diploma Engineering courses from the Academic Year 2023-24 in four foundational branches:
          Computer, Civil, Mechanical, and Electrical Engineering. The admission for{" "}
          <strong>50% of the total seats is governed centrally by ACPDC</strong> (Admission Committee for Professional
          Diploma Courses, GoG), while the remaining <strong>50% seats are filled through Management Quota (MQ)</strong>{" "}
          directly at the institute campus.
        </p>
      </div>

      {/* Branches Grid */}
      <div className="mb-12 space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Offered Diploma Disciplines</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {BRANCHES.map((b, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-base font-bold text-brand-navy">{b.name}</h4>
                  <Badge className="bg-brand-surface text-brand-navy border border-border text-[10px] uppercase">
                    {b.duration}
                  </Badge>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/80">{b.desc}</p>
              </div>

              <div className="mt-5 border-t border-border/70 pt-3 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-red">50% ACPDC • 50% Direct MQ</span>
                <Link to="/enquiry" className="font-bold uppercase text-brand-navy hover:underline">
                  Apply Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility & Quota Distribution */}
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Eligibility &amp; Dual Quota Flow</h3>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="space-y-4 text-xs leading-relaxed text-foreground/85">
              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">Eligibility for 10th Standard Passouts</p>
                <p className="mt-1">
                  Candidate must have passed the Secondary School Certificate (Standard X - SSC) examination conducted by
                  GSEB, CBSE, or equivalent recognized board with Mathematics, Science, and English, securing the minimum
                  aggregate marks stipulated by the ACPDC committee.
                </p>
              </div>

              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">C-to-D Lateral Entry (Certificate to Diploma)</p>
                <p className="mt-1">
                  Candidates who have completed a 2-year recognized ITI certificate program or equivalent technical certificate
                  course are eligible for direct lateral admission into Semester-3 of the relevant Diploma engineering branch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notices & Desk */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h4 className="font-heading text-base font-bold uppercase text-brand-navy">Diploma Admission Notices</h4>
            <p className="mt-1 text-xs text-muted-foreground">Download official vacant and management quota forms.</p>
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
            <h4 className="font-heading text-sm font-bold uppercase text-white">Direct Management Quota (MQ)</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              Contact our Mehsana campus admissions desk directly to apply for the 50% Management Quota seats.
            </p>
            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/90 space-y-1">
              <p><strong>Hotline:</strong> +91-9909039233</p>
              <p><strong>Email:</strong> admission_gperi@gtu.edu.in</p>
              <p><strong>Women Helpline:</strong> +91 7827170170</p>
            </div>
            <Link
              to="/enquiry"
              className="mt-6 block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Enquire for Diploma Seat
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

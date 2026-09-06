import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Award,
  GraduationCap,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/aicte")({
  head: () => ({
    meta: [
      { title: "AICTE Approvals & Extension of Approval (EoA) | GTU-ITR" },
      {
        name: "description",
        content:
          "Official AICTE Extension of Approval (EoA) reports from 2017-18 through 2026-27 for GTU-ITR Mehsana, AICTE 360 degree feedback, and scholarships.",
      },
      { property: "og:title", content: "AICTE Approvals & Extension of Approval (EoA) | GTU-ITR" },
      {
        property: "og:description",
        content: "Statutory AICTE approvals, official EoA PDF reports, and student scholarship schemes at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/aicte" },
    ],
    links: [{ rel: "canonical", href: "/aicte" }],
  }),
  component: AictePage,
});

const STATS = [
  { label: "AICTE Recognition", value: "Approved", icon: ShieldCheck, desc: "New Delhi statutory regulatory approval" },
  { label: "University Status", value: "Affiliated", icon: Award, desc: "Constituent institute of GTU Ahmedabad" },
  { label: "EoA Archive", value: "10 Years", icon: FileText, desc: "Continuous approvals from 2017 to 2026-27" },
  { label: "Student Schemes", value: "Scholarships", icon: GraduationCap, desc: "Pragati, Saksham & Swanath support" },
];

const EOA_REPORTS = [
  { year: "Academic Year 2026-27", url: "https://gtuitr.gtu.ac.in/EOA/EOA%20Report%202026-2027.PDF", current: true },
  { year: "Academic Year 2025-26", url: "https://gtuitr.gtu.ac.in/EOA/EOA%20Report%202025-26.PDF", current: true },
  { year: "Academic Year 2024-25", url: "https://gtuitr.gtu.ac.in/EOA/EOA%20REPORT%202024-2025.PDF", current: false },
  { year: "Academic Year 2023-24", url: "https://gtuitr.gtu.ac.in/EOA/EOA%20REPORT%202023-24.PDF", current: false },
  { year: "Academic Year 2022-23", url: "https://gtuitr.gtu.ac.in/EOA/EOA-Report%2022-23_revised.PDF", current: false },
  { year: "Academic Year 2021-22", url: "https://gtuitr.gtu.ac.in/EOA/AICTE%20EOA_Report_2021-22.PDF", current: false },
  { year: "Academic Year 2020-21", url: "https://gtuitr.gtu.ac.in/EOA/AICTE%20EOA_Report_2020-21.PDF", current: false },
  { year: "Academic Year 2019-20", url: "https://gtuitr.gtu.ac.in/EOA/AICTE%20EOA_Report_2019-20.PDF", current: false },
  { year: "Academic Year 2018-19", url: "https://gtuitr.gtu.ac.in/EOA/AICTE%20EOA_Report_2018-19.PDF", current: false },
  { year: "Academic Year 2017-18", url: "https://gtuitr.gtu.ac.in/EOA/AICTE%20EOA_Report_2017-18.pdf", current: false },
];

const SCHOLARSHIPS = [
  {
    name: "AICTE Pragati Scholarship for Girls",
    desc: "Financial assistance of ₹50,000 per annum for female engineering students admitted to first year of Degree or Diploma courses.",
    link: "https://aicte.gov.in/schemes/students-development-schemes",
  },
  {
    name: "AICTE Saksham Scholarship for Specially-Abled",
    desc: "Empowering differently-abled students with degree/diploma education assistance of ₹50,000 per annum for studies.",
    link: "https://aicte.gov.in/schemes/students-development-schemes",
  },
  {
    name: "AICTE Swanath Scholarship Scheme",
    desc: "Support for orphans, children of deceased armed forces/police personnel, and COVID affected students.",
    link: "https://aicte.gov.in/schemes/students-development-schemes",
  },
];

function AictePage() {
  return (
    <PageShell
      title="AICTE Approvals & Regulatory Compliance"
      subtitle="Statutory compliance repository containing official Extension of Approval (EoA) reports, 360-degree feedback, and government scholarship schemes."
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
              <p className="font-display text-xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overview Card */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Statutory Approvals</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              All India Council for Technical Education (AICTE)
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <a
            href="https://smartcookie.in/AICTE-360degreefeedback"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
          >
            <ExternalLink className="h-4 w-4" /> AICTE 360° Feedback Form
          </a>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          All degree and diploma engineering courses offered at Gujarat Technological University - Institute of Technology
          and Research (GTU-ITR), Mehsana are approved by the <strong>All India Council for Technical Education (AICTE), New Delhi</strong>{" "}
          and recognized by the Education Department, Government of Gujarat.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* EoA Download Archive */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">
            Extension of Approval (EoA) Archive
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">Official annual compliance and intake approvals issued by AICTE.</p>
          <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

          <div className="grid gap-3 sm:grid-cols-2">
            {EOA_REPORTS.map((report, idx) => (
              <a
                key={idx}
                href={report.url}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between rounded-lg border p-3.5 text-xs transition-all hover:border-brand-navy/60 hover:shadow-xs ${
                  report.current ? "border-brand-red/40 bg-brand-surface" : "border-border bg-card"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className={`h-4 w-4 ${report.current ? "text-brand-red" : "text-brand-navy"}`} />
                  <div>
                    <p className="font-bold text-brand-navy">{report.year}</p>
                    <p className="text-[10px] text-muted-foreground">AICTE Approval Letter (PDF)</p>
                  </div>
                </div>
                <Download className="h-4 w-4 text-brand-navy shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Scholarships & Feedback */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h4 className="font-heading text-base font-bold uppercase text-brand-navy">AICTE Student Scholarships</h4>
            <p className="mt-1 text-xs text-muted-foreground">National welfare schemes available for GTU-ITR students.</p>
            <div className="mb-4 mt-2 h-0.5 w-10 bg-brand-red" />

            <div className="space-y-3">
              {SCHOLARSHIPS.map((sch, i) => (
                <div key={i} className="rounded-lg border border-border/80 bg-brand-surface/40 p-3.5">
                  <p className="font-heading text-xs font-bold text-brand-navy">{sch.name}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-foreground/80">{sch.desc}</p>
                  <a
                    href={sch.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-brand-red hover:underline"
                  >
                    View Guidelines <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <h4 className="font-heading text-sm font-bold uppercase text-white">AICTE 360° Feedback Portal</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              In accordance with AICTE mandates, students and faculty participate in institutional 360-degree feedback
              evaluations to continuously refine academic delivery.
            </p>
            <a
              href="https://smartcookie.in/AICTE-360degreefeedback"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Submit 360° Feedback Online <ExternalLink className="inline-block ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

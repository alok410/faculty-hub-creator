import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Download,
  CheckCircle2,
  BookOpen,
  Award,
  Layers,
  FileCheck,
  ArrowRight,
  Phone,
  Code,
} from "lucide-react";

export const Route = createFileRoute("/admissions/msc-it")({
  head: () => ({
    meta: [
      { title: "Integrated M.Sc. in IT Admissions 2026-27 | GTU-ITR" },
      {
        name: "description",
        content:
          "Admission guidelines, eligibility criteria, course brochure, and application process for 5-Year Integrated M.Sc. in Information Technology at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Integrated M.Sc. in IT Admissions 2026-27 | GTU-ITR" },
      {
        property: "og:description",
        content: "5-Year Integrated M.Sc. (IT) admission details and guidelines at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/admissions/msc-it" },
    ],
    links: [{ rel: "canonical", href: "/admissions/msc-it" }],
  }),
  component: MscItAdmissionPage,
});

const STATS = [
  { label: "Program Format", value: "5-Year Integrated", icon: Layers, desc: "Dual B.Sc.(IT) + M.Sc.(IT) pathway" },
  { label: "Eligibility", value: "Std 12th (HSC)", icon: GraduationCap, desc: "Science & Commerce with Maths/Stats" },
  { label: "Direct Advantage", value: "No PG Entrance", icon: Award, desc: "Seamless progression to Master's" },
  { label: "Affiliation", value: "GTU Ahmedabad", icon: BookOpen, desc: "Official university curriculum" },
];

const CURRICULUM_PILLARS = [
  "Advanced Object-Oriented Programming (Java, Python, C++)",
  "Full-Stack Web Development & Cloud Architectures",
  "Enterprise Database Management Systems & SQL/NoSQL",
  "Data Structures, Algorithms & Software Engineering",
  "Mobile App Development (Android & Cross-Platform)",
  "Cyber Security, Network Defense & Cloud Fundamentals",
];

function MscItAdmissionPage() {
  return (
    <PageShell
      title="Integrated M.Sc. in Information Technology"
      subtitle="5-Year Integrated postgraduate degree program directly after Standard 12th, shaping world-class software engineers and IT solution architects."
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

      {/* Intro & Download Card */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Admissions Open 2026-27</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Integrated M.Sc. (IT) Program Overview
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <a
            href="https://gtuitr.gtu.ac.in/gperiDoc/AdmissionGuidelinesforIMSc.IT.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
          >
            <Download className="h-4 w-4" /> Download Official Guidelines (PDF)
          </a>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          The 5-Year Integrated Master of Science in Information Technology (IM.Sc. IT) at GTU-ITR provides a continuous,
          comprehensive curriculum from undergraduate foundations to master-level specialized domains. Designed in accordance
          with National Education Policy (NEP) guidelines, students gain extensive industry-ready software engineering
          skills without needing to re-appear for separate postgraduate entrance exams after graduation.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Eligibility & Curriculum */}
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Eligibility Criteria</h3>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="space-y-3 text-xs leading-relaxed text-foreground/85">
              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">Academic Qualifications (Std 12th HSC)</p>
                <p className="mt-1">
                  Candidates must have passed Standard 12th (Higher Secondary Certificate - HSC) examination from Gujarat Board
                  (GSEB), CBSE, or ICSE in either <strong>Science Stream</strong> or <strong>General / Commerce Stream</strong>{" "}
                  with Mathematics / Business Mathematics / Statistics / Elements of Accountancy / Computer as one of the
                  subjects, obtaining the minimum qualifying percentage decreed by GTU.
                </p>
              </div>

              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">Lateral Exit &amp; Re-entry Option</p>
                <p className="mt-1">
                  The program conforms to flexible modular progression, enabling an option to graduate with a Bachelor of Science
                  (B.Sc. in IT) at the end of 3 years or continue seamlessly towards the full Master&apos;s degree.
                </p>
              </div>
            </div>

            <h4 className="mt-8 font-heading text-base font-bold uppercase text-brand-navy">Curriculum Pillars</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {CURRICULUM_PILLARS.map((pillar, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-lg border border-border bg-brand-surface/20 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                  <span className="text-xs text-foreground/90 font-medium">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Desk Card */}
        <div className="space-y-6">
          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Application Support
            </span>
            <h4 className="mt-3 font-heading text-base font-bold uppercase text-white">Apply for Integrated M.Sc. IT</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              University admission rounds are currently underway. Submit your details online to reserve counseling support.
            </p>

            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/90 space-y-1.5">
              <p><strong>Counseling Hotline:</strong> +91-9909039233</p>
              <p><strong>Coordinator Email:</strong> admission_gperi@gtu.edu.in</p>
              <p><strong>Campus Location:</strong> Mehsana Expressway</p>
            </div>

            <Link
              to="/enquiry"
              className="mt-6 block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Apply Online Now <ArrowRight className="inline-block ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

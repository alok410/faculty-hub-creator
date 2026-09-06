import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  ShieldAlert,
  Lock,
  Terminal,
  Cpu,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  FileCheck,
} from "lucide-react";

export const Route = createFileRoute("/admissions/pgdcs")({
  head: () => ({
    meta: [
      { title: "Post Graduate Diploma in Cyber Security (PGDCS) | GTU-ITR" },
      {
        name: "description",
        content:
          "Admission guidelines, eligibility criteria, and curriculum overview for 1-Year Post Graduate Diploma in Cyber Security (PGDCS) at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Post Graduate Diploma in Cyber Security (PGDCS) | GTU-ITR" },
      {
        property: "og:description",
        content: "1-Year PGDCS in Cyber Security admissions and career paths at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/admissions/pgdcs" },
    ],
    links: [{ rel: "canonical", href: "/admissions/pgdcs" }],
  }),
  component: PgdcsAdmissionPage,
});

const STATS = [
  { label: "Program Length", value: "1 Year", icon: GraduationCap, desc: "2 intensive specialized semesters" },
  { label: "Eligibility", value: "Graduate Degree", icon: FileCheck, desc: "B.E., B.Tech, BCA, B.Sc. (IT/CS)" },
  { label: "Hands-on Lab", value: "Cyber Range", icon: Terminal, desc: "Vulnerability analysis & forensic toolkits" },
  { label: "Industry Demand", value: "High Growth", icon: Award, desc: "SOC analysts & security consultants" },
];

const DOMAINS = [
  "Ethical Hacking & Vulnerability Assessment (VAPT)",
  "Network Security Protocols & Perimeter Firewalls",
  "Digital Forensics, Evidence Preservation & Incident Response",
  "Cryptographic Algorithms, PKI & Blockchain Security",
  "Cyber Laws, IT Act 2000 & Information Security Auditing",
  "Cloud Security & DevSecOps Implementation",
];

function PgdcsAdmissionPage() {
  return (
    <PageShell
      title="PG Diploma in Cyber Security (PGDCS)"
      subtitle="1-Year specialized professional program preparing skilled cybersecurity analysts, penetration testers, and cyber defense engineers."
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
        <Badge className="bg-brand-red uppercase text-white tracking-wider">Admissions Open 2026-27</Badge>
        <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
          Post Graduate Diploma in Cyber Security (PGDCS)
        </h2>
        <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
        <p className="text-sm leading-relaxed text-foreground/85">
          In an era of accelerating cyber threats, GTU-ITR offers the specialized <strong>Post Graduate Diploma in Cyber Security (PGDCS)</strong>.
          Affiliated with Gujarat Technological University, this program is designed for engineering and IT graduates seeking
          to master ethical hacking, network defense, digital forensics, and international compliance frameworks.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Core Domains & Eligibility */}
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Eligibility &amp; Prerequisites</h3>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="space-y-4 text-xs leading-relaxed text-foreground/85">
              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">Qualifying Bachelor&apos;s Degree</p>
                <p className="mt-1">
                  Candidates must possess a Bachelor&apos;s degree in Engineering or Technology (B.E. / B.Tech in any branch),
                  BCA, B.Sc. (IT / Computer Science / Mathematics / Electronics), or equivalent degree from a recognized
                  university with the minimum qualifying percentage decreed by GTU.
                </p>
              </div>

              <div className="rounded-lg border border-border/70 bg-brand-surface/40 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">Who Should Apply?</p>
                <p className="mt-1">
                  Fresh engineering graduates, system administrators, software programmers, and IT professionals aiming to
                  pivot into cybersecurity analyst and cyber risk consulting roles.
                </p>
              </div>
            </div>

            <h4 className="mt-8 font-heading text-base font-bold uppercase text-brand-navy">Specialized Focus Areas</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {DOMAINS.map((dom, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-lg border border-border bg-brand-surface/20 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                  <span className="text-xs text-foreground/90 font-medium">{dom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Card */}
        <div className="space-y-6">
          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Enrollment Support
            </span>
            <h4 className="mt-3 font-heading text-base font-bold uppercase text-white">Apply for PGDCS Batch</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              Seats are allocated on merit basis as per university admission notifications. Submit your inquiry to secure
              detailed syllabus and fee schedules.
            </p>

            <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/90 space-y-1.5">
              <p><strong>Hotline:</strong> +91-9909039233</p>
              <p><strong>Email:</strong> admission_gperi@gtu.edu.in</p>
              <p><strong>Campus:</strong> GTU-ITR Mehsana</p>
            </div>

            <Link
              to="/enquiry"
              className="mt-6 block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Enquire for PGDCS Seat <ArrowRight className="inline-block ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

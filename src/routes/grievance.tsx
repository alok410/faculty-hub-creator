import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  ShieldCheck,
  Clock,
  FileText,
  Mail,
  Users,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/grievance")({
  head: () => ({
    meta: [
      { title: "Student Grievance Redressal Committee (SGRC) | GTU-ITR" },
      {
        name: "description",
        content:
          "Statutory Student Grievance Redressal Committee (SGRC) at GTU-ITR Mehsana. Principles of natural justice, 15-day resolution procedure, and official complaint submission portal.",
      },
      { property: "og:title", content: "Student Grievance Redressal Committee (SGRC) | GTU-ITR" },
      {
        property: "og:description",
        content: "Fair, confidential, and time-bound student grievance redressal mechanism at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/grievance" },
    ],
    links: [{ rel: "canonical", href: "/grievance" }],
  }),
  component: GrievancePage,
});

const STATS = [
  { label: "Resolution SLA", value: "15 Days", icon: Clock, desc: "Mandated report submission deadline" },
  { label: "Core Principles", value: "Natural Justice", icon: Scale, desc: "Impartial, fair & objective hearings" },
  { label: "Committee Term", value: "2 Years", icon: Users, desc: "Constitutional tenure of members" },
  { label: "Confidentiality", value: "100% Protected", icon: ShieldCheck, desc: "Safeguards against retaliation" },
];

const COMMITTEE_MEMBERS = [
  { name: "Dr. Vivek B. Patel", role: "Chairperson / Senior Faculty", email: "vivek.patel@gtu.edu.in", dept: "Mechanical Engineering" },
  { name: "Dr. Vishal Barot", role: "Member (Faculty)", email: "vishal.barot@gtu.edu.in", dept: "Science & Humanities" },
  { name: "Prof. Ankit Modi", role: "Member (Faculty)", email: "ankit.modi@gtu.edu.in", dept: "Electrical Engineering" },
  { name: "Prof. Hemal Patel", role: "Member (Faculty / WDC)", email: "hemal.patel@gtu.edu.in", dept: "Computer Engineering" },
  { name: "Dr. Piyush Miyani", role: "Member (Faculty / AISE)", email: "piyush.miyani@gtu.edu.in", dept: "Solar Energy & EE" },
  { name: "Student Representative", role: "Special Invitee (Student Member)", email: "admission_gperi@gtu.edu.in", dept: "Academic Council" },
];

const PROCEDURAL_RULES = [
  "The term of the chairperson and members of the committee is 2 years from date of appointment; student special invitees remain members for 2 years or until completion of their enrolled degree.",
  "The quorum of any meeting of SGRC including the chairperson (excluding special invitee) is strictly three members.",
  "In considering any student grievance, the committee strictly adheres to the established principles of natural justice and fair hearing.",
  "The SGRC is required to conclude its inquiry and submit a detailed report with recommendations to the Head of Institute / Vice Chancellor, with an official copy to the aggrieved student within 15 days of receiving the complaint.",
  "Grievances can be registered through the online Google Form portal, email, or submitted as a sealed physical petition.",
];

function GrievancePage() {
  return (
    <PageShell
      title="Student Grievance Redressal Committee"
      subtitle="Statutory mechanism established to address student grievances fairly, impartially, and within a strict 15-day time-bound framework."
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

      {/* Overview & Action Card */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Statutory Body</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Student Grievance Redressal Mechanism (SGRC)
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPTnGd7RrrkgH6Bs3jKHEyYBbkxFP9JtrvRZePeigQLd-gyQ/formrestricted"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-navy"
            >
              <ExternalLink className="h-4 w-4" /> Open Official Grievance Form
            </a>
            <a
              href="https://www.gtu.ac.in/GrievanceCell.aspx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-navy/30 bg-brand-surface px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              <ExternalLink className="h-4 w-4" /> GTU University Grievance Cell
            </a>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-foreground/85">
          In accordance with UGC (Redress of Grievances of Students) Regulations and Gujarat Technological University
          statutes, GTU-ITR has constituted the <strong>Student Grievance Redressal Committee (SGRC)</strong>. The
          committee provides students with an accessible, transparent, and fair forum to resolve academic disputes, fee
          queries, examination concerns, or campus facility issues.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Committee Roster Table */}
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Committee Constitution &amp; Members</h3>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-brand-navy text-white uppercase text-[11px]">
                  <tr>
                    <th className="p-3.5">Member Name</th>
                    <th className="p-3.5">Designation / Role</th>
                    <th className="p-3.5">Department</th>
                    <th className="p-3.5">Official Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {COMMITTEE_MEMBERS.map((m, idx) => (
                    <tr key={idx} className="hover:bg-brand-surface/40 transition-colors">
                      <td className="p-3.5 font-bold text-brand-navy">{m.name}</td>
                      <td className="p-3.5 text-foreground/90 font-medium">{m.role}</td>
                      <td className="p-3.5 text-muted-foreground">{m.dept}</td>
                      <td className="p-3.5">
                        <a
                          href={`mailto:${m.email}`}
                          className="text-brand-red hover:underline flex items-center gap-1 font-medium"
                        >
                          <Mail className="h-3 w-3" /> {m.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Procedural Rules */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="flex items-center gap-2 font-heading text-lg font-bold uppercase text-brand-navy">
              <Scale className="h-5 w-5 text-brand-red" /> Procedural Norms &amp; Statutory Notes
            </h3>
            <div className="mb-6 mt-2 h-0.5 w-12 bg-brand-red" />

            <div className="space-y-3">
              {PROCEDURAL_RULES.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <p className="text-xs leading-relaxed text-foreground/90">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Submission Process
            </span>
            <h4 className="mt-3 font-heading text-base font-bold uppercase text-white">How to File a Grievance</h4>
            <div className="mt-4 space-y-3 text-xs text-white/90">
              <div className="rounded-lg bg-white/10 p-3 border border-white/10">
                <p className="font-bold text-white">Step 1: Digital Submission</p>
                <p className="mt-0.5 text-white/80">Submit your concern via the official Google Form grievance link.</p>
              </div>
              <div className="rounded-lg bg-white/10 p-3 border border-white/10">
                <p className="font-bold text-white">Step 2: Formal Scrutiny</p>
                <p className="mt-0.5 text-white/80">The SGRC convenes with a minimum quorum of 3 members.</p>
              </div>
              <div className="rounded-lg bg-white/10 p-3 border border-white/10">
                <p className="font-bold text-white">Step 3: 15-Day Resolution</p>
                <p className="mt-0.5 text-white/80">Written recommendations are furnished to the Head of Institute &amp; applicant.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">Direct Administrative Office</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">
              Students may also submit physical applications in a sealed envelope to the Principal&apos;s Secretariat:
            </p>
            <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <p><strong>Location:</strong> Ground Floor, Administrative Block</p>
              <p><strong>Email:</strong> admission_gperi@gtu.edu.in</p>
              <p><strong>Telephone:</strong> +91-9909039233</p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

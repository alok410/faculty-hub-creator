import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ShieldCheck,
  Scale,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  BookOpen,
  Trophy,
  Download,
  Building2,
  CheckCircle2,
  ArrowRight,
  Gavel,
} from "lucide-react";

export const Route = createFileRoute("/institute-committee")({
  head: () => ({
    meta: [
      { title: "Statutory Institute Committees | GTU-ITR" },
      {
        name: "description",
        content:
          "Official institutional committees governing academic oversight, discipline, grievance redressal, women development, examinations, and placements at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Statutory Institute Committees | GTU-ITR" },
      {
        property: "og:description",
        content: "Central governance committees, constitution, and mandates at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/institute-committee" },
    ],
    links: [{ rel: "canonical", href: "/institute-committee" }],
  }),
  component: InstituteCommitteePage,
});

const STATS = [
  { label: "Active Committees", value: "10 Bodies", icon: Users, desc: "Academic, administrative & welfare" },
  { label: "Compliance", value: "100% AICTE / GTU", icon: ShieldCheck, desc: "Constitutional and statutory adherence" },
  { label: "Student Reps", value: "Democratic", icon: Scale, desc: "Student members in grievance & SAC" },
  { label: "Official Gazzette", value: "R1 Approved", icon: Gavel, desc: "Formal institute notification" },
];

const COMMITTEES = [
  {
    name: "Academic Monitoring & Advisory Committee",
    icon: GraduationCap,
    category: "Academic Governance",
    convener: "Principal & Heads of Departments",
    mandate:
      "Reviews curriculum implementation, lesson plans, syllabus completion, laboratory logs, and continuous internal evaluation (CIE) outcomes across all engineering branches.",
  },
  {
    name: "Examination & Evaluation Committee",
    icon: CheckCircle2,
    category: "Examinations",
    convener: "Institute Exam Controller & Coordinators",
    mandate:
      "Oversees smooth execution of Mid-Semester exams, remedial tests, submission of continuous internal marks, and coordination of GTU External Practical and Theory examinations.",
  },
  {
    name: "Anti-Ragging Committee & Squad",
    icon: ShieldCheck,
    category: "Student Safety",
    convener: "Head of Institute & Senior Faculty Panel",
    mandate:
      "Enforces zero-tolerance against harassment as decreed by the Supreme Court of India. Coordinates unannounced squad visits in hostels, campus corridors, and college buses.",
  },
  {
    name: "Women Development Cell (WDC) & ICC",
    icon: HeartHandshake,
    category: "Gender Equity",
    convener: "Prof. Hemal Patel & Women Faculty Team",
    mandate:
      "Ensures gender sensitization, women empowerment programs, self-defense workshops, and speedy resolution of complaints under the POSH Act.",
  },
  {
    name: "Student Grievance Redressal Committee (SGRC)",
    icon: Scale,
    category: "Welfare & Justice",
    convener: "Dr. Vivek B. Patel & SGRC Panel",
    mandate:
      "Operates under strict natural justice principles to resolve academic, fee, and administrative grievances within a statutory 15-day time-bound SLA.",
  },
  {
    name: "Training & Placement (TPO) Committee",
    icon: Briefcase,
    category: "Career Services",
    convener: "Training & Placement Officer (TPO)",
    mandate:
      "Drives corporate industry linkage, student aptitude and technical mock interview training, on-campus recruitment drives, and student summer internships.",
  },
  {
    name: "Central Library & E-Learning Committee",
    icon: BookOpen,
    category: "Knowledge Infrastructure",
    convener: "Librarian & Departmental Faculty Reps",
    mandate:
      "Manages annual acquisition of textbooks, subscriptions to national/international research journals, IEEE digital libraries, and digital reading hall resources.",
  },
  {
    name: "Student Activity Cell (SAC) & Sports Council",
    icon: Trophy,
    category: "Extracurriculars",
    convener: "SAC Faculty Mentor & Student Office Bearers",
    mandate:
      "Coordinates annual flagship fests including Kaushalya Cultural Fest, Shaurya Sports Tournament, technical hackathons, and National Service Scheme (NSS) drives.",
  },
  {
    name: "Central Purchase & Equipment Audit Committee",
    icon: Building2,
    category: "Operations",
    convener: "Administrative Officer & Lab Technicians",
    mandate:
      "Supervises procurement of state-of-the-art laboratory machinery, software licenses, IT infrastructure, and annual hardware equipment maintenance.",
  },
  {
    name: "Alumni Relations Committee",
    icon: Users,
    category: "Outreach",
    convener: "Alumni Incharge & Department Coordinators",
    mandate:
      "Maintains the GTU-ITR Alumni Connect portal, coordinates batch reunions, qualification transcripts, and star alumni guest mentorship sessions.",
  },
];

function InstituteCommitteePage() {
  return (
    <PageShell
      title="Statutory Institute Committees"
      subtitle="Institutional governance framework ensuring academic excellence, transparent administration, student welfare, and strict regulatory compliance."
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

      {/* Overview & Download Action Card */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Governance &amp; Oversight</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Institutional Committee Framework
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <a
            href="https://gtuitr.gtu.ac.in/pdf/Institute%20Committee_%20R1.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-red"
          >
            <Download className="h-4 w-4" /> Download Official Notification (PDF)
          </a>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          To maintain rigorous standards in pedagogy, campus discipline, student safety, and operational excellence,
          GTU-ITR has constituted statutory committees comprising faculty members, administrative leadership, and student
          representatives. Committees meet periodically, and their recommendations directly guide institutional policies.
        </p>
      </div>

      {/* Committees Grid */}
      <div className="space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Committees &amp; Responsibilities</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {COMMITTEES.map((comm, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <comm.icon className="h-5 w-5 text-brand-red" />
                  </div>
                  <span className="rounded bg-brand-surface px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy border border-border/80">
                    {comm.category}
                  </span>
                </div>

                <h4 className="mt-4 font-heading text-base font-bold text-brand-navy">{comm.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{comm.mandate}</p>
              </div>

              <div className="mt-5 border-t border-border/70 pt-3 flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">Head / Leadership:</span>
                <span className="font-bold text-brand-navy">{comm.convener}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Institutional Representation
            </span>
            <h4 className="mt-2 font-heading text-xl font-bold uppercase text-white">
              Questions Regarding Committee Decisions or Representations?
            </h4>
            <p className="mt-1 text-xs text-white/80 max-w-xl">
              Formal representations to any institute committee can be directed through the Principal&apos;s Secretariat or
              submitted online.
            </p>
          </div>
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
          >
            Contact Committee Secretariat <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

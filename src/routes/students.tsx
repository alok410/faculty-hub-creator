import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Sparkles,
  HeartHandshake,
  BookOpen,
  CalendarDays,
  ShieldAlert,
  Bus,
  Scale,
  Download,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "Student Corner & Activity Cell (SAC) | GTU-ITR" },
      {
        name: "description",
        content:
          "Student Activity Cell (SAC), student clubs, mentoring, grievance redressal, cultural fests, and campus life at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Student Corner & Activity Cell (SAC) | GTU-ITR" },
      {
        property: "og:description",
        content: "Discover student clubs, leadership initiatives, grievance mechanisms, and campus life at GTU-ITR.",
      },
      { property: "og:url", content: "/students" },
    ],
    links: [{ rel: "canonical", href: "/students" }],
  }),
  component: StudentCornerPage,
});

const QUICK_LINKS = [
  { title: "Student Clubs", desc: "ACES, Robotics, Coding, Cultural & Sports", href: "/students-clubs", icon: Sparkles },
  { title: "Academic Calendar", desc: "Semester milestones & exam schedules", href: "/calendar", icon: CalendarDays },
  { title: "Achievements", desc: "National Ideathon & SSIP grant awards", href: "/achievements", icon: Trophy },
  { title: "Anti-Ragging Cell", desc: "Zero-tolerance policy & mentoring cell", href: "/anti-ragging", icon: ShieldAlert },
  { title: "Regulations & Discipline", desc: "Campus rules, dress code & hostel norms", href: "/regulations", icon: Scale },
  { title: "Bus Transportation", desc: "5 regional routes across North Gujarat", href: "/transportation", icon: Bus },
];

const SAC_OBJECTIVES = [
  "Facilitate holistic academic, professional, and personality growth among students.",
  "Organize annual socio-cultural events such as Kaushalya Cultural Fest and Shaurya Sports Meet.",
  "Cultivate leadership, team building, effective communication, and crisis management skills.",
  "Coordinate guest lectures, industry hackathons, technical paper presentations, and coding contests.",
  "Serve as an open, democratic forum run 'for the students and by the students'.",
];

function StudentCornerPage() {
  return (
    <PageShell
      title="Student Corner"
      subtitle="Hub of student activity, leadership development, cultural fests, academic mentorship, and campus support at GTU-ITR Mehsana."
    >
      {/* Student Activity Cell Hero Banner */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Student Governance</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Student Activity Cell (SAC)
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://gtuitr.gtu.ac.in/%5CgperiDoc%5CSAC.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-navy/30 bg-brand-surface px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              <Download className="h-4 w-4" /> Download SAC Team (PDF)
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPTnGd7RrrkgH6Bs3jKHEyYBbkxFP9JtrvRZePeigQLd-gyQ/formrestricted"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
            >
              <ExternalLink className="h-4 w-4" /> Grievance Portal
            </a>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-foreground/85">
          The <strong>Student Activity Cell (SAC)</strong> is the central student body of GTU-ITR. It serves as the
          catalyst for curricular and co-curricular initiatives, technical competitions, and community outreach. Designed
          to foster comprehensive 360-degree personality development, SAC provides engineering students with real-world
          opportunities to practice organizational leadership, problem-solving, and civic responsibility.
        </p>

        <div className="mt-8 rounded-xl border border-border/70 bg-brand-surface/40 p-6">
          <h3 className="flex items-center gap-2 font-heading text-base font-bold uppercase text-brand-navy">
            <Award className="h-5 w-5 text-brand-red" /> Core SAC Objectives
          </h3>
          <div className="mb-4 mt-2 h-0.5 w-10 bg-brand-red" />
          <div className="grid gap-3 sm:grid-cols-2">
            {SAC_OBJECTIVES.map((obj, i) => (
              <div key={i} className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-white p-3 shadow-2xs">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <p className="text-xs leading-relaxed text-foreground/90">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid to Student Modules */}
      <div>
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Explore Student Corner Services</h3>
        <p className="mt-1 text-xs text-muted-foreground">Direct access to clubs, calendars, regulations, and student care.</p>
        <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-md"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white transition-colors group-hover:bg-brand-red">
                  <link.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-heading text-base font-bold text-brand-navy transition-colors group-hover:text-brand-red">
                  {link.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{link.desc}</p>
              </div>

              <div className="mt-6 border-t border-border/70 pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors group-hover:text-brand-red">
                <span>Access Module</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Helpline & Support Strip */}
      <div className="mt-12 rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Student Welfare &amp; Safety
            </span>
            <h4 className="mt-2 font-heading text-xl font-bold uppercase text-white">
              Need Immediate Academic or Personal Assistance?
            </h4>
            <p className="mt-1 text-xs text-white/80 max-w-xl">
              GTU-ITR maintains a dedicated Mentoring Cell, Student Grievance Redressal Committee, and round-the-clock
              Women Helpline to ensure a secure, respectful campus environment.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-white/70 font-semibold uppercase">24x7 Helpline Desk</span>
            <span className="font-display text-xl font-bold text-brand-red bg-white/10 px-4 py-2 rounded-lg border border-white/20">
              +91 7827170170
            </span>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

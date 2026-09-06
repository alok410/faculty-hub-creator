import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Layers,
  Users,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Monitor,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/academics/diploma/computer")({
  head: () => ({
    meta: [
      { title: "Diploma in Computer Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "3-Year Technical Diploma in Computer Engineering after Standard 10th at GTU-ITR Mehsana. Core programming, databases, web development, and direct D2D entry to B.E.",
      },
      { property: "og:title", content: "Diploma in Computer Engineering | GTU-ITR" },
      {
        property: "og:description",
        content: "Technical diploma in computer engineering after 10th at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/academics/diploma/computer" },
    ],
    links: [{ rel: "canonical", href: "/academics/diploma/computer" }],
  }),
  component: ComputerDiplomaPage,
});

const STATS = [
  { label: "Duration", value: "3 Yrs (6 Sems)", icon: Layers, desc: "Technical Diploma after 10th" },
  { label: "Seat Quota", value: "50% ACPDC + 50% MQ", icon: Users, desc: "Merit counselling & direct admission" },
  { label: "Practical Training", value: "Hands-on", icon: Monitor, desc: "Programming, web & hardware labs" },
  { label: "Next Step", value: "Direct D2D B.E.", icon: GraduationCap, desc: "Enter degree 2nd year without JEE" },
];

const LABS = [
  { name: "Programming Fundamentals Lab", desc: "C and C++ structured programming, logic building, and data structures implementation." },
  { name: "Database & Web Development Lab", desc: "Relational database queries, MySQL, HTML5, CSS3, JavaScript, and responsive layout design." },
  { name: "Computer Hardware & Networking Lab", desc: "Motherboard architecture, peripheral troubleshooting, LAN cabling, switch setup, and TCP/IP config." },
  { name: "Operating Systems & Linux Lab", desc: "Command line shell scripting, user permission management, kernel concepts, and server setup." },
];

const SEMESTERS = [
  { sem: "Semester 1 & 2", courses: ["Mathematics I & II", "Basic Physics", "Computer Programming (C)", "Fundamentals of Web Development", "Engineering Graphics"] },
  { sem: "Semester 3 & 4", courses: ["Data Structures & Algorithms", "Database Management Systems", "Object Oriented Programming (C++)", "Computer Networks", "Digital Electronics"] },
  { sem: "Semester 5 & 6", courses: ["Java Programming", "Software Engineering", "Mobile Application Development", "Network Security", "Capstone Diploma Project"] },
];

function ComputerDiplomaPage() {
  return (
    <PageShell
      title="Computer Engineering (Diploma)"
      subtitle="3-Year Technical Diploma after 10th Standard delivering solid foundations in coding, software development, and direct entry into B.E. Degree."
    >
      {/* Top Banner Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-navy">{s.label}</div>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-1 gap-1 rounded-xl bg-muted/60 p-1.5 sm:grid-cols-3">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Program Overview</TabsTrigger>
          <TabsTrigger value="labs" className="py-2.5 font-medium">Practical Labs</TabsTrigger>
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">6-Semester Syllabus</TabsTrigger>
        </TabsList>

        {/* Tab 1: Overview */}
        <TabsContent value="overview" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-red uppercase text-white tracking-wider">Early Technical Career</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Diploma in Computer Engineering
                </h2>
                <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
              </div>
              <Link
                to="/admissions/diploma"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
              >
                Admission Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">
              The Diploma in Computer Engineering at GTU-ITR introduces students directly after 10th standard to modern
              software development, networking, web architectures, and database programming. With access to high-spec
              computer labs and guidance from dedicated faculties, students develop valuable technical skills early.
            </p>

            <div className="mt-8 rounded-xl border border-brand-navy/20 bg-brand-surface/40 p-6">
              <h3 className="font-heading text-base font-bold uppercase text-brand-navy">
                The D2D (Diploma-to-Degree) Advantage
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                Upon passing the 3-year diploma, students are eligible for direct lateral entry into Semester-3 of the
                Bachelor of Engineering (B.E.) degree through the ACPC D2D centralized admission system without appearing
                in GUJCET or JEE entrance exams.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Labs */}
        <TabsContent value="labs" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Diploma Computer Laboratories</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            <div className="grid gap-6 md:grid-cols-2">
              {LABS.map((l, i) => (
                <div key={i} className="rounded-xl border border-border bg-brand-surface/30 p-5">
                  <h4 className="font-heading text-base font-bold text-brand-navy">{l.name}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Curriculum */}
        <TabsContent value="curriculum" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">6-Semester Curriculum Structure</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            <div className="grid gap-6 md:grid-cols-3">
              {SEMESTERS.map((s, i) => (
                <div key={i} className="rounded-xl border border-border bg-brand-surface/30 p-5">
                  <Badge className="bg-brand-navy text-white uppercase text-[10px]">{s.sem}</Badge>
                  <ul className="mt-4 space-y-2 text-xs">
                    {s.courses.map((c, cidx) => (
                      <li key={cidx} className="flex items-center gap-2 text-foreground/90 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}

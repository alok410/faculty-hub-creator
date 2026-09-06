import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Layers,
  Users,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Cpu,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/academics/diploma/mechanical")({
  head: () => ({
    meta: [
      { title: "Diploma in Mechanical Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "3-Year Technical Diploma in Mechanical Engineering after Standard 10th at GTU-ITR Mehsana. Workshop fabrication, CNC fundamentals, CAD drafting, and direct D2D entry to B.E.",
      },
      { property: "og:title", content: "Diploma in Mechanical Engineering | GTU-ITR" },
      {
        property: "og:description",
        content: "Technical diploma in mechanical engineering after 10th at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/academics/diploma/mechanical" },
    ],
    links: [{ rel: "canonical", href: "/academics/diploma/mechanical" }],
  }),
  component: MechanicalDiplomaPage,
});

const STATS = [
  { label: "Duration", value: "3 Yrs (6 Sems)", icon: Layers, desc: "Technical Diploma after 10th" },
  { label: "Seat Quota", value: "50% ACPDC + 50% MQ", icon: Users, desc: "Merit counselling & direct admission" },
  { label: "Workshop Bays", value: "Hands-on", icon: Wrench, desc: "Welding, machining & fitting shops" },
  { label: "Next Step", value: "Direct D2D B.E.", icon: GraduationCap, desc: "Enter degree 2nd year without JEE" },
];

const LABS = [
  { name: "Central Machine Shop", desc: "Lathe operations, shapers, radial drill presses, and bench grinders for machine parts fabrication." },
  { name: "Mechanical CAD Drafting Lab", desc: "Computer-aided drafting, orthographic projections, isometric models, and part detailing." },
  { name: "Thermal & Automobile Lab", desc: "Working models of two-stroke and four-stroke engines, fuel systems, and chassis mechanisms." },
  { name: "Fluid Mechanics & Hydraulics Bay", desc: "Hydraulic jacks, centrifugal pump test rigs, pipe friction measurement, and manometer readings." },
];

const SEMESTERS = [
  { sem: "Semester 1 & 2", courses: ["Mathematics I & II", "Applied Physics", "Workshop Practice I & II", "Engineering Graphics", "Basic Electrical & Electronics"] },
  { sem: "Semester 3 & 4", courses: ["Strength of Materials", "Manufacturing Technology", "Thermal Engineering", "Mechanical Drafting", "Fluid Mechanics & Machinery"] },
  { sem: "Semester 5 & 6", courses: ["Design of Machine Elements", "Industrial Engineering & Quality", "Refrigeration & Air Conditioning", "CNC Machining & Automation", "Diploma Major Project"] },
];

function MechanicalDiplomaPage() {
  return (
    <PageShell
      title="Mechanical Engineering (Diploma)"
      subtitle="3-Year Technical Diploma after 10th Standard delivering solid practical fabrication skills, CNC basics, and seamless progression into B.E. Degree."
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

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <div className="mb-8 rounded-xl border border-brand-navy/20 bg-brand-navy p-2 shadow-md">
          <TabsList className="grid w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-3">
            <TabsTrigger
              value="overview"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Program Overview
            </TabsTrigger>
            <TabsTrigger
              value="labs"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Workshop &amp; Labs
            </TabsTrigger>
            <TabsTrigger
              value="curriculum"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Semester Matrix
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Overview */}
        <TabsContent value="overview" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-red uppercase text-white tracking-wider">Vocational &amp; Technical Foundation</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Diploma in Mechanical Engineering
                </h2>
                <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
              </div>
              <Link
                to="/admissions/diploma"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
              >
                Admission Criteria <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-foreground/85">
              The Diploma in Mechanical Engineering equips students after 10th Standard with hands-on mechanical fabrication,
              CAD drafting, lathe machining, thermal systems, and quality inspection skills. Students benefit from access to
              our sprawling central workshop and Siemens Centre of Excellence facilities.
            </p>

            <div className="mt-8 rounded-xl border border-brand-navy/20 bg-brand-surface/40 p-6">
              <h3 className="font-heading text-base font-bold uppercase text-brand-navy">
                The D2D (Diploma-to-Degree) Pathway
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                Completing this 3-year diploma unlocks direct lateral entry into Semester-3 of the Bachelor of Engineering
                (B.E.) program through ACPC counselling, giving students a prestigious degree qualification with deep practical grounding.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Labs */}
        <TabsContent value="labs" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Mechanical Workshop Bays &amp; Labs</h2>
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
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">6-Semester Curriculum Matrix</h2>
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

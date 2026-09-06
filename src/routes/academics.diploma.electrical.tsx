import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA } from "@/content/faculty";
import {
  Zap,
  Layers,
  Users,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Sun,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/academics/diploma/electrical")({
  head: () => ({
    meta: [
      { title: "Diploma in Electrical Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "3-Year Technical Diploma in Electrical Engineering after 10th Standard at GTU-ITR Mehsana. Practical wiring, electrical machines, solar basics, switchgear, and direct D2D lateral entry into B.E.",
      },
      { property: "og:title", content: "Diploma in Electrical Engineering | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Technical diploma in electrical engineering after 10th standard at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/academics/diploma/electrical" },
    ],
    links: [{ rel: "canonical", href: "/academics/diploma/electrical" }],
  }),
  component: ElectricalDiplomaPage,
});

const STATS = [
  { label: "Duration", value: "3 Yrs (6 Sems)", icon: Layers, desc: "Technical Diploma after 10th (SSC)" },
  { label: "Seat Quota", value: "50% ACPDC + 50% MQ", icon: Users, desc: "Merit counselling & direct admission" },
  { label: "Practical Training", value: "Hands-on Benches", icon: Zap, desc: "Motors, transformers & wiring" },
  { label: "Next Step", value: "Direct D2D B.E.", icon: GraduationCap, desc: "Direct entry to 2nd year B.E. without 12th" },
];

const LABS = [
  {
    name: "Electrical Machines Practical Lab",
    desc: "Hands-on loading, speed control, and starter connection of DC shunt motors, 3-phase squirrel cage induction motors, and single-phase transformers.",
    tools: ["DC Shunt Motors", "3-Phase Induction Motors", "Auto-Transformers", "3-Point & 4-Point Starters", "Digital Panel Meters"],
  },
  {
    name: "Electrical Wiring & Installation Workshop",
    desc: "Domestic, commercial, and industrial conduit wiring, staircase circuits, MCB / ELCB distribution board wiring, and earthing setups.",
    tools: ["Conduit Bending & Wiring Benches", "MCB & RCCB Panels", "Megger Insulation Testers", "Earth Resistance Testers"],
  },
  {
    name: "Basic Electronics & Instrumentation Lab",
    desc: "Testing of diodes, transistors, power supplies, multimeters, function generators, and digital oscilloscopes.",
    tools: ["Dual-Trace Cathode Ray Oscilloscopes", "Regulated Power Supplies", "Digital Multimeters", "Breadboards & Solder Stations"],
  },
  {
    name: "Switchgear & Solar Training Setup",
    desc: "Hands-on exposure to contactors, relays, fuses, miniature switchgear, and practical solar panel photovoltaic wiring.",
    tools: ["Thermal Overload Relays", "Electromagnetic Contactors", "Solar PV Demonstration Panels", "Solar Battery Chargers"],
  },
];

const SEMESTERS = [
  {
    sem: "Semester 1 & 2 (Foundational)",
    courses: [
      "Mathematics I & II",
      "Applied Physics",
      "Applied Chemistry",
      "Basic Electrical Engineering",
      "Engineering Graphics & CAD Basics",
      "Electrical Wiring & Workshop Practice",
    ],
  },
  {
    sem: "Semester 3 & 4 (Core Electrical)",
    courses: [
      "DC Machines & Transformers",
      "Electrical Circuit Analysis",
      "Electronic Devices & Circuits",
      "Electrical & Electronic Measurements",
      "AC Machines (Induction & Synchronous)",
      "Transmission & Distribution of Electrical Power",
    ],
  },
  {
    sem: "Semester 5 & 6 (Applications & Project)",
    courses: [
      "Power Electronics & Microcontrollers",
      "Switchgear & Protection",
      "Industrial Automation & PLC Basics",
      "Renewable Solar Energy Systems",
      "Electrical Estimation & Costing",
      "Diploma Capstone Project & Industry Training",
    ],
  },
];

function ElectricalDiplomaPage() {
  return (
    <PageShell
      title="Electrical Engineering (Diploma)"
      subtitle="3-Year Technical Diploma after 10th Standard delivering solid practical electrical wiring, machine testing, and seamless progression into B.E. Degree."
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
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 sm:grid-cols-4">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Program Overview</TabsTrigger>
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Faculty Members (4)</TabsTrigger>
          <TabsTrigger value="labs" className="py-2.5 font-medium">Practical Workshops &amp; Labs</TabsTrigger>
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">6-Semester Syllabus</TabsTrigger>
        </TabsList>

        {/* 1. OVERVIEW */}
        <TabsContent value="overview" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Program Overview</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The 3-Year Diploma in Electrical Engineering at GTU-ITR is an AICTE-approved technical program designed for students right after their 10th Standard (SSC). It provides a robust, application-focused grounding in electrical power, motor maintenance, residential and commercial wiring, transformer servicing, and renewable energy equipment.
              </p>
              <p>
                A signature benefit of this diploma program is the direct D2D (Diploma to Degree) lateral progression. Successful diplomates can enroll straight into the 2nd year (3rd semester) of any Bachelor of Engineering (B.E.) degree across Gujarat without needing to clear 11th, 12th science, or competitive entrance examinations.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Practical-First Training</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Over 60% of instructional hours are spent operating physical motor test benches, control panels, and wiring boards.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <GraduationCap className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Direct D2D Degree Option</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join B.E. Electrical directly in 2nd Year via ACPC lateral entry, saving years and gaining practical credentials.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Sun className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Solar Energy Edge</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hands-on familiarity with solar PV arrays, inverters, and net-metering through campus solar research setups.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 2. FACULTY MEMBERS */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Electrical Engineering (Diploma)"
            teachingFaculty={FACULTY_DATA["diploma-electrical"].teaching}
            technicalStaff={FACULTY_DATA["diploma-electrical"].technical}
          />
        </TabsContent>

        {/* 3. LABS */}
        <TabsContent value="labs" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Practical Laboratories &amp; Workshop Setups</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              The diploma wing provides dedicated access to electrical machinery benches, safety isolation panels, and testing instruments adhering to industrial electrical standards.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {LABS.map((lab, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy text-base mb-2">
                    <Wrench className="h-4 w-4 text-brand-red shrink-0" />
                    <h3>{lab.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{lab.desc}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Equipment Handled:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {lab.tools.map((t, tIdx) => (
                        <Badge key={tIdx} variant="secondary" className="text-[11px] font-normal px-2 py-0.5">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* 3. CURRICULUM */}
        <TabsContent value="curriculum" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-brand-navy">6-Semester Diploma Curriculum</h2>
                <p className="text-sm text-muted-foreground mt-1">Conforming to the latest Gujarat Technological University (GTU) Diploma Teaching Scheme.</p>
              </div>
              <Badge variant="outline" className="border-brand-navy/30 text-brand-navy self-start md:self-auto px-3 py-1">
                AICTE Approved Diploma
              </Badge>
            </div>
            <div className="mb-6 h-1 w-16 bg-brand-red rounded-full" />

            <div className="grid gap-6 md:grid-cols-3">
              {SEMESTERS.map((sem, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy mb-3 text-sm border-b border-border pb-2">
                    <BookOpen className="h-4 w-4 text-brand-red" />
                    <h4>{sem.sem}</h4>
                  </div>
                  <ul className="space-y-2">
                    {sem.courses.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA } from "@/content/faculty";
import {
  Compass,
  Building2,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Layers,
  Users,
  FileText,
  HardHat,
  GraduationCap,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/academics/diploma/civil")({
  head: () => ({
    meta: [
      { title: "Diploma in Civil Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "3-Year Technical Diploma in Civil Engineering after 10th Standard at GTU-ITR Mehsana. Field surveying, concrete testing, building drawing, and direct D2D lateral entry into B.E.",
      },
      { property: "og:title", content: "Diploma in Civil Engineering | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Technical diploma in civil engineering after 10th standard at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/academics/diploma/civil" },
    ],
    links: [{ rel: "canonical", href: "/academics/diploma/civil" }],
  }),
  component: CivilDiplomaPage,
});

const STATS = [
  { label: "Duration", value: "3 Yrs (6 Sems)", icon: Layers, desc: "Technical Diploma after 10th (SSC)" },
  { label: "Seat Quota", value: "50% ACPDC + 50% MQ", icon: Users, desc: "Merit counselling & direct admission" },
  { label: "Field Practice", value: "Hands-on", icon: HardHat, desc: "Surveying, soil & material testing" },
  { label: "Next Step", value: "Direct D2D B.E.", icon: GraduationCap, desc: "Direct entry to 2nd year B.E. without 12th" },
];

const LABS = [
  {
    name: "Surveying Field Lab",
    desc: "Hands-on mastery of optical & electronic surveying tools including Chain, Prismatic Compass, Plane Table, Leveling, and Theodolite.",
    tools: ["Auto Levels", "Transit Theodolite", "Prismatic Compass", "Measuring Chains & Tapes", "Ranging Rods & Staffs"],
  },
  {
    name: "Concrete & Construction Materials Lab",
    desc: "Standard destructive and non-destructive testing of bricks, coarse/fine aggregates, cement mortar, and concrete cubes.",
    tools: ["Compression Testing Unit", "Slump Cone", "Sieve Shaker Set", "Vicat Needle", "Le Chatelier Mould"],
  },
  {
    name: "Civil CAD & Building Drawing Studio",
    desc: "Drafting residential floor plans, elevation, sectional views, municipal bye-law compliance, and plumbing schematics in AutoCAD.",
    tools: ["AutoCAD Civil", "Drafting Desks", "Plotter Printing", "Standard Plan Layouts"],
  },
  {
    name: "Hydraulics & Environmental Practical Bay",
    desc: "Measurement of water discharge, pipe friction losses, water quality pH/turbidity, and demonstration of open-channel flows.",
    tools: ["Orifice & Mouthpiece Apparatus", "Pipe Friction Setup", "pH & Turbidity Meters", "Open Channel Flume"],
  },
];

const SEMESTERS = [
  {
    sem: "Semester 1 & 2 (Foundational)",
    courses: [
      "Mathematics I & II",
      "Applied Physics",
      "Applied Chemistry",
      "Engineering Graphics & Building Drawing",
      "Basic Civil & Environmental Engineering",
      "Computer Applications & Digital Tools",
    ],
  },
  {
    sem: "Semester 3 & 4 (Core Civil)",
    courses: [
      "Mechanics of Structures",
      "Advanced Surveying",
      "Building Construction & Materials",
      "Fluid Mechanics & Hydraulics",
      "Concrete Technology",
      "Water Supply & Sanitary Engineering",
    ],
  },
  {
    sem: "Semester 5 & 6 (Applications & Project)",
    courses: [
      "Design of Steel & RCC Structures",
      "Highway Engineering",
      "Estimating, Costing & Valuation",
      "Construction Management & Safety",
      "Irrigation Engineering",
      "Diploma Capstone Project & Viva",
    ],
  },
];

function CivilDiplomaPage() {
  return (
    <PageShell
      title="Civil Engineering (Diploma)"
      subtitle="3-Year Technical Diploma after 10th Standard delivering solid practical field surveying, building drafting, and seamless progression into B.E. Degree."
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
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Faculty Members (3)</TabsTrigger>
          <TabsTrigger value="labs" className="py-2.5 font-medium">Practical Labs &amp; Fields</TabsTrigger>
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">6-Semester Syllabus</TabsTrigger>
        </TabsList>

        {/* 1. OVERVIEW */}
        <TabsContent value="overview" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Program Overview</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The 3-Year Diploma in Civil Engineering at GTU-ITR is an AICTE-approved professional diploma programme designed specifically for students who have completed their 10th Standard (SSC). It provides a direct, highly practical gateway into the engineering profession, focusing on hands-on surveying, building drawing, quality testing, and construction supervision.
              </p>
              <p>
                Students who complete this programme gain both technical self-reliance and the coveted privilege of direct lateral entry into the second year (3rd semester) of any B.E./B.Tech Civil Engineering degree programme across Gujarat without needing to take 11th, 12th, or entrance exams like JEE or GUJCET.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Immediate Technical Skills</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Learn building drawing, material testing, leveling, and site estimation right from the 1st year.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <GraduationCap className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Direct D2D Degree Option</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join B.E. Civil directly in 2nd Year, saving valuable time while holding an additional diploma credential.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Building2 className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Industry-Grade Labs</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Train in the same state-of-the-art surveying and material testing labs utilized by degree students.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 2. FACULTY MEMBERS */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Civil Engineering (Diploma)"
            teachingFaculty={FACULTY_DATA["diploma-civil"].teaching}
            technicalStaff={FACULTY_DATA["diploma-civil"].technical}
          />
        </TabsContent>

        {/* 3. LABS */}
        <TabsContent value="labs" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Practical Laboratories &amp; Field Setups</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Diploma education is 60% practical. Our department provides full hands-on access to specialized surveying equipment, concrete testing apparatus, and CAD design workstations.
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

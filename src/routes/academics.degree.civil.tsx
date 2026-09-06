import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Compass,
  HardHat,
  Building2,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
  Target,
  Eye,
  Layers,
  Sparkles,
  ArrowRight,
  Briefcase,
  MapPin,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/academics/degree/civil")({
  head: () => ({
    meta: [
      { title: "B.E. in Civil Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "Bachelor of Engineering in Civil Engineering at GTU-ITR Mehsana. Structural analysis, surveying, geotech, concrete tech, and environmental engineering.",
      },
      { property: "og:title", content: "B.E. in Civil Engineering | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Undergraduate B.E. Civil Engineering curriculum, vision, and laboratories at GTU-ITR.",
      },
      { property: "og:url", content: "/academics/degree/civil" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/civil" }],
  }),
  component: CivilDegreePage,
});

const STATS = [
  { label: "Duration & Creds", value: "4 Yrs (8 Sems)", icon: Layers, desc: "AICTE approved B.E. Degree" },
  { label: "Approved Intake", value: "60 Seats", icon: Users, desc: "100% ACPC counseling allocation" },
  { label: "Specialized Labs", value: "7 Labs", icon: HardHat, desc: "Field-grade testing machinery & CAD" },
  { label: "Faculty Mentors", value: "Ph.D. & M.Tech", icon: Award, desc: "Structural & geotechnical experts" },
];

const LABS = [
  {
    name: "Surveying & Geomatics Lab",
    desc: "Equipped with advanced optoelectronic instruments for modern topographical mapping, geodetic surveying, and site layouting.",
    tools: ["Electronic Total Station", "Digital Auto Levels", "Transit Theodolites", "Prismatic Compasses", "Handheld GPS Recorders"],
  },
  {
    name: "Concrete Technology & Material Testing Lab",
    desc: "Rigorous quality assessment of cement, aggregates, fresh and hardened concrete in compliance with Bureau of Indian Standards (BIS).",
    tools: ["2000 kN Compression Testing Machine (CTM)", "Vee-Bee Consistometer", "Slump Cone Apparatus", "Compaction Factor Apparatus", "Vicat Needle Setup"],
  },
  {
    name: "Geotechnical & Soil Mechanics Lab",
    desc: "Evaluation of soil shear strength, bearing capacity, consolidation, permeability, and compaction properties for foundation design.",
    tools: ["Direct Shear Test Machine", "Triaxial Shear Cell", "Standard & Modified Proctor Molds", "Falling Head Permeameter", "Casagrande Liquid Limit Apparatus"],
  },
  {
    name: "Fluid Mechanics & Hydraulics Machinery Lab",
    desc: "Experimental study of fluid behavior in open channels and conduits, calibration of flow meters, and hydraulic turbines.",
    tools: ["Venturimeter & Orificemeter Test Rigs", "Tilting Hydraulic Flume", "Pelton Wheel Turbine", "Francis Turbine Test Rig", "Centrifugal Pump Test Station"],
  },
  {
    name: "Environmental Engineering Lab",
    desc: "Physico-chemical and biological analysis of potable water, municipal wastewater, and industrial effluent parameters.",
    tools: ["BOD / COD Incubators", "Nephelometric Turbidity Meter", "Digital pH & Conductivity Meters", "Flocculator Jar Test Apparatus", "Spectrophotometer"],
  },
  {
    name: "Transportation & Highway Engineering Lab",
    desc: "Testing of bituminous binders, aggregates, and asphalt pavement mixtures for road and airfield pavement construction.",
    tools: ["Los Angeles Abrasion Machine", "Ductility Testing Machine", "Standard Bitumen Penetrometer", "Flash & Fire Point Apparatus", "Marshall Stability Setup"],
  },
  {
    name: "Computer Aided Design (CAD) & Structural Studio",
    desc: "High-performance graphics workstations loaded with structural drafting, finite-element analysis, and 3D building modeling tools.",
    tools: ["Autodesk AutoCAD 2024", "Bentley STAAD.Pro V8i", "CSI ETABS", "Revit Architecture", "QGIS Open Geomatics"],
  },
];

const CURRICULUM_SEMESTERS = [
  {
    year: "First Year (Sem 1 & 2)",
    courses: [
      "Basics of Civil & Mechanical Engineering",
      "Engineering Graphics & Design (AutoCAD)",
      "Engineering Mathematics I & II",
      "Physics of Materials",
      "Environmental Studies & Green Tech",
    ],
  },
  {
    year: "Second Year (Sem 3 & 4)",
    courses: [
      "Mechanics of Solids",
      "Surveying & Geomatics",
      "Fluid Mechanics",
      "Concrete Technology",
      "Building Construction Technology",
      "Structural Analysis I",
      "Geotechnical Engineering I",
      "Complex Variables & Numerical Methods",
    ],
  },
  {
    year: "Third Year (Sem 5 & 6)",
    courses: [
      "Design of Reinforced Concrete Structures (IS 456)",
      "Highway & Traffic Engineering",
      "Hydrology & Water Resources Engineering",
      "Environmental Engineering I (Water Supply)",
      "Structural Analysis II",
      "Foundation Engineering",
      "Disaster Management & Mitigation",
      "Departmental Elective I",
    ],
  },
  {
    year: "Final Year (Sem 7 & 8)",
    courses: [
      "Design of Steel Structures (IS 800)",
      "Estimation, Costing & Valuation",
      "Irrigation Engineering & Hydraulic Structures",
      "Construction Management & Professional Ethics",
      "Major Capstone Project (Industry / Site Investigation)",
      "Comprehensive Viva Voce",
    ],
  },
];


function CivilDegreePage() {
  return (
    <PageShell
      title="Civil Engineering (B.E. Degree)"
      subtitle="Designing sustainable infrastructure, modern transit corridors, and resilient urban habitats that shape the future of society."
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

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="w-full space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-1 gap-1 rounded-xl bg-muted/60 p-1.5 sm:grid-cols-3">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Department Overview</TabsTrigger>
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">GTU Curriculum</TabsTrigger>
          <TabsTrigger value="laboratories" className="py-2.5 font-medium">Laboratories (7)</TabsTrigger>
        </TabsList>

        {/* 1. OVERVIEW */}
        <TabsContent value="overview" className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">About the Department</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Department of Civil Engineering at Gujarat Technological University - Institute of Technology &amp; Research (GTU-ITR), Mehsana, offers a premier 4-year Bachelor of Engineering (B.E.) programme approved by AICTE. The department is dedicated to producing engineers who can design, construct, and maintain the nation's critical infrastructure — from expressways and mass rapid transit systems to eco-friendly smart cities and water management networks.
              </p>
              <p>
                Combining rigorous classroom fundamentals with extensive hands-on laboratory experiments, extensive field surveying camps, structural design studios, and industrial visits, the department bridges textbook knowledge with actual civil contracting and consultancy workflows.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col rounded-xl border border-border/80 bg-brand-surface/40 p-6">
                <div className="flex items-center gap-3 text-brand-navy font-bold text-lg mb-3">
                  <Eye className="h-5 w-5 text-brand-red" />
                  <h3>Department Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To achieve academic and technical excellence in Civil Engineering education, producing ethical, globally competent, and innovative engineers who spearhead sustainable infrastructure and nation-building initiatives.
                </p>
              </div>

              <div className="flex flex-col rounded-xl border border-border/80 bg-brand-surface/40 p-6">
                <div className="flex items-center gap-3 text-brand-navy font-bold text-lg mb-3">
                  <Target className="h-5 w-5 text-brand-red" />
                  <h3>Department Mission</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Provide high-quality technical education in structural, geotechnical, and environmental engineering.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Cultivate experiential learning through live site inspections, surveying camps, and material testing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Foster sustainability consciousness, earthquake-resistant design philosophies, and professional ethics.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PEOs and PSOs */}
            <div className="mt-8 rounded-xl border border-border p-6 bg-card">
              <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-red" />
                Program Specific Outcomes (PSOs)
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-muted/40 p-4 border border-border/60">
                  <div className="font-semibold text-foreground text-sm mb-1">PSO 1: Structural & Foundation Design</div>
                  <p className="text-xs text-muted-foreground">
                    Analyze, design, and detail safe, service-ready, and economical RCC and structural steel systems complying with IS:456, IS:800, and earthquake-resistant IS:1893 standards.
                  </p>
                </div>
                <div className="rounded-lg bg-muted/40 p-4 border border-border/60">
                  <div className="font-semibold text-foreground text-sm mb-1">PSO 2: Environmental & Infrastructure Management</div>
                  <p className="text-xs text-muted-foreground">
                    Execute topographical surveys, design water distribution/wastewater networks, and formulate pavement specifications using cutting-edge geomatic and simulation software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 2. CURRICULUM */}
        <TabsContent value="curriculum" className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-brand-navy">GTU Prescribed Curriculum (B.E. Civil)</h2>
                <p className="text-sm text-muted-foreground mt-1">Structured across 8 semesters with continuous internal evaluation, university exams, and site training.</p>
              </div>
              <Badge variant="outline" className="border-brand-navy/30 text-brand-navy self-start md:self-auto px-3 py-1">
                AICTE Model Syllabus
              </Badge>
            </div>
            <div className="mb-6 h-1 w-16 bg-brand-red rounded-full" />

            <div className="grid gap-6 md:grid-cols-2">
              {CURRICULUM_SEMESTERS.map((sem, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy mb-3 text-base border-b border-border pb-2">
                    <BookOpen className="h-4 w-4 text-brand-red" />
                    <h4>{sem.year}</h4>
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

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-brand-surface p-5 border border-border">
              <div>
                <div className="font-semibold text-foreground text-sm">Looking for official course codes &amp; detailed syllabus PDFs?</div>
                <div className="text-xs text-muted-foreground">Access official Gujarat Technological University teaching schemes and subject marks distribution.</div>
              </div>
              <a
                href="https://www.gtu.ac.in/Syllabus_List.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-navy/90 shrink-0 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>GTU Official Syllabus</span>
              </a>
            </div>
          </div>
        </TabsContent>

        {/* 3. LABORATORIES */}
        <TabsContent value="laboratories" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Departmental Laboratories &amp; Facilities</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              The Civil Engineering department houses 7 specialized laboratories outfitted with industrial-scale test rigs, calibration rigs, and BIS-standard testing machinery to deliver high-fidelity empirical insights.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {LABS.map((lab, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30">
                  <div className="flex items-center gap-2 font-bold text-brand-navy text-base mb-2">
                    <Building2 className="h-4 w-4 text-brand-red shrink-0" />
                    <h3>{lab.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{lab.desc}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Key Equipment &amp; Software:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {lab.tools.map((tool, tIdx) => (
                        <Badge key={tIdx} variant="secondary" className="text-[11px] font-normal px-2 py-0.5">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}

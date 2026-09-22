import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA, getDepartmentStaffCount } from "@/content/faculty";
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
  MapPin,
  FileText,
  ExternalLink,
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
  { label: "Duration & Creds", value: "4 Yrs", icon: Layers, desc: "AICTE approved B.E. Degree" },
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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-yellow-400 shadow-sm">
              <s.icon className="h-6 w-6 text-yellow-400" />
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
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 md:grid-cols-4">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Department Overview</TabsTrigger>
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Staff Members ({getDepartmentStaffCount("degree-civil")})</TabsTrigger>
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

        {/* 2. FACULTY MEMBERS */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Civil Engineering (B.E.)"
            teachingFaculty={FACULTY_DATA["degree-civil"].teaching}
            technicalStaff={FACULTY_DATA["degree-civil"].technical}
          />
        </TabsContent>

        {/* 3. CURRICULUM */}
        <TabsContent value="curriculum" className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">GTU Prescribed Curriculum (B.E. Civil)</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red rounded-full" />
            
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              The official academic syllabus, semester-wise teaching scheme, credit structure, and course codes for Bachelor of Engineering (Civil Engineering) are administered directly by Gujarat Technological University (GTU).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl bg-brand-surface p-6 md:p-8 border border-border shadow-xs">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <Badge className="bg-brand-navy text-white uppercase text-[10px]">Official GTU Portal</Badge>
                  <span className="text-xs font-semibold text-brand-red">Real-time University Syllabus</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-navy">
                  Access Official GTU Syllabus Portal
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Click below to directly view, explore, and download the latest semester-wise syllabus PDFs, teaching schemes, subject credit matrices, and laboratory guidelines.
                </p>
              </div>

              <a
                href="https://old26.gtu.ac.in/syllabus/syllabus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-brand-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-red hover:shadow-md shrink-0"
              >
                <ExternalLink className="h-4 w-4 text-brand-gold" />
                <span>Open GTU Curriculum</span>
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

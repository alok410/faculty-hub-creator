import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Cpu,
  Layers,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
  Target,
  Eye,
  Sparkles,
  ArrowRight,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/academics/degree/mechanical")({
  head: () => ({
    meta: [
      { title: "B.E. in Mechanical Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "Bachelor of Engineering in Mechanical Engineering at GTU-ITR Mehsana. Supported by Siemens CoE, CAD/CAM, CNC, Robotics, SSIP innovation grants, and MESA student chapter.",
      },
      { property: "og:title", content: "B.E. in Mechanical Engineering | GTU-ITR" },
      {
        property: "og:description",
        content: "Undergraduate B.E. Mechanical Engineering curriculum, vision, laboratories, and career paths at GTU-ITR.",
      },
      { property: "og:url", content: "/academics/degree/mechanical" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/mechanical" }],
  }),
  component: MechanicalDegreePage,
});

const STATS = [
  { label: "Duration", value: "4 Yrs (8 Sems)", icon: Layers, desc: "AICTE approved B.E. Degree" },
  { label: "Approved Intake", value: "60 Seats", icon: Users, desc: "100% ACPC counseling allocation" },
  { label: "CoE Backing", value: "Siemens CoE", icon: Cpu, desc: "9 high-tech automation labs on campus" },
  { label: "Innovation", value: "₹2.9L SSIP", icon: Award, desc: "Funded student prototype grants" },
];

const LABS = [
  {
    name: "CAD/CAM & Product Design Lab",
    desc: "Siemens NX Academic workstations for 3D solid modeling, surface design, kinematic animation, and FEA simulations.",
    tools: ["Siemens NX CAD", "AutoCAD 2026", "ANSYS Workbench", "Parametric Modeling"],
  },
  {
    name: "CNC & Advanced Machining Lab",
    desc: "Sinumerik controlled CNC Lathe, 3-Axis Vertical Machining Center (VMC), and automated tool changers.",
    tools: ["Siemens Sinumerik 828D", "CNC Turning Center", "G-Code / M-Code Simulators"],
  },
  {
    name: "Thermal Engineering & IC Engine Lab",
    desc: "Computerized multi-cylinder petrol and diesel engine test rigs, flue gas analyzers, and heat exchanger benches.",
    tools: ["4-Stroke Diesel Test Rig", "Variable Compression Ratio Rig", "Bomb Calorimeter"],
  },
  {
    name: "Fluid Mechanics & Hydraulic Machines Lab",
    desc: "Pelton wheel turbine, Francis turbine, centrifugal pump test benches, and Bernoulli flow apparatus.",
    tools: ["Hydraulic Turbines", "Venturimeter / Orificemeter Rigs", "Reynolds Apparatus"],
  },
  {
    name: "Material Testing & Metallurgy Lab",
    desc: "Universal Testing Machine (UTM), Rockwell / Brinell hardness testers, impact testing, and metallurgical microscopes.",
    tools: ["1000 kN Digital UTM", "Torsion Testing Machine", "Microstructural Polishing Bay"],
  },
  {
    name: "Refrigeration & Air Conditioning (RAC) Lab",
    desc: "Vapor compression refrigeration test units, air conditioning demo benches, and psychrometric measurement rigs.",
    tools: ["Domestic Refrigerator Test Rig", "Air Conditioning Tutor", "Compressor Cut-Sections"],
  },
];

const CURRICULUM_SEMESTERS = [
  { year: "First Year (Sem 1 & 2)", courses: ["Basic Mechanical Engineering", "Engineering Graphics & Design", "Engineering Mathematics I & II", "Basic Electrical & Electronics"] },
  { year: "Second Year (Sem 3 & 4)", courses: ["Thermodynamics", "Material Science & Metallurgy", "Kinematics & Theory of Machines", "Fluid Mechanics", "Manufacturing Processes", "Machine Design I"] },
  { year: "Third Year (Sem 5 & 6)", courses: ["Heat Transfer", "Dynamics of Machinery", "Fluid Power Engineering", "Computer Aided Design (CAD/CAM)", "Internal Combustion Engines", "Departmental Elective I"] },
  { year: "Final Year (Sem 7 & 8)", courses: ["Refrigeration & Air Conditioning", "Power Plant Engineering", "Production Technology", "Industry Capstone Major Project", "Comprehensive Seminar"] },
];

function MechanicalDegreePage() {
  return (
    <PageShell
      title="Mechanical Engineering (B.E. Degree)"
      subtitle="Comprehensive education in thermal science, machine design, modern CNC robotics, and industrial automation powered by Siemens CoE."
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
          <TabsList className="grid w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-4">
            <TabsTrigger
              value="overview"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Overview &amp; Vision
            </TabsTrigger>
            <TabsTrigger
              value="labs"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Laboratories &amp; Tools
            </TabsTrigger>
            <TabsTrigger
              value="curriculum"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Curriculum (Sem 1-8)
            </TabsTrigger>
            <TabsTrigger
              value="innovation"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              SSIP Grants &amp; Careers
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Overview */}
        <TabsContent value="overview" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-red uppercase text-white tracking-wider">Pioneer in Advanced Manufacturing</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Department of Mechanical Engineering
                </h2>
                <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
              </div>
              <Link
                to="/admissions/degree"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
              >
                Admission Process <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="text-sm leading-relaxed text-foreground/85">
              The Department of Mechanical Engineering at GTU-ITR combines heavy engineering fundamentals with
              contemporary smart manufacturing, mechatronics, and renewable energy technologies. Backed by the Siemens
              Centre of Excellence, students acquire practical mastery across CNC machine tools, computer-integrated
              manufacturing, fluid turbines, and thermodynamic systems.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-brand-surface/40 p-6">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-brand-red" />
                  <h3 className="font-heading text-base font-bold uppercase text-brand-navy">Vision</h3>
                </div>
                <div className="mb-4 mt-2 h-0.5 w-10 bg-brand-red" />
                <p className="text-xs leading-relaxed text-foreground/85">
                  &quot;To impart world-class mechanical engineering education producing competent technocrats, ethical
                  innovators, and industry leaders capable of addressing global manufacturing and energy challenges.&quot;
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-brand-surface/40 p-6">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-brand-red" />
                  <h3 className="font-heading text-base font-bold uppercase text-brand-navy">Mission</h3>
                </div>
                <div className="mb-4 mt-2 h-0.5 w-10 bg-brand-red" />
                <ul className="space-y-2 text-xs text-foreground/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0 mt-0.5" />
                    <span>Nurture strong fundamentals in machine design, thermal sciences, and production engineering.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0 mt-0.5" />
                    <span>Promote student innovation through funded SSIP hardware prototyping and patents.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0 mt-0.5" />
                    <span>Provide direct industry interface through the Siemens CoE and industrial internship alliances.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Laboratories */}
        <TabsContent value="labs" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Specialized Laboratories</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LABS.map((lab, i) => (
                <div key={i} className="flex flex-col justify-between rounded-xl border border-border bg-brand-surface/30 p-5">
                  <div>
                    <span className="rounded bg-brand-navy/10 px-2 py-0.5 text-[10px] font-bold uppercase text-brand-navy">
                      Lab 0{i + 1}
                    </span>
                    <h4 className="mt-3 font-heading text-base font-bold text-brand-navy">{lab.name}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/80">{lab.desc}</p>
                  </div>
                  <div className="mt-4 border-t border-border/70 pt-3">
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Major Equipment &amp; Tools:</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {lab.tools.map((t, tidx) => (
                        <span key={tidx} className="rounded bg-white px-2 py-0.5 text-[10px] font-medium border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Curriculum */}
        <TabsContent value="curriculum" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">4-Year Curriculum Matrix</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid gap-6 md:grid-cols-2">
              {CURRICULUM_SEMESTERS.map((sem, i) => (
                <div key={i} className="rounded-xl border border-border bg-brand-surface/30 p-5">
                  <Badge className="bg-brand-navy text-white uppercase text-[10px]">{sem.year}</Badge>
                  <ul className="mt-4 space-y-2 text-xs">
                    {sem.courses.map((c, cidx) => (
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

        {/* Tab 4: Innovation & Careers */}
        <TabsContent value="innovation" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Student Innovation &amp; Placements</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-brand-surface/40 p-6">
                <Badge className="bg-brand-red text-white uppercase text-[10px]">Verified Grants</Badge>
                <h3 className="mt-2 font-heading text-base font-bold uppercase text-brand-navy">SSIP Funded Projects</h3>
                <div className="mt-4 space-y-3 text-xs text-foreground/85">
                  <div className="rounded-lg bg-white p-3 border border-border">
                    <p className="font-bold text-brand-navy">Vegetable Vending E-Kart (₹1,90,000 Grant)</p>
                    <p className="mt-0.5 text-muted-foreground">Mentored by Dr. Vivek B. Patel &amp; Dr. Lavkumar Kaushik.</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-border">
                    <p className="font-bold text-brand-navy">Off-Grid Manual Washing Machine (₹1,00,000 Grant)</p>
                    <p className="mt-0.5 text-muted-foreground">Mentored by Dr. Lavkumar Kaushik.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-brand-navy bg-brand-navy p-6 text-white">
                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-white">Career Pathways</h3>
                  <div className="mt-4 space-y-1.5 text-xs text-white/90">
                    <p>• Automotive &amp; EV Design Engineer</p>
                    <p>• Robotics &amp; Automation Specialist</p>
                    <p>• Thermal &amp; HVAC System Designer</p>
                    <p>• Precision Manufacturing &amp; CNC Programmer</p>
                    <p>• Quality Assurance &amp; Metrology Manager</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <Link
                    to="/enquiry"
                    className="block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
                  >
                    Apply for Mechanical Engineering
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}

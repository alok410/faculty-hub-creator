import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA } from "@/content/faculty";
import {
  Wrench,
  Cog,
  Cpu,
  Layers,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Target,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/academics/degree/mechanical")({
  head: () => ({
    meta: [
      { title: "B.E. in Mechanical Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "Bachelor of Engineering in Mechanical Engineering at GTU-ITR Mehsana. Siemens CoE integration, CAD/CAM drafting, thermal dynamics, and cutting-edge fabrication workshops.",
      },
      { property: "og:title", content: "B.E. in Mechanical Engineering | GTU-ITR" },
      {
        property: "og:description",
        content: "Undergraduate B.E. Mechanical Engineering curriculum, vision, and laboratories at GTU-ITR.",
      },
      { property: "og:url", content: "/academics/degree/mechanical" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/mechanical" }],
  }),
  component: MechanicalDegreePage,
});

const STATS = [
  { label: "Duration & Creds", value: "4 Yrs (8 Sems)", icon: Layers, desc: "AICTE approved B.E. Degree" },
  { label: "Approved Intake", value: "60 Seats", icon: Users, desc: "100% ACPC counseling allocation" },
  { label: "CoE Synergy", value: "Siemens CoE", icon: Cog, desc: "9 specialized industrial labs on campus" },
  { label: "Faculty Mentors", value: "Ph.D. & M.Tech", icon: Award, desc: "Thermal, design & manufacturing experts" },
];

const LABS = [
  {
    name: "Dynamics of Machinery & Vibration Lab",
    desc: "Study of balancing, gyroscopes, governors, cam analysis, and vibration damping systems.",
    tools: ["Motorized Gyroscope", "Static/Dynamic Balancing Rig", "Universal Governor", "Whirling of Shaft Apparatus"],
  },
  {
    name: "Internal Combustion Engines & Automobile Lab",
    desc: "Cut-section models of multi-cylinder petrol and diesel engines, fuel injection systems, and dynamometer testing benches.",
    tools: ["Computerized Single Cylinder Diesel Test Rig", "Multi-Cylinder Petrol Engine Rig", "Smoke Meter & Gas Analyzer"],
  },
  {
    name: "Heat & Mass Transfer Laboratory",
    desc: "Conduction, convection, and radiation experiments alongside pin-fin heat transfer apparatus and shell-and-tube heat exchangers.",
    tools: ["Thermal Conductivity Apparatus", "Emissivity Measurement Rig", "Pin-Fin Natural/Forced Convection", "Parallel & Counter Flow Exchanger"],
  },
  {
    name: "Fluid Power & Hydraulic Machinery Lab",
    desc: "Turbine performance tests, centrifugal pumps, Pelton wheels, Francis turbines, and open-flume flow measurement.",
    tools: ["Pelton Wheel Turbine Rig", "Francis Turbine Test Rig", "Centrifugal Pump Station", "Venturimeter & Notch Apparatus"],
  },
  {
    name: "CAD/CAM & Digital Manufacturing Studio",
    desc: "Industry-grade workstations running Siemens NX, SolidWorks, and Creo for 3D modeling, FEA simulation, and CNC toolpath generation.",
    tools: ["Siemens NX CAD/CAM/CAE", "SolidWorks 2024", "AutoCAD Mechanical", "ANSYS Workbench"],
  },
  {
    name: "Central Workshop & Fabrication Bays",
    desc: "Machine shop with heavy-duty lathes, milling machines, shapers, radial drills, MIG/TIG welding booths, and foundry patternmaking.",
    tools: ["All-Geared Lathes", "Universal Milling Machine", "Shaping Machine", "TIG/MIG Welding Stations"],
  },
];

const CURRICULUM_SEMESTERS = [
  { year: "First Year (Sem 1 & 2)", courses: ["Basics of Mechanical Engineering", "Engineering Graphics & Design", "Engineering Mathematics I & II", "Applied Physics", "Workshop Practice"] },
  { year: "Second Year (Sem 3 & 4)", courses: ["Material Science & Metallurgy", "Thermodynamics", "Kinematics of Machinery", "Fluid Mechanics & Hydraulic Machines", "Manufacturing Processes", "Machine Design & Industrial Drafting"] },
  { year: "Third Year (Sem 5 & 6)", courses: ["Heat Transfer", "Dynamics of Machinery", "Design of Machine Elements", "Internal Combustion Engines", "Control Engineering & Mechatronics", "Departmental Elective I"] },
  { year: "Final Year (Sem 7 & 8)", courses: ["Computer Aided Design & Manufacturing (CAD/CAM)", "Refrigeration & Air Conditioning", "Power Plant Engineering", "Major Capstone Project", "Comprehensive Technical Seminar"] },
];

function MechanicalDegreePage() {
  return (
    <PageShell
      title="Mechanical Engineering (B.E. Degree)"
      subtitle="Pioneering precision manufacturing, sustainable thermal energy, robotics, and advanced product design backed by the on-campus Siemens Centre of Excellence."
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

      {/* Tabs Interface */}
      <Tabs defaultValue="overview" className="w-full space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 sm:grid-cols-4">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Department Overview</TabsTrigger>
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Faculty Members (8)</TabsTrigger>
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">GTU Curriculum</TabsTrigger>
          <TabsTrigger value="labs" className="py-2.5 font-medium">Laboratories (6)</TabsTrigger>
        </TabsList>

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
              The Department of Mechanical Engineering at GTU-ITR Mehsana offers a comprehensive 4-year undergraduate B.E. programme designed to prepare students for the fourth industrial revolution (Industry 4.0). The department combines foundational mechanics, thermodynamics, fluid machinery, and materials science with modern computer-aided design and digital manufacturing.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              A defining strength of the department is its seamless integration with the on-campus Siemens Centre of Excellence. Under this unique initiative, students undergo specialized hands-on modules in product design, rapid prototyping, CNC programming, and industrial robotics using genuine Siemens engineering suites.
            </p>

            {/* Vision & Mission */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-brand-navy/20 bg-brand-surface/40 p-6">
                <div className="flex items-center gap-2 font-heading text-base font-bold uppercase text-brand-navy">
                  <Eye className="h-5 w-5 text-brand-red" />
                  <h3>Department Vision</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                  To achieve academic and research excellence in Mechanical Engineering by cultivating engineers who design sustainable, energy-efficient, and technologically advanced solutions for manufacturing and automotive industries.
                </p>
              </div>

              <div className="rounded-xl border border-brand-navy/20 bg-brand-surface/40 p-6">
                <div className="flex items-center gap-2 font-heading text-base font-bold uppercase text-brand-navy">
                  <Target className="h-5 w-5 text-brand-red" />
                  <h3>Department Mission</h3>
                </div>
                <ul className="mt-3 space-y-2 text-xs text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
                    <span>Provide high-calibre technical education in core design, thermal systems, and manufacturing technologies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
                    <span>Leverage the Siemens CoE to provide industry-certified training in CAD/CAM, CNC, and mechatronics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
                    <span>Encourage research, patent filing, student innovation grants (SSIP), and interdisciplinary teamwork.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SSIP Innovation Showcase */}
            <div className="mt-6 rounded-xl border border-border/80 bg-brand-surface/50 p-6">
              <div className="flex items-center gap-2 font-bold text-brand-navy text-sm mb-3">
                <Sparkles className="h-4 w-4 text-brand-red" />
                <h4>SSIP Student Innovation Grants</h4>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-lg bg-card p-3 border border-border">
                  <p className="font-bold text-brand-navy">Vegetable Vending E-Kart (₹1,90,000 Grant)</p>
                  <p className="mt-0.5 text-muted-foreground">Mentored by Dr. Vivek B. Patel &amp; Dr. Lavkumar Kaushik.</p>
                </div>
                <div className="rounded-lg bg-card p-3 border border-border">
                  <p className="font-bold text-brand-navy">Off-Grid Manual Washing Machine (₹1,00,000 Grant)</p>
                  <p className="mt-0.5 text-muted-foreground">Mentored by Dr. Lavkumar Kaushik.</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Faculty Members */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Mechanical Engineering (B.E.)"
            teachingFaculty={FACULTY_DATA["degree-mechanical"].teaching}
            technicalStaff={FACULTY_DATA["degree-mechanical"].technical}
          />
        </TabsContent>

        {/* Tab 3: Curriculum */}
        <TabsContent value="curriculum" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">4-Year Curriculum Structure</h2>
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

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-brand-surface p-5 border border-border">
              <div>
                <div className="font-semibold text-foreground text-sm">Official GTU Teaching Scheme &amp; Detailed Subject Codes</div>
                <div className="text-xs text-muted-foreground">Download authentic credit matrices, laboratory experiment lists, and end-term grading criteria.</div>
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

        {/* Tab 3: Laboratories */}
        <TabsContent value="labs" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Specialized Laboratories &amp; Workshop Bays</h2>
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
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Key Machinery &amp; Setups:</p>
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
      </Tabs>
    </PageShell>
  );
}

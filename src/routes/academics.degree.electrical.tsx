import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA, getDepartmentStaffCount } from "@/content/faculty";
import {
  Zap,
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
  Sun,
  FileText,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/academics/degree/electrical")({
  head: () => ({
    meta: [
      { title: "B.E. in Electrical Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "Bachelor of Engineering in Electrical Engineering at GTU-ITR Mehsana. Power systems, industrial drives, renewable solar energy, and high voltage lab.",
      },
      { property: "og:title", content: "B.E. in Electrical Engineering | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Undergraduate B.E. Electrical Engineering curriculum, vision, and laboratories at GTU-ITR.",
      },
      { property: "og:url", content: "/academics/degree/electrical" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/electrical" }],
  }),
  component: ElectricalDegreePage,
});

const STATS = [
  { label: "Duration & Creds", value: "4 Yrs (8 Sems)", icon: Layers, desc: "AICTE approved B.E. Degree" },
  { label: "Approved Intake", value: "60 Seats", icon: Users, desc: "100% ACPC counseling allocation" },
  { label: "Specialized Labs", value: "7 Labs", icon: Zap, desc: "High voltage, machines & solar tech" },
  { label: "Faculty Mentors", value: "Ph.D. & M.Tech", icon: Award, desc: "Power systems & drives experts" },
];

const LABS = [
  {
    name: "Electrical Machines & Drives Lab",
    desc: "Comprehensive bench setups with AC/DC motor-generator sets, slip-ring induction motors, alternators, and variable speed solid-state drives.",
    tools: ["DC Shunt & Compound MG Sets", "3-Phase Synchronous Motor", "Wound Rotor Induction Motor", "Digital Tachometers", "Auto-Transformers"],
  },
  {
    name: "Power Systems & High Voltage Lab",
    desc: "Investigation of transmission line performance, Ferranti effect, dielectric breakdown of insulating oils, and protective relay characteristics.",
    tools: ["Transmission Line Simulators", "100 kV Oil Testing Set", "Electromechanical & Numerical Relays", "Sphere Gap Breakdown Rig", "Earth Resistance Testers"],
  },
  {
    name: "Power Electronics & Industrial Automation Lab",
    desc: "Study of thyristors, MOSFETs, IGBTs, PWM inverters, cycloconverters, and industrial motor speed control loops.",
    tools: ["Power Oscilloscopes", "IGBT Inverter Modules", "SCR Firing Angle Controllers", "DC-DC Buck/Boost Converters", "Speed Sensor Modules"],
  },
  {
    name: "Control Systems & Instrumentation Lab",
    desc: "Real-time verification of PID controllers, synchro transmitter-receivers, servomotors, LVDT transducers, and feedback loop stability.",
    tools: ["Analog/Digital PID Controllers", "AC/DC Servomotors", "LVDT & Strain Gauge Trainers", "Synchro Pairs", "Bode Plot Analyzers"],
  },
  {
    name: "Solar PV & Renewable Energy Lab (Anchor Institute Link)",
    desc: "Direct access to Gujarat's Anchor Institute of Solar Energy resources, grid-tied PV inverters, and irradiance measurement arrays.",
    tools: ["1 kW Solar PV Training Array", "Pyranometer & Solar Flux Meter", "Solar Charge Controllers", "Battery Storage Banks", "Grid-Tie Inverter Simulators"],
  },
  {
    name: "Microprocessor & Embedded Systems Lab",
    desc: "Programming and hardware interfacing with microcontrollers, DSP chips, and digital signal processors for electrical automation.",
    tools: ["8085 & 8086 Microprocessor Kits", "8051 Microcontroller Trainers", "ARM Cortex Boards", "ADC/DAC Interfacing Cards", "Stepper Motor Interfaces"],
  },
  {
    name: "Power System Simulation & CAD Lab",
    desc: "Industry-standard computational simulation suite for load flow studies, short-circuit fault analysis, harmonic analysis, and transient stability.",
    tools: ["MATLAB & Simulink", "MiPower Power Simulation", "ETAP Educational Suite", "PSCAD Transient Simulator", "AutoCAD Electrical"],
  },
];

const CURRICULUM_SEMESTERS = [
  {
    year: "First Year (Sem 1 & 2)",
    courses: [
      "Basic Electrical Engineering",
      "Programming for Problem Solving",
      "Engineering Graphics & Design",
      "Engineering Mathematics I & II",
      "Applied Physics for Engineers",
    ],
  },
  {
    year: "Second Year (Sem 3 & 4)",
    courses: [
      "Circuit Theory & Network Analysis",
      "Analog & Digital Electronics",
      "Electrical Machines I (DC & Transformers)",
      "Electromagnetic Fields",
      "Electrical Measurements & Instrumentation",
      "Electrical Machines II (AC Machines)",
      "Control Systems",
      "Complex Variables & Numerical Methods",
    ],
  },
  {
    year: "Third Year (Sem 5 & 6)",
    courses: [
      "Power Systems I (Generation & Transmission)",
      "Power Electronics",
      "Microprocessor & Microcontroller Architecture",
      "Power Systems II (Analysis & Operation)",
      "Renewable Energy Sources & Grid Integration",
      "Electric Drives & Control",
      "Departmental Elective I",
    ],
  },
  {
    year: "Final Year (Sem 7 & 8)",
    courses: [
      "Power System Protection & Switchgear",
      "High Voltage Engineering",
      "Smart Grid Technologies & Electric Vehicles",
      "Industrial Electrical Systems",
      "Major Capstone Project (Power/Renewables/EV)",
      "Comprehensive Technical Seminar & Viva",
    ],
  },
];

function ElectricalDegreePage() {
  return (
    <PageShell
      title="Electrical Engineering (B.E. Degree)"
      subtitle="Mastering electric power transmission, industrial motor drives, smart grid automation, and next-generation renewable energy technologies."
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
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 md:grid-cols-4">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Department Overview</TabsTrigger>
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Staff Members ({getDepartmentStaffCount("degree-electrical")})</TabsTrigger>
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
                The Department of Electrical Engineering at GTU-ITR, Mehsana, delivers an intensive, forward-looking 4-year Bachelor of Engineering (B.E.) programme. The curriculum encompasses traditional heavy-current power engineering alongside high-frequency power electronics, embedded control, industrial robotics, and renewable energy conversion.
              </p>
              <p>
                Located in Gujarat — India's renewable energy capital — students benefit immensely from close synergy with the on-campus Anchor Institute of Solar Energy and the state-of-the-art Siemens Centre of Excellence. Our laboratories replicate real-world grid operations, high-voltage breakdown phenomena, and precision motor speed controllers.
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
                  To achieve excellence in electrical engineering education and research, grooming innovative, socially committed engineers capable of addressing global energy transition, smart grid resilience, and sustainable electrification.
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
                    <span>Impart rigorous technical knowledge in power systems, electrical machines, and modern control theory.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Provide experiential learning in high-voltage testing, power electronics, and renewable energy grids.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Foster industry-aligned competencies in electric mobility (EVs), energy auditing, and automation.</span>
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
                  <div className="font-semibold text-foreground text-sm mb-1">PSO 1: Power Systems & Protection Engineering</div>
                  <p className="text-xs text-muted-foreground">
                    Analyze, design, and protect complex interconnected power systems, substations, and transmission networks using computational simulation tools and numerical protection relays.
                  </p>
                </div>
                <div className="rounded-lg bg-muted/40 p-4 border border-border/60">
                  <div className="font-semibold text-foreground text-sm mb-1">PSO 2: Drives, Automation & Green Energy Integration</div>
                  <p className="text-xs text-muted-foreground">
                    Develop power electronic converter topologies, variable-frequency drives, and control algorithms for renewable solar/wind integration and electric vehicle charging infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 2. FACULTY MEMBERS */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Electrical Engineering (B.E.)"
            teachingFaculty={FACULTY_DATA["degree-electrical"].teaching}
            technicalStaff={FACULTY_DATA["degree-electrical"].technical}
          />
        </TabsContent>

        {/* 3. CURRICULUM */}
        <TabsContent value="curriculum" className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-brand-navy">GTU Prescribed Curriculum (B.E. Electrical)</h2>
                <p className="text-sm text-muted-foreground mt-1">Structured across 8 semesters with continuous internal evaluation, university exams, and substation training.</p>
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

        {/* 3. LABORATORIES */}
        <TabsContent value="laboratories" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Departmental Laboratories &amp; Facilities</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              The Electrical Engineering department houses 7 specialized laboratories equipped with dedicated motor-generator bays, high-voltage breakdown test rigs, and computational simulation workstations.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {LABS.map((lab, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30">
                  <div className="flex items-center gap-2 font-bold text-brand-navy text-base mb-2">
                    <Zap className="h-4 w-4 text-brand-red shrink-0" />
                    <h3>{lab.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{lab.desc}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Key Test Benches &amp; Tools:</div>
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

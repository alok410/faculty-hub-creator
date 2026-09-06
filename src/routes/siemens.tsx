import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Layers,
  Wrench,
  CheckCircle2,
  Boxes,
  Zap,
  Gauge,
  Bot,
  Activity,
  Award,
  BookOpen,
  ArrowRight,
  Download,
  Building2,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/siemens")({
  head: () => ({
    meta: [
      { title: "SIEMENS Centre of Excellence | GTU-ITR" },
      {
        name: "description",
        content:
          "SIEMENS Centre of Excellence (CoE) in Industrial Automation at GTU-ITR Mehsana. 9 high-tech laboratories and 60+ certification courses established by Government of Gujarat and Siemens.",
      },
      { property: "og:title", content: "SIEMENS Centre of Excellence | GTU-ITR" },
      {
        property: "og:description",
        content: "SIEMENS Centre of Excellence with 9 high-tech labs for skill up-gradation in industrial automation.",
      },
      { property: "og:url", content: "/siemens" },
    ],
    links: [{ rel: "canonical", href: "/siemens" }],
  }),
  component: SiemensPage,
});

const STATS = [
  { label: "High-Tech Labs", value: "9", icon: Layers, desc: "Equipped with Siemens machinery & licenses" },
  { label: "Technical Modules", value: "60+", icon: BookOpen, desc: "Fastrack, skill & professional courses" },
  { label: "Global Software", value: "NX / PLM", icon: Cpu, desc: "NX Academic, RobCAD, Technomatix" },
  { label: "Govt. Initiative", value: "GoG & Siemens", icon: Award, desc: "Industries Commissionerate joint setup" },
];

const LABS = [
  {
    id: "design",
    name: "Product Design and Validation Lab",
    short: "CAD/CAM & FEA",
    icon: Boxes,
    description:
      "Advanced 3D mechanical modelling, digital prototyping, structural analysis, and parametric part validation using Siemens NX Academic and high-end workstations.",
    tools: ["Siemens NX Academic", "CAD/CAM Suites", "Finite Element Analysis", "Kinematic Simulation"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CProduct%20Design%20and%20Validation.pdf",
  },
  {
    id: "adv-mfg",
    name: "Advance Manufacturing Lab",
    short: "Modern Tooling",
    icon: Wrench,
    description:
      "Comprehensive training in contemporary industrial machining methods, digital manufacturing planning, tooling design, and workflow verification.",
    tools: ["Manufacturing Operations Planning", "Technomatix Plant Simulation", "Tool Path Generation"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CAdvance%20Manufacturing.pdf",
  },
  {
    id: "cnc",
    name: "CNC Programming Lab",
    short: "Lathe & Milling",
    icon: Cpu,
    description:
      "Hands-on industrial CNC lathe and milling programming using Sinumerik controllers, virtual simulators, and G-Code / M-Code verification systems.",
    tools: ["Sinumerik 808D/828D/840D", "CNC Turn & Mill", "CAM Post-Processing", "Virtual Machine Tools"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CCNC%20Programming.pdf",
  },
  {
    id: "cim",
    name: "CIM (Computer Integrated Manufacturing) Lab",
    short: "Factory Automation",
    icon: Building2,
    description:
      "Fully integrated manufacturing cell demonstrating computerized production control, automated guided material transfer, and supervisory management.",
    tools: ["Flexible Manufacturing Cell", "Automated Conveyors", "SCADA Integration", "Barcode & RFID Tracking"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CCIM.pdf",
  },
  {
    id: "rapid-proto",
    name: "Rapid Prototyping Lab",
    short: "3D Printing & Tooling",
    icon: Layers,
    description:
      "Modern additive manufacturing equipment enabling rapid product iteration, functional testing, polymer 3D printing, and reverse engineering.",
    tools: ["Industrial 3D Printers", "STL Slicing Software", "Reverse Engineering Digitizers", "Polymer Modeling"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CRapid%20Prototyping.pdf",
  },
  {
    id: "automation",
    name: "Automation Lab",
    short: "PLC & SCADA",
    icon: Bot,
    description:
      "Siemens S7 series PLCs, WinCC SCADA software, TIA Portal, industrial networking, and distributed I/O systems for end-to-end process control.",
    tools: ["Siemens S7-1200 / S7-1500 PLC", "TIA Portal V-Series", "WinCC SCADA", "Profinet / Profibus"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CAutomation.pdf",
  },
  {
    id: "electrical",
    name: "Electrical Lab",
    short: "Drives & Switchgear",
    icon: Zap,
    description:
      "Comprehensive training in Variable Frequency Drives (VFDs), motor control centers (MCC), low-voltage switchgear, circuit protection, and power automation.",
    tools: ["Siemens Sinamics V20/G120 Drives", "Low Voltage Switchgear", "Contactor & Relay Logic", "Power Metering"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CElectrical.pdf",
  },
  {
    id: "mechatronics",
    name: "Mechatronics Lab",
    short: "Electro-Pneumatics",
    icon: Activity,
    description:
      "Interdisciplinary lab bridging mechanical and electronic control through industrial electro-pneumatics, electro-hydraulics, and sensor interfaces.",
    tools: ["Pneumatic / Hydraulic Test Benches", "Proportional Valves", "Optical / Inductive Sensors", "Robotic Arms"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CMechatronics.pdf",
  },
  {
    id: "process-inst",
    name: "Process Instrumentation Lab",
    short: "Closed-Loop Control",
    icon: Gauge,
    description:
      "Industrial transmitters and calibration rigs for pressure, temperature, level, and flow parameters integrated with automated feedback controllers.",
    tools: ["Flow & Level Test Rigs", "Smart Pressure Transmitters", "PID Controllers", "Control Valves & Actuators"],
    pdfUrl: "https://gtuitr.gtu.ac.in/%5CgperiDoc%5CProcess%20Instrumentation.pdf",
  },
];

const OBJECTIVES = [
  "Establish world-class, open-access technical training laboratories in North Gujarat.",
  "Skill up-gradation for engineering diploma and degree students, faculty, and industry personnel.",
  "Directly bridge the gap between academic curricula and contemporary industrial automation demands.",
  "Promote applied research, prototyping, and innovation for small and medium manufacturing enterprises.",
  "Foster collaborative industry-institute linkages through certified fastrack courses.",
];

function SiemensPage() {
  return (
    <PageShell
      title="SIEMENS Centre of Excellence"
      subtitle="Joint initiative of Industries Commissionerate (GoG), Siemens Industry Software, DesignTech Systems, and GTU-ITR Mehsana."
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
              <p className="font-display text-2xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Layout */}
      <Tabs defaultValue="overview" className="w-full">
        <div className="mb-8 rounded-xl border border-brand-navy/20 bg-brand-navy p-2 shadow-md">
          <TabsList className="grid w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-3">
            <TabsTrigger
              value="overview"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Overview & Objectives
            </TabsTrigger>
            <TabsTrigger
              value="laboratories"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              9 High-Tech Labs
            </TabsTrigger>
            <TabsTrigger
              value="courses"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Courses & Enrolment
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Overview */}
        <TabsContent value="overview" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-red uppercase tracking-wider text-white">Public-Private Partnership</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Centre of Excellence in Industrial Automation
                </h2>
                <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
              </div>
              <a
                href="https://gtuitr.gtu.ac.in/%5CgperiDoc%5CCourse_Plan_Gujarat.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-red"
              >
                <Download className="h-4 w-4" /> Download Official Course Plan
              </a>
            </div>

            <p className="text-sm leading-relaxed text-foreground/85">
              The Industries Commissionerate, Government of Gujarat; Siemens Industry Software (India) Pvt. Ltd.;
              DesignTech Systems Ltd., India; and Gujarat Technological University - Institute of Technology &amp; Research
              (GTU-ITR), Mehsana have jointly established this state-of-the-art <strong>Centre of Excellence (CoE)</strong>.
              The Centre functions as a premier regional hub for bridging the gap between theoretical academia and hands-on
              industrial engineering.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-6">
                <h3 className="flex items-center gap-2 font-heading text-base font-bold uppercase text-brand-navy">
                  <Award className="h-5 w-5 text-brand-red" /> Core Strategic Objectives
                </h3>
                <div className="mb-4 mt-2 h-0.5 w-10 bg-brand-red" />
                <ul className="space-y-3">
                  {OBJECTIVES.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-border/70 bg-brand-navy p-6 text-white">
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-base font-bold uppercase text-white">
                    <Building2 className="h-5 w-5 text-brand-red" /> Key Collaborators
                  </h3>
                  <div className="mb-4 mt-2 h-0.5 w-10 bg-brand-red" />
                  <div className="space-y-3 text-xs text-white/90">
                    <p>
                      <strong>Government of Gujarat:</strong> Industries Commissionerate sponsorship and regional technical
                      policy alignment.
                    </p>
                    <p>
                      <strong>Siemens Industry Software:</strong> Provision of industrial hardware, certified PLCs, drives,
                      and premium enterprise licenses (NX Academic, Technomatix).
                    </p>
                    <p>
                      <strong>DesignTech Systems Ltd:</strong> Technical implementation, lab maintenance, and specialized
                      train-the-trainer support.
                    </p>
                    <p>
                      <strong>GTU-ITR Mehsana:</strong> State-of-the-art infrastructure, dedicated academic faculty, and
                      student operations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <Link
                    to="/enquiry"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-brand-navy"
                  >
                    Enquire for Training Batch <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: 9 High-Tech Labs */}
        <TabsContent value="laboratories" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">9 Specialized Laboratories</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            <p className="text-sm text-muted-foreground">
              Each laboratory is furnished with genuine industrial-grade equipment, Siemens Sinumerik controllers, licensed CAD/CAM software,
              and live process simulators.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LABS.map((lab, i) => (
                <div
                  key={lab.id}
                  className="flex flex-col justify-between rounded-xl border border-border bg-brand-surface/40 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-primary-foreground">
                        <lab.icon className="h-5 w-5 text-brand-red" />
                      </span>
                      <span className="rounded bg-brand-navy/10 px-2 py-0.5 text-[10px] font-bold uppercase text-brand-navy">
                        Lab 0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-base font-bold leading-snug text-brand-navy">{lab.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/80">{lab.description}</p>

                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Key Tools &amp; Hardware:</p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {lab.tools.map((t, tidx) => (
                          <span
                            key={tidx}
                            className="rounded bg-white px-2 py-0.5 text-[10px] font-medium text-brand-navy border border-border/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/70">
                    <a
                      href={lab.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-red hover:underline"
                    >
                      <Download className="h-3.5 w-3.5" /> View Lab Brochure (PDF)
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Courses & Enrolment */}
        <TabsContent value="courses" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Fastrack &amp; Skill Development Courses</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                <h3 className="font-heading text-sm font-bold uppercase text-brand-navy">Course Spectrum</h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                  Around <strong>60 short-term modules</strong> ranging from 2 weeks to 8 weeks in duration across:
                </p>
                <ul className="mt-3 space-y-2 text-xs text-foreground/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" /> Product Design &amp; Validation (NX)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" /> CNC Programming &amp; Operations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" /> PLC, SCADA &amp; Distributed Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" /> Mechatronics &amp; Electro-Hydraulics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" /> Industrial Robotics &amp; Digital Factory
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                <h3 className="font-heading text-sm font-bold uppercase text-brand-navy">Target Participants</h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground/85">Courses cater to diverse skill seekers:</p>
                <ul className="mt-3 space-y-2 text-xs text-foreground/85">
                  <li className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-brand-red" /> Engineering Students (Degree &amp; Diploma)
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-brand-red" /> ITI Technicians looking to upgrade skills
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-brand-red" /> Working engineers &amp; MSME plant supervisors
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-brand-red" /> Academic Faculty pursuing train-the-trainer
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-brand-navy bg-brand-navy p-5 text-white">
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase text-white">Certification &amp; Contact</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/90">
                    Joint certificates are awarded upon successful practical evaluation by Siemens and GTU-ITR.
                  </p>
                  <div className="mt-4 space-y-1.5 text-xs text-white/80">
                    <p>
                      <strong>Email:</strong> admission_gperi@gtu.edu.in
                    </p>
                    <p>
                      <strong>Coordinator Desk:</strong> +91-9909039233
                    </p>
                    <p>
                      <strong>Helpline:</strong> +91 7827170170
                    </p>
                  </div>
                </div>

                <Link
                  to="/enquiry"
                  className="mt-6 block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-brand-navy"
                >
                  Register / Enquire Online
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}

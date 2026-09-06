import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Cpu,
  Zap,
  ShieldCheck,
  Bot,
  Sun,
  Building2,
  FileText,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/academics/minor-degree")({
  head: () => ({
    meta: [
      { title: "Minor Degree Programme (B.E.) | GTU-ITR" },
      {
        name: "description",
        content:
          "Gujarat Technological University Minor Degree scheme at GTU-ITR Mehsana. Earn 18-20 extra credits in AI/ML, Cybersecurity, Electric Vehicles, Solar Energy, or Robotics alongside your primary B.E. Major.",
      },
      { property: "og:title", content: "Minor Degree Programme (B.E.) | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Explore interdisciplinary Minor Degree specializations under NEP 2020 at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/academics/minor-degree" },
    ],
    links: [{ rel: "canonical", href: "/academics/minor-degree" }],
  }),
  component: MinorDegreePage,
});

const STATS = [
  { label: "Additional Credits", value: "18 - 20 Credits", icon: Layers, desc: "Earned across Sem 5 to Sem 8" },
  { label: "NEP 2020 Aligned", value: "Dual Specialization", icon: Award, desc: "Official GTU degree endorsement" },
  { label: "Eligibility Benchmark", value: "CPI ≥ 6.50", icon: CheckCircle2, desc: "No active backlogs up to Sem 4" },
  { label: "Available Minors", value: "6 Verticals", icon: Sparkles, desc: "Emerging technological domains" },
];

const MINOR_TRACKS = [
  {
    title: "Artificial Intelligence & Machine Learning",
    badge: "Computer Science Wing",
    icon: Bot,
    target: "Mechanical, Electrical & Civil students",
    desc: "Foundations of Python for data science, supervised & unsupervised machine learning, deep neural networks, and computer vision applied to domain-specific engineering problems.",
    courses: [
      "Python for Applied Machine Learning",
      "Supervised & Unsupervised Learning",
      "Deep Learning & Computer Vision",
      "AI Capstone Project in Core Engineering",
    ],
  },
  {
    title: "Cyber Security & Information Defense",
    badge: "Cyber Forensics Wing",
    icon: ShieldCheck,
    target: "Computer, Electrical & Mechanical students",
    desc: "Vulnerability assessment, network defense, penetration testing, cryptography, and ethical hacking protocols safeguarding critical cyber-physical systems.",
    courses: [
      "Fundamentals of Information Security",
      "Network Penetration Testing & VAPT",
      "Digital Forensics & Incident Response",
      "Cybersecurity Capstone / Audit Project",
    ],
  },
  {
    title: "Electric Vehicles & Smart Mobility",
    badge: "Electrical & Mechanical Wing",
    icon: Zap,
    target: "Electrical, Mechanical & Computer students",
    desc: "EV powertrain architecture, battery management systems (BMS), electric motor selection, regenerative braking, and smart charging station integration.",
    courses: [
      "EV Architecture & Dynamics",
      "Battery Chemistries & BMS Design",
      "Electric Motors & Inverter Control for EVs",
      "EV Fleet Charging & Smart Grid Interaction",
    ],
  },
  {
    title: "Renewable Energy & Solar Technologies",
    badge: "Anchor Institute Link",
    icon: Sun,
    target: "Electrical, Civil & Mechanical students",
    desc: "Photovoltaic panel modeling, solar thermal collectors, net-metering, inverter design, and national green hydrogen policies supported by on-campus Solar Institute.",
    courses: [
      "Solar Radiation & Photovoltaic Technologies",
      "Solar Thermal Systems & Energy Storage",
      "Grid Integration of Renewable Sources",
      "Green Energy Audit & Plant Feasibility",
    ],
  },
  {
    title: "Industrial Robotics & Automation",
    badge: "Siemens CoE Partnership",
    icon: Cpu,
    target: "Mechanical, Electrical & Computer students",
    desc: "6-Axis articulated robot kinematics, PLC-SCADA programming, pneumatics/hydraulics, and digital twin manufacturing using Siemens NX & Mechatronics suites.",
    courses: [
      "Industrial Robotics Kinematics & Path Planning",
      "PLC, SCADA & Industrial Bus Protocols",
      "Digital Twin Simulation with Siemens NX",
      "Robotic Cell Integration Capstone",
    ],
  },
  {
    title: "Smart Cities & Infrastructure Management",
    badge: "Civil Engineering Wing",
    icon: Building2,
    target: "Computer, Electrical & Mechanical students",
    desc: "Building Information Modeling (BIM), IoT sensors for municipal utilities, intelligent traffic control, and sustainable waste/water recycling management.",
    courses: [
      "Smart City Master Planning & GIS",
      "BIM (Building Information Modeling) with Revit",
      "IoT Sensors for Urban Infrastructure",
      "Sustainable Infrastructure Capstone",
    ],
  },
];

const FAQS = [
  {
    q: "What is the GTU Minor Degree Scheme?",
    a: "Under the National Education Policy (NEP 2020) and AICTE guidelines, Gujarat Technological University allows undergraduate engineering students to earn a secondary specialization (Minor Degree) in an emerging vertical outside their parent branch by completing 18-20 additional credits during 5th to 8th semesters.",
  },
  {
    q: "Will the Minor Degree appear on the final degree certificate?",
    a: "Yes. The official degree awarded by Gujarat Technological University will explicitly bear: 'Bachelor of Engineering in [Parent Branch] with Minor in [Minor Track]'. It also reflects on the final university grade card.",
  },
  {
    q: "How are classes and laboratory sessions scheduled?",
    a: "Minor courses are scheduled during designated zero-period slots, weekend sessions, or through approved NPTEL / SWAYAM MOOC courses recognized by GTU, ensuring no timetable clashes with primary major branch lectures.",
  },
  {
    q: "What happens if a student is unable to complete the Minor credits?",
    a: "If a student completes their regular 160 credits for the major branch but misses some minor credits, they will still receive their primary B.E. degree without penalty. The cleared minor subjects will appear in the mark sheet as additional credits.",
  },
];

function MinorDegreePage() {
  return (
    <PageShell
      title="Minor Degree Programme (B.E.)"
      subtitle="Supercharge your engineering career with dual-domain expertise. Earn 18–20 extra credits in AI/ML, Robotics, EV, or Solar Technologies alongside your primary B.E. Major."
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
      <Tabs defaultValue="tracks" className="w-full space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 md:grid-cols-4">
          <TabsTrigger value="tracks" className="py-2.5 font-medium">Available Minor Tracks (6)</TabsTrigger>
          <TabsTrigger value="regulations" className="py-2.5 font-medium">GTU Guidelines &amp; Rules</TabsTrigger>
          <TabsTrigger value="synergy" className="py-2.5 font-medium">Siemens &amp; Solar Synergy</TabsTrigger>
          <TabsTrigger value="faqs" className="py-2.5 font-medium">Frequently Asked Questions</TabsTrigger>
        </TabsList>

        {/* 1. TRACKS */}
        <TabsContent value="tracks" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Emerging Minor Tracks at GTU-ITR</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Students choose their minor track at the commencement of the 5th semester. Each track spans four progressive courses and practical mini-projects.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {MINOR_TRACKS.map((track, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy">
                      <track.icon className="h-5 w-5 text-brand-red" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-semibold">
                      {track.badge}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-1">{track.title}</h3>
                  <div className="text-[11px] font-medium text-brand-red mb-2">Target: {track.target}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{track.desc}</p>
                  
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Course Matrix (4 Sems):</div>
                    <ul className="space-y-1">
                      {track.courses.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* 2. REGULATIONS */}
        <TabsContent value="regulations" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">GTU Minor Degree Regulations &amp; Eligibility</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                  <h4 className="font-bold text-brand-navy text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-red" />
                    Eligibility Benchmark
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Students must possess a minimum Cumulative Performance Index (CPI) of 6.50 at the end of the 4th semester, with zero active backlogs in previous semesters.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                  <h4 className="font-bold text-brand-navy text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-red" />
                    Credit Structure (18 - 20 Credits)
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Distributed across Semesters 5, 6, 7, and 8. Typically 4 courses of 4 credits each plus a 2-4 credit interdisciplinary minor capstone project.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                  <h4 className="font-bold text-brand-navy text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-red" />
                    Parent vs. Minor Cross-Discipline
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A student cannot opt for a Minor in their own parent department (e.g., Computer students cannot take AI/ML minor; they can take Robotics, EV, or Smart Cities).
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-brand-surface/40 p-5">
                  <h4 className="font-bold text-brand-navy text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-red" />
                    MOOC / NPTEL Recognition
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Approved 12-week NPTEL/SWAYAM certification courses evaluated with proctored exams can be credited towards minor degree fulfillment upon approval by GTU.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-brand-surface p-5 border border-border">
              <div>
                <div className="font-semibold text-foreground text-sm">Download Official GTU Minor Degree Circular &amp; Guidelines</div>
                <div className="text-xs text-muted-foreground">Detailed university ordinance and registration timeline notifications.</div>
              </div>
              <a
                href="https://www.gtu.ac.in/Circular.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-navy/90 shrink-0 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>GTU Circulars</span>
              </a>
            </div>
          </div>
        </TabsContent>

        {/* 3. SYNERGY */}
        <TabsContent value="synergy" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">On-Campus CoE Synergy for Minors</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-6">
              GTU-ITR is in an elite group of institutions housing two high-profile state-backed Centers of Excellence on campus, giving minor students direct laboratory access.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy">
                    <Cpu className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-base">Siemens Centre of Excellence</h3>
                    <p className="text-xs text-muted-foreground">9 Specialized Industrial Automation Labs</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Powers the Industrial Robotics &amp; Automation minor track. Students learn directly on Siemens industrial hardware, S7-1500 PLCs, SCADA winCC, and 6-axis robotic arms.
                </p>
                <Link
                  to="/siemens"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:underline"
                >
                  <span>Explore Siemens CoE Labs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy">
                    <Sun className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-base">Anchor Institute of Solar Energy</h3>
                    <p className="text-xs text-muted-foreground">Government of Gujarat Funded Center</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Powers the Renewable Energy &amp; Solar Technologies minor track. Practical characterization of PV strings, inverters, solar pyranometers, and battery storage rigs.
                </p>
                <Link
                  to="/solar-energy"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:underline"
                >
                  <span>Explore Solar Institute</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 4. FAQS */}
        <TabsContent value="faqs" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Frequently Asked Questions</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-brand-surface/30 p-5">
                  <div className="flex items-start gap-3 font-semibold text-brand-navy text-sm mb-2">
                    <HelpCircle className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                    <h4>{faq.q}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-gradient-to-r from-brand-navy to-brand-navy/90 p-6 text-white shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">Have Questions About Registering for a Minor?</h3>
                  <p className="text-xs text-white/80 mt-1">
                    Contact the Academic Coordinator or visit the central administrative office during semester 4 registration window.
                  </p>
                </div>
                <Link
                  to="/calendar"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-red px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-red/90 transition-colors"
                >
                  <span>Academic Calendar</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}

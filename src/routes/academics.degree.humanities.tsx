import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA, getDepartmentStaffCount } from "@/content/faculty";
import {
  Atom,
  Languages,
  Calculator,
  FlaskConical,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  Users,
  Award,
  Eye,
  Target,
  ArrowRight,
  FileText,
  Mic,
  HeartHandshake,
} from "lucide-react";

export const Route = createFileRoute("/academics/degree/humanities")({
  head: () => ({
    meta: [
      { title: "Humanities & Sciences (Degree) | GTU-ITR" },
      {
        name: "description",
        content:
          "Department of Humanities and Sciences at GTU-ITR Mehsana. Foundational physics, chemistry, higher engineering mathematics, digital language lab, and professional communication for B.E. engineers.",
      },
      { property: "og:title", content: "Humanities & Sciences (Degree) | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Undergraduate foundational sciences, mathematics, digital language lab, and human values at GTU-ITR.",
      },
      { property: "og:url", content: "/academics/degree/humanities" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/humanities" }],
  }),
  component: HumanitiesDegreePage,
});

const STATS = [
  { label: "Core Foundation", value: "All B.E. Branches", icon: Layers, desc: "Serves 1st & 2nd year engineering" },
  { label: "Disciplines", value: "Maths, Phys, Chem, Eng", icon: Atom, desc: "Multi-disciplinary faculty wing" },
  { label: "Digital Studio", value: "Language Lab", icon: Languages, desc: "Interactive phonetics & GD suite" },
  { label: "Values & Ethics", value: "UHV & Constitution", icon: HeartHandshake, desc: "Holistic human development" },
];

const LABS = [
  {
    name: "Engineering Physics Laboratory",
    desc: "Precision optical, electronic, and acoustic instruments to verify wave optics, laser characteristics, quantum physics, and semiconductor dynamics.",
    tools: ["He-Ne & Semiconductor Laser Setup", "Hall Effect Measurement Kit", "Newton's Rings Microscope", "Ultrasonic Interferometer", "Fiber Optic Loss Meter"],
  },
  {
    name: "Engineering Chemistry & Environmental Science Lab",
    desc: "Wet chemical analysis, titration stations, and electro-analytical instrumentation to evaluate fuel calorific values, lubricants, and water purification.",
    tools: ["Redwood Viscometer No. 1 & 2", "Cleveland Flash & Fire Point Rig", "Digital Conductivity Meters", "pH Meters & Colorimeters", "Water Hardness Titration Benches"],
  },
  {
    name: "Digital English Language & Phonetics Studio",
    desc: "Computerized acoustic consoles with interactive software for accent neutralization, listening comprehension, presentation delivery, and mock interviews.",
    tools: ["Interactive Speech Software", "Noise-Cancelling Headsets", "Group Discussion Oval Table", "Audio-Visual Projection Podium", "Recording & Playback Analyzers"],
  },
  {
    name: "Applied Mathematics & Computing Lab",
    desc: "Computational simulation setups for numerical methods, differential calculus modeling, statistical data analysis, and mathematical scripting.",
    tools: ["SciLab Open Source", "MATLAB Student Suite", "Symbolic Math Workstations", "Graph Plotting Utilities"],
  },
];

const CURRICULUM_DOMAINS = [
  {
    title: "Engineering Mathematics",
    courses: [
      "Mathematics I (Calculus & Linear Algebra)",
      "Mathematics II (Vector Calculus & Ordinary Differential Equations)",
      "Probability & Statistics / Numerical Methods",
      "Complex Variables & Partial Differential Equations",
    ],
  },
  {
    title: "Engineering Physics & Nanotechnology",
    courses: [
      "Optics & Laser Fundamentals",
      "Semiconductor & Superconductivity Physics",
      "Quantum Mechanics & Wave Packets",
      "Fiber Optics & Sensor Systems",
    ],
  },
  {
    title: "Engineering Chemistry & Green Tech",
    courses: [
      "Water Technology & Boiler Feed Treatments",
      "Fuels, Combustion & Lubrication Science",
      "Corrosion Science & Surface Engineering",
      "Environmental Studies & Sustainable Materials",
    ],
  },
  {
    title: "Professional Communication & Ethics",
    courses: [
      "Effective Technical Communication in English",
      "Universal Human Values & Professional Ethics",
      "Constitution of India & Civic Responsibilities",
      "Group Discussion & Technical Presentation Skills",
    ],
  },
];

function HumanitiesDegreePage() {
  return (
    <PageShell
      title="Humanities & Sciences (Degree)"
      subtitle="The foundational bedrock of all engineering disciplines — integrating higher mathematics, applied physics, chemical sciences, and articulate professional communication."
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
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 md:grid-cols-5">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Department Mission</TabsTrigger>
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Staff Members ({getDepartmentStaffCount("degree-humanities")})</TabsTrigger>
          <TabsTrigger value="domains" className="py-2.5 font-medium">Curricular Domains</TabsTrigger>
          <TabsTrigger value="laboratories" className="py-2.5 font-medium">Specialized Studios &amp; Labs</TabsTrigger>
          <TabsTrigger value="initiatives" className="py-2.5 font-medium">Clubs &amp; Soft Skills</TabsTrigger>
        </TabsList>

        {/* 1. OVERVIEW */}
        <TabsContent value="overview" className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">About the Department</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Department of Humanities and Sciences at GTU-ITR serves as the intellectual cornerstone for all undergraduate Bachelor of Engineering disciplines, welcoming first-year students and mentoring them through their critical transition into professional engineering education.
              </p>
              <p>
                Our accomplished faculty team spans Applied Mathematics, Engineering Physics, Engineering Chemistry, and English Linguistics. Through structured experiments, mathematical modeling, and communicative roleplay, students develop the analytical rigor and articulacy required for modern corporate and research environments.
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
                  To provide an inspiring scientific, mathematical, and communicative foundation that instills intellectual curiosity, ethical mindfulness, and lifelong adaptability across all engineering graduates.
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
                    <span>Deliver rigorous, application-oriented foundational sciences and computational mathematics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Cultivate articulate verbal communication, technical writing, and corporate interview readiness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Imbue universal human values, environmental responsibility, and constitutional citizenship.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 2. FACULTY MEMBERS */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Humanities & Sciences (B.E. Degree)"
            teachingFaculty={FACULTY_DATA["degree-humanities"].teaching}
            technicalStaff={FACULTY_DATA["degree-humanities"].technical}
          />
        </TabsContent>

        {/* 3. DOMAINS */}
        <TabsContent value="domains" className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Core Curricular Domains Covered</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Every first-year engineering student across Computer, Civil, Mechanical, and Electrical branches completes foundational courses administered by this department under GTU teaching schemes.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {CURRICULUM_DOMAINS.map((domain, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy mb-3 text-base border-b border-border pb-2">
                    <BookOpen className="h-4 w-4 text-brand-red" />
                    <h4>{domain.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {domain.courses.map((c, cIdx) => (
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
                <div className="font-semibold text-foreground text-sm">Official GTU 1st Year Engineering Teaching Scheme</div>
                <div className="text-xs text-muted-foreground">Complete syllabus breakdown including credits, theory lecture hours, and lab marks.</div>
              </div>
              <a
                href="https://www.gtu.ac.in/Syllabus_List.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-navy/90 shrink-0 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>GTU 1st Year Syllabus</span>
              </a>
            </div>
          </div>
        </TabsContent>

        {/* 3. LABORATORIES */}
        <TabsContent value="laboratories" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Specialized Laboratories &amp; Studios</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Equipped with high-precision measuring optics, standard analytical chemistry titration tables, and a dedicated multimedia language laboratory.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {LABS.map((lab, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30">
                  <div className="flex items-center gap-2 font-bold text-brand-navy text-base mb-2">
                    <FlaskConical className="h-4 w-4 text-brand-red shrink-0" />
                    <h3>{lab.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{lab.desc}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Key Instruments &amp; Systems:</div>
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

        {/* 4. CLUBS & INITIATIVES */}
        <TabsContent value="initiatives" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Literary, Science &amp; Soft-Skill Initiatives</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-6">
              The department champions student self-expression, public oratory, scientific exhibition, and cultural vibrancy across the campus.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Mic className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Kaushalya Club</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Literary debates, elocution contests, poetry recitation, and annual college magazine editorial board.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Atom className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>National Science Day</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Celebrated on February 28th with working scientific models, poster presentations, and school outreach demos.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Calculator className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Ramanujan Math Symposium</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Annual National Mathematics Day workshops, Vedic math tips, and fast-calculation quizzes for freshers.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-brand-navy p-6 text-white shadow">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold">Explore Campus Facilities &amp; Student Clubs</h4>
                  <p className="text-xs text-white/80 mt-1">Discover sports facilities, student activity cells, and modern computer hubs.</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    to="/students-clubs"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-red px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-red/90 transition-colors"
                  >
                    <span>Student Clubs</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/facility"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    <span>Campus Facilities</span>
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA } from "@/content/faculty";
import {
  Cpu,
  Monitor,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
  Target,
  Eye,
  Layers,
  Sparkles,
  ArrowRight,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/academics/degree/computer")({
  head: () => ({
    meta: [
      { title: "B.E. in Computer Engineering | GTU-ITR" },
      {
        name: "description",
        content:
          "Bachelor of Engineering in Computer Engineering at GTU-ITR Mehsana. AI/ML, Cloud Computing, Full-Stack Development, and Siemens NX software.",
      },
      { property: "og:title", content: "B.E. in Computer Engineering | GTU-ITR" },
      {
        property: "og:description",
        content: "Undergraduate B.E. Computer Engineering curriculum, vision, and laboratories at GTU-ITR.",
      },
      { property: "og:url", content: "/academics/degree/computer" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/computer" }],
  }),
  component: ComputerDegreePage,
});

const STATS = [
  { label: "Duration & Creds", value: "4 Yrs (8 Sems)", icon: Layers, desc: "AICTE approved B.E. Degree" },
  { label: "Approved Intake", value: "60 Seats", icon: Users, desc: "100% ACPC counseling allocation" },
  { label: "Specialized Labs", value: "6 Labs", icon: Cpu, desc: "High-spec desktops & gigabit LAN" },
  { label: "Faculty Mentors", value: "Ph.D. & M.Tech", icon: Award, desc: "Experienced academic educators" },
];

const LABS = [
  {
    name: "Advanced Programming & Algorithm Lab",
    desc: "Equipped with latest C/C++, Java, and Python IDEs for algorithmic complexity analysis and data structures.",
    tools: ["GCC / GDB", "Python 3.12", "JDK 21", "VS Code / Eclipse"],
  },
  {
    name: "Database Management & Big Data Lab",
    desc: "Database modeling, SQL queries, NoSQL schema design, and query optimization on distributed databases.",
    tools: ["Oracle 19c", "PostgreSQL", "MongoDB", "MySQL Workbench"],
  },
  {
    name: "AI, Machine Learning & Data Science Lab",
    desc: "Workstations with dedicated GPUs for training neural networks, computer vision models, and natural language processing.",
    tools: ["TensorFlow", "PyTorch", "JupyterLab", "OpenCV", "Scikit-Learn"],
  },
  {
    name: "Computer Networks & Cloud Computing Lab",
    desc: "Network simulation, packet sniffing, protocol analyzers, and cloud infrastructure deployment.",
    tools: ["Cisco Packet Tracer", "Wireshark", "Docker Containers", "Linux Server Cluster"],
  },
  {
    name: "Web Technology & Mobile App Lab",
    desc: "Full-stack development, modern frontend frameworks, RESTful APIs, and Android app compilation suites.",
    tools: ["React / Node.js", "Android Studio", "Git / GitHub", "Postman"],
  },
  {
    name: "IoT & Embedded Computing Bay",
    desc: "Hardware interfacing with microcontrollers, wireless sensor networks, and edge intelligence systems.",
    tools: ["Raspberry Pi 4", "ESP32 / NodeMCU", "Arduino Mega", "Sensor Kits"],
  },
];

const CURRICULUM_SEMESTERS = [
  { year: "First Year (Sem 1 & 2)", courses: ["Programming for Problem Solving (C)", "Basic Electrical Engineering", "Engineering Mathematics I & II", "English & Professional Communication"] },
  { year: "Second Year (Sem 3 & 4)", courses: ["Data Structures & Algorithms", "Database Management Systems", "Digital Fundamentals", "Discrete Mathematics", "Operating Systems", "Object Oriented Programming (Java)"] },
  { year: "Third Year (Sem 5 & 6)", courses: ["Computer Networks", "Design & Analysis of Algorithms", "Software Engineering", "Artificial Intelligence & ML", "Web Technology", "Departmental Elective I"] },
  { year: "Final Year (Sem 7 & 8)", courses: ["Information & Network Security", "Cloud Infrastructure", "Compiler Design", "Industry Major Capstone Project", "Comprehensive Technical Seminar"] },
];

function ComputerDegreePage() {
  return (
    <PageShell
      title="Computer Engineering (B.E. Degree)"
      subtitle="Fostering innovative software architects, AI/ML engineers, and technological leaders through rigorous hands-on technical pedagogy."
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
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Faculty Members (6)</TabsTrigger>
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">GTU Curriculum</TabsTrigger>
          <TabsTrigger value="labs" className="py-2.5 font-medium">Laboratories (6)</TabsTrigger>
        </TabsList>

        {/* Tab 1: Overview */}
        <TabsContent value="overview" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-red uppercase text-white tracking-wider">ICT Backbone of GTU-ITR</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Department of Computer Engineering
                </h2>
                <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
              </div>
              <Link
                to="/admissions/degree"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
              >
                Admission Criteria <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="text-sm leading-relaxed text-foreground/85">
              The Department of Computer Engineering at Gujarat Technological University - Institute of Technology &amp; Research (GTU-ITR), Mehsana, offers a 4-year undergraduate B.E. degree designed to prepare engineers for the rapidly changing landscape of software technologies, AI/ML, cloud ecosystems, and data analytics.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              With 6 dedicated high-end computing laboratories, licensed engineering simulation software, gigabit campus networking, and guidance from highly qualified faculty members, students gain solid foundational theory combined with real-world project development capabilities.
            </p>

            {/* Vision & Mission */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-brand-navy/20 bg-brand-surface/40 p-6">
                <div className="flex items-center gap-2 font-heading text-base font-bold uppercase text-brand-navy">
                  <Eye className="h-5 w-5 text-brand-red" />
                  <h3>Department Vision</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                  To achieve excellence in education, innovation, and technological research in the domain of Computer Engineering, developing socially committed, ethically responsible, and globally competent software engineers.
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
                    <span>Provide high-standard technical pedagogy bridging algorithmic theory with modern framework engineering.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
                    <span>Inculcate problem-solving, innovative design capabilities, and entrepreneurship mindset through project labs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
                    <span>Strengthen industry linkages for continuous knowledge sharing and student placements.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PSOs */}
            <div className="mt-6 rounded-xl border border-brand-navy/20 bg-brand-surface/50 p-6">
              <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">
                Program Specific Outcomes (PSOs)
              </h4>
              <div className="mt-3 space-y-2 text-xs text-foreground/90">
                <p>
                  <strong>PSO 1:</strong> Utilize computer engineering fundamentals to analyze, design, and solve complex technological problems of industry and society.
                </p>
                <p>
                  <strong>PSO 2:</strong> Apply standard engineering practices and strategies to develop high-quality software systems using modern programming paradigms, logical skills, and cloud development tools.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Faculty Members */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Computer Engineering (B.E.)"
            teachingFaculty={FACULTY_DATA["degree-computer"].teaching}
            technicalStaff={FACULTY_DATA["degree-computer"].technical}
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
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Departmental Laboratories</h2>
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
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Software &amp; Tools:</p>
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

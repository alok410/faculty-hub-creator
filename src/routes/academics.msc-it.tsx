import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Layers,
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Cpu,
  Monitor,
  Database,
  Globe,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/academics/msc-it")({
  head: () => ({
    meta: [
      { title: "Integrated M.Sc. in IT (5 Years) | GTU-ITR" },
      {
        name: "description",
        content:
          "5-Year Integrated Master of Science in Information Technology (M.Sc. IT) at GTU-ITR Mehsana. NEP 2020 multi-exit framework, full-stack development, cloud architecture, and industry internship.",
      },
      { property: "og:title", content: "Integrated M.Sc. in IT (5 Years) | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Curriculum, laboratories, NEP modular exits, and career prospects for Integrated M.Sc. (IT) at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/academics/msc-it" },
    ],
    links: [{ rel: "canonical", href: "/academics/msc-it" }],
  }),
  component: MscItAcademicsPage,
});

const STATS = [
  { label: "Degree Level", value: "Integrated PG (5 Yrs)", icon: Layers, desc: "Dual UG + PG 10-semester degree" },
  { label: "NEP Multiple Exits", value: "B.Sc. / B.Sc.(Hons) / M.Sc.", icon: Award, desc: "Flexible modular exit milestones" },
  { label: "Industry Internship", value: "Full 6 Months", icon: Briefcase, desc: "Semester 10 corporate immersion" },
  { label: "Affiliation", value: "GTU Ahmedabad", icon: BookOpen, desc: "Direct university degree award" },
];

const LABS = [
  {
    name: "Full-Stack Web & Cloud Laboratory",
    desc: "Dedicated computing pods with high-speed fiber internet for modern frontend, backend, REST API, and cloud deployment pipelines.",
    tools: ["React / Next.js", "Node.js & Express", "Docker & Kubernetes", "AWS Educate Cloud", "Git & GitHub"],
  },
  {
    name: "Mobile App & Cross-Platform Lab",
    desc: "Emulators and physical test devices for native Android and cross-platform mobile application development.",
    tools: ["Android Studio", "Flutter & Dart SDK", "Firebase Backend", "Postman API Suite"],
  },
  {
    name: "Enterprise Database & Big Data Center",
    desc: "Relational and document-oriented databases configured for transaction modeling, query tuning, and distributed storage.",
    tools: ["Oracle 19c", "PostgreSQL", "MongoDB", "MySQL Workbench", "Redis In-Memory Cache"],
  },
  {
    name: "Data Science & Machine Learning Hub",
    desc: "GPU-accelerated systems for exploratory data analysis, predictive statistical models, and neural network training.",
    tools: ["Python 3.12", "JupyterLab", "Pandas & Scikit-Learn", "Tableau Desktop", "TensorFlow Basics"],
  },
];

const CURRICULUM_PHASES = [
  {
    phase: "Years 1 & 2 (Sem 1 to 4): Foundations & Core Software",
    desc: "Builds rigorous fundamentals in procedural and object-oriented programming, data structures, discrete mathematics, and web basics.",
    courses: [
      "Problem Solving through C & C++",
      "Object-Oriented Programming with Java",
      "Data Structures & Algorithm Design",
      "Database Management Systems (RDBMS)",
      "Web Technologies (HTML5, CSS3, JavaScript)",
      "Operating Systems & Computer Organization",
    ],
  },
  {
    phase: "Year 3 (Sem 5 & 6): Advanced Engineering & B.Sc. Exit",
    desc: "Deep-dives into modern frameworks, enterprise databases, software testing, and culminates in a major undergraduate capstone.",
    courses: [
      "Python for Enterprise Applications",
      "Software Engineering & Agile Methodologies",
      "Computer Networks & Information Security",
      "Mobile Application Development (Android)",
      "Undergraduate Capstone Project (Sem 6)",
      "Eligible for B.Sc. (Information Technology) Exit",
    ],
  },
  {
    phase: "Year 4 (Sem 7 & 8): Advanced Specializations & B.Sc. (Hons)",
    desc: "Graduate-level courses in cloud computing, big data systems, microservices architecture, and research methodologies.",
    courses: [
      "Cloud Infrastructure & DevOps Automation",
      "Big Data Technologies & NoSQL Databases",
      "Artificial Intelligence & Machine Learning",
      "Research Methodology & Technical Paper Writing",
      "Advanced Web Architectures (MERN / Microservices)",
      "Eligible for B.Sc. (Honours in IT) Exit",
    ],
  },
  {
    phase: "Year 5 (Sem 9 & 10): Master's Capstone & 6-Month Internship",
    desc: "Advanced enterprise design and a full-time 6-month corporate industrial internship leading to the Master of Science (M.Sc.) Degree.",
    courses: [
      "Enterprise Cyber Security & Ethical Hacking",
      "Data Analytics & Business Intelligence",
      "Full-Time 6-Month Corporate Industrial Project",
      "Comprehensive Master's Defense & Dissertation",
    ],
  },
];

const NEP_EXITS = [
  {
    exitPoint: "After 3 Years (6 Semesters)",
    award: "Bachelor of Science in Information Technology (B.Sc. IT)",
    desc: "Students clearing 120+ credits receive a formal UG degree and can either enter the job market or apply for external programs.",
  },
  {
    exitPoint: "After 4 Years (8 Semesters)",
    award: "B.Sc. (Honours with Research) in Information Technology",
    desc: "Students completing 160+ credits with an undergraduate research dissertation earn an Honours degree aligned with NEP 2020.",
  },
  {
    exitPoint: "After 5 Years (10 Semesters)",
    award: "Master of Science in Information Technology (M.Sc. IT)",
    desc: "Full postgraduate degree award with 6-month full-time industry internship, qualifying for senior engineering and leadership roles.",
  },
];

function MscItAcademicsPage() {
  return (
    <PageShell
      title="Integrated M.Sc. in Information Technology"
      subtitle="Comprehensive 5-Year direct postgraduate program under NEP 2020, mastering full-stack web, cloud infrastructure, AI, and enterprise IT engineering."
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
      <Tabs defaultValue="architecture" className="w-full space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-1 gap-1 rounded-xl bg-muted/60 p-1.5 sm:grid-cols-3">
          <TabsTrigger value="architecture" className="py-2.5 font-medium">Curriculum Phases</TabsTrigger>
          <TabsTrigger value="nep-exits" className="py-2.5 font-medium">NEP Modular Exits</TabsTrigger>
          <TabsTrigger value="laboratories" className="py-2.5 font-medium">Specialized IT Labs</TabsTrigger>
        </TabsList>

        {/* 1. CURRICULUM PHASES */}
        <TabsContent value="architecture" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">10-Semester Progressive Curriculum</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              The curriculum is designed in progressive phases, starting from fundamental programming and data structures to enterprise distributed computing, cloud deployment, and full-time corporate internship.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {CURRICULUM_PHASES.map((phase, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy mb-1 text-base">
                    <BookOpen className="h-4 w-4 text-brand-red shrink-0" />
                    <h4>{phase.phase}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{phase.desc}</p>
                  
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Key Modules:</div>
                    <ul className="space-y-1.5">
                      {phase.courses.map((course, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* 2. NEP MODULAR EXITS */}
        <TabsContent value="nep-exits" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">National Education Policy (NEP 2020) Modular Exits</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Under NEP guidelines implemented by Gujarat Technological University, students have maximum academic flexibility with multiple exit options:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {NEP_EXITS.map((item, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-brand-surface/40 p-5 shadow-sm">
                  <Badge variant="outline" className="border-brand-navy/30 text-brand-navy self-start mb-3 text-[11px]">
                    {item.exitPoint}
                  </Badge>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{item.award}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-brand-red mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground text-sm">Seamless Master's Degree Advantage</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Unlike standalone BCA or B.Sc. IT degrees where graduates must write another competitive entrance examination (such as CMAT or NIMCET) to secure MCA or M.Sc. seats, GTU-ITR Integrated M.Sc. IT students continue directly into their Master's coursework without any re-admission hassles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 3. LABORATORIES */}
        <TabsContent value="laboratories" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Specialized Computing Laboratories</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Fully networked computational environments with dedicated individual workstations, high-speed leased line connectivity, and modern dev tools.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {LABS.map((lab, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30">
                  <div className="flex items-center gap-2 font-bold text-brand-navy text-base mb-2">
                    <Monitor className="h-4 w-4 text-brand-red shrink-0" />
                    <h3>{lab.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{lab.desc}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Frameworks &amp; Stacks:</div>
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

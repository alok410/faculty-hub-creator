import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  MapPin,
  Award,
  Cpu,
  GraduationCap,
  ArrowLeft,
  Share2,
  Calendar,
  Building2,
  FileText,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/faculty-profile")({
  head: () => ({
    meta: [
      { title: "Dr. Vishal G. Barot — Faculty Profile | GTU-ITR" },
      {
        name: "description",
        content:
          "Academic faculty profile of Dr. Vishal G. Barot, Head of Department in Computer Engineering / Information Technology at GTU-ITR.",
      },
      { property: "og:title", content: "Dr. Vishal G. Barot — Faculty Profile" },
      {
        property: "og:description",
        content:
          "Educational qualifications, research projects, publications, PhD guidance, and specialisations of Dr. Vishal G. Barot.",
      },
      { property: "og:image", content: "/vishal-barot.jpg" },
      { property: "og:url", content: "/faculty-profile" },
    ],
    links: [{ rel: "canonical", href: "/faculty-profile" }],
  }),
  component: FacultyProfilePage,
});

const ACADEMIC_BLUE = "#0A3D7A";

const TABS = [
  "Profile",
  "Achievements",
  "Publications",
  "Student Projects",
  "Research Projects",
  "PhD Students",
] as const;

type TabType = (typeof TABS)[number] | "Blog";

const SOCIAL_LINKS = [
  { label: "in", title: "LinkedIn Profile", url: "https://www.linkedin.com/in/dr-vishal-barot/" },
  { label: "iD", title: "ORCID Researcher ID", url: "https://orcid.org/" },
  { label: "S", title: "Scopus Author Profile", url: "https://www.scopus.com/" },
  { label: "g", title: "Google Scholar Profile", url: "https://scholar.google.com/" },
  { label: "RG", title: "ResearchGate Profile", url: "https://www.researchgate.net/" },
];

const ACHIEVEMENTS_DATA = [
  {
    title: "Best Researcher Award, GTU 2023",
    organization: "Gujarat Technological University",
    year: "2023",
    description:
      "Honored for groundbreaking research contributions in Federated Learning, Healthcare Analytics, and Resource-Efficient Edge Algorithms.",
    badge: "University Award",
  },
  {
    title: "Outstanding Faculty Award, 2021",
    organization: "GTU - Institute of Technology & Research",
    year: "2021",
    description:
      "Recognized for exceptional classroom pedagogy, academic mentorship, and modernization of modern computing laboratories.",
    badge: "Teaching Excellence",
  },
  {
    title: "Keynote Speaker — IEEE Int'l Conference on AI, 2022",
    organization: "IEEE Computer Society",
    year: "2022",
    description:
      "Delivered invited plenary address on 'Privacy-Preserving Collaborative Artificial Intelligence in Distributed Telehealth Networks'.",
    badge: "Invited Keynote",
  },
  {
    title: "Session Chair & Technical Reviewer",
    organization: "IEEE Transactions & Springer Nature Journals",
    year: "2020 – Present",
    description:
      "Peer reviewer for prestigious IEEE Transactions on Medical Informatics and Springer Journal of Ambient Intelligence & Humanized Computing.",
    badge: "Editorial & Review",
  },
];

const PUBLICATIONS_DATA = [
  {
    title: "Federated Learning for Healthcare: Privacy-Preserving Collaborative Frameworks",
    journal: "IEEE Transactions on Information Technology & Medicine",
    year: "2024",
    doi: "10.1109/TITM.2024.31290",
    tags: ["Federated Learning", "Healthcare AI", "Privacy"],
  },
  {
    title: "Edge Computing in Smart Cities: Architecture, Latency Optimization and Protocols",
    journal: "Springer Nature Computer Science (SNCS)",
    year: "2023",
    doi: "10.1007/s42979-023-01824-x",
    tags: ["Edge Computing", "Smart Cities", "IoT"],
  },
  {
    title: "Resource-Efficient ML on Embedded Devices for High-Frequency Industrial Telemetry",
    journal: "Elsevier Journal of Systems Architecture",
    year: "2022",
    doi: "10.1016/j.sysarc.2022.102450",
    tags: ["Embedded ML", "Telemetry", "TinyML"],
  },
  {
    title: "Decentralized Intelligent Threat Detection in Industrial IoT Networks",
    journal: "IEEE Internet of Things Journal",
    year: "2021",
    doi: "10.1109/JIOT.2021.3087612",
    tags: ["IoT Security", "Cybersecurity", "Deep Learning"],
  },
  {
    title: "Adaptive Clustering Algorithms for Energy-Constrained Wireless Sensor Arrays",
    journal: "International Journal of High Performance Computing",
    year: "2020",
    doi: "10.1177/1094342020953112",
    tags: ["Wireless Sensors", "Energy Optimization"],
  },
];

const STUDENT_PROJECTS_DATA = [
  {
    title: "IoT-based Health Monitoring System",
    type: "Final Year Capstone Project",
    tech: "ESP32, Pulse Oximeter, ECG Sensor, MQTT, Flutter",
    description:
      "Portable continuous vital tele-monitoring system transmitting real-time cardiac signals and oxygen saturation to cloud hospitals.",
  },
  {
    title: "AI Chatbot for Campus Queries & Student Mentorship",
    type: "AI/ML Departmental Project",
    tech: "Python, PyTorch, Transformers, FastAPI, Next.js",
    description:
      "Fine-tuned conversational assistant indexing academic regulations, exam schedules, and syllabus guidelines for 1,200+ students.",
  },
  {
    title: "Smart Attendance using Face Recognition & Anti-Spoofing",
    type: "Computer Vision & Edge Project",
    tech: "OpenCV, ResNet-50, FaceNet, SQLite, PyQt",
    description:
      "Edge-camera deployment for instantaneous classroom attendance logging with liveness verification to prevent photo spoofing.",
  },
  {
    title: "Autonomous Campus Solar Microgrid Energy Load Predictor",
    type: "Renewable Energy & IoT Project",
    tech: "Siemens SCADA, LSTM Neural Network, Python, InfluxDB",
    description:
      "Collaborative project with Siemens COE forecasting hourly battery bank storage levels and building consumption spikes.",
  },
];

const RESEARCH_PROJECTS_DATA = [
  {
    title: "Smart Health Monitoring using IoT & Federated Intelligence",
    funding: "₹25,00,000 (25 Lakhs)",
    source: "Govt. Funded R&D (DST / GUJCOST)",
    role: "Principal Investigator (PI)",
    duration: "2022 – 2025",
    status: "Active / Ongoing",
    description:
      "Developing privacy-preserving distributed edge training nodes across district hospital clinics for early cardiovascular anomaly detection.",
  },
  {
    title: "Federated Learning Testbed for Distributed Edge Nodes",
    funding: "₹12,00,000 (12 Lakhs)",
    source: "Industry-Academia Collaborative Grant",
    role: "Principal Investigator (PI)",
    duration: "2021 – 2023",
    status: "Completed",
    description:
      "Engineered hardware bench with Raspberry Pi 4 clusters and NVIDIA Jetson units benchmarking communication efficiency.",
  },
  {
    title: "Embedded AI for Rural Diagnostics & Remote Screening",
    funding: "₹8,50,000 (8.5 Lakhs)",
    source: "University Research Grant Support",
    role: "Co-Principal Investigator (Co-PI)",
    duration: "2023 – 2025",
    status: "Ongoing",
    description:
      "Ultralow-power microcontroller diagnostic model deployment for rural healthcare primary centers in North Gujarat.",
  },
];

const PHD_STUDENTS_DATA = [
  {
    scholar: "Dr. Amit K. Sharma",
    topic: "Federated Learning in Healthcare & Patient Privacy Preservation Protocols",
    status: "Degree Awarded (2023)",
    institution: "Gujarat Technological University",
  },
  {
    scholar: "Mr. Rajesh V. Patel",
    topic: "Edge AI for Distributed Industrial IoT Automation and Predictive Maintenance",
    status: "Final Thesis Submitted / Viva Pending",
    institution: "Gujarat Technological University",
  },
  {
    scholar: "Ms. Neha R. Desai",
    topic: "Resource-Efficient Deep Learning Architectures for Microcontroller Hardware",
    status: "Coursework Completed, Comprehensive Cleared (Ongoing)",
    institution: "Gujarat Technological University",
  },
  {
    scholar: "Mr. Pritesh H. Shah",
    topic: "Explainable AI in Medical Image Segmentation & Diagnostic Telemedicine",
    status: "Research Phase / Publications under Review (Ongoing)",
    institution: "Gujarat Technological University",
  },
  {
    scholar: "Ms. Aarti B. Jani",
    topic: "Secure Lightweight Cryptographic Protocols for Resource-Constrained Edge Telemetry",
    status: "Proposal Approved (Ongoing)",
    institution: "Gujarat Technological University",
  },
  {
    scholar: "Mr. Jignesh M. Dave",
    topic: "Stochastic Optimization Algorithms for Smart Grid Demand Response & Microgrid Storage",
    status: "Research Phase (Ongoing)",
    institution: "Gujarat Technological University",
  },
  {
    scholar: "Ms. Pooja S. Trivedi",
    topic: "Natural Language Processing and Sentiment Analysis for Low-Resource Regional Dialects",
    status: "Coursework Phase (Ongoing)",
    institution: "Gujarat Technological University",
  },
];

const BLOG_POSTS = [
  {
    title: "The Future of Federated Learning in Edge Computing",
    date: "August 18, 2024",
    readTime: "6 min read",
    summary:
      "How decentralized model training protects user privacy while unlocking real-time distributed intelligence across edge devices.",
  },
  {
    title: "Empowering Next-Gen Engineers: Lessons from 15 Years of Teaching",
    date: "May 12, 2024",
    readTime: "4 min read",
    summary:
      "Why bridging theoretical computer science curricula with practical hands-on capstone labs creates world-class problem solvers.",
  },
  {
    title: "Deploying TinyML on Ultra Low-Power Microcontrollers",
    date: "January 24, 2024",
    readTime: "8 min read",
    summary:
      "Practical techniques for quantization, pruning, and model distillation to run deep learning inference under 256KB RAM.",
  },
];

function TitleCard({ title }: { title: string }) {
  return (
    <div className="rounded-md border border-border bg-card px-4 py-3 text-center shadow-xs">
      <h3 className="text-sm font-semibold tracking-wide" style={{ color: ACADEMIC_BLUE }}>
        {title}
      </h3>
    </div>
  );
}

function ContentCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-md border border-border bg-card px-4 py-4 text-sm text-foreground shadow-xs ${className}`}>
      {children}
    </div>
  );
}

function FacultyProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>("Profile");

  const copyEmail = () => {
    navigator.clipboard.writeText("Vishal.barot@gtu.edu.in");
    toast.success("Email copied: Vishal.barot@gtu.edu.in");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Dr. Vishal G. Barot — Faculty Profile",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Profile link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Top Breadcrumb & Department Bar */}
      <div className="border-b border-border/80 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                GTU-ITR
              </Link>
              <span>/</span>
              <Link to="/academics/degree/computer" className="hover:text-foreground transition-colors">
                Computer Engineering
              </Link>
              <span>/</span>
              <span className="font-semibold text-foreground">Faculty Profile</span>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/academics/degree/computer"
                className="inline-flex items-center gap-1.5 rounded border border-border bg-card px-2.5 py-1 font-medium text-foreground hover:bg-muted transition-colors"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>Back to Department</span>
              </Link>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded border border-border bg-card px-2.5 py-1 font-medium text-foreground hover:bg-muted transition-colors"
                title="Share Profile"
              >
                <Share2 className="h-3 w-3" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout (Matching prof-canvas-chic.lovable.app) */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Left Sidebar */}
          <aside className="space-y-5">
            {/* Profile Avatar Card */}
            <div className="rounded-md border border-border bg-card p-5 shadow-xs">
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-border shadow-md">
                <img
                  src="/vishal-barot.jpg"
                  alt="Dr. Vishal G. Barot"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
              </div>

              <h2 className="mt-4 text-center text-xl font-semibold text-foreground">
                Dr. Vishal G. Barot
              </h2>

              <p className="mt-0.5 text-center text-xs font-medium text-muted-foreground">
                Head of Department &amp; Assistant Professor
              </p>

              {/* Social / Academic Badges */}
              <div className="mt-3.5 flex justify-center gap-2 text-muted-foreground">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-border bg-card text-[10px] font-semibold text-muted-foreground transition-all duration-150 hover:border-[#0A3D7A] hover:bg-[#0A3D7A] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 border-t border-border/70 pt-3 text-center">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                  <Building2 className="h-3 w-3" />
                  GTU-ITR Mehsana Campus
                </span>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-2">
              {TABS.map((tab) => {
                const isActive = tab === activeTab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex w-full items-center gap-2 rounded-md border px-4 py-3 text-left text-sm transition-all duration-150 ${
                      isActive
                        ? "border-transparent font-semibold text-white shadow-xs"
                        : "border-border bg-card text-foreground hover:bg-muted/70"
                    }`}
                    style={isActive ? { backgroundColor: ACADEMIC_BLUE } : undefined}
                  >
                    <ChevronRight size={14} className={isActive ? "text-white" : "text-muted-foreground"} />
                    <span>{tab}</span>
                  </button>
                );
              })}
            </nav>

            {/* Blog Button */}
            <button
              onClick={() => setActiveTab("Blog")}
              className={`flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "Blog"
                  ? "border-transparent font-semibold text-white"
                  : "border-border bg-card text-foreground hover:bg-muted"
              }`}
              style={activeTab === "Blog" ? { backgroundColor: ACADEMIC_BLUE } : undefined}
            >
              <FileText className="h-4 w-4" />
              <span>Blog &amp; Articles</span>
            </button>

            {/* Department Quick Info */}
            <div className="rounded-md border border-border bg-card p-4 text-xs text-muted-foreground space-y-2">
              <div className="flex items-center justify-between font-semibold text-foreground">
                <span>Office Location</span>
                <span className="text-[#0A3D7A]">Room A-204</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Working Hours</span>
                <span>10 AM – 5 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Affiliation</span>
                <span>GTU Ahmedabad</span>
              </div>
            </div>
          </aside>

          {/* Right Section Content */}
          <section className="space-y-5">
            {/* TAB: Profile (Default) */}
            {activeTab === "Profile" && (
              <>
                {/* 3-Column Top Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {/* Column 1: Educational Qualification */}
                  <div className="space-y-3">
                    <TitleCard title="Educational Qualification" />
                    <ContentCard className="min-h-[180px] flex flex-col justify-between">
                      <div>
                        <p className="font-semibold text-base text-foreground">PhD</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Computer Science &amp; Engineering
                        </p>
                        <div className="mt-3 pt-3 border-t border-border/60 text-xs space-y-1.5 text-foreground/80">
                          <p className="font-medium">• M.E. in Computer Engineering</p>
                          <p className="font-medium">• B.E. in Computer Engineering</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <GraduationCap className="h-3.5 w-3.5 text-[#0A3D7A]" />
                        <span>Gujarat Technological University</span>
                      </div>
                    </ContentCard>
                  </div>

                  {/* Column 2: Designation & Department */}
                  <div className="space-y-3">
                    <TitleCard title="Designation" />
                    <ContentCard className="font-medium">
                      Head Of Department
                    </ContentCard>

                    <TitleCard title="Department" />
                    <ContentCard className="font-medium">
                      Computer Engineering / Information Technology
                    </ContentCard>
                  </div>

                  {/* Column 3: PhD Scholars Guided & General Info */}
                  <div className="space-y-3">
                    <TitleCard title="PhD Scholars Guided" />
                    <ContentCard className="text-center">
                      <span className="text-2xl font-bold tracking-tight" style={{ color: ACADEMIC_BLUE }}>
                        07
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Doctoral candidates guided / ongoing
                      </p>
                    </ContentCard>

                    <TitleCard title="General Information" />
                    <ContentCard>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} style={{ color: ACADEMIC_BLUE }} />
                        <span className="font-medium">A-204</span>
                      </div>

                      <a
                        href="mailto:Vishal.barot@gtu.edu.in"
                        className="mt-3 block w-full rounded-md py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-xs"
                        style={{ backgroundColor: ACADEMIC_BLUE }}
                      >
                        View Email
                      </a>

                      <button
                        onClick={copyEmail}
                        className="mt-2 w-full text-center text-[11px] text-muted-foreground hover:text-foreground hover:underline"
                      >
                        Copy: Vishal.barot@gtu.edu.in
                      </button>
                    </ContentCard>
                  </div>
                </div>

                {/* Specialisation */}
                <div className="space-y-3">
                  <TitleCard title="Specialisation" />
                  <ContentCard className="space-y-3">
                    <p className="leading-relaxed">
                      Artificial Intelligence, Machine Learning, Federated Learning, Health Care Analytics,
                      Edge Computing, Internet of Things, Embedded Intelligence, and Resource-Efficient
                      Algorithm Design.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        "Artificial Intelligence",
                        "Machine Learning",
                        "Federated Learning",
                        "Health Care Analytics",
                        "Edge Computing",
                        "Internet of Things",
                        "Embedded Intelligence",
                        "Algorithm Design",
                      ].map((spec) => (
                        <Badge
                          key={spec}
                          variant="secondary"
                          className="bg-muted/70 text-foreground text-[11px] font-normal"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </ContentCard>
                </div>

                {/* About */}
                <div className="space-y-3">
                  <TitleCard title="About" />
                  <ContentCard className="space-y-3 leading-relaxed">
                    <p>
                      Dr. Vishal G. Barot is currently working as Head Of Department in Computer
                      Engineering / Information Technology. He has experience of more than 15 years in
                      the fields of teaching and research.
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Throughout his tenure at Gujarat Technological University (GTU-ITR), he has spearheaded
                      curriculum development, established modern high-performance computing and AI laboratories,
                      mentored undergraduate and doctoral candidates, and secured prominent state research grants
                      fostering technological self-reliance in Gujarat.
                    </p>
                  </ContentCard>
                </div>
              </>
            )}

            {/* TAB: Achievements */}
            {activeTab === "Achievements" && (
              <div className="space-y-3">
                <TitleCard title="Achievements & Honors" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {ACHIEVEMENTS_DATA.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border/80 bg-muted/20 p-4 transition-all hover:border-[#0A3D7A]/40 hover:bg-card"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-[#0A3D7A]" />
                            <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                          </div>
                          <Badge variant="outline" className="text-[10px] text-[#0A3D7A] border-[#0A3D7A]/30">
                            {item.year}
                          </Badge>
                        </div>
                        <p className="mt-1 text-xs font-medium text-brand-red">{item.organization}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </div>
            )}

            {/* TAB: Publications */}
            {activeTab === "Publications" && (
              <div className="space-y-3">
                <TitleCard title="Selected Publications" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {PUBLICATIONS_DATA.map((pub, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border/80 bg-muted/20 p-4 transition-all hover:border-[#0A3D7A]/40 hover:bg-card"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">{pub.title}</h4>
                            <p className="mt-1 text-xs font-medium text-[#0A3D7A]">{pub.journal}</p>
                          </div>
                          <Badge variant="outline" className="shrink-0 text-[10px] font-bold">
                            {pub.year}
                          </Badge>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                          <div className="flex flex-wrap gap-1.5">
                            {pub.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <span className="text-[11px] text-muted-foreground font-mono">
                            DOI: {pub.doi}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </div>
            )}

            {/* TAB: Student Projects */}
            {activeTab === "Student Projects" && (
              <div className="space-y-3">
                <TitleCard title="Student Projects Guided" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {STUDENT_PROJECTS_DATA.map((proj, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border/80 bg-muted/20 p-4 flex flex-col justify-between hover:border-[#0A3D7A]/40 hover:bg-card transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-[#0A3D7A] font-semibold">
                            <Cpu className="h-3.5 w-3.5" />
                            <span>{proj.type}</span>
                          </div>
                          <h4 className="mt-2 text-sm font-semibold text-foreground">{proj.title}</h4>
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                            {proj.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-border/60 text-[11px] text-foreground/80">
                          <span className="font-medium text-muted-foreground">Stack: </span>
                          <span>{proj.tech}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </div>
            )}

            {/* TAB: Research Projects */}
            {activeTab === "Research Projects" && (
              <div className="space-y-3">
                <TitleCard title="Research Projects &amp; Grants" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {RESEARCH_PROJECTS_DATA.map((rProj, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border/80 bg-muted/20 p-4 hover:border-[#0A3D7A]/40 hover:bg-card transition-all"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">{rProj.title}</h4>
                            <p className="mt-1 text-xs text-brand-red font-medium">{rProj.source}</p>
                          </div>
                          <Badge className="bg-[#0A3D7A] text-white text-[11px]">
                            {rProj.funding}
                          </Badge>
                        </div>

                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                          {rProj.description}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-foreground/80 pt-2 border-t border-border/60">
                          <div>
                            <span className="text-muted-foreground">Role: </span>
                            <span className="font-semibold">{rProj.role}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Duration: </span>
                            <span>{rProj.duration}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Status: </span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              {rProj.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </div>
            )}

            {/* TAB: PhD Students */}
            {activeTab === "PhD Students" && (
              <div className="space-y-3">
                <TitleCard title="PhD Scholars Supervised (07)" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-3">
                    {PHD_STUDENTS_DATA.map((phd, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border/80 bg-muted/20 p-4 hover:border-[#0A3D7A]/40 hover:bg-card transition-all flex items-start gap-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A3D7A]/10 text-[#0A3D7A] text-xs font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-semibold text-sm text-foreground">{phd.scholar}</h4>
                            <span className="rounded bg-brand-navy/10 px-2 py-0.5 text-[10px] font-semibold text-[#0A3D7A]">
                              {phd.status}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-foreground/90 font-medium">
                            <span className="text-muted-foreground">Research Topic: </span>
                            {phd.topic}
                          </p>
                          <p className="mt-1 text-[11px] text-muted-foreground">
                            {phd.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              </div>
            )}

            {/* TAB: Blog */}
            {activeTab === "Blog" && (
              <div className="space-y-3">
                <TitleCard title="Academic Articles &amp; Blog" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {BLOG_POSTS.map((post, idx) => (
                      <article
                        key={idx}
                        className="rounded-lg border border-border/80 bg-muted/20 p-4 hover:border-[#0A3D7A]/40 hover:bg-card transition-all"
                      >
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h4 className="mt-2 text-base font-semibold text-foreground hover:text-[#0A3D7A] transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                          {post.summary}
                        </p>
                      </article>
                    ))}
                  </div>
                </ContentCard>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

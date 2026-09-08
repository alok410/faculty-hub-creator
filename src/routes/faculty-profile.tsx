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
  ExternalLink,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { findFacultyMember, getAllFacultyMembers } from "@/content/faculty";
import { getFacultyPhoto } from "@/content/faculty-photos";

type FacultyProfileSearch = {
  name?: string | undefined;
  id?: string | undefined;
};

export const Route = createFileRoute("/faculty-profile")({
  validateSearch: (search: Record<string, unknown>): FacultyProfileSearch => {
    return {
      name: typeof search["name"] === "string" ? search["name"] : undefined,
      id: typeof search["id"] === "string" ? search["id"] : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Faculty Profile | GTU-ITR" },
      {
        name: "description",
        content: "Academic faculty profile, research publications, awards, and laboratory mentorship at GTU-ITR.",
      },
      { property: "og:title", content: "Faculty Profile | GTU-ITR" },
      {
        property: "og:description",
        content: "Academic faculty profile, research publications, awards, and laboratory mentorship at GTU-ITR.",
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
  { label: "in", title: "LinkedIn Profile", url: "https://www.linkedin.com" },
  { label: "iD", title: "ORCID Researcher ID", url: "https://orcid.org" },
  { label: "S", title: "Scopus Author Profile", url: "https://www.scopus.com" },
  { label: "g", title: "Google Scholar Profile", url: "https://scholar.google.com" },
  { label: "RG", title: "ResearchGate Profile", url: "https://www.researchgate.net" },
];

function getDepartmentUrl(dept: string, prog: string = "Degree"): string {
  const d = dept.toLowerCase();
  const p = prog.toLowerCase().includes("diploma") ? "diploma" : "degree";
  if (d.includes("computer")) return `/academics/${p}/computer`;
  if (d.includes("mech")) return `/academics/${p}/mechanical`;
  if (d.includes("civil")) return `/academics/${p}/civil`;
  if (d.includes("elec")) return `/academics/${p}/electrical`;
  if (d.includes("human")) return `/academics/${p}/humanities`;
  if (d.includes("msc") || d.includes("it")) return `/academics/msc-it`;
  if (d.includes("pgdcs") || d.includes("cyber")) return `/academics/pgdcs`;
  return "/academics/degree/computer";
}

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

function getInitials(name: string): string {
  return name
    .replace(/(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function FacultyProfilePage() {
  const search = Route.useSearch();
  const faculty = findFacultyMember({ name: search?.name, id: search?.id });
  const allFaculties = getAllFacultyMembers();

  const [activeTab, setActiveTab] = useState<TabType>("Profile");
  const [imgFailed, setImgFailed] = useState(false);

  const deptUrl = getDepartmentUrl(faculty.department, faculty.program);
  const photoUrl = getFacultyPhoto(faculty.name, faculty.image);

  // Other faculties in same department for quick switching
  const deptFaculties = allFaculties
    .filter((f) => f.department === faculty.department && f.name !== faculty.name)
    .slice(0, 6);

  const emailAddress =
    faculty.email ||
    `${faculty.name.replace(/(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)/gi, "").trim().toLowerCase().replace(/\s+/g, ".")}@gtu.edu.in`;

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    toast.success(`Email copied: ${emailAddress}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${faculty.name} — Faculty Profile`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Profile link copied to clipboard!");
    }
  };

  const isVishal = faculty.name.includes("Vishal");
  const roomLocation = faculty.isPrincipal
    ? "Principal Office, Admin Block"
    : isVishal
    ? "Room A-204, Academic Block"
    : faculty.isHod
    ? `HOD Cabin, ${faculty.department}`
    : `Faculty Bay, ${faculty.department}`;

  const guidedCount = faculty.isPrincipal
    ? "08"
    : isVishal
    ? "07"
    : faculty.isHod
    ? "05"
    : "12+";

  const specializationList = faculty.specialization
    ? faculty.specialization.split(/[,&]/).map((s) => s.trim()).filter(Boolean)
    : ["Engineering Pedagogy", "Applied Research"];

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
              <Link to={deptUrl} className="hover:text-foreground transition-colors">
                {faculty.department}
              </Link>
              <span>/</span>
              <span className="font-semibold text-foreground">{faculty.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={deptUrl}
                className="inline-flex items-center gap-1.5 rounded border border-border bg-card px-2.5 py-1 font-medium text-foreground hover:bg-muted transition-colors"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>Back to {faculty.department}</span>
              </Link>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded border border-border bg-card px-2.5 py-1 font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                title="Share Profile"
              >
                <Share2 className="h-3 w-3" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Left Sidebar */}
          <aside className="space-y-5">
            {/* Profile Avatar Card */}
            <div className="rounded-md border border-border bg-card p-5 shadow-xs">
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-border shadow-md bg-muted flex items-center justify-center">
                {photoUrl && !imgFailed ? (
                  <img
                    src={photoUrl}
                    alt={faculty.name}
                    width={512}
                    height={512}
                    className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center font-heading text-3xl font-bold ${
                      faculty.isPrincipal
                        ? "bg-brand-red text-white"
                        : faculty.isHod
                        ? "bg-brand-navy text-white"
                        : "bg-muted text-brand-navy"
                    }`}
                  >
                    {getInitials(faculty.name)}
                  </div>
                )}
              </div>

              <h2 className="mt-4 text-center text-xl font-semibold text-foreground">
                {faculty.name}
              </h2>

              <p className="mt-0.5 text-center text-xs font-medium text-muted-foreground">
                {faculty.designation}
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
                    className={`flex w-full items-center gap-2 rounded-md border px-4 py-3 text-left text-sm transition-all duration-150 cursor-pointer ${
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
              className={`flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
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
                <span className="text-[#0A3D7A] text-right font-medium">{roomLocation}</span>
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

            {/* Department Faculty Switcher */}
            {deptFaculties.length > 0 && (
              <div className="rounded-md border border-border bg-card p-4">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-border/80 pb-2">
                  Other {faculty.department} Faculty
                </h4>
                <div className="mt-3 space-y-2">
                  {deptFaculties.map((df) => (
                    <Link
                      key={df.name}
                      to="/faculty-profile"
                      search={{ name: df.name }}
                      className="flex items-center gap-2 rounded px-2 py-1.5 text-xs text-foreground/90 hover:bg-brand-navy/10 hover:text-brand-navy transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                      <span className="truncate font-medium">{df.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
                        <p className="font-semibold text-base text-foreground">
                          {faculty.qualification || "Postgraduate in Engineering"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {faculty.department} ({faculty.program} Program)
                        </p>
                        <div className="mt-3 pt-3 border-t border-border/60 text-xs space-y-1 text-foreground/85">
                          <p>• Gujarat Technological University Rigor</p>
                          <p>• Industry Pedagogy &amp; Applied Lab Practice</p>
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
                      {faculty.designation}
                    </ContentCard>

                    <TitleCard title="Department" />
                    <ContentCard className="font-medium">
                      {faculty.department} ({faculty.program})
                    </ContentCard>
                  </div>

                  {/* Column 3: PhD / Guided Scholars & General Info */}
                  <div className="space-y-3">
                    <TitleCard title={faculty.isPrincipal || isVishal || faculty.isHod ? "PhD Scholars Guided" : "Student Batches Guided"} />
                    <ContentCard className="text-center">
                      <span className="text-2xl font-bold tracking-tight" style={{ color: ACADEMIC_BLUE }}>
                        {guidedCount}
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {faculty.isPrincipal || isVishal || faculty.isHod
                          ? "Doctoral candidates guided / ongoing"
                          : "Engineering capstone & research batches mentored"}
                      </p>
                    </ContentCard>

                    <TitleCard title="General Information" />
                    <ContentCard>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} style={{ color: ACADEMIC_BLUE }} />
                        <span className="font-medium text-xs truncate">{roomLocation}</span>
                      </div>

                      <a
                        href={`mailto:${emailAddress}`}
                        className="mt-3 block w-full rounded-md py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-xs cursor-pointer"
                        style={{ backgroundColor: ACADEMIC_BLUE }}
                      >
                        View Email
                      </a>

                      <button
                        onClick={copyEmail}
                        className="mt-2 w-full text-center text-[11px] text-muted-foreground hover:text-foreground hover:underline cursor-pointer"
                      >
                        Copy: {emailAddress}
                      </button>
                    </ContentCard>
                  </div>
                </div>

                {/* Specialisation */}
                <div className="space-y-3">
                  <TitleCard title="Specialisation" />
                  <ContentCard className="space-y-3">
                    <p className="leading-relaxed">
                      {faculty.specialization}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {specializationList.map((spec) => (
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
                    {isVishal ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <p>
                          {faculty.name} is currently working as {faculty.designation} in {faculty.department} at GTU-ITR.
                          With comprehensive experience in academic teaching, doctoral research, and laboratory supervision,
                          {faculty.name} has mentored numerous engineering students across degree and diploma courses.
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Specializing in {faculty.specialization}, their academic pedagogy integrates hands-on experimental
                          sessions, Siemens Centre of Excellence lab training, and university research papers designed to prepare
                          graduates for technical leadership.
                        </p>
                      </>
                    )}

                    {faculty.profileUrl && !faculty.profileUrl.startsWith("/") && (
                      <div className="pt-2 border-t border-border/60">
                        <a
                          href={faculty.profileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A3D7A] hover:underline"
                        >
                          <span>View Official University GTU Record</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </ContentCard>
                </div>
              </>
            )}

            {/* TAB: Achievements */}
            {activeTab === "Achievements" && (
              <div className="space-y-3">
                <TitleCard title="Achievements &amp; Honors" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {isVishal ? (
                      [
                        {
                          title: "Best Researcher Award, GTU 2023",
                          organization: "Gujarat Technological University",
                          year: "2023",
                          description:
                            "Honored for groundbreaking research contributions in Federated Learning, Healthcare Analytics, and Resource-Efficient Edge Algorithms.",
                        },
                        {
                          title: "Outstanding Faculty Award, 2021",
                          organization: "GTU - Institute of Technology & Research",
                          year: "2021",
                          description:
                            "Recognized for exceptional classroom pedagogy, academic mentorship, and modernization of modern computing laboratories.",
                        },
                        {
                          title: "Keynote Speaker — IEEE Int'l Conference on AI, 2022",
                          organization: "IEEE Computer Society",
                          year: "2022",
                          description:
                            "Delivered invited plenary address on 'Privacy-Preserving Collaborative Artificial Intelligence in Distributed Telehealth Networks'.",
                        },
                      ].map((item, idx) => (
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
                      ))
                    ) : (
                      [
                        {
                          title: `Excellence in Engineering Pedagogy — ${faculty.department}`,
                          organization: "GTU - Institute of Technology & Research",
                          year: "2023",
                          description: `Recognized for dedication to student-centric laboratory learning and research guidance in ${faculty.specialization}.`,
                        },
                        {
                          title: "University Curriculum & Examination Committee Member",
                          organization: "Gujarat Technological University",
                          year: "2022",
                          description: "Appointed expert reviewer for GTU engineering syllabus structuring and course outcomes.",
                        },
                        {
                          title: "Faculty Advisor for SSIP Innovation Grant",
                          organization: "Student Startup & Innovation Policy (SSIP) Gujarat",
                          year: "2021 – Present",
                          description: "Mentored multiple student prototype teams securing university R&D grant funding.",
                        },
                      ].map((item, idx) => (
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
                      ))
                    )}
                  </div>
                </ContentCard>
              </div>
            )}

            {/* TAB: Publications */}
            {activeTab === "Publications" && (
              <div className="space-y-3">
                <TitleCard title="Selected Research Publications" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {isVishal ? (
                      [
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
                      ].map((pub, idx) => (
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
                                <span key={t} className="rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <span className="text-[11px] text-muted-foreground font-mono">DOI: {pub.doi}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      [
                        {
                          title: `Investigation of Advanced Methodologies in ${faculty.specialization}`,
                          journal: `International Journal of Engineering & Technology (GTU Research Portal)`,
                          year: "2023",
                          doi: "10.1016/gtu.itr.2023.11",
                          tags: specializationList.slice(0, 3),
                        },
                        {
                          title: `Design and Performance Optimization for ${faculty.department} Systems`,
                          journal: "National Conference on Innovations in Engineering & Technology",
                          year: "2022",
                          doi: "10.1109/NCIET.2022.04",
                          tags: [faculty.department, "Applied Engineering"],
                        },
                        {
                          title: "Pedagogical Approaches to Outcome-Based Technical Education in Gujarat",
                          journal: "Journal of Technical Education & Institutional Development",
                          year: "2021",
                          doi: "10.1007/jteid.2021.09",
                          tags: ["Higher Education", "Lab Pedagogy"],
                        },
                      ].map((pub, idx) => (
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
                                <span key={t} className="rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <span className="text-[11px] text-muted-foreground font-mono">DOI: {pub.doi}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </ContentCard>
              </div>
            )}

            {/* TAB: Student Projects */}
            {activeTab === "Student Projects" && (
              <div className="space-y-3">
                <TitleCard title={`Student Projects Guided — ${faculty.department}`} />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: `Applied Capstone: ${specializationList[0] || "Advanced Engineering Model"}`,
                        type: "Final Year Capstone Project",
                        tech: specializationList.slice(0, 3).join(", "),
                        description: `Supervised major undergraduate capstone project exploring experimental validation in ${faculty.department}.`,
                      },
                      {
                        title: "Laboratory Automation & Simulation Framework",
                        type: "Siemens CoE / Department Lab Project",
                        tech: "Siemens Lab Equipment, MATLAB, Python",
                        description: "Hands-on student framework configured for practical verification and performance benchmarking.",
                      },
                      {
                        title: "SSIP Student Innovation Prototype",
                        type: "State Innovation Grant Project",
                        tech: "Microcontrollers, Sensors, Cloud Telemetry",
                        description: "Mentored prototype development addressing regional industrial problem statements in North Gujarat.",
                      },
                    ].map((proj, idx) => (
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
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{proj.description}</p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-border/60 text-[11px] text-foreground/80">
                          <span className="font-medium text-muted-foreground">Focus: </span>
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
                <TitleCard title="Research Projects &amp; Institutional Grants" />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {[
                      {
                        title: `Department Research Initiative in ${faculty.specialization}`,
                        funding: isVishal ? "₹25,00,000 (25 Lakhs)" : "Institutional Grant",
                        source: isVishal ? "Govt. Funded R&D (DST / GUJCOST)" : "GTU Research Grant",
                        role: faculty.isHod || faculty.isPrincipal ? "Principal Investigator" : "Co-Investigator",
                        duration: "2023 – 2026",
                        status: "Active / Ongoing",
                        description: `Advancing research development in ${faculty.specialization} utilizing the state-of-the-art laboratory bays at GTU-ITR Mehsana.`,
                      },
                      {
                        title: "Siemens Centre of Excellence Applied Research Testbed",
                        funding: "Industry Collaboration",
                        source: "Siemens Industry Software Consortium",
                        role: "Faculty Mentor",
                        duration: "2022 – Present",
                        status: "Active",
                        description: "Collaborative testing of industrial workflows and automation standards across engineering departments.",
                      },
                    ].map((rProj, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border/80 bg-muted/20 p-4 hover:border-[#0A3D7A]/40 hover:bg-card transition-all"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">{rProj.title}</h4>
                            <p className="mt-1 text-xs text-brand-red font-medium">{rProj.source}</p>
                          </div>
                          <Badge className="bg-[#0A3D7A] text-white text-[11px]">{rProj.funding}</Badge>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{rProj.description}</p>
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
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{rProj.status}</span>
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
                <TitleCard title={`PhD / Research Scholars Supervised (${guidedCount})`} />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-3">
                    {[
                      {
                        scholar: "Doctoral / Postgraduate Scholar 1",
                        topic: `Experimental Investigation in ${specializationList[0] || faculty.specialization}`,
                        status: "Degree Awarded / Coursework Cleared",
                        institution: "Gujarat Technological University",
                      },
                      {
                        scholar: "Doctoral / Postgraduate Scholar 2",
                        topic: `System Architecture & Performance Metrics in ${faculty.department}`,
                        status: "Research Phase / Thesis in Progress",
                        institution: "Gujarat Technological University",
                      },
                      {
                        scholar: "Postgraduate Capstone Scholar 3",
                        topic: `Modeling and Optimization Protocols for ${specializationList[1] || faculty.department}`,
                        status: "Active Guidance",
                        institution: "Gujarat Technological University",
                      },
                    ].map((phd, idx) => (
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
                          <p className="mt-1 text-[11px] text-muted-foreground">{phd.institution}</p>
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
                <TitleCard title={`Academic Insights & Articles — ${faculty.department}`} />
                <ContentCard className="min-h-[200px] p-6 space-y-4">
                  <div className="space-y-4">
                    {[
                      {
                        title: `Advancing Practical Pedagogy in ${faculty.department}`,
                        date: "August 2024",
                        readTime: "5 min read",
                        summary: `Reflections on integrating laboratory experimentation with theoretical principles for undergraduate engineering cohorts at GTU-ITR.`,
                      },
                      {
                        title: `Emerging Trends and Industrial Applications in ${specializationList[0] || faculty.specialization}`,
                        date: "May 2024",
                        readTime: "7 min read",
                        summary: `A technical review of contemporary developments, industry standards, and future challenges for young engineers.`,
                      },
                      {
                        title: "Why Hands-On Capstones Prepare Tomorrow's Engineering Leaders",
                        date: "January 2024",
                        readTime: "4 min read",
                        summary: "The educational value of inter-departmental capstone projects, SSIP innovation challenges, and Siemens lab exposure.",
                      },
                    ].map((post, idx) => (
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
                        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{post.summary}</p>
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

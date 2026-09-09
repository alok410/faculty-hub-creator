import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  BookOpen,
  Users,
  FileText,
  Search,
  CheckCircle2,
  Mail,
  Linkedin,
  Clock,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Award,
  Database,
  Layers,
  HelpCircle,
  Phone,
  Bookmark,
  Sparkles,
  Info,
  GraduationCap,
  Globe,
  Share2,
  AlertCircle,
  Copy,
  ChevronRight,
  BookMarked,
  FolderDown,
  MonitorCheck,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "GTU-ITR Central Library | Gujarat Technological University" },
      {
        name: "description",
        content:
          "Official website of GTU-ITR Library. Over 11,550+ books, 400+ theses, SOUL 3.0 automated services, research databases, digital reading, lending, and virtual reference desk.",
      },
      { property: "og:title", content: "GTU-ITR Central Library | Gujarat Technological University" },
      {
        property: "og:description",
        content: "Explore GTU-ITR Library catalog, departmental book collections, rules, staff directory, and research services.",
      },
      { property: "og:url", content: "/library" },
    ],
    links: [{ rel: "canonical", href: "/library" }],
  }),
  component: LibraryPage,
});

type TabKey = "home" | "intro" | "people" | "rules" | "services" | "resources" | "membership" | "ask" | "contact";

// Collection Overview Stats
const STATS = [
  { label: "Total Books", value: "11,550+", desc: "Degree & Diploma engineering collections", icon: BookOpen },
  { label: "Unique Titles", value: "4,967", desc: "Curated titles across 5 academic disciplines", icon: BookMarked },
  { label: "Theses & Dissertations", value: "400+", desc: "Master's & doctoral research archives", icon: GraduationCap },
  { label: "Journals & Periodicals", value: "14", desc: "National & international peer-reviewed journals", icon: FileText },
  { label: "CDs / DVDs / VCDs", value: "700+", desc: "Technical lectures, CBTs & media kits", icon: Database },
  { label: "Daily Newspapers", value: "4", desc: "Leading Gujarati & English daily editions", icon: Layers },
];

// Departmental Book Distribution
const COURSE_COLLECTIONS = [
  { sr: 1, course: "Civil Engineering", titles: 928, volumes: 2039, tag: "Degree & Diploma" },
  { sr: 2, course: "Computer Engineering", titles: 986, volumes: 2194, tag: "Degree & Diploma / IT" },
  { sr: 3, course: "Electrical Engineering", titles: 865, volumes: 1830, tag: "Degree & Diploma" },
  { sr: 4, course: "Mechanical Engineering", titles: 974, volumes: 2081, tag: "Degree & Diploma" },
  { sr: 5, course: "Science & Humanities", titles: 1214, volumes: 3406, tag: "General & Applied Sciences" },
];

// Circulation Loan Table
const CIRCULATION_LIMITS = [
  { category: "Teaching Staff", count: "10 Books", duration: "30 Days", renewal: "Allowed if not reserved", badge: "Faculty" },
  { category: "Non-Teaching Staff", count: "5 Books", duration: "30 Days", renewal: "Allowed if not reserved", badge: "Staff" },
  { category: "Degree Students", count: "2 Books", duration: "14 Days", renewal: "Subject to demand", badge: "Undergraduate" },
  { category: "Diploma Students", count: "2 Books", duration: "14 Days", renewal: "Subject to demand", badge: "Polytechnic" },
];

// Staff Team
const LIBRARY_TEAM = [
  {
    name: "Dr. Ashok Chaudhary",
    designation: "Assistant Librarian",
    roleCategory: "Technology & e-Databases",
    email: "ashok.chaudhary@gtu.edu.in",
    linkedin: "https://www.linkedin.com/in/ashokschaudhary/",
    responsibilities:
      "Remote access configuration, subscribed databases, software/hardware management, new book acquisitions, research repository, and Turnitin / plagiarism checks.",
    image: "/site/vc.jpg", // fallback placeholder avatar
  },
  {
    name: "Mr. Rahul Patel",
    designation: "Technical Assistant Librarian",
    roleCategory: "Reference & Print Resources",
    email: "rahul.patel@gtu.edu.in",
    responsibilities:
      "Book acquisition workflows (user suggestions, lost book tracking, print periodicals), specialized research assistance, dataset collection, and Inter-Library Loan (ILL).",
    image: "/site/registrar.jpg",
  },
  {
    name: "Mr. Bhargav Nayi",
    designation: "Library Assistant",
    roleCategory: "Circulation Services",
    email: "bhargav.nayi@gtu.edu.in",
    altEmail: "library_gperi@gtu.edu.in",
    responsibilities:
      "Daily circulation desk operations, book issue / return / renewals, smart card & membership management, fine collections, and reprographic / photocopying assistance.",
    image: "/site/principal.jpg",
  },
];

// Print Materials Types
const PRINT_MATERIALS = [
  "Text Books",
  "Reference Books",
  "Research Reports",
  "Handbooks",
  "Directories",
  "Serial Publications",
  "Encyclopedias",
  "Dictionaries",
  "Newspaper Clippings",
  "Biographies",
  "Journals / Periodicals / Newspapers",
];

// Services
const SERVICES = [
  {
    title: "Lending & Circulation",
    desc: "Convenient book borrowing and return services for eligible Diploma and Degree students, faculty, and staff via SOUL 3.0 barcode automation.",
    icon: BookOpen,
  },
  {
    title: "Reference & Research Assistance",
    desc: "Personalized literature guidance for books, conference papers, technical standards, articles, datasets, and research topics.",
    icon: Compass,
  },
  {
    title: "Current Awareness (CAS & SDI)",
    desc: "Stay updated with recent academic acquisitions and technological breakthroughs through tailored alerts and selective dissemination.",
    icon: Sparkles,
  },
  {
    title: "Articles & Periodicals",
    desc: "Full-text access to subscribed national and international engineering journals, IEEE transactions, and technical magazines.",
    icon: FileText,
  },
  {
    title: "Online Databases & Digital Resources",
    desc: "Instant campus access to ONOS, NDL, trade directories, academic repositories, and technical engineering databases.",
    icon: Database,
  },
  {
    title: "Engineering & Industrial Information",
    desc: "Curated industrial datasets, manufacturing directories, feasibility resources, and technical engineering handbooks.",
    icon: Layers,
  },
  {
    title: "Press Clippings Service",
    desc: "Curated news and media coverage from leading national dailies covering technological advancements, education, and GTU news.",
    icon: Bookmark,
  },
  {
    title: "Inter-Library Loan (ILL)",
    desc: "Collaborative resource sharing and book loans directly with GTU Central Library (Ahmedabad) and affiliated resource centers.",
    icon: Share2,
  },
  {
    title: "Referral Services",
    desc: "Guidance and institutional introduction letters to access external university libraries, INFLIBNET, and research archives.",
    icon: ExternalLink,
  },
  {
    title: "Reprographic & Photocopying",
    desc: "Free photocopying (up to 3 pages per request for academic extracts adhering to copyright laws) and on-site document scanning.",
    icon: Copy,
  },
  {
    title: "Research Support & Literature Search",
    desc: "End-to-end guidance with scholarly discovery, research methodology tools, citation managers, and bibliography formatting.",
    icon: GraduationCap,
  },
  {
    title: "Bibliometric & Citation Services",
    desc: "Support for Scopus / Web of Science author metrics, h-index, citation analysis, and institutional research impact assessment.",
    icon: Award,
  },
  {
    title: "Ask a Librarian Desk",
    desc: "Virtual reference desk responding within 24 to 48 hours for literature search, database troubleshooting, and resource queries.",
    icon: HelpCircle,
  },
  {
    title: "Scholarship & Fellowship Information",
    desc: "Comprehensive guidance and repository notices for government scholarships, AICTE Pragati/Saksham schemes, and research grants.",
    icon: ShieldCheck,
  },
];

// 19 Library Rules
const LIBRARY_RULES = [
  "All issue & return of GTU ITR Library materials are handled from the Circulation Desk during its working hours.",
  "Borrowers are requested to make sure that the books are properly issued or returned before leaving the counter.",
  "Library users are strictly requested to bring their valid Institute ID / Smart Card while visiting the library.",
  "The borrower is requested to check the books & other reading materials thoroughly for missing pages, chapters, any damages, or markings before borrowing.",
  "No book in damaged conditions may be accepted from the borrower. Mutilated or spoiled books must be replaced by the borrower with a new copy or current price.",
  "The borrowing facility can be restricted or suspended in case of misbehavior or misuse of the library facilities/materials.",
  "Library materials will be issued/returned only if the borrower presents the Institute Smart Card at the circulation desk in person.",
  "The GTU ITR ID Card used for borrowing library materials is non-transferable and must be produced whenever requested by library staff.",
  "Members are held strictly responsible for all items issued on their name until they are returned by the respective members to the Resource Centre.",
  "Latest issues of journals and periodicals are meant for reference only and are not issued out.",
  "Materials designated as daily Newspapers are strictly for reading room use and are not issued out.",
  "Faculty and staff going on long leave, deputation, study leave, or extraordinary leave must return all borrowed materials before leaving GTU-ITR.",
  "No material from the library should be taken out without proper issue and system recording. Any violation may lead to disciplinary action.",
  "Except laptops, readers are not allowed to carry personal belongings (bags, briefcases, parcels) and eatables (biscuits, cookies, fruits, chocolates, drinks) inside. Belongings must be placed at the Property Counter.",
  "Library photocopying services are free of cost for academic extracts up to a maximum of 3 pages per user, strictly conforming to copyright legislation.",
  "Lost library cards must be reported immediately to the Assistant Librarian; ₹50 will be charged for issuing a duplicate card.",
  "Overdue books will incur a nominal fine of ₹1 per day per book.",
  "Books may be renewed for an additional loan term if there are no pending reservation requests by other users.",
  "All members are expected to maintain pin-drop silence and mutual decorum inside the reading halls and digital access zones.",
];

// Open Access & Partner Gateways (like reference site)
const DIGITAL_PORTALS = [
  { name: "SOUL 3.0 OPAC", desc: "Web OPAC for campus book search & account status", link: "#soul3", badge: "Internal" },
  { name: "National Digital Library of India (NDL)", desc: "Over 7+ crore academic resources & texts", link: "https://ndl.iitkgp.ac.in/", badge: "Govt. of India" },
  { name: "NPTEL & SWAYAM", desc: "IIT & IISc video lectures, syllabus transcripts & courses", link: "https://nptel.ac.in/", badge: "MHRD" },
  { name: "Shodhganga (INFLIBNET)", desc: "Indian electronic theses & dissertations reservoir", link: "https://shodhganga.inflibnet.ac.in/", badge: "Research" },
  { name: "DOAJ Open Access Journals", desc: "Directory of 20,000+ peer-reviewed open access journals", link: "https://doaj.org/", badge: "Open Access" },
  { name: "EDII Library & Partner Portal", desc: "Entrepreneurship Development Institute of India Library", link: "https://library.ediindia.ac.in/", badge: "Reference Partner" },
];

function LibraryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");

  // Ask a librarian form state
  const [formName, setFormName] = useState("");
  const [formId, setFormId] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCategory, setFormCategory] = useState("Technology & e-Databases");
  const [formMessage, setFormMessage] = useState("");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const recipientEmail =
      formCategory === "Technology & e-Databases"
        ? "ashok.chaudhary@gtu.edu.in"
        : formCategory === "Reference & Print Resources"
          ? "rahul.patel@gtu.edu.in"
          : "bhargav.nayi@gtu.edu.in";

    const subject = encodeURIComponent(`[Ask a Librarian Query - ${formCategory}] from ${formName}`);
    const body = encodeURIComponent(
      `Name: ${formName}\nID/Enrollment: ${formId}\nEmail: ${formEmail}\nCategory: ${formCategory}\n\nQuery:\n${formMessage}`,
    );

    toast.success("Opening email client to send your inquiry to the librarian...");
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Reset form
    setFormMessage("");
  };

  // Filtered departmental books simulation
  const filteredCourses = useMemo(() => {
    if (!searchQuery) return COURSE_COLLECTIONS;
    return COURSE_COLLECTIONS.filter(
      (c) =>
        c.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tag.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return (
    <PageShell
      title="GTU-ITR Central Library"
      subtitle="Knowledge Gateway & Intellectual Hub of Gujarat Technological University – Institute of Technology & Research."
    >
      {/* Visual Hero Showcase Banner */}
      <div className="relative mb-8 overflow-hidden rounded-2xl border border-border shadow-md">
        <div className="relative h-64 w-full sm:h-80 md:h-96">
          <img
            src="/site/library_hero.jpg"
            alt="GTU-ITR Central Library Interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/60 to-transparent" />

          {/* Hero Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                <Sparkles className="h-3.5 w-3.5" /> SOUL 3.0 Automated
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
                11,550+ Volumes &amp; Periodicals
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-bold text-white">
                Wi-Fi Enabled Reading Arena
              </span>
            </div>
            <h1 className="font-heading text-2xl font-bold uppercase tracking-wide md:text-4xl text-white">
              Gujarat Technological University — ITR Library
            </h1>
            <p className="mt-2 max-w-3xl text-xs md:text-sm text-white/90 leading-relaxed">
              Serving as a vibrant knowledge hub on campus, offering seamless access to high-impact engineering literature,
              automated circulation, digital journals, and personalized research assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Ranganathan's Five Laws of Library Science Banner (EDII Inspired) */}
      <div className="mb-8 rounded-xl border border-brand-navy/20 bg-gradient-to-r from-brand-navy via-[#1c2e74] to-brand-navy p-5 text-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-gold border border-white/20">
              <BookMarked className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Foundational Philosophy</p>
              <h3 className="font-heading text-lg font-bold text-white">The Five Laws of Library Science</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[11px] font-medium">
            <div className="rounded bg-white/10 px-2.5 py-1.5 border border-white/10">1. Books Are For Use</div>
            <div className="rounded bg-white/10 px-2.5 py-1.5 border border-white/10">2. Every Reader His/Her Book</div>
            <div className="rounded bg-white/10 px-2.5 py-1.5 border border-white/10">3. Every Book Its Reader</div>
            <div className="rounded bg-white/10 px-2.5 py-1.5 border border-white/10">4. Save Reader's Time</div>
            <div className="rounded bg-white/10 px-2.5 py-1.5 border border-white/10">5. Growing Organism</div>
          </div>
        </div>
      </div>

      {/* Dedicated Library Sub-Navbar (Matching Reference Website: Home, About, Services, Resources, Membership, Ask Librarian, Contact Us) */}
      <div className="sticky top-[52px] z-40 mb-8 rounded-xl border border-border bg-card/95 p-1.5 shadow-md backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "home"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            Home
          </button>

          {/* About Dropdown / Section buttons */}
          <button
            onClick={() => setActiveTab("intro")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "intro"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            Introduction
          </button>

          <button
            onClick={() => setActiveTab("people")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "people"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            People / Team
          </button>

          <button
            onClick={() => setActiveTab("rules")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "rules"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            Rules &amp; Regulations
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "services"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            Services
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "resources"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            Resources
          </button>

          <button
            onClick={() => setActiveTab("membership")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "membership"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            Membership
          </button>

          <button
            onClick={() => setActiveTab("ask")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "ask"
                ? "bg-brand-red text-white shadow"
                : "text-brand-red hover:bg-brand-red/10 font-extrabold"
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" /> Ask Librarian
          </button>

          <button
            onClick={() => setActiveTab("contact")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "contact"
                ? "bg-brand-navy text-white shadow"
                : "text-foreground/80 hover:bg-brand-surface hover:text-brand-navy"
            }`}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* QUICK STATS CARDS */}
      <div className="mb-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white mb-2">
              <s.icon className="h-5 w-5 text-brand-gold" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground leading-tight">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================
          TAB 1: HOME (PORTAL OVERVIEW & OPAC CATALOG SIMULATOR)
         ======================================================== */}
      {activeTab === "home" && (
        <div className="space-y-10">
          {/* SOUL 3.0 OPAC Search Simulation Bar */}
          <div className="rounded-xl border-2 border-brand-navy/20 bg-card p-6 shadow-md md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/80 pb-4">
              <div>
                <Badge className="bg-brand-navy text-white">SOUL 3.0 Online Public Access Catalog</Badge>
                <h2 className="mt-1 font-heading text-xl font-bold uppercase text-brand-navy">
                  Search GTU-ITR Library Collections
                </h2>
                <p className="text-xs text-muted-foreground">
                  Browse over 11,550+ engineering textbooks, journals, theses, and reference volumes.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy bg-brand-surface px-3 py-1.5 rounded-lg border border-border">
                <MonitorCheck className="h-4 w-4 text-emerald-600" />
                <span>INFLIBNET Automation Active</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <div className="sm:w-48">
                <select
                  aria-label="Search filter category"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy"
                >
                  <option value="all">All Disciplines</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="computer">Computer &amp; IT</option>
                  <option value="electrical">Electrical Engineering</option>
                  <option value="mechanical">Mechanical Engineering</option>
                  <option value="science">Science &amp; Humanities</option>
                </select>
              </div>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by Title, Author, Keyword, Subject or Call Number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 text-xs"
                />
              </div>
              <Button
                onClick={() => {
                  if (!searchQuery) {
                    toast.info("Please enter keywords to search our collection catalog.");
                  } else {
                    setActiveTab("resources");
                    toast.success(`Showing catalog collection matching "${searchQuery}"`);
                  }
                }}
                className="bg-brand-navy hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-6"
              >
                Search Catalog
              </Button>
            </div>

            {/* Quick Links inside search box */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Popular Disciplines:</span>
              {["Computer", "Civil", "Mechanical", "Electrical", "Applied Mathematics", "Digital Library"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setSearchQuery(t);
                    setActiveTab("resources");
                  }}
                  className="rounded bg-brand-surface px-2.5 py-1 text-[11px] font-medium text-brand-navy hover:bg-brand-navy hover:text-white transition-colors border border-border/60"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Highlights & Introduction Summary */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 shadow-sm">
              <Badge className="bg-brand-red text-white">About GTU-ITR Library</Badge>
              <h3 className="mt-2 font-heading text-xl font-bold uppercase text-brand-navy">
                State-of-the-Art Academic Resource Centre
              </h3>
              <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
              <p className="text-sm leading-relaxed text-foreground/85">
                The GTU – Institute of Technology &amp; Research (GTU-ITR) Library is a state-of-the-art facility
                dedicated to advancing Gujarat Technological University’s mission of fostering excellence in teaching,
                learning, scholarship, and research. Serving as a bustling intellectual hub on campus, the library
                offers an environment highly conducive to knowledge exploration, academic engagement, and innovation,
                all supported by seamless Wi-Fi connectivity.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                Our extensive collection features over <strong>11,550+ resources</strong>—including books, journals,
                theses, and digital materials—specifically curated to support Degree and Diploma programs in Computer,
                Mechanical, Civil, and Electrical Engineering, alongside BSc IT, MSc IT, and general education curricula.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => setActiveTab("intro")}
                  className="bg-brand-navy hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider"
                >
                  Read Full Introduction <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("rules")}
                  className="text-xs font-bold uppercase tracking-wider border-border hover:bg-brand-surface"
                >
                  View Circulation Rules
                </Button>
              </div>
            </div>

            {/* Quick Operating Info Card */}
            <div className="rounded-xl border border-border bg-brand-surface p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-heading text-base font-bold uppercase text-brand-navy">
                  <Clock className="h-5 w-5 text-brand-red" />
                  <span>Library Working Hours</span>
                </div>
                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span className="font-semibold text-foreground">Monday – Friday:</span>
                    <span className="text-muted-foreground">08:30 AM – 05:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span className="font-semibold text-foreground">Saturday:</span>
                    <span className="text-muted-foreground">08:30 AM – 05:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span className="font-semibold text-foreground">Circulation Desk:</span>
                    <span className="text-muted-foreground">09:00 AM – 04:30 PM</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="font-semibold text-foreground">Sundays &amp; Holidays:</span>
                    <span className="font-bold text-brand-red">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-card p-4 border border-border text-xs">
                <p className="font-bold text-brand-navy">Need Research Help?</p>
                <p className="mt-1 text-muted-foreground">
                  Our librarians are ready to assist with journal access, literature searches, and plagiarism checks.
                </p>
                <button
                  onClick={() => setActiveTab("ask")}
                  className="mt-3 inline-flex items-center gap-1 font-bold text-brand-red hover:underline text-xs"
                >
                  Ask a Librarian Desk &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Digital Resources & Open Gateways (from Reference Site) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <Badge className="bg-brand-navy text-white">Digital Knowledge Gateways</Badge>
                <h3 className="font-heading text-lg font-bold uppercase text-brand-navy mt-1">
                  E-Resources &amp; Institutional Archives
                </h3>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIGITAL_PORTALS.map((portal, idx) => (
                <a
                  key={idx}
                  href={portal.link}
                  target={portal.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-brand-surface px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy border border-border">
                        {portal.badge}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h4 className="mt-3 font-heading text-base font-bold text-brand-navy">{portal.name}</h4>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{portal.desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center text-[11px] font-bold text-brand-red">
                    Access Portal &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: INTRODUCTION
         ======================================================== */}
      {activeTab === "intro" && (
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-red text-white uppercase tracking-wider">About GTU-ITR Library</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Introduction &amp; Mission
            </h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
              <p>
                The <strong>GTU – Institute of Technology &amp; Research (GTU-ITR) Library</strong> is a
                state-of-the-art facility dedicated to advancing Gujarat Technological University’s mission of fostering
                excellence in teaching, learning, scholarship, and research. Serving as a bustling intellectual hub on
                campus, the library offers an environment highly conducive to knowledge exploration, academic
                engagement, and innovation, all supported by seamless Wi-Fi connectivity.
              </p>
              <p>
                Our extensive and growing collection features over <strong>11,550+ resources</strong>—including books,
                journals, theses, and digital materials—specifically curated to support Degree and Diploma programs in
                <strong> Computer, Mechanical, Civil, and Electrical Engineering</strong>, alongside <strong>BSc IT, MSc IT</strong>,
                and general education curricula. To supplement coursework and high-impact research pursuits, the library
                provides access to national and international periodicals, selected online databases, ONOS resources,
                and a rich archive of CD-ROMs and DVDs. These up-to-date information sources are vital in empowering
                students, researchers, and faculty members with the literature necessary to drive their academic success.
              </p>
              <div className="rounded-xl border border-brand-navy/20 bg-brand-surface p-5 text-foreground">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <MonitorCheck className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-brand-navy">
                      Library Automation With SOUL 3.0
                    </h4>
                    <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
                      To ensure efficient service delivery, GTU-ITR Library proudly utilizes <strong>SOUL 3.0 library
                      management software</strong> (developed by INFLIBNET Centre, an Inter-University Centre of UGC),
                      driving its integrated operations, technical cataloging workflows, barcode generation, and
                      circulation services with complete library automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white mb-2">
                  <BookOpen className="h-5 w-5 text-brand-gold" />
                </div>
                <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">11,550+ Volumes</h4>
                <p className="mt-1 text-xs text-muted-foreground">Engineering textbooks, monographs, and rare references.</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white mb-2">
                  <Globe className="h-5 w-5 text-brand-gold" />
                </div>
                <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">High-Speed Wi-Fi</h4>
                <p className="mt-1 text-xs text-muted-foreground">Campus-wide connectivity for downloading e-journals &amp; standards.</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white mb-2">
                  <ShieldCheck className="h-5 w-5 text-brand-gold" />
                </div>
                <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">Research Support</h4>
                <p className="mt-1 text-xs text-muted-foreground">Plagiarism verification, citation indexing &amp; bibliometrics.</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white mb-2">
                  <Share2 className="h-5 w-5 text-brand-gold" />
                </div>
                <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">Inter-Library Loan</h4>
                <p className="mt-1 text-xs text-muted-foreground">Shared catalog network with GTU Central Library Ahmedabad.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: PEOPLE AT GTU-ITR LIBRARY
         ======================================================== */}
      {activeTab === "people" && (
        <div className="space-y-8">
          {/* Library Advisory Committee */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-navy text-white uppercase tracking-wider">Governance</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Library Advisory Committee (LAC)
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
            <p className="text-sm leading-relaxed text-foreground/85">
              The Library Advisory Committee (LAC) at GTU-ITR functions as a strategic policy-making body responsible
              for overseeing the development of library infrastructure, allocation of the annual library budget,
              selection of peer-reviewed digital journal subscriptions, acquisition policies for engineering textbooks,
              and continuous enhancement of user amenities for students and faculty.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-brand-surface p-4 text-xs">
                <p className="font-bold text-brand-navy uppercase">Chairperson</p>
                <p className="mt-1 font-semibold text-foreground">Principal / Director, GTU-ITR</p>
                <p className="text-muted-foreground">Overall strategic supervision</p>
              </div>
              <div className="rounded-lg border border-border bg-brand-surface p-4 text-xs">
                <p className="font-bold text-brand-navy uppercase">Member Secretary</p>
                <p className="mt-1 font-semibold text-foreground">Assistant Librarian</p>
                <p className="text-muted-foreground">Operational execution &amp; agenda</p>
              </div>
              <div className="rounded-lg border border-border bg-brand-surface p-4 text-xs">
                <p className="font-bold text-brand-navy uppercase">Members</p>
                <p className="mt-1 font-semibold text-foreground">Heads of Engineering Departments</p>
                <p className="text-muted-foreground">Curriculum textbook recommendations</p>
              </div>
            </div>
          </div>

          {/* Library Team Staff Cards */}
          <div>
            <Badge className="bg-brand-red text-white uppercase tracking-wider">Staff Directory</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Library Team
            </h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid gap-6 md:grid-cols-3">
              {LIBRARY_TEAM.map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-brand-navy/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-navy font-heading text-lg font-bold text-white shadow">
                        {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-brand-navy">{member.name}</h3>
                        <p className="text-xs font-semibold text-brand-red">{member.designation}</p>
                        <span className="mt-1 inline-block rounded bg-brand-surface px-2 py-0.5 text-[10px] font-bold text-brand-navy border border-border">
                          {member.roleCategory}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-border pt-4 text-xs">
                      <p className="font-bold uppercase tracking-wider text-muted-foreground text-[10px]">Key Responsibilities:</p>
                      <p className="mt-1 text-foreground/80 leading-relaxed">{member.responsibilities}</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-4 space-y-2 text-xs">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 font-medium text-brand-navy hover:text-brand-red transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 text-brand-red" />
                      <span>{member.email}</span>
                    </a>
                    {member.altEmail && (
                      <a
                        href={`mailto:${member.altEmail}`}
                        className="flex items-center gap-2 font-medium text-muted-foreground hover:text-brand-navy transition-colors text-[11px]"
                      >
                        <Mail className="h-3 w-3" />
                        <span>{member.altEmail}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-[#0077b5] hover:underline pt-1 text-[11px]"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        <span>LinkedIn Profile</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 4: RULES AND REGULATIONS
         ======================================================== */}
      {activeTab === "rules" && (
        <div className="space-y-10">
          {/* Circulation Privileges Table */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-navy text-white">Circulation Privileges</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Issue &amp; Return Entitlements
                </h2>
                <div className="mb-2 mt-2 h-1 w-16 bg-brand-red" />
                <p className="text-xs text-muted-foreground">
                  GTU-ITR Library provides book circulation facility to all registered users according to university regulations.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900 border border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <span>Overdue fine: ₹1 / day per book</span>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b-2 border-brand-navy bg-brand-surface text-brand-navy font-bold uppercase tracking-wider">
                    <th className="px-4 py-3">User Category</th>
                    <th className="px-4 py-3">No. of Books</th>
                    <th className="px-4 py-3">Loan Duration</th>
                    <th className="px-4 py-3">Renewal Terms</th>
                    <th className="px-4 py-3">Category Tag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {CIRCULATION_LIMITS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-surface/60 transition-colors">
                      <td className="px-4 py-3.5 font-bold text-foreground">{row.category}</td>
                      <td className="px-4 py-3.5 font-display text-base font-bold text-brand-navy">{row.count}</td>
                      <td className="px-4 py-3.5 font-semibold text-foreground/90">{row.duration}</td>
                      <td className="px-4 py-3.5 text-muted-foreground">{row.renewal}</td>
                      <td className="px-4 py-3.5">
                        <span className="rounded bg-brand-navy/10 px-2 py-0.5 text-[10px] font-bold text-brand-navy">
                          {row.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed 19 Rules */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-red text-white uppercase tracking-wider">Code of Conduct</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Rules &amp; Regulations (19 Guidelines)
            </h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid gap-3 sm:grid-cols-2">
              {LIBRARY_RULES.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-border/80 bg-brand-surface/40 p-4 transition-all hover:bg-card hover:border-brand-navy/30"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[11px] font-bold text-white">
                    {idx + 1}
                  </span>
                  <p className="text-xs leading-relaxed text-foreground/90">{rule}</p>
                </div>
              ))}
            </div>

            {/* Crucial Notice Banner */}
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/70 p-5 text-xs text-amber-950">
              <h4 className="font-bold flex items-center gap-1.5 text-sm text-amber-900">
                <AlertCircle className="h-4 w-4 text-amber-700" />
                Important Disciplinary Notice
              </h4>
              <p className="mt-1.5 leading-relaxed">
                Smart Cards must be reported immediately if lost. A replacement fee of <strong>₹50</strong> will be charged
                for duplicate card generation. Readers depositing personal items at the Property Counter are advised not to
                leave valuables or cash. Silence is to be strictly observed inside all reading corridors.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 5: SERVICES
         ======================================================== */}
      {activeTab === "services" && (
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-navy text-white uppercase tracking-wider">Comprehensive Facilities</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Library Services &amp; Research Support
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
            <p className="text-sm leading-relaxed text-foreground/85">
              GTU-ITR Library offers 14 dedicated services specifically tailored to support diploma students,
              engineering undergraduates, postgraduate scholars, and faculty research.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white">
                        <srv.icon className="h-5 w-5 text-brand-gold" />
                      </div>
                      <span className="rounded bg-brand-surface px-2 py-0.5 text-[10px] font-bold text-muted-foreground border border-border">
                        #{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-base font-bold text-brand-navy">{srv.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/80">{srv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 6: RESOURCES
         ======================================================== */}
      {activeTab === "resources" && (
        <div className="space-y-10">
          {/* Departmental Course Book Volumes Table */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-red text-white uppercase tracking-wider">Collection Inventory</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Library Book Collection by Engineering Course
                </h2>
                <div className="mb-2 mt-2 h-1 w-16 bg-brand-red" />
                <p className="text-xs text-muted-foreground">
                  Complete departmental distribution of unique titles and physical volumes available in the library stacks.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Filter branch..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-44 text-xs h-9"
                />
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b-2 border-brand-navy bg-brand-surface text-brand-navy font-bold uppercase tracking-wider">
                    <th className="px-4 py-3">Sr No.</th>
                    <th className="px-4 py-3">Course / Discipline</th>
                    <th className="px-4 py-3">Program Level</th>
                    <th className="px-4 py-3 text-right">Unique Titles</th>
                    <th className="px-4 py-3 text-right">Total Volumes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredCourses.map((row) => (
                    <tr key={row.sr} className="hover:bg-brand-surface/60 transition-colors">
                      <td className="px-4 py-3.5 font-bold text-muted-foreground">{row.sr}</td>
                      <td className="px-4 py-3.5 font-bold text-foreground text-sm">{row.course}</td>
                      <td className="px-4 py-3.5 text-muted-foreground">{row.tag}</td>
                      <td className="px-4 py-3.5 text-right font-display text-base font-bold text-brand-navy">
                        {row.titles.toLocaleString()}
                      </td>
                      <td className="px-4 py-3.5 text-right font-display text-base font-bold text-brand-red">
                        {row.volumes.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="border-t-2 border-brand-navy bg-brand-navy/5 font-bold text-foreground">
                    <td className="px-4 py-4" colSpan={3}>
                      <span className="font-heading text-sm uppercase tracking-wider text-brand-navy">
                        Consolidated Grand Total
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right font-display text-lg font-bold text-brand-navy">
                      4,967 Titles
                    </td>
                    <td className="px-4 py-4 text-right font-display text-lg font-bold text-brand-red">
                      11,550 Volumes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Types of Print Materials */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-navy text-white uppercase tracking-wider">Formats</Badge>
            <h3 className="mt-2 font-heading text-xl font-bold uppercase text-brand-navy">
              Types of Print Materials Maintained
            </h3>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {PRINT_MATERIALS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-brand-surface p-3 text-xs font-semibold text-foreground transition-all hover:bg-card hover:border-brand-navy"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-red" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 7: MEMBERSHIP
         ======================================================== */}
      {activeTab === "membership" && (
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-red text-white uppercase tracking-wider">Eligibility</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              GTU-ITR Library Membership
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />

            <p className="text-sm leading-relaxed text-foreground/85">
              Library membership is automatically granted to all full-time GTU-ITR community members upon formal
              enrollment or institutional appointment:
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-brand-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <GraduationCap className="h-6 w-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-navy">Student Membership</h3>
                    <p className="text-xs text-muted-foreground">Automated upon semester admission</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Degree Engineering Students (BE - All 4 Branches)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Diploma Engineering Students (Polytechnic)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Integrated MSc IT and PGDCS Students</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Doctoral Research Scholars and M.E. Dissertation Fellows</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-brand-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <Users className="h-6 w-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-navy">Faculty &amp; Staff Membership</h3>
                    <p className="text-xs text-muted-foreground">Active for academic tenure</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Full-Time Teaching Faculty (Professors, Associate &amp; Assistant Professors)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Ad-hoc and Visiting Faculty with Departmental Endorsement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Administrative, Laboratory, and Technical Support Staff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                    <span>Siemens Centre of Excellence Research Personnel</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Smart Card Instructions */}
            <div className="mt-8 rounded-xl border border-brand-navy/20 bg-brand-navy/5 p-5 text-xs">
              <h4 className="font-bold text-brand-navy text-sm flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-red" />
                Smart Card Activation &amp; Issue Rules
              </h4>
              <p className="mt-1 leading-relaxed text-foreground/85">
                Every member is issued a barcoded Smart Card linked directly to our SOUL 3.0 automation database.
                Library privileges are personal and non-transferable. When coming to borrow books or access reading zones,
                users must display their Smart Card at the entry checkpoint.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 8: ASK A LIBRARIAN (VIRTUAL REFERENCE DESK)
         ======================================================== */}
      {activeTab === "ask" && (
        <div className="space-y-10">
          {/* Overview of Ask a Librarian */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Badge className="bg-brand-red text-white uppercase tracking-wider">Virtual Reference Desk</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Ask a Librarian Information Service
                </h2>
                <div className="mb-2 mt-2 h-1 w-16 bg-brand-red" />
              </div>
              <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-900 border border-emerald-200">
                Turnaround Time: 24 to 48 Hours
              </div>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-foreground/85">
              The <strong>&quot;Ask a Librarian&quot;</strong> information service is a Virtual Reference Desk designed
              primarily for students, faculty, and staff of Gujarat Technological University (GTU) / Institute of
              Technology &amp; Research (ITR). A response is typically provided within <strong>24 to 48 hours</strong>,
              excluding weekends and official university holidays.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs">
              {[
                "Locating print books, e-books, journals, and research papers",
                "Accessing e-resources, online databases, and digital archives",
                "Reference services and literature search guidance",
                "Plagiarism checks (Turnitin) and citation formatting",
                "General library rules, membership, and borrowing services",
                "Inter-Library Loan requests with GTU Central Library",
              ].map((queryType, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg bg-brand-surface p-3 border border-border/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-red mt-0.5" />
                  <span className="text-foreground/90">{queryType}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Departmental Contacts Table */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-heading text-lg font-bold uppercase text-brand-navy">
              Departmental Contact Directory
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Direct your query to the specific librarian responsible for that division for expedited support.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b-2 border-brand-navy bg-brand-surface text-brand-navy font-bold uppercase tracking-wider">
                    <th className="px-4 py-3">Department / Category</th>
                    <th className="px-4 py-3">Key Responsibilities &amp; Queries</th>
                    <th className="px-4 py-3">Officer &amp; Contact Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-brand-surface/60 transition-colors">
                    <td className="px-4 py-4 font-bold text-brand-navy">
                      Technology &amp; e-Databases
                    </td>
                    <td className="px-4 py-4 text-foreground/80 leading-relaxed">
                      Remote access, subscribed databases, software/hardware issues, new purchases, and plagiarism checks.
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-foreground">Dr. Ashok Chaudhary</p>
                      <p className="text-[11px] text-muted-foreground">(Assistant Librarian)</p>
                      <a
                        href="mailto:ashok.chaudhary@gtu.edu.in"
                        className="font-bold text-brand-red hover:underline block mt-1"
                      >
                        ashok.chaudhary@gtu.edu.in
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-brand-surface/60 transition-colors">
                    <td className="px-4 py-4 font-bold text-brand-navy">
                      Reference &amp; Print Resources
                    </td>
                    <td className="px-4 py-4 text-foreground/80 leading-relaxed">
                      Book acquisition (suggestions, lost books, print periodicals), research assistance, data collection, and Inter-Library Loan (ILL).
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-foreground">Mr. Rahul Patel</p>
                      <p className="text-[11px] text-muted-foreground">(Tech. Library Assistant)</p>
                      <a
                        href="mailto:rahul.patel@gtu.edu.in"
                        className="font-bold text-brand-red hover:underline block mt-1"
                      >
                        rahul.patel@gtu.edu.in
                      </a>
                    </td>
                  </tr>

                  <tr className="hover:bg-brand-surface/60 transition-colors">
                    <td className="px-4 py-4 font-bold text-brand-navy">
                      Circulation Services
                    </td>
                    <td className="px-4 py-4 text-foreground/80 leading-relaxed">
                      Book issue/return/renewals, library memberships, ID cards, fine charges, and photocopying.
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-foreground">Mr. Bhargav Nayi</p>
                      <p className="text-[11px] text-muted-foreground">(Library Assistant)</p>
                      <a
                        href="mailto:bhargav.nayi@gtu.edu.in"
                        className="font-bold text-brand-red hover:underline block mt-1"
                      >
                        bhargav.nayi@gtu.edu.in
                      </a>
                      <span className="text-[11px] text-muted-foreground block">or library_gperi@gtu.edu.in</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Virtual Reference Desk Form */}
          <div className="rounded-xl border-2 border-brand-navy/20 bg-card p-6 shadow-md md:p-8">
            <Badge className="bg-brand-navy text-white">Online Inquiry Form</Badge>
            <h3 className="mt-2 font-heading text-xl font-bold uppercase text-brand-navy">
              Submit an Online Reference Query
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Fill out the form below and your inquiry will be routed to the appropriate library staff member.
            </p>

            <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    Your Full Name *
                  </label>
                  <Input
                    required
                    placeholder="e.g. Priyesh Patel"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    Enrollment No. / Staff ID
                  </label>
                  <Input
                    placeholder="e.g. 210100107001"
                    value={formId}
                    onChange={(e) => setFormId(e.target.value)}
                    className="text-xs"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="your.email@gtu.edu.in"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    Inquiry Department *
                  </label>
                  <select
                    aria-label="Inquiry department category"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  >
                    <option value="Technology & e-Databases">Technology &amp; e-Databases (Dr. Ashok Chaudhary)</option>
                    <option value="Reference & Print Resources">Reference &amp; Print Resources (Mr. Rahul Patel)</option>
                    <option value="Circulation Services">Circulation Services (Mr. Bhargav Nayi)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                  Query Details / Book or Literature Title *
                </label>
                <Textarea
                  required
                  rows={4}
                  placeholder="Please describe your query in detail, including book titles, authors, required journals, or research database questions..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="text-xs"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-[11px] text-muted-foreground">
                  Typical response within 24 to 48 hours on working days.
                </p>
                <Button
                  type="submit"
                  className="bg-brand-red hover:bg-brand-navy text-white text-xs font-bold uppercase tracking-wider px-6"
                >
                  Send Inquiry to Librarian
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 9: CONTACT US
         ======================================================== */}
      {activeTab === "contact" && (
        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Contact Details Card */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <Badge className="bg-brand-navy text-white uppercase tracking-wider">Campus Location</Badge>
              <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                GTU-ITR Central Library
              </h2>
              <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />

              <div className="space-y-4 text-sm text-foreground/90">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy text-base">Postal Address</h4>
                    <p className="mt-1 leading-relaxed text-xs">
                      GTU – Institute of Technology &amp; Research (GTU-ITR)
                      <br />
                      Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway,
                      <br />
                      Ta. &amp; Dist. Mehsana - 384460, Gujarat, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-border pt-4">
                  <Mail className="h-5 w-5 text-brand-red shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy text-base">Official Email</h4>
                    <a
                      href="mailto:library_gperi@gtu.edu.in"
                      className="mt-1 font-bold text-brand-red hover:underline text-xs block"
                    >
                      library_gperi@gtu.edu.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-border pt-4">
                  <Globe className="h-5 w-5 text-brand-red shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy text-base">Institutional Portals</h4>
                    <div className="mt-1 space-y-1 text-xs">
                      <a
                        href="https://www.ediindia.org"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-brand-navy hover:underline font-medium"
                      >
                        www.ediindia.org / www.ediindia.ac.in (Reference Partner)
                      </a>
                      <a
                        href="https://gtu.ac.in"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-brand-navy hover:underline font-medium"
                      >
                        gtu.ac.in (Gujarat Technological University)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-brand-surface p-4 border border-border text-xs flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-brand-navy">Have Quick Inquiries?</p>
                  <p className="text-muted-foreground">Use the virtual reference desk for fast email response.</p>
                </div>
                <Button
                  onClick={() => setActiveTab("ask")}
                  className="bg-brand-red hover:bg-brand-navy text-white text-xs font-bold uppercase tracking-wider"
                >
                  Ask a Librarian Desk
                </Button>
              </div>
            </div>

            {/* Timings & Map Info */}
            <div className="rounded-xl border border-border bg-brand-surface p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-heading text-base font-bold uppercase text-brand-navy">
                  <Clock className="h-5 w-5 text-brand-red" />
                  <span>Library Working Hours</span>
                </div>
                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span className="font-semibold text-foreground">Weekdays:</span>
                    <span className="text-muted-foreground">08:30 AM – 05:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span className="font-semibold text-foreground">Saturday:</span>
                    <span className="text-muted-foreground">08:30 AM – 05:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span className="font-semibold text-foreground">Circulation:</span>
                    <span className="text-muted-foreground">09:00 AM – 04:30 PM</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="font-semibold text-foreground">Holidays:</span>
                    <span className="font-bold text-brand-red">Closed</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-heading text-sm font-bold uppercase text-brand-navy">Campus Connectivity</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Easily accessible via Ahmedabad-Mehsana Highway express buses and GTU-ITR institutional transport fleets.
                  </p>
                  <Link
                    to="/transportation"
                    className="mt-2 inline-flex items-center gap-1 font-bold text-brand-navy hover:text-brand-red text-xs"
                  >
                    View Bus Routes &rarr;
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/70">
                <span className="block text-[10px] text-muted-foreground">
                  Gujarat Technological University – Institute of Technology &amp; Research
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}

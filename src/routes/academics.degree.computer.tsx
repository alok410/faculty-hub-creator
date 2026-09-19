import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA, getDepartmentStaffCount } from "@/content/faculty";
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
  ExternalLink,
  Maximize2,
  ImageIcon,
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
  { label: "Duration & Creds", value: "4 Yrs", icon: Layers, desc: "AICTE approved B.E. Degree" },
  { label: "Approved Intake", value: "60 Seats", icon: Users, desc: "100% ACPC counseling allocation" },
  { label: "Specialized Labs", value: "6 Labs", icon: Cpu, desc: "High-spec desktops & gigabit LAN" },
  { label: "Faculty Mentors", value: "Ph.D. & M.Tech", icon: Award, desc: "Experienced academic educators" },
];

const LABS = [
  {
    id: "lab-01",
    name: "Advanced Programming & Algorithm Lab",
    shortName: "Programming Lab",
    thumbnail: "/site/labs/lab_programming.jpg",
    photos: [
      "/site/labs/lab_programming.jpg",
      "/site/x6.jpeg",
      "/site/x2.jpg",
    ],
    location: "Block-A, 2nd Floor, Room A-204",
    capacity: "40 High-End Workstations",
    inCharge: "Prof. (Dr.) J. M. Patel (Faculty In-Charge)",
    technicalStaff: "Mr. R. K. Prajapati (Lab Assistant)",
    desc: "Equipped with latest C/C++, Java, and Python IDEs for algorithmic complexity analysis, competitive coding, and data structure simulations.",
    hardware: [
      "Dell OptiPlex Core i7 13th Gen Workstations (32GB DDR5 RAM, 1TB NVMe SSD)",
      "Dell 24\" FHD IPS Dual-Display Configuration",
      "Gigabit LAN with dedicated 1 Gbps lease line connectivity",
      "Online UPS 10 kVA central power backup",
    ],
    os: "Ubuntu 22.04 LTS & Windows 11 Enterprise (Dual Boot)",
    tools: ["GCC / GDB", "Python 3.12", "JDK 21", "VS Code / Eclipse", "Clang", "Valgrind"],
    practicals: [
      "Data Structures & Algorithm Design (CS301)",
      "Object Oriented Programming with Java (CS305)",
      "Competitive Problem Solving & Algorithmic Complexity",
      "System Programming & Operating System Internals",
    ],
  },
  {
    id: "lab-02",
    name: "Database Management & Big Data Lab",
    shortName: "DBMS & Big Data Lab",
    thumbnail: "/site/labs/lab_database.jpg",
    photos: [
      "/site/labs/lab_database.jpg",
      "/site/x2.jpg",
      "/site/x6.jpeg",
    ],
    location: "Block-A, 2nd Floor, Room A-206",
    capacity: "36 Connected Workstations",
    inCharge: "Prof. S. N. Shah (Faculty In-Charge)",
    technicalStaff: "Ms. P. V. Modi (Database Administrator)",
    desc: "Database modeling, SQL queries, NoSQL schema design, and distributed query optimization on enterprise database engines.",
    hardware: [
      "HP EliteDesk Workstations (Intel i7, 32GB RAM, 512GB SSD + 2TB HDD)",
      "Dedicated Central Database Server Rack (Dell PowerEdge R750)",
      "Full Gigabit Ethernet structured cabling with CISCO Catalyst switches",
    ],
    os: "Red Hat Enterprise Linux 9 / Windows Server 2022",
    tools: ["Oracle 19c", "PostgreSQL", "MongoDB", "MySQL Workbench", "Apache Spark", "Redis"],
    practicals: [
      "Relational Database Management Systems (CS402)",
      "Advanced Database Administration & Query Tuning",
      "NoSQL Document Stores & Key-Value Caching",
      "Big Data Analytics & MapReduce Workflows",
    ],
  },
  {
    id: "lab-03",
    name: "AI, Machine Learning & Data Science Lab",
    shortName: "AI & ML Research Lab",
    thumbnail: "/site/labs/lab_ai_ml.jpg",
    photos: [
      "/site/labs/lab_ai_ml.jpg",
      "/site/x6.jpeg",
      "/site/x3.jpg",
    ],
    location: "Block-A, 3rd Floor, Room A-301",
    capacity: "32 GPU Computing Stations",
    inCharge: "Dr. K. D. Desai (AI Research Head)",
    technicalStaff: "Mr. H. T. Solanki (Systems Engineer)",
    desc: "Workstations with dedicated GPUs for training deep neural networks, computer vision models, large language models, and natural language processing pipelines.",
    hardware: [
      "NVIDIA RTX 4080 (16GB VRAM) Dedicated GPU Stations",
      "Intel Core i9 14th Gen processors, 64GB DDR5 RAM, 2TB Gen4 NVMe",
      "High-resolution 4K color-accurate IPS monitors",
      "NVIDIA DGX Station Access via Campus Private Cloud",
    ],
    os: "Ubuntu 22.04 LTS (NVIDIA CUDA 12.3 toolkit preconfigured)",
    tools: ["TensorFlow", "PyTorch", "JupyterLab", "OpenCV", "Scikit-Learn", "Hugging Face", "Keras"],
    practicals: [
      "Artificial Intelligence & Machine Learning (CS601)",
      "Deep Learning & Neural Network Architectures (CS703)",
      "Computer Vision & Pattern Recognition",
      "Natural Language Processing & Speech Analysis",
    ],
  },
  {
    id: "lab-04",
    name: "Computer Networks & Cloud Computing Lab",
    shortName: "Networks & Cloud Lab",
    thumbnail: "/site/labs/lab_network.jpg",
    photos: [
      "/site/labs/lab_network.jpg",
      "/site/x3.jpg",
      "/site/x2.jpg",
    ],
    location: "Block-B, 1st Floor, Room B-102",
    capacity: "40 Workstations + Hardware Rack Bay",
    inCharge: "Prof. A. B. Joshi (Network Architect)",
    technicalStaff: "Mr. M. S. Vaghela (Network Administrator)",
    desc: "Network simulation, packet sniffing, protocol analyzers, SDN controllers, and distributed cloud cluster infrastructure deployment.",
    hardware: [
      "Cisco 2900 Series Modular Routers & Cisco Catalyst 2960 Managed Switches",
      "Open rack server bay with modular patch panels and fiber patch units",
      "Fluke digital cable analyzers and crimping test kits",
      "Dell OptiPlex workstations with dual NIC gigabit adapters",
    ],
    os: "Debian GNU/Linux & Windows 11 Enterprise",
    tools: ["Cisco Packet Tracer", "Wireshark", "Docker Containers", "Kubernetes", "GNS3", "OpenStack"],
    practicals: [
      "Computer Networks & Protocol Architectures (CS501)",
      "Cloud Infrastructure & Virtualization Services (CS604)",
      "Network Security, Firewalls & Penetration Testing",
      "Software Defined Networking (SDN) Experiments",
    ],
  },
  {
    id: "lab-05",
    name: "Web Technology & Mobile App Lab",
    shortName: "Web & Mobile Studio",
    thumbnail: "/site/labs/lab_web_mobile.jpg",
    photos: [
      "/site/labs/lab_web_mobile.jpg",
      "/site/x6.jpeg",
      "/site/x2.jpg",
    ],
    location: "Block-A, 2nd Floor, Room A-208",
    capacity: "36 Workstations with Mobile Test Docks",
    inCharge: "Prof. V. N. Patel (Full-Stack Specialist)",
    technicalStaff: "Ms. T. D. Rathod (Lab Assistant)",
    desc: "Full-stack development, modern frontend frameworks, microservices, RESTful APIs, and cross-platform mobile application compilation suites.",
    hardware: [
      "High-spec workstations with dual high-resolution displays",
      "Physical Android test devices and emulation tablets",
      "Local testing staging servers and proxy interceptors",
    ],
    os: "Ubuntu 22.04 LTS / Windows 11 Pro",
    tools: ["React / Node.js", "Android Studio", "Git / GitHub", "Postman", "Next.js", "Flutter", "Tailwind CSS"],
    practicals: [
      "Web Technology & Modern Web Standards (CS503)",
      "Mobile Application Development with Android & Flutter (CS602)",
      "Full-Stack API Design & Microservices Engineering",
      "Cloud-Native Frontend Deployments & CI/CD Pipelines",
    ],
  },
  {
    id: "lab-06",
    name: "IoT & Embedded Computing Bay",
    shortName: "IoT & Embedded Bay",
    thumbnail: "/site/labs/lab_iot.jpg",
    photos: [
      "/site/labs/lab_iot.jpg",
      "/site/x2.jpg",
      "/site/x3.jpg",
    ],
    location: "Block-B, Ground Floor, Room B-005",
    capacity: "30 Specialized Hardware Testing Benches",
    inCharge: "Dr. R. H. Chaudhari (Embedded Systems Head)",
    technicalStaff: "Mr. B. C. Panchal (Hardware Tech)",
    desc: "Hardware interfacing with microcontrollers, wireless sensor networks, edge intelligence compute boards, and smart cyber-physical systems.",
    hardware: [
      "Raspberry Pi 4 (8GB) boards, NVIDIA Jetson Nano Developer Kits",
      "ESP32 Wi-Fi + Bluetooth dual-core modules and Arduino Mega kits",
      "Tektronix 100MHz Digital Storage Oscilloscopes (DSO)",
      "Regulated DC Multi-Power Supplies, Soldering & De-soldering Stations",
      "100+ Sensor suites (LIDAR, ultrasonic, gas, PIR, temperature, RFID, cameras)",
    ],
    os: "Raspberry Pi OS (Linux) & Embedded C / MicroPython",
    tools: ["Arduino IDE", "Thonny Python", "Proteus VSM Simulation", "FreeRTOS", "MQTT Broker", "ThingSpeak IoT"],
    practicals: [
      "Microcontroller Architecture & Interfacing (CS404)",
      "Internet of Things & Cyber-Physical Systems (CS702)",
      "Edge Computing with Jetson Nano & OpenCV",
      "Smart Campus Automation & Sensor Telemetry Projects",
    ],
  },
];


function ComputerDegreePage() {
  const [selectedLab, setSelectedLab] = useState<typeof LABS[number] | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

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
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Staff Members ({getDepartmentStaffCount("degree-computer")})</TabsTrigger>
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
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">GTU Curriculum &amp; Teaching Scheme</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              The official academic syllabus, semester-wise teaching scheme, credit structure, and course codes for Bachelor of Engineering (Computer Engineering) are administered directly by Gujarat Technological University (GTU).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl bg-brand-surface p-6 md:p-8 border border-border shadow-xs">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <Badge className="bg-brand-navy text-white uppercase text-[10px]">Official GTU Portal</Badge>
                  <span className="text-xs font-semibold text-brand-red">Real-time University Syllabus</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-navy">
                  Access Official GTU Syllabus Portal
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Click below to directly view, explore, and download the latest semester-wise syllabus PDFs, teaching schemes, subject credit matrices, and laboratory guidelines.
                </p>
              </div>

              <a
                href="https://old26.gtu.ac.in/syllabus/syllabus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-brand-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-red hover:shadow-md shrink-0"
              >
                <ExternalLink className="h-4 w-4 text-brand-gold" />
                <span>Open GTU Curriculum</span>
              </a>
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Laboratories */}
        <TabsContent value="labs" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase text-brand-navy">Departmental Laboratories</h2>
                <p className="mt-1 text-xs text-muted-foreground">Click any laboratory card to expand full specifications, hardware configurations, and photo gallery.</p>
              </div>
              <Badge className="bg-brand-red text-white uppercase text-[10px] self-start sm:self-auto">
                6 Dedicated Bays
              </Badge>
            </div>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LABS.map((lab, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedLab(lab);
                    setActivePhotoIdx(0);
                  }}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-lg cursor-pointer"
                >
                  {/* Thumbnail Banner with Badges */}
                  <div className="relative h-44 w-full overflow-hidden bg-brand-navy/10">
                    <img
                      src={lab.thumbnail}
                      alt={lab.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5">
                      <span className="rounded bg-brand-navy/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        Lab 0{i + 1}
                      </span>
                      <span className="rounded bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[10px] font-medium text-white shadow-xs flex items-center gap-1">
                        <ImageIcon className="h-3 w-3 text-brand-gold" />
                        <span>{lab.photos.length} Photos</span>
                      </span>
                    </div>

                    {/* Expand Prompt Overlay */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                      <Maximize2 className="h-3 w-3" />
                      <span>Click to Expand</span>
                    </div>

                    <div className="absolute bottom-3 left-3 text-white/90 text-[11px] font-medium">
                      {lab.location}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h4 className="font-heading text-base font-bold text-brand-navy transition-colors group-hover:text-brand-red">
                        {lab.name}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/80 line-clamp-2">
                        {lab.desc}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-border/70 pt-3">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
                        <span className="font-bold uppercase text-[10px]">Software &amp; Tools:</span>
                        <span className="text-[10px] font-semibold text-brand-navy">{lab.capacity}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {lab.tools.slice(0, 4).map((t, tidx) => (
                          <span key={tidx} className="rounded bg-brand-surface px-2 py-0.5 text-[10px] font-medium border border-border/80 text-foreground/90">
                            {t}
                          </span>
                        ))}
                        {lab.tools.length > 4 && (
                          <span className="rounded bg-brand-navy/10 px-1.5 py-0.5 text-[10px] font-bold text-brand-navy">
                            +{lab.tools.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs font-bold text-brand-navy group-hover:text-brand-red pt-2 border-t border-dashed border-border/70 transition-colors">
                        <span className="flex items-center gap-1.5">
                          <ImageIcon className="h-3.5 w-3.5 text-brand-red" />
                          <span>View Gallery &amp; Specs</span>
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Expanded Lab Modal Dialog */}
      <Dialog open={!!selectedLab} onOpenChange={(open) => !open && setSelectedLab(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl border border-border bg-card shadow-2xl">
          {selectedLab && (
            <div>
              {/* Modal Header Banner */}
              <div className="border-b border-border bg-brand-surface/70 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-brand-navy text-white uppercase text-[10px]">
                    {selectedLab.id.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="border-brand-navy/30 text-brand-navy text-[10px] font-semibold">
                    {selectedLab.location}
                  </Badge>
                  <span className="text-xs font-bold text-brand-red ml-auto">
                    {selectedLab.capacity}
                  </span>
                </div>
                <DialogTitle className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase text-brand-navy">
                  {selectedLab.name}
                </DialogTitle>
                <DialogDescription className="mt-1 text-xs md:text-sm text-foreground/80 leading-relaxed">
                  {selectedLab.desc}
                </DialogDescription>
              </div>

              {/* Photo Gallery with Interactive View */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-heading text-xs md:text-sm font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
                      <ImageIcon className="h-4 w-4 text-brand-red" />
                      <span>Laboratory Photos ({selectedLab.photos.length} Views Available)</span>
                    </h5>
                    <span className="text-xs font-medium text-muted-foreground">
                      Photo {activePhotoIdx + 1} of {selectedLab.photos.length}
                    </span>
                  </div>

                  {/* Main Displayed Photo */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-md border border-border">
                    <img
                      src={selectedLab.photos[activePhotoIdx]}
                      alt={`${selectedLab.name} view ${activePhotoIdx + 1}`}
                      className="h-full w-full object-cover transition-opacity duration-200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 text-white text-xs font-semibold drop-shadow">
                      {selectedLab.shortName} • {selectedLab.location}
                    </div>
                  </div>

                  {/* Thumbnails Row */}
                  <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                    {selectedLab.photos.map((imgSrc, pidx) => (
                      <button
                        key={pidx}
                        type="button"
                        onClick={() => setActivePhotoIdx(pidx)}
                        className={`relative h-18 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
                          activePhotoIdx === pidx
                            ? "border-brand-red shadow-md scale-102 ring-2 ring-brand-red/30"
                            : "border-border opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`Thumbnail ${pidx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detailed Information Grid */}
                <div className="grid gap-6 md:grid-cols-2 pt-2 border-t border-border">
                  {/* Left Column: Equipment & Hardware */}
                  <div className="space-y-4 rounded-xl bg-brand-surface/40 p-5 border border-border">
                    <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-brand-red" />
                      <span>Hardware &amp; System Specifications</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-foreground/85">
                      {selectedLab.hardware.map((hw, hidx) => (
                        <li key={hidx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-red mt-0.5 shrink-0" />
                          <span>{hw}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-border/60">
                      <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">
                        Operating Systems &amp; Environment:
                      </span>
                      <p className="text-xs font-semibold text-brand-navy">
                        {selectedLab.os}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Practicals & Faculty */}
                  <div className="space-y-4 rounded-xl bg-brand-surface/40 p-5 border border-border">
                    <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-brand-red" />
                      <span>Key Practicals &amp; Curriculum Courses</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-foreground/85">
                      {selectedLab.practicals.map((prac, pridx) => (
                        <li key={pridx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-navy mt-1.5 shrink-0" />
                          <span>{prac}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-border/60 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-foreground/90">
                        <span className="text-[10px] font-bold uppercase text-muted-foreground">Lab In-Charge:</span>
                        <span className="font-semibold text-brand-navy">{selectedLab.inCharge}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-foreground/90">
                        <span className="text-[10px] font-bold uppercase text-muted-foreground">Tech Staff:</span>
                        <span className="text-muted-foreground">{selectedLab.technicalStaff}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Software & Tools Installed */}
                <div className="rounded-xl border border-border bg-brand-surface/30 p-5">
                  <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                    Installed Software, IDEs, SDKs &amp; Toolkits:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedLab.tools.map((t, tidx) => (
                      <span key={tidx} className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-brand-navy border border-border shadow-2xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}

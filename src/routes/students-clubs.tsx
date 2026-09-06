import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cpu,
  Wrench,
  Building,
  Zap,
  Sparkles,
  Trophy,
  Heart,
  Camera,
  Users,
  CheckCircle2,
  Download,
  ArrowRight,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/students-clubs")({
  head: () => ({
    meta: [
      { title: "Student Clubs & Chapters | GTU-ITR" },
      {
        name: "description",
        content:
          "Active technical, cultural, sports, and community clubs at GTU-ITR Mehsana: ACES, Robotics & IoT, Kaushalya Cultural Fest, Shaurya Sports, and NSS.",
      },
      { property: "og:title", content: "Student Clubs & Chapters | GTU-ITR" },
      {
        property: "og:description",
        content: "Explore student-led technical clubs, annual fests, and extracurricular chapters at GTU-ITR.",
      },
      { property: "og:url", content: "/students-clubs" },
    ],
    links: [{ rel: "canonical", href: "/students-clubs" }],
  }),
  component: StudentClubsPage,
});

const STATS = [
  { label: "Student Chapters", value: "10+", icon: Users, desc: "Technical, cultural & athletic" },
  { label: "Active Members", value: "600+", icon: Sparkles, desc: "Across degree & diploma branches" },
  { label: "Flagship Fests", value: "2 Mega Fests", icon: Trophy, desc: "Kaushalya (Culture) & Shaurya (Sports)" },
  { label: "Governing Cell", value: "SAC Cell", icon: Flame, desc: "Student Activity Cell oversight" },
];

const TECHNICAL_CLUBS = [
  {
    name: "ACES (Association of Computer Engineering Students)",
    icon: Code,
    tag: "Computer Eng.",
    desc: "Premier coding hub conducting competitive programming contests, full-stack hackathons, Git workshops, and tech seminars.",
    activities: ["Annual Bug-Hunt & Hackathon", "Web & Mobile App Dev Bootcamps", "Tech Talks by Industry Leaders"],
  },
  {
    name: "Robotics & IoT Innovation Club",
    icon: Cpu,
    tag: "Multi-Disciplinary",
    desc: "Hands-on engineering lab building autonomous rovers, microcontroller sensor nodes, and smart home automation prototypes.",
    activities: ["Line Follower & Robo-Race Challenges", "Arduino & Raspberry Pi Clinics", "Smart Campus IoT Projects"],
  },
  {
    name: "MESA (Mechanical Engineering Students Association)",
    icon: Wrench,
    tag: "Mechanical Eng.",
    desc: "Fosters mechanical design innovation, 3D CAD modeling, Go-Kart fabrication, and thermal-fluid project demonstrations.",
    activities: ["SolidWorks / Siemens NX Challenges", "Industrial Machine Disassembly", "SSIP Prototype Exhibitions"],
  },
  {
    name: "CESA (Civil Engineering Students Association)",
    icon: Building,
    tag: "Civil Eng.",
    desc: "Focuses on modern surveying, sustainable architecture, concrete mix design contests, and structural CAD modeling.",
    activities: ["Spaghetti Bridge Load Contests", "Total Station Surveying Camps", "Green Building Seminars"],
  },
  {
    name: "EESA (Electrical Engineering Students Association)",
    icon: Zap,
    tag: "Electrical Eng.",
    desc: "Explores solar PV applications, smart grid technologies, motor drive automation, and power electronic converters.",
    activities: ["Solar Model Exhibitions", "PLC & Automation Workshops", "Industrial Power Plant Visits"],
  },
];

const CULTURAL_SPORTS_CLUBS = [
  {
    name: "Kaushalya Cultural Club",
    icon: Sparkles,
    tag: "Arts & Culture",
    desc: "Celebrates the rich cultural diversity of the campus with theatrical plays, classical/western dance, singing, poetry, and fine arts.",
    activities: ["Annual Kaushalya Mega Fest", "Navratri Garba Mahotsav", "Street Plays & Mono Acting"],
  },
  {
    name: "Shaurya Sports Festival & Council",
    icon: Trophy,
    tag: "Athletics",
    desc: "Promotes physical fitness, teamwork, and sportsmanship through competitive tournaments in cricket, volleyball, football, and table tennis.",
    activities: ["Annual Shaurya Sports Week", "Inter-College Cricket Cup", "Track & Field Athletic Meets"],
  },
  {
    name: "NSS (National Service Scheme) Unit",
    icon: Heart,
    tag: "Social Service",
    desc: "Committed to community service through blood donation drives, tree plantation campaigns, health camps, and rural literacy camps.",
    activities: ["Annual Blood Donation Camp", "Village Adoption & Tech Literacy", "Swachh Bharat Cleanliness Drives"],
  },
  {
    name: "Photography & Creative Media Club",
    icon: Camera,
    tag: "Media & Arts",
    desc: "Captures dynamic campus life, covers institutional events, produces college newsletters, short films, and social media reels.",
    activities: ["Campus Photo Walks", "Reel & Video Storytelling", "Semester College Newsletter"],
  },
];

function StudentClubsPage() {
  return (
    <PageShell
      title="Student Clubs & Chapters"
      subtitle="Discover vibrant student-run societies fostering coding innovation, robotics, cultural heritage, athletics, and social responsibility."
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
              <p className="font-display text-xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Intro Box */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Student Life</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Learn, Lead &amp; Collaborate Outside the Classroom
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <a
            href="https://gtuitr.gtu.ac.in/%5CgperiDoc%5CSAC.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
          >
            <Download className="h-4 w-4" /> Download SAC Council List (PDF)
          </a>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          At GTU-ITR, extracurricular life is structured through dynamic student chapters under the aegis of the{" "}
          <strong>Student Activity Cell (SAC)</strong>. Whether coding innovative web platforms, fabricating go-karts in
          the workshop, performing on stage at the Kaushalya cultural fest, or competing in university athletic meets,
          every student finds a welcoming community to hone their talents.
        </p>
      </div>

      {/* Technical Clubs Section */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Technical &amp; Engineering Clubs</h3>
          <p className="mt-1 text-xs text-muted-foreground">Department-aligned student societies driving hands-on technical skills.</p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_CLUBS.map((club, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <club.icon className="h-5 w-5 text-brand-red" />
                  </span>
                  <span className="rounded bg-brand-surface px-2.5 py-0.5 text-[10px] font-bold uppercase text-brand-navy border border-border/80">
                    {club.tag}
                  </span>
                </div>

                <h4 className="mt-4 font-heading text-base font-bold text-brand-navy">{club.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{club.desc}</p>

                <div className="mt-4 border-t border-border/70 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Key Activities:</p>
                  <ul className="mt-2 space-y-1.5">
                    {club.activities.map((act, aidx) => (
                      <li key={aidx} className="flex items-center gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-red" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural, Sports & Social Clubs */}
      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Cultural, Sports &amp; Social Chapters</h3>
          <p className="mt-1 text-xs text-muted-foreground">Nurturing artistic expression, athletic stamina, and community welfare.</p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {CULTURAL_SPORTS_CLUBS.map((club, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <club.icon className="h-5 w-5 text-brand-red" />
                  </span>
                  <span className="rounded bg-brand-surface px-2.5 py-0.5 text-[10px] font-bold uppercase text-brand-navy border border-border/80">
                    {club.tag}
                  </span>
                </div>

                <h4 className="mt-4 font-heading text-base font-bold text-brand-navy">{club.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{club.desc}</p>

                <div className="mt-4 border-t border-border/70 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Key Activities:</p>
                  <ul className="mt-2 space-y-1.5">
                    {club.activities.map((act, aidx) => (
                      <li key={aidx} className="flex items-center gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-red" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Join CTA */}
      <div className="mt-12 rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Get Involved
            </span>
            <h4 className="mt-2 font-heading text-xl font-bold uppercase text-white">
              How to Register for Student Clubs
            </h4>
            <p className="mt-1 text-xs text-white/80 max-w-xl">
              Club registrations open at the beginning of each semester during orientation. Any GTU-ITR student across
              degree and diploma programs can join up to two active clubs.
            </p>
          </div>
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
          >
            Enquire for Club Membership <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

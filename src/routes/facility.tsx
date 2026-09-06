import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  BookOpen,
  Wifi,
  Coffee,
  Bus,
  Shield,
  Home,
  Wrench,
  Tv,
  Users,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      { title: "Campus Facilities & Infrastructure | GTU-ITR" },
      {
        name: "description",
        content:
          "Ultra-modern classrooms, central workshop, 52 laboratories, digital library, computer center, Wi-Fi campus, cafeteria, transport, and hostels at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Campus Facilities & Infrastructure | GTU-ITR" },
      {
        property: "og:description",
        content: "Explore the comprehensive academic and student infrastructure at GTU-ITR Mehsana campus.",
      },
      { property: "og:url", content: "/facility" },
    ],
    links: [{ rel: "canonical", href: "/facility" }],
  }),
  component: FacilityPage,
});

const STATS = [
  { label: "Engineering Labs", value: "52+", icon: Wrench, desc: "Across degree & diploma branches" },
  { label: "Library Volumes", value: "11,553+", icon: BookOpen, desc: "Books, national/international journals" },
  { label: "High-Speed Wi-Fi", value: "100 Mbps", icon: Wifi, desc: "Campus-wide fiber optic network" },
  { label: "Bus Routes", value: "5 Routes", icon: Bus, desc: "Mehsana, Ahmedabad, Gandhinagar, Patan, Palanpur" },
];

const FACILITIES = [
  {
    id: "classrooms",
    title: "Ultra-Modern Smart Classrooms",
    tag: "Academics",
    icon: Tv,
    description:
      "Well-structured and aerodynamically designed classrooms with ergonomic seating and ceiling-mounted digital projectors that make the teaching and learning process interactive and engaging.",
    highlights: ["Interactive Digital Projectors", "Ergonomic Acoustic Seating", "Natural Lighting & Ventilation", "Hybrid Presentation Benches"],
  },
  {
    id: "workshop",
    title: "Central Engineering Workshop",
    tag: "Practical Skills",
    icon: Wrench,
    description:
      "A spacious centralized workshop housing comprehensive training bays for carpentry, fitting, welding, sheet metal, smithy, and foundry operations with full safety apparel.",
    highlights: ["MIG/TIG/Arc Welding Stations", "Precision Fitting Workbenches", "Woodworking Lathes & Saws", "Blacksmithy & Sheet Metal Tools"],
  },
  {
    id: "library",
    title: "Central Digital Library",
    tag: "Knowledge Hub",
    icon: BookOpen,
    description:
      "A rich academic repository stocking over 11,553 volumes, subscriptions to leading national and international engineering journals, e-resource terminals, and quiet study reading halls.",
    highlights: ["11,553+ Textbooks & References", "National & International Journals", "Digital Library & IEEE Access", "Spacious Reading Halls"],
  },
  {
    id: "computer-center",
    title: "High-Performance Computing Center",
    tag: "ICT Hub",
    icon: Monitor,
    description:
      "State-of-the-art computer labs with high-end desktop workstations, gigabit local intranet, and professional software including Siemens NX, MATLAB, AutoCAD, and Oracle databases.",
    highlights: ["Modern Multi-Core Desktop PCs", "Licensed Siemens & Engineering Software", "Gigabit LAN Backbone", "Dedicated Server Room & UPS"],
  },
  {
    id: "wifi",
    title: "Campus-Wide High-Speed Wi-Fi",
    tag: "Connectivity",
    icon: Wifi,
    description:
      "Round-the-clock secure wireless connectivity across all academic departments, student activity centers, faculty rooms, and hostel premises powered by dedicated leased line internet.",
    highlights: ["Enterprise Mesh Access Points", "Secure Firewall & Content Filtering", "High-Bandwidth Fiber Backbone", "Seamless Roaming Access"],
  },
  {
    id: "auditorium",
    title: "Auditorium & Seminar Halls",
    tag: "Events & Fests",
    icon: Users,
    description:
      "Acoustically treated multi-purpose auditorium and seminar halls with modern sound systems and projection stages, hosting the annual Kaushalya cultural fest, seminars, and convocations.",
    highlights: ["500+ Seating Capacity", "Surround Sound & Stage Lighting", "Air-Conditioned Seminar Rooms", "Video Conferencing Facilities"],
  },
  {
    id: "cafeteria",
    title: "Hygienic Campus Cafeteria",
    tag: "Dining",
    icon: Coffee,
    description:
      "Spacious and clean dining facility serving nutritious, affordable breakfast, vegetarian lunch meals, tea, and refreshments prepared under strict hygiene standards.",
    highlights: ["Fresh Vegetarian Meals & Snacks", "Strict Kitchen Sanitization", "Comfortable Indoor & Outdoor Seating", "Subsidized Student Pricing"],
  },
  {
    id: "transportation",
    title: "Dedicated Bus Fleet Transportation",
    tag: "Mobility",
    icon: Bus,
    description:
      "Fleet of institute-operated buses providing convenient, safe, and punctual daily transportation for students and faculty across major cities and towns in North Gujarat.",
    highlights: ["5 Daily Regional Routes", "Covers Ahmedabad, Gandhinagar, Kalol, Patan, Palanpur, Mehsana", "GPS-Tracked Vehicles", "Affordable Semester Passes"],
  },
  {
    id: "hostel",
    title: "On-Campus Student Hostels",
    tag: "Residential",
    icon: Home,
    description:
      "Safe, comfortable on-campus residential accommodation with separate wings for male and female students, equipped with study desks, Wi-Fi, mess dining, and recreation rooms.",
    highlights: ["Separate Boys & Girls Wings", "Furnished Double & Triple Rooms", "Attached Mess & Dining Services", "Resident Warden Supervision"],
  },
  {
    id: "security",
    title: "24x7 Campus Security & Surveillance",
    tag: "Safety",
    icon: Shield,
    description:
      "Comprehensive multi-layer security infrastructure with gated access control, round-the-clock security guards, campus-wide CCTV coverage, and dedicated women helpline.",
    highlights: ["24x7 Manned Entry Gate Checkpoints", "Comprehensive CCTV Coverage", "Direct Women Helpline: +91 7827170170", "Medical First-Aid Dispensary"],
  },
];

function FacilityPage() {
  return (
    <PageShell
      title="Campus Facilities & Infrastructure"
      subtitle="World-class academic laboratories, smart classrooms, sports arenas, digital library, and modern residential amenities at GTU-ITR Mehsana."
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

      {/* Intro Overview Card */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Campus Highlights</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Designed for Academic &amp; Personal Excellence
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <Link
            to="/transportation"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
          >
            <Bus className="h-4 w-4" /> View Bus Schedules
          </Link>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          Spanning an expansive, lush green campus on the Ahmedabad-Mehsana expressway, GTU-ITR provides students with an
          inspiring blend of modern architectural aesthetics and cutting-edge engineering laboratories. From our Siemens
          Centre of Excellence to high-tech computing networks and on-campus living amenities, every facility is geared
          towards empowering tomorrow&apos;s technocrats.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {FACILITIES.map((facility) => (
          <div
            key={facility.id}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white">
                  <facility.icon className="h-5 w-5 text-brand-red" />
                </div>
                <span className="rounded bg-brand-surface px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-navy border border-border/80">
                  {facility.tag}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-navy">{facility.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">{facility.description}</p>
            </div>

            <div className="mt-6 border-t border-border/70 pt-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Key Highlights:</p>
              <ul className="mt-2 space-y-1.5">
                {facility.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-foreground/90">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-red" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Help & Contact Bar */}
      <div className="mt-12 rounded-xl border border-border bg-brand-surface p-6 shadow-sm md:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Shield className="mt-1 h-5 w-5 text-brand-red shrink-0" />
            <div>
              <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">24x7 Women Helpline</h4>
              <p className="mt-1 text-xs text-muted-foreground">Dedicated safety cell for all female students &amp; staff.</p>
              <p className="mt-1 text-sm font-bold text-brand-red">+91 7827170170</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-brand-red shrink-0" />
            <div>
              <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">Campus Administration</h4>
              <p className="mt-1 text-xs text-muted-foreground">Main reception, security desk &amp; administrative office.</p>
              <p className="mt-1 text-sm font-bold text-brand-navy">+91-9909039233</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-navy py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-red"
            >
              Have Facility Queries? Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

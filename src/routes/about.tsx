import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  GraduationCap,
  Award,
  Users,
  CheckCircle2,
  Compass,
  Cpu,
  Sun,
  MapPin,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | GTU-ITR Mehsana" },
      {
        name: "description",
        content:
          "Gujarat Technological University - Institute of Technology & Research (GTU-ITR), formerly GPERI. The premier degree engineering institute in North Gujarat managed directly by GTU.",
      },
      { property: "og:title", content: "About Us | GTU-ITR Mehsana" },
      {
        property: "og:description",
        content: "Overview, history, leadership, and infrastructure of GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const STATS = [
  { label: "University Status", value: "GTU Managed", icon: Building2, desc: "Constituent institute of GTU Ahmedabad" },
  { label: "Campus Scale", value: "25 Acres", icon: Compass, desc: "Eco-friendly, lush green campus" },
  { label: "Engineering Labs", value: "52+ Labs", icon: Cpu, desc: "Including 9 Siemens CoE laboratories" },
  { label: "Regional Pioneer", value: "1st in North Guj", icon: Award, desc: "First degree engineering college managed by GTU" },
];

const WHAT_WE_HAVE = [
  {
    title: "Experienced Faculty Members",
    desc: "Professors and researchers from premier seats of learning like IITs, NITs, and GTU with extensive doctoral research.",
  },
  {
    title: "SIEMENS Center of Excellence",
    desc: "A joint initiative with Government of Gujarat featuring 9 specialized labs with Sinumerik CNC and NX CAD/CAM suites.",
  },
  {
    title: "Anchor Institute of Solar Energy",
    desc: "State nodal institute for renewable energy skill development, training of trainers, and clean tech consultancy.",
  },
  {
    title: "52+ Well-Established Laboratories",
    desc: "Equipped with advanced instruments, experimental test rigs, and high-performance multi-core workstations.",
  },
  {
    title: "Elegant Architecture & Natural Lighting",
    desc: "Award-winning eco-campus designed with natural lighting, low electricity footprint, and solar rooftop generation.",
  },
  {
    title: "Training & Placement Cell (TPO)",
    desc: "Active industry linkages with Odoo, Bitscape, TCS, eInfochips, and structured 3-tier career readiness bootcamps.",
  },
  {
    title: "High-Speed Wi-Fi & Central Library",
    desc: "Campus-wide fiber-optic connectivity and a digital library holding over 11,553 volumes, journals, and IEEE databases.",
  },
  {
    title: "Dedicated Regional Bus Fleet",
    desc: "Safe, punctual transit network connecting Ahmedabad, Gandhinagar, Kalol, Mehsana, Patan, and Palanpur.",
  },
];

const LEADERSHIP_MESSAGES = [
  {
    title: "Vice Chancellor's Message",
    role: "Gujarat Technological University",
    link: "/vc-message",
    desc: "Vision for transforming GTU-ITR into a state-wide epicenter for high-tech engineering education.",
  },
  {
    title: "Registrar's Message",
    role: "Administrative Leadership, GTU",
    link: "/registrar-message",
    desc: "Commitment to academic excellence, student support services, and world-class institutional governance.",
  },
  {
    title: "Principal's Message",
    role: "Head of Institute, GTU-ITR",
    link: "/principal-message",
    desc: "Fostering an inclusive campus culture, hands-on experiential learning, and innovative student startups.",
  },
];

function AboutPage() {
  return (
    <PageShell
      title="About GTU-ITR"
      subtitle="First ever Degree Engineering Institution in North Gujarat managed directly by Gujarat Technological University (GTU)."
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

      {/* Main Narrative Card */}
      <div className="mb-12 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <Badge className="bg-brand-red uppercase text-white tracking-wider">Institutional Heritage</Badge>
        <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
          Gujarat Technological University – Institute of Technology &amp; Research
        </h2>
        <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

        <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
          <p>
            <strong>Gujarat Technological University - Institute of Technology &amp; Research (GTU-ITR)</strong>, formerly
            known as Gujarat Power Engineering and Research Institute (GPERI), is the first degree engineering institution
            in the North Gujarat region managed directly by Gujarat Technological University (GTU), Ahmedabad. The institute
            is situated near Mevad toll-booth on the Ahmedabad - Mehsana Express Highway, Mehsana.
          </p>
          <p>
            The institute was established to foster competent engineering technocrats by integrating theoretical excellence
            with industrial mastery. Surrounded by serene water ponds and landscaped flora, the campus incorporates
            energy-efficient architecture with maximum natural illumination, low electricity consumption, and rooftop
            solar power generation, making it one of the most sustainable technical campuses in western India.
          </p>
        </div>
      </div>

      {/* "What We Have" Grid */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">What Sets GTU-ITR Apart</h3>
          <p className="mt-1 text-xs text-muted-foreground">Unique strengths and academic infrastructure available to our students.</p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_WE_HAVE.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <CheckCircle2 className="h-5 w-5 text-brand-red" />
                <h4 className="mt-3 font-heading text-sm font-bold text-brand-navy">{item.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Leadership Messages */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Leadership Messages</h3>
          <p className="mt-1 text-xs text-muted-foreground">Guidance from our university chancellery and institute leadership.</p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {LEADERSHIP_MESSAGES.map((msg, idx) => (
            <Link
              key={idx}
              to={msg.link}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-md"
            >
              <div>
                <Badge className="bg-brand-surface text-brand-navy border border-border text-[10px] uppercase font-bold">
                  {msg.role}
                </Badge>
                <h4 className="mt-3 font-heading text-base font-bold text-brand-navy transition-colors group-hover:text-brand-red">
                  {msg.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{msg.desc}</p>
              </div>

              <div className="mt-5 border-t border-border/70 pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors group-hover:text-brand-red">
                <span>Read Full Message</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Campus Location & Contact Card */}
      <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm md:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Campus Coordinates
            </span>
            <h4 className="mt-2 font-heading text-lg font-bold uppercase text-white">Visit GTU-ITR Mehsana</h4>
            <p className="mt-1 text-xs text-white/80">
              Easily accessible via the 6-lane Ahmedabad-Mehsana Express Highway.
            </p>
          </div>
          <div className="space-y-1.5 text-xs text-white/90">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
              Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway, Ta. &amp; Dist. Mehsana - 384460, Gujarat, India.
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-red" /> +91-9909039233
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Admissions &amp; Campus Tour <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

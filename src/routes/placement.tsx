import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { PlacedStudentsCarousel } from "@/components/site/PlacedStudentsCarousel";
import {
  Briefcase,
  Building2,
  GraduationCap,
  Award,
  Users,
  CheckCircle2,
  Download,
  TrendingUp,
  FileText,
  ArrowRight,
  Target,
  Handshake,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/placement")({
  head: () => ({
    meta: [
      { title: "Training & Placement Cell | GTU-ITR" },
      {
        name: "description",
        content:
          "Training and Placement Cell at GTU-ITR Mehsana. Industry tie-ups with Odoo, Bitscape, TCS, and multi-sector recruiters. Campus placement statistics, internships, and policy.",
      },
      { property: "og:title", content: "Training & Placement Cell | GTU-ITR" },
      {
        property: "og:description",
        content: "Career development, corporate tie-ups, and placement drives at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/placement" },
    ],
    links: [{ rel: "canonical", href: "/placement" }],
  }),
  component: PlacementPage,
});

const STATS = [
  { label: "Corporate Partners", value: "70+", icon: Handshake, desc: "MNCs, MSMEs & Tech Giants" },
  { label: "Highest Package", value: "₹8.5 LPA", icon: TrendingUp, desc: "Across top technology recruiters" },
  { label: "Average Package", value: "₹4.2 LPA", icon: Award, desc: "Consistent industry compensation" },
  { label: "Placement Assistance", value: "100%", icon: Target, desc: "Dedicated guidance & interview preparation" },
];

const RECRUITERS = [
  { name: "Odoo India", logo: "/recruiters/odoo.svg", sector: "Enterprise ERP & Open Source", location: "Gandhinagar" },
  { name: "Bitscape", logo: "/recruiters/bitscape.svg", sector: "Microsoft Cloud Partner", location: "Ahmedabad" },
  { name: "Tata Consultancy Services (TCS)", logo: "/recruiters/tcs.svg", sector: "Global IT Services", location: "Pan India" },
  { name: "TatvaSoft", logo: "/recruiters/tatvasoft.svg", sector: "Custom Software Solutions", location: "Ahmedabad" },
  { name: "eInfochips (An Arrow Co.)", logo: "/recruiters/einfochips.svg", sector: "VLSI, Embedded & IoT", location: "Ahmedabad" },
  { name: "Adani Group", logo: "/recruiters/adani.svg", sector: "Infrastructure & Energy", location: "Mundra / Ahmedabad" },
  { name: "L&T Construction", logo: "/recruiters/lnt.svg", sector: "Heavy Engineering & Infrastructure", location: "Vadodara" },
  { name: "Torrent Power", logo: "/recruiters/torrent.svg", sector: "Power Distribution & Generation", location: "Gujarat" },
  { name: "Argusoft", logo: "/recruiters/argusoft.svg", sector: "Software Engineering & Healthtech", location: "Gandhinagar" },
  { name: "Matrix Comsec", logo: "/recruiters/matrix.svg", sector: "Telecom & Security Solutions", location: "Vadodara" },
  { name: "Gateway Group", logo: "/recruiters/gateway.svg", sector: "Global Digital Solutions", location: "Ahmedabad" },
  { name: "Silver Touch Technologies", logo: "/recruiters/silvertouch.svg", sector: "Enterprise IT & Cloud", location: "Ahmedabad" },
];

const TRAINING_MODULES = [
  {
    phase: "Phase 1: Foundation (Sem 1 - 4)",
    title: "Communication & Analytical Aptitude",
    items: [
      "Diagnostic aptitude assessment and quantitative reasoning fundamentals.",
      "English communication, public speaking, and body language workshops.",
      "Hands-on coding bootcamps in Python, C++, and Web basics.",
    ],
  },
  {
    phase: "Phase 2: Pre-Final Year (Sem 5 - 6)",
    title: "Advanced Domain Skills & Internships",
    items: [
      "Industry-specific technical training at Siemens Center of Excellence.",
      "Resume writing, LinkedIn optimization, and mock technical interviews.",
      "Mandatory summer internships with regional industries and IT firms.",
    ],
  },
  {
    phase: "Phase 3: Final Year (Sem 7 - 8)",
    title: "On-Campus Recruitment Drives",
    items: [
      "Pre-placement talks (PPT), written aptitude tests, and coding evaluations.",
      "Technical and HR interview rounds on campus and virtually.",
      "Pooled recruitment drives through Gujarat Technological University (GTU).",
    ],
  },
];

function PlacementPage() {
  return (
    <PageShell
      title="Training & Placement Cell"
      subtitle="A vibrant bridge connecting ambitious engineering minds with prestigious national and global corporate recruiters."
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

      {/* Overview & Mission Card */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Career Development Hub</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Empowering Students for High-Growth Careers
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://gtuitr.gtu.ac.in/gperiDoc/Placement%20Policy%20GTU-ITR%2002%20May%202026.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-navy/30 bg-brand-surface px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              <Download className="h-4 w-4" /> Placement Policy (PDF)
            </a>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
            >
              <Briefcase className="h-4 w-4" /> Recruit From GTU-ITR
            </Link>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-foreground/85">
          The Training and Placement (TPO) Cell at GTU-ITR is shaped with the objective to build a strong coordinating
          link between the institute and leading industries. Under centralized committee leadership, continuous efforts
          are carried out to bridge the gap between theoretical knowledge and practical engineering challenges through
          expert lectures, industrial visits, hands-on internships, and customized training modules.
        </p>
      </div>

      {/* Placed Students Carousel */}
      <PlacedStudentsCarousel />

      {/* Prominent Recruiters Grid */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Our Valued Recruiting Partners</h3>
            <p className="mt-1 text-xs text-muted-foreground">Prestigious technology firms and industrial conglomerates hiring GTU-ITR talent.</p>
          </div>
          <span className="hidden rounded bg-brand-navy/10 px-2.5 py-1 text-xs font-bold text-brand-navy sm:inline-block">
            MNCs &amp; IT Leaders
          </span>
        </div>
        <div className="mb-6 mt-3 h-1 w-16 bg-brand-red" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {RECRUITERS.map((r, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4.5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-md"
            >
              <div>
                {/* Prominent Company Logo Showcase */}
                <div className="flex h-18 w-full items-center justify-center rounded-lg border border-border/60 bg-white px-4 py-2.5 shadow-xs transition-transform duration-200 group-hover:scale-[1.02]">
                  <img
                    src={r.logo}
                    alt={`${r.name} logo`}
                    className="h-12 w-full max-w-[200px] object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Company Name & Sector */}
                <div className="mt-3.5">
                  <p className="font-heading text-base font-bold text-brand-navy transition-colors group-hover:text-brand-red leading-snug">
                    {r.name}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/85">{r.sector}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-brand-red shrink-0" />
                  {r.location}
                </span>
                <span className="rounded bg-brand-navy/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
                  Hiring Partner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Architecture & Student Testimonials */}
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Training Architecture */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h3 className="flex items-center gap-2 font-heading text-lg font-bold uppercase text-brand-navy">
            <GraduationCap className="h-5 w-5 text-brand-red" /> Structured 3-Tier Training Architecture
          </h3>
          <div className="mb-6 mt-2 h-0.5 w-12 bg-brand-red" />

          <div className="space-y-6">
            {TRAINING_MODULES.map((mod, i) => (
              <div key={i} className="rounded-xl border border-border/70 bg-brand-surface/30 p-5">
                <span className="rounded bg-brand-navy px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  {mod.phase}
                </span>
                <h4 className="mt-2 font-heading text-base font-bold text-brand-navy">{mod.title}</h4>
                <ul className="mt-3 space-y-2">
                  {mod.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonial & Contact */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <Badge className="bg-brand-navy text-white uppercase text-[10px]">Alumni Success</Badge>
            <blockquote className="mt-3 text-xs italic leading-relaxed text-foreground/85">
              &quot;GTU-ITR provided excellent placement opportunities. I got placed in my final year with an MNC, and I
              owe it all to the training and support provided by the college. The professors helped us in every aspect from
              mock interviews to company technical tests.&quot;
            </blockquote>
            <div className="mt-4 border-t border-border pt-3">
              <p className="font-heading text-sm font-bold text-brand-navy">Gupta Jay</p>
              <p className="text-[11px] text-muted-foreground">Placed with MNC Partner • Mechanical Alumnus</p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <div>
              <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                For Recruiters
              </span>
              <h4 className="mt-3 font-heading text-base font-bold uppercase text-white">Invite GTU-ITR for Campus Drives</h4>
              <p className="mt-2 text-xs leading-relaxed text-white/85">
                We invite recruiters to conduct on-campus and virtual hiring drives for Bachelor of Engineering and Diploma graduates.
              </p>

              <div className="mt-4 border-t border-white/10 pt-4 space-y-2 text-xs text-white/90">
                <p>
                  <strong>T&amp;P Officer:</strong> Training &amp; Placement Cell
                </p>
                <p>
                  <strong>Email:</strong> admission_gperi@gtu.edu.in
                </p>
                <p>
                  <strong>Direct Desk:</strong> +91-9909039233
                </p>
                <p>
                  <strong>Campus:</strong> Ahmedabad-Mehsana Express Highway
                </p>
              </div>
            </div>

            <Link
              to="/enquiry"
              className="mt-6 block w-full rounded-lg bg-brand-red py-3 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Contact TPO Desk <ArrowRight className="inline-block ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

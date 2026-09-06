import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Sun,
  Zap,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  Mail,
  Phone,
  Building2,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/solar-energy")({
  head: () => ({
    meta: [
      { title: "Anchor Institute of Solar Energy (AISE) | GTU-ITR" },
      {
        name: "description",
        content:
          "Anchor Institute of Solar Energy (AISE) at GTU-ITR Mehsana. Nodal agency for renewable energy skill development, faculty training, and R&D established by Government of Gujarat.",
      },
      { property: "og:title", content: "Anchor Institute of Solar Energy (AISE) | GTU-ITR" },
      {
        property: "og:description",
        content:
          "AISE at GTU-ITR Mehsana: State nodal center for solar training, FDP, curriculum benchmarking, and solar technology research.",
      },
      { property: "og:url", content: "/solar-energy" },
    ],
    links: [{ rel: "canonical", href: "/solar-energy" }],
  }),
  component: SolarEnergyPage,
});

const RESPONSIBILITIES = [
  "Provide technical support to technical educational institutions in the sector across shop floor, supervisory, and managerial levels for skill improvement.",
  "Collect and evaluate information on all technical courses offered in Gujarat to make them industry-responsive.",
  "Study and recommend curriculum revisions to the State Government aligned with evolving industry needs.",
  "Organize state-level Faculty Development Programmes (FDP) and Training for Trainers (ToT).",
  "Benchmark courses offered by ITIs, Polytechnics, and Engineering Colleges with national and international standards.",
  "Select, guide, and coordinate with designated Nodal Institutes across Gujarat.",
  "Continuously evolve new industry-focused training modules and implement regular curriculum improvements.",
  "Mobilize expert faculty and speakers from premier academic institutes, industries, and research labs.",
  "Encourage faculty and students to undertake applied R&D and consultancy in solar energy technologies.",
];

const HIGHLIGHTS = [
  { label: "Nodal Mission", value: "Statewide", icon: Compass, desc: "Benchmarking renewable energy courses" },
  { label: "Target Sectors", value: "Shop to R&D", icon: Zap, desc: "Technician, supervisory & managerial training" },
  { label: "Faculty Trained", value: "500+", icon: Users, desc: "Across ITIs, polytechnics & colleges" },
  { label: "Govt. Initiative", value: "GoG Sponsored", icon: Award, desc: "Strategic clean energy workforce mission" },
];

const FACILITIES = [
  {
    title: "Solar Photovoltaic (PV) Laboratory",
    desc: "Equipped with PV module characterization setups, solar simulators, grid-tied inverter analyzers, and MPPT test rigs.",
  },
  {
    title: "Solar Thermal Energy Testing Unit",
    desc: "Flat-plate and evacuated tube collector testing benches, solar water heating demo systems, and concentrated solar demo kits.",
  },
  {
    title: "Rooftop Grid-Interactive Solar Plant",
    desc: "Live campus rooftop installation providing real-time power generation data, net-metering telemetry, and performance tracking.",
  },
  {
    title: "Energy Audit & Storage Workbench",
    desc: "Fluke power quality analyzers, thermal imaging cameras, battery management test setups, and hybrid inverter configurations.",
  },
];

function SolarEnergyPage() {
  return (
    <PageShell
      title="Anchor Institute of Solar Energy"
      subtitle="State Nodal Center for renewable energy skill development, training of trainers, and clean energy R&D at GTU-ITR Mehsana."
    >
      {/* Top Banner Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-primary-foreground">
              <h.icon className="h-6 w-6 text-brand-red" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-brand-navy">{h.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{h.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Overview */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Government of Gujarat Initiative</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Anchor Institute of Solar Energy (AISE)
            </h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            <p className="text-sm leading-relaxed text-foreground/85">
              Gujarat Technological University - Institute of Technology and Research (GTU-ITR), Mehsana hosts the{" "}
              <strong>Anchor Institute of Solar Energy</strong>. In partnership with the Government of Gujarat, the
              Institute spearheads statewide initiatives to upgrade technical education, foster industrial alignment, and
              build a competent workforce for India&apos;s clean energy transition.
            </p>

            <div className="mt-8 rounded-xl border border-border/70 bg-brand-surface/40 p-6">
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold uppercase text-brand-navy">
                <Compass className="h-5 w-5 text-brand-red" /> Key Roles &amp; Responsibilities
              </h3>
              <div className="mb-6 mt-2 h-0.5 w-12 bg-brand-red" />
              <div className="grid gap-3">
                {RESPONSIBILITIES.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-border/60 bg-white p-3.5 shadow-2xs">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                    <p className="text-xs leading-relaxed text-foreground/90">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">Our Specialized Facilities</h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            <div className="grid gap-4 sm:grid-cols-2">
              {FACILITIES.map((f, i) => (
                <div key={i} className="rounded-lg border border-border bg-brand-surface/30 p-4">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-brand-red" />
                    <h4 className="font-heading text-xs font-bold uppercase text-brand-navy">{f.title}</h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Head Profile Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="border-b border-border pb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-navy">
              Institute Leadership
            </h3>
            <div className="mt-4 space-y-3 text-xs">
              <div>
                <p className="font-heading text-sm font-bold text-foreground">Dr. Piyush B. Miyani</p>
                <p className="text-muted-foreground">Assistant Professor &amp; Head, Anchor Institute of Solar Energy</p>
                <p className="text-muted-foreground">GTU - Institute of Technology &amp; Research</p>
              </div>

              <div className="border-t border-border pt-3 space-y-2 text-foreground/90">
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-brand-red" /> solarinstitute@gtu.edu.in
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-brand-red" /> piyush.miyani@gtu.edu.in
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-brand-red" /> +91-9722320750
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <Link
                to="/enquiry"
                className="block w-full rounded-lg bg-brand-red py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-navy"
              >
                Connect with AISE <ArrowRight className="inline-block ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <h3 className="font-heading text-sm font-bold uppercase text-white">Solar Training Programs</h3>
            <p className="mt-2 text-xs leading-relaxed text-white/80">
              AISE conducts customized short-term modules for engineering students, ITI instructors, and industrial technicians in:
            </p>
            <ul className="mt-3 space-y-2 text-xs text-white/90">
              <li className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-brand-red" /> Rooftop Solar PV Installation
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-brand-red" /> Solar Water Pumping Systems
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-brand-red" /> Industrial Solar Thermal Design
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-brand-red" /> Grid Synchronization &amp; Net Metering
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Target,
  Award,
  Compass,
  CheckCircle2,
  Heart,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision, Mission & Core Values | GTU-ITR" },
      {
        name: "description",
        content:
          "The guiding vision, mission, strategic objectives, and foundational values of Gujarat Technological University - Institute of Technology & Research (GTU-ITR), Mehsana.",
      },
      { property: "og:title", content: "Vision, Mission & Core Values | GTU-ITR" },
      {
        property: "og:description",
        content: "Vision, mission, and core values of GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/vision-mission" }],
  }),
  component: VisionMissionPage,
});

const MISSION_PILLARS = [
  {
    title: "Quality Technical Pedagogy",
    desc: "Imparting quality technical education through an industry-aligned, experiential curriculum and modern digital classrooms.",
  },
  {
    title: "Advanced Research & Infrastructure",
    desc: "Cultivating an exceptional academic ecosystem with cutting-edge laboratories like Siemens CoE, modern workshops, and proficient doctoral faculty.",
  },
  {
    title: "Innovation & Entrepreneurship",
    desc: "Inspiring and funding student innovations through the Student Startup & Innovation Policy (SSIP), hackathons, and incubation mentoring.",
  },
  {
    title: "Ethics & Professional Integrity",
    desc: "Nurturing uncompromising professional ethics, leadership qualities, human values, and a contributory mindset for societal upliftment.",
  },
  {
    title: "Strong Industry Linkages",
    desc: "Building enduring symbiotic partnerships with leading industrial houses and alumni networks for knowledge sharing and placements.",
  },
];

const CORE_VALUES = [
  { title: "Academic Rigor", desc: "Uncompromising pursuit of technical excellence, practical mastery, and research mindset.", icon: Compass },
  { title: "Integrity & Ethics", desc: "Honesty, mutual respect, fairness, and adherence to highest moral principles in all actions.", icon: ShieldCheck },
  { title: "Student-Centricity", desc: "Prioritizing the welfare, holistic personal growth, and career success of every enrolled student.", icon: Heart },
  { title: "Innovation Culture", desc: "Encouraging original thinking, creative problem-solving, and sustainable engineering solutions.", icon: Lightbulb },
  { title: "Societal Contribution", desc: "Applying engineering knowledge to solve local, national, and global environmental challenges.", icon: Globe },
];

function VisionMissionPage() {
  return (
    <PageShell
      title="Vision, Mission & Core Values"
      subtitle="The foundational philosophy, guiding principles, and enduring commitment driving academic and research excellence at GTU-ITR."
    >
      {/* Vision & Mission Cards Grid */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {/* Vision Card */}
        <div className="flex flex-col justify-between rounded-xl border-2 border-brand-navy/20 bg-card p-8 shadow-sm transition-all hover:border-brand-navy/40 hover:shadow-md">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                <Eye className="h-6 w-6 text-brand-red" />
              </div>
              <div>
                <Badge className="bg-brand-red uppercase text-white tracking-wider text-[10px]">Our Aspiration</Badge>
                <h2 className="mt-1 font-heading text-2xl font-bold uppercase text-brand-navy">Institutional Vision</h2>
              </div>
            </div>
            <div className="mb-6 mt-4 h-1 w-16 bg-brand-red" />
            <blockquote className="text-base font-medium italic leading-relaxed text-foreground/90">
              &quot;To be a globally recognized institute of technology and research that nurtures competent engineers,
              inventive innovators, and ethical leaders who actively contribute to sustainable technological and societal
              development.&quot;
            </blockquote>
          </div>
          <div className="mt-6 border-t border-border/70 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              GTU-ITR Strategic Roadmap
            </span>
          </div>
        </div>

        {/* Mission Card */}
        <div className="flex flex-col justify-between rounded-xl border-2 border-brand-red/20 bg-card p-8 shadow-sm transition-all hover:border-brand-red/40 hover:shadow-md">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <Badge className="bg-brand-navy uppercase text-white tracking-wider text-[10px]">Our Purpose</Badge>
                <h2 className="mt-1 font-heading text-2xl font-bold uppercase text-brand-navy">Institutional Mission</h2>
              </div>
            </div>
            <div className="mb-6 mt-4 h-1 w-16 bg-brand-red" />
            <p className="text-sm leading-relaxed text-foreground/85">
              To impart quality technical education through continuous curriculum innovation, industry-driven laboratories,
              and collaborative mentorship, cultivating graduates equipped with technological competence, social sensitivity,
              and entrepreneurial vision.
            </p>
          </div>
          <div className="mt-6 border-t border-border/70 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Committed to Creating Engineers for Tomorrow
            </span>
          </div>
        </div>
      </div>

      {/* 5 Mission Pillars */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Mission Strategic Pillars</h3>
          <p className="mt-1 text-xs text-muted-foreground">The strategic tenets translating our mission into daily academic practice.</p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MISSION_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-brand-surface/40 p-6 shadow-2xs transition-colors hover:border-brand-navy/30"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0" />
                <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">{pillar.title}</h4>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/80">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Institutional Values */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Our Foundational Values</h3>
        <p className="mt-1 text-xs text-muted-foreground">Principles that guide every faculty, student, and administrative action.</p>
        <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center rounded-xl border border-border/70 bg-brand-surface/30 p-5 transition-all hover:border-brand-navy/30 hover:shadow-xs"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                <val.icon className="h-6 w-6 text-brand-red" />
              </div>
              <h4 className="mt-4 font-heading text-sm font-bold uppercase text-brand-navy">{val.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

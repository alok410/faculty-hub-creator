import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Award,
  Medal,
  Lightbulb,
  Banknote,
  Users,
  CheckCircle2,
  Rocket,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Institutional & Student Achievements | GTU-ITR" },
      {
        name: "description",
        content:
          "Honoring student innovations, SSIP grant recipients, national hackathon winners, and sports laurels at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Institutional & Student Achievements | GTU-ITR" },
      {
        property: "og:description",
        content: "Student innovations, SSIP grants, Ideathon ranks, and sports achievements at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

const STATS = [
  { label: "SSIP Grants", value: "₹2.9 Lakh+", icon: Banknote, desc: "Government innovation funding awarded" },
  { label: "National Ranks", value: "Top 3", icon: Trophy, desc: "GTU Ventures Ideathon pitch fest" },
  { label: "Inter-University", value: "4 Categories", icon: Medal, desc: "All India sports laurels secured" },
  { label: "Faculty Mentors", value: "PhD Guides", icon: Users, desc: "Continuous research & patent support" },
];

const ACHIEVEMENTS = [
  {
    title: "SSIP Grant: ₹1,90,000/- Awarded for 'Vegetable Vending E-Kart'",
    date: "28 April 2025",
    category: "SSIP Innovation Grant",
    badge: "₹1,90,000 Funded",
    recipients: ["Mr. Romansh Thakor", "Mr. Kureshi Mohsin Rza Yasin Khan"],
    department: "Mechanical Engineering",
    mentors: "Dr. Vivek B. Patel & Dr. Lavkumar Kaushik (Supported by Principal Dr. Chirag Vibhakar)",
    description:
      "Selected under the Student Startup and Innovation Policy (SSIP) through Gujarat Technological University. The project designs an ergonomic, solar-assisted electric kart optimizing street vendor mobility and vegetable preservation.",
  },
  {
    title: "SSIP Grant: ₹1,00,000/- for 'Manual Washing Machine for Off-Grid Use'",
    date: "01 August 2025",
    category: "SSIP Innovation Grant",
    badge: "₹1,00,000 Funded",
    recipients: ["Mr. Amro Mohamed Adam Mohamed", "Mr. Ngawang Tshering"],
    department: "Mechanical Engineering",
    mentors: "Dr. Lavkumar Kaushik (Supported by Principal Dr. Chirag Vibhakar)",
    description:
      "Awarded funding for field testing and mechanical optimization of an eco-friendly, electricity-free pedal/lever-operated washing machine designed specifically for remote and off-grid communities.",
  },
  {
    title: "3rd Rank in National-Level Ideathon (Agritech Domain)",
    date: "21 April 2025",
    category: "National Competition",
    badge: "3rd Rank & Cash Prize",
    recipients: ["Mr. Jay Patel"],
    department: "Mechanical Engineering",
    mentors: "Faculty Mentorship Panel, GTU-ITR",
    description:
      "Secured 3rd rank and a cash prize of ₹5,000/- at Ideathon, a national-level startup pitch fest organized by GTU Ventures under the Agritech innovation vertical.",
  },
  {
    title: "GTU Sports: 4 Categories Secured in All India Inter-University Tournament",
    date: "Academic Year 2024-25",
    category: "National Sports",
    badge: "National Laurels",
    recipients: ["GTU-ITR / University Contingent"],
    department: "Sports & Athletics Council",
    mentors: "Physical Education Department & Sports Coaches",
    description:
      "GTU secured 4 categories in the All India Inter University Woodball Tournament 2024 held at JNCT Bhopal, Madhya Pradesh, demonstrating exemplary athleticism.",
  },
  {
    title: "MoU Signed with AIA CSR Foundation for Advanced Training Centre",
    date: "Institutional Milestone",
    category: "Corporate Partnership",
    badge: "Industrial Partnership",
    recipients: ["GTU & AIA CSR Foundation"],
    department: "Centre of Excellence & TPO",
    mentors: "University Leadership & Corporate CSR Board",
    description:
      "Strategic agreement to establish a modern industrial skill development and vocational training facility directly at GTU-ITR Mehsana campus to upskill local youth.",
  },
];

function AchievementsPage() {
  return (
    <PageShell
      title="Institutional & Student Achievements"
      subtitle="Celebrating entrepreneurial innovation, research grants, national competition prizes, and athletic triumphs at GTU-ITR."
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

      {/* Intro Banner */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <Badge className="bg-brand-red uppercase tracking-wider text-white">Innovation &amp; Excellence</Badge>
        <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
          Nurturing Engineers Who Win National Recognition
        </h2>
        <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
        <p className="text-sm leading-relaxed text-foreground/85">
          Through the <strong>Student Startup and Innovation Policy (SSIP)</strong>, Siemens Centre of Excellence, and
          dedicated PhD faculty mentoring, GTU-ITR actively supports engineering students in turning inventive concepts
          into funded prototypes. Here are prominent milestones earned by our students and campus teams.
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Honors &amp; Funded Grants</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge className="bg-brand-navy text-white text-[10px] uppercase font-bold">{ach.category}</Badge>
                  <span className="rounded bg-brand-red/10 px-2.5 py-0.5 text-xs font-bold text-brand-red">
                    {ach.badge}
                  </span>
                </div>

                <h4 className="mt-3 font-heading text-base font-bold leading-snug text-brand-navy">{ach.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">{ach.description}</p>

                <div className="mt-4 border-t border-border/70 pt-3 space-y-1.5 text-xs">
                  <p className="text-foreground/90 font-medium">
                    <strong className="text-brand-navy">Recipient(s):</strong> {ach.recipients.join(", ")}
                  </p>
                  <p className="text-foreground/80">
                    <strong className="text-brand-navy">Department:</strong> {ach.department}
                  </p>
                  <p className="text-foreground/80">
                    <strong className="text-brand-navy">Guidance:</strong> {ach.mentors}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-border/70 pt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-brand-red" /> {ach.date}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-brand-navy">
                  <Sparkles className="h-3.5 w-3.5 text-brand-red" /> Verified Laurel
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Innovation Incubation Box */}
      <div className="mt-12 rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Have a Project Idea?
            </span>
            <h4 className="mt-2 font-heading text-xl font-bold uppercase text-white">
              Apply for SSIP Grants &amp; Startup Mentorship
            </h4>
            <p className="mt-1 text-xs text-white/80 max-w-xl">
              GTU-ITR provides up to ₹2.5 Lakhs in prototyping grants per approved innovative engineering project under
              the Government of Gujarat SSIP scheme.
            </p>
          </div>
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
          >
            Submit Innovation Proposal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

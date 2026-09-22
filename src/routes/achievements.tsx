import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

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

const ACHIEVEMENTS = [
  {
    image: "/site/achievements/ekart.jpg",
    tag: "SSIP Innovation Grant",
    title: "SSIP Grant: ₹1,90,000/- Awarded for 'Vegetable Vending E-Kart'",
    description:
      "Selected under the Student Startup and Innovation Policy (SSIP) through Gujarat Technological University. The project designs an ergonomic, solar-assisted electric kart optimizing street vendor mobility and vegetable preservation.",
    date: "28 April 2025",
    time: "11:00 AM",
    department: "Mechanical Engineering",
  },
  {
    image: "/site/achievements/washing_machine.jpg",
    tag: "SSIP Innovation Grant",
    title: "SSIP Grant: ₹1,00,000/- for 'Manual Washing Machine for Off-Grid Use'",
    description:
      "Awarded funding for field testing and mechanical optimization of an eco-friendly, electricity-free pedal/lever-operated washing machine designed specifically for remote and off-grid communities.",
    date: "01 August 2025",
    time: "02:30 PM",
    department: "Mechanical Engineering",
  },
  {
    image: "/site/achievements/ideathon.jpg",
    tag: "National Competition",
    title: "3rd Rank in National-Level Ideathon (Agritech Domain)",
    description:
      "Secured 3rd rank and a cash prize of ₹5,000/- at Ideathon, a national-level startup pitch fest organized by GTU Ventures under the Agritech innovation vertical.",
    date: "21 April 2025",
    time: "04:00 PM",
    department: "Mechanical Engineering",
  },
  {
    image: "/site/achievements/sports.jpg",
    tag: "National Sports",
    title: "GTU Sports: 4 Categories Secured in All India Inter-University Tournament",
    description:
      "GTU secured 4 categories in the All India Inter University Woodball Tournament 2024 held at JNCT Bhopal, Madhya Pradesh, demonstrating exemplary athleticism.",
    date: "15 January 2025",
    time: "05:30 PM",
    department: "Sports & Athletics Council",
  },
  {
    image: "/site/achievements/mou.jpg",
    tag: "Corporate Partnership",
    title: "MoU Signed with AIA CSR Foundation for Advanced Training Centre",
    description:
      "Strategic agreement to establish a modern industrial skill development and vocational training facility directly at GTU-ITR Mehsana campus to upskill local youth.",
    date: "10 December 2024",
    time: "11:30 AM",
    department: "Centre of Excellence & TPO",
  },
];

function AchievementsPage() {
  return (
    <PageShell
      title="Institutional & Student Achievements"
      subtitle="Celebrating entrepreneurial innovation, research grants, national competition prizes, and athletic triumphs at GTU-ITR."
    >
      {/* Achievement Cards */}
      <div className="space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Honors &amp; Funded Grants</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <img
                    src={ach.image}
                    alt={ach.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  {/* Tag */}
                  <div>
                    <Badge className="bg-brand-navy text-white text-[10px] uppercase font-bold tracking-wider">
                      {ach.tag}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h4 className="mt-3 font-heading text-base font-bold leading-snug text-brand-navy">
                    {ach.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                    {ach.description}
                  </p>

                  {/* Department */}
                  <div className="mt-4 border-t border-border/70 pt-3 text-xs text-foreground/80">
                    <strong className="text-brand-navy">Department:</strong> {ach.department}
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="border-t border-border/70 px-6 py-3 bg-muted/20 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-brand-red" /> {ach.date}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="h-3.5 w-3.5 text-brand-red" /> {ach.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

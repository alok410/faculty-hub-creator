import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Download,
  CheckCircle2,
  Navigation,
} from "lucide-react";

export const Route = createFileRoute("/transportation")({
  head: () => ({
    meta: [
      { title: "Bus Transportation Facility | GTU-ITR" },
      {
        name: "description",
        content:
          "Daily college bus service connecting Ahmedabad, Gandhinagar, Kalol, Mehsana, Patan, and Palanpur to GTU-ITR Mehsana campus.",
      },
      { property: "og:title", content: "Bus Transportation Facility | GTU-ITR" },
      {
        property: "og:description",
        content: "Complete bus routes, pickup points, timings, and route schedules for GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/transportation" },
    ],
    links: [{ rel: "canonical", href: "/transportation" }],
  }),
  component: TransportationPage,
});

const STATS = [
  { label: "Active Routes", value: "5 Routes", icon: Navigation, desc: "Connecting Ahmedabad, Gandhinagar & Regional Hubs" },
  { label: "Pickup Points", value: "60+ Stops", icon: MapPin, desc: "Key junctions, rings & bus stations" },
  { label: "Punctuality", value: "Scheduled", icon: Clock, desc: "Aligned with college timetable" },
];

const ROUTES = [
  {
    number: "Route 01",
    city: "Mehsana Local",
    destination: "GTU-ITR Campus",
    image: "/site/buses/bus-mehsana.jpg",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Mehsana-1.pdf",
    timing: "Departs 08:15 AM | Returns 04:45 PM",
  },
  {
    number: "Route 02",
    city: "Patan Route",
    destination: "GTU-ITR Campus",
    image: "/site/buses/bus-patan.jpg",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Patan-2.pdf",
    timing: "Departs 07:30 AM | Returns 04:45 PM",
  },
  {
    number: "Route 03",
    city: "Palanpur Route",
    destination: "GTU-ITR Campus",
    image: "/site/buses/bus-palanpur.jpg",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Palanpur-3.pdf",
    timing: "Departs 07:15 AM | Returns 04:45 PM",
  },
  {
    number: "Route 04",
    city: "Gandhinagar Route",
    destination: "GTU-ITR Campus",
    image: "/site/buses/bus-gandhinagar.jpg",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Gandhinagar-4.pdf",
    timing: "Departs 07:40 AM | Returns 04:45 PM",
  },
  {
    number: "Route 05",
    city: "Ahmedabad & Kalol Route",
    destination: "GTU-ITR Campus",
    image: "/site/buses/bus-ahmedabad.jpg",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Ahmedabad-5.pdf",
    timing: "Departs 07:20 AM | Returns 04:45 PM",
  },
];

const GUIDELINES = [
  "Bus pass or student identity card is strictly mandatory while boarding and traveling in the institute bus.",
  "Students are requested to arrive at their designated pickup stop at least 5 to 7 minutes before the scheduled time.",
  "Discipline, respectful behavior, and safety norms must be observed at all times on board.",
  "Seat reservation or disruptive behavior is strictly prohibited under institutional regulations.",
  "Any change of pickup route or stop must be formally updated through the Transportation Coordinator.",
];

function TransportationPage() {
  return (
    <PageShell
      title="Bus Transportation Facility"
      subtitle="Dedicated fleet providing safe, reliable, and punctual daily transit across North Gujarat and Ahmedabad-Gandhinagar."
    >
      {/* Top Banner Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-yellow-400 shadow-sm">
              <s.icon className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Intro Overview */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <Badge className="bg-brand-red uppercase tracking-wider text-white">Campus Transit Network</Badge>
        <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
          Comfortable &amp; Safe Commute for Students and Staff
        </h2>
        <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
        <p className="text-sm leading-relaxed text-foreground/85">
          GTU-ITR operates a full-fledged transportation facility with a modern bus fleet ensuring convenient daily
          transportation for students and faculty from <strong>Gandhinagar, Ahmedabad, Kalol, Mehsana, Palanpur, and Patan</strong>.
          Every vehicle is maintained under strict safety regulations, driven by certified commercial drivers, and timed to
          seamlessly coordinate with morning prayer, lectures, and evening laboratory departures.
        </p>
      </div>

      {/* 5 Route Cards */}
      <div className="space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Official Bus Routes &amp; Fleet</h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-lg"
            >
              {/* Bus Photo */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={route.image}
                  alt={`${route.city} Bus - ${route.number}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-md bg-brand-navy px-2.5 py-1 font-heading text-xs font-bold uppercase tracking-wider text-white shadow">
                    {route.number}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-brand-red shadow">
                    <Clock className="h-3 w-3" /> Scheduled
                  </span>
                </div>
              </div>

              {/* Main Route Details */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h4 className="font-heading text-lg font-bold text-brand-navy">{route.city}</h4>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{route.timing}</p>
                  <p className="mt-1.5 text-xs text-foreground/80">
                    Destination: <span className="font-semibold text-brand-navy">{route.destination}</span>
                  </p>
                </div>

                <div className="mt-5 border-t border-border/70 pt-4">
                  <a
                    href={route.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-brand-red"
                  >
                    <Download className="h-4 w-4" /> Download Route Sheet (PDF)
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guidelines */}
      <div className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold uppercase text-brand-navy">
          <ShieldCheck className="h-5 w-5 text-brand-red" /> Transportation Rules &amp; Discipline
        </h3>
        <div className="mb-6 mt-2 h-0.5 w-12 bg-brand-red" />
        <div className="grid gap-3 sm:grid-cols-2">
          {GUIDELINES.map((g, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-border/60 bg-brand-surface/30 p-3.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              <p className="text-xs leading-relaxed text-foreground/90">{g}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

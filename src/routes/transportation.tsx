import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Bus,
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
  Download,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
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
  { label: "Active Routes", value: "5 Routes", icon: Navigation, desc: "Covering 6 North Gujarat districts" },
  { label: "Pickup Points", value: "60+ Stops", icon: MapPin, desc: "Key junctions, rings & bus stations" },
  { label: "Transit Safety", value: "100% GPS", icon: ShieldCheck, desc: "Speed governors & CCTV monitored" },
  { label: "Punctuality", value: "Scheduled", icon: Clock, desc: "Aligned with college timetable" },
];

const ROUTES = [
  {
    number: "Route 01",
    city: "Mehsana Local",
    destination: "GTU-ITR Campus",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Mehsana-1.pdf",
    stops: [
      "Mehsana Railway Station",
      "Modhera Cross Roads",
      "Radhanpur Circle",
      "Nagani Patiya",
      "Wide Angle Cinema",
      "Shreeji Complex",
      "Mevad Toll-booth Campus",
    ],
    timing: "Departs 08:15 AM | Returns 04:45 PM",
  },
  {
    number: "Route 02",
    city: "Patan Route",
    destination: "GTU-ITR Campus",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Patan-2.pdf",
    stops: [
      "Patan Bus Port",
      "Hemchandracharya North Gujarat University Gate",
      "Hansapur Char Rasta",
      "Siddhpur Highway Cross",
      "Unjha Circle",
      "Mehsana Bypass",
      "GTU-ITR Campus",
    ],
    timing: "Departs 07:30 AM | Returns 04:45 PM",
  },
  {
    number: "Route 03",
    city: "Palanpur Route",
    destination: "GTU-ITR Campus",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Palanpur-3.pdf",
    stops: [
      "Palanpur Aroma Circle",
      "Ganeshpura Char Rasta",
      "Kanodar Highway",
      "Chhapi Cross Roads",
      "Siddhpur Highway Bypass",
      "Brahmanwada",
      "GTU-ITR Campus",
    ],
    timing: "Departs 07:15 AM | Returns 04:45 PM",
  },
  {
    number: "Route 04",
    city: "Gandhinagar Route",
    destination: "GTU-ITR Campus",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Gandhinagar-4.pdf",
    stops: [
      "Sector 11 (Ch-3 Circle)",
      "Sector 21 City Bus Station",
      "Gh-5 Circle",
      "Kudasan Cross Roads",
      "Pethapur Cross",
      "Mansa Highway",
      "GTU-ITR Campus",
    ],
    timing: "Departs 07:40 AM | Returns 04:45 PM",
  },
  {
    number: "Route 05",
    city: "Ahmedabad & Kalol Route",
    destination: "GTU-ITR Campus",
    pdf: "https://gtuitr.gtu.ac.in/gperiVer2/img/transportation/Ahmedabad-5.pdf",
    stops: [
      "RTO Circle / Subhash Bridge",
      "Visat Circle (Chandkheda)",
      "Motera Cross Road",
      "Adalaj Trimandir",
      "Kalol Highway",
      "Chhatral GIDC Cross",
      "Nandasan",
      "Mevad Toll-booth Campus",
    ],
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

      {/* Intro Overview */}
      <div className="mb-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <Badge className="bg-brand-red uppercase tracking-wider text-white">North Gujarat Transit Network</Badge>
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
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Official Bus Routes &amp; Pickup Points</h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-brand-navy px-2.5 py-1 text-xs font-bold uppercase text-white">
                    {route.number}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-brand-red">
                    <Clock className="h-3 w-3" /> Scheduled
                  </span>
                </div>

                <h4 className="mt-3 font-heading text-lg font-bold text-brand-navy">{route.city}</h4>
                <p className="text-xs font-medium text-muted-foreground">{route.timing}</p>

                <div className="mt-4 border-t border-border/70 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Major Pickup Points:</p>
                  <ul className="mt-2 space-y-1.5">
                    {route.stops.map((stop, sidx) => (
                      <li key={sidx} className="flex items-start gap-2 text-xs text-foreground/85">
                        <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-brand-red" />
                        <span>{stop}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-border/70 pt-4">
                <a
                  href={route.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-navy/30 bg-brand-surface py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                >
                  <Download className="h-3.5 w-3.5" /> Download Route Sheet (PDF)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guidelines & Registration */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h3 className="flex items-center gap-2 font-heading text-lg font-bold uppercase text-brand-navy">
            <ShieldCheck className="h-5 w-5 text-brand-red" /> Transportation Rules &amp; Discipline
          </h3>
          <div className="mb-6 mt-2 h-0.5 w-12 bg-brand-red" />
          <div className="grid gap-3">
            {GUIDELINES.map((g, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-border/60 bg-brand-surface/30 p-3.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <p className="text-xs leading-relaxed text-foreground/90">{g}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Pass Application Card */}
        <div className="flex flex-col justify-between rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Pass Registration
            </span>
            <h4 className="mt-3 font-heading text-base font-bold uppercase text-white">Apply for Bus Pass</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              Semester bus passes are issued at the beginning of each academic term through the institutional transport office.
            </p>

            <div className="mt-6 border-t border-white/10 pt-4 space-y-3 text-xs">
              <div>
                <p className="font-bold text-white/70 uppercase text-[10px]">Transport Incharge:</p>
                <p className="text-white font-medium mt-0.5">GTU-ITR Administrative Block</p>
              </div>
              <div>
                <p className="font-bold text-white/70 uppercase text-[10px]">Telephone / Desk:</p>
                <p className="text-white font-medium mt-0.5">+91-9909039233</p>
              </div>
              <div>
                <p className="font-bold text-white/70 uppercase text-[10px]">Email Queries:</p>
                <p className="text-white font-medium mt-0.5">admission_gperi@gtu.edu.in</p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4">
            <Link
              to="/enquiry"
              className="block w-full rounded-lg bg-brand-red py-3 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-brand-navy"
            >
              Enquire for Bus Seat <ArrowRight className="inline-block ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

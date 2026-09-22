import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import {
  GraduationCap,
  Mail,
  Globe,
  Calendar,
  Clock,
  FileText,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni Connect, Events & Testimonials | GTU-ITR" },
      {
        name: "description",
        content:
          "GTU-ITR Alumni Association. Professional networking, upcoming alumni events, reunions, and inspiring graduate testimonials.",
      },
      { property: "og:title", content: "Alumni Connect, Events & Testimonials | GTU-ITR" },
      {
        property: "og:description",
        content: "Re-connect, network, and celebrate alumni events and testimonials at GTU-ITR.",
      },
      { property: "og:url", content: "/alumni" },
    ],
    links: [{ rel: "canonical", href: "/alumni" }],
  }),
  component: AlumniPage,
});

const STATS = [
  { label: "Graduated Alumni", value: "3,000+", icon: GraduationCap, desc: "Working across India & globally" },
  { label: "Corporate Footprint", value: "150+ Cos", icon: Globe, desc: "In top MNCs, tech & PSUs" },
  { label: "Alumni Meets", value: "Annual Meets", icon: Calendar, desc: "Reunions, workshops & expert talks" },
  { label: "Alumni Desk", value: "Dedicated", icon: Mail, desc: "alumni@gperi.ac.in" },
];

const ALUMNI_EVENTS = [
  {
    photo: "/site/x4.jpg",
    title: "Annual Alumni Homecoming & Grand Reunion 2025",
    description:
      "A grand annual gathering bringing together past batches of GTU-ITR engineering alumni from across India and abroad to reconnect with faculty, tour modernized laboratories, and mentor current students.",
    date: "18 October 2025",
    time: "10:00 AM – 04:30 PM",
  },
  {
    photo: "/site/x6.jpeg",
    title: "Star Alumni Masterclass: AI & Industry 4.0 in Global MNCs",
    description:
      "Interactive technical masterclass and keynote delivered by distinguished alumni working at multinational tech leaders, focusing on cloud architecture, AI workflows, and campus placement prep.",
    date: "22 November 2025",
    time: "02:00 PM – 05:00 PM",
  },
  {
    photo: "/site/achievements/mou.jpg",
    title: "Alumni Entrepreneurship Summit & Angel Mentorship",
    description:
      "Alumni startup founders and industry leaders evaluate student innovation prototypes, provide seed guidance, and offer direct internship opportunities to budding engineers.",
    date: "15 January 2026",
    time: "11:00 AM – 03:30 PM",
  },
];

const TESTIMONIALS = [
  {
    photo: "/placed-students/jay-gupta.png",
    title: "Gupta Jay • Software Engineer",
    description:
      "Best college in Mehsana district. I got placed in my final year with an MNC, and I owe it all to the training and support provided by the college. The tie-ups with Odoo, Bitscape and other leaders give students a real career launchpad.",
    date: "12 May 2024",
    time: "11:30 AM",
  },
  {
    photo: "/placed-students/sankalp-chhunchha.png",
    title: "Sankalp Chhunchha • Software Developer at Odoo",
    description:
      "The Siemens Centre of Excellence and practical coding hackathons gave me a strong edge during technical interviews. The faculty guidance at GTU-ITR prepared me to step confidently into a global software career.",
    date: "20 June 2024",
    time: "03:15 PM",
  },
  {
    photo: "/placed-students/kashyap-patel.png",
    title: "Kashyap Patel • Associate Engineer at Odoo",
    description:
      "The Kaushalya cultural fest, technical symposiums, and supportive campus atmosphere created memories of a lifetime. Highly grateful to GTU-ITR professors who mentored us beyond standard textbooks.",
    date: "14 August 2024",
    time: "02:00 PM",
  },
];

function AlumniPage() {
  return (
    <PageShell
      title="GTU-ITR Alumni Connect"
      subtitle="Re-connecting graduates, celebrating reunions, and cultivating a lasting culture of mentorship and shared success."
    >
      {/* Top Banner Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-yellow-400 shadow-sm">
              <s.icon className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Alumni Events Section */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Alumni Events &amp; Reunions</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Upcoming and flagship gatherings connecting alumni with campus and peers.
          </p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ALUMNI_EVENTS.map((evt, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                {/* Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img
                    src={evt.photo}
                    alt={evt.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  {/* Title */}
                  <h4 className="font-heading text-base font-bold leading-snug text-brand-navy">
                    {evt.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                    {evt.description}
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="border-t border-border/70 px-5 py-3 bg-muted/20 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-brand-red" /> {evt.date}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="h-3.5 w-3.5 text-brand-red" /> {evt.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Voices of Our Alumni</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Inspiring journeys and testimonials shared by GTU-ITR graduates worldwide.
          </p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                {/* Photo */}
                <div className="relative h-52 w-full overflow-hidden bg-muted/40">
                  <img
                    src={t.photo}
                    alt={t.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  {/* Title */}
                  <h4 className="font-heading text-base font-bold leading-snug text-brand-navy">
                    {t.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-foreground/80 italic">
                    &quot;{t.description}&quot;
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="border-t border-border/70 px-5 py-3 bg-muted/20 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-brand-red" /> {t.date}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="h-3.5 w-3.5 text-brand-red" /> {t.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download LOR Template Section */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-yellow-400 shadow-sm">
            <FileText className="h-6 w-6 text-yellow-400" />
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold uppercase text-brand-navy">
              Letter of Recommendation (LOR) Template
            </h4>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-xl">
              Alumni applying for international master&apos;s programs, higher studies, or corporate endorsements can download the official GTU-ITR recommendation letter template format.
            </p>
          </div>
        </div>

        <a
          href="/docs/gtu-itr-lor-template.pdf"
          download="GTU_ITR_LOR_Template.pdf"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-navy px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-red"
        >
          <Download className="h-4 w-4 text-yellow-400" />
          Download LOR Template
        </a>
      </div>
    </PageShell>
  );
}

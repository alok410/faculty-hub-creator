import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  HeartHandshake,
  FileCheck,
  Mail,
  Phone,
  Search,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni Connect & Services | GTU-ITR" },
      {
        name: "description",
        content:
          "GTU-ITR Alumni Association. Professional networking, transcript verification, 'Trace a Friend' reunion service, and Star Alumni mentorship.",
      },
      { property: "og:title", content: "Alumni Connect & Services | GTU-ITR" },
      {
        property: "og:description",
        content: "Re-connect, network, and give back with the GTU-ITR Alumni community.",
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
  { label: "Services Offered", value: "Transcripts", icon: FileCheck, desc: "Degree verification & friend-tracing" },
  { label: "Alumni Desk", value: "Dedicated", icon: Mail, desc: "alumni@gperi.ac.in" },
];

const SERVICES = [
  {
    title: "Degree Verification & Official Transcripts",
    desc: "Fast-track academic qualification verification and official university transcript issuance for higher studies abroad, WES evaluation, or employer background checks.",
    icon: FileCheck,
    action: "Contact Student Records Office",
  },
  {
    title: "'Trace a Friend' & Reunion Assistance",
    desc: "Lost touch with your college batchmates? The Alumni Office acts as a trusted bridge to reconnect registered alumni and coordinate unforgettable batch reunions.",
    icon: Search,
    action: "Email alumni@gperi.ac.in",
  },
  {
    title: "Star Alumni Career Mentorship",
    desc: "Alumni return as guest lecturers, startup mentors, and mock interviewers to inspire current engineering students and share evolving industry best practices.",
    icon: Award,
    action: "Join Mentorship Panel",
  },
  {
    title: "Giving Back to GTU-ITR",
    desc: "Contribute time, expertise, educational books, software licenses, or laboratory equipment to support undergraduate research and student welfare.",
    icon: HeartHandshake,
    action: "Partner with Alma Mater",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Best college in Mehsana district. I got placed in my final year with an MNC, and I owe it all to the training and support provided by the college. The tie-ups with Odoo, Bitscape and other leaders give students a real career launchpad.",
    name: "Gupta Jay",
    role: "Software Engineer • Mechanical Alumnus",
  },
  {
    quote:
      "The Kaushalya cultural fest and Shaurya sports meet created memories of a lifetime. The faculty members never hesitated to guide us, whether for university exams or project hackathons.",
    name: "Yusuf Abdirahman",
    role: "International Alumnus • Batch of 2023",
  },
  {
    quote:
      "The Minor Degree curriculum and Siemens Centre of Excellence gave me a distinct edge during technical interviews. I am proud to be a GTU-ITR alumnus.",
    name: "Daniel Rakotoarisoa",
    role: "Design Engineer • Mechanical Alumnus",
  },
];

function AlumniPage() {
  return (
    <PageShell
      title="GTU-ITR Alumni Connect"
      subtitle="Re-connecting graduates, expanding global professional networks, and cultivating a lasting culture of giving back to our alma mater."
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
            <Badge className="bg-brand-red uppercase tracking-wider text-white">Global Network</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Welcome to the GTU-ITR Alumni Association
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-red"
          >
            Register on Alumni Portal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          GTU-ITR Alumni Connect allows you to both re-connect with old classmates as well as leverage the trusted
          GTU-ITR environment to expand your professional horizons. Our alumni community spans leading multinational
          corporations, innovative tech startups, civil services, and top graduate research institutions across the world.
        </p>
      </div>

      {/* Services for Alumni */}
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Dedicated Alumni Services</h3>
          <p className="mt-1 text-xs text-muted-foreground">Support tailored for our graduate community.</p>
          <div className="mt-2 mb-4 h-1 w-12 bg-brand-red" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <srv.icon className="h-5 w-5 text-brand-red" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-brand-navy">{srv.title}</h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/80">{srv.desc}</p>
              </div>

              <div className="mt-5 border-t border-border/70 pt-3 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-navy">{srv.action}</span>
                <span className="text-brand-red font-medium">alumni@gperi.ac.in</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Testimonials & Memories */}
      <div className="mb-12 space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Voices of Our Alumni</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm">
              <blockquote className="text-xs italic leading-relaxed text-foreground/85">
                &quot;{t.quote}&quot;
              </blockquote>
              <div className="mt-4 border-t border-border pt-3">
                <p className="font-heading text-sm font-bold text-brand-navy">{t.name}</p>
                <p className="text-[11px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Alumni Desk */}
      <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm md:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Connect With Us
            </span>
            <h4 className="mt-2 font-heading text-lg font-bold uppercase text-white">Alumni Relations Cell</h4>
            <p className="mt-1 text-xs text-white/80">
              Reach out for reunions, transcript assistance, or star alumni speaker registrations.
            </p>
          </div>
          <div className="space-y-1.5 text-xs text-white/90">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-red" /> alumni@gperi.ac.in
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-red" /> admission_gperi@gtu.edu.in
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
              Update Alumni Profile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

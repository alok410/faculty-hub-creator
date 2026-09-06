import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  ShieldAlert,
  IdCard,
  HardHat,
  Smartphone,
  Home,
  CheckCircle2,
  AlertOctagon,
  Clock,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/regulations")({
  head: () => ({
    meta: [
      { title: "Institutional Regulations & Code of Discipline | GTU-ITR" },
      {
        name: "description",
        content:
          "Statutory Regulations 1, 2, and 3 governing student conduct, attendance, dress code, vehicle safety, mobile restrictions, and hostel discipline at GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Institutional Regulations & Code of Discipline | GTU-ITR" },
      {
        property: "og:description",
        content: "Statutory student code of conduct, campus discipline rules, and hostel guidelines at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/regulations" },
    ],
    links: [{ rel: "canonical", href: "/regulations" }],
  }),
  component: RegulationsPage,
});

const MANDATORY_HIGHLIGHTS = [
  { label: "Valid Identity Card", desc: "Must be worn and produced on demand at all times", icon: IdCard },
  { label: "Helmet Safety", desc: "Compulsory for all two-wheeler riders to & from campus", icon: HardHat },
  { label: "Classroom Mobile Ban", desc: "Strictly prohibited inside classrooms, labs & corridors", icon: Smartphone },
  { label: "Zero Substance Policy", desc: "Strict prohibition of alcohol, tobacco & intoxicants", icon: AlertOctagon },
];

const DEFINITIONS = [
  { term: "Student", meaning: "A student admitted in the Institution at any level (Diploma, Under-graduate, Post-graduate)." },
  { term: "Institution", meaning: "Gujarat Technological University - Institute of Technology & Research (GTU-ITR), Mehsana." },
  { term: "Head of the Institution", meaning: "The Principal, Director, or executive officer heading the institute." },
  { term: "Chairman", meaning: "The Chairman of the Board of Governors (BoG) of the Institute." },
  { term: "Hostel", meaning: "The student residential facilities managed or recognized by the Institute." },
  { term: "Term / Semester", meaning: "A portion of an academic year coinciding with a semester as decreed by GTU, Ahmedabad." },
  { term: "Ragging", meaning: "Any disorderly conduct, words, or rowdy activity causing hardship, fear, or psychological harm to any student." },
];

const DISCIPLINE_RULES = [
  "Every student must carry his/her official College Identity Card, which must be presented whenever demanded by faculty or security.",
  "Mandatory punctual attendance in classes, laboratories, tutorials, and morning assemblies on all working days from term start to finish.",
  "Absence due to medical grounds must be accompanied by a recognized medical certificate and parental leave application submitted promptly.",
  "Students are expected to behave politely, respect the faculty and staff, and abstain from disruptive chattering during lecture sessions.",
  "Use of helmets is strictly compulsory for anyone riding a two-wheeler to and from the campus gates.",
  "Decent, professional attire must be worn by all students visiting academic blocks and laboratories.",
  "Use of mobile phones is strictly prohibited inside lecture halls, tutorial rooms, laboratories, and departmental corridors.",
  "Possession or consumption of liquor, narcotics, intoxicating substances, cigarettes, pan, tobacco, or gutkha is strictly prohibited.",
  "Any unauthorized photography, video shooting, or playing of amplified sound on campus without prior Principal sanction is banned.",
  "Causing damage or defacement to institute buildings, computers, lab gear, or bus property warrants immediate financial penalty and suspension.",
  "Misuse of campus internet, intranet, computing resources, or software licenses is strictly penalized under institutional IT bylaws.",
];

const HOSTEL_RULES = [
  "As the hostels are situated directly on campus, residents are expected to conduct themselves in a manner ensuring peace and zero inconvenience.",
  "Complete discipline must be maintained; no destructive or wasteful use of water, electricity, appliances, or hostel furniture.",
  "Residents are held individually and collectively liable for any property damage and must pay restitution as assessed by management.",
  "Every student must respect the privacy and peaceful study atmosphere of fellow residents; noisy gatherings and late-night disturbances are prohibited.",
  "Strict prohibition of unauthorized visitors or day-scholars inside hostel rooms; all guests must register at the warden checkpoint.",
  "Observance of strict curfew hours for campus entry and departure as established by the hostel warden and rector.",
];

function RegulationsPage() {
  return (
    <PageShell
      title="Institutional Regulations & Discipline"
      subtitle="Statutory code of conduct governing campus decorum, student safety, academic integrity, and hostel residence at GTU-ITR Mehsana."
    >
      {/* 4 Highlights Bar */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MANDATORY_HIGHLIGHTS.map((h, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-primary-foreground">
              <h.icon className="h-6 w-6 text-brand-red" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-brand-navy">{h.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Layout */}
      <Tabs defaultValue="reg2" className="w-full">
        <div className="mb-8 rounded-xl border border-brand-navy/20 bg-brand-navy p-2 shadow-md">
          <TabsList className="grid w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-3">
            <TabsTrigger
              value="reg2"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Regulation 2: Campus Discipline
            </TabsTrigger>
            <TabsTrigger
              value="reg3"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Regulation 3: Hostel Norms
            </TabsTrigger>
            <TabsTrigger
              value="reg1"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Regulation 1: Definitions
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab: Regulation 2 */}
        <TabsContent value="reg2" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Statutory Regulation 2</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Rules of Discipline to be Observed In &amp; Outside Campus
            </h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            <p className="text-sm leading-relaxed text-foreground/85">
              All students admitted to the Institute must observe and strictly abide by the rules prescribed by the
              authorities. Students submit to the disciplinary jurisdiction of the Chairman, Director, Principal, and
              academic council.
            </p>

            <div className="mt-8 space-y-3">
              {DISCIPLINE_RULES.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5 transition-colors hover:border-brand-navy/30"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <p className="text-xs leading-relaxed text-foreground/90">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab: Regulation 3 */}
        <TabsContent value="reg3" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Statutory Regulation 3</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Hostel Code of Conduct &amp; Living Norms
            </h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />
            <p className="text-sm leading-relaxed text-foreground/85">
              The on-campus residential community is designed to provide a serene, studious environment for outstation
              students. Residents are required to observe highest standards of mutual respect and institutional care.
            </p>

            <div className="mt-8 space-y-3">
              {HOSTEL_RULES.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-border/70 bg-brand-surface/30 p-3.5 transition-colors hover:border-brand-navy/30"
                >
                  <Home className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <p className="text-xs leading-relaxed text-foreground/90">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab: Regulation 1 */}
        <TabsContent value="reg1" className="space-y-8 focus-visible:outline-none">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Statutory Regulation 1</Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Institutional Terminology &amp; Definitions
            </h2>
            <div className="mb-6 mt-2 h-1 w-16 bg-brand-red" />

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-brand-navy text-white uppercase text-[11px]">
                  <tr>
                    <th className="p-3.5 w-1/4">Term</th>
                    <th className="p-3.5">Official Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {DEFINITIONS.map((d, idx) => (
                    <tr key={idx} className="hover:bg-brand-surface/50 transition-colors">
                      <td className="p-3.5 font-bold text-brand-navy">{d.term}</td>
                      <td className="p-3.5 text-foreground/85 leading-relaxed">{d.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}

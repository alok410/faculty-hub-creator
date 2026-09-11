import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FacultyTabContent } from "@/components/site/FacultyTabContent";
import { FACULTY_DATA, getDepartmentStaffCount } from "@/content/faculty";
import {
  Atom,
  Languages,
  Calculator,
  FlaskConical,
  BookOpen,
  CheckCircle2,
  Layers,
  Users,
  Award,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Smile,
} from "lucide-react";

export const Route = createFileRoute("/academics/diploma/humanities")({
  head: () => ({
    meta: [
      { title: "Humanities & Sciences (Diploma) | GTU-ITR" },
      {
        name: "description",
        content:
          "Department of Humanities and Sciences (Diploma Wing) at GTU-ITR Mehsana. Foundational mathematics, applied physics, chemistry, and English language communication for 10th-pass diploma students.",
      },
      { property: "og:title", content: "Humanities & Sciences (Diploma) | GTU-ITR" },
      {
        property: "og:description",
        content:
          "Polytechnic foundational science, mathematics, language mentoring, and academic induction at GTU-ITR.",
      },
      { property: "og:url", content: "/academics/diploma/humanities" },
    ],
    links: [{ rel: "canonical", href: "/academics/diploma/humanities" }],
  }),
  component: DiplomaHumanitiesPage,
});

const STATS = [
  { label: "Target Cohort", value: "10th Pass Diploma", icon: GraduationCap, desc: "Foundations for polytechnic entrants" },
  { label: "Core Focus", value: "Maths, Phys, Chem, Eng", icon: Atom, desc: "Bridge from school to engineering" },
  { label: "Bilingual Bridge", value: "Vernacular to English", icon: Languages, desc: "Special English bridge mentoring" },
  { label: "Practical Work", value: "Interactive Labs", icon: FlaskConical, desc: "Hands-on basic sciences" },
];

const LABS = [
  {
    name: "Diploma Applied Physics Lab",
    desc: "Foundational experiments with Vernier calipers, micrometer screw gauges, spherometers, simple pendulums, resonance tubes, and prism spectrometers.",
    tools: ["Vernier & Micrometers", "Spectrometers", "Simple Pendulums", "Surface Tension Kits", "Convex/Concave Lenses"],
  },
  {
    name: "Diploma Applied Chemistry Lab",
    desc: "Introductory chemical analysis, acid-base volumetric titrations, determination of water hardness, and study of corrosion prevention coatings.",
    tools: ["Burette & Pipette Titration Rigs", "Digital pH Meters", "Chemical Balances", "Salt Analysis Trays", "Corrosion Sample Coupons"],
  },
  {
    name: "Language & Basic Communication Room",
    desc: "Listening comprehension, basic conversational practice, vocabulary building, and presentation skills tailored for vernacular students.",
    tools: ["Multimedia Listening Desks", "Audio Language Modules", "Grammar Drills Software", "Pronunciation Guides"],
  },
];

const COURSES = [
  {
    sem: "Semester 1 (Autumn)",
    subjects: [
      "Mathematics I (Algebra & Trigonometry)",
      "Applied Physics (Mechanics, Optics & Sound)",
      "Communication Skills in English I",
      "Environmental Sustainability & Clean Campus",
    ],
  },
  {
    sem: "Semester 2 (Spring)",
    subjects: [
      "Mathematics II (Calculus & Coordinate Geometry)",
      "Applied Chemistry (Water, Metals & Polymers)",
      "Communication Skills in English II (Writing & Speaking)",
      "Professional Ethics & Universal Values",
    ],
  },
];

function DiplomaHumanitiesPage() {
  return (
    <PageShell
      title="Humanities & Sciences (Diploma)"
      subtitle="Guiding fresh 10th-standard school graduates into the world of polytechnic engineering through accessible mathematics, experimental science, and English language confidence."
    >
      {/* Top Banner Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-brand-navy/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-navy">{s.label}</div>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="w-full space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-muted/60 p-1.5 md:grid-cols-5">
          <TabsTrigger value="overview" className="py-2.5 font-medium">Department Role</TabsTrigger>
          <TabsTrigger value="faculty" className="py-2.5 font-medium">Staff Members ({getDepartmentStaffCount("diploma-humanities")})</TabsTrigger>
          <TabsTrigger value="bridge" className="py-2.5 font-medium">Bridge Course &amp; Mentoring</TabsTrigger>
          <TabsTrigger value="curriculum" className="py-2.5 font-medium">1st Year Syllabus</TabsTrigger>
          <TabsTrigger value="labs" className="py-2.5 font-medium">Foundational Labs</TabsTrigger>
        </TabsList>

        {/* 1. OVERVIEW */}
        <TabsContent value="overview" className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Bridging School to Engineering</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Entering a polytechnic diploma programme straight after the 10th Standard (SSC) is an exciting yet challenging leap for young teenagers. The Department of Humanities and Sciences (Diploma Wing) at GTU-ITR exists to make this transition gentle, confident, and highly inspiring.
              </p>
              <p>
                Our specialized faculty teach fundamental applied physics, chemistry, and mathematics with real-life engineering context, showing students how trigonometry relates to civil surveying, how basic chemical reactions explain corrosion in mechanical pipes, and how circuit equations stem from linear algebra.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Smile className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Warm Student Induction</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dedicated 2-week induction program with campus orientation, mentor teacher allocation, and study skill sessions.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Languages className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Vernacular Support</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bilingual explanation in Gujarati and Hindi alongside standard English terminology helps every student grasp tough technical terms.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-brand-surface/50 p-5">
                <div className="flex items-center gap-2 font-bold text-brand-navy mb-2">
                  <Sparkles className="h-5 w-5 text-brand-red shrink-0" />
                  <h4>Remedial Coaching</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Special zero-hour remedial classes for students needing extra practice in basic algebra and trigonometry.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 2. FACULTY MEMBERS */}
        <TabsContent value="faculty" className="focus-visible:outline-none">
          <FacultyTabContent
            departmentTitle="Humanities & Sciences (Diploma)"
            teachingFaculty={FACULTY_DATA["diploma-humanities"].teaching}
            technicalStaff={FACULTY_DATA["diploma-humanities"].technical}
          />
        </TabsContent>

        {/* 3. BRIDGE COURSE */}
        <TabsContent value="bridge" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Bridge Course &amp; Student Mentorship</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-6">
              Because diploma entrants arrive from varied educational backgrounds across North Gujarat (state board, CBSE, Gujarati medium, English medium), we operate a structured bridge curriculum during the first month.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-border p-4 bg-card">
                <div className="font-semibold text-brand-navy text-sm mb-1">1. Mathematics Bridge Module</div>
                <p className="text-xs text-muted-foreground">
                  Refresher in indices, fractions, quadratic equations, Cartesian coordinates, and basic trigonometry (sin, cos, tan rules).
                </p>
              </div>
              <div className="rounded-xl border border-border p-4 bg-card">
                <div className="font-semibold text-brand-navy text-sm mb-1">2. English Spoken Fluency &amp; Vocabulary</div>
                <p className="text-xs text-muted-foreground">
                  Phonics, everyday conversational greetings, reading technical drawing notes, and writing concise workshop logs.
                </p>
              </div>
              <div className="rounded-xl border border-border p-4 bg-card">
                <div className="font-semibold text-brand-navy text-sm mb-1">3. Personal Faculty Counselor (Proctor Scheme)</div>
                <p className="text-xs text-muted-foreground">
                  Every batch of 20 diploma students is assigned a dedicated faculty proctor who monitors attendance, academic progress, and stays in regular contact with parents.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 3. CURRICULUM */}
        <TabsContent value="curriculum" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-brand-navy">First-Year Diploma Teaching Scheme</h2>
                <p className="text-sm text-muted-foreground mt-1">Prescribed by Gujarat Technological University (GTU) for all diploma branches.</p>
              </div>
              <Badge variant="outline" className="border-brand-navy/30 text-brand-navy self-start md:self-auto px-3 py-1">
                Common to All Diploma Branches
              </Badge>
            </div>
            <div className="mb-6 h-1 w-16 bg-brand-red rounded-full" />

            <div className="grid gap-6 md:grid-cols-2">
              {COURSES.map((cGroup, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy mb-3 text-base border-b border-border pb-2">
                    <BookOpen className="h-4 w-4 text-brand-red" />
                    <h4>{cGroup.sem}</h4>
                  </div>
                  <ul className="space-y-2">
                    {cGroup.subjects.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* 4. LABS */}
        <TabsContent value="labs" className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy">Dedicated Diploma Laboratories</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red rounded-full" />
            <p className="text-sm text-muted-foreground mb-8">
              Students conduct hands-on experiments directly related to their course syllabus in small batches under the guidance of faculty and lab assistants.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {LABS.map((lab, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-brand-navy text-sm mb-2">
                    <Atom className="h-4 w-4 text-brand-red shrink-0" />
                    <h3>{lab.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{lab.desc}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground mb-2 uppercase tracking-wider">Apparatus:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {lab.tools.map((tool, tIdx) => (
                        <Badge key={tIdx} variant="secondary" className="text-[10px] font-normal px-2 py-0.5">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links Banner */}
            <div className="mt-8 rounded-xl bg-brand-surface p-5 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-foreground text-sm">Explore Diploma Engineering Branches</div>
                <div className="text-xs text-muted-foreground">Computer, Mechanical, Civil, and Electrical Engineering diplomas after 10th.</div>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/admissions/diploma"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-navy px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-navy/90 transition-colors"
                >
                  <span>Diploma Admissions</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}

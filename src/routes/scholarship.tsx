import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  ExternalLink,
  Award,
  CheckCircle2,
  Calendar,
  Building2,
  Sparkles,
  IndianRupee,
} from "lucide-react";

export const Route = createFileRoute("/scholarship")({
  head: () => ({
    meta: [
      { title: "Scholarships & Financial Aid | GTU-ITR" },
      {
        name: "description",
        content:
          "Explore government, state, AICTE, and institutional scholarship schemes available to students at GTU-ITR Mehsana: MYSY, Digital Gujarat, AICTE Pragati, Saksham, and TFWS.",
      },
      { property: "og:title", content: "Scholarships & Financial Aid | GTU-ITR" },
      {
        property: "og:description",
        content: "Complete list of latest and regular scholarship opportunities for engineering students at GTU-ITR.",
      },
      { property: "og:url", content: "/scholarship" },
    ],
    links: [{ rel: "canonical", href: "/scholarship" }],
  }),
  component: ScholarshipPage,
});

const STATS = [
  { label: "Annual Aid", value: "₹1.5+ Cr", icon: IndianRupee, desc: "Disbursed through Govt & AICTE schemes" },
  { label: "Beneficiaries", value: "800+ Students", icon: GraduationCap, desc: "Supported across all departments" },
  { label: "Full Tuition Waivers", value: "TFWS 100%", icon: Award, desc: "Supernumerary ACPC quota seats" },
  { label: "Dedicated Desk", value: "Student Section", icon: Building2, desc: "Guidance for verification & portals" },
];

const LATEST_SCHOLARSHIPS = [
  {
    title: "Mukhyamantri Yuva Swavalamban Yojana (MYSY) 2025-26",
    tag: "State Government",
    badge: "Active Window",
    benefit: "50% of Tuition Fee (up to ₹50,000/yr) + ₹12,000/yr Hostel & Book Grant",
    eligibility:
      "Gujarat domicile students securing 80+ percentile in 12th Science / 65%+ in Diploma-to-Degree (D2D), with annual family income up to ₹6,00,000/-.",
    portal: "MYSY Gujarat Portal (mysy.guj.nic.in)",
    url: "https://mysy.guj.nic.in",
    documents: "Income Certificate, HSC/Diploma Marksheet, Admission Letter, Bank Passbook, Fee Receipt.",
  },
  {
    title: "National Scholarship Portal (NSP) Central Schemes 2025-26",
    tag: "Central Government / MoE",
    badge: "Fresh & Renewal Open",
    benefit: "₹20,000 to ₹50,000 per annum + Maintenance Allowances",
    eligibility:
      "Meritorious students from minority communities, central sector schemes for university students, and students with benchmark disabilities.",
    portal: "National Scholarship Portal (scholarships.gov.in)",
    url: "https://scholarships.gov.in",
    documents: "Aadhaar Card, Previous Year Marksheets, Family Income Certificate, Domicile Proof.",
  },
  {
    title: "AICTE Pragati Scholarship Scheme for Girl Students 2025-26",
    tag: "AICTE Central Scheme",
    badge: "Notification Active",
    benefit: "₹50,000 per annum for each year of study (Tuition + Contingency)",
    eligibility:
      "Up to two girls per family admitted to 1st year Degree Engineering or 2nd year lateral entry through centralized counseling; family income < ₹8 Lakh/annum.",
    portal: "AICTE National Portal",
    url: "https://www.aicte-india.org/schemes/students-development-schemes/Pragati",
    documents: "Parental Income Certificate, 10th & 12th Marksheets, Admission Allotment Order.",
  },
  {
    title: "AICTE Saksham Scholarship for Specially-Abled Students",
    tag: "AICTE Central Scheme",
    badge: "Active Application Drive",
    benefit: "₹50,000 per annum for course duration",
    eligibility:
      "Specially-abled students having disability of not less than 40% admitted to 1st year Degree/Diploma or lateral entry with family income ≤ ₹8 Lakh/annum.",
    portal: "AICTE National Portal",
    url: "https://www.aicte-india.org/schemes/students-development-schemes/Saksham",
    documents: "Disability Certificate from Competent Medical Authority, Income Certificate, Allotment Letter.",
  },
  {
    title: "Digital Gujarat Post-Matric Scholarship Drive 2025-26",
    tag: "Government of Gujarat",
    badge: "Recent Notification",
    benefit: "100% / Partial Tuition Reimbursement + Examination Fees & Stipend",
    eligibility:
      "SC, ST, SEBC, NT-DNT, and EBC students admitted to approved technical engineering courses meeting state department income norms.",
    portal: "Digital Gujarat Portal (digitalgujarat.gov.in)",
    url: "https://www.digitalgujarat.gov.in",
    documents: "Caste Certificate, Non-Creamy Layer (for SEBC), Income Certificate, Bank Account Linked with Aadhaar.",
  },
];

const REGULAR_SCHOLARSHIPS = [
  {
    title: "AICTE Tuition Fee Waiver Scheme (TFWS)",
    tag: "Statutory Merit Scheme",
    benefit: "100% Tuition Fee Exemption for the complete 4-year B.E. duration",
    eligibility:
      "Supernumerary seats allotted through centralized ACPC admissions based on merit rank; parent annual income from all sources must be below ₹8 Lakh.",
    portal: "ACPC Admission Committee & GTU-ITR Academic Section",
    url: "https://acpc.gujarat.gov.in",
    details:
      "Awarded automatically during ACPC seat allocation. Beneficiary pays zero tuition fees across all 8 semesters subject to academic clearance.",
  },
  {
    title: "Post-Matric Scholarship for Scheduled Castes (SC) / Tribes (ST)",
    tag: "State Social Justice Scheme",
    benefit: "Full Tuition Fee reimbursement, examination fee coverage, and monthly stipend",
    eligibility:
      "Native Gujarat students belonging to SC/ST categories admitted to government-approved engineering degree and diploma programs.",
    portal: "Social Justice & Empowerment Department via Digital Gujarat",
    url: "https://www.digitalgujarat.gov.in",
    details:
      "Regular state-sponsored scholarship renewed on annual basis. Processed through institute student verification desk.",
  },
  {
    title: "Post-Matric Scholarship for SEBC / OBC / NT-DNT Students",
    tag: "State Welfare Scheme",
    benefit: "Tuition fee support and examination subsidy",
    eligibility:
      "Socially and Educationally Backward Classes (SEBC) candidates holding a valid Non-Creamy Layer (NCL) certificate and prescribed income certificate.",
    portal: "Directorate of Developing Castes Welfare via Digital Gujarat",
    url: "https://www.digitalgujarat.gov.in",
    details:
      "Requires submission of fresh caste and income certificates at the start of each academic year.",
  },
  {
    title: "Chief Minister Scholarship Scheme (CMSS)",
    tag: "Higher Education Gujarat",
    benefit: "Up to ₹1,00,000 per year towards tuition and academic fees",
    eligibility:
      "High-merit students passing 10th/12th from Gujarat Board with top percentiles and admitted to degree engineering; family income below prescribed threshold.",
    portal: "Education Department, Government of Gujarat",
    url: "https://scholarships.gujarat.gov.in",
    details:
      "Recognizes academic toppers from modest economic backgrounds to pursue degree engineering without financial hardship.",
  },
  {
    title: "SSIP Student Startup & Innovation Proof-of-Concept Grants",
    tag: "Institutional Innovation Aid",
    benefit: "Financial grant up to ₹2,50,000/- for prototyping and project patenting",
    eligibility:
      "GTU-ITR undergraduate and diploma students working on verified innovative engineering hardware or software prototypes.",
    portal: "GTU-ITR SSIP Cell & GTU Ventures",
    url: "https://ssip.gtu.ac.in",
    details:
      "Disbursed in phased milestones following project defense in front of institutional scrutiny committee.",
  },
  {
    title: "GTU Vidhyarthi Kalyan Nidhi (Student Relief Fund)",
    tag: "University Benevolent Aid",
    benefit: "Emergency financial aid & tuition relief during unforeseen economic distress",
    eligibility:
      "Enrolled GTU-ITR students facing sudden demise of breadwinner parent or major medical emergency during active study semesters.",
    portal: "GTU Central Student Welfare Board",
    url: "https://www.gtu.ac.in",
    details:
      "Special welfare initiative by Gujarat Technological University providing compassionate grant assistance.",
  },
];

function ScholarshipPage() {
  return (
    <PageShell
      title="Scholarships & Financial Aid"
      subtitle="Comprehensive government, state, and institutional scholarship schemes enabling equal access to premier technical education at GTU-ITR."
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
              <p className="font-display text-xl font-bold text-brand-navy">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Layout: Latest vs Regular */}
      <Tabs defaultValue="latest" className="w-full">
        <div className="mb-8 rounded-xl border border-brand-navy/20 bg-brand-navy p-2 shadow-md">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0">
            <TabsTrigger
              value="latest"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Latest Scholarships
            </TabsTrigger>
            <TabsTrigger
              value="regular"
              className="py-2.5 text-xs font-bold uppercase tracking-wider text-white/80 transition-all hover:text-white data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow"
            >
              Regular Scholarships
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Latest Scholarships */}
        <TabsContent value="latest" className="space-y-6 focus-visible:outline-none">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">
                Latest Announcements &amp; Active Windows
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Currently open application drives and notifications for the academic year 2025-26.
              </p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-navy bg-brand-surface border border-border px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5 text-yellow-500" /> {LATEST_SCHOLARSHIPS.length} Active Schemes
            </span>
          </div>

          <div className="space-y-4">
            {LATEST_SCHOLARSHIPS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-navy/30 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-brand-navy text-white text-[10px] uppercase font-bold tracking-wider">
                      {item.tag}
                    </Badge>
                    <span className="rounded bg-brand-red/10 px-2.5 py-0.5 text-xs font-bold text-brand-red">
                      {item.badge}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                    <Calendar className="h-3.5 w-3.5 text-brand-red" /> Current Academic Cycle
                  </span>
                </div>

                <h4 className="mt-3 font-heading text-lg font-bold text-brand-navy">{item.title}</h4>

                <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs">
                  <div className="rounded-lg bg-muted/40 p-3">
                    <strong className="text-brand-navy block mb-1">Financial Benefit:</strong>
                    <span className="text-foreground/90 font-medium">{item.benefit}</span>
                  </div>
                  <div className="rounded-lg bg-muted/40 p-3">
                    <strong className="text-brand-navy block mb-1">Official Portal:</strong>
                    <span className="text-foreground/80">{item.portal}</span>
                  </div>
                </div>

                <div className="mt-3 text-xs leading-relaxed text-foreground/85">
                  <strong className="text-brand-navy">Eligibility:</strong> {item.eligibility}
                </div>

                <div className="mt-2 text-xs text-muted-foreground">
                  <strong className="text-foreground/80">Key Documents:</strong> {item.documents}
                </div>

                <div className="mt-4 pt-3 border-t border-border/70 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Apply via authorized government portal
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-red shadow-xs"
                  >
                    Visit Application Portal <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Tab 2: Regular Scholarships */}
        <TabsContent value="regular" className="space-y-6 focus-visible:outline-none">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">
                Regular &amp; Ongoing Schemes
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Statutory, government welfare, and institutional scholarships available year-round or annually.
              </p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-navy bg-brand-surface border border-border px-3 py-1 rounded-full">
              <Award className="h-3.5 w-3.5 text-yellow-500" /> {REGULAR_SCHOLARSHIPS.length} Regular Schemes
            </span>
          </div>

          <div className="space-y-4">
            {REGULAR_SCHOLARSHIPS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-navy/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <Badge className="bg-brand-navy text-white text-[10px] uppercase font-bold tracking-wider">
                    {item.tag}
                  </Badge>
                  <span className="text-xs font-medium text-muted-foreground">Annual / Semester Basis</span>
                </div>

                <h4 className="mt-3 font-heading text-lg font-bold text-brand-navy">{item.title}</h4>

                <div className="mt-3 rounded-lg bg-muted/40 p-3 text-xs">
                  <strong className="text-brand-navy block mb-1">Scholarship Grant / Benefit:</strong>
                  <span className="text-foreground/90 font-medium">{item.benefit}</span>
                </div>

                <div className="mt-3 space-y-1.5 text-xs">
                  <p className="text-foreground/85 leading-relaxed">
                    <strong className="text-brand-navy">Eligibility Criteria:</strong> {item.eligibility}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    <strong className="text-brand-navy">Overview:</strong> {item.details}
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground/80">Issuing Body / Portal:</strong> {item.portal}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/70 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground">
                    Assistance available at GTU-ITR Student Section counter
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand-navy/30 bg-card px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-navy transition-all hover:bg-brand-navy hover:text-white"
                  >
                    Scheme Guidelines <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Student Section Help Desk Banner */}
      <div className="mt-12 rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Student Welfare Desk
            </span>
            <h4 className="mt-2 font-heading text-xl font-bold uppercase text-white">
              Need Help with Scholarship Verification or Documentation?
            </h4>
            <p className="mt-1 text-xs text-white/80 max-w-xl">
              Visit the GTU-ITR Administrative Building Student Section (Ground Floor) for online form verification, bonafide certificates, and income affidavit endorsements.
            </p>
          </div>
          <div className="text-xs text-white/90 space-y-1">
            <p><strong>Office Hours:</strong> 10:30 AM – 05:00 PM (Mon to Sat)</p>
            <p><strong>Email:</strong> admission_gperi@gtu.edu.in</p>
            <p><strong>Contact:</strong> +91-9909039233</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

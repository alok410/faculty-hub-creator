import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Download, FileText, ExternalLink, ShieldCheck, Building, CheckCircle2, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      { title: "Mandatory Disclosure | GTU-ITR" },
      {
        name: "description",
        content:
          "Statutory Mandatory Disclosure document published as per AICTE norms and regulations for GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Mandatory Disclosure | GTU-ITR" },
      {
        property: "og:description",
        content: "Official Mandatory Disclosure information published as per AICTE norms.",
      },
      { property: "og:url", content: "/mandatory-disclosure" },
    ],
    links: [{ rel: "canonical", href: "/mandatory-disclosure" }],
  }),
  component: MandatoryDisclosurePage,
});

const STATUTORY_DETAILS = [
  { label: "AICTE Permanent Institute ID", value: "1-5259461" },
  { label: "Institute Type & Category", value: "State University Constituent Institute (Government / Grant-in-Aid)" },
  { label: "Affiliating University", value: "Gujarat Technological University (GTU), Ahmedabad" },
  { label: "Academic Programs Offered", value: "B.E. (4 Branches), Diploma (4 Branches), Integrated M.Sc. (IT), PGDCS" },
  { label: "Anti-Ragging Committee", value: "Constituted & Monitored per Supreme Court & UGC Regulations" },
  { label: "Grievance Redressal Committee (SGRC)", value: "Active per AICTE Regulation 2019 with Ombudsperson oversight" },
  { label: "Internal Complaints Committee (ICC)", value: "Constituted under POSH Act 2013 & AICTE Gender Sensitization norms" },
  { label: "SC / ST Committee", value: "Established per Scheduled Castes and Scheduled Tribes Prevention of Atrocities Act" },
];

const APPROVED_INTAKE = [
  { program: "B.E. Computer Engineering", level: "Undergraduate (UG)", duration: "4 Years", intake: "60 Seats" },
  { program: "B.E. Mechanical Engineering", level: "Undergraduate (UG)", duration: "4 Years", intake: "60 Seats" },
  { program: "B.E. Civil Engineering", level: "Undergraduate (UG)", duration: "4 Years", intake: "60 Seats" },
  { program: "B.E. Electrical Engineering", level: "Undergraduate (UG)", duration: "4 Years", intake: "60 Seats" },
  { program: "Diploma Computer Engineering", level: "Polytechnic Diploma", duration: "3 Years", intake: "60 Seats" },
  { program: "Diploma Mechanical Engineering", level: "Polytechnic Diploma", duration: "3 Years", intake: "60 Seats" },
  { program: "Diploma Civil Engineering", level: "Polytechnic Diploma", duration: "3 Years", intake: "60 Seats" },
  { program: "Diploma Electrical Engineering", level: "Polytechnic Diploma", duration: "3 Years", intake: "60 Seats" },
  { program: "Integrated M.Sc. in IT", level: "Integrated Postgraduate (PG)", duration: "5 Years", intake: "60 Seats" },
  { program: "PG Diploma in Cyber Security (PGDCS)", level: "Postgraduate Diploma", duration: "1 Year", intake: "30 Seats" },
];

function MandatoryDisclosurePage() {
  return (
    <PageShell
      title="Mandatory Disclosure"
      subtitle="Official statutory information and institutional compliance document published in strict adherence to All India Council for Technical Education (AICTE) regulations."
    >
      <div className="space-y-8">
        {/* Action Header Card */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-brand-navy/20 bg-brand-navy p-6 text-white sm:flex-row shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-brand-red">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold">GTU-ITR Mandatory Disclosure Document</h2>
              <p className="text-xs text-white/80">Published per AICTE Approval Process Handbook Guidelines</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/mandatory-disclosure.pdf"
              download="GTU-ITR-Mandatory-Disclosure.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow transition-all hover:bg-brand-red/90"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <a
              href="/mandatory-disclosure.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20"
            >
              <ExternalLink className="h-4 w-4" />
              View PDF
            </a>
          </div>
        </div>

        {/* Statutory Compliance Table */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-brand-navy text-lg mb-2">
            <ShieldCheck className="h-5 w-5 text-brand-red" />
            <h3>Institutional Identification &amp; Statutory Compliance</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            Institutional verification coordinates and committee constitutions as reported to the All India Council for Technical Education.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {STATUTORY_DETAILS.map((item, idx) => (
              <div key={idx} className="rounded-lg border border-border/80 bg-brand-surface/30 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-navy">{item.label}</div>
                <div className="text-sm font-medium text-foreground mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Approved Intake Table */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-bold text-brand-navy text-lg">
              <Award className="h-5 w-5 text-brand-red" />
              <h3>AICTE Approved Programs &amp; Annual Intake</h3>
            </div>
            <Badge variant="outline" className="border-brand-navy/30 text-brand-navy text-xs">
              Academic Year 2026–27
            </Badge>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted text-foreground font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3">Program / Course Name</th>
                  <th className="p-3">Level</th>
                  <th className="p-3">Course Duration</th>
                  <th className="p-3">Approved Annual Intake</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {APPROVED_INTAKE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-semibold text-brand-navy">{row.program}</td>
                    <td className="p-3 text-muted-foreground">{row.level}</td>
                    <td className="p-3 text-muted-foreground">{row.duration}</td>
                    <td className="p-3 font-bold text-foreground">{row.intake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-muted/50 px-4 py-3 text-xs font-medium text-muted-foreground flex justify-between items-center">
            <span>Document Preview: mandatory-disclosure.pdf</span>
            <a 
              href="/mandatory-disclosure.pdf" 
              download="GTU-ITR-Mandatory-Disclosure.pdf" 
              className="text-brand-navy underline-offset-4 hover:underline font-semibold"
            >
              Direct Download
            </a>
          </div>
          <iframe
            src="/mandatory-disclosure.pdf"
            title="GTU-ITR Mandatory Disclosure PDF"
            className="h-[750px] w-full border-0"
          />
        </div>
      </div>
    </PageShell>
  );
}

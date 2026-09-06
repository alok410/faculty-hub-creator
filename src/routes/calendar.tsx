import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Download,
  CheckCircle2,
  Clock,
  BookOpen,
  FileText,
  AlertCircle,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Academic Calendar & Term Schedules | GTU-ITR" },
      {
        name: "description",
        content:
          "Official academic calendars, term commencement dates, examination schedules, and downloadable PDFs for GTU-ITR Mehsana.",
      },
      { property: "og:title", content: "Academic Calendar & Term Schedules | GTU-ITR" },
      {
        property: "og:description",
        content: "Term calendars, mid-sem exam dates, and semester schedules at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/calendar" },
    ],
    links: [{ rel: "canonical", href: "/calendar" }],
  }),
  component: CalendarPage,
});

const STATS = [
  { label: "Teaching Days", value: "90+ Days", icon: BookOpen, desc: "Per academic semester" },
  { label: "Attendance Rule", value: "Min 75%", icon: Clock, desc: "Mandatory as per GTU norms" },
  { label: "Exam Cycles", value: "Mid & End Sem", icon: CalendarDays, desc: "Internal + University external" },
  { label: "Official Archive", value: "6 Years", icon: FileText, desc: "From 2020-21 through 2025-26" },
];

const MILESTONES_CURRENT = [
  {
    event: "Term Commencement (Odd Semesters)",
    date: "July / August",
    audience: "B.E. & Diploma (Sem 3, 5, 7)",
    status: "Completed",
  },
  {
    event: "First-Year Orientation & Induction Program",
    date: "August",
    audience: "Newly Admitted Batch",
    status: "Completed",
  },
  {
    event: "Mid-Semester Examinations (CIE-I & II)",
    date: "September - October",
    audience: "All Undergraduate Students",
    status: "Completed",
  },
  {
    event: "Term End & Remedial Exam Window",
    date: "November",
    audience: "All Semesters",
    status: "Completed",
  },
  {
    event: "GTU University Practical & Theory Exams",
    date: "December - January",
    audience: "Degree & Diploma Branches",
    status: "Completed",
  },
  {
    event: "Term Commencement (Even Semesters)",
    date: "January / February 2026",
    audience: "Sem 2, 4, 6, 8",
    status: "In Progress",
  },
  {
    event: "Mid-Semester Internal Assessments",
    date: "March - April 2026",
    audience: "All Even Semesters",
    status: "Upcoming",
  },
  {
    event: "GTU Summer 2026 External Examinations",
    date: "May - June 2026",
    audience: "All University Exams",
    status: "Upcoming",
  },
];

const DOWNLOADABLE_CALENDARS = [
  {
    title: "Academic Calendar 2025-26 (Even Term)",
    year: "AY 2025-26",
    term: "Even Term",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/Academic%20Calendar-%202025-26%20%28Even%29.pdf",
    current: true,
  },
  {
    title: "Academic Calendar 2025-26 (Odd Term)",
    year: "AY 2025-26",
    term: "Odd Term",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/2024-25%28%20Odd%20Term%20%29.pdf",
    current: true,
  },
  {
    title: "Academic Calendar 2024-25 (Even Term)",
    year: "AY 2024-25",
    term: "Even Term",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/2024-25%28Even%20Term%291%20.pdf",
    current: false,
  },
  {
    title: "Academic Calendar 2024-25 (Odd Term)",
    year: "AY 2024-25",
    term: "Odd Term",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/2024-25%28%20Odd%20Term%20%29.pdf",
    current: false,
  },
  {
    title: "Academic Calendar 2023-24 (Even Term)",
    year: "AY 2023-24",
    term: "Even Term",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/Academic%20calendar23_2024.pdf",
    current: false,
  },
  {
    title: "Academic Calendar July - December 2023",
    year: "AY 2023-24",
    term: "Odd Term",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/Academic%20calendar_%20July-%20Dec%202023_Rev%202.O%20%281%29.pdf",
    current: false,
  },
  {
    title: "Academic Calendar 2022-2023",
    year: "AY 2022-23",
    term: "Full Year",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/Academic%20Calender%20Jan-June%202023_EVEN.pdf",
    current: false,
  },
  {
    title: "Tentative Academic Calendar 2021-2022",
    year: "AY 2021-22",
    term: "Full Year",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/Tentative%20Academic%20Calendar%20-%202021-22.pdf",
    current: false,
  },
  {
    title: "Academic Calendar 2020-2021",
    year: "AY 2020-21",
    term: "Full Year",
    url: "https://gtuitr.gtu.ac.in/AcademicCal/Academic%20Calendar%202020-21.pdf",
    current: false,
  },
];

function CalendarPage() {
  return (
    <PageShell
      title="Academic Calendar & Term Schedules"
      subtitle="Comprehensive semester timelines, examination milestones, and official downloadable notifications for GTU-ITR Mehsana."
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

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Main Milestones Table */}
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <Badge className="bg-brand-red uppercase tracking-wider text-white">Academic Cycle 2025-26</Badge>
                <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
                  Key Semester Milestones
                </h2>
              </div>
              <span className="hidden rounded bg-brand-surface px-3 py-1 text-xs font-bold text-brand-navy border border-border sm:inline-block">
                GTU Affiliated Schedule
              </span>
            </div>
            <div className="mb-6 mt-3 h-1 w-16 bg-brand-red" />

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-brand-navy text-white uppercase text-[11px]">
                  <tr>
                    <th className="p-3.5">Academic Milestone</th>
                    <th className="p-3.5">Target Period</th>
                    <th className="p-3.5">Target Batch</th>
                    <th className="p-3.5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {MILESTONES_CURRENT.map((m, i) => (
                    <tr key={i} className="hover:bg-brand-surface/50 transition-colors">
                      <td className="p-3.5 font-semibold text-brand-navy flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-red" />
                        {m.event}
                      </td>
                      <td className="p-3.5 text-foreground/90 font-medium">{m.date}</td>
                      <td className="p-3.5 text-muted-foreground">{m.audience}</td>
                      <td className="p-3.5 text-center">
                        <span
                          className={`inline-block rounded px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                            m.status === "In Progress"
                              ? "bg-green-100 text-green-800"
                              : m.status === "Upcoming"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-lg border border-border/70 bg-brand-surface/40 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                <p className="text-xs leading-relaxed text-foreground/85">
                  <strong>Note:</strong> Exact examination schedules and circulars are declared centrally by Gujarat
                  Technological University (GTU) and adhered to by all affiliated departments. Please refer to university
                  portal announcements for updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Downloadable PDF Documents Archive */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-base font-bold uppercase text-brand-navy">
              Download Official Calendars (PDF)
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">Direct access to approved GTU-ITR academic schedules.</p>
            <div className="mb-4 mt-2 h-0.5 w-12 bg-brand-red" />

            <div className="space-y-3">
              {DOWNLOADABLE_CALENDARS.map((cal, idx) => (
                <a
                  key={idx}
                  href={cal.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-between rounded-lg border p-3 text-xs transition-all hover:border-brand-navy/50 hover:shadow-xs ${
                    cal.current ? "border-brand-red/40 bg-brand-surface" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className={`h-4 w-4 ${cal.current ? "text-brand-red" : "text-brand-navy"}`} />
                    <div>
                      <p className="font-semibold text-foreground">{cal.title}</p>
                      <p className="text-[10px] text-muted-foreground">{cal.year} • {cal.term}</p>
                    </div>
                  </div>
                  <Download className="h-4 w-4 text-brand-navy shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <h4 className="font-heading text-sm font-bold uppercase text-white">Attendance Regulation</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              As per Gujarat Technological University guidelines, every student must maintain a minimum attendance of{" "}
              <strong>75%</strong> in theory lectures and laboratory sessions across each enrolled subject to remain eligible
              for university end-semester examinations.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

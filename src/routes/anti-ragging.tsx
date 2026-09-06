import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  ShieldAlert,
  Gavel,
  Phone,
  Mail,
  Users,
  AlertTriangle,
  FileCheck,
  CheckCircle2,
  ExternalLink,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/anti-ragging")({
  head: () => ({
    meta: [
      { title: "Anti-Ragging Policy & Committees | GTU-ITR" },
      {
        name: "description",
        content:
          "Zero-tolerance Anti-Ragging policy at GTU-ITR Mehsana as mandated by the Hon'ble Supreme Court of India. Anti-Ragging Committee, Squad, Mentoring Cell, and 24x7 helplines.",
      },
      { property: "og:title", content: "Anti-Ragging Policy & Committees | GTU-ITR" },
      {
        property: "og:description",
        content: "Zero-tolerance Anti-Ragging policy, Mentoring Cell, and emergency reporting helplines at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/anti-ragging" },
    ],
    links: [{ rel: "canonical", href: "/anti-ragging" }],
  }),
  component: AntiRaggingPage,
});

const MANDATES = [
  "Strict prohibition of ragging under Supreme Court orders dated 04/05/2001, 16/05/2007, and 11/02/2009.",
  "Mandatory digital anti-ragging undertakings signed by all admitted students and their parents/guardians.",
  "Immediate suspension, expulsion, academic debarment, and lodging of First Information Report (FIR) with local police for any act of harassment.",
  "Round-the-clock patrolling by the Anti-Ragging Squad across campus corridors, buses, and hostels.",
  "Active 3-Tier Mentoring Cell assigning 1 senior mentor per 6 first-year students.",
];

const PENALTIES = [
  { penalty: "Expulsion & Debarment", desc: "Rustication from the institute and debarment from admission to any other institution." },
  { penalty: "Suspension of Privileges", desc: "Withholding of scholarships, fellowships, examination results, and campus placement drives." },
  { penalty: "Criminal Prosecution", desc: "Immediate police complaint leading to criminal charges, imprisonment, and statutory fines." },
  { penalty: "Hostel Eviction", desc: "Immediate cancellation of hostel accommodation without any refund of fees." },
];

function AntiRaggingPage() {
  return (
    <PageShell
      title="Anti-Ragging Policy & Framework"
      subtitle="Strict zero-tolerance policy against any form of physical, verbal, or psychological harassment in accordance with the Supreme Court of India and UGC guidelines."
    >
      {/* Supreme Court Warning Card */}
      <div className="mb-10 rounded-xl border-2 border-brand-red/30 bg-card p-6 shadow-sm md:p-8">
        <div className="flex items-center gap-3">
          <ShieldAlert className="h-7 w-7 text-brand-red shrink-0" />
          <div>
            <Badge className="bg-brand-red uppercase text-white tracking-wider">Statutory Warning</Badge>
            <h2 className="mt-1 font-heading text-xl font-bold uppercase text-brand-navy">
              Ragging is a Cognizable Criminal Offence
            </h2>
          </div>
        </div>
        <div className="mb-4 mt-3 h-1 w-16 bg-brand-red" />
        <p className="text-sm leading-relaxed text-foreground/85">
          Under the orders of the <strong>Honorable Supreme Court of India</strong> (vide judgments dated 4th May 2001,
          16th May 2007, and 11th February 2009) and the regulations of UGC and AICTE, ragging in any form is{" "}
          <strong className="text-brand-red">COMPLETELY PROHIBITED</strong> within and outside GTU-ITR premises.
          Anyone indulging in ragging will face exemplary penal punishment including immediate police FIR, imprisonment,
          heavy fines, and permanent expulsion.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {MANDATES.map((m, i) => (
            <div key={i} className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-brand-surface/40 p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              <p className="text-xs leading-relaxed text-foreground/90">{m}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pillars: Committee, Squad & Mentoring Cell */}
      <div className="mb-12 space-y-6">
        <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">Institutional Vigilance Mechanism</h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white">
              <Gavel className="h-5 w-5 text-brand-red" />
            </div>
            <h4 className="mt-4 font-heading text-base font-bold text-brand-navy">Anti-Ragging Committee</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">
              Headed by the Principal and comprised of senior faculty, civil administration representatives, police
              authorities, local media, and parents. Oversees inquiry hearings, evaluates evidence, and imposes statutory
              sanctions.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white">
              <Lock className="h-5 w-5 text-brand-red" />
            </div>
            <h4 className="mt-4 font-heading text-base font-bold text-brand-navy">Anti-Ragging Squad</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">
              A rapid vigil team empowered to conduct unannounced surprise checks in hostel blocks, cafeteria, college buses,
              and common student areas during and after academic hours to deter any inappropriate conduct.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white">
              <Users className="h-5 w-5 text-brand-red" />
            </div>
            <h4 className="mt-4 font-heading text-base font-bold text-brand-navy">Mentoring Cell</h4>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">
              A peer guidance initiative volunteering senior students and faculty mentors at the rate of{" "}
              <strong>1 mentor for every 6 first-year students</strong> to ensure freshers feel supported and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Penalties & Reporting Helplines Grid */}
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Penalties */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h3 className="flex items-center gap-2 font-heading text-lg font-bold uppercase text-brand-navy">
            <AlertTriangle className="h-5 w-5 text-brand-red" /> Disciplinary Actions &amp; Penalties
          </h3>
          <div className="mb-6 mt-2 h-0.5 w-12 bg-brand-red" />

          <div className="space-y-4">
            {PENALTIES.map((p, idx) => (
              <div key={idx} className="rounded-lg border border-border/70 bg-brand-surface/30 p-4">
                <p className="font-heading text-sm font-bold text-brand-navy">{p.penalty}</p>
                <p className="mt-1 text-xs text-foreground/85">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 24x7 Helplines Card */}
        <div className="space-y-6">
          <div className="rounded-xl border border-brand-navy bg-brand-navy p-6 text-white shadow-sm">
            <span className="rounded bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Emergency Helplines
            </span>
            <h4 className="mt-3 font-heading text-base font-bold uppercase text-white">Report An Incident</h4>
            <p className="mt-2 text-xs leading-relaxed text-white/85">
              Complaints can be lodged confidentially 24x7 without fear of retaliation.
            </p>

            <div className="mt-5 space-y-3 text-xs border-t border-white/10 pt-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70">National Anti-Ragging Toll Free:</p>
                <p className="text-base font-bold text-white mt-0.5">1800-180-5522</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70">Campus Women Helpline (24x7):</p>
                <p className="text-base font-bold text-brand-red mt-0.5">+91 7827170170</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70">National Portal:</p>
                <a
                  href="https://www.antiragging.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline flex items-center gap-1 mt-0.5 font-medium"
                >
                  www.antiragging.in <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70">Institute Desk:</p>
                <p className="text-white mt-0.5">+91-9909039233 • admission_gperi@gtu.edu.in</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h4 className="font-heading text-sm font-bold uppercase text-brand-navy">Mandatory Undertakings</h4>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Every admitted student must submit their online Anti-Ragging Affidavit via the national UGC compliance portal.
            </p>
            <a
              href="https://www.antiragging.in/affidavit_affiliated_form.php"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block w-full rounded-lg bg-brand-surface border border-brand-navy/30 py-2.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              Fill UGC Affidavit Online <ExternalLink className="inline-block ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

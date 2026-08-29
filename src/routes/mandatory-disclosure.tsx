import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      { title: "Mandatory Disclosure | GTU-ITR" },
      { name: "description", content: "Mandatory Disclosure information published as per AICTE norms." },
      { property: "og:title", content: "Mandatory Disclosure | GTU-ITR" },
      { property: "og:description", content: "Mandatory Disclosure information published as per AICTE norms." },
      { property: "og:url", content: "/mandatory-disclosure" },
    ],
    links: [{ rel: "canonical", href: "/mandatory-disclosure" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell 
      title="Mandatory Disclosure" 
      subtitle="Official Mandatory Disclosure document published in compliance with AICTE regulations."
    >
      <div className="space-y-6">
        {/* Action Header Card */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-brand-navy/20 bg-brand-navy p-6 text-white sm:flex-row shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-brand-red">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold">GTU-ITR Mandatory Disclosure Document</h2>
              <p className="text-xs text-white/80">1-Page Official PDF Document (AICTE Norms)</p>
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


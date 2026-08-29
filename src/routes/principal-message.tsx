import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";
import { Quote, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/principal-message")({
  head: () => ({
    meta: [
      { title: "Principal's Message | GTU-ITR" },
      { name: "description", content: "Principal's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:title", content: "Principal's Message | GTU-ITR" },
      { property: "og:description", content: "Principal's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:url", content: "/principal-message" },
    ],
    links: [{ rel: "canonical", href: "/principal-message" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Principal's Message">
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        <div className="flex flex-col items-center overflow-hidden border border-border bg-card p-4 shadow-md text-center rounded-lg">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border bg-muted">
            <img
              src="/site/principal.jpg"
              alt="Principal - GTU-ITR"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4 w-full border-t border-border pt-3">
            <h3 className="font-heading text-lg font-bold text-brand-navy">Principal</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">GTU Institute of Technology & Research</p>
          </div>
        </div>

        <Prose>
          <section className="relative rounded-lg border border-border bg-brand-surface p-6 shadow-sm md:p-8">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-brand-red/10" />
            <h2 className="section-title text-xl md:text-2xl font-heading font-bold uppercase text-brand-navy">From the Principal</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red" />
            <p className="text-[15px] leading-relaxed text-foreground/90 font-sans">
              It gives me immense pleasure to welcome you to GTU - Institute of Technology &amp; Research. Our institute offers degree and diploma programmes in Computer, Civil, Mechanical and Electrical Engineering along with an Integrated M.Sc. in Information Technology and a PG Diploma in Cyber Security.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/90 font-sans">
              Our focus is holistic: rigorous academics supported by hands-on laboratory work, industry exposure, sports, cultural activities and community service. I assure every student and parent of our full commitment to their success.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-brand-red" />
              <span>Campus Leadership, GTU-ITR Mehsana</span>
            </div>
          </section>
        </Prose>
      </div>
    </PageShell>
  );
}


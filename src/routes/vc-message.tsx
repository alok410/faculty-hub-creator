import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";
import { Quote, Award } from "lucide-react";

export const Route = createFileRoute("/vc-message")({
  head: () => ({
    meta: [
      { title: "Vice Chancellor's Message | GTU-ITR" },
      { name: "description", content: "Vice Chancellor's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:title", content: "Vice Chancellor's Message | GTU-ITR" },
      { property: "og:description", content: "Vice Chancellor's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:url", content: "/vc-message" },
    ],
    links: [{ rel: "canonical", href: "/vc-message" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Vice Chancellor's Message">
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        <div className="flex flex-col items-center overflow-hidden border border-border bg-card p-4 shadow-md text-center rounded-lg">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border bg-muted">
            <img
              src="/site/vc.jpg"
              alt="Vice Chancellor - GTU"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4 w-full border-t border-border pt-3">
            <h3 className="font-heading text-lg font-bold text-brand-navy">Vice Chancellor</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">Gujarat Technological University</p>
          </div>
        </div>

        <Prose>
          <section className="relative rounded-lg border border-border bg-brand-surface p-6 shadow-sm md:p-8">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-brand-red/10" />
            <h2 className="section-title text-xl md:text-2xl font-heading font-bold uppercase text-brand-navy">From the Vice Chancellor</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red" />
            <p className="text-[15px] leading-relaxed text-foreground/90 font-sans">
              Gujarat Technological University has consistently worked towards making technical education accessible, industry relevant and research driven. GTU-ITR is a flagship campus of the University where this philosophy is translated into practice every single day.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/90 font-sans">
              Our students are encouraged to look beyond textbooks - to build, to question and to innovate. I invite young aspirants to join us and become part of an ecosystem that prepares engineers for the demands of a rapidly changing world.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Award className="h-4 w-4 text-brand-red" />
              <span>Gujarat Technological University, Ahmedabad</span>
            </div>
          </section>
        </Prose>
      </div>
    </PageShell>
  );
}


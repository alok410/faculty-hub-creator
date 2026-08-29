import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";
import { Quote, Building } from "lucide-react";

export const Route = createFileRoute("/registrar-message")({
  head: () => ({
    meta: [
      { title: "Registrar's Message | GTU-ITR" },
      { name: "description", content: "Registrar's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:title", content: "Registrar's Message | GTU-ITR" },
      { property: "og:description", content: "Registrar's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:url", content: "/registrar-message" },
    ],
    links: [{ rel: "canonical", href: "/registrar-message" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Registrar's Message">
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        <div className="flex flex-col items-center overflow-hidden border border-border bg-card p-4 shadow-md text-center rounded-lg">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border bg-muted">
            <img
              src="/site/registrar.jpg"
              alt="Registrar - GTU"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4 w-full border-t border-border pt-3">
            <h3 className="font-heading text-lg font-bold text-brand-navy">Registrar</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">Gujarat Technological University</p>
          </div>
        </div>

        <Prose>
          <section className="relative rounded-lg border border-border bg-brand-surface p-6 shadow-sm md:p-8">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-brand-red/10" />
            <h2 className="section-title text-xl md:text-2xl font-heading font-bold uppercase text-brand-navy">From the Registrar</h2>
            <div className="mt-2 mb-6 h-1 w-16 bg-brand-red" />
            <p className="text-[15px] leading-relaxed text-foreground/90 font-sans">
              GTU-ITR functions with transparency, discipline and a strong student-first administrative culture. From admissions to examinations, every process is designed to be simple and fair for students and parents alike.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/90 font-sans">
              We remain committed to providing an environment where academic excellence and personal growth go hand in hand.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Building className="h-4 w-4 text-brand-red" />
              <span>GTU Administration & Academic Governance</span>
            </div>
          </section>
        </Prose>
      </div>
    </PageShell>
  );
}


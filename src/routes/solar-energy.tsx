import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/solar-energy")({
  head: () => ({
    meta: [
      { title: "Anchor Institute of Solar Energy | GTU-ITR" },
      { name: "description", content: "Skill development and research in renewable energy." },
      { property: "og:title", content: "Anchor Institute of Solar Energy | GTU-ITR" },
      { property: "og:description", content: "Skill development and research in renewable energy." },
      { property: "og:url", content: "/solar-energy" },
    ],
    links: [{ rel: "canonical", href: "/solar-energy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Anchor Institute of Solar Energy" subtitle="Skill development and research in renewable energy.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>GTU-ITR hosts the Anchor Institute of Solar Energy, working with the Government of Gujarat to build skilled manpower for the solar and renewable energy sector.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Focus Areas</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Solar photovoltaic system design and installation, solar thermal applications, rooftop solar plant operation and maintenance, energy audit and renewable energy policy awareness.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

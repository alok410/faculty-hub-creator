import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/diploma/civil")({
  head: () => ({
    meta: [
      { title: "Civil Engineering (Diploma) | GTU-ITR" },
      { name: "description", content: "Infrastructure that shapes society." },
      { property: "og:title", content: "Civil Engineering (Diploma) | GTU-ITR" },
      { property: "og:description", content: "Infrastructure that shapes society." },
      { property: "og:url", content: "/academics/diploma/civil" },
    ],
    links: [{ rel: "canonical", href: "/academics/diploma/civil" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Civil Engineering (Diploma)" subtitle="Infrastructure that shapes society.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Department</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Diploma programme in Civil Engineering at GTU-ITR is designed around the Gujarat Technological University curriculum and is delivered by experienced faculty, many of whom come from higher seats of learning such as IITs and NITs. The department combines classroom teaching with extensive laboratory work, industrial visits, expert lectures and project-based learning.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Curriculum Highlights</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Structural analysis and design, geotechnical engineering, transportation engineering, water resources, environmental engineering, surveying, construction management and building information modelling.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Laboratories</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Concrete technology lab, geotechnical lab, surveying lab, environmental engineering lab, fluid mechanics lab and computer aided design studio.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Career Opportunities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Graduates of the diploma programme in Civil Engineering find opportunities in core industry, public sector undertakings, consultancy, government services, research organisations and higher studies. The institute's Training &amp; Placement Cell supports students throughout this journey.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

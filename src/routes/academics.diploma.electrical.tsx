import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/diploma/electrical")({
  head: () => ({
    meta: [
      { title: "Electrical Engineering (Diploma) | GTU-ITR" },
      { name: "description", content: "Power, control, electronics and renewable energy." },
      { property: "og:title", content: "Electrical Engineering (Diploma) | GTU-ITR" },
      { property: "og:description", content: "Power, control, electronics and renewable energy." },
      { property: "og:url", content: "/academics/diploma/electrical" },
    ],
    links: [{ rel: "canonical", href: "/academics/diploma/electrical" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Electrical Engineering (Diploma)" subtitle="Power, control, electronics and renewable energy.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Department</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Diploma programme in Electrical Engineering at GTU-ITR is designed around the Gujarat Technological University curriculum and is delivered by experienced faculty, many of whom come from higher seats of learning such as IITs and NITs. The department combines classroom teaching with extensive laboratory work, industrial visits, expert lectures and project-based learning.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Curriculum Highlights</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Electrical machines, power systems, power electronics, control systems, measurements and instrumentation, microprocessors, electric drives and renewable energy systems.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Laboratories</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Electrical machines lab, power electronics lab, control systems lab, measurement lab, high voltage lab and renewable energy lab.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Career Opportunities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Graduates of the diploma programme in Electrical Engineering find opportunities in core industry, public sector undertakings, consultancy, government services, research organisations and higher studies. The institute's Training &amp; Placement Cell supports students throughout this journey.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

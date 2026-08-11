import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/degree/mechanical")({
  head: () => ({
    meta: [
      { title: "Mechanical Engineering (Degree) | GTU-ITR" },
      { name: "description", content: "Design, manufacturing, thermal and automotive systems." },
      { property: "og:title", content: "Mechanical Engineering (Degree) | GTU-ITR" },
      { property: "og:description", content: "Design, manufacturing, thermal and automotive systems." },
      { property: "og:url", content: "/academics/degree/mechanical" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/mechanical" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Mechanical Engineering (Degree)" subtitle="Design, manufacturing, thermal and automotive systems.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Department</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Degree programme in Mechanical Engineering at GTU-ITR is designed around the Gujarat Technological University curriculum and is delivered by experienced faculty, many of whom come from higher seats of learning such as IITs and NITs. The department combines classroom teaching with extensive laboratory work, industrial visits, expert lectures and project-based learning.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Curriculum Highlights</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Engineering mechanics, thermodynamics, fluid mechanics, machine design, manufacturing processes, CAD/CAM, industrial engineering, refrigeration and air conditioning and automobile engineering.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Laboratories</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Workshop, heat transfer lab, IC engine lab, CAD/CAM lab, metrology lab, refrigeration and air conditioning lab and material testing lab.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Career Opportunities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Graduates of the degree programme in Mechanical Engineering find opportunities in core industry, public sector undertakings, consultancy, government services, research organisations and higher studies. The institute's Training &amp; Placement Cell supports students throughout this journey.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

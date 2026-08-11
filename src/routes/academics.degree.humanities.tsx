import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/degree/humanities")({
  head: () => ({
    meta: [
      { title: "Humanities and Science (Degree) | GTU-ITR" },
      { name: "description", content: "The foundation of every engineering discipline." },
      { property: "og:title", content: "Humanities and Science (Degree) | GTU-ITR" },
      { property: "og:description", content: "The foundation of every engineering discipline." },
      { property: "og:url", content: "/academics/degree/humanities" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/humanities" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Humanities and Science (Degree)" subtitle="The foundation of every engineering discipline.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Department</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Degree programme in Humanities and Science at GTU-ITR is designed around the Gujarat Technological University curriculum and is delivered by experienced faculty, many of whom come from higher seats of learning such as IITs and NITs. The department combines classroom teaching with extensive laboratory work, industrial visits, expert lectures and project-based learning.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Curriculum Highlights</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Engineering mathematics, engineering physics, engineering chemistry, communication skills, environmental studies, professional ethics and soft skills development.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Laboratories</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Physics lab, chemistry lab and language laboratory.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Career Opportunities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Graduates of the degree programme in Humanities and Science find opportunities in core industry, public sector undertakings, consultancy, government services, research organisations and higher studies. The institute's Training &amp; Placement Cell supports students throughout this journey.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

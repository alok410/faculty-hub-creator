import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/degree/computer")({
  head: () => ({
    meta: [
      { title: "Computer Engineering (Degree) | GTU-ITR" },
      { name: "description", content: "Software, systems, networks and intelligent computing." },
      { property: "og:title", content: "Computer Engineering (Degree) | GTU-ITR" },
      { property: "og:description", content: "Software, systems, networks and intelligent computing." },
      { property: "og:url", content: "/academics/degree/computer" },
    ],
    links: [{ rel: "canonical", href: "/academics/degree/computer" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Computer Engineering (Degree)" subtitle="Software, systems, networks and intelligent computing.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Department</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Degree programme in Computer Engineering at GTU-ITR is designed around the Gujarat Technological University curriculum and is delivered by experienced faculty, many of whom come from higher seats of learning such as IITs and NITs. The department combines classroom teaching with extensive laboratory work, industrial visits, expert lectures and project-based learning.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Curriculum Highlights</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Programming and data structures, database management systems, operating systems, computer networks, software engineering, artificial intelligence, machine learning, cloud computing and cyber security.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Laboratories</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Computer laboratories with modern workstations, networking lab, project lab and high-speed internet across the campus.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Career Opportunities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Graduates of the degree programme in Computer Engineering find opportunities in core industry, public sector undertakings, consultancy, government services, research organisations and higher studies. The institute's Training &amp; Placement Cell supports students throughout this journey.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

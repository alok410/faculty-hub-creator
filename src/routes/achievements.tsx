import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements | GTU-ITR" },
      { name: "description", content: "Recognition earned by our students and faculty." },
      { property: "og:title", content: "Achievements | GTU-ITR" },
      { property: "og:description", content: "Recognition earned by our students and faculty." },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Achievements" subtitle="Recognition earned by our students and faculty.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Student Achievements</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>GTU-ITR students regularly win accolades at university-level technical festivals, hackathons, project competitions, sports meets and cultural events, and secure placements with reputed organisations.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Faculty Achievements</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Faculty members publish in peer-reviewed journals, present at national and international conferences, file patents, and complete funded research and consultancy projects.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

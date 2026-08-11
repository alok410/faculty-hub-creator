import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      { title: "Campus Facilities | GTU-ITR" },
      { name: "description", content: "Everything you need for an excellent learning experience." },
      { property: "og:title", content: "Campus Facilities | GTU-ITR" },
      { property: "og:description", content: "Everything you need for an excellent learning experience." },
      { property: "og:url", content: "/facility" },
    ],
    links: [{ rel: "canonical", href: "/facility" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Campus Facilities" subtitle="Everything you need for an excellent learning experience.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Academic Facilities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>52 laboratories across Computer, Civil, Mechanical and Electrical Engineering; a central library with more than 11,553 books along with journals and digital resources; smart classrooms; seminar halls and a central computing centre.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Campus Amenities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Wi-Fi enabled green campus with solar rooftop generation, hygienic cafeteria, sports grounds and indoor games, transportation facility, medical first-aid, drinking water stations and 24x7 security.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

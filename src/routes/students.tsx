import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "Student Corner | GTU-ITR" },
      { name: "description", content: "Everything a GTU-ITR student needs in one place." },
      { property: "og:title", content: "Student Corner | GTU-ITR" },
      { property: "og:description", content: "Everything a GTU-ITR student needs in one place." },
      { property: "og:url", content: "/students" },
    ],
    links: [{ rel: "canonical", href: "/students" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Student Corner" subtitle="Everything a GTU-ITR student needs in one place.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Life at GTU-ITR</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Student life at GTU-ITR extends far beyond the classroom. Technical clubs, cultural festivals such as Kaushalya, the Shaurya sports festival, NSS activities, industrial visits and expert lectures make the campus vibrant round the year.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Support Services</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Wi-Fi enabled campus, well-stocked library, hygienic cafeteria, transportation facility, counselling support and 24x7 security.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

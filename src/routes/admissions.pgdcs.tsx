import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/admissions/pgdcs")({
  head: () => ({
    meta: [
      { title: "PGDCS Admission | GTU-ITR" },
      { name: "description", content: "Admission to the PG Diploma in Cyber Security." },
      { property: "og:title", content: "PGDCS Admission | GTU-ITR" },
      { property: "og:description", content: "Admission to the PG Diploma in Cyber Security." },
      { property: "og:url", content: "/admissions/pgdcs" },
    ],
    links: [{ rel: "canonical", href: "/admissions/pgdcs" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="PGDCS Admission" subtitle="Admission to the PG Diploma in Cyber Security.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Eligibility</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Graduates in engineering, computer applications or science streams as prescribed by Gujarat Technological University may apply.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">How to Apply</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Admission notifications are published on this website and on the GTU website. Interested candidates may also contact the institute office at admission_gperi@gtu.edu.in.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

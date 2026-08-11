import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/admissions/diploma")({
  head: () => ({
    meta: [
      { title: "Diploma Engineering Admission | GTU-ITR" },
      { name: "description", content: "Admission after Standard X through ACPDC." },
      { property: "og:title", content: "Diploma Engineering Admission | GTU-ITR" },
      { property: "og:description", content: "Admission after Standard X through ACPDC." },
      { property: "og:url", content: "/admissions/diploma" },
    ],
    links: [{ rel: "canonical", href: "/admissions/diploma" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Diploma Engineering Admission" subtitle="Admission after Standard X through ACPDC.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Programmes Offered</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Diploma in Computer Engineering, Civil Engineering, Mechanical Engineering and Electrical Engineering.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Eligibility</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Candidates must have passed Standard X with the required percentage in Mathematics, Science and English as prescribed by the admission authority.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Admission Process</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Admission is conducted online by the Admission Committee for Professional Diploma Courses (ACPDC), Government of Gujarat, through merit-based counselling rounds.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/admissions/degree")({
  head: () => ({
    meta: [
      { title: "Degree Engineering (BE) Admission | GTU-ITR" },
      { name: "description", content: "Admission through ACPC, Government of Gujarat." },
      { property: "og:title", content: "Degree Engineering (BE) Admission | GTU-ITR" },
      { property: "og:description", content: "Admission through ACPC, Government of Gujarat." },
      { property: "og:url", content: "/admissions/degree" },
    ],
    links: [{ rel: "canonical", href: "/admissions/degree" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Degree Engineering (BE) Admission" subtitle="Admission through ACPC, Government of Gujarat.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Programmes Offered</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Bachelor of Engineering in Computer Engineering, Civil Engineering, Mechanical Engineering and Electrical Engineering.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Eligibility</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Candidates must have passed Standard XII (Science) with Physics, Chemistry and Mathematics and appeared in GUJCET / JEE (Main) as prescribed. Diploma holders may apply for lateral entry into the second year (D2D).</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Admission Process</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Admission is granted through the centralised online admission process conducted by the Admission Committee for Professional Courses (ACPC), Government of Gujarat. Candidates register online, upload documents, participate in choice filling and are allotted seats through merit-based counselling rounds.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Contact</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>For admission guidance, email admission_gperi@gtu.edu.in or call +91-9909039233.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/admissions/msc-it")({
  head: () => ({
    meta: [
      { title: "M.Sc. IT Admission | GTU-ITR" },
      { name: "description", content: "Admission to the Integrated M.Sc. in Information Technology." },
      { property: "og:title", content: "M.Sc. IT Admission | GTU-ITR" },
      { property: "og:description", content: "Admission to the Integrated M.Sc. in Information Technology." },
      { property: "og:url", content: "/admissions/msc-it" },
    ],
    links: [{ rel: "canonical", href: "/admissions/msc-it" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="M.Sc. IT Admission" subtitle="Admission to the Integrated M.Sc. in Information Technology.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Eligibility</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Candidates who have passed Standard XII in any stream with Mathematics as prescribed by Gujarat Technological University are eligible to apply for the five-year integrated programme.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">How to Apply</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Applications are invited through the university admission notification. Candidates should watch the news section on this website and the GTU website for the schedule.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

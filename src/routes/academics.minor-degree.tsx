import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/minor-degree")({
  head: () => ({
    meta: [
      { title: "Minor Degree (BE) | GTU-ITR" },
      { name: "description", content: "Add a second specialisation alongside your major." },
      { property: "og:title", content: "Minor Degree (BE) | GTU-ITR" },
      { property: "og:description", content: "Add a second specialisation alongside your major." },
      { property: "og:url", content: "/academics/minor-degree" },
    ],
    links: [{ rel: "canonical", href: "/academics/minor-degree" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Minor Degree (BE)" subtitle="Add a second specialisation alongside your major.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Minor Degree</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Minor Degree programme allows BE students to earn an additional specialisation alongside their major discipline by completing a prescribed set of extra credits, as permitted by Gujarat Technological University.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Available Minors</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Minors are offered in emerging areas such as artificial intelligence and machine learning, data science, cyber security, electric vehicles, renewable energy and construction technology, subject to availability each year.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Eligibility</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Students who have cleared prescribed semesters with the required CPI may apply for a minor from the third semester onwards. Details are announced by the institute at the start of each academic year.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

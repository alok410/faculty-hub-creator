import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/regulations")({
  head: () => ({
    meta: [
      { title: "Regulations & Discipline | GTU-ITR" },
      { name: "description", content: "Code of conduct for students of GTU-ITR." },
      { property: "og:title", content: "Regulations & Discipline | GTU-ITR" },
      { property: "og:description", content: "Code of conduct for students of GTU-ITR." },
      { property: "og:url", content: "/regulations" },
    ],
    links: [{ rel: "canonical", href: "/regulations" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Regulations & Discipline" subtitle="Code of conduct for students of GTU-ITR.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">General Discipline</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Students must carry their identity card at all times on campus, maintain minimum attendance as prescribed by the university, and behave courteously with faculty, staff and fellow students.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Prohibited Conduct</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Ragging, use of tobacco, alcohol or any intoxicant, damage to institute property, unauthorised use of mobile phones during class or examinations, and any act of indiscipline are strictly prohibited and attract disciplinary action.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Examination Rules</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Unfair means during examinations are dealt with as per the university's examination regulations, which may lead to cancellation of the examination and further penalties.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

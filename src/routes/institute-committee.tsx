import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/institute-committee")({
  head: () => ({
    meta: [
      { title: "Institute Committee | GTU-ITR" },
      { name: "description", content: "Committees that govern academic and student affairs." },
      { property: "og:title", content: "Institute Committee | GTU-ITR" },
      { property: "og:description", content: "Committees that govern academic and student affairs." },
      { property: "og:url", content: "/institute-committee" },
    ],
    links: [{ rel: "canonical", href: "/institute-committee" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Institute Committee" subtitle="Committees that govern academic and student affairs.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Committees</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Academic Monitoring Committee, Examination Committee, Anti-Ragging Committee, Internal Complaints Committee, Student Grievance Redressal Committee, Training &amp; Placement Committee, Library Committee, Sports &amp; Cultural Committee, Purchase Committee and Alumni Committee.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Purpose</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Each committee comprises faculty members, senior administrative staff and, where applicable, student representatives. Committees meet periodically and their recommendations guide institute policy.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/registrar-message")({
  head: () => ({
    meta: [
      { title: "Registrar's Message | GTU-ITR" },
      { name: "description", content: "Registrar's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:title", content: "Registrar's Message | GTU-ITR" },
      { property: "og:description", content: "Registrar's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:url", content: "/registrar-message" },
    ],
    links: [{ rel: "canonical", href: "/registrar-message" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Registrar's Message">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">From the Registrar</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>GTU-ITR functions with transparency, discipline and a strong student-first administrative culture. From admissions to examinations, every process is designed to be simple and fair for students and parents alike.</p>
          <p>We remain committed to providing an environment where academic excellence and personal growth go hand in hand.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

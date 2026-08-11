import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission | GTU-ITR" },
      { name: "description", content: "The guiding purpose of GTU-ITR." },
      { property: "og:title", content: "Vision & Mission | GTU-ITR" },
      { property: "og:description", content: "The guiding purpose of GTU-ITR." },
      { property: "og:url", content: "/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/vision-mission" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Vision & Mission" subtitle="The guiding purpose of GTU-ITR.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Vision</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>To be a globally recognised institute of technology and research that nurtures competent engineers, innovators and responsible citizens who contribute to sustainable societal development.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Mission</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>To impart quality technical education through an industry-aligned curriculum and experiential learning. To promote research, innovation and entrepreneurship among students and faculty. To develop professional ethics, leadership and social responsibility. To build strong linkages with industry, alumni and the community.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

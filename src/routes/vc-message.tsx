import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/vc-message")({
  head: () => ({
    meta: [
      { title: "Vice Chancellor's Message | GTU-ITR" },
      { name: "description", content: "Vice Chancellor's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:title", content: "Vice Chancellor's Message | GTU-ITR" },
      { property: "og:description", content: "Vice Chancellor's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:url", content: "/vc-message" },
    ],
    links: [{ rel: "canonical", href: "/vc-message" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Vice Chancellor's Message">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">From the Vice Chancellor</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Gujarat Technological University has consistently worked towards making technical education accessible, industry relevant and research driven. GTU-ITR is a flagship campus of the University where this philosophy is translated into practice every single day.</p>
          <p>Our students are encouraged to look beyond textbooks - to build, to question and to innovate. I invite young aspirants to join us and become part of an ecosystem that prepares engineers for the demands of a rapidly changing world.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/media-coverage")({
  head: () => ({
    meta: [
      { title: "Media Coverage | GTU-ITR" },
      { name: "description", content: "GTU-ITR in the press." },
      { property: "og:title", content: "Media Coverage | GTU-ITR" },
      { property: "og:description", content: "GTU-ITR in the press." },
      { property: "og:url", content: "/media-coverage" },
    ],
    links: [{ rel: "canonical", href: "/media-coverage" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Media Coverage" subtitle="GTU-ITR in the press.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">In the News</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Institute events, student achievements, industry collaborations and admission announcements are regularly covered by regional and state media. Clippings are displayed on the institute notice board and archived at the office.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Newsletter</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The GTU-ITR newsletter, published periodically, is available online through the GTU-ITR Media menu.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

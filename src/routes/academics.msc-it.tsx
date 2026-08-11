import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/msc-it")({
  head: () => ({
    meta: [
      { title: "Integrated M.Sc. in Information Technology | GTU-ITR" },
      { name: "description", content: "A five-year integrated programme in IT." },
      { property: "og:title", content: "Integrated M.Sc. in Information Technology | GTU-ITR" },
      { property: "og:description", content: "A five-year integrated programme in IT." },
      { property: "og:url", content: "/academics/msc-it" },
    ],
    links: [{ rel: "canonical", href: "/academics/msc-it" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Integrated M.Sc. in Information Technology" subtitle="A five-year integrated programme in IT.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Programme Overview</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Integrated M.Sc. in Information Technology is a five-year programme that admits students after Standard XII and awards a postgraduate degree, covering programming, data structures, databases, networks, web and mobile development, cloud computing, artificial intelligence and data science.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Career Paths</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Graduates work as software engineers, data analysts, cloud engineers, cyber security analysts and IT consultants, or pursue further research.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

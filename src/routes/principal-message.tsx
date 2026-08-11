import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/principal-message")({
  head: () => ({
    meta: [
      { title: "Principal's Message | GTU-ITR" },
      { name: "description", content: "Principal's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:title", content: "Principal's Message | GTU-ITR" },
      { property: "og:description", content: "Principal's Message at GTU Institute of Technology & Research, Mehsana." },
      { property: "og:url", content: "/principal-message" },
    ],
    links: [{ rel: "canonical", href: "/principal-message" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Principal's Message">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">From the Principal</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>It gives me immense pleasure to welcome you to GTU - Institute of Technology &amp; Research. Our institute offers degree and diploma programmes in Computer, Civil, Mechanical and Electrical Engineering along with an Integrated M.Sc. in Information Technology and a PG Diploma in Cyber Security.</p>
          <p>Our focus is holistic: rigorous academics supported by hands-on laboratory work, industry exposure, sports, cultural activities and community service. I assure every student and parent of our full commitment to their success.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

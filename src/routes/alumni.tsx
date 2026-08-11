import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni | GTU-ITR" },
      { name: "description", content: "Our graduates across industry, research and entrepreneurship." },
      { property: "og:title", content: "Alumni | GTU-ITR" },
      { property: "og:description", content: "Our graduates across industry, research and entrepreneurship." },
      { property: "og:url", content: "/alumni" },
    ],
    links: [{ rel: "canonical", href: "/alumni" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Alumni" subtitle="Our graduates across industry, research and entrepreneurship.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Alumni Association</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The GTU-ITR Alumni Association connects graduates with the institute and with each other. Alumni contribute through guest lectures, mentoring, internship referrals, placement support and participation in annual alumni meets.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Stay Connected</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Alumni are invited to register with the institute office to receive updates about reunions, institute developments and opportunities to contribute.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/anti-ragging")({
  head: () => ({
    meta: [
      { title: "Anti Ragging | GTU-ITR" },
      { name: "description", content: "Ragging is strictly prohibited and punishable by law." },
      { property: "og:title", content: "Anti Ragging | GTU-ITR" },
      { property: "og:description", content: "Ragging is strictly prohibited and punishable by law." },
      { property: "og:url", content: "/anti-ragging" },
    ],
    links: [{ rel: "canonical", href: "/anti-ragging" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Anti Ragging" subtitle="Ragging is strictly prohibited and punishable by law.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Zero Tolerance</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>GTU-ITR follows a strict zero-tolerance policy towards ragging in any form, inside or outside the campus, in accordance with UGC and AICTE regulations and the directions of the Hon'ble Supreme Court of India.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Anti-Ragging Committee</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The institute has constituted an Anti-Ragging Committee and Anti-Ragging Squad comprising faculty members, administrative staff and student representatives. Surprise checks are conducted throughout the year.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Report Ragging</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>National Anti-Ragging Helpline: 1800-180-5522 (toll free), email helpline@antiragging.in. Incidents may also be reported directly to the Principal or any member of the Anti-Ragging Committee.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

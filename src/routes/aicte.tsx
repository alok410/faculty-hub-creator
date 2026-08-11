import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/aicte")({
  head: () => ({
    meta: [
      { title: "AICTE - Extension of Approval | GTU-ITR" },
      { name: "description", content: "Approval documents and AICTE resources." },
      { property: "og:title", content: "AICTE - Extension of Approval | GTU-ITR" },
      { property: "og:description", content: "Approval documents and AICTE resources." },
      { property: "og:url", content: "/aicte" },
    ],
    links: [{ rel: "canonical", href: "/aicte" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="AICTE - Extension of Approval" subtitle="Approval documents and AICTE resources.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Extension of Approval (EoA)</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>GTU-ITR is approved by the All India Council for Technical Education. Extension of Approval letters for each academic year are maintained at the institute office and are available on request.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">AICTE Resources</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>AICTE 360 degree feedback form, AICTE student scholarship schemes and the Internship Embedded Programme (IEP) portal are linked from the AICTE menu in the navigation bar.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

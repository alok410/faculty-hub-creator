import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      { title: "Mandatory Disclosure | GTU-ITR" },
      { name: "description", content: "Information published as per AICTE norms." },
      { property: "og:title", content: "Mandatory Disclosure | GTU-ITR" },
      { property: "og:description", content: "Information published as per AICTE norms." },
      { property: "og:url", content: "/mandatory-disclosure" },
    ],
    links: [{ rel: "canonical", href: "/mandatory-disclosure" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Mandatory Disclosure" subtitle="Information published as per AICTE norms.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Institute Details</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Name: Gujarat Technological University - Institute of Technology &amp; Research (GTU-ITR). Address: Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway, Ta. &amp; Dist. Mehsana - 384460, Gujarat, India. Email: admission_gperi@gtu.edu.in. Phone: +91-9909039233.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Approvals &amp; Affiliation</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The institute is approved by the All India Council for Technical Education (AICTE), New Delhi and is managed by Gujarat Technological University. Extension of Approval letters are published on the AICTE page of this website.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Governance</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The institute is governed by the University's statutory bodies together with institute-level committees for academics, examinations, grievance redressal, anti-ragging, women empowerment and training &amp; placement.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

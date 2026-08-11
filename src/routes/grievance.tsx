import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/grievance")({
  head: () => ({
    meta: [
      { title: "Student Grievance Redressal Committee | GTU-ITR" },
      { name: "description", content: "A fair and confidential mechanism to raise concerns." },
      { property: "og:title", content: "Student Grievance Redressal Committee | GTU-ITR" },
      { property: "og:description", content: "A fair and confidential mechanism to raise concerns." },
      { property: "og:url", content: "/grievance" },
    ],
    links: [{ rel: "canonical", href: "/grievance" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Student Grievance Redressal Committee" subtitle="A fair and confidential mechanism to raise concerns.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Purpose</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Student Grievance Redressal Committee provides students a transparent forum to raise academic, administrative or personal grievances and ensures timely resolution.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">How to Submit a Grievance</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Grievances may be submitted in writing to the committee convener at the institute office or by email to admission_gperi@gtu.edu.in. Every complaint is acknowledged and reviewed confidentially.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

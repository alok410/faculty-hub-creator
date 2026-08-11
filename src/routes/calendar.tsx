import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Academic Calendar | GTU-ITR" },
      { name: "description", content: "Semester schedule, examinations and holidays." },
      { property: "og:title", content: "Academic Calendar | GTU-ITR" },
      { property: "og:description", content: "Semester schedule, examinations and holidays." },
      { property: "og:url", content: "/calendar" },
    ],
    links: [{ rel: "canonical", href: "/calendar" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Academic Calendar" subtitle="Semester schedule, examinations and holidays.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Academic Schedule</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The academic calendar is published by Gujarat Technological University at the start of every academic year and includes commencement of terms, internal examination weeks, practical examinations, university examinations, vacation periods and institute holidays.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Note</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Students are advised to check the notice board and the news section on the homepage regularly for any revision to the schedule.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

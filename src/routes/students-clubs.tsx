import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/students-clubs")({
  head: () => ({
    meta: [
      { title: "Students Clubs | GTU-ITR" },
      { name: "description", content: "Technical, cultural, sports and social clubs run by students." },
      { property: "og:title", content: "Students Clubs | GTU-ITR" },
      { property: "og:description", content: "Technical, cultural, sports and social clubs run by students." },
      { property: "og:url", content: "/students-clubs" },
    ],
    links: [{ rel: "canonical", href: "/students-clubs" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Students Clubs" subtitle="Technical, cultural, sports and social clubs run by students.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Clubs at GTU-ITR</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Coding &amp; Robotics Club, Civil Engineering Association, Mechanical Engineering Club, Electrical Engineering Forum, Literary &amp; Debating Club, Music and Dance Club, Photography Club, Sports Club and the NSS unit.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">How to Join</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Club registrations open at the start of every academic year. Interested students may contact the respective faculty coordinator or the student council.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/placement")({
  head: () => ({
    meta: [
      { title: "Training & Placement | GTU-ITR" },
      { name: "description", content: "A temple for career development where students and recruiters come together." },
      { property: "og:title", content: "Training & Placement | GTU-ITR" },
      { property: "og:description", content: "A temple for career development where students and recruiters come together." },
      { property: "og:url", content: "/placement" },
    ],
    links: [{ rel: "canonical", href: "/placement" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Training & Placement" subtitle="A temple for career development where students and recruiters come together.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Cell</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Training and Placement Cell of GTU-ITR is a dedicated unit that bridges the gap between academia and industry. The cell organises campus drives, pre-placement talks, aptitude and soft-skill training, mock interviews and internships.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Training Activities</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Aptitude and reasoning classes, technical skill bootcamps, communication and personality development sessions, resume writing workshops, group discussion practice and industry expert lectures throughout the academic year.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">For Recruiters</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Companies interested in campus recruitment may contact the Training &amp; Placement Officer at admission_gperi@gtu.edu.in or +91-9909039233 to schedule a drive.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

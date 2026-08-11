import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/siemens")({
  head: () => ({
    meta: [
      { title: "SIEMENS Centre of Excellence | GTU-ITR" },
      { name: "description", content: "Industrial automation training established by the Government of Gujarat." },
      { property: "og:title", content: "SIEMENS Centre of Excellence | GTU-ITR" },
      { property: "og:description", content: "Industrial automation training established by the Government of Gujarat." },
      { property: "og:url", content: "/siemens" },
    ],
    links: [{ rel: "canonical", href: "/siemens" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="SIEMENS Centre of Excellence" subtitle="Industrial automation training established by the Government of Gujarat.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">About the Centre</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The SIEMENS Centre of Excellence in industrial automation at GTU-ITR was established by the Government of Gujarat. It houses nine laboratories equipped with world-class equipment.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Training Programmes</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The centre offers around 60 short-term training courses covering CNC technology, mechatronics, product design and validation, process instrumentation, industrial automation, electrical control gear, industrial robotics, low voltage switchgear and manufacturing execution systems.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Who Can Apply</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Courses are open to engineering students, working professionals and industry personnel. For schedules and enrolment, contact the institute office.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

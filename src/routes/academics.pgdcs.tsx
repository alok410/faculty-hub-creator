import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/academics/pgdcs")({
  head: () => ({
    meta: [
      { title: "PG Diploma in Cyber Security (PGDCS) | GTU-ITR" },
      { name: "description", content: "Specialised postgraduate training in cyber security." },
      { property: "og:title", content: "PG Diploma in Cyber Security (PGDCS) | GTU-ITR" },
      { property: "og:description", content: "Specialised postgraduate training in cyber security." },
      { property: "og:url", content: "/academics/pgdcs" },
    ],
    links: [{ rel: "canonical", href: "/academics/pgdcs" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="PG Diploma in Cyber Security (PGDCS)" subtitle="Specialised postgraduate training in cyber security.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Programme Overview</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The Post Graduate Diploma in Cyber Security equips graduates with practical skills in network security, ethical hacking, digital forensics, secure application development, cryptography, cyber law and incident response.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Eligibility</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Open to graduates in engineering, computer applications or science streams as prescribed by Gujarat Technological University.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

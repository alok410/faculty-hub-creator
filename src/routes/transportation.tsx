import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/transportation")({
  head: () => ({
    meta: [
      { title: "Transportation | GTU-ITR" },
      { name: "description", content: "Safe and reliable bus service across Mehsana and nearby towns." },
      { property: "og:title", content: "Transportation | GTU-ITR" },
      { property: "og:description", content: "Safe and reliable bus service across Mehsana and nearby towns." },
      { property: "og:url", content: "/transportation" },
    ],
    links: [{ rel: "canonical", href: "/transportation" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Transportation" subtitle="Safe and reliable bus service across Mehsana and nearby towns.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Bus Facility</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>The institute provides a transportation facility for students and staff from Mehsana, Ahmedabad, Kadi, Visnagar, Unjha, Vijapur and surrounding areas. Buses operate on fixed routes timed to the institute schedule.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Booking &amp; Fees</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Transport passes are issued at the beginning of each academic year from the institute office. For route details and fees, contact +91-9909039233.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

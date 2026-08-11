import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | GTU-ITR" },
      { name: "description", content: "First ever degree engineering institution in North Gujarat managed by Gujarat Technological University." },
      { property: "og:title", content: "About Us | GTU-ITR" },
      { property: "og:description", content: "First ever degree engineering institution in North Gujarat managed by Gujarat Technological University." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="About Us" subtitle="First ever degree engineering institution in North Gujarat managed by Gujarat Technological University.">
      <Prose>
        <section>
          <h2 className="section-title text-xl md:text-2xl">Our Institute</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Gujarat Technological University - Institute of Technology &amp; Research (GTU-ITR), formerly known as GPERI, is the first ever degree engineering institution in the North Gujarat region managed directly by Gujarat Technological University. The institute is located near Mevad toll-booth on the Ahmedabad - Mehsana Express Highway in Mehsana district.</p>
          <p>The campus is spread over lush green landscapes and water ponds. Its architecture borrows several features such as maximum natural light, low electricity consumption and solar roof-top energy generation, making it one of the most elegant campuses in the region.</p>
        </section>
        <section>
          <h2 className="section-title text-xl md:text-2xl">What Makes Us Different</h2>
          <div className="mt-2 mb-3 h-1 w-14 bg-brand-red" />
          <p>Experienced faculty members from higher seats of learning such as IITs and NITs, a SIEMENS Centre of Excellence in industrial automation established by the Government of Gujarat, 52 well-equipped laboratories, a library with more than 11,553 books, strong industry linkage and a dedicated training and placement cell.</p>
        </section>
      </Prose>
    </PageShell>
  );
}

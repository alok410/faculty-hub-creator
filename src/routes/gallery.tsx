import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | GTU-ITR" },
      { name: "description", content: "Moments from campus, classrooms, laboratories and events." },
      { property: "og:title", content: "Gallery | GTU-ITR" },
      { property: "og:description", content: "Moments from campus, classrooms, laboratories and events." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell title="Gallery" subtitle="Moments from campus, classrooms, laboratories and events.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["/site/s1.jpg","/site/x2.jpg","/site/x3.jpg","/site/x4.jpg","/site/x5.jpg","/site/x6.jpeg","/site/Banner2.png"].map((src) => (
          <img key={src} src={src} alt="GTU-ITR campus" loading="lazy" className="h-56 w-full border border-border object-cover shadow-sm" />
        ))}
      </div>      <Prose>

      </Prose>
    </PageShell>
  );
}

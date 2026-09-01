import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { EVENTS } from "@/content/events";
import { Stagger, StaggerItem } from "@/components/motion/motion-primitives";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Happenings | GTU-ITR" },
      {
        name: "description",
        content:
          "Upcoming and recent events at GTU Institute of Technology & Research, Mehsana - technical workshops, cultural fests, sports meets, seminars and placement drives.",
      },
      { property: "og:title", content: "Events & Happenings | GTU-ITR" },
      {
        property: "og:description",
        content: "Workshops, cultural fests, sports meets, seminars and placement drives at GTU-ITR Mehsana.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageShell title="Events & Happenings" subtitle="Workshops, fests, seminars, sports and placement drives at GTU-ITR. Click any event to view its full page.">
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <StaggerItem
            key={e.id}
            className="group h-full overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Link to="/events/$eventId" params={{ eventId: e.id }} className="flex h-full flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 bg-brand-red px-3 py-1.5 text-center leading-none text-primary-foreground shadow-md">
                  <p className="font-display text-xl">{e.day}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest">{e.month}</p>
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-brand-navy/85 px-2.5 py-1 text-[10px] font-semibold text-primary-foreground backdrop-blur-sm">
                  Click for details
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="inline-block bg-brand-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    {e.tag}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold uppercase leading-snug text-brand-navy transition-colors group-hover:text-brand-red">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{e.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs font-semibold uppercase tracking-wide text-brand-red">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> {e.day} {e.month} {e.year || "2026"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-red">
                    Full Page <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </PageShell>
  );
}

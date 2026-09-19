import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CalendarDays, ArrowRight, FileDown, Sparkles, Cpu, Palette, Trophy, Layers } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { EVENTS } from "@/content/events";
import { Stagger, StaggerItem } from "@/components/motion/motion-primitives";
import { downloadEventReport } from "@/lib/event-report-pdf";

export type EventCategoryKey = "all" | "technical" | "cultural" | "sports";

type EventsSearch = { category?: EventCategoryKey | string | undefined };

export const Route = createFileRoute("/events")({
  validateSearch: (search: Record<string, unknown>): EventsSearch => {
    const raw = typeof search.category === "string" ? search.category.toLowerCase() : "all";
    const valid: EventCategoryKey[] = ["all", "technical", "cultural", "sports"];
    return {
      category: valid.includes(raw as EventCategoryKey) ? (raw as EventCategoryKey) : "all",
    };
  },
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

const SUBMENU_TABS = [
  {
    key: "all" as const,
    label: "All Events",
    icon: Sparkles,
    description: "Explore all upcoming technical workshops, cultural celebrations, sports championships, and campus meets.",
  },
  {
    key: "technical" as const,
    label: "Technical",
    icon: Cpu,
    description: "Hands-on industrial automation workshops, technical quizzes, seminars, coding challenges, and CoE certifications.",
  },
  {
    key: "cultural" as const,
    label: "Cultural",
    icon: Palette,
    description: "The annual Kaushalya cultural festival, Navratri Garba, youth celebrations, music, dance, theatre, and arts.",
  },
  {
    key: "sports" as const,
    label: "Sports",
    icon: Trophy,
    description: "Shaurya annual sports tournament, inter-college cricket championships, athletics, volleyball, kabaddi, and indoor games.",
  },
];

function EventsPage() {
  const { category = "all" } = Route.useSearch();
  const navigate = useNavigate();

  const activeCategory: EventCategoryKey = (
    ["all", "technical", "cultural", "sports"].includes(category.toLowerCase() as EventCategoryKey)
      ? category.toLowerCase()
      : "all"
  ) as EventCategoryKey;

  const currentTab = SUBMENU_TABS.find((t) => t.key === activeCategory) ?? SUBMENU_TABS[0]!;

  const filteredEvents = EVENTS.filter((e) => {
    if (activeCategory === "all") return true;
    return e.category.toLowerCase() === activeCategory;
  });

  const counts: Record<EventCategoryKey, number> = {
    all: EVENTS.length,
    technical: EVENTS.filter((e) => e.category.toLowerCase() === "technical").length,
    cultural: EVENTS.filter((e) => e.category.toLowerCase() === "cultural").length,
    sports: EVENTS.filter((e) => e.category.toLowerCase() === "sports").length,
  };

  return (
    <PageShell
      title="Events & Happenings"
      subtitle="Explore institutional life at GTU-ITR — technical workshops, cultural festivals, sports tournaments and expert seminars."
    >
      {/* ── Submenu Navigation Bar (Technical, Cultural, Sports) ── */}
      <div className="mb-8 rounded-xl border border-border bg-card p-3 shadow-sm md:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {SUBMENU_TABS.map((tab) => {
              const isActive = tab.key === activeCategory;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() =>
                    navigate({
                      to: "/events",
                      search: { category: tab.key },
                      replace: true,
                    })
                  }
                  className={`group relative flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 md:text-sm ${
                    isActive
                      ? "bg-brand-navy text-white shadow-md ring-2 ring-brand-navy/30"
                      : "border border-border bg-background text-foreground/80 hover:border-brand-navy/40 hover:bg-muted hover:text-brand-navy"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                      isActive ? "text-brand-gold" : "text-muted-foreground group-hover:text-brand-navy"
                    }`}
                  />
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold transition-colors ${
                      isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {counts[tab.key]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden text-right text-xs text-muted-foreground md:block">
            Showing <strong className="text-foreground">{filteredEvents.length}</strong> of {EVENTS.length} events
          </div>
        </div>

        {/* Submenu Category Context Banner */}
        <div className="mt-3.5 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="font-semibold uppercase tracking-wider text-brand-navy">
              {currentTab.label}:
            </span>
            <span>{currentTab.description}</span>
          </p>
        </div>
      </div>

      {/* ── Events Grid ── */}
      {filteredEvents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <Layers className="mx-auto h-10 w-10 text-muted-foreground/60" />
          <h3 className="mt-3 font-heading text-lg font-bold text-foreground">No events found in this category</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Check back soon for upcoming {currentTab.label.toLowerCase()} events at GTU-ITR.
          </p>
          <button
            type="button"
            onClick={() => navigate({ to: "/events", search: { category: "all" }, replace: true })}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>View All Events</span>
          </button>
        </div>
      ) : (
        <Stagger key={activeCategory} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((e) => (
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
                    {e.category}
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
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-xs font-semibold uppercase tracking-wide text-brand-red">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {e.day} {e.month} {e.year || "2026"}
                      </span>
                      <button
                        type="button"
                        onClick={(ev) => {
                          ev.preventDefault();
                          ev.stopPropagation();
                          downloadEventReport(e);
                        }}
                        className="inline-flex cursor-pointer items-center gap-1 rounded bg-brand-navy/10 px-2 py-0.5 text-[10px] font-bold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
                        title="Download Event Report / PDF"
                      >
                        <FileDown className="h-3 w-3 text-brand-red" />
                        <span>Report / PDF</span>
                      </button>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-red">
                      Full Page <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </PageShell>
  );
}

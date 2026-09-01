import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { getEventById, EVENTS } from "@/content/events";
import { FadeIn } from "@/components/motion/motion-primitives";
import { toast } from "sonner";

export const Route = createFileRoute("/events_/$eventId")({
  head: ({ params }) => {
    const event = getEventById(params.eventId);
    const title = event ? `${event.title} | GTU-ITR Events` : "Event Details | GTU-ITR";
    const description = event ? event.description : "Event details at GTU-ITR Mehsana";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/events/${params.eventId}` },
      ],
      links: [{ rel: "canonical", href: `/events/${params.eventId}` }],
    };
  },
  component: EventDetailPage,
});

function EventDetailPage() {
  const { eventId } = Route.useParams();
  const event = getEventById(eventId);

  if (!event) {
    return (
      <PageShell title="Event Not Found" subtitle="The requested event could not be found.">
        <div className="py-16 text-center">
          <p className="text-muted-foreground">We couldn't find an event matching this URL.</p>
          <Link
            to="/events"
            className="mt-6 inline-flex items-center gap-2 bg-brand-navy px-5 py-2.5 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-brand-red"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Events
          </Link>
        </div>
      </PageShell>
    );
  }

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Event link copied to clipboard!");
    }
  };

  const otherEvents = EVENTS.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <PageShell title={event.title} subtitle={`${event.tag} Event • GTU Institute of Technology & Research`}>
      {/* Back Button & Share */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:text-brand-red"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Events
        </Link>
        <button
          onClick={handleShare}
          type="button"
          className="inline-flex cursor-pointer items-center gap-2 rounded border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:border-brand-red hover:text-brand-red"
        >
          <Share2 className="h-3.5 w-3.5" /> Share Event
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Main Content */}
        <FadeIn className="space-y-8">
          {/* Banner Image with Date Badge */}
          <div className="relative overflow-hidden border border-border bg-card shadow-md">
            <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px]">
              <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="bg-brand-red px-3 py-1 text-center text-primary-foreground shadow-md">
                  <span className="block font-display text-2xl font-bold leading-none">{event.day}</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest leading-tight">
                    {event.month}
                  </span>
                </span>
                <span className="bg-brand-navy px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md">
                  {event.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h1 className="font-heading text-xl font-extrabold uppercase tracking-tight text-white drop-shadow-md md:text-2xl">
                  {event.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3 border border-border bg-brand-surface p-4 shadow-sm">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</p>
                <p className="mt-0.5 text-sm font-bold text-brand-navy">
                  {event.day} {event.month} {event.year || "2026"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-border bg-brand-surface p-4 shadow-sm">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Time</p>
                <p className="mt-0.5 text-sm font-bold text-brand-navy">{event.time || "Full Day Event"}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-border bg-brand-surface p-4 shadow-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Venue</p>
                <p className="mt-0.5 text-sm font-bold text-brand-navy">{event.venue || "GTU-ITR Campus, Mehsana"}</p>
              </div>
            </div>
          </div>

          {/* About Event / Description */}
          <section className="border border-border bg-card p-6 shadow-sm">
            <h2 className="section-title text-xl">Event Overview</h2>
            <div className="mb-4 mt-2 h-1 w-14 bg-brand-red" />
            <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
              {event.fullDescription ? (
                event.fullDescription.map((para, idx) => <p key={idx}>{para}</p>)
              ) : (
                <p>{event.description}</p>
              )}
            </div>
          </section>

          {/* Key Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <section className="border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-red" />
                <h2 className="section-title text-xl">Key Highlights</h2>
              </div>
              <div className="mb-4 mt-2 h-1 w-14 bg-brand-red" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {event.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Schedule Timeline */}
          {event.schedule && event.schedule.length > 0 && (
            <section className="border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-red" />
                <h2 className="section-title text-xl">Event Schedule</h2>
              </div>
              <div className="mb-6 mt-2 h-1 w-14 bg-brand-red" />
              <div className="relative space-y-6 border-l-2 border-brand-navy/20 pl-6">
                {event.schedule.map((slot, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-brand-red bg-card transition-colors group-hover:bg-brand-red" />
                    <span className="inline-block bg-brand-navy/10 px-2 py-0.5 text-xs font-bold text-brand-navy">
                      {slot.time}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-foreground">{slot.activity}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </FadeIn>

        {/* Sidebar Info */}
        <FadeIn as="aside" delay={0.15} className="space-y-6">
          {/* Details Card */}
          <div className="border border-border bg-card p-6 shadow-sm">
            <h3 className="border-b border-border pb-3 font-heading text-base font-bold uppercase tracking-wider text-brand-navy">
              Event Details
            </h3>
            <div className="mt-4 space-y-4 text-xs">
              {event.organizer && (
                <div>
                  <p className="flex items-center gap-1.5 font-bold uppercase text-muted-foreground">
                    <Award className="h-3.5 w-3.5 text-brand-red" /> Organized By
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{event.organizer}</p>
                </div>
              )}
              {event.targetAudience && (
                <div>
                  <p className="flex items-center gap-1.5 font-bold uppercase text-muted-foreground">
                    <Users className="h-3.5 w-3.5 text-brand-red" /> Target Audience
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{event.targetAudience}</p>
                </div>
              )}
              <div>
                <p className="flex items-center gap-1.5 font-bold uppercase text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-brand-red" /> Location
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{event.venue || "GTU-ITR Mehsana"}</p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <Link
                to="/enquiry"
                className="block w-full bg-brand-red py-3 text-center font-heading text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-brand-navy hover:shadow-md"
              >
                Register / Enquire for Event
              </Link>
            </div>
          </div>

          {/* Contact Person Card */}
          {event.contactPerson && (
            <div className="border border-border bg-brand-surface p-6 shadow-sm">
              <h3 className="border-b border-border pb-2 font-heading text-sm font-bold uppercase tracking-wider text-brand-navy">
                Event Contact
              </h3>
              <div className="mt-3 space-y-2 text-xs">
                <p className="flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                  <User className="h-4 w-4 text-brand-red" /> {event.contactPerson.name}
                </p>
                <p className="pl-6 text-muted-foreground">{event.contactPerson.role}</p>
                {event.contactPerson.email && (
                  <p className="flex items-center gap-2 pl-6 pt-1 text-foreground/90">
                    <Mail className="h-3.5 w-3.5 text-brand-red" /> {event.contactPerson.email}
                  </p>
                )}
                {event.contactPerson.phone && (
                  <p className="flex items-center gap-2 pl-6 text-foreground/90">
                    <Phone className="h-3.5 w-3.5 text-brand-red" /> {event.contactPerson.phone}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Other Events Sidebar widget */}
          <div className="border border-border bg-card p-6 shadow-sm">
            <h3 className="border-b border-border pb-2 font-heading text-sm font-bold uppercase tracking-wider text-brand-navy">
              Other Upcoming Events
            </h3>
            <div className="mt-4 space-y-4 divide-y divide-border">
              {otherEvents.map((oe) => (
                <Link
                  key={oe.id}
                  to="/events/$eventId"
                  params={{ eventId: oe.id }}
                  className="group block pt-3 first:pt-0"
                >
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 bg-brand-navy px-2 py-1 text-center leading-none text-primary-foreground">
                      <span className="block font-display text-sm font-bold">{oe.day}</span>
                      <span className="block text-[8px] uppercase">{oe.month}</span>
                    </span>
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase leading-snug text-brand-navy transition-colors group-hover:text-brand-red">
                        {oe.title}
                      </h4>
                      <p className="mt-1 line-clamp-1 text-[11px] text-muted-foreground">{oe.tag}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/events"
              className="mt-4 block text-center text-xs font-bold uppercase text-brand-red hover:underline"
            >
              View All Events →
            </Link>
          </div>
        </FadeIn>
      </div>
    </PageShell>
  );
}

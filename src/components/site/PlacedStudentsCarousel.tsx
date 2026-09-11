import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, Building2, ChevronRight, Sparkles } from "lucide-react";
import { PLACED_STUDENTS, type PlacedStudent } from "@/content/placed-students";

function PlacedStudentCard({ student }: { student: PlacedStudent }) {
  const [imgError, setImgError] = React.useState(false);

  // Fallback initials if image fails
  const initials = student.name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-navy/40 hover:shadow-lg">
      {/* Photo Container */}
      <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-muted/40">
        {!imgError ? (
          <img
            src={student.image}
            alt={student.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => {
              if (student.fallbackImage && student.image !== student.fallbackImage) {
                // Try remote fallback first
                student.image = student.fallbackImage;
              } else {
                setImgError(true);
              }
            }}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-navy/10 text-xl font-bold text-brand-navy">
            {initials}
          </div>
        )}

        {/* Package Badge */}
        <div className="absolute top-2.5 right-2.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
            <Award className="h-3 w-3" />
            {student.package}
          </span>
        </div>

        {/* Subtle overlay gradient */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Branch pill at bottom of image */}
        <div className="absolute bottom-2 left-2.5 right-2.5">
          <p className="truncate text-[10px] font-semibold text-white/90 drop-shadow-xs">
            {student.branch}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-3.5">
        <div>
          <h4 className="font-heading text-sm font-bold text-brand-navy transition-colors group-hover:text-brand-red line-clamp-1">
            {student.name}
          </h4>

          <div className="mt-2 flex items-center gap-1.5 text-xs text-foreground/90">
            <Building2 className="h-3.5 w-3.5 shrink-0 text-brand-red" />
            <span className="truncate font-semibold">{student.company}</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2 text-[10px] text-muted-foreground font-medium">
          <span className="flex items-center gap-1">
            <GraduationCap className="h-3 w-3 text-brand-navy" />
            Placed Alumnus
          </span>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlacedStudentsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge className="bg-brand-red uppercase text-white tracking-wider text-[10px]">
              Success Stories
            </Badge>
            <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" /> 100% Placement Support
            </span>
          </div>
          <h3 className="mt-2 font-heading text-xl font-bold uppercase text-brand-navy md:text-2xl">
            Our Placed Students
          </h3>
          <p className="mt-1 text-xs text-muted-foreground max-w-2xl">
            Celebrating our accomplished GTU-ITR engineering and diploma students hired by leading technology innovators, consulting MNCs, and industrial leaders.
          </p>
          <div className="mt-3 h-1 w-16 bg-brand-red" />
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-bold text-muted-foreground sm:inline-block">
            {current} of {count}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-brand-navy shadow-xs transition-colors hover:bg-brand-navy hover:text-white"
            >
              ‹
            </button>
            <button
              onClick={() => api?.scrollNext()}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-brand-navy shadow-xs transition-colors hover:bg-brand-navy hover:text-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="mt-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {PLACED_STUDENTS.map((student, idx) => (
              <CarouselItem
                key={idx}
                className="pl-3 basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 md:pl-4"
              >
                <PlacedStudentCard student={student} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-white shadow-md border-brand-navy/20 hover:bg-brand-navy hover:text-white" />
          <CarouselNext className="hidden md:flex -right-4 bg-white shadow-md border-brand-navy/20 hover:bg-brand-navy hover:text-white" />
        </Carousel>
      </div>

      {/* Footer Banner */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-brand-navy/10 bg-brand-surface/60 px-4 py-3 text-xs text-brand-navy">
        <div className="flex items-center gap-2 font-medium">
          <Award className="h-4 w-4 text-brand-red shrink-0" />
          <span>Top recruiters including Odoo India, TCS, SMS Group, Bitscape, and Sarjen Systems.</span>
        </div>
        <a
          href="https://gtuitr.gtu.ac.in/placedStudents.aspx"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-bold text-brand-red hover:underline"
        >
          View GTU Official Records <ChevronRight className="h-3 w-3" />
        </a>
      </div>
    </section>
  );
}

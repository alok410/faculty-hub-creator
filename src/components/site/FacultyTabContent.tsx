import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink, GraduationCap, Wrench, Sparkles, UserCheck } from "lucide-react";
import type { FacultyMember } from "@/content/faculty";
import { getFacultyPhoto } from "@/content/faculty-photos";

interface FacultyTabContentProps {
  departmentTitle: string;
  teachingFaculty: FacultyMember[];
  technicalStaff?: FacultyMember[] | undefined;
}

function getInitials(name: string): string {
  return name
    .replace(/(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function FacultyPhotoAvatar({
  fac,
  size = "md",
}: {
  fac: FacultyMember;
  size?: "md" | "sm";
}) {
  const [imgError, setImgError] = useState(false);
  const photoUrl = getFacultyPhoto(fac.name, fac.image);

  const containerClasses =
    size === "sm"
      ? "h-12 w-12 rounded-lg"
      : "h-16 w-16 sm:h-20 sm:w-20 rounded-xl";

  if (photoUrl && !imgError) {
    return (
      <div
        className={`relative ${containerClasses} shrink-0 overflow-hidden border-2 border-border/80 bg-muted/40 shadow-xs transition-all duration-300 group-hover:border-brand-navy/60 group-hover:shadow-md`}
      >
        <img
          src={photoUrl}
          alt={fac.name}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${containerClasses} shrink-0 items-center justify-center font-heading font-bold shadow-xs ${
        size === "sm" ? "text-sm" : "text-lg"
      } ${
        fac.isPrincipal
          ? "bg-brand-red text-white"
          : fac.isHod
          ? "bg-brand-navy text-white"
          : "bg-muted text-brand-navy"
      }`}
    >
      {getInitials(fac.name)}
    </div>
  );
}

export function FacultyTabContent({
  departmentTitle,
  teachingFaculty,
  technicalStaff = [],
}: FacultyTabContentProps) {
  return (
    <div className="space-y-10 focus-visible:outline-none">
      {/* Teaching Faculty Header */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-brand-red uppercase text-white tracking-wider">
              GTU-ITR Academic Mentors
            </Badge>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-brand-navy">
              Teaching Faculty — {departmentTitle}
            </h2>
            <div className="mb-4 mt-2 h-1 w-16 bg-brand-red" />
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-brand-navy/5 px-4 py-2 text-xs font-semibold text-brand-navy border border-brand-navy/10">
            <UserCheck className="h-4 w-4 text-brand-red" />
            <span>
              {teachingFaculty.length} Faculty Members
              {technicalStaff.length > 0 ? ` + ${technicalStaff.length} Technical Staff (${teachingFaculty.length + technicalStaff.length} Total)` : ""}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-foreground/85">
          Our distinguished faculty members bring rich pedagogical expertise, doctoral research rigor, and industry insight to foster academic excellence, innovative engineering projects, and research publications under Gujarat Technological University.
        </p>

        {/* Teaching Faculty Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachingFaculty.map((fac, idx) => (
            <div
              key={idx}
              className={`group flex flex-col justify-between rounded-xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                fac.isPrincipal
                  ? "border-brand-red/40 bg-gradient-to-br from-brand-red/[0.03] to-card"
                  : fac.isHod
                  ? "border-brand-navy/40 bg-gradient-to-br from-brand-navy/[0.03] to-card"
                  : "border-border bg-card hover:border-brand-navy/30"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <FacultyPhotoAvatar fac={fac} size="md" />

                  {fac.isPrincipal ? (
                    <Badge className="bg-brand-red text-white text-[10px] uppercase font-bold tracking-wider">
                      Principal
                    </Badge>
                  ) : fac.isHod ? (
                    <Badge className="bg-brand-navy text-white text-[10px] uppercase font-bold tracking-wider">
                      Head of Dept
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Faculty
                    </Badge>
                  )}
                </div>

                <div className="mt-3.5">
                  <h3 className="font-heading text-base font-bold text-foreground group-hover:text-brand-navy">
                    {fac.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-red mt-0.5">
                    {fac.designation}
                  </p>
                </div>

                <div className="mt-4 space-y-2 border-t border-border/60 pt-3 text-xs">
                  <div className="flex items-start gap-2 text-foreground/80">
                    <GraduationCap className="h-4 w-4 shrink-0 text-brand-navy mt-0.5" />
                    <span className="font-medium text-[11px] leading-tight text-foreground/90">{fac.qualification}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-red mt-0.5" />
                    <span className="text-[11px] leading-tight">{fac.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-2 border-t border-border/60 pt-3 text-xs">
                {fac.email ? (
                  <a
                    href={`mailto:${fac.email}`}
                    className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-brand-navy transition-colors truncate"
                    title={fac.email}
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-brand-red" />
                    <span className="truncate">{fac.email}</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-muted-foreground">GTU-ITR Campus</span>
                )}
                <Link
                  to="/faculty-profile"
                  search={{ name: fac.name }}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded bg-brand-navy/10 px-2.5 py-1 text-[11px] font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors cursor-pointer"
                >
                  <span>Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Staff Section (if department has technical staff) */}
      {technicalStaff.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy">
              <Wrench className="h-5 w-5 text-brand-navy" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">
                Technical &amp; Laboratory Staff
              </h3>
              <p className="text-xs text-muted-foreground">
                Specialized laboratory engineers and technical assistants ensuring seamless equipment operations
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technicalStaff.map((staff, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-border bg-muted/20 p-4 transition-colors hover:border-brand-navy/30"
              >
                <FacultyPhotoAvatar fac={staff} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="font-heading text-sm font-bold text-foreground truncate">
                    {staff.name}
                  </div>
                  <div className="text-xs font-medium text-brand-navy">{staff.designation}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{staff.specialization}</div>
                  <Link
                    to="/faculty-profile"
                    search={{ name: staff.name }}
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-brand-navy hover:underline"
                  >
                    View Profile <ExternalLink className="h-2.5 w-2.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

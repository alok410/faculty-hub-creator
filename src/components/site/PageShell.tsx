import type { ReactNode } from "react";
import { RiseIn } from "@/components/motion/motion-primitives";

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string | undefined; children?: ReactNode }) {
  return (
    <>
      <div className="relative border-b-4 border-brand-red bg-gradient-to-b from-[#18275c] via-brand-navy to-brand-navy py-8 md:py-10 shadow-inner">
        {/* Subtle decorative highlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <RiseIn delay={0.05} y={30}>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-brand-red" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary-foreground/75">
                GTU - ITR Mehsana
              </span>
            </div>
            <h1 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary-foreground md:text-4xl">
              {title}
            </h1>
          </RiseIn>
          {subtitle && (
            <RiseIn delay={0.2}>
              <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                {subtitle}
              </p>
            </RiseIn>
          )}
        </div>
      </div>
      <RiseIn delay={0.35} className="mx-auto max-w-[1200px] px-5 py-10">
        {children}
      </RiseIn>
    </>
  );
}

export function Prose({ children }: { children?: ReactNode }) {
  return <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">{children}</div>;
}

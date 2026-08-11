import type { ReactNode } from "react";

export function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <>
      <div className="border-b-4 border-brand-red bg-brand-navy py-8">
        <div className="mx-auto max-w-[1200px] px-5">
          <h1 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary-foreground md:text-4xl">{title}</h1>
          {subtitle && <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">{subtitle}</p>}
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-5 py-10">{children}</div>
    </>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">{children}</div>;
}

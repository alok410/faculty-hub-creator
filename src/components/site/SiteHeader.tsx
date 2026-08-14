import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV, type NavLink } from "@/content/nav";
import { DRAWER_SPRING } from "@/components/motion/motion-primitives";

function DesktopItem({ item }: { item: NavLink }) {
  if (!item.children) {
    return item.href ? (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="block px-3 py-2.5 text-[13px] font-medium uppercase tracking-wide text-primary-foreground/90 transition-colors hover:bg-brand-red hover:text-primary-foreground"
      >
        {item.label}
      </a>
    ) : (
      <Link
        to={item.to!}
        className="block px-3 py-2.5 text-[13px] font-medium uppercase tracking-wide text-primary-foreground/90 transition-colors hover:bg-brand-red hover:text-primary-foreground"
        activeProps={{ className: "bg-brand-red text-primary-foreground" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <button className="flex items-center gap-1 px-3 py-2.5 text-[13px] font-medium uppercase tracking-wide text-primary-foreground/90 transition-colors group-hover:bg-brand-red group-hover:text-primary-foreground">
        {item.label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-72 -translate-y-2 border-t-2 border-brand-red bg-card opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children.map((child) =>
          child.href ? (
            <a
              key={child.label}
              href={child.href}
              target="_blank"
              rel="noreferrer"
              className="block border-b border-border px-4 py-2.5 text-[13px] text-foreground transition-all duration-300 hover:translate-x-1 hover:bg-brand-surface hover:text-brand-red"
            >
              {child.label}
            </a>
          ) : (
            <Link
              key={child.label}
              to={child.to!}
              className="block border-b border-border px-4 py-2.5 text-[13px] text-foreground transition-all duration-300 hover:translate-x-1 hover:bg-brand-surface hover:text-brand-red"
            >
              {child.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header>
      <img src="/site/Header.png" alt="Gujarat Technological University - Institute of Technology & Research" className="hidden w-full md:block" />
      <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3 md:hidden">
        <img src="/site/gtulogo.jpg" alt="GTU logo" className="h-11 w-11 rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-sm font-bold text-brand-navy">GTU - ITR</p>
          <p className="truncate text-[11px] text-muted-foreground">Institute of Technology & Research</p>
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-md bg-brand-navy p-2 text-primary-foreground transition-colors duration-300 hover:bg-brand-red">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav className="sticky top-0 z-50 bg-brand-navy">
        <div className="mx-auto hidden max-w-[1400px] flex-wrap items-center justify-center md:flex">
          {NAV.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="overflow-hidden md:hidden"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={DRAWER_SPRING}
            >
            {NAV.map((item, idx) => (
              <motion.div
                key={item.label}
                className="border-b border-primary-foreground/10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * idx, ease: "easeOut" }}
              >
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium uppercase text-primary-foreground"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                    {expanded === item.label && (
                      <motion.div
                        className="overflow-hidden bg-brand-navy-dark pb-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {item.children.map((child) =>
                          child.href ? (
                            <a key={child.label} href={child.href} target="_blank" rel="noreferrer" className="block px-6 py-2 text-[13px] text-primary-foreground/80">
                              {child.label}
                            </a>
                          ) : (
                            <Link key={child.label} to={child.to!} onClick={() => setOpen(false)} className="block px-6 py-2 text-[13px] text-primary-foreground/80">
                              {child.label}
                            </Link>
                          ),
                        )}
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </>
                ) : item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="block px-4 py-3 text-sm font-medium uppercase text-primary-foreground">
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.to!} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium uppercase text-primary-foreground">
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

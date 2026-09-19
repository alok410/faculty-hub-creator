import { Megaphone } from "lucide-react";

export interface UpdateItem {
  id: string | number;
  text: string;
  link_url: string | null;
}

interface UpdatesBarProps {
  updates: UpdateItem[];
}

export function UpdatesBar({ updates }: UpdatesBarProps) {
  if (!updates || updates.length === 0) return null;

  return (
    <aside
      aria-label="Latest Updates and Announcements"
      className="group relative flex items-stretch overflow-hidden border-t-2 border-brand-gold border-b border-brand-red/30 bg-brand-red text-primary-foreground shadow-md"
    >
      {/* Updates Badge with Accent Border & Icon */}
      <div className="relative z-10 flex shrink-0 items-center gap-2 border-r-2 border-brand-gold bg-[#0f1a3a] px-3.5 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-sm md:px-5 md:text-sm">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
        </span>
        <Megaphone className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
        <span>Updates</span>
      </div>

      {/* Marquee Ticker Track */}
      <div className="relative flex-1 overflow-hidden py-2 select-none">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap px-4 text-xs font-medium md:text-sm group-hover:[animation-play-state:paused]">
          {[...updates, ...updates].map((u, idx) => (
            <div key={`${u.id}-${idx}`} className="inline-flex items-center gap-6">
              {u.link_url ? (
                <a
                  href={u.link_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-amber-200 hover:underline underline-offset-4"
                >
                  <span>{u.text}</span>
                  <span className="text-[10px] opacity-75">↗</span>
                </a>
              ) : (
                <span>{u.text}</span>
              )}
              <span className="text-amber-300/60" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

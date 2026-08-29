import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_SOFT } from "@/components/motion/motion-primitives";

type Banner = { id: string; image_url: string; caption: string | null; link_url: string | null };

export function HomeSlider({ banners, heightClass = "h-[38vw] max-h-[520px] min-h-[180px]" }: { banners: Banner[]; heightClass?: string }) {
  const [i, setI] = useState(0);
  const count = banners.length;

  useEffect(() => {
    if (count < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  if (count === 0) return null;

  return (
    <section className="relative overflow-hidden bg-brand-navy-dark">
      <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
        {banners.map((b) => (
          <div key={b.id} className="relative w-full shrink-0">
            <img src={b.image_url} alt={b.caption ?? "GTU-ITR"} className={`${heightClass} w-full object-cover`} />
            {b.caption && (
              <AnimatePresence mode="wait">
                {banners[i]?.id === b.id && (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: EASE_SOFT }}
                    className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-navy-dark/85 to-transparent px-5 py-4 text-center"
                  >
                    <p className="font-heading text-base font-bold uppercase tracking-wide text-primary-foreground md:text-2xl">{b.caption}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => setI((v) => (v - 1 + count) % count)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-navy/70 p-2 text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-brand-red"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setI((v) => (v + 1) % count)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-navy/70 p-2 text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-brand-red"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
        {banners.map((b, idx) => (
          <button
            key={b.id}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-brand-gold" : "w-2 bg-primary-foreground/60"}`}
          />
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, Sparkles, Eye, X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Campus Photo Gallery | GTU-ITR" },
      {
        name: "description",
        content:
          "Visual journey of GTU-ITR Mehsana campus - academic buildings, high-tech engineering laboratories, cultural Kaushalya fests, and sports events.",
      },
      { property: "og:title", content: "Campus Photo Gallery | GTU-ITR" },
      {
        property: "og:description",
        content: "Photographic glimpses of campus architecture, academic laboratories, and student life at GTU-ITR.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["All", "Campus & Architecture", "Laboratories", "Student Life & Events"];

const GALLERY_ITEMS = [
  {
    src: "/site/s1.jpg",
    title: "Main Administrative & Academic Wing",
    category: "Campus & Architecture",
    description: "Expansive front facade of GTU-ITR building on Ahmedabad-Mehsana express highway.",
  },
  {
    src: "/site/Banner2.png",
    title: "Green Campus Panorama",
    category: "Campus & Architecture",
    description: "Lush botanical gardens, tree-lined walkways, and central fountain courtyard.",
  },
  {
    src: "/site/x2.jpg",
    title: "Engineering Laboratories & Practical Bay",
    category: "Laboratories",
    description: "Students carrying out hands-on experiments under specialized faculty guidance.",
  },
  {
    src: "/site/x3.jpg",
    title: "Advanced Siemens Automation Centre",
    category: "Laboratories",
    description: "Industrial Sinumerik controllers, computerized testing benches, and robotics.",
  },
  {
    src: "/site/x4.jpg",
    title: "Kaushalya Cultural Festival Celebration",
    category: "Student Life & Events",
    description: "Vibrant performances showcasing dance, drama, music, and art on auditorium stage.",
  },
  {
    src: "/site/x5.jpg",
    title: "Shaurya Sports Festival & Athletic Arena",
    category: "Student Life & Events",
    description: "Inter-departmental cricket, volleyball, football, and track tournament moments.",
  },
  {
    src: "/site/x6.jpeg",
    title: "Technical Workshops & Hackathon Sessions",
    category: "Student Life & Events",
    description: "Project exhibitions, SSIP prototype demonstrations, and collaborative coding sprints.",
  },
  {
    src: "/site/Header.png",
    title: "GTU-ITR Campus Aerial Horizon",
    category: "Campus & Architecture",
    description: "Bird's eye view of the 25-acre integrated technical educational institute.",
  },
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filteredItems =
    activeCategory === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <PageShell
      title="Campus Photo Gallery"
      subtitle="A vibrant visual journey through our academic architecture, specialized laboratories, cultural celebrations, and sports arenas."
    >
      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-brand-navy text-white shadow-sm"
                  : "border border-border bg-card text-foreground/80 hover:border-brand-navy/40 hover:text-brand-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          Showing <strong>{filteredItems.length}</strong> photos
        </span>
      </div>

      {/* Grid of Images */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(item)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-xl"
          >
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

              <div className="absolute left-3 top-3">
                <Badge className="bg-brand-navy/90 text-white backdrop-blur-xs text-[10px] uppercase font-bold">
                  {item.category}
                </Badge>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-heading text-sm font-bold uppercase leading-snug drop-shadow-xs">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-white/80">{item.description}</p>
              </div>

              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100">
                <Eye className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-card p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-brand-red"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden rounded-xl bg-black">
              <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[70vh] w-full object-contain" />
            </div>
            <div className="p-4">
              <Badge className="bg-brand-red uppercase text-white text-[10px]">{selectedImage.category}</Badge>
              <h3 className="mt-2 font-heading text-lg font-bold text-brand-navy">{selectedImage.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}

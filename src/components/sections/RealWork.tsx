import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

import workCleanerTable from "@/assets/real/work-cleaner-table.webp";
import workTeamGlass from "@/assets/real/work-team-glass.webp";
import workInspection from "@/assets/real/work-inspection.webp";
import workMaintenance from "@/assets/real/work-maintenance.webp";
import workCleaning from "@/assets/real/work-cleaning.webp";

interface WorkItem {
  src: string;
  alt: string;
  tag: "Cleaning" | "Inspection" | "Maintenance";
  location: string;
}

const ITEMS: WorkItem[] = [
  {
    src: workCleanerTable,
    alt: "Apna Ghar Care staff polishing a glass coffee table at a client home",
    tag: "Cleaning",
    location: "Sector 22, Chandigarh",
  },
  {
    src: workInspection,
    alt: "Inspector checking electrical panel during a property visit",
    tag: "Inspection",
    location: "Phase 7, Mohali",
  },
  {
    src: workTeamGlass,
    alt: "Two-person team cleaning glass entrance doors of a residential building",
    tag: "Cleaning",
    location: "Sector 8, Panchkula",
  },
  {
    src: workMaintenance,
    alt: "Plumber tightening pipe fittings during a maintenance visit",
    tag: "Maintenance",
    location: "Phase 10, Mohali",
  },
  {
    src: workCleaning,
    alt: "Team member cleaning windows from inside a client's apartment",
    tag: "Cleaning",
    location: "Zirakpur",
  },
  {
    src: workTeamGlass,
    alt: "Apna Ghar Care field team in uniform during a routine visit",
    tag: "Inspection",
    location: "Tricity",
  },
];

const TAG_STYLES: Record<WorkItem["tag"], string> = {
  Cleaning: "bg-primary text-primary-foreground",
  Inspection: "bg-accent text-accent-foreground",
  Maintenance: "bg-emerald-600 text-white",
};

export const RealWork = () => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    if (open !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = open !== null ? ITEMS[open] : null;

  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Real Proof</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Real Work by Our Team
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Actual photos from properties we maintain across Chandigarh, Mohali &amp; Panchkula —
            no stock images, no edits.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative w-full overflow-hidden rounded-2xl bg-card border border-border/60 shadow-elevated transition-spring hover:-translate-y-1.5 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label={`View larger: ${item.alt}`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <span
                    className={cn(
                      "absolute top-3 left-3 rounded-full text-[11px] font-bold px-2.5 py-1 shadow-elevated",
                      TAG_STYLES[item.tag]
                    )}
                  >
                    {item.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          📸 Photo proof shared on WhatsApp after every visit
        </p>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-base"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-premium"
            />
            <figcaption className="mt-3 flex items-center justify-center gap-2 text-white/90 text-sm">
              <span
                className={cn(
                  "rounded-full text-[11px] font-bold px-2.5 py-1",
                  TAG_STYLES[active.tag]
                )}
              >
                {active.tag}
              </span>
              <MapPin className="h-3.5 w-3.5" />
              {active.location}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

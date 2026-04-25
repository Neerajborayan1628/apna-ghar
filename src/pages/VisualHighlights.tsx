import { useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { cn } from "@/lib/utils";

import showcase from "@/assets/showcase-neighborhood.jpg";
import b1 from "@/assets/real/ba-before-balcony2.webp";
import a1 from "@/assets/real/ba-after-balcony2.webp";
import b2 from "@/assets/real/ba-before-balcony1.webp";
import a2 from "@/assets/real/ba-after-balcony1.webp";
import b3 from "@/assets/real/ba-before-floor1.webp";
import a3 from "@/assets/real/ba-after-floor1.webp";
import b4 from "@/assets/real/ba-before-floor2.webp";
import a4 from "@/assets/real/ba-after-floor2.webp";

interface Item {
  category: "cleaning" | "inspection";
  before: string;
  after: string;
  location: string;
  caption: string;
  story: string;
}

const ITEMS: Item[] = [
  {
    category: "cleaning",
    before: b1,
    after: a1,
    location: "Phase 7, Mohali",
    caption: "Balcony deep cleaning — debris removal",
    story: "Owner hadn't visited in months — debris everywhere. We restored it the same day.",
  },
  {
    category: "cleaning",
    before: b2,
    after: a2,
    location: "Sector 22, Chandigarh",
    caption: "Outdoor tile floor restoration",
    story: "Locked-up balcony floor full of dirt — back to spotless tiles in one visit.",
  },
  {
    category: "inspection",
    before: b3,
    after: a3,
    location: "Phase 10, Mohali",
    caption: "Entrance floor cleanup after inspection",
    story: "Inspection revealed heavy stains — cleaning team handled it the same week.",
  },
  {
    category: "cleaning",
    before: b4,
    after: a4,
    location: "Sector 8, Panchkula",
    caption: "Marble floor stain removal",
    story: "Floor stained from a long-vacant home — restored to like-new in a single visit.",
  },
];

const FILTERS: { key: "all" | "cleaning" | "inspection"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "cleaning", label: "Cleaning" },
  { key: "inspection", label: "Inspection" },
];

const VisualHighlights = () => {
  const [filter, setFilter] = useState<"all" | "cleaning" | "inspection">("all");
  const visible = useMemo(
    () => (filter === "all" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <Layout>
      <Seo
        title="Property Visual Highlights | Before & After – Apna Ghar Care"
        description="See real before-and-after results from cleaning, inspection and maintenance visits across Chandigarh, Mohali and Panchkula."
        canonicalPath="/visual-highlights"
      />
      <PageHero
        eyebrow="Visual Highlights"
        title="See the transformation — before &amp; after our care"
        subtitle="Real results from real homes across Chandigarh & Tricity. Drag to compare each pair."
        image={showcase}
        imageAlt="Premium Indian neighborhood at sunset"
      >
        <Button asChild size="lg" className="bg-gradient-primary shadow-elevated">
          <a href="/contact">Book Your Service Now</a>
        </Button>
      </PageHero>

      <section className="container-page py-16 md:py-20">
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold border transition-base",
                filter === f.key
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elevated"
                  : "bg-card text-foreground/80 border-border hover:border-primary/40 hover:text-primary"
              )}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {visible.map((it, i) => (
            <Reveal key={`${it.category}-${i}`} delay={i * 100}>
              <article className="rounded-2xl bg-card border border-border/60 shadow-elevated overflow-hidden transition-spring hover:-translate-y-1 hover:shadow-premium">
                <BeforeAfter
                  before={it.before}
                  after={it.after}
                  beforeAlt={`Before — ${it.caption}`}
                  afterAlt={`After — ${it.caption}`}
                  className="!rounded-none !shadow-none border-0"
                />
                <div className="p-5 space-y-3">
                  <p className="text-sm md:text-base font-semibold text-foreground/90 leading-snug">
                    “{it.story}”
                  </p>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-muted-foreground">{it.caption}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary whitespace-nowrap">
                      <MapPin className="h-3.5 w-3.5" />
                      {it.location}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default VisualHighlights;

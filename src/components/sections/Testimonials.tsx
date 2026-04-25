import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const TESTIMONIALS = [
  {
    name: "Rajiv Khanna",
    location: "Mohali (currently in Toronto)",
    avatar: a1,
    text: "I live abroad and they regularly send updates with photos. Very reliable, no need to chase them. Honestly a big relief for my family.",
  },
  {
    name: "Simran Kaur",
    location: "Sector 22, Chandigarh",
    avatar: a2,
    text: "Booked a deep cleaning before my parents moved in. Team was on time, polite and the house looked almost new. Will use again for sure.",
  },
  {
    name: "Amitabh Verma",
    location: "Phase 7, Mohali (NRI – London)",
    avatar: a3,
    text: "Was a bit skeptical at first but they handled everything — inspection, small repairs, even bill payments. Photo reports every visit, very transparent.",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Loved by NRI Families</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Trusted from across the world
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real homeowners. Real reviews. Read why families trust us with their Tricity homes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article className="group relative h-full rounded-2xl bg-card border border-border/60 p-7 shadow-elevated transition-spring hover:-translate-y-2 hover:shadow-premium">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/15 group-hover:text-primary/30 transition-colors" />
                <div className="flex items-center gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

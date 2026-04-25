import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import teamHero from "@/assets/real/team-hero.webp";

export const TeamSection = () => {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-premium border border-border/50">
              <img
                src={teamHero}
                alt="Apna Ghar Care field team in uniform cleaning a client property in Chandigarh"
                loading="lazy"
                width={1600}
                height={1067}
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/95 backdrop-blur-md text-foreground text-xs font-semibold px-3 py-1.5 shadow-elevated">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Our team on the field — Chandigarh
              </span>
            </div>
            {/* Floating stat card */}
            <div className="hidden md:block absolute -bottom-6 -right-6 rounded-2xl bg-card border border-border/60 shadow-premium p-4 max-w-[220px]">
              <div className="flex items-center gap-3">
                <span className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display font-bold text-lg leading-tight">12+ Pros</div>
                  <div className="text-xs text-muted-foreground">Verified, in-house</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">Meet The Team</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Local Chandigarh team you can trust
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Every member is background-verified, uniformed and trained in-house. The same faces
            visit your home each month — building trust, not just doing tasks.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              { icon: ShieldCheck, text: "ID & background-verified professionals" },
              { icon: MapPin, text: "Based in Chandigarh — fast, on-ground response" },
              { icon: Users, text: "Same staff visits your home each cycle" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-foreground/85">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-elevated">
              <Link to="/about">Meet the team</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Book a visit</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

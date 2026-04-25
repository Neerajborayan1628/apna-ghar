import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import inspection from "@/assets/real/inspection.webp";
import cleaning from "@/assets/real/cleaning.webp";
import maintenance from "@/assets/real/maintenance.webp";
import tenant from "@/assets/svc-tenant.jpg";
import security from "@/assets/svc-security.jpg";
import bills from "@/assets/svc-bills.jpg";

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  badge?: string;
  realCaption?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Home Inspection",
    description:
      "We inspect your home and send detailed photo & video reports — so you always know exactly how it's doing.",
    image: inspection,
    alt: "Apna Ghar Care inspector checking electrical panel at a Mohali home",
    badge: "Popular",
    realCaption: "Actual Work — Mohali",
  },
  {
    title: "Deep Cleaning",
    description:
      "Deep cleaning that restores your home to like-new condition — fresh, hygienic and move-in ready.",
    image: cleaning,
    alt: "Apna Ghar Care team member deep cleaning windows at a client home",
    realCaption: "Client Property — Chandigarh",
  },
  {
    title: "Maintenance & Repairs",
    description:
      "We fix issues before they become expensive problems — coordinated through trusted local pros.",
    image: maintenance,
    alt: "Plumber fixing pipe fittings during a maintenance visit",
    realCaption: "Actual Work — Chandigarh",
  },
  {
    title: "Tenant Management",
    description:
      "Happy tenants, on-time rent and zero stress — we handle onboarding, communication and quick issue resolution.",
    image: tenant,
    alt: "Property manager handing keys to a happy couple",
  },
  {
    title: "Security Checks",
    description:
      "Sleep easy knowing your home is checked regularly — perimeter, locks and instant alerts if anything is off.",
    image: security,
    alt: "Security guard checking front door lock at dusk",
  },
  {
    title: "Bill & Utility Payments",
    description:
      "Never miss a deadline again — we pay utility, society and service bills on time and send confirmations.",
    image: bills,
    alt: "Indian property bills, calculator and phone on a desk",
  },
];

interface ServicesGridProps {
  services?: ServiceItem[];
  showCta?: boolean;
  intro?: { eyebrow: string; title: string; text?: string };
}

export const ServicesGrid = ({
  services = SERVICES,
  showCta = true,
  intro = {
    eyebrow: "What We Do",
    title: "End-to-end care for your home",
    text: "Real services, real photos, real reports — every visit, every month.",
  },
}: ServicesGridProps) => {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">{intro.eyebrow}</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
          {intro.title}
        </h2>
        {intro.text && (
          <p className="mt-4 text-muted-foreground text-base md:text-lg">{intro.text}</p>
        )}
        <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary">
          📸 Photo proof after every visit • ✅ Verified professionals
        </p>
      </Reveal>

      <div className="mt-12 md:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <TiltCard className="h-full">
              <div className="relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                {s.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 shadow-elevated">
                    {s.badge}
                  </span>
                )}
                {s.realCaption && (
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md text-foreground text-[11px] font-semibold px-2.5 py-1 shadow-elevated border border-border/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {s.realCaption}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                {showCta && (
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group"
                  >
                    Book this service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

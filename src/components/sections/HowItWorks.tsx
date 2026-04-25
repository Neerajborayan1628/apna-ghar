import { Reveal } from "@/components/Reveal";
import { CalendarCheck, HouseIcon, Smartphone } from "lucide-react";

const STEPS = [
  {
    icon: CalendarCheck,
    n: "01",
    title: "Book a Service",
    text: "Share your property details and pick the support plan that fits — in under 2 minutes.",
  },
  {
    icon: HouseIcon,
    n: "02",
    title: "We Inspect & Maintain",
    text: "Our verified team visits your home, runs detailed checks and resolves issues fast.",
  },
  {
    icon: Smartphone,
    n: "03",
    title: "Get Updates & Relax",
    text: "Receive crisp photo reports, real-time alerts and transparent monthly updates.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container-page py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">Simple Process</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
          A 3-step plan designed for NRI peace of mind
        </h2>
        <p className="mt-4 text-muted-foreground">
          Worried about your empty home in Tricity? We take care of everything — start to finish.
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-6 md:grid-cols-3">
        {/* Connecting line on desktop */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-12 left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
        {STEPS.map(({ icon: Icon, n, title, text }, i) => (
          <Reveal key={n} delay={i * 120}>
            <div className="relative rounded-2xl bg-card border border-border/60 p-7 shadow-elevated transition-spring hover:-translate-y-2 hover:shadow-premium group">
              <span className="absolute -top-4 right-5 font-display font-extrabold text-5xl text-primary/10 group-hover:text-primary/20 transition-colors">
                {n}
              </span>
              <div className="relative h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elevated transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

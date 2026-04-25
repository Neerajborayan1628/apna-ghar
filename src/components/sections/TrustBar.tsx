import { Reveal } from "@/components/Reveal";
import { Star, Home, MapPin, Wrench } from "lucide-react";

const ITEMS = [
  { icon: Star, value: "4.8", label: "Average Rating" },
  { icon: Home, value: "150+", label: "Homes Serviced" },
  { icon: MapPin, value: "Chandigarh", label: "Based Local Team" },
  { icon: Wrench, value: "3+ Yrs", label: "Trusted Experience" },
];

export const TrustBar = () => {
  return (
    <section className="container-page -mt-10 md:-mt-14 relative z-10">
      <Reveal>
        <div className="rounded-2xl bg-card/95 backdrop-blur-md border border-border/60 shadow-premium p-5 md:p-7 grid grid-cols-2 md:grid-cols-4 gap-5">
          {ITEMS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 md:gap-4">
              <span className="h-11 w-11 md:h-12 md:w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </span>
              <div className="min-w-0">
                <div className="font-display font-bold text-lg md:text-xl leading-tight">{value}</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

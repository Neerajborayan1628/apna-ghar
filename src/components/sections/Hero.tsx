import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, Camera, MapPin, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import heroHome from "@/assets/hero-home.jpg";

export const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      // Parallax: move background slower than scroll
      bgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.08)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden min-h-[88vh] md:min-h-[92vh] flex items-center">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
        aria-hidden="true"
      >
        <img
          src={heroHome}
          alt=""
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" aria-hidden="true" />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_120%,hsl(217_91%_38%/0.45),transparent)]" aria-hidden="true" />

      <div className="container-page relative py-20 md:py-28">
        <div className="max-w-3xl text-white animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Premium Property Management • Tricity
          </span>

          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            We Take Care of Your Home{" "}
            <span className="bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent">
              Like It's Our Own
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Professional property inspection, cleaning, and maintenance for homeowners living away.
            Verified team, photo reports, and 24/7 WhatsApp support.
          </p>

          {/* Trust proof line */}
          <p className="mt-5 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white/95">
            <Star className="h-4 w-4 fill-accent text-accent" />
            Trusted by 100+ homeowners in Chandigarh &amp; Mohali
          </p>

          {/* Trust badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {[
              { icon: ShieldCheck, label: "Verified Staff" },
              { icon: Camera, label: "Photo Updates After Every Visit" },
              { icon: MapPin, label: "Local Chandigarh Team" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/95"
              >
                <Icon className="h-3.5 w-3.5 text-accent" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 px-6 text-base bg-gradient-primary hover:opacity-95 shadow-premium transition-spring hover:scale-[1.03]"
            >
              <Link to="/contact">
                <Calendar className="h-5 w-5" />
                Book Inspection
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base bg-whatsapp text-whatsapp-foreground border-whatsapp hover:bg-whatsapp/90 hover:text-whatsapp-foreground shadow-elevated transition-spring hover:scale-[1.03]"
            >
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>

          {/* Urgency micro line */}
          <p className="mt-4 text-xs md:text-sm text-white/85">
            ⚡ Limited slots available this week • Response within 10 minutes on WhatsApp
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/85">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-1.5 font-semibold">4.9/5</span>
              <span className="text-white/70">• 100+ homes</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Verified, background-checked team
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 animate-float">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <span className="h-1.5 w-1 rounded-full bg-white/80" />
          </span>
        </div>
      </div>
    </section>
  );
};

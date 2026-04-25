import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";

export const CtaBanner = () => {
  return (
    <section className="container-page py-16 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-8 md:p-14 shadow-premium">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_80%_at_100%_0%,white,transparent)] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative grid gap-8 md:grid-cols-[1.6fr_1fr] items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.1]">
                Your home deserves a team that treats it like their own.
              </h2>
              <p className="mt-4 text-primary-foreground/85 max-w-xl">
                Get a free property inspection. We'll share photos, condition notes and a tailored care plan within 24 hours.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                ⚡ Limited slots available this week • Response within 10 minutes on WhatsApp
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 bg-white text-primary hover:bg-white/90 shadow-elevated"
              >
                <Link to="/contact">
                  <Phone className="h-5 w-5" /> Book Free Inspection
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-elevated"
              >
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> WhatsApp {SITE.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

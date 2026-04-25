import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-soft">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Apna Ghar Care" className="h-10 w-10 object-contain" width={40} height={40} />
            <span className="font-display font-bold text-lg">
              <span className="text-primary">Apna Ghar</span> Care
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Your trusted partner for premium property care in Tricity. We watch over your home like our own.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="text-muted-foreground hover:text-primary story-link" to="/">Home</Link></li>
            <li><Link className="text-muted-foreground hover:text-primary story-link" to="/services">Services</Link></li>
            <li><Link className="text-muted-foreground hover:text-primary story-link" to="/how-it-works">How It Works</Link></li>
            <li><Link className="text-muted-foreground hover:text-primary story-link" to="/about">About</Link></li>
            <li><Link className="text-muted-foreground hover:text-primary story-link" to="/pricing">Pricing</Link></li>
            <li><Link className="text-muted-foreground hover:text-primary story-link" to="/visual-highlights">Visual Highlights</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> {SITE.location}
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-full bg-whatsapp text-whatsapp-foreground text-xs font-semibold hover:opacity-90">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Follow</h4>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-card border border-border text-foreground/70 hover:text-primary hover:border-primary transition-base shadow-sm"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            We respond within 10 minutes on WhatsApp.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Crafted with care for homeowners away from home.</span>
        </div>
      </div>
    </footer>
  );
};

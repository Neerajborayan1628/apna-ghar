import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 backdrop-blur-md shadow-sm border-b border-border/60" : "bg-transparent"
      )}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label={SITE.name}>
          <img
            src={logo}
            alt={`${SITE.name} logo`}
            className="h-9 w-9 md:h-10 md:w-10 object-contain transition-transform group-hover:scale-105"
            width={40}
            height={40}
          />
          <span className="font-display font-bold text-base md:text-lg leading-tight">
            <span className="text-primary">Apna Ghar</span>{" "}
            <span className="text-foreground">Care</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium story-link transition-colors",
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="gap-1.5">
            <a href={`tel:${SITE.phone}`}>
              <Phone className="h-4 w-4" />
              Call
            </a>
          </Button>
          <Button asChild className="bg-gradient-primary hover:opacity-95 shadow-elevated">
            <Link to="/contact">Book Inspection</Link>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <nav className="container-page pb-5 pt-2 flex flex-col gap-1 bg-background/95 backdrop-blur-md border-t border-border/60">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2.5 rounded-lg text-sm font-medium",
                  isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="mt-3 bg-gradient-primary">
            <Link to="/contact">Book Free Inspection</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

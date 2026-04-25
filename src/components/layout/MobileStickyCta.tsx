import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

/**
 * Sticky bottom CTA bar — mobile only.
 * Shows two prominent conversion actions: Book Inspection + WhatsApp Now.
 */
export const MobileStickyCta = () => {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md shadow-premium"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="region"
      aria-label="Quick booking actions"
    >
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm h-12 shadow-elevated transition-spring active:scale-[0.98]"
        >
          <Calendar className="h-4 w-4" />
          Book Inspection
        </Link>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp text-whatsapp-foreground font-semibold text-sm h-12 shadow-elevated transition-spring active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" fill="currentColor" />
          WhatsApp Now
        </a>
      </div>
    </div>
  );
};

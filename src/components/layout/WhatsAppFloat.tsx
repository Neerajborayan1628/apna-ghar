import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const WhatsAppFloat = () => {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 group"
    >
      <span className="relative inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-premium animate-pulse-glow transition-transform group-hover:scale-110">
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" />
      </span>
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground text-background text-xs font-semibold px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-elevated">
        Chat on WhatsApp
      </span>
    </a>
  );
};

import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { MobileStickyCta } from "./MobileStickyCta";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      {/* Spacer so mobile sticky bar never overlaps footer content */}
      <div className="h-20 md:hidden" aria-hidden="true" />
      <WhatsAppFloat />
      <MobileStickyCta />
    </div>
  );
};

import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Button } from "@/components/ui/button";
import before1 from "@/assets/real/ba-before-balcony2.webp";
import after1 from "@/assets/real/ba-after-balcony2.webp";

export const BeforeAfterSection = () => {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="eyebrow">See the transformation</span>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
          Before &amp; after our care
        </h2>
        <p className="mt-4 text-muted-foreground">
          Drag the slider to see what professional cleaning and inspection actually deliver.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-12">
        <BeforeAfter
          before={before1}
          after={after1}
          beforeAlt="Balcony covered in debris before professional cleaning"
          afterAlt="Same balcony spotless after Apna Ghar Care visit"
        />
        <p className="mt-5 text-center text-base md:text-lg font-semibold text-foreground/85">
          “Owner hadn't visited in months — debris everywhere. We restored it the same day.”
        </p>
        <p className="mt-1 text-center text-xs text-muted-foreground">
          Real client property • Mohali • Drag the slider to compare
        </p>
      </Reveal>

      <Reveal delay={200} className="mt-8 text-center">
        <Button asChild size="lg" className="bg-gradient-primary shadow-elevated">
          <Link to="/visual-highlights">See more transformations</Link>
        </Button>
      </Reveal>
    </section>
  );
};

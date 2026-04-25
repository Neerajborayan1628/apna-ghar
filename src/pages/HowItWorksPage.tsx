import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";
import showcase from "@/assets/showcase-neighborhood.jpg";

const FAQ = [
  { q: "How fast do you respond?", a: "Usually within 10 minutes on WhatsApp during working hours." },
  { q: "Which areas do you cover?", a: "Chandigarh, Mohali and Panchkula (Tricity)." },
  { q: "Do I get photos after every visit?", a: "Yes — every service includes a detailed photo report on WhatsApp." },
  { q: "Can I cancel anytime?", a: "Plans are flexible. Pause, upgrade or cancel whenever you need." },
];

const HowItWorksPage = () => {
  return (
    <Layout>
      <Seo
        title="How It Works | NRI Property Care – Apna Ghar Care"
        description="A premium 3-step process for NRI peace of mind: book, we inspect & maintain, you get updates."
        canonicalPath="/how-it-works"
      />
      <PageHero
        eyebrow="Our Process"
        title="A clear 3-step plan, designed for NRI peace of mind"
        subtitle="Simple to start, transparent to track, and completely worry-free for you."
        image={showcase}
        imageAlt="Modern Indian residential neighborhood at sunset"
        height="sm"
      />
      <HowItWorks />

      <section className="bg-gradient-soft py-20 md:py-24">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Quick FAQs</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl tracking-tight">Common questions, answered</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <article className="rounded-2xl bg-card border border-border/60 p-6 shadow-elevated">
                  <h3 className="font-display font-semibold flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {f.q}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground pl-7">{f.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default HowItWorksPage;

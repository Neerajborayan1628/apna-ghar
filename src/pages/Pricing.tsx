import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/site";
import showcase from "@/assets/showcase-interior.jpg";

interface Plan {
  name: string;
  icon: string;
  monthly: number | null;
  yearly: number | null;
  features: string[];
  popular?: boolean;
  customLabel?: string;
  tag?: string;
}

const PLANS: Plan[] = [
  {
    name: "Basic",
    icon: "🏠",
    monthly: 499,
    yearly: 4499,
    features: ["Monthly property check", "5 photo updates", "Basic support"],
    tag: "Best Value",
  },
  {
    name: "Standard",
    icon: "⭐",
    monthly: 999,
    yearly: 8999,
    features: ["Bi-weekly inspection", "Cleaning coordination", "Priority WhatsApp support"],
    popular: true,
    tag: "Best for NRIs",
  },
  {
    name: "Premium",
    icon: "🛡️",
    monthly: 1499,
    yearly: 12999,
    features: ["Weekly inspections", "Maintenance follow-up", "Tenant support assistance"],
  },
  {
    name: "Custom",
    icon: "🧩",
    monthly: null,
    yearly: null,
    features: ["Tailored service scope", "Dedicated account support", "Flexible scheduling"],
    customLabel: "Custom Quote",
  },
];

const FAQ = [
  { q: "Are there any hidden charges?", a: "No. All plans are transparent — we share costs upfront before any work begins." },
  { q: "Can I switch plans later?", a: "Yes, upgrade or change your plan anytime, no questions asked." },
  { q: "Do you offer one-time services?", a: "Absolutely. Pick a plan or book a one-time inspection or cleaning." },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  const formatPrice = (plan: Plan) => {
    if (plan.monthly === null) return plan.customLabel ?? "—";
    return `₹${(yearly ? plan.yearly! : plan.monthly).toLocaleString("en-IN")}`;
  };

  return (
    <Layout>
      <Seo
        title="Pricing | Apna Ghar Care – Property Management Plans"
        description="Affordable, transparent monthly and yearly plans for property inspection, cleaning and management in Tricity."
        canonicalPath="/pricing"
      />
      <PageHero
        eyebrow="Simple Pricing"
        title="Transparent plans for every kind of homeowner"
        subtitle="No hidden charges. Cancel anytime. Save 20% on yearly plans. 📸 Photo proof after every visit • ✅ Verified professionals"
        image={showcase}
        imageAlt="Premium home interior"
        height="sm"
      >
        <div className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2">
          <span className={cn("text-sm font-semibold", !yearly && "text-white", yearly && "text-white/60")}>Monthly</span>
          <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Toggle monthly or yearly pricing" />
          <span className={cn("text-sm font-semibold flex items-center gap-1.5", yearly && "text-white", !yearly && "text-white/60")}>
            Yearly
            <span className="text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent text-accent-foreground px-1.5 py-0.5">Save 20%</span>
          </span>
        </div>
      </PageHero>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <article
                className={cn(
                  "relative h-full rounded-2xl bg-card border p-7 transition-spring hover:-translate-y-2",
                  plan.popular
                    ? "border-primary/30 shadow-premium ring-2 ring-primary/20"
                    : "border-border/60 shadow-elevated hover:shadow-premium"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 shadow-elevated">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{plan.icon}</div>
                  {plan.tag && (
                    <span className="rounded-full bg-accent/15 text-accent-foreground border border-accent/40 text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                      {plan.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display font-bold text-xl">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-3xl md:text-4xl">
                    {formatPrice(plan)}
                  </span>
                  {plan.monthly !== null && (
                    <span className="text-sm text-muted-foreground">/{yearly ? "year" : "month"}</span>
                  )}
                </div>
                {plan.monthly !== null && (
                  <p className="mt-1 text-xs font-semibold text-emerald-600">
                    {yearly
                      ? `Save ₹${(plan.monthly * 12 - plan.yearly!).toLocaleString("en-IN")} yearly`
                      : `Save ₹${(plan.monthly * 12 - plan.yearly!).toLocaleString("en-IN")} with yearly plan`}
                  </p>
                )}
                <ul className="mt-5 space-y-2.5 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={cn(
                    "mt-6 w-full",
                    plan.popular ? "bg-gradient-primary shadow-elevated" : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href={waLink(`Hi 👋 I'd like to know more about the ${plan.name} plan (${yearly ? "yearly" : "monthly"} billing).`)} target="_blank" rel="noopener noreferrer">
                    {plan.monthly === null ? "Get a Quote" : "Get Started"}
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-soft py-16 md:py-20">
        <div className="container-page">
          <Reveal>
            <div className="rounded-2xl bg-card border border-border/60 shadow-elevated p-7 md:p-10">
              <h3 className="font-display font-bold text-xl">Flexible payment options</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pay the way you prefer — UPI, cards, net banking and wallets are all supported.
              </p>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["UPI", "Cards", "Net Banking", "Wallets"].map((p) => (
                  <div
                    key={p}
                    className="rounded-xl border border-border/60 bg-background py-3 text-center font-semibold text-primary hover:border-primary/40 transition-colors"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Pricing FAQ</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl tracking-tight">Questions about plans</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <article className="rounded-2xl bg-card border border-border/60 p-6 shadow-elevated">
                <h3 className="font-display font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Talk to our team</Link>
          </Button>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default Pricing;

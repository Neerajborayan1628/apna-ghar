import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/Reveal";
import { Target, Users, HandHeart, ShieldCheck } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import about from "@/assets/about-team.jpg";
import showcase from "@/assets/showcase-interior.jpg";

const VALUES = [
  { icon: Target, title: "Our Mission", text: "Protect and manage homes with trust, consistency and complete transparency." },
  { icon: Users, title: "Our Focus", text: "Dedicated support across Tricity with a verified local team and trusted vendor network." },
  { icon: HandHeart, title: "Our Promise", text: "You stay informed through regular updates while we handle daily operations and urgent issues." },
];

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Apna Ghar Care | NRI Property Care in Tricity"
        description="Apna Ghar Care helps NRIs and busy homeowners manage their Tricity homes with transparency, photo reports and a trusted local team."
        canonicalPath="/about"
      />
      <PageHero
        eyebrow="Who We Are"
        title="Because your home isn't just property — it's emotion."
        subtitle="A Tricity-based property management team helping NRIs, working professionals and families care for the homes they love from afar."
        image={showcase}
        imageAlt="Modern Indian home interior representing premium care"
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl tracking-tight">
              Built by locals, for homeowners away from home
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We started Apna Ghar Care after seeing too many NRI families struggle to keep their
              Tricity homes safe, clean and well-maintained from thousands of kilometers away.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Today we manage 100+ homes across Chandigarh, Mohali and Panchkula — with verified staff,
              monthly photo reports and a 24/7 WhatsApp line that actually responds.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Verified, background-checked team",
                "Transparent monthly reports",
                "Fast emergency response",
                "Trusted vendor network",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-border/60">
              <img
                src={about}
                alt="Apna Ghar Care team in front of a modern Indian home"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">Our Team</div>
                <div className="font-display font-bold">Local. Verified. Accountable.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 md:py-24">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">Values that guide every visit</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="h-full rounded-2xl bg-card border border-border/60 p-7 shadow-elevated transition-spring hover:-translate-y-2 hover:shadow-premium">
                  <span className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
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

export default About;

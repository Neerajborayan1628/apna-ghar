import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { RealWork } from "@/components/sections/RealWork";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { WhatsappProof } from "@/components/sections/WhatsappProof";
import { TeamSection } from "@/components/sections/TeamSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Apna Ghar Care | Premium Property Management in Tricity"
        description="Trusted property inspection, cleaning and maintenance in Tricity for NRIs and homeowners away from home. Verified team, photo reports, 24/7 WhatsApp support."
        canonicalPath="/"
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <RealWork />
      <HowItWorks />
      <BeforeAfterSection />
      <TeamSection />
      <WhatsappProof />
      <Testimonials />
      <CtaBanner />
    </Layout>
  );
};

export default Index;

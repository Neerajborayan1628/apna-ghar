import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import hero from "@/assets/showcase-interior.jpg";

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Services | Property Management in Tricity – Apna Ghar Care"
        description="Inspection, deep cleaning, maintenance, tenant management, security checks and bill payments for NRI homeowners in Tricity."
        canonicalPath="/services"
      />
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive home care, on a single plan"
        subtitle="Pick the support that fits — from monthly inspections to full property management — and we'll handle the rest."
        image={hero}
        imageAlt="Beautifully maintained modern Indian home interior"
      />
      <ServicesGrid
        intro={{
          eyebrow: "What's included",
          title: "Every visit, documented",
          text: "Photo reports, condition notes and instant WhatsApp updates — for every service, every time.",
        }}
      />
      <CtaBanner />
    </Layout>
  );
};

export default Services;

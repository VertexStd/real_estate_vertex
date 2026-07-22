import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { Hero } from "@/components/sections/hero";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PageTransition } from "@/components/animations/page-transition";

const PremiumCommunities = dynamic(
  () =>
    import("@/components/sections/premium-communities").then(
      (m) => m.PremiumCommunities
    )
);
const LuxuryLifestyle = dynamic(
  () =>
    import("@/components/sections/luxury-lifestyle").then(
      (m) => m.LuxuryLifestyle
    )
);
const PropertyShowcase = dynamic(
  () =>
    import("@/components/sections/property-showcase").then(
      (m) => m.PropertyShowcase
    )
);
const MeetTheAgents = dynamic(
  () =>
    import("@/components/sections/meet-the-agents").then(
      (m) => m.MeetTheAgents
    )
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then((m) => m.Testimonials)
);
const Statistics = dynamic(
  () => import("@/components/sections/statistics").then((m) => m.Statistics)
);
const CTABanner = dynamic(
  () => import("@/components/sections/cta-banner").then((m) => m.CTABanner)
);

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main id="main-content" className="overflow-x-clip">
        <Hero />
        <FeaturedProperties />
        <WhyChooseUs />
        <PremiumCommunities />
        <LuxuryLifestyle />
        <PropertyShowcase />
        <MeetTheAgents />
        <Testimonials />
        <Statistics />
        <CTABanner />
      </main>
      <Footer />
      <StickyMobileCta />
    </PageTransition>
  );
}

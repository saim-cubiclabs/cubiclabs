import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { CTASection } from "@/components/cta-section";
import { Skiper31 } from "@/components/ui/skiper-ui/skiper31";
import { HeroParallaxDemo } from "@/components/heroparallaxdemo";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HeroParallaxDemo />
      <ServicesSection />
      <Skiper31 />
      <CTASection />
    </>
  );
}

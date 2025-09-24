import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-orange-10">
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

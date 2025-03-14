
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RoomsSection from "@/components/RoomsSection";
import UseCasesSection from "@/components/UseCasesSection";
import ServicesSection from "@/components/ServicesSection";
import CostComparisonSection from "@/components/CostComparisonSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RoomsSection />
      <UseCasesSection />
      <ServicesSection />
      <CostComparisonSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

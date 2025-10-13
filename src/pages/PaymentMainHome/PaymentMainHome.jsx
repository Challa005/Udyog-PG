import React from "react";
import HeroSection from "../PaymentMainHome/HeroSection";
import PartnerLogos from "../PaymentMainHome/PartnerLogos";

import CheckoutSection from "../PaymentMainHome/CheckoutSection";
import DashboardSection from "../PaymentMainHome/DashboardSection";
import AppFeaturesSection from "../PaymentMainHome/AppFeaturesSection";
import IntegrationSection from "../PaymentMainHome/IntegrationSection";
import OffersSection from "../PaymentMainHome/OffersSection";
import FAQSection from "../PaymentMainHome/FAQSection";
import PricingSection from "../PaymentMainHome/PricingSection";
import EcosystemSection from "../PaymentMainHome/EcosystemSection";
import SuperCharge from "../PaymentMainHome/SuperCharge";
import Footer from "../PaymentMainHome/Footer";

export default function PaymentMainHome() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <PartnerLogos />

      <CheckoutSection />
      <DashboardSection />
      <AppFeaturesSection />
      <IntegrationSection />
      <OffersSection />
      <FAQSection />
      <PricingSection />
      <EcosystemSection />
      <SuperCharge />
      <Footer />
    </div>
  );
}

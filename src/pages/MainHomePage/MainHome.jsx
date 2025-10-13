import React from "react";
import Hero from "../MainHomePage/Hero.jsx";
import PaymentSlider from "../MainHomePage/PaymentSlider.jsx";
import GirlArc from "../MainHomePage/GirlArc.jsx";
import Tabs from "../MainHomePage/Tabs.jsx";
import Enterprise from "../MainHomePage/Enterprise.jsx";
import Features from "../MainHomePage/Features.jsx";
import Plugins from "../MainHomePage/Plugins.jsx";
import Dashboard from "../MainHomePage/Dashboard.jsx";
import Testimonials from "../MainHomePage/Testimonials.jsx";
import Pricing from "../MainHomePage/Pricing.jsx";
import Offerings from "../MainHomePage/Offerings.jsx";
import FAQ from "../MainHomePage/FAQ.jsx";
import EndToEnd from "../MainHomePage/EndToEnd.jsx";
import CTA from "../MainHomePage/CTA.jsx";
import Footer from "../MainHomePage/Footer.jsx";



export default function MainHome() {
  return (
    <div className="flex flex-col relative -mt-10">
       
      <Hero />
      <PaymentSlider />
      <GirlArc />
      <Tabs />
      <Enterprise />
      <Features />
      <Plugins />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <Offerings />
      <FAQ />
      <EndToEnd />
      <CTA />
      <Footer />
    </div>
  );
}

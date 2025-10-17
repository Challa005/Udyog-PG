import React from "react";
import HeroSections from "../PayoutMainHome/HeroSections.jsx";
import MultipleDestination from "../PayoutMainHome/MultipleDestination.jsx";
import EndtoEndSolution from "../PayoutMainHome/EndtoEndSolution.jsx";
import Relaible from "../PayoutMainHome/Relaible.jsx";
import Streamline from "../PayoutMainHome/Streamline.jsx";
import Cashgram from "../PayoutMainHome/Cahgram.jsx";
import Developer from "../PayoutMainHome/Developer.jsx";
import SmartPayouts from "../PayoutMainHome/SmartPayouts.jsx";
import Testominals from "../PayoutMainHome/Testominals.jsx";
import Pricing from "../PayoutMainHome/Pricing.jsx";
import FAQSection from "../PayoutMainHome/FAQSection.jsx";
import Products from "../PayoutMainHome/Products.jsx";
import GetStarted from "../PayoutMainHome/GetStarted.jsx";
import Footers from "../PayoutMainHome/Footers.jsx";
export default function MainHome() {
  return (
    <div className="flex flex-col relative -mt-10">
      <HeroSections />
      <MultipleDestination />
      <EndtoEndSolution />
      <Relaible />
      <Streamline />
      <Cashgram />
      <Developer />
      <SmartPayouts />
      <Testominals />
      <Pricing />
      <FAQSection />
      <Products />
      <GetStarted />
      <Footers />
    </div>
  );
}

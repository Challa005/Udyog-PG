import React from "react";
import HeroSections from "../OurProductMainHome/HeroSections.jsx";
import Udyogpay from "../OurProductMainHome/Udyogpay.jsx";
import UdyogTrack from "../OurProductMainHome/UdyogTrack.jsx";
import UdyogUclass from "../OurProductMainHome/UdyogUclass.jsx";
import Udyogpaycms from "../OurProductMainHome/Udyogpaycms.jsx";
import UdyogStep from "../OurProductMainHome/UdyogStep.jsx";
import UdyogAWS from "../OurProductMainHome/UdyogAWS.jsx";
import UdyogGroup from "../OurProductMainHome/UdyogGroup.jsx";
import Footer from "../OurProductMainHome/Footer.jsx";
export default function OurProductMainHome() {
  return (
    <div className="flex flex-col relative -mt-10">
      <HeroSections />
      <Udyogpay />
      <UdyogTrack />
      <UdyogUclass />
      <Udyogpaycms />
      <UdyogStep />
      <UdyogAWS />
      <UdyogGroup />
      <Footer />
    </div>
  );
}

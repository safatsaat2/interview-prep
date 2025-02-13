import Image from "next/image";
import HeroSection from "./components/HeroSection";
import InstantTestSection from "./components/InstantTestSection";
import WhyUsSection from "./components/WhyUsSection";
import OurUserSection from "./components/OurUserSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <InstantTestSection/>
    <WhyUsSection/>
    <OurUserSection/>
    </>
  );
}

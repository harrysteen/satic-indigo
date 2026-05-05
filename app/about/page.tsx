import AboutHero from "@/components/about/AboutHero";
import AboutOrigins from "@/components/about/AboutOrigins";
import AboutFoundations from "@/components/about/AboutFoundations";
import AboutJourney from "@/components/about/AboutJourney";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutLegacy from "@/components/about/AboutLegacy";
import AboutForward from "@/components/about/AboutForward";
import AboutClosing from "@/components/about/AboutClosing";

export const metadata = {
  title: "About Us - INDIGO",
  description: "Discover the stories of spitfires and spices. The legacy of INDIGO restaurant.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#20074A]">
      <AboutHero />
      <AboutOrigins />
      <AboutFoundations />
      <AboutJourney />
      <AboutPhilosophy />
      <AboutLegacy />
      <AboutForward />
      <AboutClosing />
    </div>
  );
}

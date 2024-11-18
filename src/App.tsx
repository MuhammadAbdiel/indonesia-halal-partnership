import { useEffect } from "react";
import { floatingWhatsapp } from "./assets";
import { ChooseUs } from "./components/ChooseUs";
import { CompanyHistory } from "./components/CompanyHistory";
import { Footer } from "./components/Footer";
import { HalalProduct } from "./components/HalalProduct";
import { Hero } from "./components/Hero";
import { OurExpert } from "./components/OurExpert";
import { OurTeam } from "./components/OurTeam";
import { Regulations } from "./components/Regulations";
import { Testimonials } from "./components/Testimonials";
import { Vision } from "./components/Vision";
import Aos from "aos";
import "aos/dist/aos.css";

export const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <Hero />
      <Regulations />
      <HalalProduct />
      <CompanyHistory />
      <Vision />
      <ChooseUs />
      <OurTeam />
      <OurExpert />
      <Testimonials />
      <Footer />

      <a
        target="_blank"
        href="https://wa.me/6281234000068"
        className="fixed bottom-5 right-5 w-50 h-50 rounded-full z-10"
      >
        <img src={floatingWhatsapp} width={75} height={75} alt="whatsapp" />
      </a>
    </>
  );
};

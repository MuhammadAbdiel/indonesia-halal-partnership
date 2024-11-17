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

export const App = () => {
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
    </>
  );
};

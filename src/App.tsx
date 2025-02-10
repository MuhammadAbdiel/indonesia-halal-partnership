import { useEffect, useState } from "react";
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
import { Gallery } from "./components/Gallery";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Helmet } from "react-helmet";
// import { TableOfContents } from "./components/TableOfContents";
import { PenyeliaHalal } from "./components/PenyeliaHalal";
import { PendampingHalal } from "./components/PendampingHalal";
import { OurPartner } from "./components/OurPartner";

export const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200, easing: "ease-in-out" });
  }, []);

  const sendMessage = (menuOption: number | string) => {
    const messages: { [key: string]: string } = {
      1: "",
      2: "",
    };

    const phoneNumbers: { [key: string]: string } = {
      1: "6281511397981",
      2: "6281234000068",
    };

    const message = messages[menuOption];
    const phoneNumber = phoneNumbers[menuOption];

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const visitorData = {
          ip: await fetch("https://api.ipify.org?format=json")
            .then((res) => res.json())
            .then((data) => data.ip),
          userAgent: navigator.userAgent,
          pageVisited: window.location.pathname,
        };

        await axios.post(
          "https://indonesiahalalpartner.com/save_visitor.php",
          visitorData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        console.error("Error tracking visitor:", err);
      }
    };

    trackVisitor();
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Indonesia Halal Partnership</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Menjadi pusat Layanan Halal terkemuka yang mendukung Pelaku Usaha dalam mengembangkan produk halal di Indonesia memasuki pasar global."
        />
        <meta
          name="keywords"
          content="IHP, INDONESIA HALAL PARTNER, PT IHP, PT Indonesia Halal Partnership, Sertifikat Halal, Produk Halal, Kota Malang, Provinsi Jawa Timur"
        />
        <meta name="author" content="INDONESIA HALAL PARTNER" />
        <link rel="canonical" href="https://www.indonesiahalalpartner.com/" />
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <TableOfContents /> */}
              <Regulations />
              <HalalProduct />
              <CompanyHistory />
              <Vision />
              <ChooseUs />
              <OurTeam />
              <OurExpert />
              <PenyeliaHalal />
              <PendampingHalal />
              <Testimonials />
              <Gallery />
              <OurPartner />
              <Footer />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Floating WhatsApp Button */}
      {window.location.pathname !== "/dashboard" && (
        <div className="fixed bottom-5 right-5 z-10">
          <img
            src={floatingWhatsapp}
            width={75}
            height={75}
            alt="whatsapp"
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer"
          />
        </div>
      )}

      {/* WhatsApp Menu */}
      {openMenu && (
        <div className="fixed bottom-20 right-5 bg-white p-4 shadow-lg rounded-lg z-20">
          <button
            className="block w-full bg-emerald-500 text-white px-4 py-2 rounded mb-2"
            onClick={() => sendMessage(2)}
          >
            Admin 1
          </button>
          <button
            className="block w-full bg-emerald-500 text-white px-4 py-2 rounded mb-2"
            onClick={() => sendMessage(1)}
          >
            Admin 2
          </button>
          {/* <button
            className="block w-full bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => sendMessage(3)}
          >
            Bicara dengan Admin
          </button> */}
        </div>
      )}
    </BrowserRouter>
  );
};

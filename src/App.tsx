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

export const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200, easing: "ease-in-out" });
  }, []);

  const sendMessage = (menuOption: number | string) => {
    const messages: { [key: string]: string } = {
      1: "Silakan isi:\nNama Usaha:\nBidang usaha:\nNo NIB:\nSkala usaha:\nJumlah Fasilitas produksi (dapur/outlet/cabang):\nLokasi fasilitas produksi:\nJumlah produk/menu:\nJumlah karyawan:",
      2: "Mandatory Sertifikasi Halal bagi seluruh Pelaku Usaha",
      3: "",
    };

    const phoneNumbers: { [key: string]: string } = {
      1: "6281511397981",
      2: "6281234000068",
      3: "6281234000068",
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

        await axios.post("http://localhost:5000/api/visitors", visitorData);
      } catch (err) {
        console.error("Error tracking visitor:", err);
      }
    };

    trackVisitor();
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
      <Gallery />
      <Footer />

      {/* Floating WhatsApp Button */}
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

      {/* WhatsApp Menu */}
      {openMenu && (
        <div className="fixed bottom-20 right-5 bg-white p-4 shadow-lg rounded-lg z-20">
          <button
            className="block w-full bg-blue-500 text-white px-4 py-2 rounded mb-2"
            onClick={() => sendMessage(2)}
          >
            Kenapa Harus Memiliki Sertifikat Halal
          </button>
          <button
            className="block w-full bg-blue-500 text-white px-4 py-2 rounded mb-2"
            onClick={() => sendMessage(1)}
          >
            Syarat Pengurusan Sertifikat Halal
          </button>
          <button
            className="block w-full bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => sendMessage(3)}
          >
            Bicara dengan Admin
          </button>
        </div>
      )}
    </>
  );
};

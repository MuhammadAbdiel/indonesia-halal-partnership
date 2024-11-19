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

export const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200, easing: "ease-in-out" });
  }, []);

  // Fungsi untuk mengirim pesan WhatsApp
  const sendMessage = (menuOption: any) => {
    const messages: any = {
      1: "Silakan isi:\nNama Usaha:\nBidang usaha:\nNo NIB:\nSkala usaha:\nJumlah Fasilitas produksi (dapur/outlet/cabang):\nLokasi fasilitas produksi:\nJumlah produk/menu:\nJumlah karyawan:",
      2: "Mandatory Sertifikasi Halal bagi seluruh Pelaku Usaha",
      default:
        "Selamat datang di IHP, silakan pilih menu berikut:\n1. Syarat pengurusan Sertifikat Halal\n2. Kenapa harus memiliki Sertifikat Halal\n3. Bicara dengan admin",
    };

    const message = messages[menuOption] || messages.default;
    const phoneNumber = "6281234000068"; // Ganti dengan nomor WhatsApp Anda

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

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
            onClick={() => sendMessage(1)}
          >
            Syarat Pengurusan Sertifikat Halal
          </button>
          <button
            className="block w-full bg-blue-500 text-white px-4 py-2 rounded mb-2"
            onClick={() => sendMessage(2)}
          >
            Kenapa Harus Memiliki Sertifikat Halal
          </button>
          <button
            className="block w-full bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => sendMessage("default")}
          >
            Bicara dengan Admin
          </button>
        </div>
      )}
    </>
  );
};

import { useState } from "react";
import { Link } from "react-scroll";
import { logoBPJPH, logoHalalIndonesia, logoPartnership } from "../assets";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-halal-green">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-halal-greenLight opacity-40 transform -skew-x-12" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-halal-greenYellow opacity-40 transform skew-x-12" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 bg-transparent">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 bg-white px-6 py-2 rounded-full">
            <img src={logoBPJPH} alt="BPJPH Logo" className="w-10 h-10" />
            <img
              src={logoHalalIndonesia}
              alt="Halal Indonesia Logo"
              className="w-10 h-10"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white font-semibold text-lg">
            <li>
              <Link
                to="regulations"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Sertifikat Halal
              </Link>
            </li>
            <li>
              <Link
                to="halal-product"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Produk Halal
              </Link>
            </li>
            <li>
              <Link
                to="company-history"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Company History
              </Link>
            </li>
            <li>
              <Link
                to="vision"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                to="choose-us"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Choose Us
              </Link>
            </li>
            <li>
              <Link
                to="our-team"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="our-expert"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Our Expert
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out mb-12 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="bg-halal-greenGrayTransparent text-white flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link
                to="regulations"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Sertifikat Halal
              </Link>
            </li>
            <li>
              <Link
                to="halal-product"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Produk Halal
              </Link>
            </li>
            <li>
              <Link
                to="company-history"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Company History
              </Link>
            </li>
            <li>
              <Link
                to="vision"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                to="choose-us"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Choose Us
              </Link>
            </li>
            <li>
              <Link
                to="our-team"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="our-expert"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Expert
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={2000}
                className="hover:text-halal-lime transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Center logo */}
      <div className="flex justify-center">
        <div
          className="bg-white rounded-full p-4 shadow-lg animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src={logoPartnership}
            alt="Partnership Logo"
            className="w-32 h-32"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-6 pb-16">
        {/* Center content */}
        <div className="text-center text-white space-y-8 mt-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            INDONESIA HALAL
            <br />
            PARTNERSHIP
          </h1>
          <p className="text-xl md:text-2xl italic max-w-3xl mx-auto mb-12">
            Halal Product are a guarantee of a better life
          </p>

          <button
            className="bg-white text-halal-green hover:bg-halal-lime hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
            onClick={() =>
              window.open("http://www.indonesiahalalpartner.com", "_blank")
            }
          >
            www.indonesiahalalpartner.com
          </button>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-16">
        <div className="flex space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={`left-${i}`}
              className="w-3 h-3 rounded-full bg-halal-lime animate-fade-up"
              style={{ animationDelay: `${0.7 + i * 0.1}s` }}
            />
          ))}
        </div>
        <div className="flex space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={`right-${i}`}
              className="w-3 h-3 rounded-full bg-halal-lime animate-fade-up"
              style={{ animationDelay: `${0.7 + i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

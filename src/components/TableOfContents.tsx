import { Link } from "react-scroll";

export const TableOfContents = () => {
  return (
    <section className="bg-[#A6A6A6] py-20 px-6 md:px-16 lg:px-32" id="toc">
      <div className="relative" data-aos="fade-down">
        {/* Number and Decoration */}
        <div className="flex items-center justify-center space-x-2 text-white mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] text-center md:text-5xl font-bold text-white mb-28">
          Daftar Isi
        </h2>

        {/* Grid Layout for List */}
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12 text-white">
          <Link
            to="toc"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#toc"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              1
            </span>
            Daftar Isi
          </Link>
          <Link
            to="regulations"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#regulations"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              2
            </span>
            Kenapa Harus Sertifikat Halal
          </Link>
          <Link
            to="halal-product"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#halal-product"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              3
            </span>
            Tentang Produk Halal
          </Link>
          <Link
            to="company-history"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#company-history"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              4
            </span>
            Company History
          </Link>
          <Link
            to="vision"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#vision"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              5
            </span>
            Visi Misi
          </Link>
          <Link
            to="choose-us"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#choose-us"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              6
            </span>
            Kenapa Memilih Kami?
          </Link>
          <Link
            to="our-team"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#our-team"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              7
            </span>
            Our Team
          </Link>
          <Link
            to="our-expert"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#our-expert"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              8
            </span>
            Our Expert
          </Link>
          <Link
            to="penyelia"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#penyelia"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              9
            </span>
            Penyelia Halal IHP
          </Link>
          <Link
            to="pendamping"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#pendamping"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              10
            </span>
            Pendamping Halal IHP
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#testimonials"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              11
            </span>
            Customer Testimonials
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={2000}
            className="flex items-center text-lg text-gray-800 font-medium"
            href="#gallery"
          >
            <span className="w-8 h-8 p-6 rounded-full bg-white text-gray-800 font-extrabold flex items-center justify-center mr-4">
              12
            </span>
            Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

import { email, logoPartnership, maps, phone, web } from "../assets";

export const Footer = () => {
  return (
    <footer className="bg-[#0097b2] text-white py-20 px-6 md:px-16 lg:px-32">
      <div className="flex gap-12 flex-col md:flex-row items-center md:items-start justify-between mb-12">
        <div className="">
          <h2 className="text-4xl font-bold mb-6">Center & Branch Office</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={phone} alt="phone" className="h-6 w-6" />
              </span>
              <div className="flex gap-8">
                <div className="flex gap-8">
                  <a
                    href="https://wa.me/6281234000068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +62 812 3400 0068
                  </a>
                </div>
                <div className="flex gap-8">
                  <a
                    href="https://wa.me/6281511397981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +62 815 1139 7981
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={web} alt="web" className="h-6 w-6" />
              </span>
              <a
                href="https://www.indonesiahalalpartner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.indonesiahalalpartner.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={email} alt="email" className="h-6 w-6" />
              </span>
              <a
                href="mailto:indohalalpartner@gmail.com"
                className="hover:underline"
              >
                indohalalpartner@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/m7FguaEAX7tBy4xk7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Ikan Arwana B4, Tunjungsekar, Kecamatan Lowokwaru, Kota
                Malang, Jatim, Indonesia
              </a>
            </li>
          </ul>

          <div className="border-b-4 max-w-52 border-white my-12" />

          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/T4DERYeHYok3waWt5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Gatot Subroto km 10,5 Komplek Perumahan Gading Mutiara blok 5H
                Kec Sunggal Kab Deli Serdang, Sumut
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/pNfAQin8oAxUG3FZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Zahidah Center, Cimanggu Pabuaran Jl. H. Soleh Blok A no 11,
                Kedung Waringin, Tanah Sereal kota Bogor - Jabar (Perwakilan
                JABODETABEK)
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/LNtrAENcY4Z8gNp26"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Baldu Wahadad, kompleks Bunda Ely Fiditan, Kecamatan Dullah
                Utara Kota Tual Maluku
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/6C21mNDCf5Jw9c7u5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Pajak Permai Km. 11 Kel Alang-alang Lebar Kecamatan
                Alang-alang Lebar Palembang Sumatera Selatan
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/Kxz9r1xXLDRdYED17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Mataram HOP 6 No. 113 Kecamatan Bontang Utara Kota Bontang
                Kalimantan Timur
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/HJeDsJRg5e9ABPgA6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. H. Lamuse, BTN Fadhil Indah, Blok H, No 4 Kel Lepo-Lepo, Kec
                Baruga Kota Kendari, Sulawesi Tenggara
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/NQbnoo3BNc3jB2Ce6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Lubuk Semut no 13 Kel Lubuk Semut Kec Karimun Kab Karimun
                Prov Kepri
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/L8926sMzLXDeT8Mv8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Dsn Nelayan, Gampong Lhokbanie, Kecamatan Langsa Barat, Kab Kota
                Langsa Prov Aceh
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/8KDdQDUrzXs4mW5Y8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Dipowinatan MG I No. 78 Keparakan, Mergangsan kota Yogyakarta -
                DIY
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/4a8EXUd8zzyBD4nG6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Kec Situjuah Limo Nagari, Nagari Banda Dalam jorong Padang
                Ambacang Kab 50 Koto Prov Sumatera Barat
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/ssXGL4zdWpHP4K5PA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Jl. Akasia III Dalam No. 3 Kec Gerunggang kota Pangkalpinang
                Prov Bangka Belitung
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={maps} alt="maps" className="h-6 w-6" />
              </span>
              <a
                href="https://maps.app.goo.gl/oHX3tfMyrtsPpmYW6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Bali
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="">
          <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={phone} alt="phone" className="h-6 w-6" />
              </span>
              <div className="flex gap-8">
                <div className="flex gap-8">
                  <a
                    href="https://wa.me/6281234000068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +62 812 3400 0068
                  </a>
                </div>
                <div className="flex gap-8">
                  <a
                    href="https://wa.me/6281511397981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +62 815 1139 7981
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={web} alt="web" className="h-6 w-6" />
              </span>
              <a
                href="https://www.indonesiahalalpartner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.indonesiahalalpartner.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={email} alt="email" className="h-6 w-6" />
              </span>
              <a
                href="mailto:indohalalpartner@gmail.com"
                className="hover:underline"
              >
                indohalalpartner@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <div className="bg-white rounded-full p-8 shadow-lg">
            <img
              src={logoPartnership}
              alt="Partnership Logo"
              className="h-32 w-32 md:h-48 md:w-48 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

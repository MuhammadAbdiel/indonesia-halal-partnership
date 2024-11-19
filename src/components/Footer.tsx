import { email, logoPartnership, maps, phone, web } from "../assets";

export const Footer = () => {
  return (
    <footer className="bg-halal-green text-white py-20 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="">
          <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-halal-lime p-2 rounded-full">
                <img src={phone} alt="phone" className="h-6 w-6" />
              </span>
              <a
                href="https://wa.me/6281511397981"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +62 815 1139 7981
              </a>
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

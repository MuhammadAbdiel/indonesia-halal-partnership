import { logoPartnership } from "../assets";

export const Footer = () => {
  return (
    <footer className="bg-halal-green text-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-green-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10l7-7m0 0h4a2 2 0 012 2v12a2 2 0 01-2 2h-4l-7-7m0 0l7-7"
                  />
                </svg>
              </span>
              <span>+62 812 3400 0068</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-green-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.94 6.5a1.5 1.5 0 011.75-.94l12 4.5a1.5 1.5 0 01.94 1.75l-4.5 12a1.5 1.5 0 01-1.75.94l-12-4.5a1.5 1.5 0 01-.94-1.75l4.5-12z" />
                </svg>
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
              <span className="bg-green-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12v4m-4-4v4m-4-4v4m12 0V8a4 4 0 00-4-4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4z"
                  />
                </svg>
              </span>
              <a
                href="mailto:indohalalpartner@gmail.com"
                className="hover:underline"
              >
                indohalalpartner@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-green-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.516 2.114A1 1 0 009 2v1.518a1 1 0 01-.455.832l-4.8 3.2a1 1 0 00-.357.832V16a2 2 0 002 2h9.664a2 2 0 001.963-1.606l1.205-5.804a2 2 0 00-.902-2.059l-6.802-4.543a1 1 0 00-.55-.174H10.516z" />
                </svg>
              </span>
              <span>
                Jl. Ikan Arwana B4, Tunjungsekar, Kecamatan Lowokwaru, Kota
                Malang, Jatim, Indonesia
              </span>
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

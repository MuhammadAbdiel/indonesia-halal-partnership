import {
  auditor,
  dewanPakar,
  direkturMarketing,
  dirkerma,
  dirut,
  edmon,
  iwan,
  koes,
  komisarisDua,
  komisarisSatu,
  komisarisUtama,
  lailatul,
  management,
  murtika,
  nurrahma,
  parmini,
  sri,
  sugito,
  wadirut,
} from "../assets";

export const OurTeam = () => {
  const firstGroup = [
    {
      name: "Prof. DR. Irwandi Jaswir",
      position: "Dewan Pakar",
      image: dewanPakar,
    },
    {
      name: "Azman, SKM, M.M",
      position: "Komisaris",
      image: komisarisDua,
    },
    {
      name: "M Monarita D, SKeb, M.Si",
      position: "Komisaris Utama",
      image: komisarisUtama,
    },
    {
      name: "Ainur R Rinata, SSos, M.M",
      position: "Komisaris",
      image: komisarisSatu,
    },
  ];

  const secondGroup = [
    {
      name: "Rafi Chanssa Ardiannantha, S.Pt",
      position: "Auditor Independent",
      image: auditor,
    },
    {
      name: "Sri Ida Wahyuningsih, S.Pd",
      position: "Dirut",
      image: dirut,
    },
    {
      name: "Eka Ristri D, S.Si, MT",
      position: "Wadirut",
      image: wadirut,
    },
  ];

  const thirdGroup = [
    {
      name: "Koes Priantoro, AMd. Par",
      position: "Direktur HRD",
      image: koes,
    },
    {
      name: "Drs. H. Edmon Hisbullathif, M.Si",
      position: "Direktur Kerjasama",
      image: edmon,
    },
    {
      name: "Iwan Santoso, ST",
      position: "Direktur IT",
      image: iwan,
    },
  ];

  const fourthGroup = [
    {
      name: "Mida Nopitasari, S.Sos",
      position: "Management",
      image: management,
    },
    {
      name: "Nurrahma Safitri, SE",
      position: "Direktur Keuangan",
      image: nurrahma,
    },
  ];

  const fifthGroup = [
    {
      name: "Joelijanto Yusuf, A.Md",
      position: "Koordinator Jatim 1",
      image: dirkerma,
    },
    {
      name: "Akhmad Fattah, S.Sos",
      position: "Koordinator Jatim 2",
      image: direkturMarketing,
    },
    {
      name: "Sri Nulan Uar, SH.I",
      position: "Koordinator Maluku",
      image: sri,
    },
    {
      name: "Parmini, SE, M.M",
      position: "Koordinator Jateng & DIY",
      image: parmini,
    },
  ];

  const sixthGroup = [
    {
      name: "Drs. H. Edmon Hisbullathif, M.Si",
      position: "Koordinator Jabodetabek & Kaltim",
      image: edmon,
    },
    {
      name: "Lailatul Fitriyah, S.S",
      position: "Koordinator Jatim 3",
      image: lailatul,
    },
    {
      name: "Tri Murtika, SE",
      position: "Koordinator Sumsel",
      image: murtika,
    },
    {
      name: "Agus Sugito, S.Th.I, M.Pd, Gr",
      position: "Koordinator Sultra",
      image: sugito,
    },
  ];

  return (
    <section
      className="bg-[#d08e96] py-20 px-6 md:px-16 lg:px-32"
      id="our-team"
    >
      <div className="relative" data-aos="fade-down">
        <div className="flex items-center justify-center space-x-2 text-white mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
            <div className="w-3 h-3 bg-halal-lime rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[32px] md:text-5xl text-center font-bold text-white mb-12">
          Our Structure
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12 mb-12">
          {firstGroup.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#d4a3a8] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#617327] text-xs text-white py-1 px-3 rounded shadow-md text-center">
                  {member.position}
                </div>
              </div>
              {/* Member Name */}
              <p className="text-white font-semibold text-lg text-center mt-4">
                {member.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12 mb-12">
          {secondGroup.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#d4a3a8] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                bg-[#0f5764] text-xs text-white py-1 px-3 rounded shadow-md text-center"
                >
                  {member.position}
                </div>
              </div>
              {/* Member Name */}
              <p className="text-white font-semibold text-lg text-center mt-4">
                {member.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12 mb-12">
          {thirdGroup.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#d4a3a8] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#5b5066] text-xs text-white py-1 px-3 rounded shadow-md text-center">
                  {member.position}
                </div>
              </div>
              {/* Member Name */}
              <p className="text-white font-semibold text-lg text-center mt-4">
                {member.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12 mb-12">
          {fourthGroup.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#d4a3a8] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#746142] text-xs text-white py-1 px-3 rounded shadow-md text-center">
                  {member.position}
                </div>
              </div>
              {/* Member Name */}
              <p className="text-white font-semibold text-lg text-center mt-4">
                {member.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12 mb-12">
          {fifthGroup.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#d4a3a8] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#224132] text-xs text-white py-1 px-3 rounded shadow-md text-center">
                  {member.position}
                </div>
              </div>
              {/* Member Name */}
              <p className="text-white font-semibold text-lg text-center mt-4">
                {member.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12">
          {sixthGroup.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#d4a3a8] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#8b55ff] text-xs text-white py-1 px-3 rounded shadow-md text-center">
                  {member.position}
                </div>
              </div>
              {/* Member Name */}
              <p className="text-white font-semibold text-lg text-center mt-4">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

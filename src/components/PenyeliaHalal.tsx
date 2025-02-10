import {
  aztry,
  edmon,
  enden,
  galung,
  halmahera,
  irma,
  istain,
  julkarnain,
  khairiyah,
  koes,
  lailatul,
  lukita,
  mega,
  naila,
  novi,
  nurrahma,
  parmini,
  sariba,
  sri,
  sugito,
  umar,
} from "../assets";

export const PenyeliaHalal = () => {
  const teamMembers = [
    {
      name: "Halmahera, S.Akun, Ak <br /> B-763/Un.05/PKH/HM.00/05/2024",
      image: halmahera,
    },
    {
      name: "Koes Priantoro, A.Md Par <br /> 166/PH.1.B/HC-UINSK/VIII/2024",
      image: koes,
    },
    {
      name: "Sri Nulan Uar, SH.I <br /> 86/PH.007/GE/X/2024",
      image: sri,
    },
    {
      name: "Lailatul Fitriyah, S.S <br /> 3922/PH.083/IHB.XII/2024 <br /> PHI.1957 02236 2024",
      image: lailatul,
    },
    {
      name: "Khairiyah Rahmi, S.Pd <br /> PPHR-4/LPSDMH/6/2024/001",
      image: khairiyah,
    },
    {
      name: "Drs. Edmond Hisbullathif, M.Si. <br /> 62/PH.005/GE/VIII/2024",
      image: edmon,
    },
    {
      name: "Umar Rauf Siregar, ST <br /> 89/PH.007/GE/X/2024",
      image: umar,
    },
    {
      name: "Sariba Ngabalin, S.Sy <br /> 87/PH.007/GE/X/2024",
      image: sariba,
    },
    {
      name: "Galung Setiawan, A.Md <br /> R.DN -1.2.0759",
      image: galung,
    },
    {
      name: "Julkarnain, SE <br /> 0001/PH.001/GE/X/2023",
      image: julkarnain,
    },
    {
      name: "Ista’in, S.Ag <br /> 44/I/PH-UMK/HSC/2024",
      image: istain,
    },
    {
      name: "Mega Mikasari <br /> 96/PH.008/GE/X/2024",
      image: mega,
    },
    {
      name: "Lukita Puspa Anggoro <br /> I.DN - 2.11.0097",
      image: lukita,
    },
    {
      name: "Enden Primandhika, ST <br /> 158/PH.1.B/HC-UINSK/VIII/2024",
      image: enden,
    },
    {
      name: "Irma Santi, S.Kom <br /> 0007/PH.001/GE/X/2024 <br /> PHI.2108 00005 2024",
      image: irma,
    },
    {
      name: "Novi Pamelia Silaban, S.Si <br /> 0029/PH.003/GE/VII/2024 <br /> PHI.2108 00096 2024",
      image: novi,
    },
    {
      name: "Nurrahma Safitri, SE <br /> 97/PH.008/GE/XI/2024",
      image: nurrahma,
    },
    {
      name: "Aztry Delliani, S.Kom <br /> 67/PH.006/GE/IX/2024",
      image: aztry,
    },
    {
      name: "Parmini, SE, M.M, <br /> PHI.2108.00182 2023",
      image: parmini,
    },
    {
      name: "Agus Sugito, S.Th.I, M.Pd, Gr <br /> 26/12/PHR/2024/LPKEWI",
      image: sugito,
    },
    {
      name: "Naila Nurul Afifah <br /> PHI 1957 01544 2024",
      image: naila,
    },
  ];

  return (
    <section
      className="bg-[#b7a2cd] py-20 px-6 md:px-16 lg:px-32"
      id="penyelia"
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
          Penyelia Halal IHP
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-center-1 md:grid-cols-center-2 lg:grid-cols-center-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#D5C3E5] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {/* Member Image */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-white object-cover"
                />
              </div>
              {/* Member Name */}
              <p
                className="text-white font-semibold text-lg text-center mt-4"
                dangerouslySetInnerHTML={{ __html: member.name }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

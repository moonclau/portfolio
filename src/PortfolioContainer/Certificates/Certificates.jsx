import { useState, React } from "react";
import { useTheme } from "../../imports/ThemeContext";
import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import AWSAccreditationTechnical from "../../assets/images/certificates/AccreditationTechnical.png";
import PDFAWSAccreditationTechnical from "../../assets/pdf/Certificates/Accreditation Technical.pdf";
import NIST from "../../assets/images/certificates/Nist Cybersecurity.jpg";
import NISTPDF from "../../assets/pdf/Certificates/NIST.pdf";
import SDLC from "../../assets/images/certificates/sdlc.jpg";
import SDLCPDF from "../../assets/pdf/Certificates/SDLC.pdf";

function Certificates() {
  //changed background
  const { isDarkMode } = useTheme();
  //changed languague
  const { t } = useTranslation();

  // diplay modal certificate .
  const [showCertificate, setShowCertificate] = useState(false);
  const [urlCertificate, setUrlCertificate] = useState("");

  const handleShowCertificate = (url) => {
    setUrlCertificate(url);
    setShowCertificate(true);
  };

  const certificates = [
    {
      id: 1,
      name: "AWS Partner: Accreditation (Technical)",
      description: "AwsPAccreditation",
      image: AWSAccreditationTechnical,
      urlPDF: PDFAWSAccreditationTechnical,
    },
    {
      id: 2,
      name: "NIST Cybersecurity Framework",
      description: "NISTDescription",
      image: NIST,
      urlPDF: NISTPDF,
    },
    {
      id: 3,
      name: "SDLC - Software Development Life Cycle SDLC",
      description: "SDLCDescription",
      image: SDLC,
      urlPDF: SDLCPDF,
    },
  ];
  return (
    <div id="certificates" className="w-full h-screen mr-5 md:m-5 md:mt-20">
      <ul className="w-[85%] ml-10">
        {certificates?.map((certificate) => (
          <li
            key={certificate.id}
            className={`md:flex md:flex-row ml-15 mr-15 mb-3 rounded-md pa-2 ${
              isDarkMode ? "bg-slate-900/50  " : "bg-sky-400/20"
            } `}
          >
            <div className="md:basis-1/4">
              <div className="flex h-full justify-center items-center">
                <img
                  className="p-5 "
                  src={certificate.image}
                  alt={certificate.name}
                />
              </div>
            </div>
            <div className="md:basis-3/4  ml-2 mt-5">
              <h3 className="mb-1 flex text-2xl">{certificate.name}</h3>
              <p
                className={`w-11/12 mb-3 ${
                  isDarkMode ? "text-gray-300 " : "text-slate-900"
                }`}
              >
                {t(certificate.description)}
              </p>
              <a className="flex md:hidden text-lg font-semibold mb-2  group hover:text-[#3780e6]" href={certificate.urlPDF} target="_blank">
                {t("seeCertificate")}
                <MdArrowOutward className="ml-2 group-hover:-translate-y-1" />
              </a>
              <button
                className="hidden md:flex text-lg font-semibold mb-2  group hover:text-[#3780e6]"
                onClick={() => handleShowCertificate(certificate.urlPDF)}
              >
                {t("seeCertificate")}
                <MdArrowOutward className="ml-2 group-hover:-translate-y-1" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showCertificate && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="w-full md:w-3/4 relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 ">
                <div className="bg-white">
                  <iframe src={urlCertificate}  className=" w-full h-[600px]"></iframe>
                  
                </div>
                  <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-white p-2 m-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setShowCertificate(false)}
                    >
                       {t("close")}
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Certificates;

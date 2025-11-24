"use client";

export default function Footer() {
  return (
    <footer className="bg-[#083B3D] text-white font-poppins pt-10 pb-6">
      {/* ===== Logo Tetap ===== */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/logos/M-Knows.png"
          alt="M-Knows Consulting Logo"
          className="w-[200px] h-auto"
        />
      </div>

      {/* ===== GRID UTAMA ===== */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* ===================== KOLOM 1 ===================== */}
        <div className="order-1 md:order-1">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img
              src="/images/icons/maps.png"
              alt="location"
              className="w-6 h-6 mr-2 cursor-pointer hover:scale-110 transition"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/mkkhNE6ax1pZvUy8A",
                  "_blank"
                )
              }
            />
            <h4 className="text-white font-semibold font-montserrat text-[20px]">
              PT. Menara Indonesia
            </h4>
          </div>

          <p className="text-[#989898] font-medium font-montserrat leading-relaxed ml-8">
            Jl. Raya Cirendeu No.61 Ciputat,
            <br />
            Tangerang Selatan 15419
          </p>

          {/* === Contact Us di Kolom 1 === */}
          <div className="mt-6">
            <h4 className="text-white font-semibold font-montserrat mb-3 text-[20px] ml-8">
              Contact Us
            </h4>

            {/* ===== WhatsApp 1 ===== */}
            <div className="flex items-center justify-center md:justify-start mb-2">
              <img
                src="/images/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
                onClick={() =>
                  window.open("https://wa.me/6281210468281", "_blank")
                }
              />
              <span className="text-[#989898] font-medium font-montserrat">
                Telp: 021-388-900-52
              </span>
            </div>

            {/* ===== WhatsApp 2 ===== */}
            <div className="flex items-center justify-center md:justify-start mb-2">
              <img
                src="/images/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
                onClick={() =>
                  window.open("https://wa.me/6281210468281", "_blank")
                }
              />
              <span className="text-[#989898] font-medium font-montserrat">
                0812-1042-8281
              </span>
            </div>

            {/* ===== Gmail ===== */}
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/images/icons/gmail.png"
                alt="Email"
                className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
                onClick={() =>
                  (window.location.href =
                    "mailto:learning@m-knowsconsulting.com")
                }
              />
              <span className="text-[#989898] font-medium font-montserrat">
                learning@m-knowsconsulting.com
              </span>
            </div>
          </div>
        </div>

        {/* ===================== KOLOM 2 ===================== */}
        <div className="order-3 md:order-2">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img
              src="/images/icons/maps.png"
              alt="location"
              className="w-6 h-6 mr-2 cursor-pointer hover:scale-110 transition"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/mkkhNE6ax1pZvUy8A",
                  "_blank"
                )
              }
            />
            <h4 className="text-white font-semibold font-montserrat text-[20px]">
              PT. Menara Pengetahuan Indonesia
            </h4>
          </div>

          <p className="text-[#989898] font-medium font-montserrat leading-relaxed mb-6 ml-8">
            Jl. Raya Cirendeu No.61 Ciputat,
            <br />
            Tangerang Selatan 15419
          </p>

          {/* === Our Social Media === */}
          <div className="mt-6">
            <h4 className="font-semibold font-montserrat text-white mb-3 text-[20px] ml-8">
              Our Social Media:
            </h4>
            <div className="flex justify-center md:justify-start space-x-0 ml-7">
              <a
                href="https://www.linkedin.com/company/m-knows-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.youtube.com/@mknowsconsultinggroup"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/youtube.png"
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/mknowsconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.tiktok.com/@mknowsconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/tiktok.png"
                  alt="TikTok"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.facebook.com/mknowsconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/facebook.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ===================== KOLOM 3 ===================== */}
        <div className="order-2 md:order-3">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img
              src="/images/icons/maps.png"
              alt="location"
              className="w-6 h-6 mr-2"
            />
            <h4 className="text-white font-semibold font-montserrat text-[20px]">
              Surabaya Branch Office
            </h4>
          </div>

          <div className="text-[#989898] font-montserrat font-medium leading-relaxed ml-8">
            <p>Jl. Darmo Permai III Surabaya</p>
          </div>

          {/* ===== WhatsApp ===== */}
          <div className="text-[#989898] font-montserrat font-medium leading-relaxed ">
            <div className="flex items-center justify-center md:justify-start mt-2">
              <img
                src="/images/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
                onClick={() =>
                  window.open("https://wa.me/6281210468281", "_blank")
                }
              />
              <span>Telp: 031-837-05277</span>
            </div>

            {/* ===== Gmail ===== */}
            <div className="flex items-center justify-center md:justify-start mt-1">
              <img
                src="/images/icons/gmail.png"
                alt="Email"
                className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
                onClick={() =>
                  (window.location.href =
                    "mailto:surabaya@m-knowsconsulting.com")
                }
              />
              <span>surabaya@m-knowsconsulting.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

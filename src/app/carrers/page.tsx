"use client";

const Page = () => { 
return(
    <div className ="relative min-h-screen bg-cover bg-center bg-no-repeat text-gray-900" >
   
  <div className="fixed inset-0 bg-white/65 -z-10"></div>

  <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#083b44] w-[full] h-[122px] px-[60px] py-3 shadow-lg text-white font-montserrat mx-auto">
    <div className="logo">
      <img src="logos/M-Knows.png" alt="M-Knows Consulting" className="h-12 object-contain" />
    </div>
    <nav className="flex gap-[2cm]">
      <a href="#" className="text-lg hover:text-[#d1e7e0] transition-colors">Home</a>
      <a href="#" className="text-lg hover:text-[#d1e7e0] transition-colors">New Training</a>
      <a href="#" className="text-lg hover:text-[#d1e7e0] transition-colors">Our Services</a>
      <a href="#" className="text-lg hover:text-[#d1e7e0] transition-colors">More</a>
    </nav>
  </header>

{/* ===== HERO SECTION ===== */}
 
    <section className="relative mt-[100px]">
      <div className="absolute top-[200px] left-[70px] text-[#02353C] z-10">
        <h3 className="text-[48px] font-semibold leading-tight">Careers at</h3>
        <h3 className="text-[48px] font-semibold leading-tight">M-Knows Consulting</h3>
      </div>
      <div className="relative w-full h-[450px] overflow-hidden">
        <img src="images/careers/karir-header.jpg" alt="Hero Image" className="w-full h-full object-cover" />
      </div>
    </section>

  
    <section className="relative flex justify-center mt-8 pb-24 px-5 z-30">
      <div className="w-[900px] rounded-2xl shadow-2xl bg-gradient-to-b from-[#27548A] to-[#02353C] p-5 overflow-hidden">
        <div className="rounded-xl overflow-hidden">
          <img src="images/careers/konten.jpg" alt="Content Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

 
    {/* ===== FOOTER ===== */}
    <footer className="bg-[#083b44] text-white px-[100px] py-[40px] grid grid-cols-1 md:grid-cols-3 gap-8 text-[15px] leading-relaxed">
        <div>
          <h4 className="font-bold mb-3">PT. Menara Indonesia</h4>
          <p>Jl. Raya Cirendeu, No.61 Ciputat,<br />Tangerang Selatan 15419</p>
          <p className="mt-2">Telp: 021-388-900-52<br />0812-1042-8281</p>
          <p>Email: learning@m-knowsconsulting.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">PT. Menara Pengetahuan Indonesia</h4>
          <p>Jl. Raya Cirendeu, No.61 Ciputat,<br />Tangerang Selatan 15419</p>
          <h4 className="font-bold mt-4 mb-2">Our Social Media:</h4>
          <div className="flex gap-3">
            <img src="/images/facebook.jpg" alt="Facebook" className="w-5 h-5" />
            <img src="/images/ig.jpg" alt="Instagram" className="w-5 h-5" />
            <img src="/images/yt.jpg" alt="YouTube" className="w-5 h-5" />
            <img src="/images/linkedin.jpg" alt="LinkedIn" className="w-5 h-5" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3">Surabaya Branch Office</h4>
          <p>Jl. Darmo Permai II Surabaya</p>
          <p>Telp: 031-837-05277</p>
          <p>Email: surabaya@m-knowsconsulting.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Page;
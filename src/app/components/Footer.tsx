import Link from 'next/link';
import Image from 'next/image';
// Import react-icons jika lae mau pakai
// import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo di tengah (sesuai desain) */}
        <div className="md:col-span-4 flex justify-center mb-8">
           {/* Ganti src dengan path logo lae */}
          <Image 
            src="/logo-m-knows.png" 
            alt="M-Knows Consulting Logo" 
            width={200} 
            height={45}
          />
        </div>

        {/* Kolom Alamat 1 */}
        <div>
          <h5 className="font-bold mb-3">PT. Menara Indonesia</h5>
          <p className="text-sm text-gray-400">Jl. Raya Cirendeu, Ruko Ciputat, Tangerang Selatan 15419</p>
        </div>

        {/* Kolom Alamat 2 */}
        <div>
          <h5 className="font-bold mb-3">PT. Menara Pengetahuan Indonesia</h5>
          <p className="text-sm text-gray-400">Jl. Raya Cirendeu, Ruko Ciputat, Tangerang Selatan 15419</p>
        </div>

        {/* Kolom Alamat 3 */}
        <div>
          <h5 className="font-bold mb-3">Surabaya Branch Office</h5>
          <p className="text-sm text-gray-400">Jl. Darmo Permai III, Surabaya</p>
          <p className="text-sm text-gray-400">telp. 031-991-81227</p>
          <p className="text-sm text-gray-400">surabaya@m-knowsconsulting.com</p>
        </div>

        {/* Kolom Kontak & Social */}
        <div>
          <h5 className="font-bold mb-3">Contact Us</h5>
          <p className="text-sm text-gray-400">Telp: 021-388-900-52</p>
          <p className="text-sm text-gray-400">Fax: 021-388-900-52</p>
          <p className="text-sm text-gray-400">learning@m-knowsconsulting.com</p>
          
          <h5 className="font-bold mt-4 mb-2">Our Social Media</h5>
          <div className="flex space-x-4">
            {/* Ganti dengan ikon yang lae mau */}
            <span className="text-xl">FB</span>
            <span className="text-xl">IN</span>
            <span className="text-xl">YT</span>
            <span className="text-xl">IG</span>
            <span className="text-xl">TK</span>
          </div>
        </div>
      </div>
      {/* Chat button (position fixed) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
        {/* Ganti dengan ikon chat */}
        <span>Let's Chat</span>
      </button>
    </footer>
  );
};

export default Footer;
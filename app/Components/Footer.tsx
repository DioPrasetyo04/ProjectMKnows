import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#002A4E] text-white pt-16 pb-8"> {/* Warna biru tua dari desain */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Logo & Alamat 1 */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logos/M-Knows.png" // Path logo Anda dari file tree
                alt="M-Knows Consulting Logo"
                width={200} // Sesuaikan ukuran
                height={50} // Sesuaikan ukuran
              />
            </Link>
            <div className="flex items-start">
              <MdLocationPin className="w-6 h-6 mr-3 flex-shrink-0 text-mknows-green" />
              <div>
                <p className="font-semibold">PT. Menara Indonesia</p>
                <p className="text-sm text-gray-300">Jl. Raya Cirendeu, No.61 Ciputat, Tangerang Selatan 15419</p>
              </div>
            </div>
          </div>

          {/* Kolom 2: Alamat 2 & 3 */}
          <div className="space-y-6 md:mt-12 pt-5">
            <div className="flex items-start">
              <MdLocationPin className="w-6 h-6 mr-3 flex-shrink-0 text-mknows-green" />
              <div>
                <p className="font-semibold">PT. Menara Pengetahuan Indonesia</p>
                <p className="text-sm text-gray-300">Jl. Raya Cirendeu, No.61 Ciputat, Tangerang Selatan 15419</p>
              </div>
            </div>
            <div className="flex items-start">
              <MdLocationPin className="w-6 h-6 mr-3 flex-shrink-0 text-mknows-green" />
              <div>
                <p className="font-semibold">Surabaya Branch Office</p>
                <p className="text-sm text-gray-300">Jl. Darmo Permai III Surabaya</p>
                <p className="text-sm text-gray-300">Telp: 031-837-05277</p>
                <p className="text-sm text-gray-300">surabaya@m-knowsconsulting.com</p>
              </div>
            </div>
          </div>

          {/* Kolom 3: Contact Us */}
          <div className="space-y-4 md:mt-12 pt-5">
            <h4 className="text-xl font-semibold mb-4">Contact us</h4>
            <div className="flex items-center">
              <MdPhone className="w-5 h-5 mr-3 text-mknows-green" />
              <span className="text-sm text-gray-300">021-388-900-52</span>
            </div>
            <div className="flex items-center">
              <MdPhone className="w-5 h-5 mr-3 text-mknows-green" />
              <span className="text-sm text-gray-300">0812-1042-8281</span>
            </div>
            <div className="flex items-center">
              <MdEmail className="w-5 h-5 mr-3 text-mknows-green" />
              <span className="text-sm text-gray-300">learning@m-knowsconsulting.com</span>
            </div>
          </div>

          {/* Kolom 4: Social Media */}
          <div className="space-y-4 md:mt-12 pt-5">
            <h4 className="text-xl font-semibold mb-4">Our Social Media:</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-mknows-green transition-colors"><FaLinkedin size={24} /></Link>
              <Link href="#" className="text-gray-300 hover:text-mknows-green transition-colors"><FaYoutube size={24} /></Link>
              <Link href="#" className="text-gray-300 hover:text-mknows-green transition-colors"><FaInstagram size={24} /></Link>
              <Link href="#" className="text-gray-300 hover:text-mknows-green transition-colors"><FaFacebook size={24} /></Link>
              <Link href="#" className="text-gray-300 hover:text-mknows-green transition-colors"><FaTiktok size={24} /></Link>
            </div>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} M-Knows Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-teal-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Ganti src dengan path logo lae */}
        <Link href="/">
          <Image 
            src="/logo-m-knows.png" // Asumsi nama logo
            alt="M-Knows Consulting Logo" 
            width={180} 
            height={40} 
            className="h-auto"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/new-training" className="hover:text-gray-300">New Training</Link>
          <Link href="/our-services" className="hover:text-gray-300">Our Services</Link>
          <Link href="/more" className="hover:text-gray-300">More</Link>
        </div>
        {/* Tombol menu mobile bisa ditambahkan di sini */}
      </div>
    </nav>
  );
};

export default Navbar;
// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-0 bg-brand-navy text-white">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Kiri: Copyright */}
        <p className="text-sm opacity-85">
          © {new Date().getFullYear()} M-Knows Consulting. All rights reserved.
        </p>

        {/* Kanan: Link sederhana */}
        <nav className="text-sm">
          <ul className="flex items-center gap-5">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

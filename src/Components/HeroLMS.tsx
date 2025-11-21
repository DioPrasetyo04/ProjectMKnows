import Image from "next/image";

export default function HeroLMS() {
  return (
    <section className="relative isolate">
      <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <Image
          src="/images/lms-hero.jpg"
          alt="Learning Management System"
          fill
          priority
          className="object-cover"
        />
        {/* overlay gelap */}
        <div className="absolute inset-0 bg-brand-navy/60" />

        {/* judul tengah */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center font-extrabold text-white text-4xl md:text-6xl leading-tight">
            <span className="text-brand-lime">Learning Management</span>{" "}
            <span className="text-brand-blue">System</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

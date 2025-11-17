export default function HeroBootcamp() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50">
      {/* Judul */}
      <div className="container-app pt-16 md:pt-20 text-center">
        <h1 className="tracking-tight text-6xl md:text-8xl font-extrabold">
          <span className="text-brand-lime">Bootcamp</span>{" "}
          <span className="text-brand-blue">Program</span>
        </h1>
      </div>

      {/* Paragraf: LEBIH LEBAR (bukan full) */}
      <div className="full-bleed">
        <p
          className="
            mt-8 mb-12 mx-auto w-full
            max-w-[min(92vw,1680px)]   /* ← lebar besar tapi tetap ada gutter */
            px-4 sm:px-6 lg:px-10
            text-justify text-slate-700 text-xl md:text-2xl
            leading-relaxed md:leading-loose
          "
        >
          Dengan bangga mempersembahkan bootcamp unggulan kami yang dirancang khusus
          untuk membantu mengembangkan keterampilan dan pengetahuan Anda dalam berbagai
          bidang. Bootcamp kami menawarkan pelatihan intensif bersama para mentor yang
          ahli dan berpengalaman di beragam industri, mempersiapkan Anda untuk sukses
          di dunia kerja yang kompetitif.
        </p>
      </div>

      <div className="absolute inset-x-0 -bottom-24 -z-10 h-48 bg-linear-to-t from-brand-blue/10 to-transparent" />
    </section>
  );
}

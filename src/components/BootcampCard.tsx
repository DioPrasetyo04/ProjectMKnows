import Image from "next/image";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  onDetail: () => void;
};

export default function BootcampCard({
  image,
  title,
  subtitle,
  description,
  onDetail,
}: Props) {
  return (
    <article
      className="
        card group h-full min-h-[640px] flex flex-col rounded-2xl
        transition duration-300 ease-out cursor-default
        hover:bg-linear-to-br hover:from-brand-blue/10 hover:to-brand-teal/10
        hover:ring-1 hover:ring-brand-teal/30 hover:shadow-lg
      "
    >
      {/* FRAME TANPA PADDING: gambar memenuhi kanan–kiri */}
      <div
        className="
          relative w-full h-64 sm:h-80 md:h-112
          overflow-hidden rounded-2xl bg-white border border-slate-200/70 mt-5
        "
      >
        <Image
          src={image}
          alt={subtitle || title || "Bootcamp"}
          fill
          /* Fokus ke area bawah agar teks kecil di poster terlihat */
          className="object-cover object-bottom"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={95}
        />
      </div>

      {/* KONTEN */}
      <div className="p-6 pt-5 flex flex-col gap-4 grow">
        {subtitle && (
          <h3 className="text-brand-blue font-extrabold text-2xl md:text-3xl leading-snug tracking-tight">
            {subtitle}
          </h3>
        )}

        {title && (
          <p className="text-slate-800 font-semibold text-lg md:text-xl leading-snug">
            {title}
          </p>
        )}

        <p className="text-justify text-slate-700 text-lg md:text-xl leading-relaxed">
          {description}
        </p>

        <div className="pt-2 mt-auto">
          <button onClick={onDetail} className="btn btn-primary w-full h-12 text-lg">
            Lihat Detail
          </button>
        </div>
      </div>
    </article>
  );
}

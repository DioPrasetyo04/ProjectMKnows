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
        card group h-full min-h-[640px] flex flex-col
        transition duration-300 ease-out cursor-default
        hover:bg-linear-to-br hover:from-brand-blue/10 hover:to-brand-teal/10
        hover:ring-1 hover:ring-brand-teal/30 hover:shadow-lg
      "
    >
      {/* FIXED: Container rapi, gambar tidak kepotong */}
      <div className="relative w-full aspect-[5/4] md:aspect-[11/9] lg:aspect-[10/8] overflow-hidden bg-white border-b border-slate-200/60">
        <Image
          src={image}
          alt={subtitle || title || "Bootcamp"}
          fill
          priority
          className="object-cover object-center"
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
          <button
            onClick={onDetail}
            className="btn btn-primary w-full h-12 text-lg"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </article>
  );
}

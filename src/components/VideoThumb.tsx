"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import VideoLightbox from "./VideoLightbox";

type FitMode = "ratio" | "fill" | "square";

type Props = {
  title: string;
  image: StaticImageData | string;
  className?: string;
  /** Boleh MP4 lokal (/videos/xxx.mp4) atau YouTube (https://...) */
  videoSrc?: string;
  /** ratio = 16:10, fill = isi tinggi parent, square = kotak 1:1 */
  fit?: FitMode;
};

export default function VideoThumb({
  title,
  image,
  className,
  videoSrc,
  fit = "ratio",
}: Props) {
  const [open, setOpen] = useState(false);
  const clickable = !!videoSrc;

  // Bentuk kotak / ratio / isi tinggi parent
  const containerFit =
    fit === "square"
      ? "aspect-square"
      : fit === "fill"
      ? "h-full min-h-[280px]"
      : "aspect-[16/10]";

  const handleOpen = () => {
    if (videoSrc) setOpen(true);
  };

  return (
    <>
      <div
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : -1}
        onClick={handleOpen}
        onKeyDown={(e) => clickable && (e.key === "Enter" || e.key === " ") && handleOpen()}
        className={[
          "relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg",
          containerFit,
          clickable ? "cursor-pointer" : "",
          className ?? "",
        ].join(" ")}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 40vw, 100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <h3 className="text-white text-base sm:text-lg font-semibold drop-shadow">{title}</h3>
        </div>
        {/* ikon play */}
        <div
          className="absolute left-3 top-3 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/90 grid place-items-center shadow-md"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" width="18" height="18" className="text-slate-900">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {videoSrc && (
        <VideoLightbox open={open} onClose={() => setOpen(false)} src={videoSrc} title={title} />
      )}
    </>
  );
}

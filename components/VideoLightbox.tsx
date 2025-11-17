"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
};

export default function VideoLightbox({ open, onClose, src, title }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-80 bg-black/80 grid place-items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-5xl bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <video src={src} controls autoPlay className="h-full w-full" />
        </div>
        {title && (
          <div className="p-4 text-white/90 text-sm sm:text-base">
            {title}
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 text-white px-3 py-1"
        aria-label="Close video"
      >
        ✕
      </button>
    </div>
  );
}

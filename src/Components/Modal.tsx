"use client";

import { useEffect } from "react";

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, subtitle, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-default"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-[101] w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            {subtitle && (
              <p className="text-xs font-semibold tracking-wide text-brand-blue uppercase">{subtitle}</p>
            )}
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
          >
            <IconX />
          </button>
        </div>

        {/* konten dijustify */}
        <div className="space-y-4 text-slate-700" style={{ textAlign: "justify" }}>
          {children}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button onClick={onClose} className="btn btn-ghost h-11">Tutup</button>
          <a href="https://wa.me/6281210468281" className="btn btn-primary h-11">
            Daftar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
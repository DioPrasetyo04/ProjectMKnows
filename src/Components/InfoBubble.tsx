import type { ReactNode } from "react";

type CursorStyle = "pointer" | "help" | "zoom-in" | "crosshair" | "default";
type Color = "blue" | "green" | "dark";
type Size = "md" | "lg" | "xl" | "xxl" | "xxxl";

type Props = {
  children: ReactNode;
  color?: Color;
  size?: Size;
  className?: string;
  title?: string;
  interactive?: boolean;
  cursor?: CursorStyle;
};

export default function InfoBubble({
  children,
  color = "blue",
  size = "lg",
  className,
  title,
  interactive = true,
  cursor = "pointer",
}: Props) {
  // BG color
  const bg =
    color === "green"
      ? "bg-brand-green"
      : color === "dark"
      ? "bg-slate-900"
      : "bg-brand-blue";

  // Cursor
  const cursorClass =
    cursor === "help"
      ? "cursor-help"
      : cursor === "zoom-in"
      ? "cursor-zoom-in"
      : cursor === "crosshair"
      ? "cursor-crosshair"
      : cursor === "default"
      ? "cursor-default"
      : "cursor-pointer";

  // Heading scale (kalau pakai title)
  const headingSize =
    size === "xxxl"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : size === "xxl"
      ? "text-3xl sm:text-4xl lg:text-5xl"
      : size === "xl"
      ? "text-2xl sm:text-3xl md:text-4xl"
      : size === "lg"
      ? "text-xl sm:text-2xl"
      : "text-lg sm:text-xl";

  // Body scale — dipadatkan biar “penuh”
  const bodySize =
    size === "xxxl"
      ? "text-2xl sm:text-3xl lg:text-4xl"
      : size === "xxl"
      ? "text-xl sm:text-2xl lg:text-3xl"
      : size === "xl"
      ? "text-lg sm:text-xl md:text-2xl"
      : size === "lg"
      ? "text-base sm:text-lg"
      : "text-base";

  return (
    <article
      className={[
        "group relative rounded-2xl text-white shadow-xl",
        bg,
        // padding besar agar proporsional dengan font raksasa
        "p-6 md:p-8 lg:p-10",
        // tinggi minimum yang nyaman
        "min-h-[260px] md:min-h-[300px]",
        interactive
          ? [
              cursorClass,
              "transition-all duration-200 ease-out",
              "hover:shadow-[0_18px_40px_rgba(0,0,0,.35)]",
              "focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            ].join(" ")
          : "",
        className ?? "",
      ].join(" ")}
      tabIndex={interactive ? 0 : undefined}
    >
      {/* Ring halus saat hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/55 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      />

      {title && (
        <h3 className={`mb-3 font-semibold leading-tight ${headingSize}`}>
          {title}
        </h3>
      )}

      {/* Text besar + rapat + justify biar padat memenuhi */}
      <p className={`text-justify ${bodySize} leading-snug tracking-normal`}>
        {children}
      </p>
    </article>
  );
}

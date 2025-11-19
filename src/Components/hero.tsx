import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

      {/* Konten Teks */}
      <div className="relative z-10 p-6 max-w-4xl">
        <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-2xl text-gray-200 font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;

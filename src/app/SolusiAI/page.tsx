import Image from 'next/image';
import React from 'react';

export default function SolusiAIPage() {
  const features = [
    'AI Credit Scoring',
    'AI Collection Tools',
    'AI Sales Tools',
    'AI for OmniChannel Bot',
    'Pengajuan & DColl Apps untuk Pengajuan dan Penagihan Credit',
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Gambar */}
        <div className="relative w-full h-80 md:h-[700px] rounded-lg overflow-hidden shadow-lg">
         <Image
            src="/solusi-ai/solusigambar.png" 
            alt="Solusi AI M-Knows"
            fill 
            className="object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>

        {/* Kolom Teks */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#3B8EC3] mb-6">
            Solusi AI
          </h1>
          <div className="text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Tingkatkan Bisnis anda dengan AI Solution! AI Solution merupakan alat yang penting untuk membantu bisnis meningkatkan efisiensi, produktivitas, dan pengambilan keputusan.
            </p>
            <p>
              AI Solution yang tepat juga dapat memberikan keuntungan yang signifikan bagi bisnis seperti penghematan biaya, peningkatan pendapatan, dan keunggulan kompetitif.
            </p>
            <p>
              Kami adalah tim ahli AI berpengalaman yang dapat membantu anda untuk memilih AI Solution yang tepat untuk kebutuhan bisnis anda. Kami menawarkan berbagai AI Solution seperti:
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-[#3F8642] mt-10 mb-4">
            Key Features:
          </h3>
          <ul className="space-y-3 list-disc list-inside text-gray-700 pl-2">
            {features.map((feature, index) => (
              <li key={index}>
                {feature}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}
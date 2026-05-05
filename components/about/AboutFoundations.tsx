import React from 'react';
import Image from 'next/image';

const spiceImages = [
  '/kumar-images/Aboutsec31.png',
  '/kumar-images/Aboutsec32.png',
  '/kumar-images/Aboutsec33.png',
  '/kumar-images/Aboutsec34.png',
  '/kumar-images/Aboutsec35.png'
];

const AboutFoundations = () => {
  return (
    <section className="relative py-24 bg-[#20074A] overflow-hidden">
      {/* Corner Flowers - Yellow Top */}
      <div className="absolute -top-12 -left-12 w-80 h-80 pointer-events-none z-20">
        <Image 
          src="/PNGS/flowers/yellow-top-left-coner.png" 
          alt="" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>
      <div className="absolute -top-12 -right-12 w-80 h-80 pointer-events-none z-20 scale-x-[-1]">
        <Image 
          src="/PNGS/flowers/yellow-top-left-coner.png" 
          alt="" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/kumar-images/EXPERIENC-events.png" 
          alt="Foundations Background" 
          fill 
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-[#20074A]/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-[40px] md:text-[56px] font-el-messiri text-[#FAFAFA] leading-[1.2] md:leading-[77.33px] tracking-[0.02em]">
            The Five Foundations
          </h2>
          
          <div className="flex items-center justify-center gap-4 w-full max-w-2xl mx-auto">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A539]/50 to-[#D4A539]" />
            <div className="w-3 h-3 rotate-45 bg-[#D4A539]" />
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4A539]/50 to-[#D4A539]" />
          </div>

          <p className="max-w-4xl mx-auto text-xl md:text-[32px] font-el-messiri font-semibold text-[#CF9000] leading-relaxed md:leading-[40px] tracking-[0.02em]">
            A timeless combination of five spices, the elements that give birth to flavor. A spice is not just taste. 
            It is a memory held in oil, waiting to be released by measured heat.
          </p>
        </div>

        {/* Spice Cards Grid (Images are the cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {spiceImages.slice(0, 3).map((img, idx) => (
            <div key={idx} className="relative aspect-[3/2] w-full shadow-2xl rounded-sm overflow-hidden bg-white">
               <Image
                 src={img}
                 alt={`Spice Foundation ${idx + 1}`}
                 fill
                 className="object-contain"
                 priority
               />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {spiceImages.slice(3, 5).map((img, idx) => (
            <div key={idx} className="relative aspect-[3/2] w-full shadow-2xl rounded-sm overflow-hidden bg-white">
               <Image
                 src={img}
                 alt={`Spice Foundation ${idx + 4}`}
                 fill
                 className="object-contain"
                 priority
               />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-20 text-center max-w-5xl mx-auto">
          <p className="text-xl md:text-[32px] font-el-messiri font-semibold text-[#FAFAFA] leading-relaxed md:leading-[37.33px] tracking-[0.02em]">
            Each pinch in a pan is an act of remembering a quiet conversation between a hand today and those who came before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundations;

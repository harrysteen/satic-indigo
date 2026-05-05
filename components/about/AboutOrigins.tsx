import React from 'react';
import Image from 'next/image';

const AboutOrigins = () => {
  return (
    <section className="relative py-24 bg-brand-white text-[#20074A] overflow-hidden">

      {/* Corner Decorations */}
      <div className="absolute -bottom-12 -left-12 w-80 h-80 pointer-events-none z-20">
        <Image 
          src="/PNGS/flowers/voilate-left-corner.png" 
          alt="" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>
      <div className="absolute -bottom-12 -right-12 w-80 h-80 pointer-events-none scale-x-[-1] z-20">
        <Image 
          src="/PNGS/flowers/voilate-left-corner.png" 
          alt="" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-el-messiri text-[#20074A] mb-8 text-center">
            Before Recipes Were Written
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 w-full max-w-2xl mx-auto">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A539]/50 to-[#D4A539]" />
            <div className="w-3 h-3 rotate-45 bg-[#D4A539]" />
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4A539]/50 to-[#D4A539]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-10 order-2 md:order-1">
            <p className="text-xl md:text-2xl lg:text-[28px] text-[#20074A] leading-relaxed font-sans font-medium">
              In the fertile countryside of <span className="text-[#D4A539]">Sindh</span>, the fire cackles as 
              the wood is stoked. The ritual is carefully repeated.
            </p>
            <p className="text-xl md:text-2xl lg:text-[28px] text-[#20074A] leading-relaxed font-sans font-medium">
              When the Sarson ka tel (Mustard oil) lets off a dull 
              steam, a handful of fresh spices is dotingly added to it. 
              The air is filled with an aroma that sings the notes of the 
              earth and its people.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 md:order-2 w-full">
            <div className="relative aspect-[4/3] w-full transform scale-110">
               <Image
                 src="/kumar-images/Aboutsec2.png"
                 alt="Tradition of Sindh"
                 fill
                 className="object-contain"
                 priority
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrigins;

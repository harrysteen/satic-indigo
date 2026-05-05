import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kumar-images/Aboutsec1 bg.jpg"
          alt="Indian Spices Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="flex flex-col items-center">
          <span className="text-[40px] md:text-[60px] lg:text-[96px] font-el-messiri font-normal text-[#FAFAFA] leading-[1.2] md:leading-[118px] uppercase tracking-normal">
            THE STORIES OF
          </span>
          <span className="text-[40px] md:text-[60px] lg:text-[96px] font-el-messiri font-normal text-[#D4A539] leading-tight md:leading-[96px] uppercase tracking-normal">
            SPITFIRES AND SPICES
          </span>
        </h1>
        <p className="mt-6 text-2xl lg:text-[37.33px] font-el-messiri font-semibold text-[#D4A539] leading-tight md:leading-[37.33px] tracking-normal">
          A Culinary Saga Beyond Borders
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
         <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-brand-yellow to-transparent" />
      </div>
    </section>
  );
};

export default AboutHero;

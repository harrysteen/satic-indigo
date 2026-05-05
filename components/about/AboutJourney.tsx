import React from 'react';
import Image from 'next/image';

const AboutJourney = () => {
  return (
    <section className="relative min-h-screen bg-[#20074A] overflow-hidden flex items-center py-24">
      {/* Background Map Image - Full Height */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/kumar-images/Aboutsec4.png" 
          alt="Map of Undivided India and Pakistan" 
          fill 
          className="object-cover md:object-fill opacity-100"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* White Corner Flowers - Bottom */}
      <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none z-20">
        <Image 
          src="/PNGS/flowers/left-corner-white.png" 
          alt="" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none z-20 scale-x-[-1]">
        <Image 
          src="/PNGS/flowers/left-corner-white.png" 
          alt="" 
          width={500} 
          height={500} 
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-[40px] md:text-[56px] font-el-messiri font-bold text-[#FAFAFA] leading-[1.2] md:leading-[77.33px] tracking-[0.02em] mb-2">
            When Borders Were Not Drawn
          </h2>

          {/* Decorative Divider - Decreased space */}
          <div className="flex items-center justify-center gap-4 w-full max-w-2xl mx-auto mb-10">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A539]/50 to-[#D4A539]" />
            <div className="w-3 h-3 rotate-45 bg-[#D4A539]" />
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4A539]/50 to-[#D4A539]" />
          </div>

          {/* Body Text */}
          <p className="max-w-5xl mx-auto text-xl md:text-[26.67px] font-plus-jakarta font-semibold text-[#FAFAFA] leading-relaxed md:leading-[37.33px] tracking-[0.02em]">
            Before lines divided the land, flavor moved freely. From the valleys of Kashmir to the coasts of Sindh, 
            from the dry stretches of Kathiawad to the fertile plains of Bengal ingredients, techniques, and traditions 
            flowed without restriction. Spices did not belong to regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;

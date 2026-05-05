import React from 'react';
import Image from 'next/image';

const AboutForward = () => {
  return (
    <section className="relative py-24 bg-[#20074A] overflow-hidden min-h-[600px] flex items-center">
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

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-el-messiri font-normal text-[#FAFAFA] leading-[1.2] md:leading-[77.33px] tracking-[0.02em] mb-4">
            What We Carry Forward
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 w-full max-w-xl mx-auto">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A539]/50 to-[#D4A539]" />
            <div className="w-3 h-3 rotate-45 bg-[#D4A539]" />
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4A539]/50 to-[#D4A539]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side - Legacy Matriarch */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-2 border-[#D4A539]/30 shadow-2xl">
            <Image 
              src="/kumar-images/Aboutsec7.png" 
              alt="Legacy Matriarch serving food" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Text Side */}
          <div className="space-y-10">
            <p className="text-lg md:text-[26.67px] font-plus-jakarta font-semibold text-[#FAFAFA] leading-relaxed md:leading-[37.33px] tracking-[0.02em]">
              Not everything changes. Some things are carried quietly across time — a way of cooking, a way of sharing, 
              a way of remembering. What began in open fires, traveled across regions, and evolved through generations 
              still lives in every plate, not as history or nostalgia, but as something you can taste.
            </p>
            <h3 className="text-[32px] md:text-[53.33px] font-el-messiri font-semibold text-[#D4A539] leading-tight md:leading-[66.67px]">
              A story not told, but served.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutForward;

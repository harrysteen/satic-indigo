import React from 'react';
import Image from 'next/image';

const AboutLegacy = () => {
  return (
    <section className="relative py-24 bg-brand-white text-[#20074A] overflow-hidden">
      {/* Corner Decorations - Purple Flowers Bottom */}
      <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-40 h-40 md:w-80 md:h-80 pointer-events-none z-20">
        <Image
          src="/PNGS/flowers/voilate-left-corner.png"
          alt=""
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-40 h-40 md:w-80 md:h-80 pointer-events-none z-20 scale-x-[-1]">
        <Image
          src="/PNGS/flowers/voilate-left-corner.png"
          alt=""
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl text-center">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[48px] font-el-messiri font-bold text-[#20074A] leading-tight lg:leading-[60px] tracking-[0.02em] mb-4">
          Where It Comes Together
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xl mx-auto mb-8">
          <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A539]/50 to-[#D4A539]" />
          <div className="w-3 h-3 rotate-45 bg-[#D4A539]" />
          <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4A539]/50 to-[#D4A539]" />
        </div>

        {/* Body Text - Refined for 4 clean lines */}
        <div className="max-w-6xl mx-auto mb-12 px-4">
          <p className="text-lg md:text-[22px] font-plus-jakarta font-semibold text-[#20074A] leading-relaxed md:leading-[1.4] tracking-[0.02em] mb-3 md:whitespace-nowrap">
            Today, the kitchen looks different. The tools are modern. The techniques are precise.
          </p>
          <p className="text-lg md:text-[22px] font-plus-jakarta font-semibold text-[#20074A] leading-relaxed md:leading-[1.4] tracking-[0.02em] mb-3 md:whitespace-nowrap">
            But the foundation remains fire, spice, and memory.
          </p>
          <p className="text-lg md:text-[22px] font-plus-jakarta font-semibold text-[#20074A] leading-relaxed md:leading-[1.4] tracking-[0.02em] mb-3 md:whitespace-nowrap">
            Every dish carries traces of land, movement, and time.
          </p>
          <p className="text-lg md:text-[22px] font-plus-jakarta font-semibold text-[#20074A] leading-relaxed md:leading-[1.4] tracking-[0.02em] md:whitespace-nowrap">
            What began in open fires now arrives at your table not as history, but as experience.
          </p>
        </div>

        {/* Modern Kitchen Image - Scaled Down */}
        <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-sm overflow-hidden border-2 border-[#D4A539]/30 shadow-2xl">
          <Image
            src="/kumar-images/Aboutsec6.png"
            alt="Modern Indigo Kitchen"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#20074A]/5" />
        </div>
      </div>
    </section>
  );
};

export default AboutLegacy;

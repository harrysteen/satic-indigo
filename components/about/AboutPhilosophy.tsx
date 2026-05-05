import React from 'react';
import Image from 'next/image';

const AboutPhilosophy = () => {
  return (
    <section className="relative py-24 bg-[#20074A] overflow-hidden min-h-[600px] flex items-center">
      {/* Corner Flowers - Yellow Top (Connecting from previous section transition) */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 pointer-events-none z-20">
        <Image
          src="/PNGS/flowers/yellow-top-left-coner.png"
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 pointer-events-none z-20 scale-x-[-1]">
        <Image
          src="/PNGS/flowers/yellow-top-left-coner.png"
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[48px] font-el-messiri font-normal text-[#FAFAFA] leading-tight lg:leading-[60px] tracking-[0.02em] mb-4">
            When Kitchens Began to Travel
          </h2>
          <div className="flex items-center justify-center gap-4 w-full max-w-xl mx-auto">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A539]/50 to-[#D4A539]" />
            <div className="w-3 h-3 rotate-45 bg-[#D4A539]" />
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4A539]/50 to-[#D4A539]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side - Partition Train */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-2 border-[#D4A539]/30 shadow-2xl">
            <Image
              src="/kumar-images/Aboutsec5.jpg"
              alt="Historical migration"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <p className="text-lg md:text-[22px] font-plus-jakarta font-semibold text-[#FAFAFA] leading-relaxed md:leading-[32px] tracking-[0.02em]">
              Then came movement. Homes were left behind, but flavors were not. Recipes were no longer tied to place
              they were carried in memory. A spice once grown nearby was replaced with what was available.
              A method once learned in one region was adapted in another.
            </p>
            <p className="text-lg md:text-[22px] font-plus-jakarta font-semibold text-[#FAFAFA] leading-relaxed md:leading-[32px] tracking-[0.02em]">
              What was lost in distance was rebuilt through instinct. <br />
              And slowly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;

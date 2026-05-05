import React from 'react';
import Image from 'next/image';

const AboutClosing = () => {
  return (
    <section className="relative py-24 overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Background Image - Matches reference design exactly */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/kumar-images/menu-sec-6.png" 
          alt="" 
          fill 
          className="object-cover md:object-fill"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 max-w-[1200px] text-center space-y-6">
        {/* Main Quote - Forced into 2 lines on desktop */}
        <h2 className="text-[20px] md:text-[22px] font-el-messiri font-semibold text-[#CF9000] leading-tight md:leading-[32px] tracking-normal max-w-4xl mx-auto">
          “What traveled through lands, adapted through time, and evolved across generations <br className="hidden md:block" />
          now comes together not as history, but as experience.”
        </h2>
        
        {/* Sub Quote */}
        <p className="text-[18px] md:text-[22px] font-plus-jakarta font-medium text-[#2C0074] leading-relaxed md:leading-[32px]">
          “Now, that journey continues with you in every bite, every memory, every shared table.”
        </p>
      </div>
    </section>
  );
};

export default AboutClosing;

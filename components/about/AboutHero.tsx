import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about_hero_spices.png" // I'll move the generated image here
          alt="Indian Spices"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#20074A]/60 to-[#20074A]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-brand-white mb-6 tracking-tight leading-tight">
          THE STORIES OF <br />
          <span className="text-brand-yellow">SPITFIRES AND SPICES</span>
        </h1>
        <p className="text-lg md:text-2xl text-brand-white/80 font-sans tracking-[0.2em] uppercase">
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

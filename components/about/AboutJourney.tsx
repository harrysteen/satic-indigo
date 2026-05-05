import React from 'react';
import Image from 'next/image';

const AboutJourney = () => {
  return (
    <section className="py-24 bg-[#20074A] text-brand-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">The Journey of Kitchens</h2>
          <p className="text-xl text-brand-white/70 italic font-serif">
            "We didn't just move houses; we moved our hearths."
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          {/* Historical Photo Side */}
          <div className="flex-1 relative min-h-[400px]">
            <Image
              src="/PNGS/kitchen.png"
              alt="Legacy Kitchen"
              fill
              className="object-cover grayscale brightness-75 sepia-[0.2]"
            />
            <div className="absolute inset-0 bg-brand-blue/30 mix-blend-overlay" />
            <div className="absolute bottom-8 left-8">
               <span className="px-4 py-1 bg-brand-yellow/90 text-brand-blue font-bold text-xs uppercase tracking-tighter">Est. 1940s Pattern</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 bg-white/5 backdrop-blur-md p-12 lg:p-20 flex flex-col justify-center">
            <h3 className="text-3xl font-serif mb-6 text-brand-yellow">Migration of the Flame</h3>
            <div className="space-y-6 text-lg text-brand-white/80 leading-relaxed">
              <p>
                The transition from copper vats over open wood-fire to the precision of modern kitchens 
                never changed one fundamental truth: the cook must be a storyteller. 
              </p>
              <p>
                Our journey took us through different cities, different languages, but the language 
                of spices remained constant. Every dish we serve today carries the DNA of those 
                traveling kitchens.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
               <div className="text-center">
                  <div className="text-3xl font-serif text-brand-yellow">80+</div>
                  <div className="text-xs uppercase tracking-widest text-brand-white/40">Years of Legacy</div>
               </div>
               <div className="w-[1px] h-10 bg-white/20" />
               <div className="text-center">
                  <div className="text-3xl font-serif text-brand-yellow">3</div>
                  <div className="text-xs uppercase tracking-widest text-brand-white/40">Generations</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;

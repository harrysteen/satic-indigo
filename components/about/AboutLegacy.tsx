import React from 'react';
import Image from 'next/image';

const AboutLegacy = () => {
  return (
    <section className="py-24 bg-[#20074A] text-brand-white relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 translate-x-1/2 -translate-y-1/2">
         <Image src="/PNGS/full-flower.png" alt="decor" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-12 relative w-48 h-48 rounded-full border-2 border-brand-yellow/30 p-2 overflow-hidden">
             <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" // Placeholder for matriarch
                  alt="Legacy Matriarch"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            A Story Not Told, <br />
            <span className="text-brand-yellow">But Served.</span>
          </h2>

          <p className="text-xl text-brand-white/70 leading-relaxed mb-12">
            INDIGO is more than a restaurant; it is an invitation to sit at our table, 
            to share in our history, and to become part of a story that continues 
            with every guest we welcome.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
             <a 
               href="/menu" 
               className="px-8 py-4 bg-brand-yellow text-brand-blue font-bold rounded-full hover:bg-brand-white transition-colors duration-300"
             >
               Explore the Menu
             </a>
             <a 
               href="/contact" 
               className="px-8 py-4 border border-white/20 text-brand-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
             >
               Visit Us
             </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative */}
      <div className="absolute bottom-0 left-0 w-64 h-32 opacity-20">
         <div className="w-full h-full bg-gradient-to-t from-brand-yellow/20 to-transparent blur-3xl" />
      </div>
    </section>
  );
};

export default AboutLegacy;

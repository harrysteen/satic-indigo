import React from 'react';
import Image from 'next/image';

const AboutHistory = () => {
  return (
    <section className="py-24 bg-brand-white text-brand-blue relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          {/* Map Content */}
          <div className="flex-1 relative aspect-[4/3] w-full shadow-2xl rounded-lg overflow-hidden group">
            <Image
              src="/about_historical_map.png"
              alt="Undivided India Map"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Flavor <br />
              <span className="text-brand-yellow italic">That Knows No Borders</span>
            </h2>
            
            <div className="space-y-6 text-lg text-brand-blue/80 leading-relaxed">
              <p>
                In 1947, lines were drawn on paper, but the aroma of a simmering curry could not be partitioned. 
                Our story is born from the resilience of families who carried their recipes like precious heirlooms 
                across new borders.
              </p>
              <p>
                From the clay ovens of Lahore to the vibrant streets of Delhi, the soul of our cuisine remained 
                undivided. <span className="font-semibold text-brand-blue">INDIGO</span> is a tribute to this shared legacy—a bridge of spices spanning 
                the distance between what was and what is.
              </p>
            </div>

            <div className="pt-4">
               <div className="inline-flex items-center gap-4 px-6 py-3 bg-brand-blue text-brand-white rounded-full font-sans tracking-wide text-sm uppercase">
                  <span>Preserving Heritage</span>
                  <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 -translate-x-1/2 translate-y-1/2">
         <Image src="/PNGS/MIDDLE FLOWER.png" alt="decor" fill className="object-contain" />
      </div>
    </section>
  );
};

export default AboutHistory;

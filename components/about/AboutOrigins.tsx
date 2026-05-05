import React from 'react';
import Image from 'next/image';

const AboutOrigins = () => {
  return (
    <section className="relative py-20 bg-brand-white text-brand-blue overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Before Recipes <br />
              <span className="italic">Were Written</span>
            </h2>
            <div className="w-24 h-[1px] bg-brand-yellow" />
            <p className="text-lg text-brand-blue/80 leading-relaxed max-w-xl">
              In the sundrenched plains of Sindh, flavor wasn't measured in spoons, but in seasons. 
              The kitchen was a sacred theater where every sizzle told a story of the soil. 
              It was here, in the ancestral hearths, that the foundations of what we now call 
              <span className="font-semibold text-brand-blue"> INDIGO</span> were laid.
            </p>
            <p className="text-lg text-brand-blue/80 leading-relaxed max-w-xl">
              From the bustling spice markets of Shikarpur to the serene banks of the Indus, 
              our culinary heritage is a tapestry of traditions passed down through whispers and 
              the intuitive touch of hands that knew the soul of every seed.
            </p>
          </div>

          {/* Illustration/Image */}
          <div className="flex-1 relative aspect-square w-full max-w-md">
             <div className="absolute inset-0 bg-brand-yellow/10 rounded-full scale-110 blur-3xl" />
             <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-white">
                <Image
                  src="/about_origins_sindh.png"
                  alt="Origins of Sindh"
                  fill
                  className="object-cover"
                />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#20074A]/5 -skew-x-12 translate-x-1/2" />
    </section>
  );
};

export default AboutOrigins;

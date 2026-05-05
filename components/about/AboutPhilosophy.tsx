import React from 'react';
import Image from 'next/image';

const AboutPhilosophy = () => {
  return (
    <section className="py-24 bg-brand-white text-brand-blue relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <span className="text-brand-yellow font-sans tracking-[0.3em] uppercase text-sm font-bold">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Fire, Spice, and <br /><span className="italic">Memory</span></h2>
            <p className="text-lg text-brand-blue/80 leading-relaxed">
              We believe that true Indo-Pak cuisine is an alchemy of patience and passion. 
              Our kitchen doesn't just produce food; it recreates moments. 
              The slow-roasting of spices, the rhythmic pounding of ginger, the precise 
              tempering of oil—these are our rituals of respect.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
               <div>
                  <h4 className="font-serif text-xl mb-2">Authenticity</h4>
                  <p className="text-sm text-brand-blue/60">No shortcuts. No compromises. Only the original path.</p>
               </div>
               <div>
                  <h4 className="font-serif text-xl mb-2">Soul</h4>
                  <p className="text-sm text-brand-blue/60">Every plate is served with a piece of our history.</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[500px]">
             <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/PNGS/chef.png"
                  alt="Our Chef"
                  fill
                  className="object-cover"
                />
             </div>
             <div className="grid grid-rows-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/PNGS/restaurant1.png"
                    alt="The Ambiance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-brand-blue flex items-center justify-center p-8 text-center">
                   <p className="text-brand-white font-serif text-2xl italic">"Taste is the only time machine we possess."</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;

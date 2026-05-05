import React from 'react';
import Image from 'next/image';

const spices = [
  {
    number: '01',
    name: 'CARDAMOM',
    description: 'Cardamom remembers the damp monsoons of the Western Ghats.',
    icon: '/PNGS/flowers/voilate-left-corner.png' // Using existing asset for flair
  },
  {
    number: '02',
    name: 'CUMIN',
    description: 'Cumin carries the warmth of dry Kathiawadi fields.',
    icon: '/PNGS/flowers/yellow-top-left-coner.png'
  },
  {
    number: '03',
    name: 'CLOVE',
    description: 'Clove holds the rhythm of a town waking before dawn.',
    icon: '/PNGS/flowers/voilate-top-corner.png'
  },
  {
    number: '04',
    name: 'SAFFRON',
    description: 'Saffron breathes the quiet air of Kashmiri valleys.',
    icon: '/PNGS/flowers/yellow-right-corner.png'
  },
  {
    number: '05',
    name: 'FENUGREEK',
    description: 'Fenugreek lingers with a gentle bitterness, grounding every blend.',
    icon: '/PNGS/flowers/left-corner-white.png'
  }
];

const AboutFoundations = () => {
  return (
    <section className="py-24 bg-[#20074A] text-brand-white relative overflow-hidden">
      {/* Background Watermark/Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <Image src="/PNGS/Subtract.png" alt="pattern" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">The Five Foundations</h2>
          <div className="flex justify-center mb-6">
             <div className="w-12 h-[2px] bg-brand-yellow mr-2" />
             <div className="w-4 h-4 rounded-full border border-brand-yellow rotate-45" />
             <div className="w-12 h-[2px] bg-brand-yellow ml-2" />
          </div>
          <p className="max-w-2xl mx-auto text-lg text-brand-white/70 leading-relaxed">
            A timeless combination of five spices, the elements that give birth to flavor. 
            A spice is not just an ingredient; it is a memory held in oil, waiting to be released by measured heat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {spices.map((spice, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-yellow/50 transition-all duration-500 hover:-translate-y-2 ${index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-serif text-brand-yellow/40 group-hover:text-brand-yellow transition-colors duration-500">{spice.number}</span>
                <div className="w-10 h-10 relative opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <Image src={spice.icon} alt={spice.name} fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-serif tracking-widest mb-4">{spice.name}</h3>
              <p className="text-sm text-brand-white/60 leading-relaxed">
                {spice.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <p className="italic text-brand-white/50 text-xl font-serif">
             "Each pinch in a pan is an act of remembering a quiet conversation between a hand and those who came before."
           </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundations;

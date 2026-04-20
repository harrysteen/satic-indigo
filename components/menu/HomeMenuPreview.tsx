"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SPECIALS_DATA } from "../menu/MenuData";
import MainDivider from "../decorations/MainDivider";

export default function HomeMenuPreview() {
  return (
    <section className="relative w-full py-10 md:py-16 bg-[#fafafa] flex flex-col items-center font-sans overflow-hidden">
      
      {/* Top Container (Constrained) */}
      <div className="max-w-[1400px] w-full px-4 flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8 flex flex-col items-center">
          <h2 className="text-brand-blue text-3xl md:text-5xl font-el-messiri mb-0 md:mb-1 tracking-wide">
            Most Loved, Freshly Served
          </h2>
          
          <MainDivider className="!my-3 md:!my-4" />
          
          <h3 className="text-brand-yellow font-bold text-base md:text-lg mt-0 mb-2 uppercase tracking-widest font-el-messiri">
            Khana-E-Lazeez: Most Loved by our Patrons
          </h3>
          
          <p className="text-brand-blue/70 text-sm md:text-base font-medium max-w-2xl px-4">
             Packed with titillating flavour bursts, these dishes keep everyone coming back for more.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Ribbon - NOW FULL BROWSER WIDTH */}
      <div className="w-full overflow-hidden mb-0 relative group">
        <div className="flex animate-scroll-right-to-left whitespace-nowrap py-4">
          {/* Doubling the data for a seamless loop */}
          {[...SPECIALS_DATA, ...SPECIALS_DATA].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`} 
              className="inline-flex flex-col w-[280px] md:w-[350px] mx-4 md:mx-6 group/item cursor-pointer bg-white border border-[#D4AF37] p-4 md:p-6 transition-all hover:shadow-xl"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={item.image || "/menu/default.png"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
              <h4 className="text-[#B64D3F] font-el-messiri text-lg md:text-xl text-center mb-3 uppercase tracking-widest font-semibold">
                {item.name}
              </h4>
              <p className="text-[#362A5A] text-xs md:text-sm text-center font-semibold px-2 whitespace-normal line-clamp-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-direction {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-right-to-left {
          animation: scroll-direction 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-right-to-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Bottom Container (Constrained) */}
      <div className="max-w-[1400px] w-full px-4 flex flex-col items-center relative z-10">
        {/* Footer of section */}
        <div className="flex flex-col items-center relative w-full mt-2 md:mt-4">
            <p className="text-brand-yellow font-bold text-lg md:text-xl mb-3 font-el-messiri">
                There&apos;s more to discover in every flavor we serve.
            </p>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <Link 
                    href="/menu" 
                    className="bg-brand-blue text-brand-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 hover:shadow-2xl active:scale-95 flex items-center gap-4"
                >
                    Explore Our Menu
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </Link>
                
                {/* Halal Stamp */}
                <div className="md:absolute md:left-full md:ml-16 md:-bottom-4 w-20 h-20 md:w-24 md:h-24">
                    <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

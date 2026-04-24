"use client";

import React, { useRef, useState } from "react";
import MenuOfferCard from "../menu/MenuOfferCard";
import { OFFERS_DATA } from "../menu/MenuData";

export default function EventsOffers() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      const nextSlide = Math.max(0, activeSlide - 1);
      setActiveSlide(nextSlide);
      if (carouselRef.current) {
        const scrollWidth = window.innerWidth >= 768 ? 424 : window.innerWidth * 0.85 + 16;
        carouselRef.current.scrollTo({ left: nextSlide * scrollWidth, behavior: 'smooth' });
      }
    } else {
      // Assuming 5 slides total (indices 0 to 4)
      const maxSlides = OFFERS_DATA.length > 0 ? OFFERS_DATA.length - 1 : 4;
      const nextSlide = Math.min(maxSlides, activeSlide + 1);
      setActiveSlide(nextSlide);
      if (carouselRef.current) {
        const scrollWidth = window.innerWidth >= 768 ? 424 : window.innerWidth * 0.85 + 16;
        carouselRef.current.scrollTo({ left: nextSlide * scrollWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-white flex flex-col items-center relative overflow-hidden">
      <div className="max-w-[1400px] w-full px-4 pt-20 md:pt-0 relative flex flex-col items-center z-10 text-center">
          
        {/* Halal Stamp - Right Positioned */}
        <div className="absolute right-4 md:right-10 top-0 md:-top-6 w-20 h-20 md:w-32 md:h-32 pointer-events-none">
             <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain drop-shadow-md" />
        </div>

        <h3 className="text-3xl md:text-5xl text-[#20064A] font-el-messiri tracking-[0.1em] leading-tight uppercase mb-4 text-center">
          EXCLUSIVE OFFERS
        </h3>
        
        {/* Decorative SVG Divider */}
        <div className="flex justify-center w-full max-w-[340px] md:max-w-[420px] mb-6 mt-2">
          <svg viewBox="0 0 400 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#DFAB40]">
            <polygon points="0,7.5 140,6 175,6.8 185,7.5 175,8.2 140,9" fill="currentColor" />
            <polygon points="200,0 201.5,5.5 207,7.5 201.5,9.5 200,15 198.5,9.5 193,7.5 198.5,5.5" fill="currentColor" />
            <polygon points="200,3.5 202.5,5 204,7.5 202.5,10 200,11.5 197.5,10 196,7.5 197.5,5" fill="currentColor" />
            <polygon points="400,7.5 260,6 225,6.8 215,7.5 225,8.2 260,9" fill="currentColor" />
          </svg>
        </div>

        <p className="text-[#DFAB40] font-serif text-lg md:text-[22px] font-medium leading-[1.6] text-center max-w-4xl px-4 mt-2">
          Our exclusive privileges are thoughtfully crafted,<br className="hidden md:block" />
          to make your experience even more special.
        </p>
      </div>

      <div className="w-screen relative left-1/2 -translate-x-1/2 group mt-12 md:mt-16">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory py-4 gap-4 md:gap-6 px-4 md:px-[calc((100vw-1200px)/2)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* If strictly 5 offers are needed to match the 5 dots, map an array of 5 */}
          {[0, 1, 2, 3, 4].map((idx) => {
             const offer = OFFERS_DATA[idx % OFFERS_DATA.length] || OFFERS_DATA[0];
             return (
               <div key={idx} className="w-[85vw] md:w-[400px] flex-shrink-0 snap-center">
                 <MenuOfferCard {...offer} />
               </div>
             );
          })}
        </div>
      </div>

      {/* Navigation Buttons and Dots */}
      <div className="flex gap-4 md:gap-6 mt-10 md:mt-12 mb-4 items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={() => scrollCarousel('left')}
          className="w-12 h-12 rounded-full bg-[#20064A] text-white flex items-center justify-center transition-all hover:bg-[#340b78] active:scale-95 shadow-md flex-shrink-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        
        {/* Pagination Dots */}
        <div className="flex gap-2.5 md:gap-4 items-center">
           {[0,1,2,3,4].map((idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setActiveSlide(idx);
                  if (carouselRef.current) {
                    const scrollWidth = window.innerWidth >= 768 ? 424 : window.innerWidth * 0.85 + 16;
                    carouselRef.current.scrollTo({ left: idx * scrollWidth, behavior: 'smooth' });
                  }
                }}
                className={`relative flex items-center justify-center rounded-full transition-all ${
                   activeSlide === idx ? 'w-6 h-6 border-[2px] border-[#DFAB40]' : 'w-4 h-4 bg-[#B8A6CE] hover:bg-[#20064A]'
                }`}
              >
                 {activeSlide === idx && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#DFAB40]" />
                 )}
              </button>
           ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollCarousel('right')}
          className="w-12 h-12 rounded-full bg-[#20064A] text-white flex items-center justify-center transition-all hover:bg-[#340b78] active:scale-95 shadow-md flex-shrink-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </section>
  );
}

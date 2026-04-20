"use client";

import React, { useRef } from "react";
import MenuSectionHeader from "./MenuSectionHeader";
import MenuOfferCard from "./MenuOfferCard";
import MenuCategoriesView from "./MenuCategoriesView";
import MenuSpecialCard from "./MenuSpecialCard";
import MenuSignatureCard from "./MenuSignatureCard";
import MenuCTA from "./MenuCTA";
import { OFFERS_DATA, SPECIALS_DATA, SIGNATURE_DATA } from "./MenuData";

import { FlowerDecoration } from "./MenuDecorations";
import VioletPetals from "../decorations/VioletPetals";
import MenuFlowerDecorations from "./MenuFlowerDecorations";
import MenuHeader from "./MenuHeader";
import PageHeader from "../layout/PageHeader";

export default function FeaturedMenu() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400; // scroll by roughly one card width
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="w-full bg-white flex flex-col items-center relative overflow-hidden">
      {/* 1. Page Header Section */}
      <PageHeader
        title="Our Menu"
        subtitle="From spices that carry memories of time and tradition, to dishes that turn items into stories on your plate."
      />

      {/* 2. Today's Offers Section (Carousel) */}
      <div className="w-full max-w-[1400px] px-4 mb-8 md:mb-12 relative">
        <div className="flex flex-col items-center mb-10 md:mb-14 px-4">
          <h3 className="text-[#2C0074] font-el-messiri text-4xl md:text-[56px] font-normal leading-tight md:leading-[77.33px] tracking-[0.02em] uppercase mb-4 text-center">
            TODAY&apos;S OFFER
          </h3>
          <p className="text-[#2C0074]/80 font-sans text-lg md:text-[24px] font-medium leading-snug md:leading-[32px] tracking-[0.02em] text-center max-w-4xl">
            Thoughtfully crafted for today&apos;s experience, where every bite carries a hint of indulgence.
          </p>
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2 group mt-4">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory py-4 gap-4 md:gap-6 px-4 md:px-[calc((100vw-1200px)/2)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Cards that bleed off the edge but are manually scrollable */}
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div key={idx} className="w-[85vw] md:w-[400px] flex-shrink-0 snap-center">
                <MenuOfferCard
                  tag="Chef's Special"
                  title="ROYAL DINNER COMBO"
                  description="Enjoy Butter Chicken, Garlic Naan (2), and Jeera Rice at a special price."
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8 mb-4 justify-center">
          <button
            onClick={() => scrollCarousel('left')}
            className="w-10 h-10 rounded-full bg-[#20064A] text-white flex items-center justify-center transition-all hover:bg-[#340b78] active:scale-95 shadow-md"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => scrollCarousel('right')}
            className="w-10 h-10 rounded-full bg-[#20064A] text-white flex items-center justify-center transition-all hover:bg-[#340b78] active:scale-95 shadow-md"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      {/* 3. The Interactive Menu Tab Section */}
      <div className="w-full bg-white relative pb-6 md:pb-10 overflow-hidden">
        {/* Side Decorations */}
        <MenuFlowerDecorations />

        <div className="w-full max-w-[1400px] mx-auto pt-4 md:pt-8 flex flex-col items-center">
          <MenuHeader />
          <MenuCategoriesView />
        </div>
      </div>

      {/* 4. Our Specials - Infinite Scroll (Same as Homepage) */}
      <div className="w-full pt-10 md:pt-16 pb-10 md:pb-16 flex flex-col items-center bg-[#fafafa] overflow-hidden">
        <div className="w-full max-w-[1400px] px-4 flex flex-col items-center relative z-10">
          <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
            <h3 className="text-[#20064A] font-brolimo text-2xl md:text-4xl uppercase mb-5 tracking-wide">
              OUR SPECIALS
            </h3>
            {/* Decorative SVG Divider */}
            <div className="flex justify-center w-full max-w-[340px] md:max-w-[420px] mb-8 md:mb-10">
              <svg
                viewBox="0 0 400 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto text-[#DFAB40]"
              >
                {/* Left Tapered Line */}
                <polygon points="0,7.5 140,6 175,6.8 185,7.5 175,8.2 140,9" fill="currentColor" />
                {/* Center 8-pointed Star */}
                <polygon points="200,0 201.5,5.5 207,7.5 201.5,9.5 200,15 198.5,9.5 193,7.5 198.5,5.5" fill="currentColor" />
                <polygon points="200,3.5 202.5,5 204,7.5 202.5,10 200,11.5 197.5,10 196,7.5 197.5,5" fill="currentColor" />
                {/* Right Tapered Line */}
                <polygon points="400,7.5 260,6 225,6.8 215,7.5 225,8.2 260,9" fill="currentColor" />
              </svg>
            </div>
            <p className="text-[#2C0074BA] text-[24px] font-normal leading-[40px] tracking-[0.02em] font-sans max-w-4xl text-center px-4">
              Packed with titillating flavour bursts, these dishes keep everyone coming back for more.
            </p>
          </div>

          {/* Infinite Scrolling Ribbon */}
          <div className="w-full overflow-hidden mb-10 relative group">
            <div className="flex animate-scroll-right-to-left whitespace-nowrap py-10">
              {[...SPECIALS_DATA, ...SPECIALS_DATA].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="inline-flex flex-col w-[280px] md:w-[320px] mx-4 md:mx-6 group/item cursor-pointer bg-white border-2 border-[#DFAB40] transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={item.image || "/menu/default.png"}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                    />
                  </div>
                  <div className="px-4 pb-6 flex flex-col items-center">
                    <h4 className="text-[#B64D3F] font-el-messiri text-lg md:text-xl text-center mb-2 uppercase tracking-widest font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-[#362A5A] text-xs md:text-sm text-center font-medium px-2 whitespace-normal line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx global>{`
            @keyframes scroll-left-to-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-scroll-right-to-left {
              animation: scroll-left-to-right 40s linear infinite;
              width: max-content;
            }
            .animate-scroll-right-to-left:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>

      {/* 5. Signature Dining Section (The Dark Themed events) */}
      <div
        id="events"
        className="w-full pt-10 md:pt-16 pb-20 md:pb-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/kumar-images/signatur-dining.png')" }}
      >


        <div className="w-full max-w-[1800px] mx-auto px-4 flex flex-col items-center relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-white text-2xl md:text-5xl font-serif mb-4 tracking-wide">Signature Dining Experiences</h2>

            {/* Decorative SVG Divider */}
            <div className="flex justify-center w-full max-w-[340px] md:max-w-[420px] mb-8 md:mb-10">
              <svg
                viewBox="0 0 400 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto text-[#DFAB40]"
              >
                {/* Left Tapered Line */}
                <polygon points="0,7.5 140,6 175,6.8 185,7.5 175,8.2 140,9" fill="currentColor" />
                {/* Center 8-pointed Star */}
                <polygon points="200,0 201.5,5.5 207,7.5 201.5,9.5 200,15 198.5,9.5 193,7.5 198.5,5.5" fill="currentColor" />
                <polygon points="200,3.5 202.5,5 204,7.5 202.5,10 200,11.5 197.5,10 196,7.5 197.5,5" fill="currentColor" />
                {/* Right Tapered Line */}
                <polygon points="400,7.5 260,6 225,6.8 215,7.5 225,8.2 260,9" fill="currentColor" />
              </svg>
            </div>

            <p className="text-[#FAFAFA] text-[24px] font-bold leading-[40px] tracking-[0.02em] font-sans text-center max-w-4xl px-4">
              Crafted with intention, each evening offers a distinct blend of taste, atmosphere, and storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-10 justify-items-center">
            {SIGNATURE_DATA.map((item) => (
              <MenuSignatureCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* 6. Ready To Dine CTA */}
      <div id="contact" className="w-full">
        <MenuCTA />
      </div>
    </section>
  );
}

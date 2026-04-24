import React from "react";

export default function EventsCurated() {
  return (
    <section 
      className="w-full py-24 md:py-40 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/kumar-images/Curated-events.png')" }}
    >
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-white text-3xl md:text-5xl font-el-messiri mb-4 tracking-wide">
            Curated Dining Experiences
        </h2>
        
        {/* Decorative SVG Divider */}
        <div className="flex justify-center w-full max-w-[340px] md:max-w-[420px] mb-6">
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

        <p className="text-[#DFAB40] font-el-messiri text-lg md:text-[22px] mb-12 max-w-2xl leading-[1.6] opacity-100 font-medium">
          Every evening takes on a new form, where taste, mood, and moments create something special.
        </p>

        <p className="text-white/90 font-sans text-sm md:text-lg max-w-4xl leading-relaxed font-medium">
          Explore a calendar of thoughtfully curated events at Indigo, where each evening is built around a unique theme. Enjoy specially crafted menus, live cooking experiences, and exclusive dining offers designed to elevate your visit beyond the ordinary.
        </p>
      </div>
    </section>
  );
}

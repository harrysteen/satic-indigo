import React from "react";

export default function Hero2Header() {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-10 px-4 w-full text-center">
      <h2 className="text-white text-3xl md:text-5xl font-el-messiri tracking-[0.03em] mb-6">
        The Essence of Indigo
      </h2>
      
      {/* Decorative Gold Divider (matching the requested design pattern) */}
      <div className="flex items-center justify-center w-full max-w-2xl">
        {/* Left Tapered Line */}
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px] md:h-[2px]"></div>
        
        {/* Diamond Centerpiece */}
        <div className="mx-6 transform rotate-45 w-3 h-3 bg-[#DFAB40] shadow-[0_0_8px_rgba(223,171,64,0.3)]"></div>
        
        {/* Right Tapered Line */}
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px] md:h-[2px]"></div>
      </div>
    </div>
  );
}

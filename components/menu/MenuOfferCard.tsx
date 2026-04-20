import React from "react";

interface MenuOfferCardProps {
  tag: string;
  title: string;
  description: string;
}

export default function MenuOfferCard({ tag, title, description }: MenuOfferCardProps) {
  return (
    <div className="relative group overflow-hidden text-white p-6 md:p-8 flex flex-col h-full min-h-[250px]">
      {/* Background Image with Hover Scale */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('/kumar-images/todayoffer.png')` }}
      />

      <div className="relative z-10 flex flex-col items-start h-full justify-center">
        <span className="text-white/90 text-sm md:text-base font-sans font-medium mb-3">
          {tag}
        </span>
        
        {/* Short Gold Divider */}
        <div className="w-[100px] h-[1.5px] bg-[#DFAB40] mb-5" />
        
        <h3 className="text-[20px] md:text-[24px] text-[#DFAB40] font-serif tracking-wider uppercase mb-5">
          {title}
        </h3>
        
        <p className="text-sm text-white/80 font-sans leading-relaxed tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
}

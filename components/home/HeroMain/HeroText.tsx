import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainDivider from "../../decorations/MainDivider"; 

const BigLogo = () => (
  <div className="flex flex-col items-center mb-0 pt-2 md:pt-4 lg:pt-6">
    <div className="relative w-[240px] h-[80px] sm:w-[300px] sm:h-[100px] md:w-[380px] md:h-[130px] lg:w-[420px] lg:h-[140px]">
      <Image
        src="/PNGS/LOGO.png"
        alt="INDIGO"
        fill
        className="object-contain brightness-0 invert md:filter-none"
        priority
      />
    </div>
  </div>
);

export default function HeroText() {
  return (
    <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl mt-16 md:mt-12 lg:mt-16 font-sans">
      <BigLogo />

      <h1 className="text-brand-white md:text-brand-blue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-el-messiri mt-0 tracking-wide leading-tight uppercase">
        INDO PAK RESTAURANT
      </h1>

      <MainDivider />

      <h3 className="text-brand-white md:text-brand-blue text-lg sm:text-xl md:text-2xl font-el-messiri font-medium mb-3">
        Namaste. Khushamdeed.
      </h3>

      <p className="text-white md:text-brand-maroon text-sm sm:text-base md:text-lg max-w-2xl font-medium mb-6 leading-relaxed px-4 opacity-100 md:opacity-90">
        We welcome you to experience the tantalising flavours and warm
        hospitality from the spice lands to the east.
      </p>

      <Link
        href="/about"
        className="bg-brand-blue text-brand-white px-8 py-3.5 rounded-lg md:rounded-xl font-medium text-[14px] md:text-[15px] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_24px_0_rgba(44,0,116,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
      >
        Let the story unfold
      </Link>
    </div>
  );
}

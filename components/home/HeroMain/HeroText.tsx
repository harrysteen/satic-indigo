import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainDivider from "../../decorations/MainDivider";

const BigLogo = () => (
  <div className="flex flex-col items-center mb-0 md:mb-2 lg:mb-4 pt-2 md:pt-4 lg:pt-6">
    <div className="relative w-[280px] h-[100px] sm:w-[360px] sm:h-[120px] md:w-[460px] md:h-[160px] lg:w-[500px] lg:h-[170px]">
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

interface HeroTextProps {
  onPlayClick?: (e: React.MouseEvent) => void;
}

export default function HeroText({ onPlayClick }: HeroTextProps) {
  return (
    <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl mt-16 md:mt-12 lg:mt-16 font-sans">
      <BigLogo />

      <h1 className="text-brand-white md:text-brand-blue text-3xl md:text-5xl font-el-messiri mt-4 md:mt-8 mb-4 sm:mb-6 md:mb-8 tracking-[0.1em] leading-tight uppercase relative z-10">
        INDO PAK RESTAURANT
      </h1>

      <MainDivider className="!my-0 mb-3 sm:mb-4 md:mb-5 z-10 opacity-100" />

      <h3 className="text-brand-white md:text-brand-blue text-[18px] font-el-messiri font-medium mb-4 md:mb-5 tracking-[0.02em] leading-relaxed relative z-10">
        Namaste. Khushamdeed.
      </h3>

      <p className="text-white md:text-brand-maroon text-[14px] md:text-[16px] max-w-2xl font-medium mb-8 leading-relaxed px-4 opacity-100 md:opacity-90">
        We welcome you to experience the tantalising flavours and warm
        hospitality from the spice lands to the east.
      </p>

      {onPlayClick ? (
        <button
          onClick={onPlayClick}
          className="bg-brand-blue text-brand-white px-8 py-3.5 rounded-lg md:rounded-xl font-medium text-[14px] md:text-[15px] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_24px_0_rgba(44,0,116,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 cursor-pointer"
        >
          Let the story unfold
        </button>
      ) : (
        <Link
          href="/about"
          className="bg-brand-blue text-brand-white px-8 py-3.5 rounded-lg md:rounded-xl font-medium text-[14px] md:text-[15px] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_24px_0_rgba(44,0,116,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
        >
          Let the story unfold
        </Link>
      )}
    </div>
  );
}

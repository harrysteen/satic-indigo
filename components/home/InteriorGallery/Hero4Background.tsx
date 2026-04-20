import React from "react";
import Image from "next/image";
import YellowPetals from "../../decorations/YellowPetals";

export default function InteriorGalleryBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative w-full bg-background py-10 md:py-16 flex flex-col items-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/kumar-images/insideindego-bg.png" 
          alt="Inside Indigo Background" 
          fill 
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Corner Decorations */}
      <YellowPetals position="top-left" className="top-[-4px] left-[-4px] z-10" />
      <YellowPetals position="bottom-right" className="bottom-[-4px] right-[-4px] z-10" />

      {/* Main Content constraints */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}

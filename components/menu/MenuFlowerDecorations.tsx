import React from "react";

export default function MenuFlowerDecorations() {
  return (
    <>
      {/* Left Flower */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-36 md:w-56 h-auto opacity-90 pointer-events-none select-none -translate-x-[5%]">
        <img src="/PNGS/MIDDLE FLOWER 2.png" alt="" className="w-full h-auto object-contain" />
      </div>

      {/* Right Flower */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-36 md:w-56 h-auto opacity-90 pointer-events-none select-none translate-x-[5%]">
        <img src="/PNGS/MIDDLE FLOWER.png" alt="" className="w-full h-auto object-contain" />
      </div>
    </>
  );
}

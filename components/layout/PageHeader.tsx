import React from "react";

interface PageHeaderProps {
  topTitle?: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ topTitle, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative w-full pt-32 pb-20 bg-white flex flex-col items-center overflow-hidden">
      {/* Side Decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] md:w-[250px] lg:w-[320px] h-auto opacity-100 pointer-events-none select-none">
          <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] md:w-[250px] lg:w-[320px] h-auto opacity-100 pointer-events-none select-none">
          <img src="/PNGS/half-flower.png" alt="" className="w-full h-auto object-contain scale-x-[-1]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {topTitle && (
          <h2 className="text-[#20064A] text-xl md:text-2xl font-bold tracking-widest uppercase mb-4 font-el-messiri">
            {topTitle}
          </h2>
        )}
        
        <h1 className={`${topTitle ? 'text-5xl md:text-8xl' : 'text-4xl md:text-6xl'} text-[#20064A] font-el-messiri tracking-[0.2em] uppercase mb-2 md:mb-3 leading-tight`}>
          {title}
        </h1>
        
        {/* Custom Gold Divider */}
        <div className="flex items-center w-full max-w-[300px] mb-3 md:mb-4">
          <div className="flex-1 h-[1.5px] bg-[#DFAB40]/60" />
          <div className="mx-3 text-[#DFAB40]">✦</div>
          <div className="flex-1 h-[1.5px] bg-[#DFAB40]/60" />
        </div>

        <p className="text-[#2C0074] text-[18px] md:text-[26.67px] font-semibold leading-normal md:leading-[37.33px] tracking-[0.02em] font-sans max-w-3xl px-4">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

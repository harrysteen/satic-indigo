"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground({
  children,
  isPlaying = false,
  onClose
}: Readonly<{ children: React.ReactNode, isPlaying?: boolean, onClose?: () => void }>) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`relative w-full bg-[#20074A] ${isMobile ? "h-[100svh]" : "h-screen"}`}>
      <div className="w-full h-full overflow-hidden flex flex-col items-center relative">

        {/* Close Button when playing */}
        {isPlaying && onClose && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-50 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Close video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}

        {/* Main Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/kumar-images/homeherobg.png"
            alt="Background"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
        </div>

        {/* Main Animated Shape Container */}
        <div className="relative w-full flex-grow flex flex-col justify-center items-center pointer-events-none">
          <motion.div
            initial={false}
            animate={{ scale: isMobile ? 1 : (isPlaying ? 2.5 : 1) }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full h-[100svh] md:w-full md:h-screen flex items-center justify-center transition-shadow duration-500"
          >
            {/* Unified Shape & Content Container */}
            <div className="relative w-full h-full max-w-[1900px] mx-auto scale-100 sm:scale-[1.05] md:scale-[1.05] origin-bottom">

              {/* 1. Background Visual Frame */}
              <motion.div
                initial={false}
                animate={{ opacity: isMobile ? 1 : (isPlaying ? 0 : 1) }}
                transition={{ duration: 0.8 }}
                className="hidden md:block absolute inset-0 z-0"
              >
                <Image
                  src="/PNGS/Subtractshape.webp"
                  alt="Hero Background Shape"
                  fill
                  className="object-contain object-bottom"
                  style={{
                    filter: 'drop-shadow(0 -2px 0 #DFAB40) drop-shadow(2px 0 0 #DFAB40) drop-shadow(-2px 0 0 #DFAB40)'
                  }}
                  priority
                />
              </motion.div>

              {/* 2. Masked Video - Immediately visible inside the arch when playing (DISABLED FOR NOW) */}
              {/*
              <motion.div
                initial={false}
                animate={{ opacity: isPlaying ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  maskImage: 'url("/PNGS/Subtractshape.webp")',
                  WebkitMaskImage: 'url("/PNGS/Subtractshape.webp")',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'bottom center',
                  WebkitMaskPosition: 'bottom center',
                }}
                className="hidden sm:block absolute inset-0 z-10 w-full h-full pointer-events-none"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/introvidoe.MP4" type="video/mp4" />
                </video>
              </motion.div>
              */}

              {/* 2.5 Fullscreen Unmasked Video (Desktop Only) to fill screen flawlessly once scale reaches 2.5 (DISABLED FOR NOW) */}
              {/*
              <motion.div
                initial={false}
                animate={{ opacity: (isMobile || !isPlaying) ? 0 : 1 }}
                transition={{ duration: 1, delay: 0.8 }} // Delay allows the scale to happen first using the masked version
                className="hidden sm:block absolute inset-0 z-15 w-full h-[100vh] fixed top-0 left-0 pointer-events-none"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/introvidoe.MP4" type="video/mp4" />
                </video>
              </motion.div>
              */}

              {/* 3. Text Overlay - Inside the scaled shape container */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none pt-12 md:pt-20">
                <motion.div
                  initial={false}
                  animate={{ opacity: isPlaying ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full flex flex-col items-center pointer-events-auto"
                >
                  {children}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

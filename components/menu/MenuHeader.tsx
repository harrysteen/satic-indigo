"use client";

import React from "react";
import { motion } from "framer-motion";
import MenuLegend from "./MenuLegend";

const MenuHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6 relative w-full px-4">
      {/* Halal Stamp - Absolute Positioned */}
      <div className="absolute right-4 md:right-10 top-0 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full relative group cursor-pointer"
        >
          <img src="/logo/halal.png" alt="Halal Certified" className="w-full h-full object-contain" />
          <svg className="absolute inset-0 w-full h-full text-[#00A651]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="301.59" strokeDashoffset="301.59" />
            <motion.circle
              cx="50" cy="50" r="48" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeDasharray="301.59"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-[#20064A] font-el-messiri text-3xl md:text-5xl text-center mb-2 tracking-[0.1em] uppercase"
      >
        INDIGO&apos;S MENU
      </motion.h3>

      {/* Decorative SVG Divider matching the design */}
      <motion.div
        initial={{ opacity: 0, width: "30%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center w-full max-w-[340px] md:max-w-[420px] mb-8 md:mb-10"
      >
        <svg
          viewBox="0 0 400 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-[#DFAB40]"
        >
          {/* Left Tapered Line */}
          <polygon points="0,7.5 140,6 175,6.8 185,7.5 175,8.2 140,9" fill="currentColor" />

          {/* Center 8-pointed Star */}
          {/* Main vertical/horizontal points */}
          <polygon points="200,0 201.5,5.5 207,7.5 201.5,9.5 200,15 198.5,9.5 193,7.5 198.5,5.5" fill="currentColor" />
          {/* Diagonal minor points */}
          <polygon points="200,3.5 202.5,5 204,7.5 202.5,10 200,11.5 197.5,10 196,7.5 197.5,5" fill="currentColor" />

          {/* Right Tapered Line */}
          <polygon points="400,7.5 260,6 225,6.8 215,7.5 225,8.2 260,9" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#2C0074DB] text-[18px] font-normal text-center max-w-4xl mb-6 leading-relaxed tracking-[0.02em] font-sans"
      >
        Each experience is crafted with care, bringing together taste, mood, and memorable moments.
      </motion.p>

      {/* The Legend component we created earlier */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full flex justify-center"
      >
        <MenuLegend />
      </motion.div>
    </div>
  );
};

export default MenuHeader;

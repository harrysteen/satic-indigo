"use client";

import React, { useState } from "react";
import { EVENTS_DATA, EVENT_CATEGORIES } from "./EventsData";
import MenuSignatureCard from "../menu/MenuSignatureCard";

export default function EventsGallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredEvents = activeCategory === "ALL"
    ? EVENTS_DATA
    : EVENTS_DATA.filter(e => e.category === activeCategory);

  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden bg-[#20064A] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/kumar-images/signatur-dining.png')" }}
    >

      <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12 px-4">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-el-messiri tracking-wide mb-4 uppercase">EXPERIENCES, CURATED FOR YOU</h2>

          {/* Decorative SVG Divider */}
          <div className="flex justify-center w-full max-w-[340px] md:max-w-[420px] mb-6 md:mb-8">
            <svg
              viewBox="0 0 400 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-[#DFAB40]"
            >
              <polygon points="0,7.5 140,6 175,6.8 185,7.5 175,8.2 140,9" fill="currentColor" />
              <polygon points="200,0 201.5,5.5 207,7.5 201.5,9.5 200,15 198.5,9.5 193,7.5 198.5,5.5" fill="currentColor" />
              <polygon points="200,3.5 202.5,5 204,7.5 202.5,10 200,11.5 197.5,10 196,7.5 197.5,5" fill="currentColor" />
              <polygon points="400,7.5 260,6 225,6.8 215,7.5 225,8.2 260,9" fill="currentColor" />
            </svg>
          </div>

          <p className="text-[#DFAB40] font-medium text-[16px] md:text-[18px] max-w-3xl leading-relaxed">
            Crafted with intention, each evening offers a distinct blend of taste, atmosphere, and storytelling.
          </p>
        </div>

        {/* Filter Tabs - Full width white bar */}
        <div className="w-full border-y border-[#DFAB40]/50 mb-12 md:mb-16">
          <div className="w-full bg-white overflow-x-auto no-scrollbar">
            <div className="flex max-w-[1200px] mx-auto min-w-max justify-center">
              {EVENT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 md:px-12 py-4 transition-all duration-300 text-[11px] md:text-sm font-bold tracking-[0.1em] uppercase whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#DFAB40] text-white"
                      : "text-[#20064A] hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-[1300px] mx-auto px-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <MenuSignatureCard
                key={event.id}
                date={`${event.date} ${event.month}`}
                event={event.title}
                time={event.time}
                description={event.description}
                buttonText="Reserve Now"
                image={event.image}
                highlights={event.highlights}
              />
            ))
          ) : (
            <div className="col-span-full py-24 text-center text-white/30 italic font-medium tracking-widest uppercase">
              More curated experiences coming soon...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

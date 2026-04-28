"use client";

import React, { useState } from "react";
import Hero6TestimonialCard from "./Hero6TestimonialCard";

const testimonials = [
  {
    name: "Huda Qadeer",
    quote: "“This place is modern, well lit, and pleasantly maintained. We were super impressed with the quality of food and service. Although all tables were packed, the service was top notch!”",
  },
  {
    name: "Billy Hinners",
    quote: "“I’ve eaten Indian food in some of the biggest cities in the US and my food at Indigo was comparable to the best of them.”",
  },
  {
    name: "Bridget Mitchell",
    quote: "“My husband and I found this gem for our Sunday lunch, and we were NOT disappointed! The ambience, food, and service were a solid 10/10. We had the Chicken 65, the goat biriyani, and garlic naan.”",
  },
  {
    name: "Mark Mitchell",
    quote: "“I absolutely loved my stop in Indigo. Muhammad was a great server and dealt with my wife and I with care and patience in a swift manner. The food was delicious as well! We got Chicken 65, garlic naan, and goat biryani!”",
  },
  {
    name: "Erica Giove",
    quote: "“Wow! This was an unexpected score! Muhammad was our server... AMAZING! Super attentive, knowledgeable of all the dishes, and kind.”",
  },
  {
    name: "CY Watkins",
    quote: "“Decided to give this place a try, and it didn't disappoint! The service was friendly and efficient. We absolutely loved the butter chicken, naan, and samosas – all really delicious.”",
  }
];

export default function Hero6Carousel() {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonials = () => {
    setStartIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonials = () => {
    setStartIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  // Get current 2 testimonials
  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length]
  ];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full mb-12 min-h-[220px]">
        {visibleTestimonials.map((test, idx) => (
          <div key={`${startIndex}-${idx}`} className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full">
            <Hero6TestimonialCard name={test.name} quote={test.quote} />
          </div>
        ))}
      </div>
      
      {/* Carousel Navigation Buttons */}
      <div className="flex items-center gap-6">
        {/* Left Arrow */}
        <button 
          onClick={prevTestimonials}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DFAB40]"
          aria-label="Previous reviews"
        >
          <svg className="w-5 h-5 text-[#20064A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button 
          onClick={nextTestimonials}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DFAB40]"
          aria-label="Next reviews"
        >
          <svg className="w-5 h-5 text-[#20064A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
    </div>
  );
}

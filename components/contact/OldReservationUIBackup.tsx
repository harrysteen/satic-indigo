"use client";

import React, { useState } from "react";

export default function OldReservationUIBackup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    guests: "2 People",
    date: "2026-03-29",
    time: "12:30 PM",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    occasion: "None",
    preferences: "None",
    requests: ""
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const steps = [
    { num: 1, label: "Availability" },
    { num: 2, label: "Details" },
    { num: 3, label: "Confirmation" }
  ];

  return (
    <div className="w-full bg-[#20064A] flex flex-col items-center">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-12 md:gap-32 mb-16 relative w-full max-w-[800px]">
             {/* Background Progress Line */}
             <div className="absolute top-4 left-0 right-0 h-[2px] bg-white/10 hidden md:block" />
             {/* Active Progress Line */}
             <div 
                className="absolute top-4 left-0 h-[2.5px] bg-gradient-to-r from-[#DFAB40] to-[#DFAB40]/20 transition-all duration-700 hidden md:block" 
                style={{ width: `${(currentStep - 1) * 50}%` }}
             />
             
             {steps.map((step, i) => (
               <div key={i} className="flex flex-col items-center gap-4 relative z-10 group transition-all duration-500">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 shadow-lg ${i + 1 <= currentStep ? 'bg-[#DFAB40] text-[#20064A] scale-110 shadow-[#DFAB40]/20' : 'border-[1.5px] border-white/40 text-white/40 bg-[#20064A]'}`}>
                    {step.num}
                  </div>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${i + 1 <= currentStep ? 'text-[#DFAB40]' : 'text-white/30'}`}>
                    {step.label}
                  </span>
               </div>
             ))}
          </div>

          {/* Form Container */}
          <div className="w-full max-w-[900px] bg-[#20064A] border-[1.5px] border-[#DFAB40]/60 rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
             {/* Repeating Logo Pattern Watermark */}
             <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-x-8 gap-y-10 p-10 h-full">
                   {Array.from({ length: 96 }).map((_, i) => (
                      <div key={i} className="flex items-center justify-center">
                         <img src="/logo/logoiconwhite.png" alt="" className="w-5 h-5" />
                      </div>
                   ))}
                </div>
             </div>

             <div className="relative z-10 p-8 md:p-14">
                {currentStep === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                       <div className="flex flex-col gap-3 text-left">
                          <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-80">Guests</label>
                          <div className="relative group">
                            <select 
                               className="w-full bg-white text-[#20064A] p-4 rounded-lg text-sm font-bold outline-none appearance-none cursor-pointer"
                               value={formData.guests}
                               onChange={(e) => setFormData({...formData, guests: e.target.value})}
                            >
                               <option>1 Person</option>
                               <option>2 People</option>
                               <option>4 People</option>
                               <option>6 People</option>
                               <option>8+ People</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#20064A]">
                               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                            </div>
                          </div>
                       </div>
                       <div className="flex flex-col gap-3 text-left">
                          <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-80">Select Date</label>
                          <input 
                             type="date" 
                             className="w-full bg-white text-[#20064A] p-4 rounded-lg text-sm font-bold outline-none cursor-pointer"
                             value={formData.date}
                             onChange={(e) => setFormData({...formData, date: e.target.value})}
                          />
                       </div>
                       <div className="flex flex-col gap-3 text-left">
                          <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-80">Select Time</label>
                          <div className="relative group">
                            <select 
                               className="w-full bg-white text-[#20064A] p-4 rounded-lg text-sm font-bold outline-none appearance-none cursor-pointer"
                               value={formData.time}
                               onChange={(e) => setFormData({...formData, time: e.target.value})}
                            >
                               <option>12:00 PM</option>
                               <option>12:30 PM</option>
                               <option>01:00 PM</option>
                               <option>07:00 PM</option>
                               <option>07:30 PM</option>
                               <option>08:00 PM</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#20064A]">
                               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                            </div>
                          </div>
                       </div>
                    </div>
                    
                    <button 
                       onClick={nextStep}
                       className="group w-full bg-[#DFAB40] text-[#20064A] py-5 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#efbb40] transition-all shadow-[0_10px_30px_rgba(223,171,64,0.3)] active:scale-95"
                    >
                       Check Availability
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                    </button>
                    
                    <p className="mt-8 text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                       <span className="w-8 h-px bg-white/20" />
                       Quick booking • instant confirmation
                       <span className="w-8 h-px bg-white/20" />
                    </p>
                  </div>
                )}

                {currentStep === 2 && (
                   <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                      <div className="flex items-center justify-center gap-4 mb-10 text-white/90">
                         <h3 className="text-xl md:text-2xl font-serif">Table for {formData.guests.slice(0, 1)}</h3>
                         <div className="text-[#DFAB40]">✦</div>
                         <h3 className="text-xl md:text-2xl font-serif">{formData.date}</h3>
                         <div className="text-[#DFAB40]">✦</div>
                         <h3 className="text-xl md:text-2xl font-serif">{formData.time}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">First Name</label>
                           <input type="text" placeholder="John" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Last Name</label>
                           <input type="text" placeholder="Doe" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Phone Number</label>
                           <input type="text" placeholder="+1 (000) 000-0000" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Email Address</label>
                           <input type="email" placeholder="you@example.com" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none focus:border-[#DFAB40] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Occasion (optional)</label>
                           <select className="w-full border-b border-white/20 bg-transparent py-3 text-white/60 outline-none appearance-none">
                              <option className="bg-[#20064A]">None</option>
                              <option className="bg-[#20064A]">Birthday</option>
                              <option className="bg-[#20064A]">Anniversary</option>
                              <option className="bg-[#20064A]">Date Night</option>
                           </select>
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Preferences</label>
                           <select className="w-full border-b border-white/20 bg-transparent py-3 text-white/60 outline-none appearance-none">
                              <option className="bg-[#20064A]">None</option>
                              <option className="bg-[#20064A]">Vegetarian</option>
                              <option className="bg-[#20064A]">Vegan</option>
                              <option className="bg-[#20064A]">Gluten Free</option>
                           </select>
                        </div>
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-2 text-left">
                           <label className="text-white text-[10px] font-bold uppercase tracking-widest pl-1 opacity-70">Special Requests</label>
                           <textarea rows={3} placeholder="Any preferences or notes..." className="w-full border border-white/10 bg-white/5 p-4 rounded-lg text-white outline-none focus:border-[#DFAB40] transition-all resize-none" />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <button 
                           onClick={prevStep}
                           className="flex-1 border-[1.5px] border-[#DFAB40]/40 text-[#DFAB40] py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#DFAB40]/10 transition-all"
                        >
                           Back
                        </button>
                        <button 
                           onClick={nextStep}
                           className="flex-[2] bg-[#DFAB40] text-[#20064A] py-5 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-[#efbb40] transition-all shadow-[0_10px_30px_rgba(223,171,64,0.3)]"
                        >
                           Confirm Reservation
                           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                        </button>
                      </div>
                      
                      <p className="mt-10 text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]">We'll confirm your booking shortly</p>
                   </div>
                )}

                {currentStep === 3 && (
                   <div className="animate-in fade-in zoom-in duration-1000 flex flex-col items-center">
                      <div className="w-20 h-20 bg-[#DFAB40] rounded-full flex items-center justify-center text-[#20064A] mb-8 shadow-[0_0_50px_rgba(223,171,64,0.3)]">
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      
                      <h3 className="text-[#DFAB40] text-3xl md:text-5xl font-serif mb-6 tracking-wide">Reservation Confirmed</h3>
                      <p className="text-white/80 text-sm md:text-base font-medium mb-12">Your table has been successfully booked.</p>

                      <div className="w-full bg-white/5 border border-white/10 p-8 rounded-2xl mb-12 flex flex-col md:flex-row justify-around gap-8 text-center">
                          <div className="flex flex-col gap-2">
                             <label className="text-[#DFAB40] text-[10px] font-bold uppercase tracking-widest opacity-80">Guests</label>
                             <p className="text-white text-xl font-bold uppercase">{formData.guests}</p>
                          </div>
                          <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
                          <div className="flex flex-col gap-2">
                             <label className="text-[#DFAB40] text-[10px] font-bold uppercase tracking-widest opacity-80">Date</label>
                             <p className="text-white text-xl font-bold uppercase">{formData.date}</p>
                          </div>
                          <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
                          <div className="flex flex-col gap-2">
                             <label className="text-[#DFAB40] text-[10px] font-bold uppercase tracking-widest opacity-80">Time</label>
                             <p className="text-white text-xl font-bold uppercase">{formData.time}</p>
                          </div>
                      </div>

                      <p className="text-white text-lg md:text-xl font-serif mb-12 italic opacity-90">&ldquo;We Look Forward To Welcoming You At Indigo.&rdquo;</p>
                   </div>
                )}
             </div>
          </div>
    </div>
  );
}

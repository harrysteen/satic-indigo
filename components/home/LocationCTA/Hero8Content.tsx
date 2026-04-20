import React from "react";

export default function Hero8Content() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Title Section */}
      <h2 className="text-[#20064A] text-2xl md:text-3xl lg:text-4xl font-el-messiri tracking-[0.02em] font-medium mb-2">
        Find Your Way to INDIGO
      </h2>

      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center w-full max-w-[400px] mb-3">
        <div className="flex-1 w-full bg-gradient-to-r from-transparent to-[#DFAB40] h-[1px]"></div>
        <div className="mx-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#DFAB40"/>
          </svg>
        </div>
        <div className="flex-1 w-full bg-gradient-to-l from-transparent to-[#DFAB40] h-[1px]"></div>
      </div>

      <p className="text-[#DFAB40] font-semibold text-xs md:text-sm font-sans tracking-wide max-w-2xl mb-8 text-center uppercase">
        We are well-connected and easy to reach. We wait to serve you with a dining experience like no other.
      </p>

      {/* Main Content constraints - Re-structured to match the exact mockup layout */}
      
      {/* 1. Map Section - Full Width Horizontal Box */}
      <div className="w-full border-2 border-[#20064A] rounded-xl overflow-hidden h-[250px] md:h-[320px] mb-10 shadow-sm relative z-20">
         <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.9691866415786!2d-95.78918232446777!3d29.41505317524675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86411d333068779b%3A0xe5a14d45543c983d!2s451%20Minonite%20Rd%20Suite%20190%2C%20Rosenberg%2C%20TX%2077469%2C%20USA!5e0!3m2!1sen!2sin!4v1712711000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 2. Three Column Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
        
        {/* Location */}
        <div className="flex flex-col items-center">
            <h4 className="text-[#20064A] font-el-messiri text-[22px] md:text-[26px] font-medium tracking-wide mb-4">Location</h4>
            <div className="flex items-start gap-4">
                <div className="text-[#DFAB40] shrink-0 mt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div className="text-left font-bold text-[#20064A] text-[13px] md:text-[14px] leading-relaxed">
                    <p>451 Minonite Road, Suite 190</p>
                    <p>Rosenberg, TX 77469</p>
                </div>
            </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center">
            <h4 className="text-[#20064A] font-el-messiri text-[22px] md:text-[26px] font-medium tracking-wide mb-4">Contact Us</h4>
            <div className="flex items-center gap-4">
                <div className="text-[#DFAB40] shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div className="text-left font-bold text-[#20064A] text-[13px] md:text-[14px]">
                    <p>(832)-451-6027</p>
                </div>
            </div>
        </div>

        {/* Mail Us */}
        <div className="flex flex-col items-center">
            <h4 className="text-[#20064A] font-el-messiri text-[22px] md:text-[26px] font-medium tracking-wide mb-4">Mail Us</h4>
            <div className="flex items-center gap-4">
                <div className="text-[#DFAB40] shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div className="text-left font-bold text-[#20064A] text-[13px] md:text-[14px]">
                    <p>rathodfrompatan@gmail.com</p>
                </div>
            </div>
        </div>

      </div>

      {/* 3. Working Hours & Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Working Hours Card */}
        <div className="relative overflow-hidden rounded-xl border-2 border-[#DFAB40] p-6 md:p-8 text-center bg-white shadow-md flex flex-col items-center justify-center min-h-[300px] md:h-[569px]">
           {/* Logo Pattern Background */}
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 bg-repeat bg-[length:120px_120px]">
              <div className="grid grid-cols-6 gap-6 p-4">
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <img src="/logo/logoicon.png" alt="" className="w-6 h-6 object-contain gray-scale brightness-0" />
                  </div>
                ))}
              </div>
           </div>

           <div className="relative z-10 w-full flex flex-col items-center gap-1">
            <h3 className="text-[#20064A] font-el-messiri text-[28px] md:text-[32px] font-medium mb-4 md:mb-6">Working Hours</h3>
            
            <div className="flex flex-col items-center w-full">
                <span className="text-[#20064A] font-bold text-[15px] md:text-[16px] xl:text-[18px] mb-1">Sunday, Tuesday, Thursday</span>
                <span className="text-[#D8A131] font-bold text-[13px] md:text-[14px] xl:text-[16px] mb-4">11:00 AM – 9:30 PM</span>
                
                <span className="text-[#20064A] font-bold text-[15px] md:text-[16px] xl:text-[18px] mb-1">Wednesday</span>
                <span className="text-[#D8A131] font-bold text-[13px] md:text-[14px] xl:text-[16px] mb-4">11:00 AM – 9:00 PM</span>
                
                <span className="text-[#20064A] font-bold text-[15px] md:text-[16px] xl:text-[18px] mb-1">Friday, Saturday</span>
                <span className="text-[#D8A131] font-bold text-[13px] md:text-[14px] xl:text-[16px] mb-5">11:00 AM – 10:00 PM</span>

                <span className="text-[#20064A] font-extrabold text-[13px] md:text-[14px] xl:text-[16px] mt-2 md:mt-4">*Closed on Mondays</span>
            </div>
           </div>
        </div>

        {/* Restaurant Image Card */}
        <div className="rounded-xl border-2 border-[#DFAB40] overflow-hidden shadow-md w-full h-[300px] md:h-[569px]">
          <img 
            src="/hero8/sign.png" 
            alt="INDIGO Indian Restaurant Sign" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

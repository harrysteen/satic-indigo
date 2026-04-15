const fs = require('fs');
const filePath = 'components/contact/ContactView.tsx';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// 1. Remove useState import and occurrences
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('import React, { useState } from "react";')) {
    lines[i] = 'import React from "react";';
  }
}

// remove line 8 to 29 (the state declarations)
// indices are 0-based, so line 9 is index 8 and line 30 is index 29.
let newLines = [...lines.slice(0, 8), ...lines.slice(30)];
lines = newLines;

// Now find where section starts
const sectionIndex = lines.findIndex(line => line.includes('<section className="relative w-full py-24 bg-[#20064A] flex flex-col items-center overflow-hidden">'));
if (sectionIndex !== -1) {
  lines[sectionIndex] = lines[sectionIndex].replace('<section className="', '<section id="reservation" className="');
}

// Find Progress Indicator
const progressStartIndex = lines.findIndex(line => line.includes('{/* Progress Indicator */}'));
// Find Form Container end. The Form Container ends around index + some value.
// It ends where {/* 3. Find Your Way Section */} is. We can just find that to safely avoid the whole block
const section3Index = lines.findIndex(line => line.includes('{/* 3. Find Your Way Section */}'));

if (progressStartIndex !== -1 && section3Index !== -1) {
  // we want to cut from progressStartIndex to right before section3Index - 3 (to keep the `        </div>\n      </section>`)
  // Let's trace it carefully.
  // The progress indicator is at `          {/* Progress Indicator */}`
  // Let's just find `        </div>\n      </section>\n\n      {/* 3. Find Your Way Section */}`.
  
  const endOfSection2 = section3Index - 2; 

  const iframeContent = `
          {/* External Reservation Iframe */}
          <div className="w-full max-w-[900px] h-full sm:h-[600px] bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] my-8 relative">
             <iframe 
                src="https://tmt.spotapps.co/reservations?spot_id=253143" 
                className="w-full h-full border-0 absolute inset-0"
                title="Reserve a Table"
             />
          </div>`;

  newLines = [
    ...lines.slice(0, progressStartIndex),
    iframeContent,
    ...lines.slice(endOfSection2)
  ];
  lines = newLines;
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Update successful');

"use client";

import React, { useState, useEffect } from "react";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuCategoryLayout from "./MenuCategoryLayout";
import { MENU_CATEGORIES } from "./MenuData";
import { getMenu } from "@/lib/getMenu"; // ✅ NEW

export default function MenuCategoriesView() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  const [menuData, setMenuData] = useState<any>({}); // ✅ NEW

  useEffect(() => {
    async function fetchData() {
      const data = await getMenu(); // ✅ FETCH FROM SANITY
      console.log("Sanity Data:", data); // 👈 DEBUG
      setMenuData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-full bg-white py-6 md:py-8">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        <MenuCategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <div className="w-full transition-opacity duration-500 min-h-[500px]">
          
          <MenuCategoryLayout 
            key={activeCategory} 
            items={menuData[activeCategory] || []} // ✅ REPLACED HERE
          />
        
        </div>
      </div>
    </div>
  );   
}
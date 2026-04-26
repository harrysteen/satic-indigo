"use client";

import React, { useState, useEffect } from "react";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuCategoryLayout from "./MenuCategoryLayout";
import { MENU_CATEGORIES } from "./MenuData";
// import { getMenuClover } from "@/lib/getMenuClover"; // ❌ REMOVED: Now fetching from backend API

export default function MenuCategoriesView() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);
  const [menuData, setMenuData] = useState<any>({}); // ✅ NEW
  const [categories, setCategories] = useState<string[]>(MENU_CATEGORIES);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/menu");
        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }
        const data = await response.json();
        console.log("Clover Data from API:", data); // 👈 DEBUG
        setMenuData(data);
      
      const loadedCategories = Object.keys(data);
      if (loadedCategories.length > 0) {
        // Keep standard order, then append any new custom categories like "OTHER"
        const sortedCategories = [
          ...MENU_CATEGORIES.filter(cat => loadedCategories.includes(cat)),
          ...loadedCategories.filter(cat => !MENU_CATEGORIES.includes(cat))
        ];
        setCategories(sortedCategories);
        
        // Default to the first category that actually has items
        setActiveCategory(sortedCategories[0]);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }

  fetchData();
}, []);

  return (
    <div className="w-full bg-white py-6 md:py-8">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        <MenuCategoryTabs 
          categories={categories}
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
import React from "react";
import MenuCategoryTab from "./MenuCategoryTab";

interface MenuCategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuCategoryTabs({ categories, activeCategory, onCategoryChange }: MenuCategoryTabsProps) {
  return (
    <div className="w-full flex flex-col items-center mb-8 md:mb-12">
      <div className="w-full max-w-[1240px] border border-[#20064A] overflow-x-auto no-scrollbar bg-white">
        <div className="flex justify-start lg:justify-center min-w-max md:min-w-0">
          {categories.map((category) => (
            <MenuCategoryTab
              key={category}
              label={category}
              isActive={activeCategory === category}
              onClick={() => onCategoryChange(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

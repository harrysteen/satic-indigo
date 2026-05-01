import { getCloverItems } from "./clover";
import { MENU_CATEGORIES } from "../components/menu/MenuData";

export async function getMenuClover() {
  const cloverItems = await getCloverItems();

  const grouped: Record<string, any[]> = {};

  // Initialize grouped with known categories so tabs render in order
  MENU_CATEGORIES.forEach(cat => {
    grouped[cat] = [];
  });
  grouped["OTHER"] = []; // Fallback category

  cloverItems.forEach(cloverItem => {
    // If it's hidden in Clover, skip it (already filtered in clover.ts but good to be safe)
    if (cloverItem.hidden) return;

    // Determine category from Clover
    let category = "OTHER";   
    if (cloverItem.categories?.elements && cloverItem.categories.elements.length > 0) {
      category = cloverItem.categories.elements[0].name.toUpperCase();
    }

    // Format price from cents to dollars
    const formattedPrice = (cloverItem.price / 100).toFixed(2);

    const mergedItem = {
      id: cloverItem.id,
      name: cloverItem.name,
      price: formattedPrice,
      description: cloverItem.alternateName || "", // Strictly use Clover Alternate Name for description
      category: category,
      image: cloverItem.imageUrl || null, // Strictly use Clover Image
      // Default tags to false as they are not standard Clover fields
      isVegetarian: false,
      isSpicy: false,
      isPopular: false,
      containsNuts: false,
      isGlutenFree: false,
    };

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(mergedItem);
  });

  // Remove empty categories
  for (const key in grouped) {
    if (grouped[key].length === 0) {
      delete grouped[key];
    }
  }

  return grouped;
}

import { getCloverItems } from "./clover";
import { MENU_DATA, MENU_CATEGORIES } from "../components/menu/MenuData";

// Helper to flatten MENU_DATA for easy lookup by name
const flattenedMenu = Object.values(MENU_DATA).flat();

export async function getMenuClover() {
  const cloverItems = await getCloverItems();

  const grouped: Record<string, any[]> = {};

  // Initialize grouped with known categories so tabs render in order
  MENU_CATEGORIES.forEach(cat => {
    grouped[cat] = [];
  });
  grouped["OTHER"] = []; // Fallback category

  cloverItems.forEach(cloverItem => {
    // 1. Map by name (case-insensitive) to find image, category, etc.
    const localMatch = flattenedMenu.find(
      local => local.name.toLowerCase() === cloverItem.name.toLowerCase()
    );

    // If it's hidden in Clover, skip it (already filtered in clover.ts but good to be safe)
    if (cloverItem.hidden) return;

    // 2. Determine category. 
    // Prioritize Clover Category if it exists
    let category = "OTHER";   
    if (cloverItem.categories?.elements && cloverItem.categories.elements.length > 0) {
      category = cloverItem.categories.elements[0].name.toUpperCase();
    } else if (localMatch?.category) {
      category = localMatch.category;
    }

    // Format price from cents to dollars
    const formattedPrice = (cloverItem.price / 100).toFixed(2);

    const mergedItem = {
      id: cloverItem.id, // Use Clover ID
      name: cloverItem.name, // Use Clover Name
      price: formattedPrice, // Use Clover Price
      description: localMatch?.description || "",
      category: category,
      image: localMatch?.image || null,
      isVegetarian: localMatch?.isVegetarian || false,
      isSpicy: localMatch?.isSpicy || false,
      isPopular: localMatch?.isPopular || false,
      containsNuts: localMatch?.containsNuts || false,
      isGlutenFree: localMatch?.isGlutenFree || false,
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

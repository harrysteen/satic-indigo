import { client, urlFor } from "./sanityClient";

export async function getMenu() {
  const data = await client.fetch(`*[_type == "menuItem"]`);

  const grouped: Record<string, any[]> = {};

  data.forEach((item: any) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }

    grouped[item.category].push({
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,

      // ✅ FIXED IMAGE
      image: item.image ? urlFor(item.image).url() : null,

      isVegetarian: item.isVegetarian,
      isSpicy: item.isSpicy,
      isPopular: item.isPopular,
      containsNuts: item.containsNuts,
      isGlutenFree: item.isGlutenFree,
    });
  });

  return grouped;
}
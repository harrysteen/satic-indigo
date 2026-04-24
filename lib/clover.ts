const CLOVER_API_URL = "https://sandbox.dev.clover.com/v3";

export interface CloverCategory {
  id: string;
  name: string;
  sortOrder: number;
}

export interface CloverItem {
  id: string;
  name: string;
  price: number;
  hidden: boolean;
  categories?: {
    elements: CloverCategory[];
  };
}

/**
 * Helper to fetch data from Clover Sandbox API
 */
async function fetchFromClover(endpoint: string) {
  const mId = process.env.NEXT_PUBLIC_CLOVER_MERCHANT_ID;
  const token = process.env.NEXT_PUBLIC_CLOVER_API_TOKEN;

  if (!mId || !token) {
    throw new Error("Missing Clover credentials in environment variables.");
  }

  const url = `${CLOVER_API_URL}/merchants/${mId}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    // Adding cache option depending on the need, for now revalidate every 60s
    next: { revalidate: 60 } 
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Clover API Error (${response.status}):`, text);
    throw new Error(`Clover API Error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch all items from Clover
 */
export async function getCloverItems(): Promise<CloverItem[]> {
  try {
    const data = await fetchFromClover('/items?expand=categories&filter=hidden=false');
    return data.elements || [];
  } catch (error) {
    console.error("Error fetching Clover items:", error);
    return [];
  }
}

/**
 * Fetch all categories from Clover
 */
export async function getCloverCategories(): Promise<CloverCategory[]> {
  try {
    const data = await fetchFromClover('/categories');
    return data.elements || [];
  } catch (error) {
    console.error("Error fetching Clover categories:", error);
    return [];
  }
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  containsNuts?: boolean;
  isGlutenFree?: boolean;
}

export const MENU_CATEGORIES = [
  "APPETIZERS",
  "BARBECUE STARTERS",
  "BREAD",
  "CHAAT",
  "DESSERT",
  "DRINKS - NON ALCOHOLIC",
  "INDO CHINESE",
  "KIDS MENU",
  "MAIN COURSE",
  "NON-VEG CURRIES",
  "RICE",
  "SEAFOOD SPECIALITIES",
  "SOUPS",
  "LUNCH MENU"
];

export const MENU_DATA: Record<string, MenuItem[]> = {
  "APPETIZERS": [
    { id: "ap1", name: "Veg Samosa", description: "", price: "4.99", category: "APPETIZERS" },
    { id: "ap2", name: "Chicken Samosa", description: "", price: "5.99", category: "APPETIZERS" },
    { id: "ap3", name: "Keema Samosa", description: "", price: "6.99", category: "APPETIZERS" },
    { id: "ap4", name: "Masala Fries", description: "", price: "5.99", category: "APPETIZERS" },
    { id: "ap5", name: "Chili Chicken Dry", description: "", price: "13.99", category: "APPETIZERS" },
    { id: "ap6", name: "Bang Bang Shrimp", description: "", price: "11.99", category: "APPETIZERS" },
    { id: "ap7", name: "Chicken 65 Dry", description: "", price: "12.99", category: "APPETIZERS" },
    { id: "ap8", name: "Chicken Lollipop", description: "", price: "13.99", category: "APPETIZERS" },
    { id: "ap9", name: "Masala Papad", description: "", price: "3.99", category: "APPETIZERS" },
    { id: "ap10", name: "Papad", description: "", price: "1.99", category: "APPETIZERS" },
    { id: "ap11", name: "Dry Gobi Manchurian", description: "", price: "12.99", category: "APPETIZERS" },
    { id: "ap12", name: "Dry Chili Paneer", description: "", price: "12.99", category: "APPETIZERS" },
    { id: "ap13", name: "Green Salad", description: "", price: "4.99", category: "APPETIZERS" }
  ],
  "BARBECUE STARTERS": [
    { id: "ba14", name: "Chicken Seekh Kebab", description: "", price: "14.99", category: "BARBECUE STARTERS" },
    { id: "ba15", name: "Murgh Malai Boti", description: "", price: "14.99", category: "BARBECUE STARTERS" },
    { id: "ba16", name: "Paneer Tikka Nawab", description: "", price: "13.99", category: "BARBECUE STARTERS" },
    { id: "ba17", name: "Tandoori Lamb Chops", description: "", price: "24.99", category: "BARBECUE STARTERS" },
    { id: "ba18", name: "Goat Seekh Kebab", description: "", price: "15.99", category: "BARBECUE STARTERS" },
    { id: "ba19", name: "Tandoori Chicken", description: "", price: "15.99", category: "BARBECUE STARTERS" },
    { id: "ba20", name: "Chicken Boti", description: "", price: "14.99", category: "BARBECUE STARTERS" },
    { id: "ba21", name: "Indigo Mix Grill Platter", description: "", price: "24.99", category: "BARBECUE STARTERS" }
  ],
  "BREAD": [
    { id: "br22", name: "Plain Naan", description: "", price: "2.49", category: "BREAD" },
    { id: "br23", name: "Butter Naan", description: "", price: "2.99", category: "BREAD" },
    { id: "br24", name: "Garlic Naan", description: "", price: "3.49", category: "BREAD" },
    { id: "br25", name: "Chili Naan", description: "", price: "3.49", category: "BREAD" },
    { id: "br26", name: "Cheese Naan", description: "", price: "4.49", category: "BREAD" },
    { id: "br27", name: "Onion Kulcha", description: "", price: "4.49", category: "BREAD" },
    { id: "br28", name: "Roti", description: "", price: "2.49", category: "BREAD" },
    { id: "br29", name: "Tawa Paratha", description: "", price: "3.99", category: "BREAD" }
  ],
  "CHAAT": [
    { id: "ch30", name: "Dahi Puri", description: "", price: "7.99", category: "CHAAT" },
    { id: "ch31", name: "Kachori Chaat", description: "", price: "7.99", category: "CHAAT" },
    { id: "ch32", name: "Pani Puri", description: "", price: "6.99", category: "CHAAT" },
    { id: "ch33", name: "Papdi Chaat", description: "", price: "7.99", category: "CHAAT" },
    { id: "ch34", name: "Samosa Chaat", description: "", price: "7.99", category: "CHAAT" },
    { id: "ch35", name: "Bombay Bhel", description: "", price: "7.99", category: "CHAAT" }
  ],
  "DESSERT": [
    { id: "de36", name: "Carrot Halwa w Gulab Jamun", description: "", price: "6.99", category: "DESSERT" },
    { id: "de37", name: "Kheer", description: "", price: "4.99", category: "DESSERT" },
    { id: "de38", name: "Pista Kulfi", description: "", price: "4.99", category: "DESSERT" },
    { id: "de39", name: "Ras Malai Shot", description: "", price: "5.99", category: "DESSERT" }
  ],
  "DRINKS - NON ALCOHOLIC": [
    { id: "dr40", name: "Water", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr41", name: "Sparkling Water", description: "", price: "2.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr42", name: "Coke Reg", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr43", name: "Diet Coke", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr44", name: "Coke Zero", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr45", name: "Sprite", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr46", name: "Dr. Pepper", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr47", name: "Canada Dry Ginger Ale", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr48", name: "Regular Ice Tea", description: "", price: "2.49", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr49", name: "Lemon Ice Tea", description: "", price: "2.49", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr50", name: "Mango Lassi", description: "", price: "4.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr51", name: "Indigo Special Lassi", description: "", price: "6.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr52", name: "Salted Lassi", description: "", price: "3.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr53", name: "Chili Mint Lemonade", description: "", price: "4.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr54", name: "Mojito", description: "", price: "5.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr55", name: "Chai", description: "", price: "2.49", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr56", name: "Thumbs Up", description: "", price: "2.49", category: "DRINKS - NON ALCOHOLIC" }
  ],
  "INDO CHINESE": [
    { id: "in57", name: "Chicken Manchurian", description: "", price: "13.99", category: "INDO CHINESE" },
    { id: "in58", name: "Chili Chicken Gravy", description: "", price: "13.99", category: "INDO CHINESE" },
    { id: "in59", name: "Veg. Hakka Noodles", description: "", price: "11.99", category: "INDO CHINESE" },
    { id: "in60", name: "Veg. Schezwan Fried Rice", description: "", price: "12.99", category: "INDO CHINESE" },
    { id: "in61", name: "Veg Schezwan Noodles", description: "", price: "12.99", category: "INDO CHINESE" },
    { id: "in62", name: "Veg Fried Rice", description: "", price: "11.99", category: "INDO CHINESE" },
    { id: "in63", name: "Chicken Schezwan Fried Rice", description: "", price: "13.99", category: "INDO CHINESE" },
    { id: "in64", name: "Chicken Hakka Noodles", description: "", price: "12.99", category: "INDO CHINESE" },
    { id: "in65", name: "Veg Manchurian", description: "", price: "12.99", category: "INDO CHINESE" },
    { id: "in66", name: "Shrimp Fried Rice", description: "", price: "14.99", category: "INDO CHINESE" },
    { id: "in67", name: "Indigo Special Triple Schezwan", description: "", price: "15.99", category: "INDO CHINESE" },
    { id: "in68", name: "Chicken Fried Rice", description: "", price: "12.99", category: "INDO CHINESE" },
    { id: "in69", name: "Chicken Schezwan Noodles", description: "", price: "13.99", category: "INDO CHINESE" },
    { id: "in70", name: "Chicken 65 Gravy", description: "", price: "13.99", category: "INDO CHINESE" }
  ],
  "KIDS MENU": [
    { id: "ki71", name: "Cheese Fries", description: "", price: "5.99", category: "KIDS MENU" },
    { id: "ki72", name: "Popcorn Chicken", description: "", price: "5.99", category: "KIDS MENU" },
    { id: "ki73", name: "Kids Chicken Seekh Kebab", description: "", price: "7.99", category: "KIDS MENU" },
    { id: "ki74", name: "Kids Goat Seekh Kebab", description: "", price: "8.99", category: "KIDS MENU" },
    { id: "ki75", name: "Cheese Naan Pizza With Chicken", description: "", price: "7.99", category: "KIDS MENU" },
    { id: "ki76", name: "Kids Veg. Fried Rice", description: "", price: "6.99", category: "KIDS MENU" }
  ],
  "MAIN COURSE": [
    { id: "ma77", name: "Aloo Gobi", description: "", price: "12.99", category: "MAIN COURSE" },
    { id: "ma78", name: "Bhindi Masala", description: "", price: "12.99", category: "MAIN COURSE" },
    { id: "ma79", name: "Chana Masala", description: "", price: "11.99", category: "MAIN COURSE" },
    { id: "ma80", name: "Dal Makhni", description: "", price: "12.99", category: "MAIN COURSE" },
    { id: "ma81", name: "Dal Tadka", description: "", price: "11.99", category: "MAIN COURSE" },
    { id: "ma82", name: "Soya Kaai Makhhan", description: "", price: "13.99", category: "MAIN COURSE" },
    { id: "ma83", name: "Malai Kofta Lajaj", description: "", price: "13.99", category: "MAIN COURSE" },
    { id: "ma84", name: "Palak Paneer", description: "", price: "13.99", category: "MAIN COURSE" },
    { id: "ma85", name: "Paneer Tikka Masala", description: "", price: "13.99", category: "MAIN COURSE" },
    { id: "ma86", name: "Paneer Makhni", description: "", price: "13.99", category: "MAIN COURSE" },
    { id: "ma87", name: "Paneer Bhurji", description: "", price: "14.99", category: "MAIN COURSE" },
    { id: "ma88", name: "Chicken 65 Gravy", description: "", price: "", category: "MAIN COURSE" },
    { id: "ma89", name: "Chicken Boti Roll", description: "", price: "10.99", category: "MAIN COURSE" },
    { id: "ma90", name: "Chicken Seekh Kebab Roll", description: "", price: "10.99", category: "MAIN COURSE" },
    { id: "ma91", name: "Office Lunch Box (M 2 F)", description: "", price: "10.99", category: "MAIN COURSE" }
  ],
  "NON-VEG CURRIES": [
    { id: "no92", name: "Butter Chicken", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no93", name: "Chicken egg Masala", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no94", name: "Chicken Korma", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no95", name: "Goat Kali Mirch", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no96", name: "Goat Korma", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no97", name: "Hyderabadi Goat Curry", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no98", name: "Murgh Tikka Masala", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no99", name: "Indigo Kebab Fry", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no100", name: "Chicken Handi", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no101", name: "Peshawari Chicken Karahi", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no102", name: "Goat Paya", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no103", name: "Bombay Kheema Matar", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no104", name: "Peshawari Goat Karahi", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no105", name: "Egg Curry", description: "", price: "12.99", category: "NON-VEG CURRIES" },
    { id: "no106", name: "Indigo Chicken Karahi", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no107", name: "Hyderabadi Tala Gosht", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no108", name: "Egg Bhurji", description: "", price: "12.99", category: "NON-VEG CURRIES" }
  ],
  "RICE": [
    { id: "ri109", name: "Chicken Biryani", description: "", price: "14.99", category: "RICE" },
    { id: "ri110", name: "Goat Biryani", description: "", price: "17.99", category: "RICE" },
    { id: "ri111", name: "Jeera Rice", description: "", price: "4.99", category: "RICE" },
    { id: "ri112", name: "Vegetable Biryani", description: "", price: "12.99", category: "RICE" },
    { id: "ri113", name: "Plain Rice", description: "", price: "3.99", category: "RICE" }
  ],
  "SEAFOOD SPECIALITIES": [
    { id: "se114", name: "Bombay Fish Masala", description: "", price: "15.99", category: "SEAFOOD SPECIALITIES" },
    { id: "se115", name: "Indigo Fish Masala", description: "", price: "15.99", category: "SEAFOOD SPECIALITIES" },
    { id: "se116", name: "Shrimp Masala", description: "", price: "16.99", category: "SEAFOOD SPECIALITIES" }
  ],
  "SOUPS": [
    { id: "so117", name: "Chicken Corn Soup", description: "", price: "5.99", category: "SOUPS" },
    { id: "so118", name: "Hot & Sour Soup", description: "", price: "4.99", category: "SOUPS" },
    { id: "so119", name: "Manchow Soup", description: "", price: "4.99", category: "SOUPS" }
  ],
  "LUNCH MENU": [
    { id: "lu120", name: "CM 65 Lunch Menu", description: "", price: "10.99", category: "LUNCH MENU" },
    { id: "lu121", name: "Palak Paneer Lunch Menu", description: "", price: "10.99", category: "LUNCH MENU" },
    { id: "lu122", name: "Butter Ch Lunch Menu", description: "", price: "10.99", category: "LUNCH MENU" },
    { id: "lu123", name: "Goat Korma Lunch Menu", description: "", price: "12.99", category: "LUNCH MENU" }
  ],
};

export const OFFERS_DATA = [
  {
    id: "o1",
    tag: "Chef's Special",
    title: "MIX GRILL PLATTER",
    description: "Enjoy Chicken Bihari, chicken seekh kebab, and Goat seekh kebab at a special price.",
    image: "/menu/mix-grill.png"
  },
  {
    id: "o2",
    tag: "Lunch Special",
    title: "CURRY & RICE COMBO",
    description: "Your choice of any classic curry served with fragrant basmati white rice.",
    image: "/menu/curry-combo.png"
  }
];

export const SPECIALS_DATA = [
  { id: "s1", name: "BUTTER CHICKEN", description: "A symphony of butter and spice that turns every bite into a memory.", image: "/imges/home/Most Loved Sec/butter chicken.webp", isPopular: true },
  { id: "s2", name: "GOAT KORMA", description: "Traditional bone-in goat cooked to perfection.", image: "/imges/home/Most Loved Sec/peshawari.webp", isPopular: true },
  { id: "s3", name: "SAMOSA CHAAT", description: "A tangy, spicy, and sweet explosion of flavors.", image: "/imges/home/Most Loved Sec/samosa.webp", isPopular: true },
  { id: "s4", name: "MANGO LASSI", description: "The sweetness of mango and yogurt in every sip.", image: "/imges/home/Most Loved Sec/mango lassi.webp", isPopular: true }
];

export const SIGNATURE_DATA = [
  {
    id: "si1",
    date: "04 Mar",
    event: "MIDWEEK GRILL NIGHT",
    time: "7:30 PM – 10:30 PM",
    description: "Live grills + curated platters",
    highlights: ["Skewers", "BBQ Chicken"],
    buttonText: "Reserve Now",
    image: "/kumar-images/midweek-grill.jpg"
  },
  {
    id: "si2",
    date: "08 Mar",
    event: "INDIGO CULTURAL NIGHT",
    time: "8:00 PM onwards",
    description: "Traditional ambiance + live music",
    highlights: ["Slow Cooked Curries", "Dum Biryani", "Saffron Desserts"],
    buttonText: "Reserve Now",
    image: "/kumar-images/indigo-culter.jpg"
  },
  {
    id: "si3",
    date: "10 Mar",
    event: "INDIGO CHAAT EXPERIENCE",
    time: "7:00 PM onwards",
    description: "Street-style favorites with a refined twist",
    highlights: ["Pani Puri", "Dahi Papdi", "Sev Puri"],
    buttonText: "Reserve Now",
    image: "/kumar-images/indigo-chat.jpg"
  }
];

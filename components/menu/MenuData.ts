// Static menu data types and structures
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
    { id: "ap1", name: "Veg Samosa", description: "Crispy pastry filled with spiced potatoes, served with mint and tamarind chutney.", price: "4.99", category: "APPETIZERS" },
    { id: "ap2", name: "Chicken Samosa", description: "Crispy pastry filled with minced chicken, served with mint and tamarind chutney.", price: "5.99", category: "APPETIZERS" },
    { id: "ap3", name: "Keema Samosa", description: "Crispy pastry filled with minced meat, served with mint and tamarind chutney.", price: "6.99", category: "APPETIZERS" },
    { id: "ap4", name: "Masala Fries", description: "", price: "5.99", category: "APPETIZERS" },
    { id: "ap5", name: "Chili Chicken Dry", description: "Spicy fried chicken with green chilies, onions, and bell pepper.", price: "13.99", category: "APPETIZERS" },
    { id: "ap6", name: "Bang Bang Shrimp", description: "Crispy fried shrimp tossed in house sauce.", price: "11.99", category: "APPETIZERS" },
    { id: "ap7", name: "Chicken 65 Dry", description: "Spicy, deep-fried chicken bites marinated with Indian spices.", price: "12.99", category: "APPETIZERS" },
    { id: "ap8", name: "Chicken Lollipop", description: "Juicy chicken wings, deep-fried and marinated in spices, dipped in a flavorful sauce.", price: "13.99", category: "APPETIZERS" , image: "/imges/menu/indigo_s menu/chicken lollipops7.webp" },
    { id: "ap9", name: "Masala Papad", description: "Crispy papad topped with fresh tomatoes, onions, cucumber, cilantro, and chaat masala.", price: "3.99", category: "APPETIZERS" },
    { id: "ap10", name: "Papad", description: "", price: "1.99", category: "APPETIZERS" },
    { id: "ap11", name: "Dry Gobi Manchurian", description: "Cauliflower florets coated in corn starch and spices, tossed in a flavorful Indo-Chinese sauce.", price: "12.99", category: "APPETIZERS" },
    { id: "ap12", name: "Dry Chili Paneer", description: "Crispy cottage cheese tossed with bell peppers and fresh chilies in a flavorful Indo-Chinese sauce.", price: "12.99", category: "APPETIZERS" , image: "/imges/menu/indigo_s menu/chicken paneer.webp" },
    { id: "ap13", name: "Green Salad", description: "", price: "4.99", category: "APPETIZERS" }
  ],
  "BARBECUE STARTERS": [
    { id: "ba14", name: "Chicken Seekh Kebab", description: "Minced chicken marinated in aromatic spices, grilled to perfection.", price: "14.99", category: "BARBECUE STARTERS" },
    { id: "ba15", name: "Murgh Malai Boti", description: "Chicken marinated in hung curd, cream, and cardamom, then grilled to perfection.", price: "14.99", category: "BARBECUE STARTERS" },
    { id: "ba16", name: "Paneer Tikka Nawab", description: "Soft cubes of cottage cheese marinated in rich, aromatic spices and grilled to perfection.", price: "13.99", category: "BARBECUE STARTERS" },
    { id: "ba17", name: "Tandoori Lamb Chops", description: "Juicy bone-in lamb chops marinated overnight in raw papaya and spices, perfectly grilled.", price: "24.99", category: "BARBECUE STARTERS" },
    { id: "ba18", name: "Goat Seekh Kebab", description: "", price: "15.99", category: "BARBECUE STARTERS" , image: "/imges/menu/indigo_s menu/goat sheekh kabob4.webp" },
    { id: "ba19", name: "Tandoori Chicken", description: "", price: "15.99", category: "BARBECUE STARTERS" },
    { id: "ba20", name: "Chicken Boti", description: "Tender chicken cubes marinated in Indian spices, sautéed with onions and bell peppers.", price: "14.99", category: "BARBECUE STARTERS" , image: "/imges/menu/indigo_s menu/chicken boti.webp" },
    { id: "ba21", name: "Indigo Mix Grill Platter", description: "Chicken Bihari, chicken seekh kebab, Goat seekh kebab.", price: "24.99", category: "BARBECUE STARTERS" }
  ],
  "BREAD": [
    { id: "br22", name: "Plain Naan", description: "", price: "2.49", category: "BREAD" },
    { id: "br23", name: "Butter Naan", description: "Freshly baked naan bread with butter on top.", price: "2.99", category: "BREAD" , image: "/imges/menu/indigo_s menu/butter naan.webp" },
    { id: "br24", name: "Garlic Naan", description: "Naan bread with butter, garlic, and cilantro.", price: "3.49", category: "BREAD" },
    { id: "br25", name: "Chili Naan", description: "Naan bread with butter, chili, cilantro, and sesame seeds.", price: "3.49", category: "BREAD" },
    { id: "br26", name: "Cheese Naan", description: "Naan bread with butter, filled with melted cheese.", price: "4.49", category: "BREAD" },
    { id: "br27", name: "Onion Kulcha", description: "Naan bread with butter, filled with green onions, red onions, and cilantro.", price: "4.49", category: "BREAD" },
    { id: "br28", name: "Roti", description: "", price: "2.49", category: "BREAD" },
    { id: "br29", name: "Tawa Paratha", description: "Thick whole wheat flatbread, pan-cooked with butter.", price: "3.99", category: "BREAD" }
  ],
  "CHAAT": [
    { id: "ch30", name: "Dahi Puri", description: "Hollow, crispy balls filled with potatoes and brown chickpeas with tamarind sauce and sweet yogurt, thin crunchy noodles.", price: "7.99", category: "CHAAT" },
    { id: "ch31", name: "Kachori Chaat", description: "Savory fried pastry, peanuts, and potatoes sprinkled with thin crunchy noodles, sweet yogurt, mint sauce, tamarind sauce.", price: "7.99", category: "CHAAT" },
    { id: "ch32", name: "Pani Puri", description: "Hollow, crispy puris filled with spiced potatoes and chickpeas, served with tangy and spicy flavored water.", price: "6.99", category: "CHAAT" },
    { id: "ch33", name: "Papdi Chaat", description: "", price: "7.99", category: "CHAAT" },
    { id: "ch34", name: "Samosa Chaat", description: "Chickpeas, sprinkled thin crunchy noodles, sweet yogurt, mint sauce, tamarind sauce.", price: "7.99", category: "CHAAT" },
    { id: "ch35", name: "Bombay Bhel", description: "", price: "7.99", category: "CHAAT" }
  ],
  "DESSERT": [
    { id: "de36", name: "Carrot Halwa w Gulab Jamun", description: "A sweet dessert made with grated carrots, milk, sugar, and garnished with nuts.", price: "6.99", category: "DESSERT" , image: "/imges/menu/indigo_s menu/carrot halva3.webp" },
    { id: "de37", name: "Kheer", description: "", price: "4.99", category: "DESSERT" },
    { id: "de38", name: "Pista Kulfi", description: "", price: "4.99", category: "DESSERT" },
    { id: "de39", name: "Ras Malai Shot", description: "Soft cheese dumplings soaked in sweet, creamy milk and garnished with nuts.", price: "5.99", category: "DESSERT" , image: "/imges/menu/indigo_s menu/rabdi shot2.webp" }
  ],
  "DRINKS - NON ALCOHOLIC": [
    { id: "dr40", name: "Water", description: "Bottled water.", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr41", name: "Sparkling Water", description: "Chilled sparkling water.", price: "2.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr42", name: "Coke Reg", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr43", name: "Diet Coke", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr44", name: "Coke Zero", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr45", name: "Sprite", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr46", name: "Dr. Pepper", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr47", name: "Canada Dry Ginger Ale", description: "", price: "1.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr48", name: "Regular Ice Tea", description: "", price: "2.49", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr49", name: "Lemon Ice Tea", description: "", price: "2.49", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr50", name: "Mango Lassi", description: "Refreshing, creamy yogurt drink with a rich mango flavor.", price: "4.99", category: "DRINKS - NON ALCOHOLIC" , image: "/imges/menu/indigo_s menu/mango lassi2.webp" },
    { id: "dr51", name: "Indigo Special Lassi", description: "Sweet lassi topped with a scoop of ice cream and dry fruit.", price: "6.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr52", name: "Salted Lassi", description: "Light and refreshing yogurt-based drink with a tangy taste.", price: "3.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr53", name: "Chili Mint Lemonade", description: "", price: "4.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr54", name: "Mojito", description: "Refreshing drink with mint and soda, served chilled.", price: "5.99", category: "DRINKS - NON ALCOHOLIC" },
    { id: "dr55", name: "Chai", description: "Hot tea made with cow’s milk, served warm.", price: "2.49", category: "DRINKS - NON ALCOHOLIC" , image: "/imges/menu/indigo_s menu/chai.webp" },
    { id: "dr56", name: "Thumbs Up", description: "", price: "2.49", category: "DRINKS - NON ALCOHOLIC" }
  ],
  "INDO CHINESE": [
    { id: "in57", name: "Chicken Manchurian", description: "Crispy chicken tossed in a tangy, spicy sauce with onions and peppers.", price: "13.99", category: "INDO CHINESE" },
    { id: "in58", name: "Chili Chicken Gravy", description: "Spicy fried chicken with green chilies, onions, and bell pepper.", price: "13.99", category: "INDO CHINESE" , image: "/imges/menu/indigo_s menu/chilli chicken with gravy4 (1).webp" },
    { id: "in59", name: "Veg. Hakka Noodles", description: "Stir-fried noodles tossed with crisp vegetables and savory Asian sauces.", price: "11.99", category: "INDO CHINESE" },
    { id: "in60", name: "Veg. Schezwan Fried Rice", description: "Stir-fried rice with spicy Schezwan sauce, mixed vegetables, and a hint of tangy heat.", price: "12.99", category: "INDO CHINESE" },
    { id: "in61", name: "Veg Schezwan Noodles", description: "Spicy stir-fried noodles with vegetables and bold Schezwan flavors.", price: "12.99", category: "INDO CHINESE" },
    { id: "in62", name: "Veg Fried Rice", description: "Stir-fried rice with mixed vegetables and a hint of tangy heat.", price: "11.99", category: "INDO CHINESE" },
    { id: "in63", name: "Chicken Schezwan Fried Rice", description: "Stir-fried rice with spicy Schezwan sauce, mixed chicken, and a hint of tangy heat.", price: "13.99", category: "INDO CHINESE" },
    { id: "in64", name: "Chicken Hakka Noodles", description: "Stir-fried noodles tossed with crisp chicken and savory Asian sauces.", price: "12.99", category: "INDO CHINESE" },
    { id: "in65", name: "Veg Manchurian", description: "Crispy vegetable balls tossed in Manchurian sauce.", price: "12.99", category: "INDO CHINESE" },
    { id: "in66", name: "Shrimp Fried Rice", description: "Flavorful stir-fried rice with succulent shrimp, mixed vegetables, and a hint of soy sauce.", price: "14.99", category: "INDO CHINESE" },
    { id: "in67", name: "Indigo Special Triple Schezwan", description: "Fried rice, noodles, and vegetable balls tossed in a bold Schezwan sauce.", price: "15.99", category: "INDO CHINESE" },
    { id: "in68", name: "Chicken Fried Rice", description: "Stir-fried rice with a medley of fresh chicken and subtle spices.", price: "12.99", category: "INDO CHINESE" },
    { id: "in69", name: "Chicken Schezwan Noodles", description: "Spicy stir-fried noodles with chicken and bold Schezwan flavors.", price: "13.99", category: "INDO CHINESE" },
    { id: "in70", name: "Chicken 65 Gravy", description: "Spicy, deep-fried chicken bites marinated with Indian spices in gravy.", price: "13.99", category: "INDO CHINESE" }
  ],
  "KIDS MENU": [
    { id: "ki71", name: "Cheese Fries", description: "", price: "5.99", category: "KIDS MENU" },
    { id: "ki72", name: "Popcorn Chicken", description: "Bite-sized crispy chicken pieces.", price: "5.99", category: "KIDS MENU" },
    { id: "ki73", name: "Kids Chicken Seekh Kebab", description: "", price: "7.99", category: "KIDS MENU" },
    { id: "ki74", name: "Kids Goat Seekh Kebab", description: "", price: "8.99", category: "KIDS MENU" },
    { id: "ki75", name: "Cheese Naan Pizza With Chicken", description: "", price: "7.99", category: "KIDS MENU" },
    { id: "ki76", name: "Kids Veg. Fried Rice", description: "Kid-friendly stir-fried rice with mixed vegetables.", price: "6.99", category: "KIDS MENU" }
  ],
  "MAIN COURSE": [
    { id: "ma77", name: "Aloo Gobi", description: "", price: "12.99", category: "MAIN COURSE" },
    { id: "ma78", name: "Bhindi Masala", description: "", price: "12.99", category: "MAIN COURSE" },
    { id: "ma79", name: "Chana Masala", description: "Chickpeas cooked with onions and tomatoes in a flavorful spiced gravy. Served with white rice.", price: "11.99", category: "MAIN COURSE" },
    { id: "ma80", name: "Dal Makhni", description: "Kidney beans and whole urad slow-cooked in butter and cream with aromatic spices. Served with white rice.", price: "12.99", category: "MAIN COURSE" },
    { id: "ma81", name: "Dal Tadka", description: "Yellow lentils cooked with onions and tomatoes in a flavorful spiced gravy. Served with white rice.", price: "11.99", category: "MAIN COURSE" },
    { id: "ma82", name: "Soya Kaai Makhhan", description: "", price: "13.99", category: "MAIN COURSE" },
    { id: "ma83", name: "Malai Kofta Lajaj", description: "Soft vegetable dumplings simmered in a rich, creamy milk-based gravy. Served with white rice.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma84", name: "Palak Paneer", description: "Soft paneer cubes simmered in a creamy spinach sauce with fenugreek and aromatic spices. Served with white rice.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma85", name: "Paneer Tikka Masala", description: "", price: "13.99", category: "MAIN COURSE" },
    { id: "ma86", name: "Paneer Makhni", description: "Cottage cheese cubes cooked in a rich tomato and onion cream gravy. Served with white rice.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma87", name: "Paneer Bhurji", description: "Crumbled cottage cheese cooked with onions, tomatoes, green chilies, ginger, and garlic. Served with white rice.", price: "14.99", category: "MAIN COURSE" },
    { id: "ma88", name: "Chicken 65 Gravy", description: "", price: "", category: "MAIN COURSE" },
    { id: "ma89", name: "Chicken Boti Roll", description: "", price: "10.99", category: "MAIN COURSE" },
    { id: "ma90", name: "Chicken Seekh Kebab Roll", description: "", price: "10.99", category: "MAIN COURSE" },
    { id: "ma91", name: "Office Lunch Box (M 2 F)", description: "", price: "10.99", category: "MAIN COURSE" }
  ],
  "NON-VEG CURRIES": [
    { id: "no92", name: "Butter Chicken", description: "Tender boneless BBQ chicken in a creamy tomato-butter sauce. Served with white rice.", price: "15.99", category: "NON-VEG CURRIES" , image: "/imges/menu/indigo_s menu/butter chicken4.webp" },
    { id: "no93", name: "Chicken egg Masala", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no94", name: "Chicken Korma", description: "Tender chicken marinated in yogurt and slow cooked with onions and aromatic spices. Served with white rice.", price: "15.99", category: "NON-VEG CURRIES" , image: "/imges/menu/indigo_s menu/chicken korma3.webp" },
    { id: "no95", name: "Goat Kali Mirch", description: "", price: "19.99", category: "NON-VEG CURRIES" , image: "/imges/menu/indigo_s menu/goat kalimirch4.webp" },
    { id: "no96", name: "Goat Korma", description: "Bone-in goat cooked with onions and yogurt in a lightly spiced brown gravy. Served with white rice.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no97", name: "Hyderabadi Goat Curry", description: "Bone-in goat simmered in a rich brown curry with onions, coconut, and yogurt. Served with white rice.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no98", name: "Murgh Tikka Masala", description: "Grilled BBQ chicken simmered in a creamy tomato-based sauce with onions and bell peppers. Served with white rice.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no99", name: "Indigo Kebab Fry", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no100", name: "Chicken Handi", description: "Whole bone-in chicken pieces slow-cooked with onions, yogurt, and traditional spices. Served with white rice.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no101", name: "Peshawari Chicken Karahi", description: "Mixed bone-in chicken cooked with onion, green onions, cream, and yogurt. Served with white rice.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no102", name: "Goat Paya", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no103", name: "Bombay Kheema Matar", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no104", name: "Peshawari Goat Karahi", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no105", name: "Egg Curry", description: "", price: "12.99", category: "NON-VEG CURRIES" },
    { id: "no106", name: "Indigo Chicken Karahi", description: "", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no107", name: "Hyderabadi Tala Gosht", description: "", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no108", name: "Egg Bhurji", description: "", price: "12.99", category: "NON-VEG CURRIES" }
  ],
  "RICE": [
    { id: "ri109", name: "Chicken Biryani", description: "", price: "14.99", category: "RICE" , image: "/imges/menu/indigo_s menu/chicken biryani5 (1).webp" },
    { id: "ri110", name: "Goat Biryani", description: "", price: "17.99", category: "RICE" , image: "/imges/menu/indigo_s menu/goat biryani4.webp" },
    { id: "ri111", name: "Jeera Rice", description: "", price: "4.99", category: "RICE" },
    { id: "ri112", name: "Vegetable Biryani", description: "", price: "12.99", category: "RICE" },
    { id: "ri113", name: "Plain Rice", description: "", price: "3.99", category: "RICE" }
  ],
  "SEAFOOD SPECIALITIES": [
    { id: "se114", name: "Bombay Fish Masala", description: "Whole Pampano fish marinated in aromatic Bombay spices, grilled to perfection.", price: "15.99", category: "SEAFOOD SPECIALITIES" , image: "/imges/menu/indigo_s menu/bombay grilled fish5.webp" },
    { id: "se115", name: "Indigo Fish Masala", description: "Swai fried in lightly spiced chickpea-flour batter until golden-tender.", price: "15.99", category: "SEAFOOD SPECIALITIES" },
    { id: "se116", name: "Shrimp Masala", description: "Shrimp cooked with onions, tomatoes, garlic, ginger, and bold spices. Served with white rice.", price: "16.99", category: "SEAFOOD SPECIALITIES" }
  ],
  "SOUPS": [
    { id: "so117", name: "Chicken Corn Soup", description: "Smooth and creamy soup made with chicken and aromatic spices.", price: "5.99", category: "SOUPS" },
    { id: "so118", name: "Hot & Sour Soup", description: "Tangy and spicy soup, available with chicken or vegetarian.", price: "4.99", category: "SOUPS" },
    { id: "so119", name: "Manchow Soup", description: "Spicy soup with vegetables, available with chicken or vegetarian.", price: "4.99", category: "SOUPS" }
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

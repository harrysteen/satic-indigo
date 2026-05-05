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
    { id: "ap1", name: "Veg Samosa", description: "Crispy pastry filled with spiced potatoes and peas, served with mint and tamarind chutney.", price: "4.99", category: "APPETIZERS" },
    { id: "ap2", name: "Chicken Samosa", description: "Crispy pastry filled with spiced minced chicken, served with mint and tamarind chutney.", price: "5.99", category: "APPETIZERS" },
    { id: "ap3", name: "Keema Samosa", description: "Crispy pastry filled with spiced minced lamb, served with mint and tamarind chutney.", price: "6.99", category: "APPETIZERS" },
    { id: "ap4", name: "Masala Fries", description: "Crispy potato fries tossed in aromatic Indian spices and herbs.", price: "5.99", category: "APPETIZERS" },
    { id: "ap5", name: "Chili Chicken Dry", description: "Indo-Chinese style spicy fried chicken with green chilies, onions, and bell pepper.", price: "13.99", category: "APPETIZERS" },
    { id: "ap6", name: "Bang Bang Shrimp", description: "Crispy fried shrimp tossed in a creamy, tangy, and spicy house sauce.", price: "11.99", category: "APPETIZERS" },
    { id: "ap7", name: "Chicken 65 Dry", description: "Spicy, deep-fried chicken bites marinated with South Indian spices and curry leaves.", price: "12.99", category: "APPETIZERS" },
    { id: "ap8", name: "Chicken Lollipop", description: "Juicy chicken wings, marinated in spices, deep-fried, and served with a flavorful dip.", price: "13.99", category: "APPETIZERS" , image: "/imges/menu/indigo_s menu/chicken lollipops7.webp" },
    { id: "ap9", name: "Masala Papad", description: "Crispy roasted lentil papad topped with chopped tomatoes, onions, cilantro, and chaat masala.", price: "3.99", category: "APPETIZERS" },
    { id: "ap10", name: "Papad", description: "Thin, crispy roasted or fried lentil crackers.", price: "1.99", category: "APPETIZERS" },
    { id: "ap11", name: "Dry Gobi Manchurian", description: "Cauliflower florets tossed in a tangy and spicy Indo-Chinese Manchurian sauce.", price: "12.99", category: "APPETIZERS" },
    { id: "ap12", name: "Dry Chili Paneer", description: "Stir-fried cubes of cottage cheese with bell peppers and onions in a spicy chili sauce.", price: "12.99", category: "APPETIZERS" , image: "/imges/menu/indigo_s menu/chicken paneer.webp" },
    { id: "ap13", name: "Green Salad", description: "Freshly cut cucumbers, tomatoes, onions, and carrots served with lemon and green chili.", price: "4.99", category: "APPETIZERS" }
  ],
  "BARBECUE STARTERS": [
    { id: "ba14", name: "Chicken Seekh Kebab", description: "Minced chicken blended with aromatic herbs and spices, grilled on skewers.", price: "14.99", category: "BARBECUE STARTERS" },
    { id: "ba15", name: "Murgh Malai Boti", description: "Succulent chicken pieces marinated in cream, hung curd, and cardamom, grilled to perfection.", price: "14.99", category: "BARBECUE STARTERS" },
    { id: "ba16", name: "Paneer Tikka Nawab", description: "Soft cubes of cottage cheese marinated in a rich blend of spices and grilled in tandoor.", price: "13.99", category: "BARBECUE STARTERS" },
    { id: "ba17", name: "Tandoori Lamb Chops", description: "Juicy lamb chops marinated overnight in raw papaya and secret spices, char-grilled.", price: "24.99", category: "BARBECUE STARTERS" },
    { id: "ba18", name: "Goat Seekh Kebab", description: "Flavorful minced goat meat mixed with spices and herbs, grilled on skewers.", price: "15.99", category: "BARBECUE STARTERS" , image: "/imges/menu/indigo_s menu/goat sheekh kabob4.webp" },
    { id: "ba19", name: "Tandoori Chicken", description: "Bone-in chicken marinated in yogurt and traditional tandoori spices, roasted in clay oven.", price: "15.99", category: "BARBECUE STARTERS" },
    { id: "ba20", name: "Chicken Boti", description: "Tender boneless chicken chunks marinated in Indian spices and grilled to perfection.", price: "14.99", category: "BARBECUE STARTERS" , image: "/imges/menu/indigo_s menu/chicken boti.webp" },
    { id: "ba21", name: "Indigo Mix Grill Platter", description: "A grand platter featuring Chicken Bihari, Chicken Seekh, and Goat Seekh Kebabs.", price: "24.99", category: "BARBECUE STARTERS" }
  ],
  "BREAD": [
    { id: "br22", name: "Plain Naan", description: "Soft and fluffy traditional Indian flatbread baked in a clay oven.", price: "2.49", category: "BREAD" },
    { id: "br23", name: "Butter Naan", description: "Freshly baked tandoori naan glazed with melted butter.", price: "2.99", category: "BREAD" , image: "/imges/menu/indigo_s menu/butter naan.webp" },
    { id: "br24", name: "Garlic Naan", description: "Naan bread topped with minced garlic, cilantro, and butter.", price: "3.49", category: "BREAD" },
    { id: "br25", name: "Chili Naan", description: "Spicy naan bread topped with green chilies, cilantro, and butter.", price: "3.49", category: "BREAD" },
    { id: "br26", name: "Cheese Naan", description: "Tandoori naan bread stuffed with melted cheese and glazed with butter.", price: "4.49", category: "BREAD" },
    { id: "br27", name: "Onion Kulcha", description: "Soft flatbread stuffed with spiced onions and fresh cilantro, baked in tandoor.", price: "4.49", category: "BREAD" },
    { id: "br28", name: "Roti", description: "Traditional whole wheat flatbread baked in a clay oven.", price: "2.49", category: "BREAD" },
    { id: "br29", name: "Tawa Paratha", description: "Layered whole wheat flatbread pan-cooked with a touch of butter.", price: "3.99", category: "BREAD" }
  ],
  "CHAAT": [
    { id: "ch30", name: "Dahi Puri", description: "Crispy hollow shells filled with potatoes, chickpeas, sweet yogurt, and tangy chutneys.", price: "7.99", category: "CHAAT" },
    { id: "ch31", name: "Kachori Chaat", description: "Savory fried pastry crushed and topped with chickpeas, yogurt, and assorted chutneys.", price: "7.99", category: "CHAAT" },
    { id: "ch32", name: "Pani Puri", description: "Crispy hollow puris served with spiced potatoes, chickpeas, and tangy-spicy flavored water.", price: "6.99", category: "CHAAT" },
    { id: "ch33", name: "Papdi Chaat", description: "Crunchy wafers topped with potatoes, chickpeas, yogurt, and sweet-tangy sauces.", price: "7.99", category: "CHAAT" },
    { id: "ch34", name: "Samosa Chaat", description: "Crushed samosas topped with spicy chickpea curry, yogurt, and traditional chutneys.", price: "7.99", category: "CHAAT" },
    { id: "ch35", name: "Bombay Bhel", description: "A classic street snack of puffed rice, vegetables, and tangy tamarind sauce.", price: "7.99", category: "CHAAT" }
  ],
  "DESSERT": [
    { id: "de36", name: "Carrot Halwa w Gulab Jamun", description: "Warm carrot pudding paired with soft milk-solid dumplings in sugar syrup.", price: "6.99", category: "DESSERT" , image: "/imges/menu/indigo_s menu/carrot halva3.webp" },
    { id: "de37", name: "Kheer", description: "Traditional rice pudding slow-cooked with milk, sugar, and garnished with nuts.", price: "4.99", category: "DESSERT" },
    { id: "de38", name: "Pista Kulfi", description: "Rich and creamy traditional Indian pistachio-flavored ice cream.", price: "4.99", category: "DESSERT" },
    { id: "de39", name: "Ras Malai Shot", description: "Delicate cheese dumplings soaked in saffron-infused sweetened milk.", price: "5.99", category: "DESSERT" , image: "/imges/menu/indigo_s menu/rabdi shot2.webp" }
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
    { id: "dr53", name: "Chili Mint Lemonade", description: "A zesty and refreshing lemonade infused with fresh mint and a hint of green chili.", price: "4.99", category: "DRINKS - NON ALCOHOLIC" },
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
    { id: "ki71", name: "Cheese Fries", description: "Crispy fries topped with melted cheese.", price: "5.99", category: "KIDS MENU" },
    { id: "ki72", name: "Popcorn Chicken", description: "Bite-sized crispy chicken pieces.", price: "5.99", category: "KIDS MENU" },
    { id: "ki73", name: "Kids Chicken Seekh Kebab", description: "Mildly spiced minced chicken grilled to perfection.", price: "7.99", category: "KIDS MENU" },
    { id: "ki74", name: "Kids Goat Seekh Kebab", description: "Mildly spiced minced goat meat grilled to perfection.", price: "8.99", category: "KIDS MENU" },
    { id: "ki75", name: "Cheese Naan Pizza With Chicken", description: "Cheese naan topped with pizza sauce and chicken.", price: "7.99", category: "KIDS MENU" },
    { id: "ki76", name: "Kids Veg. Fried Rice", description: "Kid-friendly stir-fried rice with mixed vegetables.", price: "6.99", category: "KIDS MENU" }
  ],
  "MAIN COURSE": [
    { id: "ma77", name: "Aloo Gobi", description: "A comforting dry curry of potatoes and cauliflower sautéed with turmeric and spices.", price: "12.99", category: "MAIN COURSE" },
    { id: "ma78", name: "Bhindi Masala", description: "Fresh okra stir-fried with onions, tomatoes, and a blend of aromatic spices.", price: "12.99", category: "MAIN COURSE" },
    { id: "ma79", name: "Chana Masala", description: "Protein-rich chickpeas simmered in a robust onion-tomato gravy with special spices.", price: "11.99", category: "MAIN COURSE" },
    { id: "ma80", name: "Dal Makhni", description: "Slow-cooked black lentils and kidney beans in a creamy, buttery tomato sauce.", price: "12.99", category: "MAIN COURSE" },
    { id: "ma81", name: "Dal Tadka", description: "Yellow lentils tempered with cumin, garlic, and red chilies in a flavorful gravy.", price: "11.99", category: "MAIN COURSE" },
    { id: "ma82", name: "Soya Kaai Makhhan", description: "Soya chaap cooked in a luxurious and velvety butter-tomato gravy.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma83", name: "Malai Kofta Lajaj", description: "Soft vegetable and paneer dumplings simmered in a rich, creamy cashew-based gravy.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma84", name: "Palak Paneer", description: "Cottage cheese cubes in a smooth, vibrant spinach sauce seasoned with garlic.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma85", name: "Paneer Tikka Masala", description: "Grilled paneer cubes in a spicy and creamy tomato-based gravy with bell peppers.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma86", name: "Paneer Makhni", description: "Soft paneer pieces cooked in a delicate, buttery tomato cream sauce.", price: "13.99", category: "MAIN COURSE" },
    { id: "ma87", name: "Paneer Bhurji", description: "Scrambled cottage cheese cooked with fresh tomatoes, onions, and green chilies.", price: "14.99", category: "MAIN COURSE" },
    { id: "ma88", name: "Chicken 65 Gravy", description: "Tender chicken bites in a spicy and tangy gravy with curry leaves.", price: "", category: "MAIN COURSE" },
    { id: "ma89", name: "Chicken Boti Roll", description: "Grilled chicken chunks wrapped in a soft paratha with onions and chutneys.", price: "10.99", category: "MAIN COURSE" },
    { id: "ma90", name: "Chicken Seekh Kebab Roll", description: "Spiced minced chicken kebabs wrapped in a paratha with fresh salad.", price: "10.99", category: "MAIN COURSE" },
    { id: "ma91", name: "Office Lunch Box (M 2 F)", description: "A complete meal with curry, rice, and naan, perfect for a quick workday lunch.", price: "10.99", category: "MAIN COURSE" }
  ],
  "NON-VEG CURRIES": [
    { id: "no92", name: "Butter Chicken", description: "Boneless tandoori chicken simmered in a world-famous creamy tomato and butter sauce.", price: "15.99", category: "NON-VEG CURRIES" , image: "/imges/menu/indigo_s menu/butter chicken4.webp" },
    { id: "no93", name: "Chicken egg Masala", description: "A unique and hearty curry featuring tender chicken and whole boiled eggs.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no94", name: "Chicken Korma", description: "Succulent chicken pieces slow-cooked in a rich yogurt and onion-based gravy.", price: "15.99", category: "NON-VEG CURRIES" , image: "/imges/menu/indigo_s menu/chicken korma3.webp" },
    { id: "no95", name: "Goat Kali Mirch", description: "Bone-in goat meat cooked in a bold and aromatic black pepper-infused gravy.", price: "19.99", category: "NON-VEG CURRIES" , image: "/imges/menu/indigo_s menu/goat kalimirch4.webp" },
    { id: "no96", name: "Goat Korma", description: "Tender bone-in goat simmered in a luxurious, mildly spiced yogurt and nut gravy.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no97", name: "Hyderabadi Goat Curry", description: "A South Indian specialty of goat cooked with coconut, onions, and secret spices.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no98", name: "Murgh Tikka Masala", description: "Tandoori grilled chicken chunks in a robust, creamy tomato-onion gravy.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no99", name: "Indigo Kebab Fry", description: "A signature dish of marinated fried kebabs tossed in a spicy, flavorful gravy.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no100", name: "Chicken Handi", description: "Traditional bone-in chicken slow-cooked in a deep pot with yogurt and rustic spices.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no101", name: "Peshawari Chicken Karahi", description: "Bone-in chicken cooked in a wok with fresh tomatoes, chilies, and ginger.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no102", name: "Goat Paya", description: "A nutritious and slow-cooked traditional stew of goat trotters in a spicy broth.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no103", name: "Bombay Kheema Matar", description: "Minced meat and green peas sautéed with a blend of aromatic Bombay spices.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no104", name: "Peshawari Goat Karahi", description: "Bone-in goat cooked in a traditional iron wok with fresh tomatoes and green chilies.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no105", name: "Egg Curry", description: "Hard-boiled eggs simmered in a spiced onion-tomato gravy.", price: "12.99", category: "NON-VEG CURRIES" },
    { id: "no106", name: "Indigo Chicken Karahi", description: "Our house-special chicken curry cooked with a unique blend of wok-fired spices.", price: "15.99", category: "NON-VEG CURRIES" },
    { id: "no107", name: "Hyderabadi Tala Gosht", description: "Pan-fried goat meat seasoned with bold Hyderabadi spices and curry leaves.", price: "19.99", category: "NON-VEG CURRIES" },
    { id: "no108", name: "Egg Bhurji", description: "Spiced scrambled eggs sautéed with onions, tomatoes, and fresh cilantro.", price: "12.99", category: "NON-VEG CURRIES" }
  ],
  "RICE": [
    { id: "ri109", name: "Chicken Biryani", description: "Fragrant basmati rice layered with spiced chicken and slow-cooked to perfection.", price: "14.99", category: "RICE" , image: "/imges/menu/indigo_s menu/chicken biryani5 (1).webp" },
    { id: "ri110", name: "Goat Biryani", description: "Premium basmati rice dum-cooked with tender goat meat and aromatic spices.", price: "17.99", category: "RICE" , image: "/imges/menu/indigo_s menu/goat biryani4.webp" },
    { id: "ri111", name: "Jeera Rice", description: "Fluffy basmati rice tempered with cumin seeds and a touch of butter.", price: "4.99", category: "RICE" },
    { id: "ri112", name: "Vegetable Biryani", description: "A colorful medley of vegetables and basmati rice cooked with biryani spices.", price: "12.99", category: "RICE" },
    { id: "ri113", name: "Plain Rice", description: "Steamed, long-grain basmati white rice.", price: "3.99", category: "RICE" }
  ],
  "SEAFOOD SPECIALITIES": [
    { id: "se114", name: "Bombay Fish Masala", description: "Whole Pompano fish marinated in traditional spices and grilled to a smokey finish.", price: "15.99", category: "SEAFOOD SPECIALITIES" , image: "/imges/menu/indigo_s menu/bombay grilled fish5.webp" },
    { id: "se115", name: "Indigo Fish Masala", description: "Swai fish fillets batter-fried and tossed in a special house-made masala.", price: "15.99", category: "SEAFOOD SPECIALITIES" },
    { id: "se116", name: "Shrimp Masala", description: "Juicy shrimp sautéed in a thick, flavorful onion-tomato gravy with herbs.", price: "16.99", category: "SEAFOOD SPECIALITIES" }
  ],
  "SOUPS": [
    { id: "so117", name: "Chicken Corn Soup", description: "A comforting, thick soup with shredded chicken, sweet corn, and egg drops.", price: "5.99", category: "SOUPS" },
    { id: "so118", name: "Hot & Sour Soup", description: "A classic Indo-Chinese tangy and spicy soup with vegetables or chicken.", price: "4.99", category: "SOUPS" },
    { id: "so119", name: "Manchow Soup", description: "A popular spicy Indo-Chinese soup topped with crispy fried noodles.", price: "4.99", category: "SOUPS" }
  ],
  "LUNCH MENU": [
    { id: "lu120", name: "CM 65 Lunch Menu", description: "A satisfying lunch combo featuring our signature Chicken 65 served with rice and naan.", price: "10.99", category: "LUNCH MENU" },
    { id: "lu121", name: "Palak Paneer Lunch Menu", description: "A hearty vegetarian lunch of creamy spinach and paneer served with rice and naan.", price: "10.99", category: "LUNCH MENU" },
    { id: "lu122", name: "Butter Ch Lunch Menu", description: "A classic lunch favorite of tender butter chicken served with rice and naan.", price: "10.99", category: "LUNCH MENU" },
    { id: "lu123", name: "Goat Korma Lunch Menu", description: "A rich and flavorful goat korma lunch served with rice and naan.", price: "12.99", category: "LUNCH MENU" }
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
  { id: "s1", name: "BUTTER CHICKEN", description: "Boneless tandoori chicken simmered in a world-famous creamy tomato and butter sauce.", image: "/imges/home/Most Loved Sec/butter chicken.webp", isPopular: true },
  { id: "s2", name: "GOAT KORMA", description: "Tender bone-in goat simmered in a luxurious, mildly spiced yogurt and nut gravy.", image: "/imges/home/Most Loved Sec/peshawari.webp", isPopular: true },
  { id: "s3", name: "SAMOSA CHAAT", description: "Crushed samosas topped with spicy chickpea curry, yogurt, and traditional chutneys.", image: "/imges/home/Most Loved Sec/samosa.webp", isPopular: true },
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

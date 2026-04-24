export interface EventItem {
  id: string;
  date: string;
  month: string;
  title: string;
  time: string;
  description: string;
  highlights: string[];
  category: string;
  image: string;
}

export const EVENT_CATEGORIES = [
    "ALL",
    "MIDWEEK SPECIALS",
    "CHAT",
    "CULTURAL",
    "BRUNCH",
    "OFFERS",
    "UPCOMING"
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "e1",
    date: "08",
    month: "Mar",
    title: "INDIGO CULTURAL NIGHT",
    time: "8:00 PM onwards",
    description: "Traditional ambiance + Live music",
    highlights: ["Sufi Music", "Live Singer", "Authentic Flavors"],
    category: "CULTURAL",
    image: "/kumar-images/indigo-culter.jpg" // Fixed Image
  },
  {
    id: "e2",
    date: "10",
    month: "Mar",
    title: "INDIGO CHAAT EXPERIENCE",
    time: "7:00 PM onwards",
    description: "Street city adventures with a revised twist",
    highlights: ["New Highlights", "Spicy Chaat", "Sweet & Tangy"],
    category: "CHAT",
    image: "/kumar-images/indigo-chat.jpg" // Fixed Image
  },
  {
    id: "e3",
    date: "04",
    month: "Mar",
    title: "MIDWEEK GRILL NIGHT",
    time: "7:30 PM - 10:30 PM",
    description: "Live grills + curated platters",
    highlights: ["Skewers", "BBQ Chicken"],
    category: "MIDWEEK SPECIALS",
    image: "/kumar-images/midweek-grill.jpg" // Fixed Image
  },
  {
    id: "e4",
    date: "04",
    month: "Mar",
    title: "MIDWEEK GRILL NIGHT",
    time: "7:30 PM - 10:30 PM",
    description: "Live grills + curated platters",
    highlights: ["Skewers", "BBQ Chicken"],
    category: "MIDWEEK SPECIALS",
    image: "/kumar-images/midweek-grill.jpg" // Fixed Image
  }
];

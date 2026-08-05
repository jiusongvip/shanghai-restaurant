// Homepage structured data for the V2 single-page layout
// All restaurant references use slugs from restaurants.ts

export interface Situation {
  icon: string;
  name: string;
  slug: string;
  description: string;
  restaurantSlugs: string[];
}

export interface District {
  icon: string;
  name: string;
  slug: string;
  description: string;
  restaurantSlugs: string[];
}

export interface AttractionDining {
  icon: string;
  name: string;
  slug: string;
  description: string;
  restaurantSlugs: string[];
}

export interface TopDish {
  icon: string;
  nameEn: string;
  nameZh: string;
  slug: string;
  description: string;
  bestRestaurant: string; // restaurant slug
  howToEat: string;
  priceRange: string;
}

export interface DiningTip {
  icon: string;
  title: string;
  summary: string;
}

export interface QuickAccess {
  icon: string;
  label: string;
  href: string;
}

export const situations: Situation[] = [
  {
    icon: "🍜",
    name: "First Time in Shanghai",
    slug: "first-time",
    description: "Essential Shanghai restaurants every first-time visitor should try — iconic flavors, no regrets.",
    restaurantSlugs: ["jia-jia-tang-bao", "old-jesse", "lost-heaven", "din-tai-fung", "yangs-fried-dumpling"],
  },
  {
    icon: "❤️",
    name: "Romantic Dinner",
    slug: "romantic",
    description: "Candlelit tables, stunning views, and unforgettable evenings for two.",
    restaurantSlugs: ["lost-heaven", "fu-he-hui", "yongfoo-elite", "mercato"],
  },
  {
    icon: "👨‍👩‍👧",
    name: "Family Friendly",
    slug: "family",
    description: "Spacious seating, approachable menus, and dishes even picky eaters will love.",
    restaurantSlugs: ["din-tai-fung", "lost-heaven", "yangs-fried-dumpling", "jia-jia-tang-bao"],
  },
  {
    icon: "💼",
    name: "Business Dinner",
    slug: "business",
    description: "Impressive settings and impeccable service for closing the deal over dinner.",
    restaurantSlugs: ["xin-rong-ji", "fu-he-hui", "yongfoo-elite", "mercato"],
  },
  {
    icon: "💰",
    name: "Budget Eats",
    slug: "budget",
    description: "The best of Shanghai for under ¥100 — street food legends and local institutions.",
    restaurantSlugs: ["yangs-fried-dumpling", "jia-jia-tang-bao", "nanxiang"],
  },
  {
    icon: "⭐",
    name: "Michelin & Fine Dining",
    slug: "luxury",
    description: "Michelin-starred tasting menus and world-class haute cuisine in Shanghai.",
    restaurantSlugs: ["fu-he-hui", "xin-rong-ji", "yongfoo-elite"],
  },
  {
    icon: "🌙",
    name: "Late Night Eats",
    slug: "late-night",
    description: "Where to eat in Shanghai after 10 PM — from night market snacks to midnight hot pot.",
    restaurantSlugs: ["yangs-fried-dumpling", "lost-heaven", "mercato"],
  },
  {
    icon: "🌱",
    name: "Vegetarian",
    slug: "vegetarian",
    description: "Plant-based dining that will change how you think about vegetables — from street food to Michelin stars.",
    restaurantSlugs: ["fu-he-hui", "jia-jia-tang-bao", "lost-heaven"],
  },
];

export const districts: District[] = [
  {
    icon: "🌊",
    name: "The Bund & Huangpu",
    slug: "bund",
    description: "Iconic riverfront dining with Pudong skyline views. From rooftop bars to hidden alleyway gems.",
    restaurantSlugs: ["lost-heaven", "mercato", "jia-jia-tang-bao", "yangs-fried-dumpling", "nanxiang"],
  },
  {
    icon: "🏛️",
    name: "Former French Concession",
    slug: "french-concession",
    description: "Tree-lined streets, 1920s villas, and Shanghai's most atmospheric dining neighborhood.",
    restaurantSlugs: ["old-jesse", "yongfoo-elite", "fu-he-hui", "din-tai-fung"],
  },
  {
    icon: "🛕",
    name: "Jing'an",
    slug: "jingan",
    description: "Upscale dining around Jing'an Temple — fine dining, chic cafes, and excellent international options.",
    restaurantSlugs: ["xin-rong-ji", "fu-he-hui"],
  },
  {
    icon: "🏙️",
    name: "People's Square",
    slug: "peoples-square",
    description: "The heart of Shanghai — legendary dumpling shops and quick bites between museums.",
    restaurantSlugs: ["jia-jia-tang-bao", "yangs-fried-dumpling"],
  },
  {
    icon: "🏗️",
    name: "Lujiazui & Pudong",
    slug: "pudong",
    description: "Sky-high dining in Shanghai's financial district with jaw-dropping views from the top floors.",
    restaurantSlugs: ["mercato", "xin-rong-ji"],
  },
  {
    icon: "🛍️",
    name: "Xintiandi",
    slug: "xintiandi",
    description: "Trendy shikumen lane houses turned into fashionable restaurants and bars.",
    restaurantSlugs: ["din-tai-fung", "lost-heaven"],
  },
  {
    icon: "🏯",
    name: "Old City & Yu Garden",
    slug: "old-city",
    description: "Historic dining around Yu Garden and City God Temple — century-old xiaolongbao and street food.",
    restaurantSlugs: ["nanxiang", "lost-heaven"],
  },
  {
    icon: "✈️",
    name: "Near Hongqiao",
    slug: "hongqiao",
    description: "Convenient dining near Hongqiao Airport and Railway Station for travelers in transit.",
    restaurantSlugs: ["din-tai-fung", "xin-rong-ji"],
  },
];

export const attractionDining: AttractionDining[] = [
  {
    icon: "🌊",
    name: "Near The Bund",
    slug: "the-bund",
    description: "After a sunset stroll along the Bund Promenade, these restaurants are minutes away on foot.",
    restaurantSlugs: ["lost-heaven", "mercato", "nanxiang"],
  },
  {
    icon: "🏯",
    name: "Near Yu Garden",
    slug: "yu-garden",
    description: "Step out of Shanghai's most famous classical garden and into these historic eateries.",
    restaurantSlugs: ["nanxiang", "lost-heaven"],
  },
  {
    icon: "🗼",
    name: "Near Shanghai Tower",
    slug: "shanghai-tower",
    description: "Dining with a view after visiting China's tallest building in Lujiazui.",
    restaurantSlugs: ["mercato", "xin-rong-ji"],
  },
  {
    icon: "🎢",
    name: "Near Disneyland",
    slug: "disneyland",
    description: "Family-friendly restaurants near Shanghai Disney Resort for a post-park feast.",
    restaurantSlugs: ["din-tai-fung", "yangs-fried-dumpling"],
  },
  {
    icon: "🛍️",
    name: "Near Nanjing Road",
    slug: "nanjing-road",
    description: "Refuel between shopping on Shanghai's busiest pedestrian street — legendary dumplings and quick eats.",
    restaurantSlugs: ["jia-jia-tang-bao", "yangs-fried-dumpling", "lost-heaven", "mercato"],
  },
  {
    icon: "✈️",
    name: "Near Pudong Airport",
    slug: "pudong-airport",
    description: "A worthy meal before your flight — these restaurants are within a short taxi ride of PVG.",
    restaurantSlugs: ["din-tai-fung", "mercato"],
  },
];

export const topDishes: TopDish[] = [
  {
    icon: "🥟",
    nameEn: "Xiaolongbao",
    nameZh: "小笼包",
    slug: "xiaolongbao",
    description: "The soul of Shanghai in a bamboo basket — thin-skinned soup dumplings filled with pork and scalding-hot broth.",
    bestRestaurant: "jia-jia-tang-bao",
    howToEat: "Lift gently with chopsticks, place on your spoon, nibble a small hole, sip the broth, then eat with black vinegar and ginger.",
    priceRange: "¥30–60",
  },
  {
    icon: "🥘",
    nameEn: "Shengjianbao",
    nameZh: "生煎包",
    slug: "shengjianbao",
    description: "The xiaolongbao's crunchier cousin — pan-fried pork buns with a golden-crisp bottom and explosive soup filling.",
    bestRestaurant: "yangs-fried-dumpling",
    howToEat: "Bite carefully — the soup inside is volcano-hot. Nibble the top, blow to cool, sip, then crunch through the crispy base.",
    priceRange: "¥15–35",
  },
  {
    icon: "🦀",
    nameEn: "Hairy Crab",
    nameZh: "大闸蟹",
    slug: "hairy-crab",
    description: "Shanghai's autumn obsession — palm-sized freshwater crabs with intensely sweet, custard-like roe. Available September–December.",
    bestRestaurant: "old-jesse",
    howToEat: "Steamed whole with ginger. Dismantle piece by piece with tools. Dip in black vinegar, sugar, and shredded ginger. A proper crab feast takes an hour.",
    priceRange: "¥200–500 (seasonal)",
  },
  {
    icon: "🍖",
    nameEn: "Red Braised Pork",
    nameZh: "红烧肉",
    slug: "hong-shao-rou",
    description: "The definitive Benbang dish — pork belly slow-braised in dark soy and rock sugar until each cube glistens like polished mahogany.",
    bestRestaurant: "old-jesse",
    howToEat: "Served in a clay pot. Share family-style with steamed rice. The fat should dissolve on your tongue — if it doesn't, send it back.",
    priceRange: "¥60–100",
  },
  {
    icon: "🍜",
    nameEn: "Scallion Oil Noodles",
    nameZh: "葱油拌面",
    slug: "scallion-oil-noodles",
    description: "Shanghai's simplest pleasure — chewy noodles tossed in fragrant scallion oil with a splash of soy. The ultimate comfort food.",
    bestRestaurant: "jia-jia-tang-bao",
    howToEat: "Mix thoroughly before eating. Best as a side dish alongside xiaolongbao. Add chili oil if you want heat.",
    priceRange: "¥10–20",
  },
  {
    icon: "🍗",
    nameEn: "Drunken Chicken",
    nameZh: "醉鸡",
    slug: "drunken-chicken",
    description: "Cold poached chicken marinated in Shaoxing wine for 24 hours — the meat turns translucent, gelatinous, and infused with floral wine notes.",
    bestRestaurant: "yongfoo-elite",
    howToEat: "Served cold as an appetizer. Let it sit at room temperature for 5 minutes before eating — the wine aroma intensifies.",
    priceRange: "¥50–80",
  },
  {
    icon: "🦐",
    nameEn: "Oil-Blasted River Shrimp",
    nameZh: "油爆虾",
    slug: "you-bao-xia",
    description: "Tiny freshwater shrimp flash-fried at blazing heat until shells shatter-crisp, then tossed in a glossy soy-and-sugar reduction. The quintessential Benbang appetizer.",
    bestRestaurant: "old-jesse",
    howToEat: "Eat whole — shells and all. The crunch is the point. Pair with cold beer or warm Shaoxing wine.",
    priceRange: "¥80–120",
  },
  {
    icon: "🐟",
    nameEn: "Shanghai Smoked Fish",
    nameZh: "熏鱼",
    slug: "xun-yu",
    description: "Grass carp steaks fried to a deep bronze, then steeped in a sweet-savory soy marinade until every fiber absorbs the sauce. Served cold — a Shanghainese household staple.",
    bestRestaurant: "ren-he-guan",
    howToEat: "Served cold as part of the appetizer spread. The bones soften during frying — most are edible. Great with congee or as a beer snack.",
    priceRange: "¥40–60",
  },
  {
    icon: "🐍",
    nameEn: "Sizzling Shredded Eel",
    nameZh: "响油鳝丝",
    slug: "xiang-you-shan-si",
    description: "Silky shredded eel in a dark, glossy sauce, finished tableside with a pour of smoking-hot oil that sizzles dramatically — pure Benbang theater and flavor.",
    bestRestaurant: "ren-he-guan",
    howToEat: "Eat immediately while sizzling. Mix the eel with the aromatic oil. Best over steamed rice to catch every drop of sauce.",
    priceRange: "¥80–120",
  },
];

export const diningTips: DiningTip[] = [
  {
    icon: "📋",
    title: "How to Make a Reservation",
    summary: "Top restaurants book out 1–4 weeks ahead. Use Dianping (大众点评) app, call the restaurant, or ask your hotel concierge. Many high-end spots accept reservations in English via phone.",
  },
  {
    icon: "💳",
    title: "How to Pay",
    summary: "Cash is accepted everywhere. WeChat Pay and Alipay dominate. International credit cards work at mid-range and fine dining restaurants. For street food, bring cash or set up Alipay's Tour Pass for foreigners.",
  },
  {
    icon: "📖",
    title: "English Menus & Ordering",
    summary: "Mid-range and fine dining restaurants usually have English menus. Budget and local spots often only have picture menus. Point at photos, use a translation app, or show the Chinese dish name from our guide.",
  },
  {
    icon: "🍽️",
    title: "Dining Etiquette",
    summary: "Sharing is the norm — order dishes for the table, not per person. It's polite to pour tea for others before yourself. Tipping is not expected and sometimes refused. Slurping noodles is perfectly acceptable.",
  },
  {
    icon: "💰",
    title: "How Much Does Dinner Cost?",
    summary: "Street food: ¥15–50. Casual restaurants: ¥60–150 per person. Mid-range: ¥150–400. Fine dining tasting menus: ¥500–2,000+. Alcohol and imported wine significantly increase the bill.",
  },
  {
    icon: "⏰",
    title: "Opening Hours & Best Times",
    summary: "Lunch: 11:00 AM–2:00 PM. Dinner: 5:00 PM–10:00 PM. Many restaurants close between lunch and dinner. For popular spots, arrive 15 minutes before opening to avoid queues. Late-night dining is limited — plan accordingly.",
  },
];

export const quickAccess: QuickAccess[] = [
  { icon: "🍜", label: "Must-Try Dishes", href: "#dishes" },
  { icon: "🎯", label: "By Occasion", href: "#situations" },
  { icon: "📍", label: "By District", href: "#districts" },
  { icon: "📝", label: "Dining Tips", href: "#tips" },
];

export interface Restaurant {
  name: string;
  slug: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  location: string;
  description: string;
  heroImage: string;
  dishes: string[];
  bestFor: string[];
}

export const featuredRestaurants: Restaurant[] = [
  {
    name: "Jia Jia Tang Bao",
    slug: "jia-jia-tang-bao",
    cuisine: "Shanghai Classics",
    rating: 4.7,
    priceRange: "moderate",
    location: "Shanghai, Huangpu District",
    description: "Legendary soup dumpling shop serving xiaolongbao since 1986. The crab roe and pork xiaolongbao are considered the gold standard.",
    heroImage: "/images/photo-1582450871972-ab5ca72a1f7a.webp",
    dishes: ["Crab Roe Xiaolongbao", "Pork Xiaolongbao", "Egg Yolk Xiaolongbao"],
    bestFor: ["lunch", "casual", "solo"],
  },
  {
    name: "Fu He Hui",
    slug: "fu-he-hui",
    cuisine: "Fine Dining",
    rating: 4.8,
    priceRange: "premium",
    location: "Shanghai, Changning District",
    description: "Michelin-starred vegetarian fine dining that elevates Shanghainese ingredients into art. The mushroom tasting menu is a revelation.",
    heroImage: "/images/photo-1551218808-94e220e084d2.webp",
    dishes: ["Mushroom Tasting Menu", "Bamboo Pith Soup", "Seasonal Vegetable Platter"],
    bestFor: ["fine dining", "special occasion", "vegetarian"],
  },
  {
    name: "Yang's Fried Dumpling",
    slug: "yangs-fried-dumpling",
    cuisine: "Street Food",
    rating: 4.5,
    priceRange: "budget",
    location: "Shanghai, Multiple Locations",
    description: "The most famous shengjianbao (pan-fried pork buns) in Shanghai. Crispy bottom, juicy filling, and a cult following spanning decades.",
    heroImage: "/images/photo-1496116218417-1a781b1c416c.webp",
    dishes: ["Shengjianbao", "Beef Curry Soup", "Pork Wontons"],
    bestFor: ["quick bite", "street food", "casual"],
  },
  {
    name: "Old Jesse",
    slug: "old-jesse",
    cuisine: "Traditional Benbang",
    rating: 4.6,
    priceRange: "moderate",
    location: "Shanghai, Xuhui District",
    description: "Authentic old-school Shanghainese home cooking in a cramped, character-filled space. The hongshao rou (red braised pork) is transcendent.",
    heroImage: "/images/photo-1504674900247-0877df9cc836.webp",
    dishes: ["Hongshao Rou", "Smoked Fish", "Crab Roe Tofu"],
    bestFor: ["authentic", "group dining", "dinner"],
  },
  {
    name: "Lost Heaven",
    slug: "lost-heaven",
    cuisine: "Yunnan-Inspired",
    rating: 4.4,
    priceRange: "moderate",
    location: "Shanghai, Bund Area",
    description: "Sultry, lantern-lit restaurant on the Bund serving Yunnan-influenced cuisine. The tea-smoked duck and floral cocktails are unforgettable.",
    heroImage: "/images/photo-1414235077428-338989a2e8c0.webp",
    dishes: ["Tea-Smoked Duck", "Wild Mushroom Risotto", "Dai Tribe Chicken"],
    bestFor: ["date night", "ambiance", "cocktails"],
  },
];

export const moreRestaurants: Restaurant[] = [
  {
    name: "Xin Rong Ji",
    slug: "xin-rong-ji",
    cuisine: "Fine Dining",
    rating: 4.9,
    priceRange: "premium",
    location: "Shanghai, Jingan District",
    description: "Two-Michelin-starred restaurant serving refined Taizhou and Shanghainese cuisine in an elegant setting. The yellow croaker is legendary.",
    heroImage: "/images/photo-1550966871-3ed3cdb51f3a.webp",
    dishes: ["Yellow Croaker", "Braised Sea Cucumber", "Seasonal Tasting Menu"],
    bestFor: ["fine dining", "special occasion"],
  },
  {
    name: "Din Tai Fung",
    slug: "din-tai-fung",
    cuisine: "Dim Sum",
    rating: 4.5,
    priceRange: "moderate",
    location: "Shanghai, Multiple Locations",
    description: "World-famous Taiwanese chain that perfected the art of xiaolongbao with exactly 18 folds per dumpling. Consistent excellence across every location.",
    heroImage: "/images/photo-1625220194771-7ebdea0b70b9.webp",
    dishes: ["Pork Xiaolongbao", "Truffle Xiaolongbao", "Shrimp Shao Mai"],
    bestFor: ["lunch", "casual", "groups"],
  },
  {
    name: "YongFoo Elite",
    slug: "yongfoo-elite",
    cuisine: "Traditional Benbang",
    rating: 4.6,
    priceRange: "premium",
    location: "Shanghai, Xuhui District",
    description: "Set in a stunning 1930s mansion with lush gardens, YongFoo Elite serves classic Shanghainese dishes in one of the city's most romantic settings.",
    heroImage: "/images/photo-1517248135467-4c7edcad34c4.webp",
    dishes: ["Drunken Chicken", "Braised Pork Belly", "Eight-Treasure Duck"],
    bestFor: ["date night", "ambiance", "fine dining"],
  },
  {
    name: "Nanxiang Steamed Bun",
    slug: "nanxiang",
    cuisine: "Xiaolongbao",
    rating: 4.4,
    priceRange: "budget",
    location: "Shanghai, Huangpu District",
    description: "The original xiaolongbao institution in the City God Temple area, serving soup dumplings since 1900. A historic Shanghai landmark.",
    heroImage: "/images/photo-1541696490-8744a5dc0228.webp",
    dishes: ["Crab Roe Xiaolongbao", "Pork Xiaolongbao", "Shrimp Xiaolongbao"],
    bestFor: ["quick bite", "casual"],
  },
  {
    name: "Mercato",
    slug: "mercato",
    cuisine: "Italian-Shanghai Fusion",
    rating: 4.5,
    priceRange: "premium",
    location: "Shanghai, Bund Area",
    description: "Jean-Georges Vongerichten's Italian restaurant on the Bund, combining rustic Italian cooking with stunning river views and Shanghai flair.",
    heroImage: "/images/photo-1559339352-11d035aa65de.webp",
    dishes: ["Wood-Fired Pizza", "Ricotta", "Lobster Pasta"],
    bestFor: ["date night", "ambiance", "views"],
  },
];

export const allRestaurants = [...featuredRestaurants, ...moreRestaurants];

export const cuisines = [
  { name: "Benbang (Home-Style)", slug: "benbang", description: "Benbang cuisine is the soul of Shanghai cooking — the original home-style food that locals grew up eating at their grandmothers' tables. Distinct from other Chinese regional cuisines, Benbang is defined by its 'red-braising' technique (hongshao), where meats are slow-cooked in a rich, sweet-savory sauce of dark soy, rock sugar, and Shaoxing wine until meltingly tender. Signature dishes include hongshao rou (red braised pork belly), youbao xia (oil-blasted river shrimp), and xun yu (tea-smoked fish). The cuisine makes generous use of oil, sugar, and soy sauce, creating dishes that are unapologetically rich and deeply satisfying. Unlike the fiery heat of Sichuan or the delicate freshness of Cantonese cooking, Benbang is all about warmth, comfort, and the layered umami that only comes from patient braising. Classic Benbang restaurants like Old Jesse and YongFoo Elite keep these traditions alive, serving recipes passed down through generations in atmospheric settings that feel like stepping into old Shanghai." },
  { name: "Xiaolongbao & Dim Sum", slug: "xiaolongbao", description: "Xiaolongbao — literally 'little basket buns' — are Shanghai's most famous culinary export and arguably the world's most beloved soup dumpling. Each delicate dumpling encases a seasoned pork filling suspended in a rich, savory broth that magically liquifies during steaming. The craft demands extraordinary precision: the translucent wrapper must be thin enough to see through yet strong enough to hold boiling soup, traditionally pleated with exactly 18 folds. Eating xiaolongbao is a ritual in itself — gently lift one with chopsticks, place it on your spoon, nibble a small hole to release the steam, sip the broth, then eat the dumpling with a dip of black vinegar and ginger. Beyond xiaolongbao, Shanghai's dim sum tradition includes shengjianbao (pan-fried buns with crispy bottoms), guotie (potstickers), hunda (wontons in various styles), and a rotating cast of steamed and fried small plates that turn any meal into a feast. From century-old institutions like Nanxiang to modern chains like Din Tai Fung, the pursuit of the perfect dumpling is a lifelong Shanghai obsession." },
  { name: "Hairy Crab", slug: "hairy-crab", description: "Every autumn, Shanghai enters a state of collective obsession with one ingredient: the hairy crab (da zha xie). These palm-sized freshwater crabs, named for the dark hair-like filaments on their claws, emerge from lakes around the Yangtze Delta — particularly Yangcheng Lake — between September and December. What makes them extraordinary is the roe: female crabs carry firm, bright-orange roe while males offer a creamy, custard-like substance that Shanghainese describe as 'gao'. The flavor is intensely sweet, briny, and unlike anything else in the seafood world. Eating hairy crab is a deliberate, almost meditative process. Each crab is steamed whole with ginger, then dismantled piece by piece using specialized tools. The roe and meat are often dipped in a sauce of black vinegar, sugar, and shredded ginger. Top restaurants design entire tasting menus around the ingredient during peak season (October-November), featuring dishes like crab roe xiaolongbao, hairy crab tofu, and crab roe tossed with noodles. The season is brief but so culturally significant that it shapes Shanghai's entire fine dining calendar, with friends and business associates gathering for elaborate crab feasts that can last for hours." },
  { name: "Street Food", slug: "street-food", description: "Shanghai's street food scene is where the city's culinary energy is at its most raw and democratic. It's a world of sizzling griddles, steaming bamboo baskets, and the intoxicating aroma of soy, sesame, and spice that fills narrow lanes at all hours. The undisputed king is shengjianbao — pan-fried pork buns with a golden-crisp bottom, fluffy dough, and a burst of hot, savory soup that demands careful first-bite technique. Yang's Fried Dumpling has elevated this humble snack to an art form with lines stretching down the block. Other street food essentials include cong you bing (scallion pancakes — flaky, chewy, and deeply aromatic), ci fan (glutinous rice rolls stuffed with pork floss and pickled vegetables), youtiao (golden fried dough sticks perfect for dipping in sweet soy milk), and chou doufu (fermented tofu — an acquired taste that rewards the brave). The best street food is found in the city's surviving longtang (lane houses) and around temple areas like the City God Temple, where vendors have been perfecting their recipes for decades. It's fast, it's cheap, and it's the most honest expression of what Shanghai actually tastes like day to day." },
  { name: "Fine Dining", slug: "fine-dining", description: "Shanghai's fine dining scene has undergone a remarkable transformation over the past two decades, evolving from a handful of hotel restaurants into one of Asia's most exciting gastronomic destinations. The city now boasts multiple Michelin-starred establishments that span the full spectrum: from Fu He Hui's transcendent vegetarian tasting menus that turn mushrooms and bamboo into haute cuisine, to Xin Rong Ji's refined interpretations of Taizhou and Shanghainese classics served in rooms that rival Europe's finest, to Jean-Georges Vongerichten's Mercato where Italian and Shanghai sensibilities merge on the Bund. What distinguishes Shanghai fine dining is its relationship with seasonality and local ingredients — chefs build entire menus around the arrival of hairy crab in autumn, spring bamboo shoots, and the dozens of river fish species that define Yangtze cuisine. Service standards have risen dramatically, with many restaurants now operating at levels comparable to top tables in Paris and Tokyo. The ambiance ranges from the historic grandeur of YongFoo Elite's 1930s mansion to the sleek, modern elegance of restaurants in the Bund and Lujiazui skyline. Tasting menus typically span 8-15 courses and run from RMB 500 to over RMB 2,000 per person, often paired with rare teas or an increasingly sophisticated wine program. For those seeking the pinnacle of Shanghai dining, reservations are essential — the best tables at the most celebrated restaurants can be booked solid weeks or even months in advance." },
];

export const cities = [
  { name: "New York", slug: "nyc", count: 28 },
  { name: "Los Angeles", slug: "los-angeles", count: 19 },
  { name: "London", slug: "london", count: 14 },
  { name: "Sydney", slug: "sydney", count: 11 },
];

export const faqs = [
  { q: "What is Shanghai cuisine known for?", a: "Shanghai cuisine, or Benbang cuisine, is known for its sweet and savory soy-based braised dishes, soup dumplings (xiaolongbao), and an emphasis on fresh seafood and seasonal ingredients like hairy crab." },
  { q: "What is the average cost of a Shanghai restaurant meal?", a: "Street food and casual spots range from RMB 20-80. Mid-range restaurants average RMB 100-250 per person. Fine dining tasting menus start from RMB 500 and can exceed RMB 2,000." },
  { q: "When is hairy crab season in Shanghai?", a: "Hairy crab season runs from September through December, with October and November being peak months when the crabs are at their richest and most flavorful." },
  { q: "Do I need reservations for Shanghai restaurants?", a: "For popular and fine dining restaurants, reservations are strongly recommended, especially on weekends and during holidays. Many top restaurants book out weeks in advance." },
  { q: "What are the must-try dishes at a Shanghai restaurant?", a: "Essentials include xiaolongbao (soup dumplings), shengjianbao (pan-fried buns), hongshao rou (red braised pork), yan du xian (bamboo shoot soup), and hairy crab in autumn." },
  { q: "Are there vegetarian Shanghai restaurants?", a: "Yes! Shanghai has a strong Buddhist vegetarian tradition. Restaurants like Fu He Hui offer world-class vegetarian tasting menus, and many local spots serve vegetable-focused dishes." },
];

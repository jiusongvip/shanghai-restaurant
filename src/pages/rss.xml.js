import rss from "@astrojs/rss";

const posts = [
  { title: "Shanghai Street Food: 12 Must-Try Stalls in 2026", date: "2026-07-15", excerpt: "From shengjianbao in the French Concession to scallion pancakes near the Bund, these are the street food stalls that define Shanghai.", slug: "shanghai-street-food-2026" },
  { title: "The Ultimate Guide to Hairy Crab Season in Shanghai", date: "2026-07-02", excerpt: "Everything you need to know about Shanghai's most anticipated food event: when to go, where to eat, and how to order.", slug: "hairy-crab-season-guide" },
  { title: "Michelin Guide Shanghai 2026: All the Stars", date: "2026-06-18", excerpt: "A complete rundown of every Michelin-starred restaurant in Shanghai, from three-star temples to new one-star entries.", slug: "michelin-shanghai-2026" },
  { title: "Shanghai vs Hong Kong: The Great Dim Sum Debate", date: "2026-06-01", excerpt: "Two great food cities, two dim sum traditions. We compare the xiaolongbao, shao mai, and wontons from both cities side by side.", slug: "shanghai-vs-hong-kong-dim-sum" },
  { title: "Vegetarian Shanghai: A Plant-Based Food Guide", date: "2026-05-14", excerpt: "Shanghai has a rich Buddhist vegetarian tradition. From temple restaurants to modern plant-based dining, here is where to eat.", slug: "vegetarian-shanghai-guide" },
];

export async function GET(context) {
  return rss({
    title: "Best Shanghai Restaurants — Blog & Guides",
    description: "Expert-curated Shanghai restaurant guides, food stories, and authentic cuisine recommendations from our team of food critics.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en</language>`,
  });
}

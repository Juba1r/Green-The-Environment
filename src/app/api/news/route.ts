import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Current date is 2026-03-01
    const RSS_URL = "https://www.thedailystar.net/frontpage/rss.xml";

    const response = await fetch(RSS_URL, {
      next: { revalidate: 60 }, // Cache's only for 1 minute for "live" feel
    });

    const xmlData = await response.text();
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;

    const cleanContent = (str: string) => {
      if (!str) return "";
      return str
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
        .replace(/<[^>]*>?/gm, "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .trim();
    };

    const items = [];
    let match;

    while ((match = itemRegex.exec(xmlData)) !== null) {
      const itemContent = match[1];

      const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/i);
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/i);
      const descMatch = itemContent.match(
        /<description>([\s\S]*?)<\/description>/i,
      );
      const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);

      const title = cleanContent(titleMatch ? titleMatch[1] : "");
      const link = linkMatch ? linkMatch[1].trim() : "";
      const description = descMatch ? cleanContent(descMatch[1]) : "";
      const pubDate = pubDateMatch ? pubDateMatch[1] : new Date().toISOString();

      let image = "";
      const mediaMatch = itemContent.match(/<media:content[^>]*url="([^"]+)"/i);
      const thumbMatch = itemContent.match(
        /<media:thumbnail[^>]*url="([^"]+)"/i,
      );
      const enclosureMatch = itemContent.match(/<enclosure[^>]*url="([^"]+)"/i);
      const imgInDescMatch = (descMatch ? descMatch[1] : "").match(
        /<img[^>]*src="([^"]+)"/i,
      );

      if (mediaMatch) image = mediaMatch[1];
      else if (thumbMatch) image = thumbMatch[1];
      else if (enclosureMatch) image = enclosureMatch[1];
      else if (imgInDescMatch) image = imgInDescMatch[1];

      if (title && link) {
        items.push({
          title,
          link: link.startsWith("http")
            ? link
            : `https://www.thedailystar.net${link}`,
          description,
          pubDate,
          image:
            image ||
            "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&q=80&w=1000",
          source: "The Daily Star",
        });
      }
    }

    // Sort by publication date to ensure most recent is first
    items.sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
    );

    // Take top 6
    const topItems = items.slice(0, 6);

    return NextResponse.json({ articles: topItems });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { articles: [], error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}

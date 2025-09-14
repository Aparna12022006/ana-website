
import { NextRequest, NextResponse } from "next/server";

type SpaceflightArticle = {
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
  news_site: string;
};

type SpaceflightResponse = {
  results: SpaceflightArticle[];
};

type GNewsArticle = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source?: { name: string; url?: string };
};

const FALLBACK_IMAGE = "/default-news.jpg"; // Put a placeholder image inside /public folder
const GNEWS_API_KEY = process.env.GNEWS_API_KEY; // Use only env key

// Helper: check if URL is reachable
async function isUrlReachable(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = (searchParams.get("keyword") || "aerospace").slice(0, 50);

  try {
    let articles: any[] = [];

    // ---------------- AEROSPACE → Spaceflight API ----------------
    if (keyword.toLowerCase() === "aerospace") {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=6&title_contains=${encodeURIComponent(
          keyword
        )}`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        console.error("Spaceflight fetch failed:", response.statusText);
        return NextResponse.json({ articles: [] });
      }

      const data: SpaceflightResponse = await response.json();

      let filtered = (data.results || []).filter((article) => {
        const hasValidTitle = article.title?.trim().length > 0;
        const hasValidUrl = article.url?.startsWith("http");
        return hasValidTitle && hasValidUrl;
      });

      // Optional URL reachability check
      try {
        const urlCheckResults = await Promise.all(
          filtered.map(async (article) => {
            let isReachable = true;
            try {
              isReachable = await isUrlReachable(article.url);
            } catch {
              isReachable = false;
            }
            return { ...article, isReachable };
          })
        );
        filtered = urlCheckResults.filter((a) => a.isReachable);
      } catch (err) {
        console.warn("URL reachability check failed:", err);
      }

      if (filtered.length > 0) {
        filtered.sort(
          (a, b) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
        );
      }

      articles = filtered.map((article) => ({
        title: article.title,
        description: article.summary,
        url: article.url,
        urlToImage: article.image_url || FALLBACK_IMAGE,
        publishedAt: article.published_at,
        source: { name: article.news_site || "Spaceflight News" },
      }));
    }

    // ---------------- AERONAUTICS → GNews API ----------------
    else if (keyword.toLowerCase() === "aeronautics") {
      if (!GNEWS_API_KEY) {
        console.error("Missing GNews API Key");
        return NextResponse.json({ articles: [] });
      }

      // Fetch primary keyword: aeronautics
      let response = await fetch(
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(
          keyword
        )}&lang=en&country=us&max=6&apikey=${GNEWS_API_KEY}`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        console.error("GNews fetch failed:", response.statusText);
        return NextResponse.json({ articles: [] });
      }

      let data = await response.json();
      console.log("GNews aeronautics response:", data);

      let filtered: GNewsArticle[] = (data.articles || []).filter(
        (article: GNewsArticle) =>
          article.title && article.url?.startsWith("http")
      );

      // Fallback to "aviation" if aeronautics has 0 articles
      if (filtered.length === 0) {
        console.warn("No aeronautics news → retrying with aviation...");
        response = await fetch(
          `https://gnews.io/api/v4/search?q=aviation&lang=en&country=us&max=6&apikey=${GNEWS_API_KEY}`,
          { cache: "no-store" }
        );
        data = await response.json();
        console.log("GNews aviation fallback response:", data);
        filtered = (data.articles || []);
      }

      if (filtered.length > 0) {
        filtered.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      }

      articles = filtered.map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.image || FALLBACK_IMAGE,
        publishedAt: article.publishedAt,
        source: { name: article.source?.name || "GNews" },
      }));
    }

    // ---------------- FALLBACK → Aerospace ----------------
    else {
      return NextResponse.redirect(
        new URL(`/api/news?keyword=aerospace`, request.url)
      );
    }

    return NextResponse.json({ articles });
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(
      { error: (error as Error).message, articles: [] },
      { status: 500 }
    );
  }
}

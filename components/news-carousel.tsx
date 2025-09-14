"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Clock,
} from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface NewsCarouselProps {
  title: string;
  keyword: string;
  className?: string;
}

export function NewsCarousel({
  title,
  keyword,
  className = "",
}: NewsCarouselProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchNews();
  }, [keyword]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`/api/news?keyword=${encodeURIComponent(keyword)}`);
      if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
      const data = await res.json();

      setArticles(data.articles ?? []);
    } catch (err) {
      setError("Failed to fetch news articles");
      console.error("News fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (loading) {
    return (
      <div className={`py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          </div>
          <LoadingSpinner size="lg" text={`Loading ${keyword.toLowerCase()} news...`} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={fetchNews} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className={`py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground">No news articles available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  const currentArticle = articles[currentIndex];

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest developments
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={
                      currentArticle.urlToImage ||
                      `/placeholder.svg?height=320&width=400&query=${keyword} news`
                    }
                    alt={currentArticle.title}
                    onError={(e) => {
                      e.currentTarget.src = `/placeholder.svg?height=320&width=400&query=${keyword} news`;
                    }}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/90 text-primary-foreground"
                    >
                      {currentArticle.source.name}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(currentArticle.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {getTimeAgo(currentArticle.publishedAt)}
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight text-foreground">
                      {currentArticle.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {currentArticle.description}
                    </p>
                  </div>

                  <Button asChild className="w-fit">
                    <a href={currentArticle.url} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          {articles.length > 1 && (
            <div className="flex items-center justify-between mt-8">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



/*"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Clock } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface NewsArticle {
  title: string
  description: string
  url: string
  urlToImage?: string
  publishedAt: string
  source: {
    name: string
  }
}

interface NewsCarouselProps {
  title: string
  keyword: string
  className?: string
}

export function NewsCarousel({ title, keyword, className = "" }: NewsCarouselProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetchNews()
  }, [keyword])

  const fetchNews = async () => {
  try {
    setLoading(true);
    setError(null);

    const res = await fetch(`/api/news?keyword=${encodeURIComponent(keyword)}`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
    const data = await res.json();

    if (!data.articles || data.articles.length === 0) {
      // fallback: fetch older news (last 30 days)
      const fallbackRes = await fetch(`/api/news?keyword=${encodeURIComponent(keyword)}&days=30`);
      const fallbackData = await fallbackRes.json();
      setArticles(fallbackData.articles ?? []);
    } else {
      setArticles(data.articles ?? []);
    }
  } catch (err) {
    setError("Failed to fetch news articles");
    console.error("News fetch error:", err);
  } finally {
    setLoading(false);
  }
};



  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  if (loading) {
    return (
      <div className={`py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          </div>
          <LoadingSpinner size="lg" text={`Loading ${keyword.toLowerCase()} news...`} />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={fetchNews} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className={`py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground">No news articles available at the moment.</p>
          </div>
        </div>
      </div>
    )
  }

  const currentArticle = articles[currentIndex]

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">Stay updated with the latest developments</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image *//*}

            
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={currentArticle.urlToImage || `/placeholder.svg?height=320&width=400&query=${keyword} news`}
                    alt={currentArticle.title}
                     onError={(e) => {
                      e.currentTarget.src = `/placeholder.svg?height=320&width=400&query=${keyword} news`;
                    }}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {currentArticle.source.name}
                    </Badge>
                  </div>
                </div>

                {/* Content *//*}

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(currentArticle.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {getTimeAgo(currentArticle.publishedAt)}
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight text-foreground">
                      {currentArticle.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">{currentArticle.description}</p>
                  </div>

                  <Button asChild className="w-fit">
                    <a href={currentArticle.url} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation *//*}

          
          {articles.length > 1 && (
            <div className="flex items-center justify-between mt-8">
              <Button onClick={prevSlide} variant="outline" size="icon" className="rounded-full bg-transparent">
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button onClick={nextSlide} variant="outline" size="icon" className="rounded-full bg-transparent">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
*/

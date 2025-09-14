import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MemberShowcase } from "@/components/member-showcase"
import { NewsCarousel } from "@/components/news-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, Newspaper, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    // Main container with the dark background from the image
    <div className="min-h-screen bg-[#070e17] text-gray-200">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#070e17] via-[#091522] to-[#070e17]" />
        <div className="absolute inset-0 bg-[url('/space-pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-float">
              <Rocket className="h-20 w-20 mx-auto text-cyan-400 animate-glow" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Aeronautics & Aerospace Club
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Exploring the frontiers of aviation and space technology through innovation, research, and hands-on
              learning experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="/about">
                  Discover Our Mission
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full bg-transparent border-gray-500 text-gray-300 hover:bg-gray-800">
                <Link href="/team">
                  Meet Our Team
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <MemberShowcase />

      {/* Quick Navigation Cards */}
      <section className="py-20 bg-[#091522]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Explore Our Universe</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover the different aspects of our club and join us in our journey to the stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Users className="h-12 w-12 mx-auto text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Our Team</h3>
                <p className="text-gray-400 mb-6">
                  Meet the passionate individuals driving innovation in aerospace technology.
                </p>
                
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-slate-700 hover:border-green-500/20 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Rocket className="h-12 w-12 mx-auto text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">R&D Wing</h3>
                <p className="text-gray-400 mb-6">
                  Cutting-edge research and development in aviation and space exploration.
                </p>
                
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Newspaper className="h-12 w-12 mx-auto text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Latest News</h3>
                <p className="text-gray-400 mb-6">
                  Stay updated with the latest developments in aerospace technology.
                </p>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NewsCarousel title="Latest Aeronautics News" keyword="Aeronautics" className="bg-[#070e17]" />

      <NewsCarousel title="Latest Aerospace News" keyword="Aerospace" className="bg-[#091522]" />

      <ScrollToTop />
    </div>
  )
}
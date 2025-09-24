import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MemberShowcase } from "@/components/member-showcase"
import { NewsCarousel } from "@/components/news-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, Newspaper, ChevronRight, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    // Main container with the dark background from the image
    <div className="min-h-screen bg-[#070e17] text-gray-200">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-start justify-center overflow-hidden pt-16 pb-4">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#070e17] via-[#091522] to-[#070e17]" />
        <div className="absolute inset-0 bg-[url('/space-pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced College Name Section */}
            <div className="mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="relative">
                {/* College Logo */}
                <div className="mb-3 flex justify-center">
                  <div className="relative group">
                    <div className="w-18 h-18 bg-gradient-to-br from-blue-900/40 via-slate-800/30 to-cyan-900/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-cyan-400/30 group-hover:scale-105 transition-all duration-500 group-hover:shadow-cyan-400/20 group-hover:shadow-2xl">
                      <img 
                        src="/college-logo.png" 
                        alt="Geethanjali College Logo"
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full opacity-20 blur animate-pulse" />
                  </div>
                </div>

                {/* College Name with Enhanced Typography */}
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold animate-pulse">
                    Proudly Presented By
                  </p>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight hover:from-cyan-300 hover:via-blue-300 hover:to-indigo-300 transition-all duration-500 cursor-default">
                    Geethanjali College of Engineering & Technology
                  </h2>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-center items-center mt-3 space-x-3">
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-blue-500/60 w-12 sm:w-20 animate-pulse"></div>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-cyan-400 animate-bounce" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-md animate-ping" />
                  </div>
                  <div className="h-px bg-gradient-to-l from-transparent via-cyan-400/60 to-blue-500/60 w-12 sm:w-20 animate-pulse"></div>
                </div>

                {/* Subtle Background Glow */}
                <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-cyan-500/5 via-blue-500/10 to-indigo-500/5 blur-3xl rounded-full opacity-50" />
              </div>
            </div>
            
            {/* Club Section */}
            <div className="mb-8 animate-float">
              <div className="relative group h-24 w-24 mx-auto">
                <img
                  src="/club_logo.png"
                  alt="A&A Club Logo"
                  className="object-contain w-full h-full"
                />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>



            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Aeronautics & Aerospace Club
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Exploring the frontiers of aviation and space technology through innovation, research, and hands-on
              learning experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <Button asChild size="lg" className="text-base px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <Link href="/about">
                  Discover Our Mission
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-6 py-3 rounded-full bg-transparent border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300">
                <Link href="/team">
                  Meet Our Team
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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
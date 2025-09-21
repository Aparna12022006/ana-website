import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, Rocket, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge 
              variant="secondary" 
              className="mb-6 bg-transparent text-cyan-400 border-cyan-400 text-sm md:text-base"
            >
              Our Journey
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Pioneering the Future of Flight
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-400 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              We are a passionate community of students dedicated to advancing aerospace technology through innovation,
              collaboration, and hands-on learning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-400/10 rounded-full mr-4">
                  <Target className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                To foster innovation and excellence in aerospace engineering by providing students with hands-on
                experience, cutting-edge research opportunities, and a collaborative environment that prepares them to
                become the next generation of aerospace leaders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Hands-on Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Research Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Industry Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Innovation Focus</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/ourmission.png"
              alt="Our Mission"
              width={500}
              height={300}
              className="rounded-lg object-contain shadow-lg"
              priority
            />
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/ourvision.jpg"
                alt="Our Vision"
                width={500}
                height={300}
                className="rounded-lg object-contain shadow-lg"
                priority
              />
            </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-400/10 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                To be the premier aerospace club that bridges the gap between academic learning and industry
                application, inspiring students to push the boundaries of what's possible in aviation and space
                exploration while contributing to humanity's journey to the stars.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Global Impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Sustainable Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Space Exploration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm font-medium text-gray-400">Future Leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide our journey towards aerospace excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Users className="h-12 w-12 mx-auto text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Collaboration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Working together to achieve extraordinary results through teamwork and shared knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-500/20 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Rocket className="h-12 w-12 mx-auto text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Innovation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Pushing boundaries and exploring new frontiers in aerospace technology and design.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Award className="h-12 w-12 mx-auto text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Excellence</h3>
                <p className="text-gray-400 leading-relaxed">
                  Striving for the highest standards in everything we do, from research to implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-cyan-900 to-green-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Globe className="h-16 w-16 mx-auto text-white mb-6 animate-float" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Join Our Mission?</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Be part of a community that's shaping the future of aerospace technology. Whether you're interested in
              research, hands-on projects, or industry connections, we have a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="/team">Meet Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full bg-transparent border-gray-500 text-gray-300 hover:bg-gray-800">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
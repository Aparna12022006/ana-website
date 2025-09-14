"use client"

import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TeamSection } from "@/components/team-section"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, UserCheck } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/team-collaboration-pattern.png')] opacity-5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/10 text-primary border-primary/20"
            >
              Our Team
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Meet Our Aerospace Pioneers
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals driving innovation and excellence in aerospace technology
            </p>
          </div>
        </div>
      </section>

      {/* Core Panel Section */}
      <TeamSection
        title="Core Panel"
        subtitle="The leadership team guiding our aerospace journey"
        icon={Crown}
        sectionType="core"
        className="py-20 bg-background"
      />

      {/* Sub-Core Section */}
      <TeamSection
        title="Web Development Team"
        subtitle="Tech architects powering our digital vision"
        icon={Star}
        sectionType="subcore"
        className="py-20 bg-muted/30"
      />

      {/* Members Section */}
      <TeamSection
        title="Student Coordinators"
        subtitle="Our dedicated community of aerospace enthusiasts"
        icon={UserCheck}
        sectionType="members"
        className="py-20 bg-background"
      />

      <ScrollToTop />
    </div>
  )
}
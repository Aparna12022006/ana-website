import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import JoinResearchForm from "@/components/JoinResearchForm";
// server component
import { NewsCarousel } from "@/components/news-carousel";

import {
  Rocket,
  Microscope,
  Cpu,
  Zap,
  Satellite,
  Plane,
  Cog,
  FlaskConical,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
} from "lucide-react"

export default function RDWingPage() {
  const researchAreas = [
    {
      icon: Rocket,
      title: "Propulsion Systems",
      description: "Advanced rocket engine design, hybrid propulsion, and green propellants research",
      projects: ["Hybrid Rocket Engine Development", "Green Propellant Research", "Nozzle Design Optimization"],
    },
    {
      icon: Satellite,
      title: "Satellite Technology",
      description: "CubeSat development, orbital mechanics, and space communication systems",
      projects: ["CubeSat Mission Planning", "Antenna Design & Testing", "Orbital Trajectory Analysis"],
    },
    {
      icon: Plane,
      title: "Aerodynamics",
      description: "Computational fluid dynamics, wind tunnel testing, and aircraft design optimization",
      projects: ["CFD Flow Analysis", "Wind Tunnel Experiments", "Wing Design Optimization"],
    },
    {
      icon: Cpu,
      title: "Avionics & Control",
      description: "Flight control systems, autonomous navigation, and embedded systems development",
      projects: ["Autopilot System Design", "Navigation Algorithm Development", "Embedded Flight Controllers"],
    },
    {
      icon: Zap,
      title: "Power Systems",
      description: "Solar panel efficiency, battery management, and power distribution for aerospace applications",
      projects: ["Solar Panel Optimization", "Battery Management Systems", "Power Distribution Networks"],
    },
    {
      icon: FlaskConical,
      title: "Materials Science",
      description: "Composite materials, thermal protection systems, and lightweight structures",
      projects: ["Composite Material Testing", "Thermal Barrier Coatings", "Lightweight Structure Design"],
    },
  ]

  const opportunities = [
    {
      icon: Microscope,
      title: "Research Projects",
      description: "Lead cutting-edge research in aerospace technologies with faculty mentorship",
    },
    {
      icon: Cog,
      title: "Hands-on Building",
      description: "Design, build, and test real aerospace systems from concept to flight",
    },
    {
      icon: Users,
      title: "Industry Collaboration",
      description: "Work with aerospace companies and research institutions on live projects",
    },
    {
      icon: Target,
      title: "Competition Teams",
      description: "Participate in national and international aerospace design competitions",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${encodeURIComponent("38B6FF")}' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
              <Lightbulb className="w-4 h-4 mr-2" />
              Innovation Hub
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              R&D Wing
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Where Innovation Takes Flight
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              The beating heart of our aerospace club, where theoretical knowledge transforms into groundbreaking
              innovations and tomorrow's aerospace technologies are born today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Pioneering the Future of Aerospace</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our R&D Wing stands as the innovation powerhouse of the Aeronautics & Aerospace Club, where passionate
              students collaborate with industry experts to push the boundaries of what's possible in aviation and space
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">What Makes Us Unique</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Direct access to cutting-edge aerospace research facilities and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Mentorship from renowned faculty and industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Interdisciplinary approach combining multiple engineering domains</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Real-world problem solving with immediate practical applications</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="p-6 bg-primary/20 rounded-full w-fit mx-auto">
                    <Rocket className="h-16 w-16 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">R&D Innovation Lab</h3>
                    <p className="text-muted-foreground">Where ideas become reality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Research Areas & Specializations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse research domains where students dive deep into specialized aerospace technologies and
              contribute to groundbreaking discoveries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{area.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Current Projects:</h4>
                    <ul className="space-y-1">
                      {area.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Hands-On Research Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the thrill of discovery through immersive research programs that bridge the gap between
              academic learning and real-world aerospace innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <opportunity.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {opportunity.title}
                  </h3>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              Coming Soon
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Upcoming Research Projects</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're constantly expanding our research horizons. Stay tuned for exciting new projects in advanced
              propulsion systems, space exploration technologies, and sustainable aviation solutions.
            </p>
            <div className="bg-muted/50 rounded-2xl p-12 border-2 border-dashed border-muted-foreground/20">
              <Rocket className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground/60 text-lg">
                Project details will be announced soon.
                <br />
                Join our R&D Wing to be the first to know!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Ready to Shape the Future of Aerospace?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our R&D Wing and be part of a community that's pushing the boundaries of aerospace technology.
              Whether you're interested in propulsion, avionics, materials, or space systems, there's a place for your
              passion here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
            </div>
          </div>
        </div>
      </section>

      {/* Join Research Form Section */}
      <section className="py-20 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Users className="w-4 h-4 mr-2" />
                Apply Now
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Join Our Research Team
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Take the first step towards becoming part of our innovative research community. Fill out the form below
                and let us know about your interests and experience.
              </p>
            </div>
            
            {/* Form Container with Better Styling */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border-2 border-muted/20 p-8 shadow-xl">
              <JoinResearchForm />
            </div>
            
            {/* Additional Information */}
            <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Quick Response</h3>
                <p className="text-sm text-muted-foreground">We'll review your application within 48 hours</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Personal Interview</h3>
                <p className="text-sm text-muted-foreground">Meet with our team to discuss your interests</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Start Building</h3>
                <p className="text-sm text-muted-foreground">Begin working on cutting-edge projects immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, ArrowLeft, Rocket, Satellite, Plane } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Floating Aerospace Elements */}
      <div className="absolute top-20 left-20 opacity-10 animate-pulse">
        <Rocket className="h-16 w-16 text-primary rotate-45" />
      </div>
      <div className="absolute top-40 right-32 opacity-10 animate-pulse delay-1000">
        <Satellite className="h-12 w-12 text-secondary" />
      </div>
      <div className="absolute bottom-32 left-32 opacity-10 animate-pulse delay-2000">
        <Plane className="h-14 w-14 text-primary -rotate-12" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10 animate-pulse delay-500">
        <Rocket className="h-10 w-10 text-secondary rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
            Houston, We Have a Problem
          </Badge>

          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Looks like this page has drifted into deep space. Let's get you back to mission control.
            </p>
          </div>

          {/* Aerospace-themed illustration */}
          <div className="mb-12 relative">
            <div className="mx-auto w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse" />
              <Rocket className="h-32 w-32 text-primary/60 animate-bounce" />
              <div className="absolute top-8 right-8">
                <div className="w-2 h-2 bg-secondary rounded-full animate-ping" />
              </div>
              <div className="absolute bottom-12 left-12">
                <div className="w-1 h-1 bg-primary rounded-full animate-ping delay-500" />
              </div>
              <div className="absolute top-16 left-8">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping delay-1000" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Base
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact our ground crew
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

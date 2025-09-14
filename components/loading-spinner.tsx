import { Rocket } from "lucide-react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

export function LoadingSpinner({ size = "md", text = "Loading..." }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative">
        <Rocket className={`${sizeClasses[size]} text-primary animate-spin`} />
        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg animate-pulse" />
      </div>
      {text && <p className="text-sm text-muted-foreground font-medium">{text}</p>}
    </div>
  )
}

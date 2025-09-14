import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aeronautics & Aerospace Club | Geethanjali College of Engineering and Technology",
  description:
    "Official website of the Aeronautics & Aerospace Club - Exploring the frontiers of aviation and space technology",
  keywords: "aeronautics, aerospace, aviation, space, engineering, college club, research",
  authors: [{ name: "Aeronautics & Aerospace Club" }],
  creator: "Aeronautics & Aerospace Club",
  publisher: "Geethanjali College of Engineering and Technology",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Aeronautics & Aerospace Club",
    description: "Exploring the frontiers of aviation and space technology",
    siteName: "Aeronautics & Aerospace Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeronautics & Aerospace Club",
    description: "Exploring the frontiers of aviation and space technology",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>

      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

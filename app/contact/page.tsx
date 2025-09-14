// app/contact/page.tsx
"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Copy,
  CheckCircle,
  Send,
  Users,
  Clock,
  MessageSquare,
} from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast" // Assuming you have a toast component

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const clubEmail = "anaclubgcet@gmail.com"


  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        })
        setFormData({ name: "", email: "", subject: "", message: "" }) // Reset form on success
      } else {
        const errorData = await response.json()
        toast({
          title: "Failed to Send Message",
          description: errorData.message || "An error occurred. Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please check your internet connection.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: clubEmail,
      action: () => copyToClipboard(clubEmail),
      actionText: copiedEmail ? "Copied!" : "Copy Email",
      actionIcon: copiedEmail ? CheckCircle : Copy,
    },

  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/aeronautics-and-aerospace-club-of-gcet",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/anaclubgcet",
      color: "hover:text-pink-600",
    },
    {
      icon: Twitter,
      name: "X (Twitter)",
      url: "https://twitter.com/Anaclubgcet",
      color: "hover:text-blue-400",
    },
  ]

  const quickInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Engineering Building, Room 301\nCollege Campus",
    },
    {
      icon: Clock,
      title: "Meeting Hours",
      value: "Monday to Saturday 1:00 PM - 1:50 PM\n",
    },
    {
      icon: Users,
      title: "Membership",
      value: "Open to all students\nNo prerequisites required",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${encodeURIComponent("38B6FF")}' fillOpacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Ready to join our aerospace journey? Have questions about our projects? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect with us. We're here to answer your questions and welcome new members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{method.description}</p>
                  <p className="font-mono text-sm bg-muted/50 p-2 rounded">{method.value}</p>
                  <Button onClick={method.action} className="w-full bg-transparent" variant="outline">
                    <span className="flex items-center justify-center"></span>
                    <method.actionIcon className="w-4 h-4 mr-2" />
                    {method.actionText}
                  
                </Button>
              </CardContent>
              </Card>
            ))}
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={`p-4 ${social.color} transition-colors duration-300`}
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>
        </div>
    </div>
      </section >

    {/* Contact Form & Info Section */ }
    < section className = "py-20 bg-muted/30" >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Us a Message</h3>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Information</h3>
            <div className="space-y-6">
              {quickInfo.map((info, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section >

    <ScrollToTop />
    </div >
  )
}
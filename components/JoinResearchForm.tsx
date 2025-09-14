"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Hash, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  Code, 
  Mail, 
  Phone, 
  Plus,
  Rocket,
  CheckCircle2,
  Loader2,
  AlertCircle
} from "lucide-react";

export default function JoinResearchForm() {
  const [formData, setFormData] = useState({
    name: "",
    rollnumber: "",
    year: "",
    branch: "",
    reason: "",
    skills: "",
    email: "",
    phone: "",
    other: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/join-research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your application has been sent!");
        setIsSuccess(true);
        setFormData({
          name: "",
          rollnumber: "",
          year: "",
          branch: "",
          reason: "",
          skills: "",
          email: "",
          phone: "",
          other: "",
        });
      } else {
        const data = await res.json();
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Failed to send. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-6 p-8">
        <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">Application Submitted!</h3>
          <p className="text-muted-foreground">
            Thank you for your interest in joining our R&D Wing. We'll review your application and get back to you within 48 hours.
          </p>
        </div>
        <Button 
          onClick={() => {
            setIsSuccess(false);
            setStatus("");
          }}
          variant="outline"
          className="mt-4"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="space-y-8">
        {/* Personal Information Section */}
        <Card className="border-2 border-primary/10 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 font-medium">
                  <User className="h-4 w-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rollnumber" className="flex items-center gap-2 font-medium">
                  <Hash className="h-4 w-4 text-primary" />
                  Roll Number *
                </Label>
                <Input
                  id="rollnumber"
                  name="rollnumber"
                  placeholder="Enter your roll number"
                  value={formData.rollnumber}
                  onChange={handleChange}
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="year" className="flex items-center gap-2 font-medium">
                  <Calendar className="h-4 w-4 text-primary" />
                  Year of Study *
                </Label>
                <Input
                  id="year"
                  name="year"
                  placeholder="e.g., 2nd Year, 3rd Year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="branch" className="flex items-center gap-2 font-medium">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Branch/Department *
                </Label>
                <Input
                  id="branch"
                  name="branch"
                  placeholder="e.g., Computer Science, Mechanical"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information Section */}
        <Card className="border-2 border-secondary/10 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Mail className="h-5 w-5 text-secondary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 font-medium">
                  <Mail className="h-4 w-4 text-secondary" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 border-2 focus:border-secondary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 font-medium">
                  <Phone className="h-4 w-4 text-secondary" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 12345 67890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 border-2 focus:border-secondary transition-colors"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Interest Section */}
        <Card className="border-2 border-primary/10 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Rocket className="h-5 w-5 text-primary" />
              Research Interest & Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reason" className="flex items-center gap-2 font-medium">
                <MessageSquare className="h-4 w-4 text-primary" />
                Why do you want to join our R&D Wing? *
              </Label>
              <Textarea
                id="reason"
                name="reason"
                placeholder="Tell us about your passion for aerospace research, what motivates you, and what you hope to achieve..."
                value={formData.reason}
                onChange={handleChange}
                required
                rows={4}
                className="border-2 focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills" className="flex items-center gap-2 font-medium">
                <Code className="h-4 w-4 text-primary" />
                Technical Skills & Knowledge *
              </Label>
              <Textarea
                id="skills"
                name="skills"
                placeholder="List your programming languages, software tools, engineering concepts, projects you've worked on, etc."
                value={formData.skills}
                onChange={handleChange}
                required
                rows={4}
                className="border-2 focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="other" className="flex items-center gap-2 font-medium">
                <Plus className="h-4 w-4 text-primary" />
                Additional Comments or Questions
              </Label>
              <Textarea
                id="other"
                name="other"
                placeholder="Any other information you'd like to share, questions about the program, or specific research areas of interest..."
                value={formData.other}
                onChange={handleChange}
                rows={3}
                className="border-2 focus:border-primary transition-colors resize-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Section */}
        <div className="text-center space-y-4">
          <Button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 h-12 text-lg font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                <Rocket className="mr-2 h-5 w-5" />
                Submit Application
              </>
            )}
          </Button>

          {status && (
            <div className={`flex items-center justify-center gap-2 p-3 rounded-lg ${
              status.includes("sent") || status.includes("success") 
                ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400" 
                : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
            }`}>
              {status.includes("sent") || status.includes("success") ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
              <span className="font-medium">{status}</span>
            </div>
          )}
        </div>
      </div>

      {/* Help Section */}
      <Card className="bg-muted/30 border-dashed border-2">
        <CardContent className="p-6 text-center">
          <div className="space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Need Help?
            </Badge>
            <p className="text-muted-foreground text-sm">
              Having trouble with the form? Reach out to us at{" "}
              <span className="font-medium text-primary">anaclubgcet@gmail.com</span>{" "}
              or contact us through our social media channels.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
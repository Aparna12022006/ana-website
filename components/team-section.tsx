"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Linkedin, Github, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TeamMember {
  id: string
  name: string
  role: string
  year?: string
  branch?: string
  department?: string
  image?: string
  bio?: string
  email?: string
  linkedin?: string
  github?: string
}

interface TeamSectionProps {
  title: string
  subtitle: string
  icon: LucideIcon
  sectionType: "faculty" | "core" | "subcore" | "members"
  className?: string
}

const coreMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mrs. E Pravalika",
    role: "Faculty Coordinator",
    branch: "AIML",
    bio: "Leading the club's vision and strategic initiatives in aerospace innovation, with a strong passion for sustainable aviation and space exploration technologies."
  },
  {
    id: "2",
    name: "Marella Gagan Hari Kiran",
    role: "Chairman",
    year: "3rd",
    branch: "AIML",
    bio: "Leading the club's vision and strategic initiatives in aerospace innovation. Passionate about sustainable aviation and space exploration technologies."
  },
  {
    id: "3",
    name: "Prayaga Sri Ram Pranav",
    role: "Vice Chairman",
    year: "3rd",
    branch: "CSE",
    bio: "Coordinating technical projects and research collaborations. Specializes in propulsion systems and aerodynamics."
  },
  {
    id: "4",
    name: "Viswanadhapalli Sandhya",
    role: "Technical Lead",
    year: "3rd",
    branch: "AIML",
    bio: "Overseeing R&D projects and technical workshops. Expert in aircraft design and computational fluid dynamics."
  },
  {
    id: "5",
    name: "B Saketh Rao",
    role: "General Secretary",
    year: "3rd",
    branch: "CSE",
    bio: "Managing club operations and member communications. Developing digital solutions for aerospace applications."
  },
  {
    id: "6",
    name: "Muthineni Varshitha Verma",
    role: "Treasurer",
    year: "3rd",
    branch: "AIML",
    bio: "Financial planning and resource management for club activities. Working on avionics and control systems."
  },
  {
    id: "7",
    name: "N Akash Reddy",
    role: "PR, Media & Outreach",
    year: "3rd",
    branch: "CSE",
    bio: "Managing social media presence and external communications. Creating engaging content about aerospace innovations."
  },
  {
    id: "8",
    name: "K Keerthana",
    role: "Design Head",
    year: "3rd",
    branch: "CSE",
    bio: "Leading design initiatives and creating visual content for aerospace projects."
  },
  {
    id: "9",
    name: "R Satya Sri Varsha",
    role: "Design Head",
    year: "2nd",
    branch: "CSE-DS",
    bio: "Leading design initiatives and creating visual content for aeronautics projects."
  },
]

const subcoreMembers: TeamMember[] = [
  {
    id: "10",
    name: "Minnekanti Sai Sree Harsha",
    role: "Team Lead & Frontend Architect",
    year: "3rd",
    branch: "CSE",
    bio: "Crafting exceptional user experiences and leading frontend development initiatives for aerospace web solutions."
  },
  {
    id: "11",
    name: "Aparna",
    role: "Backend Systems Engineer",
    year: "3rd",
    branch: "CSE",
    bio: "Building robust backend infrastructure and APIs for aerospace data analysis and flight simulation systems."
  },
  {
    id: "12",
    name: "M V Abhiram",
    role: "Backend Developer",
    year: "3rd",
    branch: "AIML",
    bio: "Creating end-to-end solutions bridging frontend and backend for aerospace project management tools."
  },
  {
    id: "13",
    name: "Talasila Sathvika",
    role: "Cybersecurity Specialist",
    year: "3rd",
    branch: "CSE",
    bio: "Specializing in cybersecurity and creating end-to-end solutions that bridge frontend and backend systems for aerospace project management tools."
  },
]

const regularMembers: TeamMember[] = [
  {
    id: "14",
    name: "Talasila Sathvika",
    role: "Student Coordinator",
    year: "3rd",
    branch: "CSE",
    bio: "Coordinating research activities and eager to learn AI applications in aerospace technology."
  },
  {
    id: "15",
    name: "M V Abhiram",
    role: "Student Coordinator",
    year: "3rd",
    branch: "AIML",
    bio: "Coordinating research activities and eager to learn AI applications in aerospace technology."
  },
  {
    id: "16",
    name: "Kommu Tejasri",
    role: "Student Coordinator",
    year: "2nd",
    branch: "CSE",
    bio: "Organizing workshops and events while exploring structural engineering applications in aerospace."
  },
  {
    id: "17",
    name: "Arutla Karthikeya Reddy",
    role: "Student Coordinator",
    year: "2nd",
    branch: "ECE",
    bio: "Coordinating research activities and eager to learn AI applications in aerospace technology."
  }
]

export function TeamSection({ title, subtitle, icon: Icon, sectionType, className }: TeamSectionProps) {
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedBranch, setSelectedBranch] = useState<string>("all")

  const getMembers = () => {
    switch (sectionType) {
      case "core": return coreMembers
      case "subcore": return subcoreMembers
      case "members": return regularMembers
      default: return []
    }
  }

  const members = getMembers()
  const filteredMembers = members.filter((member) => {
    if (selectedYear !== "all" && member.year !== selectedYear) return false
    if (selectedBranch !== "all" && member.branch !== selectedBranch) return false
    return true
  }).sort((a, b) => Number(a.id.replace(/\D/g, '')) - Number(b.id.replace(/\D/g, '')))

  const availableYears = [...new Set(members.map(m => m.year).filter(Boolean))].sort()
  const availableBranches = [...new Set(members.map(m => m.branch).filter(Boolean))].sort()

  const getSectionColors = () => {
    switch (sectionType) {
      case "faculty": return {
        headerBg: "from-purple-900/20 via-indigo-900/20 to-blue-900/20",
        cardBorder: "hover:border-purple-400/50",
        cardBg: "from-purple-900/10 to-indigo-900/10",
        badgeBg: "bg-purple-500/20 text-purple-200 border-purple-400/30"
      }
      case "core": return {
        headerBg: "from-cyan-900/20 via-blue-900/20 to-indigo-900/20", 
        cardBorder: "hover:border-cyan-400/50",
        cardBg: "from-cyan-900/10 to-blue-900/10",
        badgeBg: "bg-cyan-500/20 text-cyan-200 border-cyan-400/30"
      }
      case "subcore": return {
        headerBg: "from-blue-900/20 via-indigo-900/20 to-purple-900/20",
        cardBorder: "hover:border-blue-400/50", 
        cardBg: "from-blue-900/10 to-indigo-900/10",
        badgeBg: "bg-blue-500/20 text-blue-200 border-blue-400/30"
      }
      default: return {
        headerBg: "from-emerald-900/20 via-teal-900/20 to-cyan-900/20",
        cardBorder: "hover:border-emerald-400/50",
        cardBg: "from-emerald-900/10 to-teal-900/10", 
        badgeBg: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30"
      }
    }
  }

  const colors = getSectionColors()

  return (
    <section className={cn("py-16 bg-[#070e17]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className={cn("p-3 rounded-xl mr-4 border backdrop-blur-sm bg-gradient-to-br", colors.headerBg, colors.cardBorder.replace('hover:', ''))}>
              <Icon className="h-8 w-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Filters */}
        {(sectionType === "subcore" || sectionType === "members") && (
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-40 bg-slate-800/50 border-slate-600 text-slate-200">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all" className="text-slate-200">All Years</SelectItem>
                {availableYears.map(year => (
                  <SelectItem key={year} value={year} className="text-slate-200">{year} Year</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className="w-40 bg-slate-800/50 border-slate-600 text-slate-200">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all" className="text-slate-200">All Branches</SelectItem>
                {availableBranches.map(branch => (
                  <SelectItem key={branch} value={branch} className="text-slate-200">{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {(selectedYear !== "all" || selectedBranch !== "all") && (
              <Button 
                variant="outline" 
                onClick={() => {setSelectedYear("all"); setSelectedBranch("all")}}
                className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700"
              >
                Clear
              </Button>
            )}
          </div>
        )}

        {/* Team Grid */}
        <div className={cn("grid gap-6", 
          sectionType === "faculty" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" :
          sectionType === "core" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" :
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}>
          {filteredMembers.map((member) => (
            <Card 
              key={member.id} 
              className={cn("group transition-all duration-300 border-slate-700/50 bg-slate-900/50 hover:shadow-xl backdrop-blur-sm", colors.cardBorder, "hover:-translate-y-1")}
            >
              <CardContent className="p-0">
                
                {/* Avatar Section */}
                <div className={cn("relative h-48 flex items-center justify-center bg-gradient-to-br", colors.cardBg)}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  ) : (
                    <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                      <User className="h-16 w-16 text-white/80" />
                    </div>
                  )}
                  
                  {/* Bio Overlay */}
                  {member.bio && (
                    <div className="absolute inset-0 bg-slate-900/95 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm text-center leading-relaxed">{member.bio}</p>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  
                  <Badge className={cn("mb-3 font-medium", colors.badgeBg)}>
                    {member.role}
                  </Badge>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.year && (
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {member.year} Year
                      </Badge>
                    )}
                    {member.branch && (
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {member.branch}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-2">
                    {member.email && (
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8 hover:bg-cyan-500/20 hover:text-cyan-300" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8 hover:bg-blue-500/20 hover:text-blue-300" asChild>
                        <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.github && (
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8 hover:bg-purple-500/20 hover:text-purple-300" asChild>
                        <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <User className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No members found</h3>
            <p className="text-slate-400 mb-4">Try adjusting your filters to see more results.</p>
            <Button 
              variant="outline" 
              onClick={() => {setSelectedYear("all"); setSelectedBranch("all")}}
              className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
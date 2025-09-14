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
    bio: "Leading the club’s vision and strategic initiatives in aerospace innovation, with a strong passion for sustainable aviation and space exploration technologies."
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
    role: " Team Lead & Frontend Architect",
    year: "3rd",
    branch: "CSE",
    bio: " Crafting exceptional user experiences and leading frontend development initiatives for aerospace web solutions."
  },
  {
    id: "11",
    name: "Aparna",
    role: " Backend Systems Engineer",
    year: "3rd",
    branch: "CSE",
    bio: "🔧 Building robust backend infrastructure and APIs for aerospace data analysis and flight simulation systems."
  },
  {
    id: "12",
    name: "M V Abhiram",
    role: " Backend Developer",
    year: "3rd",
    branch: "AIML",
    bio: "💻 Creating end-to-end solutions bridging frontend and backend for aerospace project management tools."
  },
  {
    id: "13",
    name: "Talasila Sathvika",
    role: " Cybersecurity Specialist",
    year: "3rd",
    branch: "CSE",
    bio: "Specializing in cybersecurity and creating end-to-end solutions that bridge frontend and backend systems for aerospace project management tools."
  },
  
]

const regularMembers: TeamMember[] = [
  {
    id: "14",
    name: "Talasila Sathvika",
    role: " Student Coordinator",
    year: "3rd",
    branch: "CSE",
    bio: " Coordinating research activities and eager to learn AI applications in aerospace technology."
  },
  {
    id: "15",
    name: "M V Abhiram",
    role: " Student Coordinator",
    year: "3rd",
    branch: "AIML",
    bio: " Coordinating research activities and eager to learn AI applications in aerospace technology."
  },
  {
    id: "16",
    name: "Kommu Tejasri",
    role: " Student Coordinator ",
    year: "2nd",
    branch: "CSE",
    bio: " Organizing workshops and events while exploring structural engineering applications in aerospace."
  },
  {
    id: "17",
    name: "Arutla Karthikeya Reddy",
    role: " Student Coordinator",
    year: "2nd",
    branch: "ECE",
    bio: " Coordinating research activities and eager to learn AI applications in aerospace technology."
  }
]

export function TeamSection({ title, subtitle, icon: Icon, sectionType, className }: TeamSectionProps) {
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedBranch, setSelectedBranch] = useState<string>("all")

  const getMembers = () => {
    switch (sectionType) {
      case "faculty": return facultyMembers
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

  return (
    <section className={className}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mr-4 shadow-lg">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {(sectionType === "subcore" || sectionType === "members") && (
          <div className="flex gap-4 justify-center mb-8">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {availableYears.map(year => (
                  <SelectItem key={year} value={year}>{year} Year</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                {availableBranches.map(branch => (
                  <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(selectedYear !== "all" || selectedBranch !== "all") && (
              <Button variant="outline" onClick={() => {setSelectedYear("all"); setSelectedBranch("all")}}>
                Clear
              </Button>
            )}
          </div>
        )}

        <div className={cn("grid gap-6", 
          sectionType === "faculty" ? "grid-cols-1 sm:grid-cols-2" :
          sectionType === "core" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" :
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}>
          {filteredMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md overflow-hidden hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="relative">
                      <User className="h-20 w-20 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}
                  {member.bio && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/90 to-primary/80 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm text-center leading-relaxed font-medium">{member.bio}</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className={cn("mb-3 font-semibold",
                    sectionType === "faculty" ? "bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 border-purple-200" :
                    sectionType === "core" ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30" :
                    sectionType === "subcore" ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200" :
                    "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200"
                  )}>
                    {member.role}
                  </Badge>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.year && <Badge variant="outline" className="text-xs">{member.year} Year</Badge>}
                    {member.branch && <Badge variant="outline" className="text-xs">{member.branch}</Badge>}
                    {member.department && <Badge variant="outline" className="text-xs">{member.department}</Badge>}
                  </div>
                  <div className="flex gap-2">
                    {member.email && (
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8 hover:bg-primary/10" asChild>
                        <a href={`mailto:${member.email}`}><Mail className="h-4 w-4" /></a>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8 hover:bg-primary/10" asChild>
                        <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.github && (
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8 hover:bg-primary/10" asChild>
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
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No members found matching the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}
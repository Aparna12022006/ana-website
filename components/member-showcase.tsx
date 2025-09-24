"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"

interface Member {
  id: string
  name: string
  role: string
  description: string
  image?: string
  year?: string
  branch?: string
}

const keyMembers: Member[] = [
  {
    id: "1",
    name: "Dr. A. Nageshwara Rao",
    role: "Head of the Department",
    description: "Guiding the department with expertise in Artificial Intelligence and Machine Learning, fostering innovation, research, and academic excellence.",
    branch: "AIML",
},
  {
  id: "2",
  name: "Mrs. E Pravalika",
  role: "Faculty Coordinator",
  description: "Guiding the club with mentorship, academic expertise, and professional insights.",
  branch: "CSE-AIML",
},
  {
    id: "3",
    name: "Marella Gagan Hari Kiran",
    role: "Chairman",
    description: "Leading the club's vision and strategic initiatives in aerospace innovation.",
    year: "3rd Year",
    branch: "CSE-AIML",
  },
  {
    id: "4",
    name: "P. Sri Ram Pranav",
    role: "Vice Chairman",
    description: "Coordinating technical projects and research collaborations.",
    year: "3rd Year",
    branch: "CSE",
  },
  {
    id: "5",
    name: "V Sandhya",
    role: "Technical Lead",
    description: "Overseeing R&D projects and technical workshops.",
    year: "3rd Year",
    branch: "CSE",
  },
  {
    id: "6",
    name: "B Saketh Rao",
    role: "General Secretary",
    description: "Managing club operations and member communications.",
    year: "3rd Year",
    branch: "CSE",
  },
  {
    id: "7",
    name: "M Varshitha Verma",
    role: "Treasurer",
    description: "Financial planning and resource management for club activities.",
    year: "3rd Year",
    branch: "CSE",
  },
  {
    id: "8",
    name: "N Akash Reddy",
    role: "PR, Media & Outreach",
    description: "Managing social media presence and external communications.",
    year: "3rd Year",
    branch: "CSE-AIML",
  },
  {
    id: "9",
    name: "K Keerthana, R Varsha",
    role: "Design Leads",
    description: "Leading design initiatives and creative direction.",
    year: "3rd Year",
    branch: "CSE",
  },
  {
    id: "10",
    name: "M Sai Sree Harsha (Team Lead), D Aparna, M V Abhiram, T Sathvika",
    role: "Web Development Team",
    description: "Building and maintaining the club's web presence.",
    year: "3rd Year",
    branch: "CSE, AIML",
  },
  {
    id: "11",
    name: "T Sathvika, M V Abhiram, K Tejasri, A Karthikeya Reddy",
    role: "Student Coordinators",
    description: "Assisting in club activities, organizing events, and coordinating between faculty and students.",
    year: "3rd,2nd Years",
    branch: "CSE, AIML, ECE",
},

]

export function MemberShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Meet Our Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals driving our mission to explore the frontiers of aerospace technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyMembers.map((member) => (
            <Card
              key={member.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Member Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative">
                      <User className="h-20 w-20 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary border-primary/20">
                      {member.role}
                    </Badge>
                  </div>

                  {member.year && member.branch && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {member.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {member.branch}
                      </Badge>
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

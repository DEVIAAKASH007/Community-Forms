import { Edit, MapPin, Calendar, ExternalLink, Plus, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Profile() {
  const user = {
    name: "John Doe",
    headline: "Senior Full Stack Developer | React, Node.js & Cloud Architecture",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    joinDate: "January 2018",
    connections: 500,
    followers: 1240,
    posts: 87,
    about: "Passionate full-stack developer with 8+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud architecture. I love mentoring junior developers and contributing to open-source projects.",
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2020 - Present",
        description: "Lead development of enterprise web applications serving 100k+ users. Built microservices architecture using Node.js and deployed on AWS."
      },
      {
        title: "Full Stack Developer",
        company: "Startup Co.",
        duration: "Mar 2018 - Dec 2019",
        description: "Developed and maintained React applications and REST APIs. Collaborated with design team to implement responsive user interfaces."
      }
    ],
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "GraphQL", "Docker", "Kubernetes"],
    education: [
      {
        school: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Science",
        duration: "2014 - 2018"
      }
    ]
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card className="shadow-sm">
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-t-lg"></div>
          
          {/* Profile Info */}
          <CardContent className="pt-0">
            <div className="relative -mt-16 mb-4">
              <Avatar className="w-32 h-32 border-4 border-card shadow-lg">
                <AvatarImage src="/placeholder-avatar.jpg" alt={user.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-lg text-muted-foreground mb-2">{user.headline}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {user.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Joined {user.joinDate}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <div>
                <span className="font-semibold text-primary">{user.connections}</span>
                <span className="text-muted-foreground ml-1">connections</span>
              </div>
              <div>
                <span className="font-semibold text-primary">{user.followers}</span>
                <span className="text-muted-foreground ml-1">followers</span>
              </div>
              <div>
                <span className="font-semibold text-primary">{user.posts}</span>
                <span className="text-muted-foreground ml-1">posts</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">About</CardTitle>
              <Button variant="ghost" size="icon">
                <Edit className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {user.about}
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Experience</CardTitle>
              <Button variant="ghost" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {user.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary rounded text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {exp.company[0]}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mb-2">{exp.duration}</p>
                      <p className="text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  {index < user.experience.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Education</CardTitle>
              <Button variant="ghost" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              {user.education.map((edu, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-secondary rounded text-secondary-foreground text-xs font-bold flex items-center justify-center">
                      🎓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Skills</CardTitle>
              <Button variant="ghost" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Profile Strength */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Profile Strength</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Profile completeness</span>
                  <span className="font-semibold text-primary">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Add more skills and projects to improve your profile visibility
                </p>
              </div>
            </CardContent>
          </Card>

          {/* People Also Viewed */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">People also viewed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Sarah Johnson", title: "Product Manager", company: "Google" },
                  { name: "Michael Chen", title: "Software Engineer", company: "Microsoft" },
                  { name: "Emily Rodriguez", title: "UX Designer", company: "Figma" }
                ].map((person, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-avatar.jpg" alt={person.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{person.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {person.title} at {person.company}
                      </p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
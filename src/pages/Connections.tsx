import { Users, UserPlus, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const connections = [
  {
    name: "Sarah Johnson",
    title: "Senior Product Manager",
    company: "Google",
    mutualConnections: 12,
    connected: true,
    avatar: "/placeholder-avatar.jpg"
  },
  {
    name: "Michael Chen",
    title: "Software Engineer",
    company: "Microsoft",
    mutualConnections: 8,
    connected: true,
    avatar: "/placeholder-avatar.jpg"
  },
  {
    name: "Emily Rodriguez",
    title: "UX Designer",
    company: "Figma",
    mutualConnections: 15,
    connected: true,
    avatar: "/placeholder-avatar.jpg"
  },
  {
    name: "David Kim",
    title: "Data Scientist",
    company: "Netflix",
    mutualConnections: 6,
    connected: true,
    avatar: "/placeholder-avatar.jpg"
  }
]

const suggestions = [
  {
    name: "Lisa Wong",
    title: "Marketing Manager",
    company: "Shopify",
    mutualConnections: 5,
    connected: false,
    avatar: "/placeholder-avatar.jpg",
    reason: "Works in Tech"
  },
  {
    name: "James Wilson",
    title: "DevOps Engineer",
    company: "AWS",
    mutualConnections: 3,
    connected: false,
    avatar: "/placeholder-avatar.jpg",
    reason: "Similar background"
  },
  {
    name: "Anna Martinez",
    title: "Frontend Developer",
    company: "Spotify",
    mutualConnections: 9,
    connected: false,
    avatar: "/placeholder-avatar.jpg",
    reason: "Mutual connections"
  },
  {
    name: "Robert Taylor",
    title: "Tech Lead",
    company: "Uber",
    mutualConnections: 7,
    connected: false,
    avatar: "/placeholder-avatar.jpg",
    reason: "Similar role"
  }
]

export default function Connections() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">My Network</h1>
        <p className="text-muted-foreground">Manage your professional connections and discover new opportunities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{connections.length}</p>
                <p className="text-sm text-muted-foreground">Connections</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">{suggestions.length}</p>
                <p className="text-sm text-muted-foreground">Suggestions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Profile views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-sm mb-6">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search connections..."
                className="pl-10 bg-muted/30 border-border focus:bg-card"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="connections" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="connections">My Connections</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="connections" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {connections.map((person, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-3">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="font-semibold text-sm mb-1">{person.name}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{person.title}</p>
                    <p className="text-xs text-muted-foreground mb-3">{person.company}</p>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {person.mutualConnections} mutual connections
                      </span>
                    </div>
                    
                    <div className="flex gap-2 w-full">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        Message
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1 text-xs text-destructive hover:text-destructive">
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((person, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-3">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="font-semibold text-sm mb-1">{person.name}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{person.title}</p>
                    <p className="text-xs text-muted-foreground mb-2">{person.company}</p>
                    
                    <Badge variant="secondary" className="text-xs mb-3">
                      {person.reason}
                    </Badge>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {person.mutualConnections} mutual connections
                      </span>
                    </div>
                    
                    <div className="flex gap-2 w-full">
                      <Button size="sm" className="flex-1 text-xs bg-primary hover:bg-primary-hover">
                        Connect
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1 text-xs">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
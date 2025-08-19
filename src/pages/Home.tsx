import { Heart, MessageCircle, Share2, Send, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

const posts = [
  {
    id: 1,
    author: "Sarah Johnson",
    title: "Senior Product Manager at Google",
    timeAgo: "2h",
    content: "Excited to share that our team just launched a new feature that will help millions of users worldwide! The journey from concept to launch taught me so much about user-centered design and cross-functional collaboration. 🚀",
    likes: 127,
    comments: 23,
    shares: 8,
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 2,
    author: "Michael Chen",
    title: "Software Engineer at Microsoft",
    timeAgo: "4h",
    content: "Just attended an amazing conference on AI and machine learning. The future of technology is incredibly exciting! Here are my top 3 takeaways from today...",
    likes: 89,
    comments: 15,
    shares: 12,
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    title: "UX Designer at Figma",
    timeAgo: "6h",
    content: "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs. This quote continues to inspire my approach to creating user experiences that truly matter.",
    likes: 203,
    comments: 41,
    shares: 28,
    avatar: "/placeholder-avatar.jpg"
  }
]

export default function Home() {
  return (
    <div className="flex gap-6 p-6 max-w-7xl mx-auto">
      {/* Left Sidebar - Profile Summary */}
      <div className="w-64 flex-shrink-0 space-y-4">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <Avatar className="w-16 h-16 mx-auto mb-3">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-sm">John Doe</h3>
              <p className="text-xs text-muted-foreground mb-3">Full Stack Developer</p>
              <Separator className="my-3" />
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profile views</span>
                  <span className="text-primary font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Post impressions</span>
                  <span className="text-primary font-medium">1,240</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <h4 className="font-medium text-sm">Recent Activity</h4>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2 text-xs">
              <p className="text-muted-foreground">You appeared in 12 searches this week</p>
              <p className="text-muted-foreground">3 new profile views</p>
              <p className="text-muted-foreground">5 post interactions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Feed */}
      <div className="flex-1 space-y-4">
        {/* Create Post */}
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="Start a post..."
                  className="min-h-[80px] resize-none border-muted bg-muted/30 focus:bg-card"
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Plus className="w-4 h-4 mr-1" />
                      Photo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                      <Plus className="w-4 h-4 mr-1" />
                      Video
                    </Button>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary-hover">
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        {posts.map((post) => (
          <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm">{post.author}</h3>
                    <p className="text-xs text-muted-foreground">{post.title}</p>
                    <p className="text-xs text-muted-foreground">{post.timeAgo} • 🌍</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm leading-relaxed mb-4">{post.content}</p>
              
              <Separator className="my-3" />
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span>{post.likes} likes</span>
                <div className="flex gap-3">
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>
              
              <Separator className="my-3" />
              
              <div className="flex items-center justify-around">
                <Button variant="ghost" size="sm" className="flex-1 hover:bg-muted/50">
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 hover:bg-muted/50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comment
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 hover:bg-muted/50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 hover:bg-muted/50">
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Sidebar - Suggestions */}
      <div className="w-80 flex-shrink-0 space-y-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <h4 className="font-medium text-sm">People you may know</h4>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {[
                { name: "Alice Smith", title: "Product Designer at Adobe", mutual: "5 mutual connections" },
                { name: "David Kim", title: "Data Scientist at Netflix", mutual: "12 mutual connections" },
                { name: "Lisa Wong", title: "Marketing Manager at Shopify", mutual: "3 mutual connections" }
              ].map((person, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-avatar.jpg" alt={person.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-xs truncate">{person.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{person.title}</p>
                    <p className="text-xs text-muted-foreground">{person.mutual}</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs h-7">
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <h4 className="font-medium text-sm">Trending hashtags</h4>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {["#webdevelopment", "#reactjs", "#typescript", "#design", "#startup"].map((tag, index) => (
                <div key={index} className="text-xs">
                  <span className="text-primary font-medium cursor-pointer hover:underline">{tag}</span>
                  <p className="text-muted-foreground">{Math.floor(Math.random() * 1000) + 100} posts</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
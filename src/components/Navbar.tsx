import { Search, MessageSquare, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <div className="flex h-16 items-center px-4 gap-4">
        {/* Left side - Logo and Sidebar Trigger */}
        <div className="flex items-center gap-3">
          <SidebarTrigger className="p-2 hover:bg-muted rounded-lg" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded text-primary-foreground flex items-center justify-center font-bold text-sm">
              Li
            </div>
            <span className="font-semibold text-lg text-primary hidden sm:block">
              LinkedClone
            </span>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for people, jobs, posts..."
              className="pl-10 bg-muted/50 border-border focus:bg-card"
            />
          </div>
        </div>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-muted rounded-lg"
          >
            <MessageSquare className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-muted rounded-lg"
          >
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              5
            </Badge>
          </Button>

          <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
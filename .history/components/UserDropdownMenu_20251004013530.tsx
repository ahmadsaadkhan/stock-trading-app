'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react";

const UserDropdownMenu = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    router.push("/sign-in")
  }
  const user = {
    name: "John Doe",
    email: "contact@mail.com"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://iili.io/KW1Ym0X.png" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="flex-gap-3 relative-items-center py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://iili.io/KW1Ym0X.png" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 hover:bg-yellow-500 hover:text-yellow-900">
          <LogOut className="h4 w4 mr-2 hidden sm:block" />
          Sign out
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdownMenu
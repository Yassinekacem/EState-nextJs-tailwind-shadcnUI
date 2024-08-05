import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const navList = [
   
    {
        title: "Announcements",
        href: "/announcements"
    } ,  
    {
        title: "Contact",
        href: "/contact"
    } ,  {
        title: "About Us",
        href: "/about"
    }
    

]

export function Navbar() {
    return (
        <nav className="fixed w-screen px-4 top-2 z-50">
           <div className="py-3 container flex items-center justify-between bg-background rounded-md z-50">
          <Link href="/">  <p className="font-semibold italic">E State</p> </Link> 
            <ul className="flex items-center justify-between gap-10" >
                    {navList.map((navItem) => {
                        return (
                            <li key={navItem.title}>
                                <Link className="text-muted-foreground hover:text-primary hover:underline hover:text-blue-400 " href={navItem.href}> {navItem.title} </Link>

                            </li>
                        )

                    })}

            </ul>

            <div>
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>KY</AvatarFallback>
                </Avatar>
            </div>
           </div>
        </nav>
    )
}


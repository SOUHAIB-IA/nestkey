import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-slate-900 text-white py-2 px-4 text-xs md:text-sm flex flex-wrap justify-center md:justify-between items-center gap-2">
      <div className="flex items-center space-x-2 md:space-x-4">
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span className="hidden sm:inline">24/7</span> Support
        </span>
        <span className="hidden sm:inline">|</span>
        <span>+1 (800) 555-0199</span>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link href="/account" className="hover:text-slate-300 text-sm">
          Sign In
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/account/register" className="hover:text-slate-300 text-sm">
          Register
        </Link>
        <div className="flex items-center">
          <span className="mr-1">EN</span>
          <Image
            src="/placeholder.svg?height=16&width=16"
            alt="English"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}


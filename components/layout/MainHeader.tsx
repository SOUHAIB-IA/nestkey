import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export function MainHeader() {
    return (
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between gap-4">
                {/* Left Section */}
                <div className="flex items-center flex-1 gap-6 md:gap-8 min-w-0">
                    <Link href="/" className="shrink-0 font-bold text-xl md:text-2xl text-blue-600 flex items-center">
                        <span className="text-blue-600 md:text-3xl font-bold">Key</span>
                        <span className="text-yellow-500 md:text-3xl font-bold ml-1">Nest</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-2">
                        <Link href="/" className="font-medium hover:text-blue-600 transition-colors whitespace-nowrap">
                            HOME
                        </Link>
                        <Link href="/shop" className="font-medium hover:text-blue-600 transition-colors whitespace-nowrap">
                            SHOP
                        </Link>
                        <Link href="/faq" className="font-medium hover:text-blue-600 transition-colors whitespace-nowrap">
                            FAQ
                        </Link>
                        <Link href="/contact" className="font-medium hover:text-blue-600 transition-colors whitespace-nowrap">
                            CONTACT US
                        </Link>
                    </nav>
                </div>

               
                <div className="flex items-center gap-4 md:gap-6 shrink-0"> {/* Right Section     
                    <div className="hidden md:flex items-center mr-2">
                        <Image
                            src="/placeholder.svg?height=50&width=120"
                            alt="Microsoft Authorized Reseller"
                            width={100}
                            height={50}
                            className="object-contain"
                        />
                    </div>*/}

                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Link href="/cart" className="p-2 rounded-full hover:bg-slate-100 flex items-center">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    3
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block ml-1">
                            <span className="text-sm text-slate-500">Your Cart</span>
                            <p className="font-medium leading-tight">$99.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
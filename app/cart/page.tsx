import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { CategoryNav } from "@/components/navigation/CategoryNav"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { CartItems } from "@/components/cart/CartItems"
import { CartSummary } from "@/components/cart/CartSummary"
import { ShoppingCart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Your Shopping Cart | DigitoreKeys",
  description: "Review your digital products and proceed to secure checkout. Instant delivery after purchase."
}

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <MainHeader />
      <CategoryNav />

      <main className="flex-1 bg-slate-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <div className="text-sm breadcrumbs text-slate-500">
              <ul className="flex gap-2">
                <li><Link href="/">Home</Link> /</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm mb-8 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items - Left Column (2/3 width on large screens) */}
              <div className="lg:col-span-2">
                <CartItems />
              </div>
                
              {/* Cart Summary - Right Column (1/3 width on large screens) */}
              <div className="lg:col-span-1">
                <CartSummary />
                
                <div className="mt-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base gap-2">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  
                  <div className="mt-4 flex justify-center">
                    <Link 
                      href="/shop" 
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
                
          {/* Trust elements */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center p-4">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Secure Payment</h3>
                <p className="text-sm text-slate-500">All transactions are secured with SSL encryption</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Instant Delivery</h3>
                <p className="text-sm text-slate-500">Get your digital keys delivered to your email immediately</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M9 14h6" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">24/7 Support</h3>
                <p className="text-sm text-slate-500">Our customer service team is always available to help</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 
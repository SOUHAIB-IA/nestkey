import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  slug: string
  category: string
}

export function CartItems() {
  // Mock cart data - in a real app, this would come from a cart context or state
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Microsoft Office 2021 Professional Plus",
      price: 79.99,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
      slug: "microsoft-office-2021-pro-plus",
      category: "microsoft-office"
    },
    {
      id: "3",
      name: "Windows 11 Pro",
      price: 99.99,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
      slug: "windows-11-pro",
      category: "operating-system"
    }
  ]

  const isCartEmpty = cartItems.length === 0

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cart Items</h2>
      
      {isCartEmpty ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <svg className="h-16 w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-slate-700 mb-2">Your cart is empty</h3>
          <p className="text-slate-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link href="/shop">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Header - Desktop */}
          <div className="hidden md:grid md:grid-cols-12 bg-slate-50 py-3 px-4 rounded-t-lg text-sm font-medium text-slate-500">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>
          
          {/* Cart Items */}
          <div className="divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="py-4 md:py-6 md:grid md:grid-cols-12 md:gap-2 items-center">
                {/* Product - Mobile & Desktop */}
                <div className="flex items-center md:col-span-6">
                  <div className="w-20 h-20 flex-shrink-0 bg-slate-50 rounded-md border p-2 flex items-center justify-center mr-4">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={80} 
                      height={80} 
                      className="object-contain" 
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/shop/${item.category}/${item.slug}`}
                      className="text-sm font-medium text-slate-800 hover:text-blue-600 line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile only price */}
                    <div className="flex items-center justify-between mt-2 md:hidden">
                      <div className="text-sm font-medium">${item.price.toFixed(2)}</div>
                      <button className="text-slate-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Price - Desktop only */}
                <div className="hidden md:block md:col-span-2 text-center text-sm font-medium">
                  ${item.price.toFixed(2)}
                </div>
                
                {/* Quantity - Mobile (below product) & Desktop */}
                <div className="mt-4 md:mt-0 md:col-span-2 flex justify-center">
                  <div className="flex items-center border rounded-md w-24">
                    <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      readOnly
                      className="w-8 border-0 text-center focus:ring-0 p-0 text-sm"
                    />
                    <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                      +
                    </button>
                  </div>
                </div>
                
                {/* Total & Remove - Desktop */}
                <div className="hidden md:flex md:col-span-2 justify-between items-center">
                  <div className="text-right font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button className="ml-4 text-slate-400 hover:text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Total - Mobile only */}
                <div className="flex justify-between items-center mt-4 md:hidden">
                  <span className="text-sm text-slate-500">Total:</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Update Cart & Coupon - Desktop */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 mt-6">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <div className="flex max-w-md">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                  Apply Coupon
                </Button>
              </div>
            </div>
            
            <Button variant="outline" className="w-full sm:w-auto">
              Update Cart
            </Button>
          </div>
          
          {/* Proceed to Checkout */}
          <div className="mt-8 flex justify-end">
            <Link href="/checkout">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
} 
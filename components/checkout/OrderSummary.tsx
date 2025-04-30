import Image from "next/image"

type Product = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

// Mock data for the order summary
const cartItems: Product[] = [
  {
    id: 1,
    name: "Microsoft Office 2021 Professional Plus",
    price: 79.99,
    quantity: 1,
    image: "/images/products/office-2021.jpg"
  },
  {
    id: 2,
    name: "Windows 11 Pro",
    price: 59.99,
    quantity: 1,
    image: "/images/products/windows11.jpg"
  }
]

export function OrderSummary() {
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  
  // Apply a discount if needed (mock data)
  const discount = 10 // $10 discount
  const shipping = 0 // Digital products have no shipping
  const tax = subtotal * 0.07 // 7% tax rate
  
  // Calculate final total
  const total = subtotal - discount + shipping + tax
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      
      {/* Products */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden border">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-sm font-medium">{item.name}</h3>
              <div className="flex justify-between mt-1">
                <span className="text-sm text-slate-500">Qty: {item.quantity}</span>
                <span className="text-sm font-medium">${item.price.toFixed(2)}</span>
              </div>
              <div className="mt-1">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Digital Product
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Coupon Code */}
      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Apply
          </button>
        </div>
      </div>
      
      {/* Order Totals */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Subtotal</span>
          <span className="text-sm">${subtotal.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between">
            <span className="text-sm text-slate-600">Discount</span>
            <span className="text-sm text-green-600">-${discount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Shipping</span>
          <span className="text-sm">
            {shipping === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>${shipping}</span>
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Tax (7%)</span>
          <span className="text-sm">${tax.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between pt-4 border-t mt-2">
          <span className="font-bold">Total</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Order Notes */}
      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <span className="text-sm font-medium">Digital Delivery</span>
        </div>
        <p className="text-xs text-slate-500 mb-3">
          Your products will be delivered instantly after payment completion
          to your provided email address.
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <span className="text-sm font-medium">Need Help?</span>
        </div>
        <p className="text-xs text-slate-500">
          If you have any questions about your order, please contact our
          customer support team at support@digitalproducts.com
        </p>
      </div>
    </div>
  )
}
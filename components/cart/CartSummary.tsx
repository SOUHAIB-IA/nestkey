export function CartSummary() {
  // Mock cart data - in a real app, this would come from a cart context or API
  const cartData = {
    subtotal: 179.98,
    discount: 20.00,
    shipping: 0, // Free shipping for digital products
    total: 159.98
  }

  return (
    <div className="bg-slate-50 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-medium">${cartData.subtotal.toFixed(2)}</span>
        </div>
        
        {cartData.discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${cartData.discount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-slate-600">Shipping</span>
          <span className="font-medium">
            {cartData.shipping === 0 ? 'Free' : `$${cartData.shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span className="text-lg">${cartData.total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Including VAT
          </p>
        </div>
      </div>
      
      {/* Promo Code Section */}
      <div className="mt-6">
        <label htmlFor="promo-code" className="block text-sm font-medium mb-2">
          Apply Promo Code
        </label>
        <div className="flex">
          <input
            id="promo-code"
            type="text"
            placeholder="Enter code"
            className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 text-sm">
            Apply
          </button>
        </div>
      </div>
      
      {/* Payment Methods */}
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-3">Accepted Payment Methods</h3>
        <div className="flex flex-wrap gap-2">
          <div className="bg-white p-2 rounded border w-14 h-9 flex items-center justify-center">
            <span className="text-xs font-medium">Visa</span>
          </div>
          <div className="bg-white p-2 rounded border w-14 h-9 flex items-center justify-center">
            <span className="text-xs font-medium">MC</span>
          </div>
          <div className="bg-white p-2 rounded border w-14 h-9 flex items-center justify-center">
            <span className="text-xs font-medium">Amex</span>
          </div>
          <div className="bg-white p-2 rounded border w-14 h-9 flex items-center justify-center">
            <span className="text-xs font-medium">PayPal</span>
          </div>
        </div>
      </div>
      
      {/* Secure checkout message */}
      <div className="mt-6 flex items-center text-sm text-slate-500">
        <svg
          className="h-4 w-4 mr-1 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        Secure checkout
      </div>
    </div>
  )
} 
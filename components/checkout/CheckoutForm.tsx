"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'paypal'>('credit-card')
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Billing Information */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6">Billing Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first-name" className="block mb-2 text-sm font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="first-name"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="last-name" className="block mb-2 text-sm font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="last-name"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <p className="mt-1 text-xs text-slate-500">
              Your order confirmation and digital products will be sent to this email.
            </p>
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="company" className="block mb-2 text-sm font-medium">
              Company Name (Optional)
            </label>
            <input
              id="company"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="city" className="block mb-2 text-sm font-medium">
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="postal-code" className="block mb-2 text-sm font-medium">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input
              id="postal-code"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block mb-2 text-sm font-medium">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="NL">Netherlands</option>
              <option value="FR">France</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="state" className="block mb-2 text-sm font-medium">
              State/Province <span className="text-red-500">*</span>
            </label>
            <input
              id="state"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>
      
      {/* Payment Method */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6">Payment Method</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div 
            className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer ${
              paymentMethod === 'credit-card' ? 'border-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => setPaymentMethod('credit-card')}
          >
            <input 
              type="radio" 
              name="payment-method" 
              checked={paymentMethod === 'credit-card'} 
              onChange={() => {}}
              className="h-4 w-4 text-blue-600"
            />
            <div>
              <span className="font-medium">Credit Card</span>
              <div className="flex gap-2 mt-1">
                <div className="bg-slate-100 p-1 rounded w-10 h-6 flex items-center justify-center">
                  <span className="text-xs">Visa</span>
                </div>
                <div className="bg-slate-100 p-1 rounded w-10 h-6 flex items-center justify-center">
                  <span className="text-xs">MC</span>
                </div>
                <div className="bg-slate-100 p-1 rounded w-10 h-6 flex items-center justify-center">
                  <span className="text-xs">Amex</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer ${
              paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => setPaymentMethod('paypal')}
          >
            <input 
              type="radio" 
              name="payment-method" 
              checked={paymentMethod === 'paypal'} 
              onChange={() => {}}
              className="h-4 w-4 text-blue-600"
            />
            <div>
              <span className="font-medium">PayPal</span>
              <p className="text-xs text-slate-500 mt-1">
                You will be redirected to PayPal to complete your purchase.
              </p>
            </div>
          </div>
        </div>
        
        {/* Credit Card Details - Show only if credit card is selected */}
        {paymentMethod === 'credit-card' && (
          <div className="space-y-6">
            <div>
              <label htmlFor="card-number" className="block mb-2 text-sm font-medium">
                Card Number <span className="text-red-500">*</span>
              </label>
              <input
                id="card-number"
                type="text"
                placeholder="•••• •••• •••• ••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiry" className="block mb-2 text-sm font-medium">
                  Expiry Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="expiry"
                  type="text"
                  placeholder="MM / YY"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="cvv" className="block mb-2 text-sm font-medium">
                  CVV <span className="text-red-500">*</span>
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="card-name" className="block mb-2 text-sm font-medium">
                Name on Card <span className="text-red-500">*</span>
              </label>
              <input
                id="card-name"
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Order Notes */}
      <div className="mb-8">
        <label htmlFor="order-notes" className="block mb-2 text-sm font-medium">
          Order Notes (Optional)
        </label>
        <textarea
          id="order-notes"
          rows={3}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Notes about your order, e.g. special requirements"
        ></textarea>
      </div>
      
      {/* Terms and Conditions */}
      <div className="mb-8">
        <div className="flex items-start gap-2">
          <input type="checkbox" id="terms" className="mt-1" required />
          <label htmlFor="terms" className="text-sm">
            I have read and agree to the website <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and <a href="#" className="text-blue-600 hover:underline">privacy policy</a> <span className="text-red-500">*</span>
          </label>
        </div>
      </div>
      
      {/* Place Order Button */}
      <Link href="/checkout/thank-you">
        <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 h-12 text-base">
          Complete Purchase
        </Button>
      </Link>
    </div>
  )
} 
import { Metadata } from "next"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { Footer } from "@/components/layout/Footer"
import { CheckoutForm } from "@/components/checkout/CheckoutForm"
import { OrderSummary } from "@/components/checkout/OrderSummary"

export const metadata: Metadata = {
  title: "Checkout - Digital Products",
  description: "Secure checkout for your digital product purchase"
}

export default function CheckoutPage() {
  return (
    <>
      <TopBar />
      <MainHeader />

      <main className="min-h-screen py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex text-sm">
              <li className="text-slate-600">
                <a href="/" className="hover:text-blue-600">Home</a>
              </li>
              <li className="mx-2 text-slate-600">/</li>
              <li className="text-slate-600">
                <a href="/cart" className="hover:text-blue-600">Cart</a>
              </li>
              <li className="mx-2 text-slate-600">/</li>
              <li className="font-medium">Checkout</li>
            </ol>
          </nav>

          {/* Security message */}
          <div className="flex items-center gap-2 p-4 bg-blue-50 border border-blue-100 rounded-lg mb-8">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <p className="text-sm text-blue-700">
              This is a secure SSL encrypted payment. Your information is protected.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form - 2/3 width on large screens */}
            <div className="lg:w-2/3">
              <CheckoutForm />
            </div>

            {/* Order Summary - 1/3 width on large screens */}
            <div className="lg:w-1/3">
              <OrderSummary />
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-16">
            <h3 className="text-center text-lg font-bold mb-6">Why Choose Digital Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Secure Payments</h4>
                <p className="text-sm text-slate-600">
                  Your payment information is processed securely. We do not store credit card details.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Immediate Delivery</h4>
                <p className="text-sm text-slate-600">
                  Access your digital products instantly after payment via email.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Lifetime Warranty</h4>
                <p className="text-sm text-slate-600">
                  All products come with our lifetime support and satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="p-2 bg-slate-100 rounded">
              <span className="text-sm font-medium">Visa</span>
            </div>
            <div className="p-2 bg-slate-100 rounded">
              <span className="text-sm font-medium">Mastercard</span>
            </div>
            <div className="p-2 bg-slate-100 rounded">
              <span className="text-sm font-medium">Amex</span>
            </div>
            <div className="p-2 bg-slate-100 rounded">
              <span className="text-sm font-medium">PayPal</span>
            </div>
            <div className="p-2 bg-slate-100 rounded">
              <span className="text-sm font-medium">Apple Pay</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 
import { Metadata } from "next"
import Link from "next/link"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Order Confirmed - Digital Products",
  description: "Thank you for your purchase. Your digital products are on their way!"
}

export default function ThankYouPage() {
  // Mock order details
  const order = {
    id: "DK-58923",
    date: new Date().toLocaleDateString(),
    total: 139.98,
    email: "customer@example.com",
    products: [
      {
        id: 1,
        name: "Microsoft Office 2021 Professional Plus",
        price: 79.99,
        licenseKey: "XXXX-XXXX-XXXX-XXXX-1234",
        downloadLink: "#"
      },
      {
        id: 2,
        name: "Windows 11 Pro",
        price: 59.99,
        licenseKey: "XXXX-XXXX-XXXX-XXXX-5678",
        downloadLink: "#"
      }
    ]
  }

  return (
    <>
      <TopBar />
      <MainHeader />

      <main className="min-h-screen py-10 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Message */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-green-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">Thank You for Your Purchase!</h1>
            <p className="text-slate-600 mb-4">
              Your order has been confirmed and your digital products are ready.
            </p>
            <p className="text-sm text-slate-500">
              Order confirmation and product details have been sent to: <span className="font-medium">{order.email}</span>
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-slate-500">Order Number:</p>
                <p className="font-medium">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Order Date:</p>
                <p className="font-medium">{order.date}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Total:</p>
                <p className="font-medium">${order.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Payment Method:</p>
                <p className="font-medium">Credit Card</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-bold mb-4">Your Products</h3>
              
              <div className="space-y-6">
                {order.products.map((product) => (
                  <div key={product.id} className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">{product.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Product Key:</p>
                        <div className="flex gap-2 items-center">
                          <code className="bg-slate-100 p-1 rounded text-sm font-mono">
                            {product.licenseKey}
                          </code>
                          <button 
                            className="text-blue-600 hover:text-blue-800"
                            title="Copy to clipboard"
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Download:</p>
                        <a 
                          href={product.downloadLink}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                          Download Software
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Steps and Support */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-6">What's Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">Installation Guide</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Follow our simple installation guides to get your software up and running.
                </p>
                <Button variant="outline" className="w-full md:w-auto">
                  View Installation Guides
                </Button>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our support team is ready to assist you with any questions.
                </p>
                <Button variant="outline" className="w-full md:w-auto">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="text-center mb-8">
            <Link href="/shop" className="inline-block">
              <Button variant="default" className="w-full md:w-auto">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 
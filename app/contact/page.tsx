import { Metadata } from "next"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Us - Digital Products",
  description: "Get in touch with our support team. We're here to help with any questions about our digital products and services."
}

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      
      <main className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Have a question or need assistance? Our support team is here to help you.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase text-slate-500 mb-2">
                        Email Us
                      </h3>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">General Inquiries</p>
                          <a href="mailto:info@digitalproducts.com" className="text-blue-600 hover:underline">
                            info@digitalproducts.com
                          </a>
                          <p className="text-sm text-slate-500 mt-1">
                            For general questions about our products and services
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Technical Support</p>
                          <a href="mailto:support@digitalproducts.com" className="text-blue-600 hover:underline">
                            support@digitalproducts.com
                          </a>
                          <p className="text-sm text-slate-500 mt-1">
                            For assistance with installations, activations, and technical issues
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold uppercase text-slate-500 mb-2">
                        Call Us
                      </h3>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Support Hotline</p>
                          <a href="tel:+18001234567" className="text-blue-600 hover:underline">
                            +1 (800) 123-4567
                          </a>
                          <p className="text-sm text-slate-500 mt-1">
                            Monday-Friday, 9AM-6PM ET
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold uppercase text-slate-500 mb-2">
                        Business Hours
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Monday-Friday</span>
                          <span className="text-sm font-medium">9:00 AM - 6:00 PM ET</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Saturday</span>
                          <span className="text-sm font-medium">10:00 AM - 4:00 PM ET</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Sunday</span>
                          <span className="text-sm font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase text-slate-500 mb-3">
                      Follow Us
                    </h3>
                    <div className="flex gap-3">
                      <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="order-number" className="block mb-2 text-sm font-medium">
                        Order Number (if applicable)
                      </label>
                      <input
                        id="order-number"
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="e.g. DK-12345"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="pre-sales">Pre-Sales Question</option>
                        <option value="order">Order Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing Issue</option>
                        <option value="refund">Refund Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                        placeholder="Please describe your issue or question in detail..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="attachment" className="block mb-2 text-sm font-medium">
                        Attachment (optional)
                      </label>
                      <input
                        id="attachment"
                        type="file"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        Max file size: 5MB. Accepted formats: JPG, PNG, PDF.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        id="terms"
                        type="checkbox"
                        className="mt-1"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-slate-600">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to the processing of my personal data. <span className="text-red-500">*</span>
                      </label>
                    </div>
                    
                    <div>
                      <Button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* FAQ Link */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-bold mb-3">Looking for quick answers?</h3>
              <p className="text-slate-600 mb-4">
                Check our frequently asked questions section for immediate answers to common questions.
              </p>
              <a 
                href="/faq" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Visit our FAQ page
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
} 
import { Metadata } from "next"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Digital Products",
  description: "Find answers to common questions about our digital products, licensing, installation, and support."
}

export default function FAQPage() {
  const faqs = [
    {
      category: "Purchasing",
      questions: [
        {
          question: "How does the purchasing process work?",
          answer: "Our purchasing process is simple and secure. Browse our products, add them to your cart, and proceed to checkout. After completing payment, you'll receive an email with your product keys and download links. The entire process typically takes less than 5 minutes."
        },
        {
          question: "Are my payment details secure?",
          answer: "Yes, all payment information is processed through secure, PCI-compliant payment gateways. We never store your full credit card details on our servers. We support various payment methods including credit/debit cards, PayPal, and more."
        },
        {
          question: "Can I get a refund if I change my mind?",
          answer: "We offer a 30-day money-back guarantee for most products. If you're not satisfied with your purchase, contact our support team with your order number and reason for return. Please note that refunds are issued at our discretion and may not be available for activated software."
        },
        {
          question: "Can I purchase multiple licenses?",
          answer: "Yes, you can purchase multiple licenses for the same product. During checkout, you can adjust the quantity of licenses. For bulk orders (10+ licenses), please contact our sales team for special volume pricing."
        }
      ]
    },
    {
      category: "Licensing",
      questions: [
        {
          question: "What types of licenses do you offer?",
          answer: "We offer several license types: Single User (for one device), Multi-User (for multiple devices by the same user), and Business (for commercial use in an organization). Each product page specifies the available license types and their restrictions."
        },
        {
          question: "How many computers can I install the software on?",
          answer: "With a standard Single User license, you can typically install the software on 1 device. Multi-User licenses allow installation on up to 3 devices owned by the same user. Business licenses vary based on the number of seats purchased."
        },
        {
          question: "Are the license keys perpetual?",
          answer: "Yes, most of our products come with perpetual licenses, meaning you can use the software indefinitely. The license applies to the specific version you purchased. Upgrades to newer major versions may require a new license or an upgrade fee."
        },
        {
          question: "Can I transfer my license to another computer?",
          answer: "Yes, if you're replacing your computer or need to move the software to a different device, you can deactivate it on the old device and activate it on the new one. There's a limit to how many times you can transfer a license (typically 3 times per year)."
        }
      ]
    },
    {
      category: "Installation & Activation",
      questions: [
        {
          question: "How do I download my purchased software?",
          answer: "After purchase, you'll receive an email with download links. You can also access your downloads at any time by logging into your account and visiting the 'My Downloads' section. We provide direct download links as well as torrent options for large files."
        },
        {
          question: "What if my download is interrupted?",
          answer: "Our download system supports resuming interrupted downloads. If your download stops, simply try downloading again using the same link. The download will continue from where it left off. If you continue to have issues, contact our support team."
        },
        {
          question: "How do I activate my software?",
          answer: "Each product has its own activation process, detailed in the installation guide that comes with your purchase. Generally, you'll need to enter the product key during installation or in the software's activation screen. Online activation is required for most products."
        },
        {
          question: "What if activation fails?",
          answer: "If activation fails, verify that you've entered the correct product key. Check your internet connection, as most activations require online verification. If problems persist, contact our support team with your order number and the error message you received."
        }
      ]
    },
    {
      category: "Product Support",
      questions: [
        {
          question: "How long is the support period?",
          answer: "We provide technical support for all our products for a minimum of 12 months from the date of purchase. Premium support plans with extended coverage are available for purchase. Support includes assistance with installation, activation, and basic usage issues."
        },
        {
          question: "Do you offer installation assistance?",
          answer: "Yes, we provide step-by-step installation guides for all our products. If you encounter difficulties, our support team can assist you via email or live chat. For business customers, we offer remote installation assistance as part of our premium support packages."
        },
        {
          question: "What are your support hours?",
          answer: "Our customer support team is available Monday through Friday, 9 AM to 6 PM Eastern Time. Support requests submitted outside these hours will be addressed on the next business day. Premium support customers have access to extended hours and weekend support."
        },
        {
          question: "How do I contact support?",
          answer: "You can contact our support team through our Help Desk portal, by email at support@digitalproducts.com, or via live chat on our website during business hours. For the fastest response, please include your order number and detailed information about your issue."
        }
      ]
    },
    {
      category: "Updates & Upgrades",
      questions: [
        {
          question: "Do I get free updates?",
          answer: "Yes, all minor updates (e.g., from version 1.1 to 1.2) within the same major version are provided free of charge. These updates typically include bug fixes and minor feature improvements. You'll be notified of available updates via email."
        },
        {
          question: "What about major version upgrades?",
          answer: "Major version upgrades (e.g., from version 1.0 to 2.0) usually require an upgrade fee. However, existing customers receive significant discounts on these upgrades. The upgrade pricing is typically 30-50% off the full price of the new version."
        },
        {
          question: "How do I update my software?",
          answer: "Most of our software products include an automatic update feature that will notify you when updates are available. You can also check for updates manually by visiting the 'Help' or 'About' section in the software or by logging into your account on our website."
        },
        {
          question: "What if I don't want to upgrade?",
          answer: "You're never required to upgrade to a newer version. Your perpetual license entitles you to use the version you purchased indefinitely. However, older versions eventually lose technical support and may become incompatible with newer operating systems."
        }
      ]
    }
  ]
  
  return (
    <>
      <TopBar />
      <MainHeader />
      
      <main className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about our digital products, licensing, installation, and customer support.
            </p>
          </div>
          
          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-5 py-4 pr-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {faqs.map((category) => (
                <a 
                  key={category.category} 
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-5 py-2 bg-white rounded-full shadow-sm border hover:bg-blue-50 transition-colors"
                >
                  {category.category}
                </a>
              ))}
            </div>
          </div>
          
          {/* FAQ Categories */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {faqs.map((category) => (
              <div 
                key={category.category}
                id={category.category.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                      <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Still Need Help */}
          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6 text-slate-600">
              Can't find the answer you're looking for? Our support team is ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Support
              </a>
              <a href="/documentation" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                Documentation
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
} 
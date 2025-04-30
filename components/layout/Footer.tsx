import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-8 md:pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PARTNERS</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="font-bold text-xl flex items-center">
                <span className="text-blue-400">Key</span>
                <span className="text-orange-400">Nest</span>
              </div>
              <Image src="/placeholder.svg?height=40&width=40" alt="Microsoft Partner" width={40} height={40} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">OUR LOCATION</h3>
            <p className="text-slate-300 flex items-start gap-2 mb-2">
              <svg className="h-5 w-5 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                DigiStore Pro LLC, 123 Main Avenue,
                <br />
                Queens, NY 11434
              </span>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">INFORMATION</h3>
            <p className="text-slate-300 flex items-start gap-2 mb-2">
              <svg className="h-5 w-5 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Phone: +1 (800) 555-0199</span>
            </p>
            <p className="text-slate-300 flex items-start gap-2">
              <svg className="h-5 w-5 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email: sales@digistore.pro</span>
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
            <div className="flex md:justify-end gap-4 mb-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social, index) => (
                <Link
                  href="#"
                  key={index}
                  className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Image src={`/placeholder.svg?height=20&width=20`} alt={social} width={20} height={20} />
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {["visa", "mastercard", "amex", "paypal"].map((payment, index) => (
                <Image
                  key={index}
                  src={`/placeholder.svg?height=30&width=40`}
                  alt={payment}
                  width={40}
                  height={30}
                  className="rounded"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 pb-2">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <Link href="#" className="hover:text-blue-400">
                PRIVACY POLICY
              </Link>
              <Link href="#" className="hover:text-blue-400">
                DELIVERY & PAYMENT
              </Link>
              <Link href="#" className="hover:text-blue-400">
                REFUND POLICY
              </Link>
              <Link href="#" className="hover:text-blue-400">
                RETURNS & EXCHANGES
              </Link>
              <Link href="#" className="hover:text-blue-400">
                SHIPPING POLICY
              </Link>
              <Link href="#" className="hover:text-blue-400">
                TERMS AND CONDITIONS
              </Link>
            </div>
            <div className="text-sm text-slate-400 md:text-right">
              &copy; {new Date().getFullYear()} DigiStore Pro. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


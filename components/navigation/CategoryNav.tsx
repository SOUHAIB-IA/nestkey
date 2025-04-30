import Link from "next/link"

export function CategoryNav() {
  return (
    <div className="bg-blue-600 text-white relative">
     <div className="container mx-auto px-2 md:px-4">
     <div className="flex items-center overflow-x-auto py-0 gap-0 text-xs md:text-sm font-medium scrollbar-hide">
          {/* Browse Categories Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-2 whitespace-nowrap py-3 px-4 bg-blue-700 hover:bg-blue-800 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              BROWSE CATEGORIES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="absolute left-0 top-full z-50 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-blue-700 text-white py-2 shadow-lg">
                <CategoryLink href="/shop" icon="grid" label="ALL PRODUCTS" />
                <CategoryLink href="/shop/microsoft-office" icon="book-open" label="MICROSOFT OFFICE" />
                <CategoryLink href="/shop/office-products" icon="trending-up" label="OFFICE PRODUCTS" />
                <CategoryLink href="/shop/operating-system" icon="monitor" label="OPERATING SYSTEM" />
                <CategoryLink href="/shop/windows-server" icon="server" label="WINDOWS SERVER" />
                <CategoryLink href="/shop/antivirus-security" icon="shield" label="ANTIVIRUS & SECURITY" />
                <CategoryLink href="/shop/bundles" icon="package" label="BUNDLES" />
              </div>
              <div className="bg-white text-slate-800 p-4 shadow-lg">
                <h3 className="font-bold mb-2">STOCK STATUS</h3>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="on-sale" className="mr-2" />
                  <label htmlFor="on-sale">On sale</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="in-stock" className="mr-2" />
                  <label htmlFor="in-stock">In stock</label>
                </div>
              </div>
            </div>
          </div>

          {/* Other navigation items */}
          <CategoryNavItem href="/shop/operating-system" icon="monitor" label="OPERATING SYSTEM" />
          <CategoryNavItem href="/shop/microsoft-office" icon="book-open" label="MICROSOFT OFFICE" />
          <CategoryNavItem href="/shop/office-products" icon="trending-up" label="OFFICE PRODUCTS" />
          <CategoryNavItem href="/shop/windows-server" icon="server" label="WINDOWS SERVER" />
          <CategoryNavItem href="/shop/bundles" icon="package" label="BUNDLES" />

          <div className="relative ml-auto">
            <input
              type="search"
              placeholder="Search products..."
              className="py-1 px-3 rounded text-slate-900 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CategoryLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-800 transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        {icon === "grid" && (
          <>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </>
        )}
        {icon === "book-open" && (
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        )}
        {icon === "trending-up" && <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>}
        {icon === "monitor" && (
          <>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </>
        )}
        {icon === "server" && (
          <>
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </>
        )}
        {icon === "shield" || icon === "package" ? (
          <>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </>
        ) : null}
      </svg>
      {label}
    </Link>
  )
}

function CategoryNavItem({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Link href={href} className="whitespace-nowrap py-3 px-4 hover:bg-blue-700 flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        {icon === "monitor" && (
          <>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </>
        )}
        {icon === "book-open" && (
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        )}
        {icon === "trending-up" && <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>}
        {icon === "server" && (
          <>
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </>
        )}
        {icon === "package" && (
          <>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </>
        )}
      </svg>
      {label}
    </Link>
  )
}


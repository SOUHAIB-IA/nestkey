import { Metadata } from "next"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { CategoryNav } from "@/components/navigation/CategoryNav"
import { Footer } from "@/components/layout/Footer"
import { ProductFilters } from "@/components/shop/ProductFilters"

export const metadata: Metadata = {
  title: "Shop Digital Products & Software Keys | DigitoreKeys",
  description: "Browse our collection of authentic digital products, software keys, and licenses at the best prices. Instant delivery guaranteed."
}

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <MainHeader />
      <CategoryNav />

      <main className="flex-1 bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">All Products</h1>
            <div className="text-sm breadcrumbs text-slate-500">
              <ul className="flex gap-2">
                <li><a href="/">Home</a> /</li>
                <li>Shop</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <ProductFilters />
            </div>

            <div className="lg:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-sm text-slate-500">Showing 1-12 of 48 products</p>
                <div>Sort</div>
              </div>

              <div>Product Grid</div>
              <div className="mt-8 flex justify-center">
                <div className="join">
                  <button className="join-item btn bg-blue-600 text-white hover:bg-blue-700">1</button>
                  <button className="join-item btn">2</button>
                  <button className="join-item btn">3</button>
                  <button className="join-item btn">4</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 
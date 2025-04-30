import { Metadata } from "next"
import Link from "next/link"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { CategoryNav } from "@/components/navigation/CategoryNav"
import { Footer } from "@/components/layout/Footer"
import { ProductFilters } from "@/components/shop/ProductFilters"
import { ProductGrid } from "@/components/shop/ProductGrid"
import { ProductSort } from "@/components/shop/ProductSort"

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${category} - KeyNest`,
    description: `Browse our collection of ${category} products at KeyNest. Find the best deals on software licenses and digital products.`,
  }
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'microsoft-office': 'Browse our collection of Microsoft Office products including Word, Excel, PowerPoint, and more. All licenses are genuine and instantly delivered.',
    'operating-systems': 'Find the perfect operating system for your needs. We offer Windows 10, Windows 11, and other OS licenses at competitive prices.',
    'windows-server': 'Enterprise-grade Windows Server licenses for your business needs. Choose from various editions and versions.',
    'antivirus-security': 'Protect your devices with top-rated antivirus and security software. We offer licenses from leading security providers.',
    'bundles': 'Save money with our carefully curated software bundles. Get multiple products at discounted prices.',
    'office-products': 'Complete suite of Microsoft Office products and related software. Perfect for home and business use.',
  }
  
  return descriptions[category] || 'Browse our collection of high-quality software products and digital licenses.'
}

export default async function CategoryPage({ params }: Props) {
  const category = params.category
  // Convert kebab-case to Title Case for display
  const categoryName = category
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <MainHeader />
      <CategoryNav />

      <main className="flex-1 bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{categoryName}</h1>
            <div className="text-sm breadcrumbs text-slate-500">
              <ul className="flex gap-2">
                <li><Link href="/">Home</Link> /</li>
                <li><Link href="/shop">Shop</Link> /</li>
                <li>{categoryName}</li>
              </ul>
            </div>
          </div>

          {/* Category Description */}
          <div className="mb-8">
            <p className="text-slate-700">{getCategoryDescription(category)}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-slate-600">
                  Showing <span className="font-medium">1-12</span> of <span className="font-medium">100</span> products
                </div>
                <ProductSort />
              </div>

              <ProductGrid category={category} />
              
              <div className="mt-8 flex justify-center">
                <div className="join">
                  <button className="join-item btn btn-sm">«</button>
                  <button className="join-item btn btn-sm btn-active">1</button>
                  <button className="join-item btn btn-sm">2</button>
                  <button className="join-item btn btn-sm">3</button>
                  <button className="join-item btn btn-sm">»</button>
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
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

type Product = {
  id: string
  slug: string
  name: string
  price: number
  oldPrice?: number
  image: string
  badge?: string
  rating: number
  category: string
}

type ProductGridProps = {
  category?: string
}

export function ProductGrid({ category }: ProductGridProps) {
  // Mock products data
  const allProducts: Product[] = [
    {
      id: "1",
      slug: "microsoft-office-2021-pro-plus",
      name: "Microsoft Office 2021 Professional Plus",
      price: 79.99,
      oldPrice: 149.99,
      image: "/placeholder.svg?height=200&width=200",
      badge: "SALE",
      rating: 5,
      category: "microsoft-office"
    },
    {
      id: "2",
      slug: "microsoft-office-2021-home-business",
      name: "Microsoft Office 2021 Home & Business",
      price: 129.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      category: "microsoft-office"
    },
    {
      id: "3",
      slug: "windows-11-pro",
      name: "Windows 11 Pro",
      price: 99.99,
      oldPrice: 199.99,
      image: "/placeholder.svg?height=200&width=200",
      badge: "HOT",
      rating: 5,
      category: "operating-system"
    },
    {
      id: "4",
      slug: "windows-10-home",
      name: "Windows 10 Home",
      price: 79.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      category: "operating-system"
    },
    {
      id: "5",
      slug: "windows-server-2022-standard",
      name: "Windows Server 2022 Standard",
      price: 299.99,
      image: "/placeholder.svg?height=200&width=200",
      badge: "NEW",
      rating: 4,
      category: "windows-server"
    },
    {
      id: "6",
      slug: "norton-360-deluxe",
      name: "Norton 360 Deluxe - 3 Devices",
      price: 49.99,
      oldPrice: 89.99,
      image: "/placeholder.svg?height=200&width=200",
      badge: "SALE",
      rating: 4,
      category: "antivirus-security"
    },
    {
      id: "7",
      slug: "office-windows-bundle",
      name: "Microsoft Office 2021 + Windows 11 Pro Bundle",
      price: 149.99,
      oldPrice: 279.99,
      image: "/placeholder.svg?height=200&width=200",
      badge: "BUNDLE",
      rating: 5,
      category: "bundles"
    },
    {
      id: "8",
      slug: "kaspersky-total-security",
      name: "Kaspersky Total Security - 5 Devices",
      price: 59.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      category: "antivirus-security"
    },
    {
      id: "9",
      slug: "project-visio-bundle",
      name: "Microsoft Project + Visio Professional 2021 Bundle",
      price: 199.99,
      oldPrice: 349.99,
      image: "/placeholder.svg?height=200&width=200",
      badge: "BUNDLE",
      rating: 5,
      category: "bundles"
    },
    {
      id: "10",
      slug: "office-2019-pro-plus",
      name: "Microsoft Office 2019 Professional Plus",
      price: 69.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      category: "microsoft-office"
    },
    {
      id: "11",
      slug: "windows-server-2019-standard",
      name: "Windows Server 2019 Standard",
      price: 249.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      category: "windows-server"
    },
    {
      id: "12",
      slug: "office-365-personal",
      name: "Microsoft 365 Personal - 1 Year Subscription",
      price: 59.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      category: "microsoft-office"
    },
  ]

  // Filter products by category if provided
  const products = category 
    ? allProducts.filter(product => product.category === category)
    : allProducts

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative">
        {product.badge && (
          <Badge className="absolute top-2 right-2 bg-blue-600">{product.badge}</Badge>
        )}
        <Link href={`/shop/${product.category}/${product.slug}`}>
          <div className="p-6 flex justify-center bg-white">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain h-48 w-48 transition-transform group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
      
      <CardContent className="p-4 flex flex-col flex-grow">
        <Link href={`/shop/${product.category}/${product.slug}`} className="group-hover:text-blue-600 transition-colors">
          <h3 className="font-medium text-sm mb-2 line-clamp-2 flex-grow">{product.name}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            {product.oldPrice ? (
              <div className="flex flex-col">
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                <span className="text-sm text-slate-500 line-through">${product.oldPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Product = {
  name: string
  price: string
  image: string
  badge: string
  rating: number
}

export function ProductSection() {
  const products: Product[] = [
    {
      name: "Microsoft Office 2019 Professional Plus",
      price: "$79.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "NEW",
      rating: 5,
    },
    {
      name: "Microsoft Office 2021 Home & Business",
      price: "$129.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "SALE",
      rating: 4,
    },
    {
      name: "Microsoft Office Professional 2021",
      price: "$149.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "HOT",
      rating: 5,
    },
    {
      name: "Microsoft Windows 11 Home",
      price: "$99.99",
      image: "/placeholder.svg?height=200&width=200",
      badge: "NEW",
      rating: 4,
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What We Have For You</h2>
          <p className="text-slate-500">Search for more in our range of Key Applications that you require</p>
        </div>

        <Tabs defaultValue="new" className="mb-12">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="new">NEW PRODUCTS</TabsTrigger>
            <TabsTrigger value="sales">SALES PRODUCTS</TabsTrigger>
            <TabsTrigger value="bestsellers">BESTSELLERS</TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sales">
            <div className="text-center py-12">
              <p className="text-slate-500">View our sales products with special discounts</p>
            </div>
          </TabsContent>

          <TabsContent value="bestsellers">
            <div className="text-center py-12">
              <p className="text-slate-500">Check out our most popular products</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative">
        <Badge className="absolute top-2 right-2 bg-blue-600">{product.badge}</Badge>
        <div className="p-6 flex justify-center bg-white">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain h-48 w-48 transition-transform group-hover:scale-105"
          />
        </div>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-sm mb-2 line-clamp-2 flex-grow">{product.name}</h3>
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
          <span className="font-bold text-lg">{product.price}</span>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


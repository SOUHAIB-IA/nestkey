import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type Category = {
  name: string
  count: number
  icon: string
}

export function CategorySection() {
  const categories: Category[] = [
    { name: "BUNDLES", count: 14, icon: "/placeholder.svg?height=60&width=60" },
    { name: "MICROSOFT OFFICE", count: 25, icon: "/placeholder.svg?height=60&width=60" },
    { name: "MICROSOFT WINDOWS", count: 19, icon: "/placeholder.svg?height=60&width=60" },
    { name: "OFFICE APPLICATION", count: 16, icon: "/placeholder.svg?height=60&width=60" },
    { name: "WINDOWS SERVER", count: 20, icon: "/placeholder.svg?height=60&width=60" },
  ]

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Top Categories</h2>
          <p className="text-slate-500">Browse Software Categories for Key Applications</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link href="#" key={index}>
              <Card className="text-center hover:shadow-md transition-shadow h-full flex flex-col items-center justify-center py-6">
                <CardContent className="p-4 flex flex-col items-center">
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                  <span className="text-xs text-slate-500">({category.count})</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { CategoryNav } from "@/components/navigation/CategoryNav"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Check } from "lucide-react"
import { ProductReviews } from "@/components/shop/ProductReviews"
import { RelatedProducts } from "@/components/shop/RelatedProducts"



interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

// This would be replaced with actual data fetching from a database or API
const getProductData = (slug: String) => {
  // Mock data for the Microsoft Office 2021 Pro Plus product
  return {
    id: "1",
    slug: "microsoft-office-2021-pro-plus",
    name: "Microsoft Office 2021 Professional Plus",
    price: 79.99,
    oldPrice: 149.99,
    image: "/placeholder.svg?height=500&width=500",
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500&text=Image2",
      "/placeholder.svg?height=500&width=500&text=Image3",
    ],
    badge: "SALE",
    rating: 5,
    ratingCount: 36,
    category: "microsoft-office",
    description: `
      <p>Microsoft Office 2021 Professional Plus is the latest version of Microsoft's productivity suite, designed for users who need the full range of Office apps and features for work or business use.</p>
      <p>This digital product key is delivered instantly via email after purchase, allowing you to download and activate the full version of Office 2021 Professional Plus on your Windows PC.</p>
    `,
    features: [
      "One-time purchase for 1 PC",
      "Includes Word, Excel, PowerPoint, Outlook, Publisher, Access, and OneNote",
      "Classic 2021 versions of Office apps with all the latest features",
      "Microsoft support included for 60 days at no extra cost",
      "Compatible with Windows 10 and Windows 11",
      "Lifetime license for home and commercial use"
    ],
    specifications: [
      { name: "Product Type", value: "Digital License Key" },
      { name: "Version", value: "Microsoft Office 2021 Professional Plus" },
      { name: "Language", value: "Multilingual" },
      { name: "Activation", value: "Online Activation" },
      { name: "Platform", value: "Windows 10/11" },
      { name: "License Type", value: "Perpetual License" },
      { name: "Delivery", value: "Instant Email Delivery" },
      { name: "Updates", value: "Security updates included" },
      { name: "Applications", value: "Word, Excel, PowerPoint, Outlook, Publisher, Access, OneNote" }
    ],
    systemRequirements: [
      "Operating System: Windows 10 or Windows 11",
      "Processor: 1.6 GHz or faster, 2-core",
      "Memory: 4 GB RAM (64-bit); 2 GB RAM (32-bit)",
      "Hard disk space: 4 GB of available disk space",
      "Display: 1280 x 768 screen resolution",
      "Graphics: DirectX 9 or later with WDDM 2.0 or higher for Windows 10",
      "Internet access to install and activate Office"
    ],
    stock: 999,
    sku: "MS-OFF21-PRO-PLUS",
    reviews: [
      {
        id: "1",
        user: "John Doe",
        rating: 5,
        date: "2023-03-15",
        title: "Excellent product, fast delivery",
        content: "I received my activation key within minutes of purchase. Installation was straightforward and everything works perfectly. Great value for money!"
      },
      {
        id: "2",
        user: "Sarah Johnson",
        rating: 5,
        date: "2023-02-28",
        title: "Professional service",
        content: "Very happy with my purchase. The key arrived instantly and activated without any issues. Office 2021 is a great improvement over my previous version."
      },
      {
        id: "3",
        user: "Michael Brown",
        rating: 4,
        date: "2023-02-10",
        title: "Good product, slight delay",
        content: "The product works well and the price is fantastic. Only giving 4 stars because my key took about 15 minutes to arrive rather than instantly, but still very good overall."
      }
    ]
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductData(params.slug)
  
  return {
    title: `${product.name} | DigitoreKeys`,
    description: `Buy ${product.name} at the best price. Instant delivery, lifetime license, and free support included.`,
    openGraph: {
      title: `${product.name} | DigitoreKeys`,
      description: `Buy ${product.name} at the best price. Instant delivery, lifetime license, and free support included.`,
      type: 'website',
    },
  }
}

export default function ProductPage({ params }: PageProps) {
  const { category, slug } = params;
  const product = getProductData(params.slug)
  const categoryName = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <MainHeader />
      <CategoryNav />

      <main className="flex-1 bg-slate-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="text-sm breadcrumbs text-slate-500 mb-8">
            <ul className="flex gap-2">
              <li><Link href="/">Home</Link> /</li>
              <li><Link href="/shop">Shop</Link> /</li>
              <li><Link href={`/shop/${params.category}`}>{categoryName}</Link> /</li>
              <li className="text-slate-700">{product.name}</li>
            </ul>
          </div>

          {/* Product Info Section */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Product Images */}
              <div>
                <div className="bg-white border rounded-lg p-4 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {product.images.map((img, index) => (
                    <div key={index} className="border rounded-lg p-2 cursor-pointer hover:border-blue-600">
                      <Image
                        src={img}
                        alt={`${product.name} image ${index + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  <span className="text-sm text-slate-600 ml-2">{product.ratingCount} reviews</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {product.oldPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                      <span className="text-lg text-slate-500 line-through">${product.oldPrice.toFixed(2)}</span>
                      <span className="bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
                        SAVE {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                  )}
                </div>

                <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-slate-700 mb-6" />

                {/* Key Benefits */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium">In Stock</span>
                    <span className="text-slate-500 ml-2">({product.stock} available)</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    <span className="font-medium">SKU:</span> {product.sku}
                  </div>
                </div>

                {/* Add to cart */}
                <div className="mt-auto flex flex-wrap gap-4">
                  <div className="flex items-center border rounded-md w-32">
                    <button className="px-3 py-2 text-xl">-</button>
                    <input
                      type="number"
                      value="1"
                      min="1"
                      className="w-full border-0 text-center focus:ring-0"
                    />
                    <button className="px-3 py-2 text-xl">+</button>
                  </div>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 h-12 text-base">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <Tabs defaultValue="description" className="p-6">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="requirements">System Requirements</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="text-slate-700 space-y-4">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
                
                <h3 className="font-bold text-lg mt-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <h3 className="font-bold text-lg mt-4">Why Choose DigitoreKeys?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Instant Digital Delivery: Receive your product key within minutes of purchase</li>
                  <li>Genuine Products: All our software licenses are 100% genuine and authentic</li>
                  <li>Lifetime Support: Our support team is available 24/7 to assist with any issues</li>
                  <li>Secure Payments: Your transactions are protected by industry-standard encryption</li>
                  <li>Satisfaction Guarantee: We're confident in our products and service quality</li>
                </ul>
              </TabsContent>

              <TabsContent value="specifications">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : ""}>
                          <td className="py-3 px-4 font-medium">{spec.name}</td>
                          <td className="py-3 px-4">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="requirements">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">System Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {product.systemRequirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <ProductReviews productId={parseInt(product.id)} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <RelatedProducts category={params.category} currentProductId={product.id} />
        </div>
      </main>

      <Footer />

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": [product.image],
            "description": product.description.replace(/<[^>]*>?/gm, ''),
            "sku": product.sku,
            "mpn": product.sku,
            "brand": {
              "@type": "Brand",
              "name": "Microsoft"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://digitorekeys.com/shop/${params.category}/${params.slug}`,
              "priceCurrency": "USD",
              "price": product.price.toFixed(2),
              "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "DigitoreKeys"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.rating,
              "reviewCount": product.ratingCount
            },
            "review": product.reviews.map(review => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating
              },
              "author": {
                "@type": "Person",
                "name": review.user
              },
              "reviewBody": review.content,
              "datePublished": review.date
            }))
          })
        }}
      />
    </div>
  )
} 
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

type DigitalProduct = {
  id: string
  name: string
  purchaseDate: string
  expiryDate: string | null
  downloadCount: number
  maxDownloads: number | null
  image: string
}

export function DownloadHistory() {
  // Mock data - in a real app, this would come from API or state
  const products: DigitalProduct[] = [
    {
      id: "1",
      name: "Microsoft Office 2021 Professional Plus",
      purchaseDate: "June 12, 2023",
      expiryDate: null, // No expiry (lifetime license)
      downloadCount: 2,
      maxDownloads: 5,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      id: "2",
      name: "Windows 11 Pro",
      purchaseDate: "May 28, 2023",
      expiryDate: null,
      downloadCount: 1,
      maxDownloads: 5,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      id: "3",
      name: "Microsoft 365 Personal - 1 Year Subscription",
      purchaseDate: "April 15, 2023",
      expiryDate: "April 15, 2024", // 1 year from purchase
      downloadCount: 3,
      maxDownloads: null, // Unlimited downloads
      image: "/placeholder.svg?height=80&width=80"
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Downloads</h2>
      
      <div className="space-y-6">
        {products.length === 0 ? (
          <div className="text-center py-12 bg-white border rounded-lg">
            <div className="flex justify-center mb-4">
              <Download className="h-16 w-16 text-slate-300" />
            </div>
            <h3 className="text-lg font-medium text-slate-700 mb-2">No downloads available</h3>
            <p className="text-slate-500 mb-6">You haven't purchased any digital products yet.</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Browse Products
            </Button>
          </div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm mb-4">
                    <div>
                      <span className="text-slate-500">Purchased:</span>{" "}
                      <span className="font-medium">{product.purchaseDate}</span>
                    </div>
                    
                    {product.expiryDate && (
                      <div>
                        <span className="text-slate-500">Expires:</span>{" "}
                        <span className="font-medium">{product.expiryDate}</span>
                      </div>
                    )}
                    
                    <div>
                      <span className="text-slate-500">Downloads:</span>{" "}
                      <span className="font-medium">
                        {product.downloadCount} / {product.maxDownloads || "∞"}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 flex flex-col gap-2">
                  <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  
                  <Button variant="outline" className="text-sm">
                    View License Key
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {products.length > 0 && (
        <div className="mt-4 text-sm text-slate-500">
          <p>
            <span className="font-medium">Note:</span> Some products may have a limited number of
            downloads or expiration dates. Please ensure you save your downloaded files securely.
          </p>
        </div>
      )}
    </div>
  )
} 
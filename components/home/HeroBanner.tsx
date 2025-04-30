import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <div className="col-span-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl overflow-hidden relative min-h-[300px]">
            <div className="p-8 flex flex-col h-full justify-center">
              <div className="max-w-md">
                <h2 className="text-white text-4xl font-bold mb-4">OFFICE 21 IS HERE!</h2>
                <p className="text-white/90 mb-6">
                  Get the latest Microsoft Office suite with advanced features and improved performance.
                </p>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold">BUY CHEAPER!</Button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Office 21"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 flex flex-col justify-between">
              <h3 className="text-white text-xl font-bold">OPERATING SYSTEMS</h3>
              <div className="flex justify-between items-end">
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Shop Now
                </Button>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Operating Systems"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 flex flex-col justify-between">
              <h3 className="text-white text-xl font-bold">MICROSOFT WINDOWS SERVERS</h3>
              <div className="flex justify-between items-end">
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Shop Now
                </Button>
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Windows Servers"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


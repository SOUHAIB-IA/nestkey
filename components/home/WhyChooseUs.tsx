import Image from "next/image"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyChooseUs() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Why Choose Us"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-slate-600 mb-8">
              At DigiStore, we're committed to providing you with software keys. We're not just a platform; we're your
              software solution partner. Here's why you should choose DigiStore:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Expertise at Your Fingertips</h3>
                  <p className="text-slate-600 text-sm">
                    Our team consists of highly experienced technicians who know our products inside and out. We're here
                    to help you find the perfect software for your unique needs, and to resolve your concerns quickly
                    and efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


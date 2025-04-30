import type React from "react"
import { Download, Phone, MessageCircle, Globe } from "lucide-react"

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <Download className="h-8 w-8 mx-auto text-blue-600" />,
      title: "Digital Licenses",
      description: "Delivered instantly by email",
    },
    {
      icon: <Phone className="h-8 w-8 mx-auto text-blue-600" />,
      title: "Give Us A Call",
      description: "We offer 24/7 live support",
    },
    {
      icon: <MessageCircle className="h-8 w-8 mx-auto text-blue-600" />,
      title: "Chat With Us",
      description: "support@digistore.pro",
    },
    {
      icon: <Globe className="h-8 w-8 mx-auto text-blue-600" />,
      title: "GLOBAL LICENSES",
      description: "No region restrictions after purchase",
    },
  ]

  return (
    <section className="py-6 md:py-12 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              {feature.icon}
              <h3 className="font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


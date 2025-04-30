import Image from "next/image"

type Step = {
  step: number
  title: string
  description: string
  image: string
}

export function ProcessSection() {
  const steps: Step[] = [
    {
      step: 1,
      title: "Add a product to the shopping cart",
      description: "Browse our catalog, find the software you need, and add it to your cart with a single click.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      step: 2,
      title: "Apply promo code at checkout",
      description: "Enter your promo code during checkout for additional savings on your purchase.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      step: 3,
      title: "Receive activation key & download link in mailbox",
      description: "After purchase, we'll instantly email you the activation key and download link.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get Your Software in Seconds</h2>
          <p className="text-slate-500">
            DEDICATED: You stream-lined software downloads into just a swift 1-2-3 process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-6">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={`Step ${step.step}`}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-slate-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


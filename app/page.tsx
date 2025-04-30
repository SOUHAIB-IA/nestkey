import { TopBar } from "../components/layout/TopBar"
import { MainHeader } from "../components/layout/MainHeader"
import { CategoryNav } from "../components/navigation/CategoryNav"
import { HeroBanner } from "@/components/home/HeroBanner"
import { CategorySection } from "@/components/home/CategorySection"
import { ProductSection } from "@/components/home/ProductSection"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { ProcessSection } from "@/components/home/ProcessSection"
import { FeaturesSection } from "@/components/home/FeaturesSection"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <MainHeader />
      <CategoryNav />

      <main>
        <HeroBanner />
        <CategorySection />
        <ProductSection />
        <WhyChooseUs />
        <ProcessSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  )
}


import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServiceCategories } from "@/components/service-categories"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <FeaturesSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}

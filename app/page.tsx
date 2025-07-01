import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServiceCategories } from "@/components/service-categories"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { AIVoiceAssistant } from "@/components/ai-voice-assistant"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <ServiceCategories />
        <FeaturesSection />
      </main>
      <Footer />
      <AIVoiceAssistant />
    </div>
  )
}

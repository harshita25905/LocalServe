import { Header } from "@/components/header"
import { ServiceFilters } from "@/components/service-filters"
import { ProviderCard } from "@/components/provider-card"
import { Footer } from "@/components/footer"
import { AIVoiceAssistant } from "@/components/ai-voice-assistant"

const mockProviders = [
  {
    id: 1,
    name: "Rajesh Kumar",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.8,
    serviceType: "Carpenter",
    distance: "1.2 km",
    price: "₹500/hour",
    verified: true,
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Priya Sharma",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    serviceType: "House Cleaning",
    distance: "0.8 km",
    price: "₹300/hour",
    verified: true,
    availability: "Available Tomorrow",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.7,
    serviceType: "Electrician",
    distance: "2.1 km",
    price: "₹400/hour",
    verified: true,
    availability: "Available Today",
  },
  {
    id: 4,
    name: "Sunita Devi",
    photo: "/placeholder.svg?height=80&width=80",
    rating: 4.6,
    serviceType: "Maid Services",
    distance: "1.5 km",
    price: "₹250/hour",
    verified: false,
    availability: "Available Today",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Providers</h1>
          <p className="text-gray-600">Find trusted professionals near you</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <ServiceFilters />
          </aside>

          <div className="lg:w-3/4">
            <div className="grid gap-6">
              {mockProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AIVoiceAssistant />
    </div>
  )
}

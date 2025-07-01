import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Star, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All service providers are background-checked and verified for your safety",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book services anytime with our round-the-clock booking system",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Rated services with money-back guarantee for complete satisfaction",
  },
  {
    icon: Headphones,
    title: "AI-Powered Support",
    description: "Get instant help with our smart chatbot and customer support",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LocalServe?</h2>
          <p className="text-xl text-gray-600">Experience the difference with our premium service platform</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Star, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All service providers are background-checked and verified for your safety",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book services anytime with our round-the-clock booking system",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Rated services with money-back guarantee for complete satisfaction",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Headphones,
    title: "AI-Powered Support",
    description: "Get instant help with our smart chatbot and customer support",
    color: "bg-purple-100 text-purple-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Why Choose LocalServe?
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            Experience the difference with our premium service platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-3 animate-fade-in-up border-0 shadow-md"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12`}
                >
                  <feature.icon className="w-8 h-8 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-200 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-200 group-hover:text-gray-700">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Shield, Heart, ChevronRight } from "lucide-react"

const recommendedProviders = [
  {
    name: "Amit Patel",
    service: "Electrician",
    rating: 4.9,
    distance: "1.5 km",
    photo: "/placeholder.svg?height=60&width=60",
    price: "₹400/hr",
    availability: "Available Now",
    verified: true,
    completedJobs: 150,
    responseTime: "15 min",
  },
  {
    name: "Sunita Sharma",
    service: "House Cleaning",
    rating: 4.8,
    distance: "2.1 km",
    photo: "/placeholder.svg?height=60&width=60",
    price: "₹300/hr",
    availability: "Available Today",
    verified: true,
    completedJobs: 89,
    responseTime: "30 min",
  },
  {
    name: "Ravi Kumar",
    service: "Carpenter",
    rating: 4.7,
    distance: "1.8 km",
    photo: "/placeholder.svg?height=60&width=60",
    price: "₹500/hr",
    availability: "Available Tomorrow",
    verified: false,
    completedJobs: 67,
    responseTime: "45 min",
  },
]

export function RecommendedProviders() {
  const [expandedProvider, setExpandedProvider] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (index: number) => {
    setFavorites((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Recommended for You
          <Badge variant="secondary" className="text-xs">
            AI Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendedProviders.map((provider, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 transition-all duration-300 hover:shadow-md ${
              expandedProvider === index ? "ring-2 ring-blue-500 shadow-lg" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={provider.photo || "/placeholder.svg"}
                  alt={provider.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {provider.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900 truncate">{provider.name}</h4>
                  <button onClick={() => toggleFavorite(index)} className="transition-colors duration-200">
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.includes(index) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"
                      }`}
                    />
                  </button>
                </div>

                <p className="text-sm text-gray-600">{provider.service}</p>

                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {provider.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {provider.distance}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {provider.responseTime}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-900">{provider.price}</p>
                <p className="text-xs text-green-600">{provider.availability}</p>
              </div>
            </div>

            {expandedProvider === index && (
              <div className="mt-4 pt-4 border-t animate-fade-in">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Completed Jobs</p>
                    <p className="font-semibold">{provider.completedJobs}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Response Time</p>
                    <p className="font-semibold">{provider.responseTime}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1">
                    Book Now
                  </Button>
                </div>
              </div>
            )}

            <button
              onClick={() => setExpandedProvider(expandedProvider === index ? null : index)}
              className="w-full flex items-center justify-center mt-3 pt-3 border-t text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
            >
              {expandedProvider === index ? "Show Less" : "Show More"}
              <ChevronRight
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  expandedProvider === index ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        ))}

        <Button variant="outline" className="w-full mt-4 bg-transparent">
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  )
}

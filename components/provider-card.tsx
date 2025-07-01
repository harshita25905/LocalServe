import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Shield } from "lucide-react"

interface Provider {
  id: number
  name: string
  photo: string
  rating: number
  serviceType: string
  distance: string
  price: string
  verified: boolean
  availability: string
}

interface ProviderCardProps {
  provider: Provider
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 border-0 shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={provider.photo || "/placeholder.svg"}
                alt={provider.name}
                className="w-20 h-20 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {provider.verified && (
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 transition-transform duration-300 group-hover:scale-110">
                  <Shield className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 transition-colors duration-200 group-hover:text-blue-600">
                  {provider.name}
                  {provider.verified && <Shield className="w-4 h-4 text-green-500 animate-pulse" />}
                </h3>
                <p className="text-gray-600 transition-colors duration-200 group-hover:text-gray-700">
                  {provider.serviceType}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-medium">{provider.rating}</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                  {provider.price}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="secondary"
                className="flex items-center gap-1 transition-all duration-200 hover:scale-105"
              >
                <MapPin className="w-3 h-3" />
                {provider.distance}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 transition-all duration-200 hover:scale-105">
                <Clock className="w-3 h-3" />
                {provider.availability}
              </Badge>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 transition-all duration-200 hover:scale-105 hover:shadow-lg">Book Now</Button>
              <Button
                variant="outline"
                className="transition-all duration-200 hover:scale-105 hover:shadow-md bg-transparent"
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

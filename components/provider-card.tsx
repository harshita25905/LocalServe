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
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0">
            <img
              src={provider.photo || "/placeholder.svg"}
              alt={provider.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  {provider.name}
                  {provider.verified && <Shield className="w-4 h-4 text-green-500" />}
                </h3>
                <p className="text-gray-600">{provider.serviceType}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{provider.rating}</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{provider.price}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {provider.distance}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {provider.availability}
              </Badge>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1">Book Now</Button>
              <Button variant="outline">View Profile</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

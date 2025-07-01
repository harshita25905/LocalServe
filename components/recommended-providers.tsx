import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"

const recommendedProviders = [
  {
    name: "Amit Patel",
    service: "Electrician",
    rating: 4.9,
    distance: "1.5 km",
    photo: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sunita Sharma",
    service: "House Cleaning",
    rating: 4.8,
    distance: "2.1 km",
    photo: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ravi Kumar",
    service: "Carpenter",
    rating: 4.7,
    distance: "1.8 km",
    photo: "/placeholder.svg?height=60&width=60",
  },
]

export function RecommendedProviders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended for You</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendedProviders.map((provider, index) => (
          <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
            <img
              src={provider.photo || "/placeholder.svg"}
              alt={provider.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{provider.name}</h4>
              <p className="text-sm text-gray-600">{provider.service}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {provider.rating}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {provider.distance}
                </div>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Book
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

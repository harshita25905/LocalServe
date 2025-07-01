"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { LocationSearch } from "@/components/location-search"
import type { Location } from "@/data/locations"

export function ServiceFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    console.log("Filter location selected:", location)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Location</Label>
          <LocationSearch
            placeholder="Search location..."
            onLocationSelect={handleLocationSelect}
            showPopular={false}
          />
          {selectedLocation && (
            <div className="mt-1 text-xs text-gray-500">
              Selected: {selectedLocation.name}, {selectedLocation.state}
            </div>
          )}
        </div>

        {/* Service Type */}
        <div>
          <Label className="text-sm font-medium">Service Type</Label>
          <div className="space-y-2 mt-2">
            {["Carpenter", "Electrician", "Plumber", "Cleaner", "Maid"].map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox id={service} />
                <Label htmlFor={service} className="text-sm">
                  {service}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <Label className="text-sm font-medium">Minimum Rating</Label>
          <div className="space-y-2 mt-2">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <Label htmlFor={`rating-${rating}`} className="text-sm">
                  {rating}+ Stars
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium">Price Range (₹/hour)</Label>
          <div className="mt-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={50} className="w-full" />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div>
          <Label className="text-sm font-medium">Availability</Label>
          <div className="space-y-2 mt-2">
            {["Available Today", "Available Tomorrow", "This Week"].map((availability) => (
              <div key={availability} className="flex items-center space-x-2">
                <Checkbox id={availability} />
                <Label htmlFor={availability} className="text-sm">
                  {availability}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LocationSearch } from "@/components/location-search"
import type { Location } from "@/data/locations"
import { ServiceSearch } from "@/components/service-search"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [service, setService] = useState("")
  const router = useRouter()

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    console.log("Selected location:", location)
  }

  const handleSearch = () => {
    if (selectedLocation && service) {
      console.log("Searching for:", service, "in", selectedLocation.name)
      // Navigate to services page with filters
      window.location.href = `/services?location=${selectedLocation.id}&service=${encodeURIComponent(service)}`
    }
  }

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Find Trusted Local Services Near You
          </h1>

          {/* Animated subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-300">
            Connect with verified professionals for all your home service needs
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg mb-8 animate-fade-in-up animation-delay-600 hover:shadow-xl transition-shadow duration-300 relative z-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <LocationSearch
                  placeholder="Enter your location"
                  onLocationSelect={handleLocationSelect}
                  showPopular={true}
                  dropdownDirection="auto"
                  maxHeight={200}
                />
              </div>
              <div className="flex-1 relative">
                <ServiceSearch
                  placeholder="What service do you need?"
                  onServiceSelect={(selectedService) => setService(selectedService)}
                  showPopular={true}
                  dropdownDirection="auto"
                  maxHeight={200}
                />
              </div>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg relative z-20"
                onClick={handleSearch}
                disabled={!selectedLocation || !service}
              >
                Search Services
              </Button>
            </div>

            {selectedLocation && (
              <div className="mt-2 text-sm text-gray-600 animate-fade-in relative z-10">
                📍 Searching in:{" "}
                <span className="font-medium">
                  {selectedLocation.name}, {selectedLocation.state}
                </span>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900 mt-16 md:mt-8">
            <Button
              size="lg"
              variant="secondary"
              className="text-blue-600 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
              onClick={() => router.push("/services")}
            >
              Book a Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
              onClick={() => router.push("/provider/register")}
            >
              Register as Provider
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

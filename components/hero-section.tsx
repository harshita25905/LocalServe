"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  const [location, setLocation] = useState("")
  const [service, setService] = useState("")

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Trusted Local Services Near You</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Connect with verified professionals for all your home service needs
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 text-gray-900"
                />
              </div>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="What service do you need?"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="pl-10 text-gray-900"
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Search Services
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Book a Service
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Register as Provider
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

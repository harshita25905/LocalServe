"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, MapPin, Clock } from "lucide-react"

export function ProviderRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    location: "",
    experience: "",
    description: "",
    availability: [] as string[],
  })

  const serviceTypes = [
    "Carpenter",
    "Electrician",
    "Plumber",
    "House Cleaning",
    "Maid Services",
    "Tile & Flooring Work",
    "Glass & Aluminium Work",
    "House Shifting",
    "Submersible Pump Repair",
  ]

  const availabilityOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const handleAvailabilityChange = (day: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        availability: [...prev.availability, day],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        availability: prev.availability.filter((d) => d !== day),
      }))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Provider Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="+91 9876543210"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="your.email@example.com"
          />
        </div>

        {/* Service Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              type="number"
              value={formData.experience}
              onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
              placeholder="5"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Service Location *</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
              placeholder="Enter your service area"
              className="pl-10"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Service Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            placeholder="Describe your services and expertise..."
            rows={4}
          />
        </div>

        {/* Availability */}
        <div>
          <Label className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4" />
            Availability *
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {availabilityOptions.map((day) => (
              <div key={day} className="flex items-center space-x-2">
                <Checkbox
                  id={day}
                  checked={formData.availability.includes(day)}
                  onCheckedChange={(checked) => handleAvailabilityChange(day, checked as boolean)}
                />
                <Label htmlFor={day} className="text-sm">
                  {day}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Document Upload */}
        <div>
          <Label>Upload ID Proof *</Label>
          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>

        {/* Verification Status */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-medium text-yellow-800 mb-1">Verification Process</h4>
          <p className="text-sm text-yellow-700">
            After registration, our team will verify your documents and profile. This usually takes 24-48 hours. You'll
            receive an email once approved.
          </p>
        </div>

        <Button className="w-full" size="lg">
          Register as Provider
        </Button>
      </CardContent>
    </Card>
  )
}

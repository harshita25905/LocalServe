"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { DashboardStats } from "@/components/dashboard-stats"
import { BookingCard } from "@/components/booking-card"
import { RecommendedProviders } from "@/components/recommended-providers"
import { Footer } from "@/components/footer"
import { AIVoiceAssistant } from "@/components/ai-voice-assistant"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, Filter, Calendar, TrendingUp, Users, MapPin, Star, Gift } from "lucide-react"

const upcomingBookings = [
  {
    id: 1,
    service: "House Cleaning",
    provider: "Priya Sharma",
    date: "Today, 2:00 PM",
    status: "confirmed" as const,
    price: "₹600",
    image: "/placeholder.svg?height=50&width=50",
    rating: 4.9,
    location: "Andheri West",
  },
  {
    id: 2,
    service: "Plumbing",
    provider: "Amit Singh",
    date: "Tomorrow, 10:00 AM",
    status: "pending" as const,
    price: "₹800",
    image: "/placeholder.svg?height=50&width=50",
    rating: 4.7,
    location: "Bandra East",
  },
  {
    id: 3,
    service: "Electrical Work",
    provider: "Rajesh Kumar",
    date: "Dec 15, 3:00 PM",
    status: "completed" as const,
    price: "₹1,200",
    image: "/placeholder.svg?height=50&width=50",
    rating: 4.8,
    location: "Powai",
  },
]

const recentActivity = [
  {
    type: "booking",
    message: "New booking confirmed with Priya Sharma",
    time: "2 hours ago",
    icon: Calendar,
    color: "text-green-600",
  },
  {
    type: "rating",
    message: "You rated Amit Singh 5 stars",
    time: "1 day ago",
    icon: Star,
    color: "text-yellow-600",
  },
  {
    type: "offer",
    message: "Special discount available for cleaning services",
    time: "2 days ago",
    icon: Gift,
    color: "text-purple-600",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [showNotifications, setShowNotifications] = useState(false)

  const filteredBookings = upcomingBookings.filter((booking) => {
    if (activeTab === "all") return true
    return booking.status === activeTab
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h1>
              <p className="text-gray-600">Here's what's happening with your services today.</p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Notifications Panel */}
        {showNotifications && (
          <Card className="mb-6 animate-fade-in-down">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center`}>
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Section */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Bookings Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Bookings</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Booking Tabs */}
            <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
              {[
                { key: "all", label: "All", count: upcomingBookings.length },
                {
                  key: "confirmed",
                  label: "Confirmed",
                  count: upcomingBookings.filter((b) => b.status === "confirmed").length,
                },
                {
                  key: "pending",
                  label: "Pending",
                  count: upcomingBookings.filter((b) => b.status === "pending").length,
                },
                {
                  key: "completed",
                  label: "Completed",
                  count: upcomingBookings.filter((b) => b.status === "completed").length,
                },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === tab.key ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {tab.count}
                  </Badge>
                </button>
              ))}
            </div>

            {/* Bookings List */}
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>

            {filteredBookings.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
                <p className="text-gray-600 mb-4">You don't have any {activeTab} bookings at the moment.</p>
                <Button>Book a Service</Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <RecommendedProviders />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Service
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Find Providers
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Update Location
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Loyalty Program */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Loyalty Points</h3>
                  <Gift className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2">1,250</div>
                <p className="text-purple-100 text-sm mb-4">You're 250 points away from your next reward!</p>
                <Button variant="secondary" size="sm" className="w-full">
                  Redeem Points
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <AIVoiceAssistant />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Star, CreditCard, TrendingUp, Users, MapPin, Award } from "lucide-react"

const stats = [
  {
    title: "Total Bookings",
    value: "12",
    change: "+23%",
    trend: "up",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    chartData: [8, 12, 6, 15, 10, 12, 18],
  },
  {
    title: "Pending Services",
    value: "2",
    change: "-12%",
    trend: "down",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    chartData: [5, 3, 8, 2, 6, 2, 4],
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "+0.2",
    trend: "up",
    icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    chartData: [4.2, 4.5, 4.3, 4.7, 4.6, 4.8, 4.8],
  },
  {
    title: "Total Spent",
    value: "₹8,500",
    change: "+15%",
    trend: "up",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-100",
    chartData: [5000, 6200, 5800, 7100, 6900, 8500, 8200],
  },
]

const additionalStats = [
  {
    title: "Favorite Providers",
    value: "5",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Service Areas",
    value: "3",
    icon: MapPin,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    title: "Loyalty Points",
    value: "1,250",
    icon: Award,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    title: "Monthly Savings",
    value: "₹1,200",
    icon: TrendingUp,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
]

export function DashboardStats() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const MiniChart = ({ data, color }: { data: number[]; color: string }) => {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min

    return (
      <div className="flex items-end space-x-1 h-8 mt-2">
        {data.map((value, index) => {
          const height = range === 0 ? 50 : ((value - min) / range) * 100
          return (
            <div
              key={index}
              className={`w-2 ${color.replace("text-", "bg-")} rounded-sm transition-all duration-300 hover:opacity-80`}
              style={{ height: `${Math.max(height, 10)}%` }}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
              expandedCard === index ? "ring-2 ring-blue-500 shadow-lg" : ""
            }`}
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <div className={`w-8 h-8 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`text-xs flex items-center ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  <TrendingUp className={`w-3 h-3 mr-1 ${stat.trend === "down" ? "rotate-180" : ""}`} />
                  {stat.change}
                </div>
              </div>
              {expandedCard === index && (
                <div className="animate-fade-in">
                  <MiniChart data={stat.chartData} color={stat.color} />
                  <p className="text-xs text-gray-500 mt-2">Last 7 periods</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {additionalStats.map((stat, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-lg font-bold">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

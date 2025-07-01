import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Star, CreditCard } from "lucide-react"

const stats = [
  {
    title: "Total Bookings",
    value: "12",
    icon: Calendar,
    color: "text-blue-600",
  },
  {
    title: "Pending Services",
    value: "2",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    title: "Average Rating",
    value: "4.8",
    icon: Star,
    color: "text-yellow-600",
  },
  {
    title: "Total Spent",
    value: "₹8,500",
    icon: CreditCard,
    color: "text-green-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

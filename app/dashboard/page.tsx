import { Header } from "@/components/header"
import { DashboardStats } from "@/components/dashboard-stats"
import { BookingCard } from "@/components/booking-card"
import { RecommendedProviders } from "@/components/recommended-providers"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"

const upcomingBookings = [
  {
    id: 1,
    service: "House Cleaning",
    provider: "Priya Sharma",
    date: "Today, 2:00 PM",
    status: "confirmed",
    price: "₹600",
  },
  {
    id: 2,
    service: "Plumbing",
    provider: "Amit Singh",
    date: "Tomorrow, 10:00 AM",
    status: "pending",
    price: "₹800",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and discover new services</p>
        </div>

        <DashboardStats />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Bookings</h2>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </div>

          <div>
            <RecommendedProviders />
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}

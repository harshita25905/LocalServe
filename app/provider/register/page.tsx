import { Header } from "@/components/header"
import { ProviderRegistrationForm } from "@/components/provider-registration-form"
import { Footer } from "@/components/footer"
import { AIVoiceAssistant } from "@/components/ai-voice-assistant"

export default function ProviderRegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Service Provider</h1>
            <p className="text-gray-600">Join thousands of professionals earning with LocalServe</p>
          </div>
          <ProviderRegistrationForm />
        </div>
      </main>
      <Footer />
      <AIVoiceAssistant />
    </div>
  )
}

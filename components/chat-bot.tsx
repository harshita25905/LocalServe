"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

const quickPrompts = [
  "Find a carpenter near me",
  "Book a maid for tomorrow",
  "Emergency plumber needed",
  "House cleaning services",
]

const mockResponses = [
  "I found 5 carpenters near you! The closest one is Rajesh Kumar, rated 4.8 stars and available today. Would you like to book him?",
  "I can help you book a maid service for tomorrow. What time would work best for you - morning, afternoon, or evening?",
  "I understand you need an emergency plumber. I found 3 available plumbers within 2km of your location. The fastest response time is 30 minutes.",
  "Great! I found several house cleaning services in your area. Would you prefer a one-time deep cleaning or regular weekly service?",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm your LocalServe assistant. How can I help you find the perfect service today?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    setMessages((prev) => [...prev, { text: message, isBot: false }])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
      setMessages((prev) => [...prev, { text: randomResponse, isBot: true }])
    }, 1000)
  }

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-600" />
              LocalServe Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-4">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-2 ${message.isBot ? "justify-start" : "justify-end"}`}>
                  {message.isBot && (
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.isBot ? "bg-gray-100 text-gray-900" : "bg-blue-600 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                  {!message.isBot && (
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                <div className="space-y-1">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start h-auto p-2 text-xs"
                      onClick={() => handleQuickPrompt(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                className="flex-1"
              />
              <Button size="icon" onClick={() => handleSendMessage(inputValue)}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

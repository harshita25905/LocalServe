"use client"

import { useEffect } from "react"

export function AIVoiceAssistant() {
  useEffect(() => {
    // The script is loaded in the layout, so we just need to ensure it's initialized
    // The omnidimension widget will automatically render when the script loads

    // Optional: Add any custom configuration or event listeners here
    const checkWidget = () => {
      if (typeof window !== "undefined" && (window as any).omnidimension) {
        console.log("AI Voice Assistant loaded successfully")
      }
    }

    // Check if widget is loaded after a short delay
    const timer = setTimeout(checkWidget, 2000)

    return () => clearTimeout(timer)
  }, [])

  // The widget renders itself, so we return null
  return null
}

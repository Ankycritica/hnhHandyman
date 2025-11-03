"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, MessageCircle, Calendar } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "system"
  timestamp: Date
}

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you book a handyman. What service do you need?",
      sender: "system",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    collected: false,
  })
  const [isCollectingInfo, setIsCollectingInfo] = useState(false)
  const [currentField, setCurrentField] = useState<"name" | "email" | "phone" | null>(null)
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addSystemMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "system",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    addUserMessage(userMessage)
    setInput("")

    // If we're collecting customer info
    if (isCollectingInfo && currentField) {
      const updatedInfo = { ...customerInfo, [currentField]: userMessage }
      setCustomerInfo(updatedInfo)

      if (currentField === "name") {
        setCurrentField("email")
        addSystemMessage(`Thanks ${userMessage}! What's your email address?`)
      } else if (currentField === "email") {
        setCurrentField("phone")
        addSystemMessage("Great! And your phone number?")
      } else if (currentField === "phone") {
        setCurrentField(null)
        setIsCollectingInfo(false)
        updatedInfo.collected = true
        setCustomerInfo(updatedInfo)
        
        // Send notification to client
        setIsSending(true)
        try {
          const response = await fetch("/api/chat/notify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              customerInfo: updatedInfo,
              initialMessage: messages.find(m => m.sender === "user" && m.text !== userMessage)?.text || userMessage,
            }),
          })

          if (response.ok) {
            addSystemMessage(
              `Perfect! I've sent your request to our team. ${updatedInfo.name}, we'll contact you shortly at ${updatedInfo.email} or ${updatedInfo.phone}. Is there anything else you'd like to tell us about your project?`
            )
          } else {
            addSystemMessage(
              "Sorry, there was an issue sending your request. Please try calling us at (800) 123-4567."
            )
          }
        } catch (error) {
          addSystemMessage(
            "Sorry, there was an issue sending your request. Please try calling us at (800) 123-4567."
          )
        } finally {
          setIsSending(false)
        }
      }
      return
    }

    // If customer info not collected yet, start collecting
    if (!customerInfo.collected && !isCollectingInfo) {
      setIsCollectingInfo(true)
      setCurrentField("name")
      addSystemMessage("I'd love to help you with that! First, what's your name?")
      return
    }

    // After info collected, just send messages to client
    if (customerInfo.collected) {
      try {
        await fetch("/api/chat/message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customerInfo,
            message: userMessage,
          }),
        })
        
        addSystemMessage(
          "Thanks for the additional information! We've sent that to our team. They'll be in touch soon!"
        )
      } catch (error) {
        addSystemMessage("Message received! Our team will follow up with you shortly.")
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[400px] max-w-[calc(100vw-2rem)]">
      <Card className="shadow-2xl border-2 border-red-600/20">
        <CardHeader className="bg-red-600 text-white p-4 flex flex-row items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <CardTitle className="text-lg">Book a Handyman</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-red-700 h-8 w-8"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-red-600 text-white"
                      : "bg-white border border-gray-200 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user" ? "text-red-100" : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <p className="text-sm text-gray-600">Sending your request...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                disabled={isSending}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-red-600 hover:bg-red-700"
                disabled={isSending || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


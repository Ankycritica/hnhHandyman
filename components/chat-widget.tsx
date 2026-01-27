"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { X, Send } from "lucide-react"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export function ChatWidget({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 How can we help you today? Are you looking for any handyman or home repair services?",
    },
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage: ChatMessage = {
      role: "user",
      content: input,
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again or call us directly.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[380px]">
      <Card>
        <CardHeader className="bg-red-600 text-white p-4 rounded-t-lg">
        <div className="flex items-start justify-between"/>
          <div className="flex gap-3">
            {/* Avatar */}
            <img 
              src="/agent.png"
              alt="Agent"
              className="h-10 w-10"
            />

            {/* Title + subtitle */}
            <div className="leading-tight">
              <h4 className="text-base font-semibold">
                How can we help you today?
              </h4>
              <p className="text-xs text-red-100 flex items-center gap-1">
                <span className="h-2 w-2 bg-green-400 rounded-full inline-block" />
                We respond immediately
              </p>
            </div>
          

          {/* Close button */}
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-red-700"
            onClick={onClose}
          >
            <X />
          </Button>
        </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-[380px] overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    m.role === "user"
                      ? "bg-red-600 text-white"
                      : "bg-white border"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="p-3 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage} disabled={loading}>
              <Send size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

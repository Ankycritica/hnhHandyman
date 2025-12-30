"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, MessageCircle } from "lucide-react"

/* ================= HELPERS ================= */

const uid = () =>
  crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)

const normalize = (text: string) =>
  text.toLowerCase().replace(/[^a-z\s]/g, "").trim()

const isValidName = (v: string) =>
  v.length >= 2 && /^[a-zA-Z\s]+$/.test(v)

const isValidEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const isValidPhone = (v: string) =>
  /^[6-9]\d{9}$/.test(v.replace(/\D/g, ""))

const isValidZip = (v: string) => /^\d{5}$/.test(v)

/* ================= TYPES ================= */

interface Message {
  id: string
  text: string
  sender: "user" | "system"
  timestamp: Date
}

type Intent = "unknown" | "wall_repair" | "painting" | "general"

type Stage = "intro" | "zip" | "name" | "email" | "phone" | "closed"

/* ================= RECEPTIONIST ENGINE ================= */

const getContextualReplyAfterSubmit = (msg: string, name: string) => {
  const text = normalize(msg)
  const user = name || "there"

  // Goodbye / politeness / small talk
  if (
    text.includes("bye") ||
    text.includes("take care") ||
    text.includes("great day") ||
    text.includes("good day") ||
    text.includes("thanks") ||
    text.includes("thank") ||
    text.includes("sure") ||
    text === "ok"
  ) {
    return `Thank you, ${user}! If you ever need help in the future, just let me know. Have a great day!`
  }

  // Typos / very short / confusion
  if (text.length <= 3 || text === "no" || text === "on") {
    return `No worries, ${user}! If you need anything in the future, feel free to reach out.`
  }

  // Pricing
  if (text.includes("price") || text.includes("cost") || text.includes("estimate")) {
    return "Pricing depends on the scope of work. A member of our team will reach out to provide an accurate estimate."
  }

  // Scheduling / timing
  if (
    text.includes("when") ||
    text.includes("schedule") ||
    text.includes("appointment") ||
    text.includes("time")
  ) {
    return "Service timing depends on availability. Our team will contact you shortly to confirm scheduling details."
  }

  // Services
  if (
    text.includes("repair") ||
    text.includes("painting") ||
    text.includes("wall") ||
    text.includes("service")
  ) {
    return "We offer a wide range of handyman services. Our team will be happy to discuss your specific needs in more detail."
  }

  // Agent / human
  if (
    text.includes("agent") ||
    text.includes("human") ||
    text.includes("call")
  ) {
    return "No problem! A member of our team will reach out to you shortly to assist you further."
  }

  // Safe fallback
  return `Thank you, ${user}! If you have any questions or need help in the future, just let me know.`
}

/* ================= COMPONENT ================= */

export function ChatWidget({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid(),
      text: "Hello! How can I help you today? Are you looking for handyman or home repair services?",
      sender: "system",
      timestamp: new Date(),
    },
  ])

  const [input, setInput] = useState("")
  const [stage, setStage] = useState<Stage>("intro")
  const [intent, setIntent] = useState<Intent>("unknown")
  const [conversationId, setConversationId] = useState<string | null>(null)

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const addMessage = (text: string, sender: "user" | "system") => {
    setMessages((prev) => [
      ...prev,
      { id: uid(), text, sender, timestamp: new Date() },
    ])
  }

  const detectIntent = (msg: string): Intent => {
    const t = normalize(msg)
    if (t.includes("wall")) return "wall_repair"
    if (t.includes("paint")) return "painting"
    if (t.includes("repair")) return "general"
    return "unknown"
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    addMessage(userMessage, "user")
    setInput("")

    /* ===== ALWAYS CONTEXTUAL REPLY AFTER SUBMIT ===== */
    if (stage === "closed") {
      const reply = getContextualReplyAfterSubmit(
        userMessage,
        customer.name
      )
      addMessage(reply, "system")
      return
    }

    /* ===== INTRO ===== */
    if (stage === "intro") {
      const detected = detectIntent(userMessage)

      if (detected === "unknown") {
        addMessage(
          "What kind of repair or home improvement project can I help you with today?",
          "system"
        )
        return
      }

      setIntent(detected)

      addMessage(
        detected === "painting"
          ? "Yes, we offer a variety of painting services including rooms, trim, cabinets, decks, and more."
          : "We offer professional wall repair services including drywall repair for cracks, holes, and damage.",
        "system"
      )

      addMessage(
        "To check availability in your area, could you please share your ZIP code?",
        "system"
      )

      setStage("zip")
      return
    }

    /* ===== ZIP ===== */
    if (stage === "zip") {
      if (!isValidZip(userMessage)) {
        addMessage(
          "That ZIP code doesn’t look correct. Please enter a valid 5-digit ZIP code.",
          "system"
        )
        return
      }

      addMessage(`Thanks! We do service the ${userMessage} area.`, "system")
      addMessage("May I please have your name?", "system")
      setStage("name")
      return
    }

    /* ===== NAME ===== */
    if (stage === "name") {
      if (!isValidName(userMessage)) {
        addMessage("Could you please tell me your name?", "system")
        return
      }

      setCustomer((c) => ({ ...c, name: userMessage }))
      addMessage(
        `Thank you, ${userMessage}! Could you please provide your email address?`,
        "system"
      )
      setStage("email")
      return
    }

    /* ===== EMAIL ===== */
    if (stage === "email") {
      if (!isValidEmail(userMessage)) {
        addMessage(
          "That doesn’t look like a valid email. Could you double-check it?",
          "system"
        )
        return
      }

      setCustomer((c) => ({ ...c, email: userMessage }))
      addMessage("What’s the best phone number to reach you?", "system")
      setStage("phone")
      return
    }

    /* ===== PHONE + SUBMIT ===== */
    if (stage === "phone") {
      if (!isValidPhone(userMessage)) {
        addMessage(
          "That phone number doesn’t seem right. Please enter a valid 10-digit mobile number.",
          "system"
        )
        return
      }

      const updatedCustomer = {
        ...customer,
        phone: userMessage,
      }

      setCustomer(updatedCustomer)

      const res = await fetch("/api/chat/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          customerInfo: updatedCustomer,
          initialMessage: `${intent.replace("_", " ")} service inquiry`,
        }),
      })

      const data = await res.json()
      if (data?.conversationId) setConversationId(data.conversationId)

      addMessage(
        `Thank you, ${updatedCustomer.name}! You’re all set. A member of our team will reach out to you soon to discuss your ${intent.replace(
          "_",
          " "
        )} needs, pricing, and scheduling.`,
        "system"
      )

      setStage("closed")
      return
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[380px]">
      
      <Card>
        <CardHeader className="bg-red-600 text-white p-4 rounded-t-lg">
        <div className="flex items-start justify-between">
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
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    m.sender === "user"
                      ? "bg-red-600 text-white"
                      : "bg-white border"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          

          <div className="p-3 border-t flex gap-2">
            
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="bg-red-600">
              <Send size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { ChatWidget } from "@/components/chat-widget"

export function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => setIsChatOpen(true)}
            className="bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white shadow-2xl shadow-[rgba(217,59,47,0.45)] h-14 px-8 text-lg font-bold rounded-full"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Chat With Us
          </Button>
        </motion.div>
      </motion.div>

      <ChatWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  )
}

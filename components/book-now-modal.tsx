"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

type Props = {
  open: boolean
  onClose: () => void
  serviceType: "Residential" | "Commercial" | ""
  setServiceType: (v: "Residential" | "Commercial") => void
}

export function BookNowModal({
  open,
  onClose,
  serviceType,
  setServiceType,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative"
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            {/* HEADER */}
            <h2 className="text-2xl font-bold text-[var(--primary-blue)] mb-4">
              Let Us Call You
            </h2>

            {/* SERVICE TYPE SELECT */}
            {!serviceType && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Select Service Type
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setServiceType("Residential")}
                  >
                    Residential
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setServiceType("Commercial")}
                  >
                    Commercial
                  </Button>
                </div>
              </div>
            )}

            {/* FORM */}
            {serviceType && (
              <ContactForm
                serviceType={serviceType}
                onSubmit={onClose}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

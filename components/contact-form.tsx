"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface ContactFormProps {
  serviceType: string
  onSubmit?: () => void
}

export function ContactForm({ serviceType, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    smsOptIn: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          ...formData,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          zip: "",
          smsOptIn: false,
        })
        if (onSubmit) onSubmit()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
          Service Type
        </label>
        <Input
          id="serviceType"
          value={serviceType}
          readOnly
          className="bg-gray-50"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <Input
            id="firstName"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <Input
            id="lastName"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
          ZIP Code *
        </label>
        <Input
          id="zip"
          required
          value={formData.zip}
          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="smsOptIn"
          checked={formData.smsOptIn}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, smsOptIn: e.target.checked })
          }
        />
        <label
          htmlFor="smsOptIn"
          className="text-sm text-gray-700 cursor-pointer"
        >
          I agree to receive SMS updates about my service request
        </label>
      </div>
      {submitStatus === "success" && (
        <div className="p-3 bg-green-50 text-green-800 rounded-md text-sm">
          Thank you! We'll contact you shortly.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-3 bg-red-50 text-red-800 rounded-md text-sm">
          There was an error submitting your form. Please try again.
        </div>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-md font-semibold bg-[var(--primary-red)] text-white hover:bg-[var(--primary-red-dark)]"
      >
        {isSubmitting ? "Submitting..." : "Let Us Call You"}
      </Button>
    </form>
  )
}


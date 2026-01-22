"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Calendar, Users } from "lucide-react"

export default function RequestServicePage() {
  return (
    
        <div className="bg-white text-neutral-900 text-center">
        {/* ================= BREADCRUMB ================= */}
            <Image
                    src="/logonew1.png"
                    alt="Professional Handyman"   
                    width={200}
                    height={200}
                    />
        <div>
        <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
        {/* ================= HERO STEPS ================= */}
        <section className="bg-neutral-50 border-b">
            <div className="container mx-auto px-6 py-10">

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
                {[
                {
                    icon: Phone,
                    text: "Share some info and our local handyman will contact you during business hours.",
                },
                {
                    icon: Calendar,
                    text: "Next, we can schedule a service appointment to start your project.",
                },
                {
                    icon: Users,
                    text: "Either way, we will call you to discuss your project and answer questions.",
                },
                ].map((step, i) => (
                <div
                    key={i}
                    className="bg-white border rounded-lg p-5 shadow-sm flex flex-col items-center gap-3"
                >
                    <step.icon className="h-6 w-6 text-red-700" />
                    <p className="text-sm text-neutral-700">{step.text}</p>
                </div>
                ))}
            </div>

            </div>
        </section></div>

      {/* ================= FORM SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* ================= LEFT FORM ================= */}
            <div>
              <h1 className="text-2xl font-bold mb-6 text-neutral-900">
                How Can We Reach You?
              </h1>

              <div className="space-y-5 max-w-xl">

                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name*" />
                  <Input placeholder="Last Name*" />
                </div>

                <Input placeholder="ZIP Code*" />

                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Street Address*" />
                  <Input placeholder="Apt, suite, unit (optional)" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Email*" />
                  <Input placeholder="Phone Number*" />
                </div>

                <div className="flex items-start gap-2 text-sm text-neutral-600">
                  <input type="checkbox" className="mt-1" />
                  <p>
                    Yes! You can text me service reminders and other messages.
                    Message & data rates may apply.
                    <Link href="#" className="text-red-600 underline ml-1">
                      Terms & Privacy
                    </Link>
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-red-700 hover:bg-red-800">
                    Submit and Continue
                  </Button>
                  <Link href="/">
                  <Button  variant="outline">Back</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* ================= RIGHT IMAGE + TRUST ================= */}
            <div className="bg-neutral-50 rounded-xl p-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src="/icon/handyman-services.webp"
                  alt="Professional Handyman"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-semibold mb-3">
                Reliable, Trusted, and Professional Handyman Services
              </h3>

              <ul className="space-y-2 text-sm text-neutral-700">
                <li>✔ Locally owned and operated</li>
                <li>✔ Skilled professionals you can trust</li>
                <li>✔ Satisfaction guaranteed</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
       <section className="bg-[#B21E23] pt-1 pb-10 relative"></section>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Menu, X } from "lucide-react"

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="HnHHandyman"
            width={156}
            height={52}
            className="h-12 w-auto"
            priority
          />
          <span className="text-lg font-semibold text-neutral-900 hidden sm:inline">
            Hand and Hand Handyman
          </span>
        </Link>

        <button
          className="ml-auto lg:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 h-10 w-10"
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden lg:flex items-center gap-10 mx-auto">
          <Link
            href="/services"
            className="text-sm font-semibold text-neutral-800 hover:text-[var(--primary-blue)] transition-colors"
          >
            Services
          </Link>
          <a
            href="#"
            className="text-sm font-semibold text-neutral-800 hover:text-[var(--primary-blue)] transition-colors"
          >
            Locations
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-neutral-800 hover:text-[var(--primary-blue)] transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-neutral-800 hover:text-[var(--primary-blue)] transition-colors"
          >
            Franchise
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex items-center gap-2 border-neutral-300 text-neutral-800"
            aria-label="Call (703) 296-6409"
          >
            <Phone className="h-4 w-4" />
            <span className="leading-none">(703) 296-6409</span>
          </Button>

          <Button
            size="lg"
            className="hidden lg:inline-flex shadow-lg"
            aria-label="Book Now"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Now</span>
          </Button>
        </div>
      </div>

      {isNavOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-6 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            <Link
              href="/services"
              className="text-sm font-semibold text-neutral-900 hover:text-[var(--primary-blue)]"
            >
              Services
            </Link>
            <a
              href="#"
              className="text-sm font-semibold text-neutral-900 hover:text-[var(--primary-blue)]"
            >
              Locations
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-neutral-900 hover:text-[var(--primary-blue)]"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-neutral-900 hover:text-[var(--primary-blue)]"
            >
              Franchise
            </a>
            <Button className="w-full" size="lg">
              Book Now
            </Button>
            <Button variant="outline" className="w-full">
              <Phone className="h-4 w-4" />
              Call (703) 296-6409
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  )
}


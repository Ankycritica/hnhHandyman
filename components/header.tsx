"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Calendar,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { BookNowModal } from "@/components/book-now-modal"

/* ================= MOBILE MENU STATE ================= */

type MobileMenuStep =
  | "main"
  | "services"
  | "residential"
  | "commercial"
  | "repair"
  
 const RESIDENTIAL_SERVICES = [
  { label: "Repair", slug: "home-repair-solutions", icon: "🔧" },
  { label: "Drywall And Ceiling", slug: "drywall-patching", icon: "🧱" },
  { label: "Tile Installation", slug: "tile-installation", icon: "🏠" },
  { label: "Deck & Fence Services", slug: "deck-fence-services", icon: "🪑" },
  { label: "Painting", slug: "interior-painting-services", icon: "🎨" },
  { label: "Carpentry Installation And Repair", slug: "carpentry-woodwork", icon: "🪚" },
  { label: "Plumbing", slug: "plumbing-fixes", icon: "🚰" },
  { label: "Lighting And Electrical", slug: "electrical-repairs", icon: "💡" },
  
]


const COMMERCIAL_SERVICES = [
    "Office Maintenance",
    "Retail Space Improvements",
    "Commercial Painting",
    "Facility Repairs",
    "Tenant Improvements",
    "Accessibility Upgrades",
    "Warehouse Services",
    "Restaurant Fit-Outs",
]


/* ================= HEADER ================= */

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isBookOpen, setIsBookOpen] = useState(false)
  const [serviceType, setServiceType] = useState<"Residential" | "Commercial" | "">("")
  const [mobileStep, setMobileStep] = useState<MobileMenuStep>("main")
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeType, setActiveType] = useState<"residential" | "commercial" | null>(null)
  useEffect(() => {
    if (!isNavOpen) setMobileStep("main")
  }, [isNavOpen])

  return (
    <>
      {/* ================= HEADER BAR ================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={150} height={40} />
            <span className="font-semibold">Hand and Hand Handyman</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center border rounded-md"
            onClick={() => setIsNavOpen(true)}
            aria-label="Open Menu"
          >
            <Menu />
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10 mx-auto">

          {/* SERVICES MEGA MENU */}
          <div className="relative">
            <Link
              href="/services"
              onMouseEnter={() => {
                setServicesOpen(true)
                setActiveType("residential")
              }}
              className="text-sm font-semibold text-neutral-800 hover:text-[var(--primary-blue)]"
            >
              Services
            </Link>


            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[980px] bg-white rounded-2xl shadow-2xl border p-6 flex gap-6 z-50"
              >

                {/* LEFT COLUMN */}
                <div className="w-[220px] border-r pr-4">
                  <div
                    onMouseEnter={() => setActiveType("residential")}
                    className={`px-4 py-3 rounded-lg cursor-pointer font-semibold ${
                      activeType === "residential"
                        ? "bg-red-50 text-red-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    Residential
                  </div>

                  <div
                    onMouseEnter={() => setActiveType("commercial")}
                    className={`px-4 py-3 rounded-lg cursor-pointer font-semibold ${
                      activeType === "commercial"
                        ? "bg-red-50 text-red-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    Commercial
                  </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="flex-1">

                  {/* RESIDENTIAL */}
                  {activeType === "residential" && (
                    <div className="grid grid-cols-4 gap-6">
                      {RESIDENTIAL_SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/residential/${s.slug}`}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
                        >
                          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-lg">
                            {s.icon}
                          </div>
                          <span className="text-sm font-medium">{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* COMMERCIAL */}
                  {activeType === "commercial" && (
                    <div className="grid grid-cols-3 gap-6">
                      {COMMERCIAL_SERVICES.map((name) => (
                        <Link
                          key={name}
                          href={`/services/commercial/${name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                        >
                          <span className="text-red-600 font-bold text-lg">#</span>
                          <span className="text-sm font-medium">{name}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>

      
                <Link
                  href="/services/locations"
                  className="hover:text-[var(--primary-blue)]"
                >
                  Locations
                </Link>
              
        </nav>


          <div className="ml-auto flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex items-center gap-2 border-neutral-300 text-neutral-800"
              aria-label="Call (703) 296-6409
"
            >
              <Phone className="h-4 w-4" />
              <span className="leading-none">(703) 296-6409
              </span>
            </Button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                  onClick={() => setIsBookOpen(true)}
                  size="lg"
                  className="hidden lg:inline-flex shadow-lg"
                  aria-label="Book Now"
                >
                <Calendar className="h-5 w-5" />
                <span>Book Now</span>
              </Button>
            </motion.div>
          </div>
        </div>
        </motion.header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {isNavOpen && (
        <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto lg:hidden">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="font-semibold text-lg">MENU</span>
            <button onClick={() => setIsNavOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* CTA */}
          <div className="px-6 py-4 flex gap-3">
            <Button className="flex-1">Get Started</Button>
            <Button variant="outline" className="flex-1">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
          </div>

          {/* MENU CONTENT */}
          <div className="px-6 py-4">

            {/* MAIN */}
            {mobileStep === "main" && (
              <div className="space-y-4">
                <MenuRow label="Services" onClick={() => setMobileStep("services")} />
                <MenuRow
                  label="Locations"
                  href="/services/locations"
                  onClick={() => setIsNavOpen(false)}
                />
              </div>
            )}

            {/* SERVICES */}
            {mobileStep === "services" && (
              <>
                <BackRow onClick={() => setMobileStep("main")} />
                <MenuRow label="Residential" onClick={() => setMobileStep("residential")} />
                <MenuRow label="Commercial" onClick={() => setMobileStep("commercial")} />
              </>
            )}

            {/* RESIDENTIAL */}
            {mobileStep === "residential" && (
              <>
                <BackRow onClick={() => setMobileStep("services")} />
                <ResidentialGrid onRepair={() => setMobileStep("repair")} />
              </>
            )}

            {/* REPAIR */}
            {mobileStep === "repair" && (
              <>
                <BackRow onClick={() => setMobileStep("residential")} />
                <RepairAccordion />
              </>
            )}

            {/* COMMERCIAL */}
            {mobileStep === "commercial" && (
              <>
                <BackRow onClick={() => setMobileStep("services")} />
                <CommercialList />
              </>
            )}
          </div>
        </div>
      )}

      {/* BOOK NOW MODAL */}
      <BookNowModal
        open={isBookOpen}
        onClose={() => setIsBookOpen(false)}
        serviceType={serviceType}
        setServiceType={setServiceType}
      />
    </>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function MenuRow({
  label,
  href,
  onClick,
}: {
  label: string
  href?: string
  onClick?: () => void
}) {
  const content = (
    <>
      <span>{label}</span>
      <ChevronRight className="h-5 w-5" />
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="w-full flex justify-between items-center text-lg font-medium py-3 border-b"
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-lg font-medium py-3 border-b"
    >
      {content}
    </button>
  )
}

function BackRow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-red-600 font-medium mb-4"
    >
      <ChevronLeft className="h-5 w-5" />
      Back
    </button>
  )
}

function ResidentialGrid({ onRepair }: { onRepair: () => void }) {
  const items = [
    { label: "Home Repair Solutions", action: onRepair },
    { label: "Deck & Fence Service" },
    { label: "Carpentry & Woodwork" },
    { label: "Tile Installation" },
    { label: "Plumbing Fixes" },
    { label: "Interior Painting Services" },
    { label: "Electrical Repairs" },
    { label: "Drywall & Patching" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={item.action}
          className="border rounded-xl p-4 text-center font-medium hover:bg-gray-50"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

function RepairAccordion() {
  const sections = [
    "Interior Repair",
    "Exterior Repair",
    "Garage Repair",
    "More Local Repair Services",
  ]

  return (
    <div className="space-y-3">
      {sections.map((s) => (
        <details key={s} className="border rounded-lg p-4">
          <summary className="font-medium cursor-pointer flex justify-between">
            {s}
            <span>+</span>
          </summary>
          <div className="mt-3 text-sm text-gray-600">
            Service links go here
          </div>
        </details>
      ))}
    </div>
  )
}

function CommercialList() {
  const items = [
    "Office Maintenance",
    "Retail Space Improvements",
    "Commercial Painting",
    "Facility Repairs",
    "Tenant Improvements",
    "Accessibility Upgrades",
    "Warehouse Services",
    "Restaurant Fit-Outs",
  ]

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="py-3 border-b font-medium">
          {item}
        </div>
      ))}
    </div>
  )
}
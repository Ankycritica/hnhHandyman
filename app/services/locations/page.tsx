"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search, CheckCircle2, Calendar} from "lucide-react"
import { ChatWidget } from "@/components/chat-widget"
/* ================= FADE IN ================= */

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

/* ================= ZIP DATA ================= */

const SERVICE_ZIPS = [
  "Topping, VA        23169",
  "Wake, VA           23176",
  "Freeport, VA       22579",
  "Deltaville, VA     23043",
  "White Stone, VA    22578",
  "Sonora, VA         22579",
  "Kilmarnock, VA     22482",
  "Lancaster, VA      22503",
  "Byrdton, VA        22578",
  "Ditchley, VA       22482",
  "Irvington, VA      22480",
  "Millenbeck, VA     22503",
  "Weems, VA          22577",
  "Reedville, VA      22539",
  "Cobbs Creek, VA    23035",
  "Gwynn Island, VA   23066",
  "Mathews, VA        23109",
  "Port Haywood, VA   23138",
  "Cardinal, VA       23025",
  "Gloucester, VA     23061",
  "West Point, VA     23181",
  "Fleeton, VA        22539",
  "Sandy Point, VA    22577",
  "Palmer, VA         22503",
  "Foxwells, VA       22578",
  "Saluda, VA         23149",
  "Urbanna, VA        23175",
  "Locust Hill, VA    23092",
  "Water View, VA     23180",
  "Morattico, VA      22523",
  "Ottoman, VA        22503",
  "Jamaica, VA        23079",
  "Dunnville, VA      22454",
  "Tappahannock, VA   22560",
]

/* ================= PAGE ================= */

export default function LocationsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [mapQuery, setMapQuery] = useState("Virginia, USA")

  const filteredZips = SERVICE_ZIPS.filter((zip) =>
    zip.toLowerCase().includes(query.toLowerCase().trim())
  )

  /* ================= SEARCH HANDLER ================= */

  function handleSearch() {
    if (!query.trim()) return

    const match = SERVICE_ZIPS.find((zip) =>
      zip.includes(query.trim())
    )

    if (match) {
      const locationText = match.split(/\s{2,}/)[0] // "Topping, VA"
      setMapQuery(`${locationText} ${query}`)
    } else {
      setMapQuery("Virginia, USA")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* BREADCRUMB */}
      <div className="pt-24 border-b">
        <div className="container mx-auto px-6 py-4 text-sm text-neutral-600 flex gap-2 items-center">
          <Link href="/" className="hover:text-red-600 flex items-center">
          <span className="w-8 h-8 bg-neutral-100 rounded-md flex items-center justify-center text-black shadow-sm">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11.5L12 4l9 7.5" />
            <path d="M9 21V12h6v9" />
            </svg>
            <span className="sr-only">Home</span>
          </span>
          </Link>

          <span>/</span>
          <span className="text-red-600 font-semibold">Locations</span>
        </div>
      </div>
      {/* HEADER OFFSET */}
      <div className="pt-24">

        {/* ================= HERO ================= */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-red-700">
                Check Service Availability
              </h1>

              <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-10">
                Enter your ZIP code below to see if our professionals are available near you.
              </p>
            </FadeIn>

            {/* SEARCH */}
            <FadeIn delay={0.1}>
              <div className="max-w-xl mx-auto flex gap-3">
                <Input
                  placeholder="Enter ZIP Code"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                  className="bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)]"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ================= MAP ================= */}
        <div className="container mx-auto px-6 mb-16">
          <div className="w-full h-[520px] rounded-lg overflow-hidden border">
            <iframe
              title="map"
              className="w-full h-full"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                mapQuery
              )}&output=embed`}
            />
          </div>
        </div>

        {/* ================= ZIP RESULTS ================= */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[var(--primary-blue)]">
                  Serviceable ZIP Codes
                </h2>
                <span className="text-sm text-neutral-600">
                  {filteredZips.length} locations available
                </span>
              </div>
            </FadeIn>

            {filteredZips.length === 0 ? (
              <FadeIn>
                <div className="text-center py-12">
                  <p className="text-lg font-semibold text-red-600">
                    ❌ Sorry, we don’t serve this ZIP yet.
                  </p>
                  <p className="text-neutral-600 mt-2">
                    We’re expanding quickly — check back soon.
                  </p>

                  <Link href="/" className="inline-block mt-6">
                    <Button variant="outline">Go Back Home</Button>
                  </Link>
                </div>
              </FadeIn>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredZips.map((zip, i) => {
                  const locationText = zip.split(/\s{2,}/)[0]
                  const zipCode = zip.match(/\d{5}/)?.[0]

                  return (
                    <FadeIn key={zip} delay={i * 0.05}>
                      <div
                        onClick={() =>
                          setMapQuery(`${locationText} ${zipCode}`)
                        }
                        className="bg-white rounded-md shadow-md p-5 flex items-center gap-3 hover:shadow-lg cursor-pointer transition"
                      >
                        <MapPin className="h-5 w-5 text-[var(--primary-red)]" />
                        <span className="font-semibold text-neutral-800">
                          {zip}
                        </span>
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* ================= TRUST ================= */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Professionals",
                  desc: "Background-checked technicians familiar with homes in your area.",
                },
                {
                  title: "Fast Response",
                  desc: "Most service requests are confirmed within 24 hours.",
                },
                {
                  title: "Growing Coverage",
                  desc: "We’re actively expanding to serve more ZIP codes every month.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-6 rounded-xl border flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-neutral-800">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </div>
       <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={() => setIsChatOpen(true)}
            className="bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white shadow-2xl shadow-[rgba(217,59,47,0.45)] h-14 px-8 text-lg font-bold rounded-full"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Chat With Us
          </Button>
        </motion.div>
      </motion.div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <Footer />
    </div>
  )
}

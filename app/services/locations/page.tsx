"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search, CheckCircle2 } from "lucide-react"

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
"Monaskon, VA       22503",
"Morattico, VA      22523",
"Ottoman, VA        22503",
"Jamaica, VA        23079",
"Dunnville, VA      22454",
"Tappahannock, VA   22560",
"Diggs, VA          23045",
"Hudgins, VA        23076",
"Hallieford, VA     23068",
"Moon, VA           23119",
"Glenns, VA         23072",
"Hartfield, VA      23071",
"West End, VA       23072",
"Rosewell, VA       23072",
"Hayes, VA          23072",
"Nasera, VA         (Not found)",
"Ware Neck, VA      23178",
"Bena, VA           23018",
"Maryus, VA         23107",
"York View, VA      23072",
"Sunnybank, VA      22539",
"Heathsville, VA    22473",
"Burgess, VA        22432",
"Tibitha, VA        22539"

]

/* ================= PAGE ================= */

export default function LocationsPage() {
  const [query, setQuery] = useState("")

  const filteredZips = SERVICE_ZIPS.filter((zip) =>
    zip.toLowerCase().includes(query.toLowerCase().trim())
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HEADER OFFSET */}
      <div className="pt-24">

        {/* ================= HERO ================= */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--primary-blue)]">
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
                <Button className="bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)]">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

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
                {filteredZips.map((zip, i) => (
                  <FadeIn key={zip} delay={i * 0.05}>
                    <div className="bg-white rounded-md shadow-md p-5 flex items-center gap-3 hover:shadow-lg transition">
                      <MapPin className="h-5 w-5 text-[var(--primary-red)]" />
                      <span className="font-semibold text-neutral-800">
                        {zip}
                      </span>
                    </div>
                  </FadeIn>
                ))}
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

      <Footer />
    </div>
  )
}

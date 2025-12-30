"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getIcon } from "@/lib/icon-map"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search, CheckCircle2 } from "lucide-react"

/* ================= SERVICE ZIP DATA ================= */

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

export default function LocationsPage() {
  const [query, setQuery] = useState("")

  const filteredZips = SERVICE_ZIPS.filter(zip =>
    zip.includes(query.trim())
  )

  return (
    
    <div className="min-h-screen bg-white">

      {/* ================= SEARCH ================= */}
      <Header />
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">
              Check If We Serve Your Area
            </h2>
            <p className="text-gray-600">
              Enter your ZIP code below to see if our professionals are available near you.
            </p>
          </div>

          <div className="max-w-xl mx-auto flex gap-3">
            <Input
              placeholder="Enter ZIP Code"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* ================= ZIP GRID ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">
              Serviceable ZIP Codes
            </h3>
            <span className="text-sm text-gray-600">
              {filteredZips.length} locations available
            </span>
          </div>

          {filteredZips.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg font-semibold text-red-600">
                ❌ Sorry, we don’t serve this ZIP yet.
              </p>
              <p className="text-gray-600 mt-2">
                We’re expanding quickly — check back soon.
              </p>
              <Link href="/" className="inline-block mt-4">
                <Button variant="outline">
                  Go Back Home
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredZips.map((zip) => (
                <div
                  key={zip}
                  className="bg-white border rounded-lg p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition"
                >
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span className="font-semibold">{zip}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Professionals",
                desc: "All services are handled by trained, background-checked local technicians.",
              },
              {
                title: "Fast Response",
                desc: "Most bookings are confirmed within 24 hours of request.",
              },
              {
                title: "Expanding Coverage",
                desc: "New ZIP codes are added every month as we grow.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border flex gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

           <Footer />

    </div>
  )
}

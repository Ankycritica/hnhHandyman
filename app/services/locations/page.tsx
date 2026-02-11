"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search, CheckCircle2, Calendar,Phone,Locate} from "lucide-react"
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

const HANDYMAN_CONTACTS = {
  va: {
    phone: "+1 (571) 555-1001",
    book: "/request-service",
  },
  md: {
    phone: "+1 (301) 555-2002",
    book: "/request-service",
  },
  dc: {
    phone: "+1 (202) 555-3003",
    book: "/request-service",
  },
}
function detectRegionByZip(zip: string) {
  const code = Number(zip.match(/\d{5}/)?.[0])

  if (!code) return "va"

  // Washington DC → 20000–20599
  if (code >= 20000 && code <= 20599) return "dc"

  // Maryland → 20600–21999
  if (code >= 20600 && code <= 21999) return "md"

  // Virginia → 20100–23999
  if (code >= 20100 && code <= 23999) return "va"

  return "va"
}
const SERVICE_ZIPS = Array.from(new Set([
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

  // Northern Virginia
  "Ashburn, VA        20147",
  "Ashburn, VA        20148" ,
  "Fairfax, VA        22030",
  "Reston, VA         20190",
  "McLean, VA         22102", 
  "Merrifield, VA     22081",
  "Virgina, VA        20105" ,
  "Virgina, VA        20106",
  "Virgina, VA        20107",
  "Virgina, VA        20109", 
  "Virgina, VA        20110", 
  "Virgina, VA        20111",
  "Virgina, VA        20112",
  "Virgina, VA        20115", 
  "Virgina, VA        20117", 
  "Virgina, VA        20119", 
  "Virgina, VA        20120", 
  "Virgina, VA        20121", 
  "Virgina, VA        20124",
  "Virgina, VA        20129", 
  "Virgina, VA        20132", 
  "Virgina, VA        20135", 
  "Virgina, VA        20136", 
  "Virgina, VA        20137", 
  "Virgina, VA        20141",
  "Virgina, VA        20143", 
  "Virgina, VA        20144",

  

  // Maryland
  "Rockville, MD      20850",
  "North Bethesda, MD 20852", 
  "Silver Spring, MD  20910", 
  "Southern, MD        20601",
  "Southern, MD        20602",
  "Southern, MD        20603",
  "Southern, MD        20604",
  "Southern, MD        20630",
  "Southern, MD        20606",
  "Southern, MD        20607",
  "Southern, MD        20608",
  "Southern, MD        20609",
  "Southern, MD        20611",
  "Southern, MD        20613",
  "Southern, MD        20615",
  "Southern, MD        20616",
  "Southern, MD        20617",
  "Southern, MD        20618",
  "Southern, MD        20619",
  "Southern, MD        20620",
  "Southern, MD        20621",
  "Southern, MD        20622",
  "Southern, MD        20623",
  "Southern, MD        20624",
  "Southern, MD        20626",
  "Southern, MD        20628",
  "Southern, MD        20630",
  "Southern, MD        20632",
  "Southern, MD        20634",


  // Washington DC
  "Washington, DC     20001", 
  "Georgetown, DC     20007", 
  "Washington, DC     20009", 
  "Washington, DC     20036", 
  "Washington, DC     20057", 
  "Washington, DC     20003", 
  "Washington, DC     20004", 
  "Washington, DC     20005", 
  "Washington, DC     20006", 
  "Washington, DC     20007", 
  "Washington, DC     20008", 
  "Washington, DC     20010", 
  "Washington, DC     20011", 
  "Washington, DC     20012", 
  "Washington, DC     20015", 
  "Washington, DC     20016", 
  "Washington, DC     20017", 
  "Washington, DC     20018",  
  "Washington, DC     20019", 
  "Washington, DC     20020", 
  "Washington, DC     20024", 
  "Washington, DC     20032", 
  "Washington, DC     20036", 
  "Washington, DC     20037", 
  "Washington, DC     20045", 
  "Washington, DC     20052",  
  "Washington, DC     20059", 
  "Washington, DC     20064", 
  
]))



/* ================= PAGE ================= */

export default function LocationsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [mapQuery, setMapQuery] = useState("Virginia, USA")
  const [activeTab, setActiveTab] = useState<"va" | "md" | "dc">("va")


const filteredZips = SERVICE_ZIPS.filter(
  (zip) =>
    detectRegionByZip(zip) === activeTab &&
    zip.toLowerCase().includes(query.toLowerCase().trim())
)


  const [userLoc, setUserLoc] = useState<any>(null)
  const [notFound, setNotFound] = useState(false)
  /* ===== USE MY LOCATION ===== */
  function useMyLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLoc({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      })

      setMapQuery(`${pos.coords.latitude},${pos.coords.longitude}`)
    })
  }
  /* ================= SEARCH HANDLER ================= */

  function handleSearch() {
    if (!query.trim()) return

    const match = SERVICE_ZIPS.find((zip) =>
      zip.toLowerCase().includes(query.toLowerCase().trim())
    )

    if (match) {
      const locationText = match.split(/\s{2,}/)[0] // "Topping, VA"
      const zipCode = match.match(/\d{5}/)?.[0]
      const region = detectRegionByZip(match)

      // 🔥 AUTO SWITCH TAB
      setActiveTab(region as "va" | "md" | "dc")

      // 🔥 UPDATE MAP
      setMapQuery(`${locationText}, ${zipCode}, USA`)
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
      {/* ================= HERO BANNER ================= */}
      <section className="bg-[#faf6ed] border-b">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-[40px] font-bold text-red-700 mb-3">
            Find a Location
          </h1>
          <div className="h-[4px] w-20 bg-yellow-500" />
        </div>
      </section>

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
                Enter your ZIP code to find the nearest handyman and book instantly.
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
                <Button variant="outline" onClick={useMyLocation}>
                <Locate className="mr-2 h-4 w-4" />
                Use My Location
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
        <section className="py-16 bg-white">
          {/* ================= ZIP RESULTS ================= */}
          <div className="flex gap-4 justify-center mb-8">
          {[
            { key: "va", label: "Virginia" },
            { key: "md", label: "Maryland" },
            { key: "dc", label: "Washington DC" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key as any)
                setQuery("")
              }}
              className={`px-6 py-2 rounded-full font-semibold border ${
                activeTab === tab.key
                  ? "bg-red-700 text-white"
                  : "bg-white text-red-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
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

                const region = detectRegionByZip(zip)
                const contact = HANDYMAN_CONTACTS[region as keyof typeof HANDYMAN_CONTACTS]

                return (
                  <FadeIn key={`${zip}-${i}`} delay={i * 0.05}>

                    <div className="bg-white rounded-md shadow-md p-5">

                      {/* ZIP INFO */}
                      <div
                        onClick={() =>
                          setMapQuery(`${locationText} ${zipCode}`)
                        }
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <MapPin className="h-5 w-5 text-red-600" />
                        <span className="font-semibold">
                          {zip}
                        </span>
                      </div>

                      {/* CONTACT BLOCK */}
                      <div className="mt-3 p-3 bg-gray-50 rounded space-y-2">

                        {/* PHONE */}
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-green-600" />
                          <a
                            href={`tel:${contact.phone}`}
                            className="font-bold text-red-700"
                          >
                            {contact.phone}
                          </a>
                        </div>

                        {/* ===== SCHEDULE BUTTON ===== */}
                        <Link
                          href={`/request-service?zip=${zipCode}&area=${locationText}`}
                          className="block mt-3"
                        >
                          <Button className="w-full bg-red-700">
                            Schedule Service
                          </Button>
                        </Link>
                        

                      </div>

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
        <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
      <Footer />
    </div>
  )
}

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
  Landmark,
  Hospital,
  Hotel,
  Factory,
  Building2,
  Utensils,
  ShoppingBag,
  Briefcase
} from "lucide-react"

import { BookNowModal } from "@/components/book-now-modal"

/* ================= HELPERS ================= */

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")


/* ================= MOBILE MENU STATE ================= */

type MobileMenuStep =
  | "main"
  | "services"
  | "residential"
  | "commercial"
  | "repair"
  
type ResidentialService = {
  label: string
  slug: string
  icon: string
  sections: Record<string, string[]>
}
export const REPAIR_SECTION_SLUGS: Record<string, string> = {
  "Interior Repair": "interior-repair",
  "Exterior Repair": "exterior-repair",
  "Garage Repair": "garage-repair",
  "More Local Repair Services": "other",
}

const RESIDENTIAL_SERVICES: ResidentialService[] = [
  {
    label: "Repair",
    slug: "repair",
    icon: "/icon/mrh_repair_revised_red_icon_55x55.svg",
    sections: {
        "Interior Repair":  [
          "TV Wall Mount Installation",
          "Shelving Installation",
          "Ceiling Fan Installation",
          "Child Proofing",
          "Picture Hanging",
          "Closet Shelving",
          "Bathroom Caulking",
          "Exhaust Fan Installation and Repair",
          "Furniture Painting and Staining",
          "Curtains and Drapes Installation and Replacement",
          "Hanging Blinds Installation and Replacement",
        ],
        "Exterior Repair": [
          "Window Frame Repair",
          "Weatherproofing",
          "Debris Removal",
          "Gutter Installation and Repair",
          "Masonry and Concrete Services",
        ],
        "Garage Repair": [
          "Garage Storage and Organization",
          "Garage Shelving",
        ],
        "More Local Repair Services":[
          "Other Repair Services",
        ],
      },
  },
  {
    label: "Drywall And Ceiling",
    slug: "drywall-and-ceiling",
    icon: "/icon/mrh_drywall_red_icon.svg",
    sections: {
      "Walls and Ceilings": [
        "Drywall Patching and Repair",
        "Drywall Finishing",
        "Drywall Installation",
        "Wall Finishing",
        "Ceiling Repair and Replacement",
      ],
    }
  },
  {
    label: "Remodel",
    slug: "remodel",
    icon: "/icon/mrh_remodel_red_icon_55x55.svg",
    sections: {
      "Bathroom": [
          "Bathroom Remodeling and Repair",
          "Vanity and Bathroom Mirror Installation",
          "Tub Enclosure Installation and Repair",
          "Bathtub Repair and Replacement",
          "Walk In Tub Installation and Repair",
          "Shower Tile Installation and Repair",
      ],
      "Kitchen": [
          "Kitchen Remodeling and Repair",
          "Kitchen Backsplash Installation",
          "Cabinet Installation and Repair",
          "Countertop Installation and Repair",
          "Custom Kitchen Island Installation",
      ],
      "Rooms and Other Services": [
          "Bedroom Remodeling and Repair",
          "Basement Remodeling and Repair",
          "Attic Remodeling and Repair",
          "Dining Room Remodeling and Repair",
          "Home Office Remodeling and Repair",
          "Living Room Remodeling and Repair",
          "Safety and Mobility Services",
          "Acoustic Ceiling Removal",
          "Ceiling Texture Service",
          "Popcorn Ceiling Removal",
      ],
      "More Local Remodeling Services": [
          "Other Remodeling Services",
      ],
    },
  },
  {
    label: "Window and Door Services",
    slug: "window-and-door-services",
    icon: "/icon/mrh_window_door_red_icon_55x55.svg",
    sections: {
      "Doors": [
        "Patio Door Installation and Repair",
        "Screen Door Installation and Repair",
        "Sliding Door Installation and Repair",
        "Pet Door Installation and Repair", 
        "Pocket Door Installation and Repair",
        "Barn Door Installation and Repair",
        "Exterior Door Installation and Replacement",
        "Keyless Entry Installation and Replacement",
        "Storefront Door and Window Repair",
        "Storm Door Installation and Replacement",
        "Door Closer Installation and Repair",
        "Interior Door Installation and Repair",
      ],
      "Windows": [
        "Window Installation and Replacement",  
        "Window Screen Repair and Replacement",
        "Window Screen Installation",
      ],
      "More Window and Door Services": [
        "Other Window and Door Services",
      ],
    },
  },
  {
    label: "Safety and Mobility Services",
    slug: "safety-and-mobility-services",
    icon: "/icon/mrh_shield_red_icon_55x55.svg",
    sections: {
      "Bath and Bedroom": [
        "Cabinet Door and Drawer Pull Upgrades",
        "Shelf and Closet Rod Lowering Service",
        "Grab Bar Installation and Replacement",
      ],
      "Doors and Floors": [
        "Lever Door Handle Installation and Replacement",
        "Doorway Widening Service",
        "Interior Threshold Lowering Service",
        "Solid Surface Flooring Installation and Replacement",
      ],
      "Ramps and Railings": [
        "Handrail Installation and Replacement",
        "Ramp Installation and Replacement",
      ],
    },
  },
  {
    label: "Assembly Service",
    slug: "assembly-service",
    icon: "/icon/mrh_assembly_service_red_icon_55x55.svg",
    sections: {
      "Sports Equipment": [
        "Bike Assembly",
      ],
      "Furniture": [
        "Furniture Assembly",
        "Cabinet Assembly",
      ],
      "Patio and Yard": [
        "Grill Assembly",
        "Fence Assembly",
      ],
    },
  },
  {
    label: "Floor Installation and Repair",
    slug: "floor-installation-and-repair",
    icon: "/icon/mrh_floor_install_repair_red_icon_55x55.svg",
    sections: {
      "Tile and Vinyl": [
        "Floor Tile Installation and Repair",
        "Linoleum Installation and Repair",
        "Vinyl Flooring Installation and Repair",
      ],
      "Wood and Laminate": [
        "Laminate Floor Installation and Repair",
        "Wood Floor Installation and Repair",
      ],
      "More Local Floor Installation and Repair Services": [
        "Other Floor Installation and Repair Services",
      ],
    },
  },
  {
    label: "Painting",
    slug: "painting",
    icon: "/icon/mrh_paint_roller_red_icon_55x55.svg",
    sections: {
      "Exterior Painting": [
        "Fence Painting and Staining",
        "Deck Painting and Staining",
        "Brick Painting and Treatments",
        "Concrete Sealing and Staining",
        "Exterior Staining",
        "Garage Door Painting",
        "Vinyl Siding Painting",
        "Pool Decks",
        "Shed Painting",
        "Trim Painting",
        "Window Painting",
        "Wood Siding Painting",
      ],
      "Interior Painting": [
        "Cabinet Painting and Refinishing",
        "Single Room Painting",
        "Multiple Room Painting",
        "Crown Molding and Trim Painting",
        "Garage Floor Coating and Painting",
        "Door Painting",
        "Other Painting Services",
      ],
      "Wallpaper": [
        "wallpaper Installation",
        "Wallpaper Removal",
      ],
    },
  },
  {
    label: "Carpentry Installation and Repair",
    slug: "carpentry-installation-and-repair",
    icon: "/icon/mrh_handsaw_red_icon_55x55.svg",
    sections: {
      "Exterior Carpentry": [
        "Deck and Patio Construction",
        "Siding Installation and Repair",
        "Deck and Patio Repair and Service",
        "Handrail and Stairs Installation",
        "Fence Installation and Repair",
        "Wood Rot Repair",
      ],
      "Interior Carpentry": [
        "Crown Molding Installation and Repair",
        "Wainscoting Installation and Repair",
        "Wall Installation and Repair",
        "Custom Bookcases",
        "Custom Shelving",
        "Custom Cabinets",
        "Custom Mantels",
        "Mantel Installation",
      ],
      "Other Carpentry": [
        "Carpentry Construction and Installation",
        "Carpentry Remodeling and Repair",
      ],
      "More Local Carpentry Services": [
        "Other Carpentry Services",
      ],
    },
  },
  {
    label: "Plumbing",
    slug: "plumbing",
    icon: "/icon/mrh_plumbing_revised_red_icon_55x55.svg",
    sections: {
      "Repair and Replace": [
        "Faucet Repair and Replacement",
        "Sink Repair and Replacement",
        "Sump Pump Repair and Replacement",
        "Toilet Repair and Replacement",
        "Basement Drain Repair and Replacement",
        "Drain Repair and Replacement",
        "Water Valve Repair and Replacement",
      ],
      "Other Plumbing Services": [
        "Pipe Insulation",
        "Plumbing leak Detection",
      ],
    },
  },
  {
    label: "Lighting And Electrical",
    slug: "lighting-and-electrical",
    icon: "/icon/mrh_lighting_electrical_red_icon_55x55.svg",
    sections: {
      "Lighting": [
        "Light Fixture Installation and Repair",
        "Light Dimmer Switch Installation and Service",
        "Light Timer Installation and Service",
        "Motion Sensor Installation and Service",
        "Accent Lighting Installation and Replacement",
        "Cabinet Lighting Installation and Replacement",
        "Deck Lighting Installation and Service",
        "Energy Efficient Lighting Replacement and Retrofit",
        "Light Sensor Installation and Service",
        "Lighting Installation",
        "Occupancy Sensor Installation and Service",
        "Patio Lighting Installation and Service",
        "Recessed Lighting Installation and Service",
        "Specialty Lighting Installation",
        "Track Lighting Services Installation and Replacement",
      ],
      "Carbon Monoxide and Smoke Detector": [

          "Carbon Monoxide Detector Installation and Replacement",
          "Smoke Detector Inspection",
          "Smoke Detector Installation and Replacement",
          "Smoke Detector Repair and Service",
      ],
      "Home Automation and Smart Home": [
          "Lighting Control Installation and Repair",
          "Smart Home Device Installation and Repair",
      ],
      "Electrical Services and Installation":[
          "Ballast and Light Bulb Installation and Replacement",
          "Light Switch Installation and Repair",
          "Outlet Installation and Replacement",
          "Outlet Repair and Service",
          "Outside Outlet Installation and Service",
          "Safety Outlet Installation and Replacement",
          "Tamper Resistant Outlet Installation and Service",
          "Wall Switch and Socket Repair",
      ],
    },  
  },
  {
    label: "Other Services",
    slug: "other-services",
    icon: "/icon/mrh_other_services_red_icon_55x55.svg",
    sections: {
      "Other": [
      "Appliance Repair and Service",
      "Landscape Design and Installation",
      "Dryer Vent Service and Repair",
      "Garage Door Services",
      "Glass Services",
      "Glide Out Shelving",
      "Power and Pressure Washing",
      "Attic Insulation and Repairs",
      "Contents Services",
      "Holiday Lighting Installation",],
    },
  },
]

            

const COMMERCIAL_SERVICES = [
  {
    title: "Financial Institutions and Banks",
    slug: "financial-institutions-banks",
    icon: Landmark,
  },
  {
    title: "Healthcare Facilities & Hospitals",
    slug: "healthcare-facilities-hospitals",
    icon: Hospital,
  },
  {
    title: "Hotels and Hospitality",
    slug: "hotels-hospitality",
    icon: Hotel,
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    icon: Factory,

  },
  {
    title: "Municipal and Government",
    slug: "municipal-government",
    icon: Building2,
  },
  {
    title: "Restaurants and Food Services",
    slug: "restaurants-food-services",
    icon: Utensils,
  },
  {
    title: "Retail and Shopping Malls",
    slug: "retail-shopping-malls",
    icon: ShoppingBag,
  },
  {
    title: "Small Business and Corporate Offices",
    slug: "small-business-corporate-offices",
    icon: Briefcase,
  },
]



/* ================= HEADER ================= */

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isBookOpen, setIsBookOpen] = useState(false)
  const [serviceType, setServiceType] = useState<"Residential" | "Commercial" | "">("")
  const [mobileStep, setMobileStep] = useState<MobileMenuStep>("main")
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeType, setActiveType] = useState<"residential" | "commercial" | null>(null)
  const [activeResidential, setActiveResidential] =
    useState<typeof RESIDENTIAL_SERVICES[number] | null>(null)
    
  useEffect(() => {
    if (!isNavOpen) setMobileStep("main")
  }, [isNavOpen])

  return (
    <>     
      <motion.header
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm"
      >
        {/* ================= MOBILE HEADER ================= */}
        <div className="lg:hidden bg-white border-b sticky top-0 z-50">

          {/* ROW 1 : LOGO + MENU */}
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Hand and Hand Handyman"
                width={150}
                height={50}
                priority
              />
            </Link>

            <button
              onClick={() => setIsNavOpen(true)}
              className="h-10 w-10 flex items-center justify-center"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="block lg:hidden w-full h-px bg-black/20 my-1" />
          <br/>

          {/* ROW 2 : CTA BUTTONS */}
          <div className="flex gap-3 px-4 pb-3 border-b">
            <Button
              className="flex-1 bg-red-700 hover:bg-red-800 text-white"
              onClick={() => setIsBookOpen(true)}
            >
              <Calendar className="h-2 w-2 mr-2" />
              Book Now
            </Button>

            <Button
              className="flex-1 bg-red-700 hover:bg-red-800 text-white"
              onClick={() => (window.location.href = "tel:+17032966409")}
            >
              <Phone className="h-2 w-2 mr-2" />
              Call Us
            </Button>
          </div>
        </div>


        {/* ================= DESKTOP HEADER ================= */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={150} height={40} />
              <span className="font-semibold">Hand and Hand Handyman</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="flex items-center gap-10 mx-auto">
              <div
              className="relative"
              onPointerEnter={() => {
                            // cancel any pending close and open + reset state
                            clearTimeout((globalThis as any).__servicesCloseTimer)
                            ;(globalThis as any).__servicesCloseTimer = undefined
                            setServicesOpen(true)
                            setActiveType("residential")
                            setActiveResidential(null)
                          }}
              onPointerLeave={() => {
                            // delay closing to avoid flicker when moving between trigger and panel
                            clearTimeout((globalThis as any).__servicesCloseTimer)
                            ;(globalThis as any).__servicesCloseTimer = setTimeout(() => {
                            // only close if the menu is not "pinned" by a click
                            if (!(globalThis as any).__servicesSticky) {
                              setServicesOpen(false)
                              setActiveType(null)
                            }
                            (globalThis as any).__servicesCloseTimer = undefined
                            }, 150)
                          }}
              >
              <Link
                href="/services"
                aria-expanded={servicesOpen}
                onMouseEnter={() => {
                  setServicesOpen(true)
                  setActiveType("residential")
                  setActiveResidential(null)
                }}
                onMouseLeave={() => {
                  if (!(globalThis as any).__servicesSticky) {
                    setServicesOpen(true)
                    setActiveType(null)
                  }
                }}
                onClick={() => {
                  // allow navigation
                  ;(globalThis as any).__servicesSticky = false
                  setServicesOpen(false)
                  setActiveType(null)
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    ;(globalThis as any).__servicesSticky = false
                    setServicesOpen(false)
                    setActiveType(null)
                  }
                }}
                className="text-sm font-semibold text-neutral-800 hover:text-[var(--primary-blue)]"
              >
                Services
              </Link>

              {servicesOpen && (
                  <div className="absolute top-full left-1/3 -translate-x-1/3 mt-4 w-[1100px] bg-white rounded-xl shadow-xl border p-6 flex gap-6">

                    {/* LEFT */}
                    <div className="w-[220px] border-r pr-4">
                      <Link
                          href="/services/residential">
                      <button
                        onMouseEnter={() => {
                          setActiveType("residential")
                          setActiveResidential(null)
                        }}
                        className={`block w-full text-left px-4 py-3 rounded ${
                          activeType === "residential"
                            ? "bg-red-50 text-red-600"
                            : ""
                        }`}
                      >
                        Residential
                      </button></Link>
                      <Link
                          href="/services/commercial">
                      <button
                        onMouseEnter={() => {
                          setActiveType("commercial")
                          setActiveResidential(null)
                        }}
                        className={`block w-full text-left px-4 py-3 rounded ${
                          activeType === "commercial"
                            ? "bg-red-50 text-red-600"
                            : ""
                        }`}
                      >
                        Commercial
                      </button></Link>
                    </div>

                  {/* RIGHT PANEL */}
                  <div className="flex-1">

                    {/* RESIDENTIAL */}
                    {activeType === "residential" && !activeResidential &&(
                      <div className="grid grid-cols-4 gap-6">
                        {RESIDENTIAL_SERVICES.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => setActiveResidential(s)}
                            className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-gray-50"
                          >
                            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                <Image
                                  src={s.icon}
                                  alt={s.label}
                                  width={22}
                                  height={22}
                                />
                              </div>
                            <span className="text-sm font-medium">{s.label} </span>
                          </button>
                        ))}
                      </div>
                    )}
                    {/* RESIDENTIAL SUB SERVICES */}
                      {activeResidential && (
                        <div>
                          <button
                            onClick={() => setActiveResidential(null)}
                            className="text-red-600 mb-4 flex items-center gap-2"
                          >
                            <ChevronLeft /><Link
                                    href={`/services/residential/${activeResidential.slug}/`}
                                    className="text-red-600 font-semibold block mb-3"
                                  >{activeResidential.label}</Link>
                          </button>

                          <div className="grid grid-cols-4 gap-10">
                            {Object.entries(activeResidential.sections ?? {}).map(
                              ([section, items]) => (
                                <div key={section}>
                                  <Link
                                    href={`/services/residential/${activeResidential.slug}/${slugify(section)}`}
                                    className="text-red-600 font-semibold block mb-3"
                                  >
                                    {section}
                                  </Link>

                                  <ul className="space-y-2 text-sm">
                                    {items.map((item) => (
                                      <li key={item}>
                                        <Link
                                          href={`/services/residential/${activeResidential.slug}/${slugify(section)}/${slugify(item)}`}
                                          className="hover:text-red-600"
                                        >
                                          {item}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    {/* COMMERCIAL */}
                    {activeType === "commercial" && (
                      <div className="grid grid-cols-4 gap-6">
                        {COMMERCIAL_SERVICES.map((service) => {
                          const Icon = service.icon;

                          return (
                            <Link
                              key={service.slug}
                              href={`/services/commercial/${service.slug}`}
                              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition"
                            >
                              {/* ICON TOP */}
                              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                <Icon className="h-5 w-5 text-red-300" />
                              </div>

                              {/* NAME BELOW */}
                              <span className="text-sm font-medium text-neutral-800">
                                {service.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}

                  </div>
                </div>
              )}
            </div>
              <Link href="/services/locations">Locations</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/how-we-work">How We Work</Link>
            </nav>

            {/* DESKTOP CTA */}
            <div className="flex gap-3 items-center">
              <Button  onClick={() => (window.location.href = "tel:+17032966409")} variant="outline" size="sm">
                <Phone className="h-4 w-4" /> (703) 296-6409
              </Button>

              <Button size="lg" onClick={() => setIsBookOpen(true)}>
                <Calendar className="h-5 w-5" /> Book Now
              </Button>
            </div>
          </div>
        </div><div className="w-full h-[6px] bg-[var(--primary-red)]" />
      </motion.header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {/* ================= MOBILE MENU SLIDE ================= */}
      <>
        {/* BACKDROP */}
        
        <div
          className={`fixed inset-0 z-[9998] bg-black/40 transition-opacity duration-300
            ${isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setIsNavOpen(false)}
        />

        {/* SLIDE PANEL */}
        <div
            className={`
              fixed top-0 left-0 z-[9999]
              h-full w-full
              bg-white shadow-xl
              transform transition-transform duration-300 ease-out
              ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-4">
            <span className="font-semibold text-lg">MENU</span>
            <button onClick={() => setIsNavOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* LOGO */}
          <div className="px-4 py-4">
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              <Image src="/logo.png" alt="Logo" width={160} height={44} />
            </Link>
          </div>

          {/* CTA */}
          <div className="px-4 pb-4 flex gap-3 border-b">
            <Button
              className="flex-1 bg-red-700 hover:bg-red-800"
              onClick={() => {
                setIsNavOpen(false)
                setIsBookOpen(true)
              }}
            >
              <Calendar className="h-5 w-5" /> Book Now
            </Button>

            <Button
              className="flex-1 bg-red-700 hover:bg-red-800"
              onClick={() => (window.location.href = "tel:+17032966409")}
            >
              <Phone className="h-4 w-4" />Call Us
            </Button>
          </div>

          {/* MENU CONTENT */}
          <MobileScroll>
          <div className="px-4 py-4 overflow-hidden">
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

            {mobileStep === "services" && (
              <>
                <BackRow onClick={() => setMobileStep("main")} />
                <MenuRow label="Residential" onClick={() => setMobileStep("residential")} />
                <MenuRow label="Commercial" onClick={() => setMobileStep("commercial")} />
              </>
            )}

            {mobileStep === "residential" && (
              <>
                <BackRow onClick={() => setMobileStep("services")} />
                <ResidentialGrid onRepair={() => setMobileStep("repair")} />
              </>
            )}

            {mobileStep === "repair" && (
              <>
                <BackRow onClick={() => setMobileStep("residential")} />
                <RepairAccordion />
              </>
            )}

            {mobileStep === "commercial" && (
              <>
                <BackRow onClick={() => setMobileStep("services")} />
                <CommercialList />
              </>
            )}
          </div></MobileScroll>
        </div>
      </>


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
function MobileScroll({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        max-h-[calc(100vh-300px)]
        overflow-y-auto
        overscroll-contain
        scrollbar-hide
        pr-1
      "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {children}
    </div>
  )
}

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

function ResidentialGrid({
  onRepair,
  onOpenService,
}: {
  onRepair: () => void
  onOpenService?: (slug: string) => void
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {RESIDENTIAL_SERVICES.map((s) => {
        const hasSections = Object.keys(s.sections ?? {}).length > 0

        const content = (
          <div className="flex flex-col items-center justify-between h-full">
            {/* TITLE */}
            <span className="text-sm font-medium text-center mb-4">
              {s.label}
            </span>

            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src={s.icon}
                alt={s.label}
                width={32}
                height={32}
              />
            </div>
          </div>
        )

        const baseClass =
          "border rounded-xl px-3 py-6 text-center hover:bg-gray-50 transition"

        // 🔹 Open accordion (Repair-style)
        if (hasSections) {
          return (
            <button
              key={s.slug}
              onClick={() => {
                ;(globalThis as any).__mobileResidentialSlug = s.slug
                ;(globalThis as any).__mobileResidentialLabel = s.label
                onRepair()
              }}
              className={baseClass}
              aria-label={s.label}
            >
              {content}
            </button>
          )
        }

        // 🔹 Normal redirect
        return (
          <Link
            key={s.slug}
            href={`/services/residential/${s.slug}`}
            className={baseClass}
            aria-label={s.label}
          >
            {content}
          </Link>
        )
      })}
    </div>
  )
}

function ResidentialAccordion({
  service,
}: Readonly<{
  service: ResidentialService
}>) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="space-y-2">
      {Object.entries(service.sections ?? {}).map(([section, items]) => {
        const isOpen = open === section
        const sectionSlug = slugify(section || "overview")
        const sectionHref = `/services/residential/${service.slug}/${sectionSlug}`

        return (
          <div key={section || "__root__"} className="border rounded-lg">
            <div className="w-full flex justify-between items-center px-4 py-4 font-medium">
              {/* section link (always clickable) */}
              <Link href={sectionHref} className="text-left flex-1">
                {section || "Overview"}
              </Link>

              {/* toggle (separate control so link stays clickable) */}
              <button
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : section)}
                className="ml-4 text-xl w-8 h-8 flex items-center justify-center rounded-md"
              >
                {isOpen ? "−" : "+"}
              </button>
            </div>

            {/* when opened, render clickable items; also ensure items are links */}
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-gray-600 space-y-2">
                {items.length === 0 ? (
                  <div className="text-gray-500">No items listed — view the section page.</div>
                ) : (
                  items.map((item) => {
                    const href =
                      item.toLowerCase() === "overview"
                        ? sectionHref
                        : `${sectionHref}/${slugify(item)}`
                    return (
                      <Link
                        key={item}
                        href={href}
                        className="block py-2 hover:text-red-600"
                      >
                        {item}
                      </Link>
                    )
                  })
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function ServiceAccordion({ slug }: { slug: string }) {
  const service = RESIDENTIAL_SERVICES.find((s) => s.slug === slug)

  const titleCase = (text: string) =>
    text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim()

  if (service) {
    const serviceHref = `/services/residential/${service.slug}`

    return (
      <>
        {/* SERVICE NAME — NOW CLICKABLE */}
        <Link
          href={serviceHref}
          className="mb-4 inline-flex items-center gap-1 text-lg font-semibold text-neutral-800 hover:text-red-600"
        >
          {titleCase(service.label)}
          <ChevronRight className="h-4 w-4" />
        </Link>
        <MobileScroll>
        <ResidentialAccordion service={service} />
        </MobileScroll>
      </>
    )
  }

  /* Fallback (unchanged, but clickable too) */
  const fallbackService: ResidentialService = {
    label: slug ? slug.replaceAll("-", " ") : "Service",
    slug: slug || "service",
    icon: "/icon/mrh_repair_revised_red_icon_55x55.svg",
    sections: {
      Overview: ["Overview"],
    },
  }

  return (
    <>
      <Link
        href={`/services/residential/${fallbackService.slug}`}
        className="mb-4 inline-flex items-center gap-1 text-lg font-semibold text-neutral-800 hover:text-red-600"
      >
        {titleCase(fallbackService.label)}
        <ChevronRight className="h-4 w-4" />
      </Link>

      <ResidentialAccordion service={fallbackService} />
    </>
  )
}

function RepairAccordion() {
  // Support two behaviours:
  // - default: render the built-in "repair" service
  // - when triggered from the mobile ResidentialGrid for any service that has
  //   sub-sections, a temporary global `__mobileResidentialSlug` is set and
  //   we render that service's accordion instead (then clean it up on unmount).
  const mobileOverride = (globalThis as any).__mobileResidentialSlug as
    | string
    | undefined

  useEffect(() => {
    return () => {
      if ((globalThis as any).__mobileResidentialSlug) {
        delete (globalThis as any).__mobileResidentialSlug
      }
      if ((globalThis as any).__mobileResidentialLabel) {
        delete (globalThis as any).__mobileResidentialLabel
      }
    }
  }, [])

  return <ServiceAccordion slug={mobileOverride ?? "repair"} />
}


function CommercialList() {
  const close = (globalThis as any).__closeMobileNav as (() => void) | undefined
  const active = (globalThis as any).__mobileCommercialSlug as string | undefined

  return (
    <div className="space-y-3">
      {/* top pill (matches screenshot) */}
      <Link
        href="/services/commercial"
        className="block w-full px-4 py-2 rounded-md text-red-700 font-semibold bg-red-50 text-left underline border-red-700"
        onClick={() => close?.()}
        aria-label="Commercial overview"
      >
        Commercial
      </Link>

      <div className="space-y-0">
        {COMMERCIAL_SERVICES.map(({ title, slug }) => {
          const isActive = active === slug
          return (
            <Link
              key={slug}
              href={`/services/commercial/${slug}`}
              className={`w-full block py-3 border-b font-medium hover:text-red-600 ${
                isActive ? "text-red-600 bg-red-50" : ""
              }`}
              aria-label={title}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                if (typeof close === "function") close()
              }}
            >
              {title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

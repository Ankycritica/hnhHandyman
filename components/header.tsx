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
  {
    label: "Repair",
    slug: "repair",
    icon: "/icon/mrh_repair_revised_red_icon_55x55.svg",
    sections: {
        "Interior Repair": [
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
      "": [
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
  },
  {
    title: "Healthcare Facilities & Hospitals",
    slug: "healthcare-facilities-hospitals",
  },
  {
    title: "Hotels and Hospitality",
    slug: "hotels-hospitality",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
  },
  {
    title: "Municipal and Government",
    slug: "municipal-government",
  },
  {
    title: "Restaurants and Food Services",
    slug: "restaurants-food-services",
  },
  {
    title: "Retail and Shopping Malls",
    slug: "retail-shopping-malls",
  },
  {
    title: "Small Business and Corporate Offices",
    slug: "small-business-corporate-offices",
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
                setActiveResidential(null)
                
              }}
              className="text-sm font-semibold text-neutral-800 hover:text-[var(--primary-blue)]"
            >
              Services
            </Link>


            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1080px] bg-white rounded-2xl shadow-2xl border p-6 flex gap-6"
              >

                {/* LEFT COLUMN */}
                <div className="w-[200px] border-r pr-4">
                  <Link
                    href="/services/residential"
                    onMouseEnter={() => {
                      setActiveType("residential")
                      setActiveResidential(null)
                    }}
                    className={`block px-4 py-3 rounded-lg font-semibold ${
                      activeType === "residential"
                        ? "bg-red-50 text-red-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    Residential
                  </Link>
                  <Link
                    href="/services/commercial"
                    onMouseEnter={() => {
                      setActiveType("commercial")
                      setActiveResidential(null)
                    }}
                    className={`block px-4 py-3 rounded-lg font-semibold ${
                      activeType === "commercial"
                        ? "bg-red-50 text-red-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    Commercial
                  </Link>
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
                    <div className="flex flex-col h-[320px]">

                      {/* FIXED HEADER */}
                      <div className="pb-4 border-b">
                        <button
                          onClick={() => setActiveResidential(null)}
                          className="text-sm font-semibold text-red-600 flex items-center gap-1"
                        >
                          ← {activeResidential.label}
                        </button>
                      </div>

                      {/* SCROLLABLE CONTENT */}
                      <div className="flex-1 overflow-y-auto pr-6 mt-4 mega-scroll">

                        <div className="grid grid-cols-4 gap-12">
                          {Object.entries(activeResidential.sections).map(
                            ([title, items]) => (
                              <div key={title} className="max-w-[220px] w-full" >

                                {/* SECTION HEADING */}
                                <h4 className="text-red-600 font-semibold mb-3 flex items-center gap-1">
                                  {title}
                                  <ChevronRight className="h-4 w-4" />
                                </h4>

                                {/* SERVICE LIST */}
                                <ul className="space-y-2 text-sm">
                                  {items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="text-red-600 leading-none">•</span>
                                      <Link
                                        href={`/services/residential/${activeResidential.slug}`}
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
                    </div>
                  )}


                  {/* COMMERCIAL */}
                  {activeType === "commercial" && (
                    <div className="grid grid-cols-3 gap-6">
                      {COMMERCIAL_SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/commercial/${service.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                        >
                          <span className="text-red-600 font-bold text-lg">#</span>
                          <span className="text-sm font-medium">{service.title}</span>
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

          <div className="flex gap-3 items-center">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4" /> (703) 296-6409
            </Button>

            <Button onClick={() => setIsBookOpen(true)} size="lg">
              <Calendar className="h-5 w-5" /> Book Now
            </Button>

            <button className="lg:hidden" onClick={() => setIsNavOpen(true)}>
              <Menu />
            </button>
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
    {
      label: "Repair",
      icon: "/icon/mrh_repair_revised_red_icon_55x55.svg",
      action: onRepair,
    },
    {
      label: "Drywall & Ceiling",
      icon: "/icon/mrh_drywall_red_icon.svg",
    },
    {
      label: "Remodel",
      icon: "/icon/mrh_remodel_red_icon_55x55.svg",
    },
    {
      label: "Window and Door Services",
      icon: "/icon/mrh_window_door_red_icon_55x55.svg",
    },
    {
      label: "Safety and Mobility Services",
      icon: "/icon/mrh_shield_red_icon_55x55.svg",
    },
    {
      label: "Assembly Service",
      icon: "/icon/mrh_assembly_service_red_icon_55x55.svg",
    },
    {
      label: "Floor Installation and Repair",
      icon: "/icon/mrh_floor_install_repair_red_icon_55x55.svg",
    },
    {
      label: "Painting",
      icon: "/icon/mrh_paint_roller_red_icon_55x55.svg",
    },
    {
      label: "Carpentry Installation and Repair",
      icon: "/icon/mrh_handsaw_red_icon_55x55.svg",
    },
    {
      label: "Plumbing",
      icon: "/icon/mrh_plumbing_revised_red_icon_55x55.svg",
    },
    {
      label: "Lighting And Electrical",
      icon: "/icon/mrh_lighting_electrical_red_icon_55x55.svg",
    },
    {
      label: "Other Services",
      icon: "/icon/mrh_other_services_red_icon_55x55.svg",
    },
    
  ]


  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={item.action}
          className="border rounded-xl p-4 text-center font-medium hover:bg-gray-50"
        >
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
            <Image
              src={item.icon}
              alt={item.label}
              width={32}
              height={32}
              className="block"
            /></div>
            {/* LABEL */}
          <span>{item.label}</span>
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
              Overview <br/>
              TV Wall Mount Installation <br/>
              Shelving Installation<br/>
              Ceiling Fan Installation and Replacement<br/>
              Child Proofing<br/>
              Picture Hanging<br/>
              Closet Shelving <br/>
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
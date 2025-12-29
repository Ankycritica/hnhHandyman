"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Menu, X, ChevronLeft } from "lucide-react"

/* ---------------- SERVICES DATA ---------------- */

type Section = {
  title: string
  items: string[]
}

type Category = {
  id: string
  label: string
  sections: Section[]
}

type ServiceType = {
  id: "residential" | "commercial"
  label: string
  categories: Category[]
}

const SERVICES: ServiceType[] = [
  /* =======================
     RESIDENTIAL SERVICES
  ======================== */
  {
    id: "residential",
    label: "Residential",
    categories: [
      {
        id: "repair",
        label: "Repair",
        sections: [
          {
            title: "Interior Repair",
            items: [
              "TV Wall Mount Installation",
              "Grout Repair and Service",
              "Shelving Installation",
              "Ceiling Fan Installation and Replacement",
              "Child Proofing",
              "Picture Hanging",
              "Closet Shelving",
            ],
          },
          {
            title: "Exterior Repair",
            items: [
              "Gutter Guard Installation",
              "Window Frame Repair",
              "Window and Door Weatherproofing",
              "Chimney Repair and Service",
              "Debris Removal",
              "Gutter Installation and Repair",
              "Masonry and Concrete Services",
            ],
          },
          {
            title: "Garage Repair",
            items: [
              "Garage Storage and Organization",
              "Garage Shelving",
            ],
          },
        ],
      },

      {
        id: "drywall",
        label: "Drywall and Ceiling",
        sections: [
          {
            title: "Walls and Ceilings",
            items: [
              "Drywall Patching and Repair",
              "Drywall Finishing",
              "Drywall Installation",
              "Wall Finishing",
              "Ceiling Repair and Replacement",
            ],
          },
        ],
      },

      {
        id: "remodel",
        label: "Remodel",
        sections: [
          {
            title: "Bathroom",
            items: [
              "Bathroom Remodeling and Repair",
              "Tub to Shower Conversion",
              "Vanity Installation",
              "Tub Enclosure Installation and Repair",
              "Bathtub Repair and Replacement",
              "Walk-In Tub Installation and Repair",
              "Shower Tile Installation and Repair",
            ],
          },
          {
            title: "Kitchen",
            items: [
              "Kitchen Remodeling and Repair",
              "Kitchen Backsplash Installation",
              "Cabinet Installation and Repair",
              "Countertop Installation and Repair",
              "Custom Kitchen Island Installation",
            ],
          },
          {
            title: "Rooms and Other Services",
            items: [
              "Bedroom Remodeling and Repair",
              "Basement Remodeling and Repair",
              "Attic Remodeling and Repair",
              "Dining Room Remodeling and Repair",
              "Home Office Remodeling and Repair",
              "Living Room Remodeling and Repair",
              "Safety and Mobility Services",
            ],
          },
        ],
      },

      {
        id: "painting",
        label: "Painting",
        sections: [
          {
            title: "Interior Painting",
            items: [
              "Cabinet Painting and Refinishing",
              "Single Room Painting",
              "Multiple Room Painting",
              "Crown Molding and Trim Painting",
              "Door Painting",
              "Other Interior Painting Services",
            ],
          },
          {
            title: "Exterior Painting",
            items: [
              "Fence Painting and Staining",
              "Deck Painting and Staining",
              "Brick Painting and Treatments",
              "Concrete Sealing and Staining",
              "Exterior Staining",
              "Garage Door Painting",
              "Vinyl Siding Painting",
            ],
          },
          {
            title: "Wallpaper",
            items: [
              "Wallpaper Installation",
              "Wallpaper Removal",
            ],
          },
        ],
      },

      {
        id: "plumbing",
        label: "Plumbing",
        sections: [
          {
            title: "Repair and Replace",
            items: [
              "Faucet Repair and Replacement",
              "Sink Repair and Replacement",
              "Sump Pump Repair and Replacement",
              "Toilet Repair and Replacement",
              "Basement Drain Repair and Replacement",
              "Drain Repair and Replacement",
              "Water Valve Repair and Replacement",
            ],
          },
          {
            title: "Other Plumbing Services",
            items: [
              "Pipe Insulation",
              "Plumbing Leak Detection",
              "Hot Water Dispenser Repair and Replacement",
            ],
          },
        ],
      },
    ],
  },

  /* =======================
     COMMERCIAL SERVICES
  ======================== */
  {
    id: "commercial",
    label: "Commercial",
    categories: [
      {
        id: "office-maintenance",
        label: "Office Maintenance",
        sections: [
          {
            title: "Office Services",
            items: [
              "General Office Repairs",
              "Furniture Assembly",
              "Lighting Maintenance",
              "Drywall and Ceiling Repairs",
              "Restroom Repairs",
            ],
          },
        ],
      },

      {
        id: "retail-improvements",
        label: "Retail Space Improvements",
        sections: [
          {
            title: "Retail Services",
            items: [
              "Storefront Enhancements",
              "Display Installation",
              "Fixture Installation",
              "Retail Space Modifications",
            ],
          },
        ],
      },

      {
        id: "commercial-painting",
        label: "Commercial Painting",
        sections: [
          {
            title: "Painting Services",
            items: [
              "Interior Commercial Painting",
              "Exterior Commercial Painting",
              "Warehouse Painting",
              "Office Repainting",
            ],
          },
        ],
      },

      {
        id: "facility-repairs",
        label: "Facility Repairs",
        sections: [
          {
            title: "Facility Services",
            items: [
              "HVAC Minor Repairs",
              "Electrical Repairs",
              "Plumbing Repairs",
              "Structural Repairs",
            ],
          },
        ],
      },

      {
        id: "tenant-improvements",
        label: "Tenant Improvements",
        sections: [
          {
            title: "Build-Out Services",
            items: [
              "Office Build-Outs",
              "Space Reconfiguration",
              "Custom Modifications",
            ],
          },
        ],
      },

      {
        id: "accessibility-upgrades",
        label: "Accessibility Upgrades",
        sections: [
          {
            title: "ADA Compliance",
            items: [
              "ADA Ramp Installation",
              "Handrail Installation",
              "Doorway Widening",
              "Accessibility Modifications",
            ],
          },
        ],
      },

      {
        id: "warehouse-services",
        label: "Warehouse Services",
        sections: [
          {
            title: "Warehouse Solutions",
            items: [
              "Industrial Maintenance",
              "Shelving Installation",
              "Warehouse Organization",
            ],
          },
        ],
      },

      {
        id: "restaurant-fit-outs",
        label: "Restaurant Fit-Outs",
        sections: [
          {
            title: "Restaurant Services",
            items: [
              "Kitchen Modifications",
              "Dining Area Updates",
              "Equipment Installation",
            ],
          },
        ],
      },
    ],
  },
]


/* ---------------- HEADER ---------------- */

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [openServices, setOpenServices] = useState(false)
  const [activeType, setActiveType] = useState<ServiceType | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  return (
    <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={150} height={40} />
            <span className="font-semibold">Hand and Hand Handyman</span>
          </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-auto lg:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 h-10 w-10"
          onClick={() => setIsNavOpen((p) => !p)}
        >
          {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 mx-auto">
  {/* SERVICES */}
  <div className="relative"
    onMouseEnter={() => setOpenServices(true)}
    onMouseLeave={() => {
      setOpenServices(false)
      setActiveType(null)
      setActiveCategory(null)
    }}
  >
    <button className="text-sm font-semibold text-neutral-800 flex items-center gap-1">
      Services
    </button>

    {openServices && (
      <div className="absolute left-1/2 top-full -translate-x-1/2 w-[80vw] rounded-2xl bg-white border-t shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-8">

          {/* LEVEL 1 – Residential / Commercial */}
          {!activeType && (
            <div className="flex gap-6">
              {SERVICES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type)}
                  className="px-6 py-3 rounded-full border font-semibold text-sm hover:bg-red-50 hover:border-red-600"
                >
                  {type.label}
                </button>
              ))}
            </div>
          )}

          {/* LEVEL 2 */}
          {activeType && !activeCategory && (
            <>
              <button
                onClick={() => setActiveType(null)}
                className="flex items-center gap-2 mb-6 text-red-600 font-semibold"
              >
                <ChevronLeft size={16} /> Services
              </button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {activeType.categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat)}
                    className="p-4 rounded-xl border text-left hover:border-red-600 hover:bg-red-50"
                  >
                    <span className="text-sm font-semibold">
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* LEVEL 3 */}
          {activeType && activeCategory && (
            <>
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 mb-6 text-red-600 font-semibold"
              >
                <ChevronLeft size={16} /> {activeCategory.label}
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {activeCategory.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-bold text-red-600 mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-neutral-800 hover:text-red-600 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    )}
  </div>

  <Link href="/locations" className="text-sm font-semibold">
    Locations
  </Link>
</nav>


        {/* CTA */}
        <div className="ml-auto hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Phone className="h-4 w-4" />
            (703) 296-6409
          </Button>
          <Button size="lg">
            <Calendar className="h-5 w-5" /> Book Now
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

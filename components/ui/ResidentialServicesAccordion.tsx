"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { RESIDENTIAL_SERVICES } from "@/data/residential-services"
import { slugify } from "@/lib/residential-service-utils"

export function ResidentialServicesAccordion() {
  const [openSlugs, setOpenSlugs] = useState<string[]>([])

  const toggle = (slug: string) => {
    setOpenSlugs((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    )
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">

        {/* ================= TITLE ================= */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-6">
          Residential Services
        </h2>

        {/* ================= RED TAB ================= */}
        <div className="flex justify-center mb-12">
          <div className="bg-red-700 text-white px-12 py-3 rounded-lg font-semibold flex items-center gap-2 shadow">
            <Image
                src="/icon/residential-icon-white.svg"
                alt="Residential"
                width={18}
                height={18}
            />
            Residential
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6 auto-rows-min">

          {RESIDENTIAL_SERVICES.map((cat) => {
            const isOpen = openSlugs.includes(cat.slug)

            return (
              <div
                key={cat.slug}
                className="relative bg-white border border-neutral-200 rounded-lg shadow-sm self-start"
              >
                {/* LEFT RED BAR */}
                <span className="absolute left-0 top-0 h-full w-[6px] bg-red-700 rounded-l-lg" />

                {/* HEADER */}
                <button
                  onClick={() => toggle(cat.slug)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={cat.icon}
                      alt={cat.label}
                      width={26}
                      height={26}
                    />
                    <span className="font-semibold">
                      {cat.label}
                    </span>
                  </div>

                  <span className="text-2xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 space-y-6 border-t">
                    {Object.entries(cat.sections).map(
                      ([section, services]) => (
                        <div key={section}>
                          {section && (
                            <h4 className="font-semibold mb-3">
                              {section}
                            </h4>
                          )}

                          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            {services.map((service) => (
                              <Link
                                key={service}
                                href={`/services/residential/${cat.slug}/${slugify(section)}/${slugify(service)}`}
                                className="text-red-700 hover:underline"
                              >
                                • {service}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

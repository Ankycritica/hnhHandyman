"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getIcon } from "@/lib/icon-map"
import residentialServices from "@/data/services.residential.json"
import commercialServices from "@/data/services.commercial.json"

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--primary-blue)]">
                Our Services
              </h1>
              <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-12">
                Professional handyman services for residential and commercial properties
              </p>
            </FadeIn>

            {/* Tab Navigation */}
            <div
              role="tablist"
              className="flex justify-center gap-4 mb-12"
              aria-label="Service categories"
            >
              <Link
                href="/services/residential"
                role="tab"
                aria-controls="residential-panel"
                id="residential-tab"
                className="px-6 py-3 rounded-md font-semibold transition-colors bg-white text-neutral-800 hover:text-[var(--primary-blue)] hover:bg-[var(--primary-blue)]/10 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
              >
                Residential
              </Link>
              <Link
                href="/services/commercial"
                role="tab"
                aria-controls="commercial-panel"
                id="commercial-tab"
                className="px-6 py-3 rounded-md font-semibold transition-colors bg-white text-neutral-800 hover:text-[var(--primary-blue)] hover:bg-[var(--primary-blue)]/10 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
              >
                Commercial
              </Link>
            </div>

            {/* Residential Preview */}
            <div
              role="tabpanel"
              id="residential-panel"
              aria-labelledby="residential-tab"
              className="mb-12"
            >
              <FadeIn>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[var(--primary-blue)]">
                    Residential Services
                  </h2>
                  <Link
                    href="/services/residential"
                    className="text-[var(--primary-red)] font-semibold hover:text-[var(--primary-red-dark)]"
                  >
                    View all Residential →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {residentialServices.slice(0, 6).map((service, i) => {
                    const Icon = getIcon(service.iconName)
                    return (
                      <FadeIn key={service.slug} delay={i * 0.1}>
                        <Link href={`/services/residential/${service.slug}`}>
                          <article
                            className="bg-white rounded-md shadow-md p-6 hover:shadow-lg transition cursor-pointer h-full"
                            aria-labelledby={`service-${service.slug}`}
                          >
                            <Icon className="w-10 h-10 text-[var(--primary-blue)] mb-4" />
                            <h3
                              id={`service-${service.slug}`}
                              className="text-[var(--primary-blue)] font-semibold text-lg mb-2"
                            >
                              {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {service.shortDescription}
                            </p>
                          </article>
                        </Link>
                      </FadeIn>
                    )
                  })}
                </div>
              </FadeIn>
            </div>

            {/* Commercial Preview */}
            <div
              role="tabpanel"
              id="commercial-panel"
              aria-labelledby="commercial-tab"
            >
              <FadeIn>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[var(--primary-blue)]">
                    Commercial Services
                  </h2>
                  <Link
                    href="/services/commercial"
                    className="text-[var(--primary-red)] font-semibold hover:text-[var(--primary-red-dark)]"
                  >
                    View all Commercial →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {commercialServices.slice(0, 6).map((service, i) => {
                    const Icon = getIcon(service.iconName)
                    return (
                      <FadeIn key={service.slug} delay={i * 0.1}>
                        <Link href={`/services/commercial/${service.slug}`}>
                          <article
                            className="bg-white rounded-md shadow-md p-6 hover:shadow-lg transition cursor-pointer h-full"
                            aria-labelledby={`service-${service.slug}`}
                          >
                            <Icon className="w-10 h-10 text-[var(--primary-blue)] mb-4" />
                            <h3
                              id={`service-${service.slug}`}
                              className="text-[var(--primary-blue)] font-semibold text-lg mb-2"
                            >
                              {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {service.shortDescription}
                            </p>
                          </article>
                        </Link>
                      </FadeIn>
                    )
                  })}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}


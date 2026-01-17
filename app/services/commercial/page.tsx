"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { getIcon } from "@/lib/icon-map"
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

export default function CommercialServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: commercialServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      description: service.shortDescription,
      url: `https://hnhhandyman.com/services/commercial/${service.slug}`,
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-[#B21E23] pt-16 pb-32 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <FadeIn>
            <div className="text-white">
              <h1 className="text-4xl md:text-3xl text-white/90 font-bold mb-4 leading-tight">
                Commercial Hand and Hand Handyman Services
              </h1>

              <p className="text-white/90 leading-relaxed max-w-xl">
                Is your building dealing with leaks or cracks in the walls and floors? 
                Perhaps your office needs some desk upgrades. No matter the need, 
                HnHHandyman®’s trusted local commercial service providers can help with a wide range of repairs 
                and building improvements to keep your business running smoothly
              </p>
            </div>
          </FadeIn>

          {/* RIGHT IMAGE */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <img
                src="/icon/mrh_store_consult_desktop_624x322_rs-(1).webp"
                alt="Mr Handyman technician"
                className="rounded-xl shadow-xl object-cover"
              />
            </div>
          </FadeIn>
        </div>    
      </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-4 text-[var(--primary-blue)]">
                Our Commercial Services
              </h2>
              <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-12">
                Comprehensive business facility services to maintain and improve
                your commercial property
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialServices.map((service, i) => {
                // const Icon = getIcon(service.iconName)
                return (
                  <FadeIn key={service.slug} delay={i * 0.1}>
                    <Link href={`/services/commercial/${service.slug}`}>
                      <article
                        className="bg-white rounded-md shadow-md p-6 hover:shadow-lg transition cursor-pointer h-full"
                        aria-labelledby={`service-${service.slug}`}
                      >
                        {/* <Icon className="w-10 h-10 text-[var(--primary-blue)] mb-4" /> */}
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
          </div>
        </section>
      </div>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}


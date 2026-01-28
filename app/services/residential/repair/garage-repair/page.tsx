"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { GarageRepairServices }from "@/data/interior-repair.services"

export default function InteriorRepairPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div className="pt-20 lg:pt-24"/>
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
          <Link href="/services/residential" className="hover:text-red-600">Residential</Link>
          <span>/</span>
          <Link href="/services/residential/repair" className="hover:text-red-600">Repair</Link>
          <span>/</span>
          <span className="text-red-600 font-semibold">Garage Repair</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#B21E23]">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
        <h1 className="text-4xl text-white/90 md:text-3xl font-bold mb-4">
          Garage Services
        </h1>
        <p className="text-white/90 leading-relaxed max-w-xl">
          Looking to enhance your garage's functionality and appearance? Trust the expertise of Hand and Hand Handyman®
          for all your garage repair needs. From minor fixes to storage installations, our service professionals
          can provide top-notch solutions to make your garage a safe, organized, and attractive space
        </p>
        </div>

        <Image
        src="/img/car-garage.jpg"
        alt="Interior repair"
        width={620}
        height={340}
        className="rounded-xl shadow-xl"
        priority
        />
      </div>
      </section>

      {/* INTRO + CHECKLIST (replaces $SELECTION_PLACEHOLDER$) */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-3xl font-bold text-[#B21E23] mb-4"
          >
            Garage Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="text-neutral-700 max-w-3xl leading-relaxed mb-10"
          >
            Transform your garage into a functional, organized space with Hand and Hand Handyman’s expert services. Whether you need to clear out clutter, repair shelving, or install cabinets and ceiling-mounted storage, we’ve got you covered. Our skilled professionals are ready to clean, repair, 
            and install whatever your garage requires, helping you make the most of this essential part of your home.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ul className="space-y-6">
              {[
                "One call solves it all",
                "Licensed, insured and seasoned Professionals you can trust",
                "Quality workmanship backed by our “Done Right Promise”",
                "Clear and honest up-front pricing",
                "Nationally recognized and Locally owned & operated",
                "Your reliable partner in home and business maintenance",
              ].map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i }}
                  className="flex gap-4 items-start text-neutral-700"
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#B21E23] inline-flex items-center justify-center shadow-sm"
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-sm leading-relaxed">{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Right column intentionally left for white-space / future content (keeps layout like the reference) */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

    {/* INTERIOR SERVICES GRID */}
    <section className="bg-white py-20">
    <div className="container mx-auto px-6">

      {/* HEADER */}

      {/* HEADER */}
      <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-[#B21E23] text-center mb-4"
      >
      Garage Services We Offer!
      </motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
      className="text-center text-neutral-700 max-w-3xl mx-auto mb-14"
      >
      HnHHandyman is one of the largest and fastest-growing handyman services companies. 
      Each day, we serve the service and repair needs of thousands of residential and commercial customers.
   


      </motion.p>
      {/* IMAGE (place the screenshot-like banner here) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 mb-12"
      >
        <div className="overflow-hidden shadow-xl">
          <div className="relative w-full h-[260px] md:h-[420px] lg:h-[420px]">
            <Image
              src="/icon/mrh_wall_tile_grouting_hand_desktop_1280x400.webp" // replace with your actual image path
              alt="Hand smoothing tile grout during interior repair"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </motion.div>
      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {GarageRepairServices.map((item, i) => (
        <motion.div
        key={item.slug}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        >
        <Link
          href={`/services/residential/repair/interior-repair/${item.slug}`}
          className="block h-full"
        >
          <div className="relative bg-white rounded-xl border shadow-md hover:shadow-lg transition p-6 h-full">

          {/* RED STRIP */}
          <span className="absolute left-0 top-0 h-full w-1 bg-[#B21E23]" />

          {/* TITLE + ARROW */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-neutral-900 leading-snug">
            {item.title}
            </h3>

            <span className="w-7 h-7 rounded-full border border-[#B21E23]
            text-[#B21E23] flex items-center justify-center font-bold shrink-0">
            →
            </span>
          </div>

          {/* DESC */}
          <p className="text-sm text-neutral-700 leading-relaxed">
            {item.desc}
          </p>

          </div>
        </Link>
        </motion.div>
      ))}
      </div>
    </div>
    </section>


      {/* INTRO COPY */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-3xl font-bold text-red-700 mb-4">
            Garage Home Repairs Near You
          </h2>
          <div className="h-[2px] w-150 bg-red-700 mb-6" />
          <p className="text-neutral-700 leading-relaxed mb-4">
            Transform your home’s interior with professional repair and installation
            services from Hand and Hand Handyman. From shelving and picture hanging
            to exhaust fan installation and caulking, we do it all.
          </p>
          <p className="text-sm italic text-neutral-600">
            Services may vary by location. Contact your local team for a customized
            assessment.
          </p>
          <p className="mt-6">
          <Link href="/how-we-work">
            <button className="bg-red-700 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold shadow">
              Learn More
            </button>
          </Link></p>
        </div>

        <Image
          src="/img/shake.jpg"
          alt="Interior consultation"
          width={620}
          height={360}
          className="rounded-xl shadow-lg"
        />

        {/* TRUST BAR (improved, responsive, accessible, animated) */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-[#B21E23] mt-12 md:col-span-2"
          role="region"
          aria-labelledby="trust-heading"
        >
          <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h2 id="trust-heading" className="text-white text-2xl font-bold">
                Service You Can Trust!
              </h2>
              <p className="text-white/90 hidden md:block">Let us know how we can help you today.</p>
            </div>

            <div className="flex items-center gap-4">

              <Link href="/get-started" aria-label="Get started — schedule service">
                <Button className="flex items-center gap-3 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold shadow-md">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-red-700 mb-6">FAQs About Garage Repair</h2>

          {[
            {
              q: "What Garage repair services do you offer?",
              a: "We handle Garage Storage and Organization, Garage Shelving, and more.",
            },
            {
              q: "How long do Garage repairs take?",
              a: "Most projects are completed in a single day.",
            },
            {
              q: "Are your technicians experienced?",
              a: "Yes — our professionals average 10+ years of experience.",
            },
          ].map((faq) => (
            <details key={faq.q} className="mb-4 border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
      <Footer />
    </div>
  )
}

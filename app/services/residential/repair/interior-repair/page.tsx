"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { interiorRepairServices }from "@/data/interior-repair.services"

export default function InteriorRepairPage() {
  return (
    <div className="bg-white">
      <Header />

      {/* BREADCRUMB */}
      <div className="pt-24 border-b">
        <div className="container mx-auto px-6 py-4 text-sm text-neutral-600 flex gap-2">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/services/residential" className="hover:text-red-600">Residential</Link>
          <span>/</span>
          <Link href="/services/residential/repair" className="hover:text-red-600">Repair</Link>
          <span>/</span>
          <span className="text-red-600 font-semibold">Interior Repair</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#B21E23]">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl text-white/90 md:text-3xl font-bold mb-4">
              Interior Repair and Installation Services
            </h1>
            <p className="text-white/90 leading-relaxed max-w-xl">
              Whether you need a TV mounted, wall repairs, or child-proofing,
              Mr. Handyman’s interior repair services help keep your home safe,
              functional, and beautiful.
            </p>
          </div>

          <Image
            src="/icon/mrh_caulking_desktop_272x180_rs.webp"
            alt="Interior repair"
            width={620}
            height={340}
            className="rounded-xl shadow-xl"
            priority
          />
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
        Great Interior Repair Services We Offer!
        </motion.h2>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-center text-neutral-700 max-w-3xl mx-auto mb-14"
        >
        Mr. Handyman is one of the largest and fastest-growing handyman service
        companies, serving thousands of residential and commercial customers daily.
        </motion.p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interiorRepairServices.map((item, i) => (
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
          <h2 className="text-3xl md:text font-bold text-red-700 mb-4">
            Interior Home Repairs Near You
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
        </div>

        <Image
          src="/icon/mrh_worker_kneeling_cupboard_door_handle_desktop_656x371.webp"
          alt="Interior consultation"
          width={620}
          height={360}
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#B21E23] mt-12">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-2xl font-bold">
            Service You Can Trust!
          </h2>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
            Get Started
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-red-700 mb-6">
            FAQs About Interior Repair
          </h2>

          {[
            {
              q: "What interior repair services do you offer?",
              a: "We handle drywall repair, shelving, TV mounting, caulking, exhaust fans, and more.",
            },
            {
              q: "How long do interior repairs take?",
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

      <Footer />
    </div>
  )
}

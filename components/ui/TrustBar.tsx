"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="bg-[#B21E23] mt-12"
      role="region"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <h2 id="trust-heading" className="text-white text-2xl font-bold">
            Service You Can Trust!
          </h2>
          <p className="text-white/90 hidden md:block">
            Let us know how we can help you today.
          </p>
        </div>

        <Link href="/get-started">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold shadow-md">
            Book Now
          </Button>
        </Link>
      </div>
    </motion.section>
  )
}

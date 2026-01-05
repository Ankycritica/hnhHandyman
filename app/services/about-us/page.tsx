"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* FIXED HEADER */}
      <Header />

      {/* HEADER OFFSET */}
      <main className="pt-24">

        {/* ================= HERO ================= */}
        <section className="relative h-[420px] md:h-[520px] overflow-hidden">
          <Image
            src="/hnhh-truck01.jpg"
            alt="Hand And Hand Handyman service truck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-center text-white"
            >
              <h1 className="text-[var(--primary-blue)] md:text-5xl font-bold mb-4">
                Hand And Hand Handyman
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Built on trust, craftsmanship, and a commitment to our community
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
              <h2 className="text-3xl mb-12"> About Us :</h2>

              <p>
                <strong>Hand And Hand Handyman LLC</strong> is a family-owned and
                operated full-service handyman and remodeling company based in
                Virginia, proudly serving the Washington DC metropolitan area.
              </p>

              <p>
                Our unwavering commitment to excellent customer service and
                quality craftsmanship has earned us thousands of satisfied
                clients across residential and commercial projects.
              </p>

              <p>
                We collaborate closely with our clients to deliver award-winning
                projects — creating beautiful, functional environments that last
                for years.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Sets Us Apart
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Specialized & Experienced Team",
                  desc: "Our team brings specialized qualifications and hands-on experience to meet every project requirement.",
                },
                {
                  title: "Expert Craftsmanship",
                  desc: "We believe in precision, detail, and quality materials on every job.",
                },
                {
                  title: "Industry-Leading Guarantee",
                  desc: "Backed by one of the strongest workmanship guarantees in the industry.",
                },
                {
                  title: "Fast & Professional Response",
                  desc: "Every customer request is handled quickly, professionally, and with care.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW WE WORK ================= */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">
              How We Work
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Since our beginning, our business has been designed around the
                needs of our customers.
              </p>

              <p>
                Our proprietary scheduling system allows us to respond quickly
                and typically have a qualified craftsman at your home within a
                week.
              </p>

              <p>
                Every project begins with a free consultation, followed by a
                transparent estimate and scheduled appointment.
              </p>

              <p>
                No hidden costs. No inflated pricing. All work guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* ================= TEAM IMAGE ================= */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="relative h-[360px] md:h-[420px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/hnhh-team01.jpg"
                alt="Hand And Hand Handyman team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-16 bg-[var(--primary-red)] text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8">
              Call us today to schedule your appointment
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--primary-red)] hover:bg-gray-100 font-semibold"
            >
              <Link href="tel:7032966409">
                <Phone className="mr-2 h-5 w-5" />
                (703) 296-6409
              </Link>
            </Button>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <Footer />
      </main>
    </div>
  )
}

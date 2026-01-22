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
import Image from "next/image" 
import { Button } from "@/components/ui/button"
import { TrustBar } from "@/components/ui/TrustBar"
import { RESIDENTIAL_SERVICES } from "@/data/residential-services"
import { ArrowRight, CheckCircle } from "lucide-react"
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
          <span className="text-red-600 font-semibold">Services</span>
        </div>
      </div>
      <section className="bg-[#B21E23] pt-16 pb-32 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <FadeIn> 
            <div className="text-white">
              <h1 className="text-4xl md:text-4xl text-white/90 font-bold mb-4 leading-tight">
                Our Professional Handyman Services Needs
              </h1>

              <p className="text-white/90 leading-relaxed max-w-xl">
                Whether it’s a small repair job or a home renovation, our local
                professionals combine years of experience with affordable handyman
                services to get the job done right. Homeowners trust us for reliable
                repairs, remodels, and more.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT IMAGE */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <img
                src="/service.png"
                alt="Mr Handyman technician"
                className="rounded-xl shadow-xl object-cover"
              />
            </div>
          </FadeIn>
        </div>    
      </section>
      <section className="container mx-auto px-6 pt-28 pb-20">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#C8102E] mb-3">
          Our Professional Handyman Services
        </h2>

        <p className="text-gray-600 max-w-4xl mb-12">
          At Mr. Handyman, our goal is to bring your ideas to life. We offer
          comprehensive handyman services to meet all your needs. Some of our
          most popular services include the following:
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition relative overflow-hidden">
            <img
              src="/icon/mrh_ceiling_repair_desktop_260x185.webp"
              alt="Repair Services"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h4 className="font-bold mb-2">Repair Services</h4>
              <p className="text-sm text-gray-600 mb-6">
                Homes break. Whether you need your gutters or garage shelving
                fixed, Mr. Handyman has you covered.
              </p>
              <a
                href="/services/residential/repair"
                className="text-sm font-semibold text-[#C8102E] underline-offset-4 hover:underline transition"
              >
                Learn More
              </a>
            </div>
            {/* Red Icon */}
            <div className="absolute bottom-4 right-4 bg-[#C8102E] rounded-full w-12 h-12 flex items-center justify-center">
              <img src="/icon/mrh_drywall_white_icon.svg" alt="" className="w-6 h-6" />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition relative overflow-hidden">
            <img
              src="/icon/mrh_hotel_lobby_commercial_desktop_260x185.webp"
              alt="Commercial Services"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h4 className="font-bold mb-2">Commercial Services</h4>
              <p className="text-sm text-gray-600 mb-6">
                Don’t wait on urgent handyman service for your business. We
                work with organizations of all sizes.
              </p>
              <a
                  href="/services/commercial"
                  className="text-sm font-semibold text-[#C8102E] underline-offset-4 hover:underline transition"
                >
                  Learn More
              </a>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#C8102E] rounded-full w-12 h-12 flex items-center justify-center">
              <img src="/icon/mrh_tools_other_services_white_icon.svg" alt="" className="w-6 h-6" />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition relative overflow-hidden">
            <img
              src="/icon/mrh_door_molding_carpentry_desktop_260x185.webp"
              alt="Carpentry Services"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h4 className="font-bold mb-2">Carpentry Services</h4>
              <p className="text-sm text-gray-600 mb-6">
                Custom project? Our carpenters get to work right away to
                develop the perfect product for your space.
              </p>
              <a
                href="/services/residential/carpentry-installation-and-repair"
                className="text-sm font-semibold text-[#C8102E] underline-offset-4 hover:underline transition"
              >
                Learn More
              </a>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#C8102E] rounded-full w-12 h-12 flex items-center justify-center">
              <img src="/icon/mrh_carpentry_handsaw_white_icon.svg" alt="" className="w-6 h-6" />
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition relative overflow-hidden">
            <img
              src="/icon/mrh_consult5_remodel_desktop_260x185.webp"
              alt="Remodeling Services"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h4 className="font-bold mb-2">Remodeling Services</h4>
              <p className="text-sm text-gray-600 mb-6">
                Looking for help with a new kitchen or bathroom remodel?
                Mr. Handyman’s experts can make it happen.
              </p>
              <a
                href="/services/residential/remodel"
                className="text-sm font-semibold text-[#C8102E] underline-offset-4 hover:underline transition"
              >
                Learn More
              </a>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#C8102E] rounded-full w-12 h-12 flex items-center justify-center">
              <img src="/icon/mrh_shield_white_icon.svg" alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#C8102E]">
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
                className="px-6 py-3 rounded-md font-semibold transition-colors bg-white text-neutral-800 hover:text-[#C8102E] hover:bg-[var(--primary-blue)]/10 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
              >
                Residential
              </Link>
              <Link
                href="/services/commercial"
                role="tab"
                aria-controls="commercial-panel"
                id="commercial-tab"
                className="px-6 py-3 rounded-md font-semibold transition-colors bg-white text-neutral-800 hover:text-[#C8102E] hover:bg-[var(--primary-blue)]/10 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
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
                  <h2 className="text-2xl font-bold text-[#C8102E]">
                    Residential Services
                  </h2>
                  <Link
                    href="/services/residential"
                    className="text-[#C8102E] font-semibold hover:text-[var(--primary-red-dark)]"
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
                            <Icon className="w-10 h-10 text-[#C8102E] mb-4" />
                            <h3
                              id={`service-${service.slug}`}
                              className="text-[var(--primary-black)] font-semibold text-lg mb-2"
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
                  <h2 className="text-2xl font-bold text-[#C8102E]">
                    Commercial Services
                  </h2>
                  <Link
                    href="/services/commercial"
                    className="text-[#C8102E] font-semibold hover:text-[var(--primary-red-dark)]"
                  >
                    View all Commercial →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {commercialServices.slice(0, 6).map((service, i) => {
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
                              className="text-[var(--primary-black)] font-semibold text-lg mb-2"
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
      {/* ================= PROMISE + HERO ================= */}
      <section className="container mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#C8102E] font-semibold mb-2">
            What Is The Neighborly Done Right Promise®?
          </p>
          <p className="text-gray-600 mb-6 max-w-lg">
            Neighborly brands are committed to delivering world-class customer
            service, professionalism, and reliable results.
          </p>
          <Button className="bg-[#C8102E] hover:bg-[#9E0B22]">
          <Link href= "/services/neighborly">
            About Us
          </Link></Button>
        </div>

        <Image
          src="/icon/mrh_crossing_arms_656x371.webp"
          alt="Handyman"
          width={620}
          height={420}
          className="rounded-md object-cover"
        />
      </section>

      {/* ================= REASONS ================= */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-red-700 text-2xl font-bold mb-4">
            Great Reasons to Choose HnHHandyman!
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            HnHHandyman is committed to trusted, reliable service with skilled
            professionals for your home and business.
          </p>

          <Image
            src="/icon/mrh_measuring_sink_desktop_1280x400.webp"
            alt=""
            width={1100}
            height={500}
            className="rounded-md mx-auto mb-14"
          />
        </div>

        <section>
          <div className="flex justify-center mb-12">
            <div className="grid md:grid-cols-2 gap-10 w-[500px] md:w-[900px]">
              {RESIDENTIAL_SERVICES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services/residential/${cat.slug}`}
                  className="group relative bg-white border border-neutral-200 rounded-lg shadow-sm px-6 py-5 flex items-center justify-between hover:shadow-md transition"
                >
                  {/* LEFT RED BAR */}
                  <span className="absolute left-0 top-0 h-full w-[6px] bg-red-700 rounded-l-lg" />

                  {/* LEFT CONTENT */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={cat.icon}
                      alt={cat.label}
                      width={26}
                      height={26}
                    />
                    <span className="font-semibold group-hover:underline">
                      {cat.label}
                    </span>
                  </div>

                  {/* RIGHT ARROW */}
                  <ArrowRight
                    className="w-5 h-5 text-red-700 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
     


     {/* ================= WHY CHOOSE US ================= */}
           <section className="bg-white py-20">
             <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
               <div className="relative h-[440px] rounded-lg overflow-hidden">
                 <Image
                   src="/handyman.png"
                   alt="Why Choose Us"
                   fill
                   className="object-cover"
                 />
               </div>
     
               <div>
                 <h2 className="text-3xl font-bold text-red-700 mb-8">
                   Why Choose Us?
                 </h2>
     
                 {[
                   {
                     title: "We’re Trustworthy",
                     desc: "When you invite someone onto your property, you deserve a safe, worry-free experience with a trusted handyman.",
                   },
                   {
                     title: "Our Workmanship is Guaranteed",
                     desc: "Our professionals average more than 10 years of experience in repair trades.",
                   },
                   {
                     title: "Customer Service That Goes Above and Beyond",
                     desc: "We promise to get the job done right and arrive promptly, in uniform.",
                   },
                 ].map((item) => (
                   
                   <div
                     key={item.title}
                     className="relative bg-white border border-neutral-200 rounded-lg shadow-md p-6 pl-8 mb-6"
                   >
                     <span className="absolute left-0 top-0 h-full w-[6px] bg-red-700 rounded-l-lg" />
                     <h3 className="font-semibold text-lg mb-1 ">{item.title}</h3>
                     <p className="text-sm text-neutral-600">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
           </section>
      

      {/* ================= BLOG & TIPS SECTION ================= */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ================= LEFT COLUMN ================= */}
          <div className="border rounded-md p-6 space-y-10">

            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#C8102E]">
                Where Not To Caulk Around Windows
              </h3>
              <a
                href="#"
                className="text-sm font-semibold text-[#C8102E] hover:underline"
              >
                View All Blog Posts →
              </a>
            </div>

            {/* Main Post */}
            <div>
              <img
                src="/icon/mrh_caulking_desktop_272x180_rs.webp"
                alt=""
                className="rounded-md w-full mb-4"
              />

              <h4 className="font-semibold mb-2">
                Where Not To Caulk Around Windows
              </h4>

              <p className="text-sm text-gray-600 mb-3">
                If you’re planning to replace just a few windows or want to do
                some maintenance on the ones you have, the window experts at
                Mr. Handyman® have some helpful window caulking advice.
              </p>

              <a
                href="#"
                className="text-sm font-semibold text-[#C8102E]"
              >
                Read more →
              </a>
            </div>

            {/* Secondary Post */}
            <div>
              <img
                src="/icon/mrh-blog-deck-material-calculator.webp"
                alt=""
                className="rounded-md w-full mb-4"
              />

              <h4 className="font-semibold mb-2">
                Deck Material Calculator
              </h4>

              <p className="text-sm text-gray-600 mb-3">
                Our deck material calculator will help you build your next
                deck. Take the guesswork out of purchasing the materials to
                build a deck.
              </p>

              <a
                href="#"
                className="text-sm font-semibold text-[#C8102E]"
              >
                Read more →
              </a>
            </div>

            {/* Third Post */}
            <div>
              <img
                src="/icon/mrh-blog-door-installation-cost-hero.webp"
                alt=""
                className="rounded-md w-full mb-4"
              />

              <h4 className="font-semibold mb-2">
                Door Installation Cost Guide
              </h4>

              <p className="text-sm text-gray-600 mb-3">
                Doors are an important part of your home because they are both
                functional and decorative.
              </p>

              <a
                href="#"
                className="text-sm font-semibold text-[#C8102E]"
              >
                Read more →
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="border rounded-md p-6 space-y-10">

            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#C8102E]">
                Tips and Ideas
              </h3>
              <a
                href="#"
                className="text-sm font-semibold text-[#C8102E] hover:underline"
              >
                View All Tips and Ideas →
              </a>
            </div>

            {/* Tip Card */}
            <div>
              <img
                src="/icon/mrh-unfinished-attic-with-brick-and-wood.webp"
                alt=""
                className="rounded-md w-full mb-4"
              />

              <h4 className="font-semibold mb-2">
                What Is Plywood?
              </h4>

              <p className="text-sm text-gray-600 mb-3">
                Plywood is a manufactured wood material that uses resin to hold
                several thin layers of wood together to form one sheet.
              </p>

              <a
                href="#"
                className="text-sm font-semibold text-[#C8102E]"
              >
                Read More →
              </a>
            </div>

            {/* Tip Card */}
            <div>
              <img
                src="/icon/mrh-flooring.webp"
                alt=""
                className="rounded-md w-full mb-4"
              />

              <h4 className="font-semibold mb-2">
                Flooring Tips and Ideas
              </h4>

              <p className="text-sm text-gray-600 mb-3">
                Flooring options are many, and each type—ceramic tile, wood,
                laminate, porcelain, or stone—can experience damage and wear.
              </p>

              <a
                href="#"
                className="text-sm font-semibold text-[#C8102E]"
              >
                Read More →
              </a>
            </div>
          </div>

        </div>
      </section>
</section>
      <TrustBar />
      {/* ================= FAQ ================= */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-center text-2xl text-red-700 font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "Should I hire a handyman service expert?",
            "Do you offer residential interior services?",
            "How do I set up an appointment?",
            "Does Mr. Handyman service my area?",
            "How soon can I expect a handyman?",
            "Are your services insured?",
            "Can I get a cost estimate before booking?",
          ].map((q) => (
            <details key={q} className="border rounded-lg px-6 py-4">
              <summary className="font-semibold cursor-pointer">{q}</summary>
              <p className="mt-3 text-gray-600">
                Yes — our professionals are trained, insured, and reliable.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ================= JOIN OUR TEAM ================= */}
      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <Image
          src="/handyman-closeup.png"
          alt=""
          width={620}
          height={420}
          className="rounded-md"
        />

        <div>
          <h2 className="text-2xl text-red-700 font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            We’re always looking for skilled professionals to join our team.
            
          </p>
          <Button className="bg-[#C8102E] hover:bg-[#9E0B22]">
            View Careers
          </Button>
        </div>
      </section>
      <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
      <Footer />
    </div>
  )
}


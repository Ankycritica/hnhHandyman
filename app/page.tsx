"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Search, Star, CheckCircle2, Facebook, Twitter, Youtube, Linkedin, Calendar, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import Image from "next/image"
import { ChatWidget } from "@/components/chat-widget"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getIcon } from "@/lib/icon-map"
/* ================= ZIP SERVICE AREA ================= */

const SERVICE_ZIPS = new Set([
  "23169","23176","22579","23043","22578","22482","22503","22480",
  "22577","22539","23035","23066","23109","23138","23025","23061",
  "23181","23149","23175","23092","23180","22523","23079","22454",
  "22560","23045","23076","23068","23119","23072","23071","23178",
  "23018","23107","22473","22432"
])

// Fade-in animation component
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

type MobileMenuStep =
  | "main"
  | "services"
  | "residential"
  | "commercial"
  | "repair"


export default function MrHandymanPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isBookOpen, setIsBookOpen] = useState(false)
  const [mobileStep, setMobileStep] = useState<MobileMenuStep>("main")
  // const [serviceType, setServiceType] = useState<
  //   "Residential" | "Commercial" | ""
  // >("")

  
  /* ---------- ZIP FLOW ---------- */
  const [zip, setZip] = useState("")
  const [step, setStep] = useState<"zip" | "form" | "success" | "not-available">("zip")

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{
    zip?: string
    email?: string
    phone?: string
    address?: string
  }>({})
  
const isValidZip = (zip: string) => /^\d{5}$/.test(zip)
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const isValidPhone = (phone: string) =>
phone.replace(/\D/g, "").length === 10

function checkZip() {
  if (!isValidZip(zip)) {
    setErrors({ zip: "Enter a valid 5-digit ZIP code" })
    return
  }

  if (SERVICE_ZIPS.has(zip.trim())) {
    setErrors({})
    setStep("form")
  } else {
    setErrors({})
    setStep("not-available")
    setTimeout(() => resetZipFlow(), 1000)
  }
}


  function resetZipFlow() {
    setZip("")
    setEmail("")
    setPhone("")
    setAddress("")
    setStep("zip")
  }

  async function submitBooking() {
  const newErrors: typeof errors = {}

  if (!isValidEmail(email)) {
    newErrors.email = "Enter a valid email address"
  }

  if (!isValidPhone(phone)) {
    newErrors.phone = "Enter a valid 10-digit phone number"
  }

  if (!address.trim()) {
    newErrors.address = "Service address is required"
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    return
  }

  setErrors({})
  setLoading(true)

  try {
    await fetch("/api/zip-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ zip, email, phone, address }),
    })

    setStep("success")
  } catch (error) {
    alert("Something went wrong. Please try again.")
  } finally {
    setLoading(false)
  }
}

  useEffect(() => {
  if (step === "success") {
    const timer = setTimeout(() => {
      resetZipFlow()
    }, 1500) // auto reset after 4.5s

    return () => clearTimeout(timer)
  }
}, [step])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const tipsRef = useRef<HTMLDivElement>(null)
  const scrollTips = (direction: number) => {
    const el = tipsRef.current
    if (!el) return
    const amount = el.clientWidth * 0.95
    el.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }
  const SERVICE_CARDS = [
  {
    title: "Repair Services",
    description:
      "Homes break. Whether you need your gutters or garage shelving fixed, Mr. Handyman has you covered.",
    image: "/img/rapir.jpg",
    icon: "Wrench",
    href: "/services/residential/repair",
  },
  {
    title: "Commercial Services",
    description:
      "Don’t wait on urgent handyman service for your business. We work with organizations of all sizes.",
    image: "/img/commercial.jpg",
    icon: "Building",
    href: "/services/commercial",
  },
  {
    title: "Carpentry Services",
    description:
      "Custom project? Our carpenters get to work right away to develop the perfect product for your spot.",
    image: "/img/carpentry.jpg",
    icon: "Hammer",
    href: "/services/residential/carpentry-installation-and-repair",
  },
  {
    title: "Remodeling Services",
    description:
      "Looking for help with a new kitchen or bathroom remodel? Mr. Handyman’s experts can make it happen.",
    image: "/img/remodel.jpg",
    icon: "Layout",
    href: "/services/residential/remodel",
  },
]

  const tipsData = [
    { title: "Home Maintenance Checklist", desc: "Essential tasks to keep your home in top condition", image: "home-maintenance.png", category: "Maintenance", readTime: "4 min read" },
    { title: "DIY vs Professional", desc: "When to call a handyman and when to do it yourself", image: "diy.png", category: "DIY", readTime: "5 min read" },
    { title: "Seasonal Home Care", desc: "Prepare your home for every season of the year", image: "season-home-care.png", category: "Seasonal", readTime: "3 min read" },
    { title: "Kitchen Upgrades", desc: "Smart kitchen improvements that add value without breaking the bank", image: "kitchen.png", category: "Upgrades", readTime: "6 min read" },
    { title: "Plumbing Basics", desc: "Simple plumbing fixes you can do before calling the pros", image: "plumbing.png", category: "Plumbing", readTime: "4 min read" },
  ]
  // autoplay loop for tips slider
  useEffect(() => {
    const el = tipsRef.current
    if (!el) return
    const interval = setInterval(() => {
      const firstCard = el.querySelector('.tip-card') as HTMLElement | null
      const cardWidth = firstCard?.getBoundingClientRect().width ?? el.clientWidth * 0.25
      const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0
      const step = cardWidth + gap
      const half = el.scrollWidth / 2
      el.scrollBy({ left: step, behavior: 'smooth' })
      // wrap seamlessly when passing midpoint (since we duplicate items)
      if (el.scrollLeft + step >= half) {
        setTimeout(() => {
          el.scrollLeft = el.scrollLeft - half
        }, 450)
      }
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])


 useEffect(() => {
    if (!isNavOpen) setMobileStep("main")
  }, [isNavOpen])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
         <Header />
        <div>
        {isNavOpen && (
          <div className="fixed inset-0 z-[999] bg-white overflow-y-auto lg:hidden">

            {/* TOP BAR */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="font-semibold text-lg">MENU</span>
              <button onClick={() => setIsNavOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* CTA BUTTONS */}
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
                <MenuRow
                  label="Services"
                  onClick={() => setMobileStep("services")}
                />
                <MenuRow 
                  href="/services/locations" label="Locations" onClick={() => setIsNavOpen(false)}
                 />
              </div>
            )}

              {mobileStep === "services" && (
                <>
                  <BackRow onClick={() => setMobileStep("main")} />
                  <div className="space-y-4">
                    <MenuRow
                      label="Residential"
                      onClick={() => setMobileStep("residential")}
                    />
                    <MenuRow
                      label="Commercial"
                      onClick={() => setMobileStep("commercial")}
                    />
                  </div>
                </>
              )}

              {/* RESIDENTIAL GRID */}
              {mobileStep === "residential" && (
                <>
                  <BackRow onClick={() => setMobileStep("services")} />
                  <ResidentialGrid
                    onRepair={() => setMobileStep("repair")}
                  />
                </>
              )}

              {/* REPAIR ACCORDION */}
              {mobileStep === "repair" && (
                <>
                  <BackRow onClick={() => setMobileStep("residential")} />
                  <RepairAccordion />
                </>
              )}

              {/* COMMERCIAL LIST */}
              {mobileStep === "commercial" && (
                <>
                  <BackRow onClick={() => setMobileStep("services")} />
                  <CommercialList />
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={() => setIsChatOpen(true)}
            className="bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white shadow-2xl shadow-[rgba(217,59,47,0.45)] h-14 px-8 text-lg font-bold rounded-full"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Chat With Us
          </Button>
        </motion.div>
      </motion.div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-[80vh] min-h-[520px] md:min-h-[720px] overflow-hidden">
        <motion.div
          style={{ 
            y: heroY, 
            scale: heroScale
          }}
          className="absolute inset-0"
        >
          <Image
            src="/red-handyman-van-in-driveway-professional-service.jpg"
            alt="Professional handyman service van"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative container mx-auto px-6 h-full flex flex-col justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--primary-blue)] mb-4 sm:mb-6 max-w-2xl leading-tight"
          >
            Local Professional Services You Can Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-neutral-900 mb-6 sm:mb-8 max-w-xl leading-relaxed"
          >
            Quality home repairs and improvements from experienced professionals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setIsChatOpen(true)}
                size="lg"
                className="w-full sm:w-auto shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                SCHEDULE AN APPOINTMENT
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[var(--primary-blue)] text-[var(--primary-blue)] hover:text-white hover:border-[var(--primary-blue)]"
              >
              <Link href="/services">
                Learn More
              </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ZIP SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

              <h2 className="text-3xl font-bold text-[var(--primary-red)] text-center mb-6">
                Book Your Handyman Today
              </h2>

              <p className="text-gray-600 text-center mb-8">
                Enter your ZIP code to find qualified professionals in your area
              </p>

              {/* STEP 1 : ZIP */}
              {step === "zip" && (
                <div className="flex gap-4">
                  <Input
                    placeholder="Enter ZIP Code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                  {errors.zip && <p className="text-red-700 text-sm">{errors.zip}</p>}

                  <Button onClick={checkZip}>
                    <Search className="mr-2 h-5 w-5" />
                    SEARCH
                  </Button>
                </div>
              )}

              {/* STEP 2 : FORM */}
              {step === "form" && (
                <div className="space-y-4">
                  <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

                  <Input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

                  <Input
                    placeholder="Service Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {errors.address && (
                    <p className="text-red-600 text-sm">{errors.address}</p>
                  )}

                  <Button
                    onClick={submitBooking}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? "Submitting..." : "Book Service"}
                  </Button>
                </div>
              )}

              {/* STEP 3 : SUCCESS */}
              {step === "success" && (
                <div className="flex flex-col items-center text-center space-y-4 py-6">

                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-red-700 text-2xl font-bold">✓</span>
                  </div>

                  <h3 className="text-xl font-bold text-red-700">
                    Booking Confirmed
                  </h3>

                  <p className="text-gray-600 max-w-md">
                    Thank you! Our service partner will contact you shortly to
                    confirm your appointment details.
                  </p>

                  <p className="text-sm text-gray-400">
                    You can book another service in a few seconds…
                  </p>

                </div>
              )}

              {/* STEP 4 : NOT AVAILABLE */}
              {step === "not-available" && (
                <div className="text-center space-y-4">
                  <p className="text-red-600 font-semibold">
                    ❌ Sorry, we don’t serve this ZIP code yet.
                  </p>

                  <Button variant="outline" onClick={resetZipFlow}>
                    Check another ZIP
                  </Button>

                  <p className="text-sm text-gray-500">
                    We’re expanding soon — try a nearby ZIP
                  </p>
                </div>
              )}

            </div>
          </FadeIn>
        </div>
      </section>


      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Star,
                title: "4.8 Average Rating",
                desc: "Based on thousands of customer reviews across all locations",
                color: "bg-orange-500",
                delay: 0,
              },
              {
                icon: CheckCircle2,
                title: "Satisfaction Guaranteed",
                desc: "We stand behind our work with a comprehensive guarantee",
                color: "bg-pink-500",
                delay: 0.2,
              },
              {
                icon: Phone,
                title: "24/7 Support",
                desc: "Our customer service team is always ready to help",
                color: "bg-blue-500",
                delay: 0.4,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={item.delay}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-full ${item.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <item.icon className="h-10 w-10 text-white fill-white" />
                  </motion.div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Handyman Services */}
      <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[var(--primary-red)] mb-4">
            Our Professional Handyman Services
          </h2>
          <p className="text-neutral-700 max-w-3xl">
            At Hand and Hand Handyman, our goal is to bring your ideas to life. We offer
            comprehensive handyman services to meet all your needs. Some of our
            most popular services include the following:
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_CARDS.map((service) => {
            const Icon = getIcon(service.icon)

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <article className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden h-full">

                  {/* Image */}
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 pb-14">
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {service.description}
                    </p>

                    <span className="text-sm font-semibold text-[var(--primary-red)]">
                      Learn More
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-[var(--primary-red)] flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>

      {/* Neighborhood Section */}
     <section className="relative h-[360px] md:h-[480px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hnhhandyman.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content wrapper — THIS IS THE KEY */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          <FadeIn>
            <div className="max-w-3xl text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                What's In The Neighborhood You're Right
              </h2>

              <p className="text-gray-200 mb-6 text-base md:text-lg">
                We're proud to serve your local community with professional handyman
                services. Our experienced technicians are familiar with the unique
                needs of homes in your area.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
              >
                <Button className="bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white px-8 py-3 shadow-lg">
                  LEARN MORE
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* Great Reasons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Great Reasons to Choose HnHHandyman</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <FadeIn>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="/img/0 (6).jpeg"
                  alt="Professional handymen at work"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>
            <div className="space-y-6">
              {[
                { title: "Licensed & Insured", desc: "All our technicians are fully licensed and insured for your peace of mind", delay: 0.1 },
                { title: "Experienced Professionals", desc: "Years of experience handling all types of home repairs and improvements", delay: 0.2 },
                { title: "Quality Workmanship", desc: "We take pride in delivering exceptional results on every job", delay: 0.3 },
              ].map((item, i) => (
                <FadeIn key={i} delay={item.delay}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-full bg-[var(--primary-green)] flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Background-checked technicians",
                  "Upfront pricing",
                  "Satisfaction guarantee",
                  "Wide range of services",
                  "Flexible scheduling",
                  "Professional equipment",
                ].map((reason, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--primary-green)] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium">{reason}</span>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why Choose Us?</h2>
            <p className="text-gray-600">Premium service, professional team, and results you can trust</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {[
              {
                icon: CheckCircle2,
                title: "Trusted Professionals",
                desc: "Carefully screened, background-checked, and trained technicians for peace of mind",
                delay: 0,
              },
              {
                icon: Phone,
                title: "Comprehensive Services",
                desc: "From small repairs to major projects, one reliable team handles it all",
                delay: 0.1,
              },
              {
                icon: Star,
                title: "Customer Satisfaction",
                desc: "Top-tier workmanship with a satisfaction guarantee on every job",
                delay: 0.2,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={item.delay}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-2xl overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)]/0 via-[var(--primary-blue)]/0 to-[var(--primary-blue)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-blue)] text-white flex items-center justify-center shadow-lg mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tips and Ideas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Tips and Ideas</h2>
            <a href="#" className="text-[var(--primary-red)] font-medium hover:underline">
              View all articles →
            </a>
          </div>
          <div className="relative w-screen left-1/2 -translate-x-1/2">
            <button
              aria-label="Previous"
              onClick={() => scrollTips(-1)}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div
              ref={tipsRef}
              className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2"
            >
              {tipsData.concat(tipsData).map((tip, i) => (
                <Card key={i} className="tip-card group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow h-full bg-white snap-start flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_24%]">
                  <div className="relative h-72 md:h-80 w-full overflow-hidden">
                    <Image
                      src={`/${tip.image}`}
                      alt={tip.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                      {tip.category}
                    </span>
                  </div>
                  <CardContent className="p-5">
                    <div className="text-xs text-gray-500 mb-2">
                      <span className="uppercase tracking-wide">{tip.category}</span>
                      <span> • {tip.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{tip.title}</h3>
                    <p className="text-gray-600 mb-3">{tip.desc}</p>
                    <a href="#" className="text-[var(--primary-red)] font-medium hover:underline">Read more →</a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => scrollTips(1)}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer a wide range of handyman services including home repairs, painting, carpentry, electrical work,
                plumbing, drywall repair, and much more. Our experienced technicians can handle virtually any home
                improvement project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I schedule an appointment?</AccordionTrigger>
              <AccordionContent>
                You can schedule an appointment by calling us directly, using our online booking form, or entering your
                ZIP code in the search box above. We'll connect you with a local handyman who can assess your needs and
                provide a quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are your technicians licensed and insured?</AccordionTrigger>
              <AccordionContent>
                Yes, all our technicians are fully licensed, insured, and background-checked. We take your safety and
                peace of mind seriously, which is why we only work with qualified professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer a warranty on your work?</AccordionTrigger>
              <AccordionContent>
                We stand behind our work with a comprehensive satisfaction guarantee. If you're not completely satisfied
                with our service, we'll make it right.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What areas do you serve?</AccordionTrigger>
              <AccordionContent>
                We have locations across the country serving hundreds of communities. Enter your ZIP code above to find
                an HnHHandyman location near you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Get Our Team Section */}
      <section className="py-16 bg-[var(--primary-red-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free estimate</p>
          <Link href="/request-service"><Button 
                className="bg-white text-[var(--primary-red)] hover:bg-gray-100">REQUEST A SERVICE</Button> </Link>
        </div>
      </section>
      {isBookOpen && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center">

    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/60"
      onClick={() => setIsBookOpen(false)}
    />

    {/* Modal */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 p-6 z-10"
    >
      {/* Close */}
      <button
        onClick={() => setIsBookOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <FadeIn delay={0.2}>
        <div className="bg-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[var(--primary-blue)]">
            Let Us Call You
          </h2>

          {/* CONTACT FORM – NO SERVICE SELECTION */}
          <ContactForm
            serviceType="Residential"
            onSubmit={() => setIsBookOpen(false)}
          />
        </div>
      </FadeIn>
    </motion.div>
  </div>
)}
  <Footer />
    </div>
  )
}

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
        className="w-full flex justify-between items-center text-lg font-medium py-3 border-b"
        onClick={onClick}
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

function ResidentialGrid({
  onRepair,
}: {
  onRepair: () => void
}) {
  const items = [
    { label: "Repair", action: onRepair },
    { label: "Drywall and Ceiling" },
    { label: "Remodel" },
    { label: "Window and Door Services" },
    { label: "Safety and Mobility Services" },
    { label: "Assembly Service" },
    { label: "Floor Installation and Repair" },
    { label: "Painting" },
    { label: "Carpentry Installation and Repair" },
    { label: "Plumbing" },
    { label: "Lighting and Electrical" },
    { label: "Other Services" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={item.action}
          className="border rounded-xl p-4 text-center font-medium hover:bg-gray-50"
        >
          {item.label}
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
        <details
          key={s}
          className="border rounded-lg p-4"
        >
          <summary className="font-medium flex justify-between items-center cursor-pointer">
            {s}
            <span>+</span>
          </summary>
          <div className="mt-3 text-sm text-gray-600">
            {/* Replace with real links */}
            Service links go here
          </div>
        </details>
      ))}
    </div>
  )
}

function CommercialList() {
  const items = [
    "Healthcare Facilities",
    "Hotels and Hospitality",
    "Retail Stores",
    "Restaurants",
    "Corporate Offices",
    "Manufacturing",
    "Municipal Buildings",
    "Property Management",
  ]

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="py-3 border-b font-medium"
        >
          {item}
        </div>
      ))}
    </div>
  )
}
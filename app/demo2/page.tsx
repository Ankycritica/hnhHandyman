"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Search, Star, CheckCircle2, Facebook, Twitter, Youtube, Linkedin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { ChatWidget } from "@/components/chat-widget"

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

export default function MrHandymanPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
  const tipsData = [
    { title: "Home Maintenance Checklist", desc: "Essential tasks to keep your home in top condition", image: "home-maintenance.png", category: "Maintenance", readTime: "4 min read" },
    { title: "DIY vs Professional", desc: "When to call a handyman and when to do it yourself", image: "diy.png", category: "DIY", readTime: "5 min read" },
    { title: "Seasonal Home Care", desc: "Prepare your home for every season of the year", image: "season home care.png", category: "Seasonal", readTime: "3 min read" },
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

  // Scroll listener for header color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-transparent border-b border-white/20'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Image
              src="/mr-handyman-logo-red-and-blue.JPG"
              alt="HnHHandyman"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className={`text-sm font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}>
                Services
              </a>
              <a href="#" className={`text-sm font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}>
                Locations
              </a>
              <a href="#" className={`text-sm font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}>
                About Us
              </a>
              <a href="#" className={`text-sm font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}>
                Franchise
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className={`hidden md:flex bg-transparent transition-colors ${
                isScrolled
                  ? 'border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600'
                  : 'border-white text-white hover:border-red-400 hover:text-red-400'
              }`}
            >
              <Phone className="mr-2 h-4 w-4" />
              (800) 123-4567
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30 font-semibold">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </div>
        </div>
      </motion.header>

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
            className="bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-600/50 h-14 px-8 text-lg font-bold rounded-full"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Handyman
          </Button>
        </motion.div>
      </motion.div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <motion.div
          style={{ 
            y: heroY, 
            scale: heroScale
          }}
          className="absolute inset-0"
        >
          <video
            className="w-full h-full object-cover"
            src="/hnhhandyman.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/red-handyman-van-in-driveway-professional-service.jpg"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-2xl leading-tight"
          >
            Local Professional Services You Can Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed"
          >
            Quality home repairs and improvements from experienced professionals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg h-12 px-8 text-base font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                SCHEDULE AN APPOINTMENT
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 h-12 px-8 text-base font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
              >
                <h2 className="text-4xl font-bold mb-3 text-center">Book Your Handyman Today</h2>
                <p className="text-gray-600 text-center mb-8">
                  Enter your ZIP code to find qualified professionals in your area
                </p>
                <div className="flex gap-4 max-w-2xl mx-auto">
                  <Input
                    placeholder="Enter ZIP Code"
                    className="flex-1 h-14 text-lg border-gray-300 focus:border-red-600 focus:ring-red-600 transition-all duration-300"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-base font-semibold shadow-lg shadow-red-600/30">
                      <Search className="mr-2 h-5 w-5" />
                      SEARCH
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Our Professional Handyman Services</h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Home Repairs", image: "home-repairs.jpg", icon: "🔧", delay: 0 },
              { title: "Painting Services", image: "painting-services.jpg", icon: "🎨", delay: 0.1 },
              { title: "Carpentry Work", image: "carpentry-work.jpg", icon: "🪚", delay: 0.2 },
              { title: "Electrical Services", image: "electrical-services.jpg", icon: "⚡", delay: 0.3 },
            ].map((service, i) => (
              <FadeIn key={i} delay={service.delay}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-2 border-transparent hover:border-red-600/20 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-48 overflow-hidden"
                    >
                      <Image
                        src={`/${service.image}`}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">Professional and reliable service for all your home needs</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">What's In The Neighborhood You're Right</h2>
              <p className="text-gray-600 mb-6">
                We're proud to serve your local community with professional handyman services. Our experienced technicians
                are familiar with the unique needs of homes in your area.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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
                  src="/two-handymen-in-red-shirts-working-in-modern-kitch.jpg"
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
                      className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg"
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
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
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

      {/* Find a Handyman Form */}
      <section className="py-16 bg-red-600 text-white relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-red-700/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/30 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Find a Handyman Near Me</h2>
              <p className="mb-8">Enter your ZIP code to find qualified handyman services in your area</p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-6 shadow-2xl"
              >
                <div className="flex gap-4">
                  <Input placeholder="Enter ZIP Code" className="flex-1 text-gray-900" />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">FIND NOW</Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg mb-4">
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
            <a href="#" className="text-red-600 font-medium hover:underline">
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
            <div ref={tipsRef} className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2">
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
                    <a href="#" className="text-red-600 font-medium hover:underline">Read more →</a>
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
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free estimate</p>
          <Button className="bg-white text-red-600 hover:bg-gray-100">REQUEST A QUOTE</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/mr-handyman-logo-white.jpg"
                alt="HnHHandyman"
                width={150}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm mb-4">
                We're proud to be part of the Neighborly family of home service brands
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Home Repairs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Carpentry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Electrical
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Plumbing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Franchise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 HnHHandyman. All rights reserved. Each location is independently owned and operated.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

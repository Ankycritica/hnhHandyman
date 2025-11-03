"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Search, Star, CheckCircle2, Facebook, Twitter, Youtube, Linkedin, Calendar } from "lucide-react"
import Image from "next/image"
import { ChatWidget } from "@/components/chat-widget"

export default function MrHandymanPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Image
              src="/mr-handyman-logo-red-and-blue.JPG"
              alt="Mr. Handyman"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors">
                Services
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors">
                Locations
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors">
                Franchise
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden md:flex border-gray-300 hover:border-red-600 hover:text-red-600 bg-transparent"
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
      </header>

      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={() => setIsChatOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-600/50 h-14 px-8 text-lg font-bold rounded-full animate-pulse hover:animate-none"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book a Handyman
        </Button>
      </div>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/red-handyman-van-in-driveway-professional-service.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-white mb-6 max-w-2xl leading-tight">
            Local Professional Services You Can Trust
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            Quality home repairs and improvements from experienced professionals
          </p>
          <div className="flex gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg h-12 px-8 text-base font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              SCHEDULE AN APPOINTMENT
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 h-12 px-8 text-base font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-4xl font-bold mb-3 text-center">Book Your Handyman Today</h2>
              <p className="text-gray-600 text-center mb-8">
                Enter your ZIP code to find qualified professionals in your area
              </p>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <Input
                  placeholder="Enter ZIP Code"
                  className="flex-1 h-14 text-lg border-gray-300 focus:border-red-600 focus:ring-red-600"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-base font-semibold shadow-lg shadow-red-600/30">
                  <Search className="mr-2 h-5 w-5" />
                  SEARCH
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-orange-500 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-10 w-10 text-white fill-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">4.8 Average Rating</h3>
              <p className="text-gray-600">Based on thousands of customer reviews across all locations</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-pink-500 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with a comprehensive guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer service team is always ready to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Handyman Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Professional Handyman Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Home Repairs", image: "home-repairs.jpg", icon: "🔧" },
              { title: "Painting Services", image: "painting-services.jpg", icon: "🎨" },
              { title: "Carpentry Work", image: "carpentry-work.jpg", icon: "🪚" },
              { title: "Electrical Services", image: "electrical-services.jpg", icon: "⚡" },
            ].map((service, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">Professional and reliable service for all your home needs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">What's In The Neighborhood You're Right</h2>
            <p className="text-gray-600 mb-6">
              We're proud to serve your local community with professional handyman services. Our experienced technicians
              are familiar with the unique needs of homes in your area.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">LEARN MORE</Button>
          </div>
        </div>
      </section>

      {/* Great Reasons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Great Reasons to Choose Mr. Handyman</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px]">
              <Image
                src="/two-handymen-in-red-shirts-working-in-modern-kitch.jpg"
                alt="Professional handymen at work"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">
                    All our technicians are fully licensed and insured for your peace of mind
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Experienced Professionals</h3>
                  <p className="text-gray-600">
                    Years of experience handling all types of home repairs and improvements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Quality Workmanship</h3>
                  <p className="text-gray-600">We take pride in delivering exceptional results on every job</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Background-checked technicians",
              "Upfront pricing",
              "Satisfaction guarantee",
              "Wide range of services",
              "Flexible scheduling",
              "Professional equipment",
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find a Handyman Form */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Find a Handyman Near Me</h2>
            <p className="mb-8">Enter your ZIP code to find qualified handyman services in your area</p>
            <div className="bg-white rounded-lg p-6">
              <div className="flex gap-4">
                <Input placeholder="Enter ZIP Code" className="flex-1 text-gray-900" />
                <Button className="bg-red-600 hover:bg-red-700 text-white">FIND NOW</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Trusted Professionals</h3>
                <p className="text-gray-600">
                  Our handymen are carefully screened, background-checked, and trained to deliver exceptional service
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Comprehensive Services</h3>
                <p className="text-gray-600">
                  From minor repairs to major renovations, we handle all your home improvement needs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  We're not satisfied until you are. Our guarantee ensures you get the quality you deserve
                </p>
              </div>
            </div>
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Home Maintenance Checklist", desc: "Essential tasks to keep your home in top condition" },
              { title: "DIY vs Professional", desc: "When to call a handyman and when to do it yourself" },
              { title: "Seasonal Home Care", desc: "Prepare your home for every season of the year" },
            ].map((tip, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.desc}</p>
                  <a href="#" className="text-red-600 font-medium hover:underline">
                    Read more →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl">
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
                a Mr. Handyman location near you.
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
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/mr-handyman-logo-white.jpg"
                alt="Mr. Handyman"
                width={150}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm mb-4">
                We're proud to be part of the Neighborly family of home service brands
              </p>
              <div className="flex gap-3">
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
            <div>
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
            <div>
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
            <div>
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
            <p>© 2025 Mr. Handyman. All rights reserved. Each location is independently owned and operated.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

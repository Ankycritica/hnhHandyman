"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f5f6f8] text-[#1f2a44] py-14">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-10">

          {/* ================= COLUMN 1 ================= */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="HnHHandyman"
              width={220}
              height={80}
              className="object-contain"
            />

            <div className="flex items-center gap-2">
              <Phone
                className="h-4 w-4 text-[var(--primary-red)] cursor-pointer"
                onClick={() => (window.location.href = "tel:+17032966409")}
              />
              <a
                href="tel:+17032966409"
                className="font-semibold text-[var(--primary-red)] hover:opacity-80 transition"
              >
                (703) 296-6409
              </a>
            </div>

            <p className="text-sm text-[#1f2a44]/80 leading-relaxed max-w-xs">
              Proudly serving homeowners with reliable, on-time service and
              workmanship backed by our satisfaction promise.
            </p>
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div>
            <h3 className="text-xs tracking-widest font-semibold uppercase pb-2 border-b border-[#1f2a44]/20 inline-block">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-[15px]">
              <li>
                <Link
                  href="/services/residential"
                  className="hover:text-[var(--primary-blue)] transition-colors duration-200"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="hover:text-[var(--primary-blue)] transition-colors duration-200"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div>
            <h3 className="text-xs tracking-widest font-semibold uppercase pb-2 border-b border-[#1f2a44]/20 inline-block">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-[15px]">
              <li>
                <Link
                  href="/how-we-work"
                  className="hover:text-[var(--primary-blue)] transition-colors duration-200"
                >
                  How We Work
                </Link>
              </li>

              <li>
                <Link
                  href="/request-service"
                  className="hover:text-[var(--primary-blue)] transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services/about-us"
                  className="hover:text-[var(--primary-blue)] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services/locations"
                  className="hover:text-[var(--primary-blue)] transition-colors duration-200"
                >Our Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 4 ================= */}
          <div>
            <h3 className="text-xs tracking-widest font-semibold uppercase pb-2 border-b border-[#1f2a44]/20 inline-block">
              Contact
            </h3>

            <ul className="mt-6 space-y-4 text-[15px]">
              <li className="font-semibold text-[var(--primary-blue)]">
                (703) 296-6409
              </li>
              <li>info@HnHHandyman.com</li>
              <li>4104 Hoffman Drive, Woodbridge, VA 22193</li>
              <li>Mon - Sat: 8:00am - 6:00pm</li>
            </ul>

            {/* CALL IMAGE */}
            <div className="hidden md:flex flex-col gap-2 pt-6">
              <p className="font-semibold tracking-wide">
                CALL US NOW!
              </p>

              <a
                href="tel:+17032966409"
                className="hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/call-us-now.png"
                  alt="Call Us Now"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-[#1f2a44]/20 pt-6 text-center text-sm text-[#1f2a44]/70">
          <p>
            © {new Date().getFullYear()} HnHHandyman. All rights reserved.
            Each location is independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  )
}

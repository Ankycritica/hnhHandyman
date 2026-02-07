"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone} from "lucide-react"
import { Button } from "@/components/ui/button"
export function Footer() {
  return (
    <footer className="bg-gray-100 text-neutral-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-8">
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
                className="font-bold text-[var(--primary-red)]"
              >
                (703) 296-6409
              </a>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed max-w-xs">
              Proudly serving homeowners with reliable, on-time service and
              workmanship backed by our satisfaction promise.
            </p>
            {/* <div className="flex items-center gap-3">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-neutral-300 flex items-center justify-center text-[var(--primary-blue)] hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div> */}
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                <Link
                  href="/services/residential"
                  className="hover:text-[var(--primary-blue)]"
                >
                  Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="hover:text-[var(--primary-blue)]"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-neutral-700">
            
            <li>
              <Link
                href="/how-we-work"
                className="hover:text-[var(--primary-blue)]"
              >
                How We Work
              </Link>
            </li>
            <li><Link href="/request-service">Contact Us</Link></li>
            <li>
              <Link
                href="/services/about-us"
                className="hover:text-[var(--primary-blue)]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/services/locations"
                className="hover:text-[var(--primary-blue)]"
              >
                Our Locations
              </Link>
            </li>   
          </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="font-semibold text-[var(--primary-blue)]">
                (703) 296-6409
              </li>
              <li>support@hnhhandyman.com</li>
              <li>123 Service Ave, Suite 200</li>
              <li>Mon - Sat: 8:00am - 6:00pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 pt-6 text-center text-sm text-neutral-600">
          <p>
            © {new Date().getFullYear()} HnHHandyman. All rights reserved. Each location is
            independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  )
}


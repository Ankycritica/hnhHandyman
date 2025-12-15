import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 text-neutral-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="HnHHandyman"
              width={156}
              height={52}
              className="h-12 w-auto"
            />
            <p className="text-sm text-neutral-700">
              Proudly serving homeowners with reliable, on-time service and
              workmanship backed by our satisfaction promise.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-neutral-300 flex items-center justify-center text-[var(--primary-blue)] hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
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
              <li>
                <a href="#" className="hover:text-[var(--primary-blue)]">
                  Home Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-blue)]">
                  Painting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-blue)]">
                  Carpentry
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              {["About Us", "Locations", "Careers", "Franchise", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[var(--primary-blue)]">
                      {link}
                    </a>
                  </li>
                )
              )}
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
            © 2025 HnHHandyman. All rights reserved. Each location is
            independently owned and operated.
          </p>
        </div>
      </div>
    </footer>
  )
}


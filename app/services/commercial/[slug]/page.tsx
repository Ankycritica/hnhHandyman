import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { getIcon } from "@/lib/icon-map"
import commercialServices from "@/data/services.commercial.json"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrustBar } from "@/components/ui/TrustBar"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return commercialServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = commercialServices.find((s) => s.slug === slug)

  if (!service) {
    return { title: "Service Not Found | HnHHandyman" }
  }

  return {
    title: `${service.title} | Commercial Services | HnHHandyman`,
    description: service.shortDescription,
  }
}

export default async function CommercialServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = commercialServices.find((s) => s.slug === slug)

  if (!service) notFound()

  const Icon = getIcon(service.iconName)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 border-b"/>
      <div className="pt-24 border-b bg-white">
      <div className="container mx-auto px-4 py-3">

            {/* MOBILE: horizontal scroll */}
            <nav
              className="
                flex items-center gap-2 text-xs
                overflow-x-auto whitespace-nowrap
                scrollbar-hide
                md:hidden
              "
            >
              <Link href="/" className="text-neutral-600 hover:text-red-600 flex items-center gap-1">
                <span className="w-8 h-8 bg-neutral-100 rounded-md flex items-center justify-center text-black shadow-sm">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11.5L12 4l9 7.5" />
                  <path d="M9 21V12h6v9" />
                  </svg>
                  <span className="sr-only">Home</span>
                </span>
              </Link>

              <span>/</span>
              <Link href="/services" className="hover:text-red-600">Services</Link>
              <span>/</span>
              <Link href="/services/commercial" className="hover:text-red-600">Commercial</Link>
              <span>/</span>
              <span className="text-red-600 font-semibold">{service.title}</span>

              
            </nav>

            {/* DESKTOP: normal breadcrumb */}
            <nav className="hidden md:flex items-center gap-2 text-sm text-neutral-600">
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
              <Link href="/services" className="hover:text-red-600">Services</Link>
              <span>/</span>
              <Link href="/services/commercial" className="hover:text-red-600">Commercial</Link>
              <span>/</span>
              <span className="text-red-600 font-semibold">{service.title}</span>
            </nav>

          </div>
          </div>

      {/* ================= HERO ================= */}
      <section className="bg-[#C8102E] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-white">
            <Icon className="w-14 h-14 mb-6 text-white" />
            <h1 className="text-5xl text-white font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg mb-6 text-white/90 max-w-xl">
              {service.shortDescription}
            </p>
            <p className="text-white/80 mb-8 max-w-xl">
              Our experienced team provides professional{" "}
              {service.title.toLowerCase()} services for commercial properties.
              We minimize business disruption while delivering quality results.
            </p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 text-lg font-semibold">
              Request a Call
            </Button>
          </div>

          {/* RIGHT IMAGE (REPLACED FORM) */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

     

      {/* ================= OUR PLEDGE ================= */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#C8102E] mb-4">
              Our Pledge to You: On Time & Done Right!
            </h2>

            <div className="h-1 w-24 bg-[#C8102E] mb-6"></div>

            <p className="text-gray-700 mb-6">
              We repair and maintain businesses from small retail stores to
              large commercial properties with guaranteed workmanship.
            </p>

            <Button className="bg-[#C8102E] hover:bg-[#9E0B22]">
              Learn More
            </Button>
          </div>

          <Image
            src={service.pledgeImage}
            alt={`${service.title} interior`}
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </section>  
       <TrustBar />
     {/* ================= WHAT WE DO ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">

          <h2 className="text-3xl font-bold text-[#C8102E] mb-3 text-center">
            What Can Our Professional Handyman Do for You?
          </h2>

          <p className="text-center text-gray-600 mb-10 text-sm">
            At Hand and Hand Handyman, no project is too small. 
            Our {service.title} services include:
          </p>

          <ul className="space-y-3 text-gray-700 text-sm max-w-xl mx-auto">
            {service.servicesList.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 bg-[#C8102E] rounded-full flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

        </div>
      </section> 

            {/* ================= CLIENTS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">

          <h3 className="text-2xl font-bold text-[#C8102E] mb-6">
            Examples of Our Commercial Clients
          </h3>

          <ul className="space-y-3 text-sm text-gray-700">
            {service.clients.map((client: string, index: number) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-4 h-4 bg-[#C8102E] rounded-full flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
                {client}
              </li>
            ))}
          </ul>

        </div>
      </section>

            {/* ================= HELPFUL RESOURCES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">

          <h2 className="text-3xl font-bold text-[#C8102E] mb-12">
            Helpful Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {service.resources.map((resource: any, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 text-left hover:shadow-lg transition">

                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-semibold text-sm mb-2">
                  {resource.title}
                </h3>

                <p className="text-xs text-gray-600 mb-4">
                  {resource.description}
                </p>

                <Link
                  href="#"
                  className="text-[#C8102E] text-xs font-medium hover:underline"
                >
                  Learn More →
                </Link>

              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button className="bg-[#C8102E] hover:bg-[#9E0B22] px-8 py-2 text-sm">
              Read More →
            </Button>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#C8102E] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="font-semibold">
                How quickly can you respond to commercial service requests?
              </h4>
              <p>We aim to respond within 24 hours.</p>
            </div>

            <div>
              <h4 className="font-semibold">
                Are your technicians licensed and insured?
              </h4>
              <p>Yes, all of our professionals are fully licensed and insured.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#C8102E] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need {service.title} Services Today?
        </h2>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 font-semibold">
          Get Started
        </Button>
      </section>

      <Footer />
    </div>
  )
}

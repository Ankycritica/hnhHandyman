"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* BREADCRUMB */}
      <div className="pt-24">
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
            <Link href="/services" className="hover:text-red-600">
                Services
            </Link>
            <span>/</span>
            <Link href="/services/residential" className="hover:text-red-600">Residential</Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">Repair</span>
        </div>
      </div>
      </div>

        {/* HERO – HOME REPAIR SERVICES */}
        <section className="bg-[#B21E23]">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-white">
            <h1 className="text-1xl text-white/90 md:text-3xl font-bold mb-4">
                Home Repair Services
            </h1>

            <h2 className="text-xl text-white/90 md:text-2xl font-semibold mb-6">
                Kitchens, Baths, Walls, Floors, and More
            </h2>

            <p className="leading-relaxed text-white/90 max-w-xl">
                Homes that aren't maintained can quickly degrade, bringing down their
                aesthetic and value. From the exterior of your home to your closets,
                keeping up with home repairs is easy with Hand and Hand Handyman by your side.
                Our convenient, one-call solution makes getting it all done easier.
            </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
            <Image
                src="/icon/mrh-sheetrock-repair-desktop-624x322-rs.webp"
                alt="Sheetrock repair"
                width={620}
                height={340}
                className="rounded-xl shadow-xl object-cover"
                priority
            />
            </div>

        </div>
        </section>



      {/* HERO COPY */}
        <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                Hand and Hand Handyman Provides Home Repairs Near You
            </h1>

            <div className="h-[2px] w-150 bg-red-700 mb-6" />

            <p className="text-neutral-700 mb-4 leading-relaxed">
                The HnHHandyman team has been offering home repair services
                since 1996, with our service professionals boasting an average of
                10 years of experience.
                <Link href="/book" className="text-red-600 underline ml-1">
                Book an appointment
                </Link>{" "}
                and learn why homeowners trust our professionals over an unknown
                repair contractor.
            </p>

            <p className="text-sm text-neutral-600 italic">
                All HnHHandyman franchises are locally owned and operated and
                may offer fewer or more services than those listed here. Contact your
                local team for a customized on-site assessment.
            </p>
            </div>

            {/* RIGHT IMAGE */}
            <div>
            <Image
                src="/icon/mrh-studfinder-desktop-656x371-rs.webp"
                alt="Handyman repairing wall"
                width={650}
                height={420}
                className="rounded-xl shadow-lg"
            />
            </div>

        </div>
        </section>


      {/* SERVICE SECTIONS */}
        {[
        {
            title: "Interior Repair",
            image: "/icon/mrh_caulking_desktop_272x180_rs.webp",
            desc: `From shelving and TV mounting to childproofing, exhaust fans,
            ceiling fans, picture hanging, caulking, and window treatments —
            we handle it all.`,
            slug: "interior-repair",
        },
        {
            title: "Exterior Repair",
            image: "/icon/mrh_employee_ladder_outdoor_roof_desktop_272x180_rs.webp",
            desc: `Window frame repair, gutter installation, weatherproofing,
            debris removal, and masonry services to keep your home protected.`,
            slug: "exterior-repair",
        },
        {
            title: "Garage Repair",
            image: "/icon/mrh_moderngarage_interior_tools_desktop_272x180_rs.webp",
            desc: `Garage shelving and storage solutions that maximize space,
            reduce clutter, and restore order.`,
            slug: "garage-repair",
        },
        {
            title: "More Local Repair Services",
            desc: "Additional repair services may be available in your area. Contact us for a customized on-site assessment.",
            slug: "more-local-repair-services",
        },
        ].map((item) => (
        <section key={item.slug} className="container mx-auto px-6 py-10">
            <div
            className={`relative bg-white rounded-xl shadow-md border overflow-hidden
            ${item.image ? "flex flex-col md:flex-row" : "flex items-center justify-center text-center"}`}
            >
            {/* LEFT RED STRIP */}
            <span className="absolute left-0 top-0 h-full w-1 bg-red-600" />

            {/* IMAGE (ONLY IF EXISTS) */}
            {item.image && (
                <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={220}
                className="object-cover"
                />
            )}

            {/* CONTENT */}
            <div className={`p-6 ${item.image ? "flex-1" : "max-w-2xl mx-auto"}`}>
                <h3 className="text-2xl font-bold mb-3 text-red-600">
                {item.title}
                </h3>

                {item.desc && (
                <p className="text-neutral-700 mb-4">{item.desc}</p>
                )}

                <Link
                href={`/services/residential/repair/${item.slug}`}
                className="inline-flex items-center gap-2 text-red-600 font-semibold
                border border-red-600 px-5 py-2 rounded-md
                hover:bg-red-600 hover:text-white transition"
                >
                Read More →
                </Link>
            </div>
            </div>
        </section>
        ))}

      {/* TRUST CTA BAR */}
        <section className="bg-[#B21E23]">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
            Service You Can Trust!
            </h2>

            <div className="flex items-center gap-4">
            <p className="text-white underline underline-offset-4">
                Let us know how we can help you today.
            </p>
            <Button className="bg-blue-500 text-black hover:bg-yellow-500 font-semibold px-6">
                Book Now
            </Button>
            </div>
        </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-[#B21E23] mb-4">
            FAQs About Home Repair Services
            </h2>

            <hr className="w-full border-neutral-300 my-6" />

            <p className="text-neutral-700 max-w-3xl mx-auto mb-12">
            For over 25 years, HnHHandyman professionals have been helping homeowners
            and businesses repair, maintain, and enhance their space. Below are answers
            to some of the most frequently asked questions.
            </p>

            <div className="space-y-6 text-left">
            
            {/* FAQ ITEM */}
            <details className="group bg-white rounded-lg shadow-md border overflow-hidden">
                <summary className="cursor-pointer px-6 py-5 font-semibold flex justify-between items-center">
                What do your home repair services include?
                <span className="text-xl group-open:hidden">+</span>
                <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 border-t">
                Interior, exterior, and garage repairs including drywall patches,
                bathroom caulking, shelving, ceiling fans, gutters, window frames,
                and more.
                </div>
            </details>

            <details className="group bg-white rounded-lg shadow-md border overflow-hidden">
                <summary className="cursor-pointer px-6 py-5 font-semibold flex justify-between items-center">
                How long do home repairs usually take?
                <span className="text-xl group-open:hidden">+</span>
                <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 border-t">
                Most home repairs are completed in one day or less. Larger or more
                complex projects may take longer depending on scope.
                </div>
            </details>

            <details className="group bg-white rounded-lg shadow-md border overflow-hidden">
                <summary className="cursor-pointer px-6 py-5 font-semibold flex justify-between items-center">
                Are your technicians experienced?
                <span className="text-xl group-open:hidden">+</span>
                <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 border-t">
                Yes. Our service professionals have an average of 10+ years of
                experience and arrive on time with the right tools to get the job done.
                </div>
            </details>

            </div>
        </div>
        </section>
      <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
      <Footer />
    </div>
  )
}

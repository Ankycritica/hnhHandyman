"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/ui/TrustBar"

export default function AboutUsPage() {
  return (
    <div className="bg-white text-[#1A1A1A]">
      <Header />
      {/* ================= BREADCRUMB ================= */}
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
          <span className="text-red-600 font-semibold">Home</span>
        </div>
      </div>

      {/* ================= HERO BANNER ================= */}
      <section className="bg-[#faf6ed] border-b">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-[40px] font-bold text-red-700 mb-3">
            About Us – Professional Handyman Services | HNH 
            <br></br>Handyman
          </h1>
          <div className="h-[4px] w-20 bg-yellow-500" />
        </div>
      </section>

      {/* ================= HERO CONTENT ================= */}
      <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-[#C8102E] mb-4">
            The Reliable, High-Quality Solution to Your Home Repair and
            Maintenance Needs
          </h2>

          <hr className="border-[#C8102E] w-190 mb-6" />

          <p className="text-gray-700 leading-relaxed">
            Hand N Hand Handyman isn’t the guy offering home repair services
            from the back of his pickup truck. Our experienced service
            professionals are your personal home improvement consultants and
            trusted, knowledgeable repair and maintenance resources.
          </p>
        </div>

        {/* RIGHT */}
        <Image
          src="/icon/HnHHandyman.png"
          alt="Hand N Hand Handyman Professional"
          width={560}
          height={360}
          className="rounded-md object-cover"
        />
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl font-bold text-[#C8102E] mb-6">
              Who Is Hand N Hand Handyman?
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              You don’t have time for services that are not reliable or dependable,
              and you shouldn’t let just anyone into your home. When you need a
              professional handyman you can trust to get it done right, you can
              count on Hand N Hand Handyman.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Founded with a commitment to excellence, we provide dependable repair,
              installation, maintenance, and organization services backed by
              workmanship you can trust.
            </p>

            <ul className="space-y-4">
              {[
                "One-call solution for a wide range of home repair and maintenance needs",
                "Trusted by hundreds of satisfied customers",
                "Easy scheduling and reliable arrival times",
                "Uniformed professionals with the right tools for the job",
                "Jobs done right the first time",
                "Experienced and fully insured technicians",
                "Clean-up after every job",
                "Quality workmanship you can rely on",
                "Committed to long-term customer satisfaction",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C8102E] text-white text-[10px] font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* ================= DONE RIGHT PROMISE ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-xl font-bold text-[#C8102E] mb-4">
              It’s Not Done, Until It’s Done Right
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-4 max-w-xl">
              Hand N Hand Handyman is proud to stand behind our work with
              the Neighborly Done Right Promise®. Our service professionals
              operate on a simple but powerful principle: if a job’s not done
              right, we’ll make it right.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4 max-w-xl">
              We know that caring for your home can be stressful, so we want
              you to feel reassured knowing that we stand behind our work.
              If we fail to deliver quality workmanship the first time,
              simply give us a call.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed max-w-xl">
              Our business is about people. When you put your trust in us,
              we want you to be happy you did — and the next time you need
              a handyman, you’ll call us again.
            </p>
          </div>

          {/* RIGHT BADGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/icon/ndrp-logo-desktop.svg"
              alt="Done Right Promise"
              width={360}
              height={360}
              className="object-contain"
            />
          </div>

        </div>
      </section>
      <TrustBar /> 
      <Footer />
    </div>
  )
}

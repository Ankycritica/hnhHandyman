"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"



export default function HowWeWorkPage() {
  return (
    <div>
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
    <div className="bg-white text-[#1A1A1A]">
      
        {/* ================= HERO BANNER ================= */}
        <section className="bg-[#faf6ed] border-b">
          <div className="container mx-auto px-6 py-12">
            <h1 className="text-[40px] font-bold text-red-700 mb-3">
              The Neighborly Done Right Promise®  
            </h1>
            <div className="h-[4px] w-20 bg-yellow-500" />
          </div>
        </section>
        

        {/* ================= HERO ================= */}
        <div>
          <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            {/* LEFT CONTENT */}
<div>
  <h1 className="text-3xl font-bold text-red-700 mb-2">
    It’s Not Done, Until It’s Done Right™
  </h1>

  <h2 className="text-lg font-semibold text-red-700 mb-4">
    The Neighborly Done Right Promise®
  </h2>

  <p className="text-neutral-700 font-bold mb-4">
    Delivered by Mr. Handyman®, a proud Neighborly company.
  </p>

  <p className="text-neutral-700 leading-relaxed mb-4">
    Mr. Handyman, a proud Neighborly company, is committed to providing you
    with outstanding service. All our service professionals operate on a
    simple but powerful principle — if a job’s not done right, we’ll make it
    right.
  </p>

  <p className="text-neutral-700 leading-relaxed mb-4">
    We know that caring for your home can be stressful, so we want you to feel
    reassured knowing that we take great pride in the work we do, and we make
    sure it’s done to the highest standard. That’s why we’re proud to stand
    behind our work with the Mr. Handyman Done Right Promise.
  </p>

  <p className="text-neutral-700 leading-relaxed mb-4">
    Our business is about people. When you put your trust in us, we want you
    to be happy you did, so the next time you need a hand, you’ll call us
    again.
  </p>

  <p className="text-neutral-700 font-bold mb-4">
    The Mr. Handyman Done Right Promise is delivered by locally owned and
    operated franchises.
  </p>

  <p className="text-neutral-700 leading-relaxed mb-4">
    With Mr. Handyman you can be sure your job will be Done Right. We stand
    behind our workmanship with a Done Right Promise. If your service was not
    done right, we promise to make it right.
  </p>

  <p className="text-neutral-700 font-bold mb-4">
    Services performed by independently owned and operated franchises.
    <Link
      href="/services/neighborly"
      className="text-red-600 underline ml-1"
    >
      Full details here.
    </Link>
  </p>
</div>


            {/* RIGHT BADGE */}
            <div className="flex justify-center">
              <Image
                src="/icon/ndrp-logo-desktop.svg"
                alt="Done Right Promise"
                width={400}
                height={400}
              />
            </div>

          </div>
        </div>

        {/* ================= TRUST BAR ================= */}
        <div className="bg-red-700">
          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-white text-xl font-bold">
              Service You Can Trust!
            </h2>

            <Link href="/get-started">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-start">

          {/* IMAGE */}
          <div className="relative h-[620px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/icon/HnHHandyman.png"
              alt="Professional Handyman"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-8">
              Why Choose Us?
            </h2>

            {[
              {
                title: "We’re Trustworthy",
                desc: "When you invite someone onto your property to do home improvement work or commercial repairs, you deserve a safe, worry-free experience with a trusted handyman.",
              },
              {
                title: "Our Workmanship Is Guaranteed",
                desc: "Our handyman professionals average more than 10 years of experience in repair trades and take time to investigate each project for a long-lasting solution.",
              },
              {
                title: "Customer Service That Goes Above and Beyond",
                desc: "When it's time for service, we promise to get the job done right. Our clients can count on our handymen to arrive promptly, in uniform and driving a marked van.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative bg-white border border-neutral-200 rounded-lg shadow-sm p-6 pl-8 mb-6"
              >
                <span className="absolute left-0 top-0 h-full w-[6px] bg-red-700 rounded-l-lg" />
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        
     
    </div>
    <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
    <Footer/>
    </div>
    
  )
}

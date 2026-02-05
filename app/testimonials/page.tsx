"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/ui/TrustBar"
import "@/lib/testimonials.css"

const reviews = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  name: `Customer ${i + 1}`,
  initial: String.fromCharCode(65 + (i % 26)),
  rating: 5,
  text:
    "Very professional and reliable. The work was completed on time and exceeded expectations.",
  response:
    "Thank you for your kind words! We truly appreciate your trust in Mr. Handyman.",
}))

export default function ReviewsPage() {

  // ===== PAGINATION LOGIC =====
  const [visible, setVisible] = useState(20)

  const visibleReviews = reviews.slice(0, visible)

  const handleMore = () => {
    setVisible(v => v + 10)

    // small smooth scroll like original site
    setTimeout(() => {
      window.scrollBy({
        top: 200,
        behavior: "smooth"
      })
    }, 100)
  }

  return (
    <>
      <Header />

      {/* ================= BREADCRUMB ================= */}
      <div className="pt-24 border-b">
        <div className="container mx-auto px-6 py-4 text-sm text-neutral-600 flex gap-2 items-center">
          <Link href="/" className="hover:text-red-600 flex items-center">
            <span className="w-8 h-8 bg-neutral-100 rounded-md flex items-center justify-center text-black shadow-sm">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11.5L12 4l9 7.5" />
                <path d="M9 21V12h6v9" />
              </svg>
              <span className="sr-only">Home</span>
            </span>
          </Link>
          <span>/</span>
          <span className="text-red-600 font-semibold">Reviews</span>
        </div>
      </div>

      {/* ================= HERO BANNER ================= */}
      <section className="bg-[#faf6ed] border-b">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-[40px] font-bold text-red-700 mb-3">
            Handyman Testimonials and Reviews
          </h1>
          <div className="h-[4px] w-20 bg-yellow-500" />
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mh-hero">
        <h2 className="title">Real Stories, Real Results</h2>

        <p className="sub max-w-3xl mx-auto">
          Discover what our customers have to say about their experience with us.
          From insightful feedback to honest opinions, this page is a testament
          to our commitment to providing exceptional customer service.
        </p>

        <div className="rating" aria-label="Rated 4.8 out of 5">
          <strong>4.8 / 5</strong>
          <span className="stars">
            {"★".repeat(5)}
          </span>
        </div>
      </section>

      {/* ================= REVIEWS GRID ================= */}
      <section className="mh-reviews-wrap">
        <div className="mh-reviews-grid">

          {visibleReviews.map((r) => (
            <article key={r.id} className="mh-card">
              <div className="mh-card-inner">

                <div className="mh-card-header">

                  <div className="avatar">
                    {r.initial}
                  </div>

                  <div>
                    <h3 className="name">{r.name}</h3>

                    <div className="flex items-center gap-1">
                      <span className="stars">
                        {"★".repeat(r.rating)}
                      </span>
                      <span className="via">via Google</span>
                    </div>
                  </div>

                </div>

                <p className="review-text">
                  “{r.text}”
                </p>

                <div className="owner-response">
                  <strong>Owner Response:</strong> {r.response}
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* ===== SEE MORE BUTTON ===== */}
        {visible < reviews.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleMore}
              className="bg-yellow-500 hover:bg-yellow-400 transition px-6 py-2 rounded text-sm font-semibold shadow"
            >
              See More Reviews
            </button>
          </div>
        )}
      </section>

      <TrustBar />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          
          <div className="relative h-[440px] rounded-lg overflow-hidden">
            <Image
              src="/img/Handyman-Services.jpg"
              alt="Professional handyman service"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-8">
              Why Choose Us?
            </h2>

            {[
              {
                title: "We’re Trustworthy",
                desc: "When you invite someone onto your property, you deserve a safe, worry-free experience with a trusted handyman.",
              },
              {
                title: "Our Workmanship is Guaranteed",
                desc: "Our professionals average more than 10 years of experience in repair trades.",
              },
              {
                title: "Customer Service That Goes Above and Beyond",
                desc: "We promise to get the job done right and arrive promptly, in uniform.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative bg-white border border-neutral-200 rounded-lg shadow-md p-6 pl-8 mb-6"
              >
                <span className="absolute left-0 top-0 h-full w-[6px] bg-red-700 rounded-l-lg" />

                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#B21E23] pt-1 pb-1 relative" />

      <Footer />
    </>
  )
}

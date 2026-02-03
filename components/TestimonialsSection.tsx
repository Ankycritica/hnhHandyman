"use client"

import { Star, Play, Pause } from "lucide-react"
import { useRef, useEffect, useState } from "react"

// ===== BASE REVIEWS =====
const baseTestimonials = [
  { name: "Duane Gibson", rating: 5, text: "The technician was very knowledgeable and completed the job perfectly." },
  { name: "Rebecca Main", rating: 5, text: "Great experience! Explained everything clearly and did an excellent job." },
  { name: "Kenneth Quirk", rating: 5, text: "Very happy with the service. Professional, efficient, and reliable." },
  { name: "Elisa Navia", rating: 5, text: "Went above and beyond. Highly recommend Hand and Hand Handyman." },
  { name: "Bill Betts", rating: 5, text: "On time, clean work, and excellent results. Will call again." },
  { name: "Lakshmi Rai", rating: 5, text: "Installed grab bars and cleaned up perfectly." },
  { name: "Patricia Stuart", rating: 5, text: "Efficient service by friendly staff. I highly recommend." },
  { name: "Jerry Held", rating: 5, text: "Anthony worked hard and did a good job." },
  { name: "Susan Sherren", rating: 5, text: "Adam did an amazing job!" },
  { name: "Jacob Jennott", rating: 5, text: "Careful around my house and incredible job." },
]

// ===== CREATE VERY LONG STRIP FOR SMOOTH LOOP =====
const testimonials = Array.from({ length: 14 }).flatMap(() => baseTestimonials)

export function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(true)

  // ===== TRUE CONTINUOUS MARQUEE MOTION =====
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return

    let frame: number

    const tick = () => {
      if (playing) {
        // THIS IS THE MAGIC LINE
        el.scrollLeft += 0.55    // ← adjust speed here
      }

      // Seamless reset at halfway point
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0
      }

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)

  }, [playing])

  return (
    <section className="py-20 bg-[#5f5f5f]">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Customer Reviews
        </h2>

        {/* ===== MOVING STRIP ===== */}
        <div
          ref={sliderRef}
          className="overflow-x-auto no-scrollbar pb-6 cursor-pointer"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          <div className="grid grid-rows-2 grid-flow-col gap-5 w-max px-2">

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[300px] bg-white rounded-xl p-5 shadow-md"
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>

                    <div className="flex">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                  “{t.text}”
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ===== PLAY / PAUSE ===== */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setPlaying(!playing)}
            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
          >
            {playing ? (
              <Pause className="text-white" />
            ) : (
              <Play className="text-white" />
            )}
          </button>
        </div>

        <div className="text-center mt-6">
          <a
            href="/reviews"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            See All Testimonials
          </a>
        </div>

      </div>

      {/* HIDE SCROLLBAR */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

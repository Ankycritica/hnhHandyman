import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/ui/TrustBar"

import { ResidentialServicesAccordion} from "@/components/ui/ResidentialServicesAccordion"
export const metadata = {
  title: "How We Work | Residential Services",
  description: "Learn exactly what to expect when you hire our professionals.",
}

export default function HowWeWorkPage() {
  return (
    <>
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
          <span className="text-red-600 font-semibold">How We Work</span>
        </div>
      </div>

      {/* ================= HERO BANNER ================= */}
      <section className="bg-[#faf6ed] border-b">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-[40px] font-bold text-red-700 mb-3">
            How We Work
          </h1>
          <div className="h-[4px] w-20 bg-yellow-500" />
        </div>
      </section>

      {/* ================= WHAT TO EXPECT ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-700 mb-10">
            What to Expect When You Hire Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["near-you", "35", "0 (10)"].map((img) => (
              <div
                key={img}
                className="relative h-[300px] rounded-lg overflow-hidden"
              >
                <Image
                  src={`/img/${img}.webp`}
                  alt="What to expect"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            Our Process
          </h2>

          <p className="max-w-4xl text-neutral-700 mb-12">
            You deserve to have a beautiful home and a team of professionals you can trust
            to properly care for it. We strive to deliver high-quality results by following
            an efficient, straightforward process.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Scheduling",
                desc: "Just one simple phone call hires a seasoned professional who will care for your home like you deserve. You can also schedule today by clicking Request Service.",
              },
              {
                title: "Arrival",
                desc: "A uniformed service professional with the skills, tools, and supplies to complete your project will arrive at the scheduled appointment time in a clearly marked van.",
              },
              {
                title: "The Work",
                desc: "We’re happy to work with whatever materials you supply. We can also purchase supplies for an additional fee.",
              },
              {
                title: "Payment for Completed Work",
                desc: "When the project is done, payment is expected for the completed work upon satisfaction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative bg-white border border-neutral-200 rounded-lg shadow-lg p-8 pl-10"
              >
                <span className="absolute left-0 top-0 h-full w-[6px] bg-red-700 rounded-l-lg" />

                <div className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-white text-sm font-bold">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div className="relative h-[440px] rounded-lg overflow-hidden">
            <Image
              src="/img/Handyman-Services.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover"
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
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EASY HIRING ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Hiring a Handyman Service Should Be Easy
            </h2>
            <div className="h-[2px] w-150 bg-red-700 mb-6" />
            <p className="text-neutral-700 leading-relaxed max-w-xl">
              Working with us is easy. We are fully insured, and our work is backed by our
              <Link href="/services/neighborly" className="text-red-600 underline ml-1">
              Neighborly Done Right Promise®.</Link>{" "}After we leave your home, if you find a problem with
              the workmanship, simply call us.
            </p>
          </div>

          <div className="relative h-[360px] rounded-lg overflow-hidden">
            <Image
              src="/img/wait.jpg"
              alt="Easy Hiring"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-red-700 mb-6">
            Why Work with Mr. Handyman?
          </h2>

          <p className="text-neutral-700 mb-8">
            With an average of 10 years of experience, our service professionals have the
            skills to deliver high-quality results.
          </p>

          <ul className="space-y-5">
            {[
              "Your service professional will arrive on time, in uniform, and in a marked van.",
              "Each service professional is fully insured for accidental damage and workers’ compensation.",
              "We clean up after every job.",
              "When you hire us, you and your property are protected.",
              "Each franchise is locally owned and backed by a respected national brand.",
            ].map((text) => (
              <li key={text} className="flex gap-4 items-start">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-white text-sm font-bold">
                  ✓
                </span>
                <span className="text-neutral-700">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ================= BRAND FOOTER ================= */}
        <div className="bg-neutral-20 border-t">
          <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/icon/ndrp-logo-desktop.svg"
              alt="Neighborly"
              width={100}
              height={40}
            />
            <p className="text-sm text-neutral-800 text-center max-w-xl">
              The Neighborly Done Right Promise® delivered by <br/>Hand and Hand Handyman ®, a proud Neighborly company.
            </p>
          </div>
        </div>
      <TrustBar />

      {/* ================= RESIDENTIAL SERVICES ================= */}
      
      <ResidentialServicesAccordion />
      <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
      <Footer />
    </>
  )
}

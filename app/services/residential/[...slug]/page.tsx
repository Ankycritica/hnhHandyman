import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RESIDENTIAL_SERVICES } from "@/data/residential-services"
import { slugify } from "@/lib/residential-service-utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSectionImage } from "@/lib/service-image-map"
import { FloatingChatButton } from "@/components/ui/FloatingChatButton"

interface PageProps {
  params: Promise<{
    slug?: string[]
  }>
}


/* ----------------------------------------
   SLUG NORMALIZER (🔥 KEY FIX)
---------------------------------------- */
function normalizeSlug(slug?: string[] | string): string[] {
  if (!slug) return []
  return Array.isArray(slug) ? slug : [slug]
}

/* ----------------------------------------
   SAFE SLUG RESOLVER
---------------------------------------- */
function resolveSlug(rawSlug?: string[] | string) {
  const slugs = normalizeSlug(rawSlug)
  const [serviceSlug, sectionSlug, itemSlug] = slugs

  const category = RESIDENTIAL_SERVICES.find(
    c => c.slug === serviceSlug
  )
  if (!category) return null

  /* ---------- CATEGORY ---------- */
  if (!sectionSlug) {
    return {
      type: "category" as const,
      title: category.label,
      description: `Professional ${category.label.toLowerCase()} services for your home.`,
      icon: category.icon,
      image:category.image,
      desc: category.desc,
      categorySlug: category.slug,
      sections: category.sections,
    }
  }

 /* ---------- SECTION / SERVICE ---------- */
for (const [sectionName, services] of Object.entries(category.sections)) {

  const isUnnamedSection = sectionName === ""

  /* =========================
     UNNAMED SECTION (Other Services)
  ========================= */
  if (isUnnamedSection) {

    // FINAL SERVICE DIRECTLY
    if (sectionSlug) {
      const service = services.find(
        s => slugify(s) === sectionSlug
      )

      if (service) {
        return {
          type: "service" as const,
          title: service,
          description: `Professional ${service.toLowerCase()} services for residential properties.`,
          icon: category.icon,
          image:category.image,
          desc: category.desc,
          category: category.label,
          categorySlug: category.slug,
        }
      }
    }

    continue
  }

  /* =========================
     NORMAL SECTION FLOW
  ========================= */
  if (slugify(sectionName) !== sectionSlug) continue

  // SECTION PAGE
  if (!itemSlug) {
    return {
      type: "section" as const,
      title: sectionName,
      category: category.label,
      description: `Expert ${category.label.toLowerCase()} services you can trust.`,
      icon: category.icon,
      image: category.image,
      desc: category.desc,
      categorySlug: category.slug,
      sectionSlug,
      services,
    }
  }

  // FINAL SERVICE
  const service = services.find(
    s => slugify(s) === itemSlug
  )

  if (service) {
    return {
      type: "service" as const,
      title: service,
      description: `Professional ${service.toLowerCase()} services for residential properties.`,
      icon: category.icon,
      image: category.image,
      desc: category.desc,
      category: category.label,
      categorySlug: category.slug,
      section: sectionName,
      sectionSlug,
    }
  }
}


  return null
}

/* ----------------------------------------
   METADATA
---------------------------------------- */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const { slug = [] } = await params
  const data = resolveSlug(slug)

  if (!data) {
    return { title: "Service Not Found | HnHHandyman" }
  }

  return {
    title: `${data.title} | Residential Services | HnHHandyman`,
    description: data.description,

  }
}



/* ----------------------------------------
   PAGE (MUST AWAIT PARAMS)
---------------------------------------- */
export default async function ResidentialSlugPage(
  { params }: PageProps
) {
  const { slug = [] } = await params   // ✅ THIS WAS MISSING
  const data = resolveSlug(slug)

  if (!data) {
    notFound()
  }
  // const Icon = data.icon ? getIcon(data.icon) : null

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div className="pt-20 lg:pt-24"/>
      
      <div className="pt-24 border-b">
        {/* HERO / BREADCRUMB */}
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
              <Link href="/services/residential" className="hover:text-red-600">Residential</Link>

              {data.category && (
                <>
                  <span>/</span>
                  <Link
                    href={`/services/residential/${data.categorySlug}`}
                    className="hover:text-red-600"
                  >
                    {data.category}
                  </Link>
                </>
              )}

              {data.section && (
                <>
                  <span>/</span>
                  <Link
                    href={`/services/residential/${data.categorySlug}/${data.sectionSlug}`}
                    className="hover:text-red-600"
                  >
                    {data.section}
                  </Link>
                </>
              )}

              <span>/</span>
              <span className="text-red-600 font-semibold">{data.title}</span>
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
              <Link href="/services/residential" className="hover:text-red-600">Residential</Link>

              {data.category && (
                <>
                  <span>/</span>
                  <Link
                    href={`/services/residential/${data.categorySlug}`}
                    className="hover:text-red-600"
                  >
                    {data.category}
                  </Link>
                </>
              )}

              {data.section && (
                <>
                  <span>/</span>
                  <Link
                    href={`/services/residential/${data.categorySlug}/${data.sectionSlug}`}
                    className="hover:text-red-600"
                  >
                    {data.section}
                  </Link>
                </>
              )}

              <span>/</span>
              <span className="text-red-600 font-semibold">{data.title}</span>
            </nav>

          </div>
    </div>
    <section className="bg-[#B21E23]">
    <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-white">
      <h1 className="text-white/90 md:text-3xl font-bold mb-4">
        {data.title} Services
      </h1>

      {/* 🔥 DYNAMIC SUBTITLE */}
      <h2 className="text-1xl text-white/90 md:text-1xl font-semibold mb-6">
        {data.type === "category" && (
          <>
            {Object.keys(data.sections)
              .filter(Boolean)
              .slice(0, 2)
              .join(", ")}
            {" & More"}
          </>
        )}

        {data.type === "section" && (
          <>
            {data.services.slice(0, 2).join(", ")}
            {" & More"}
          </>
        )}

        {data.type === "service" && data.section && (
          <>
            {data.description}
          </>
        )}
      </h2>

      <p className="leading-relaxed text-white/90 max-w-xl">
        {data.desc}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <Image
        src={data.image}
        alt={data.title}
        width={620}
        height={340}
        className="rounded-xl shadow-xl object-cover"
        priority
      />
    </div>

  </div>
</section>


      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                {data.icon && (
                  <Image
                    src={data.icon}
                    alt={`${data.title} icon`}
                    width={56}
                    height={56}
                    className="mb-4"
                  />
                )}

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--primary-blue)]">
                  {data.title}
                </h1>

                <p className="text-lg text-neutral-700 mb-6">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
      </section>

      <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                  Hand and Hand Handyman Provides {data.title} Near You
              </h1>
              <div className="h-[2px] w-150 bg-red-700 mb-6" />

                <p className="text-neutral-700 mb-4 leading-relaxed">
                    The HnHHandyman team has been offering {data.title} services
                    since 1996, with our service professionals boasting an average of
                    10 years of experience.
                    <Link href="/request-service" className="text-red-600 underline ml-1">
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
                    src="/img/remodel.jpg"
                    alt="Handyman repairing wall"
                    width={650}
                    height={420}
                    className="rounded-xl shadow-lg"
                />
            </div>
          </div>
      </section>

      {/* BODY */}
      <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* CATEGORY PAGE */}
      {data.type === "category" && (
        <section className="py-20">
          <div className="container mx-auto space-y-10">

            {Object.entries(data.sections).map(([sectionName]) => (
              <div
                key={sectionName}
                className="relative bg-white rounded-xl shadow-md overflow-hidden
                           flex flex-col md:flex-row border"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-red-600" />

                <img
                  src={getSectionImage(slugify(sectionName))}
                  alt={sectionName}
                  className="w-full md:w-1/3 object-cover"
                />

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-3">
                      {sectionName || "Other Services"}
                    </h3>
                    <p className="text-neutral-700">
                      Professional {sectionName} services you can trust.
                    </p>
                  </div>

                  <Link
                    href={
                      sectionName === ""
                        ? `/services/residential/${data.categorySlug}`
                        : `/services/residential/${data.categorySlug}/${slugify(sectionName)}`
                    }
                    className="mt-6 inline-flex items-center gap-2
                               border border-red-600 text-red-600
                               px-5 py-2 rounded-md
                               hover:bg-red-600 hover:text-white transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </section>
      )}

      {/* SECTION PAGE */}
      {data.type === "section" && (
        <section className="py-20">
          <div className="container mx-auto px-6 py-20">
            {/* Heading */}
            <div className="text-center max-w-4xl mx-auto mb-14">
              <p className="text-4xl font-bold text-red-700 mb-4">
                Professional {data.title} Services We Offer
              </p>
              <p className="text-neutral-600">
                HnHHandyman is one of the largest and fastest-growing handyman service
                companies. Each day, we serve the service and repair needs of thousands of
                residential and commercial customers.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
                {data.services.map((service) => {
                  const href = `/services/residential/${data.categorySlug}/${data.sectionSlug}/${slugify(service)}`

                  return (
                    <Link
                      key={service}
                      href={href}
                      className="group relative bg-white rounded-xl
                                border border-transparent
                                shadow-md hover:shadow-lg
                                hover:border-red-700
                                transition-all duration-200
                                overflow-hidden"
                    >
                      {/* Red Accent Bar */}
                      <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />

                      {/* Content */}
                      <div className="p-6 pr-14">
                        <h3 className="font-bold text-lg mb-3 leading-snug">
                          {service}
                        </h3>

                        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                          Professional service delivered by trusted experts to improve
                          functionality, safety, and comfort in your home or business.
                        </p>
                      </div>

                      {/* Arrow Button */}
                      <div className="absolute top-1/2 right-4 -translate-y-1/2">
                        <span
                          className="flex items-center justify-center w-9 h-9 rounded-full
                                    border-2 border-red-700 text-red-700
                                    group-hover:bg-red-700 group-hover:text-white
                                    transition"
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
          </div>

        </section>
      )}

            {/* FINAL SERVICE */}
            {data.type === "service" && (
              <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl">

                  <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
                    {data.title}
                    <div className="h-1 w-250 bg-red-700 mt-2" />
                  </h2>
                  <p className="text-neutral-700 mb-4">
                    Keeping up with home repairs can be a challenge. That's where
                    HnHHandyman comes in. We offer a wide range of{" "}
                    {data.title.toLowerCase()} services to help you maintain and
                    improve your home.
                  </p>
                  <p className="text-neutral-700 mb-4">
                    From small repairs to larger projects, we have the skills and
                    experience to get the job done right.
                  </p>

                  <p className="text-neutral-700 leading-relaxed mb-6">
                    Our experienced professionals provide expert{" "}
                    {data.title.toLowerCase()} services to keep your home safe,
                    functional, and beautiful.
                  </p>

                  <p className="text-neutral-700">
                    Every job is backed by our satisfaction guarantee and completed
                    with attention to detail.
                    {data.section && (
                      <>
                        {" "}As part of our {data.section.toLowerCase()} services,  
                        we ensure each project meets our high standards.
                      </>
                    )}
                  </p>
                  <p className="text-neutral-700 mt-4">
                    Contact your local HnHHandyman franchise today to schedule
                    your {data.title.toLowerCase()} service appointment!
                  </p>
                  <p className="text-sm text-neutral-600 italic mt-6">
                    All HnHHandyman franchises are locally owned and operated and
                    may offer fewer or more services than those listed here. Contact your
                    local team for a customized on-site assessment.
                  </p>
                </div>
              </section>
              
           
            )}

            {/* ADDITIONAL SECTION FOR FINAL SERVICE */}
            {data.type === "service" && data.section && (
            <section className="bg-white py-20">
              <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                {/* LEFT CONTENT */}
                <div>
                  <h1 className="text-[36px] md:text-[40px] font-bold text-red-700 mb-4">
                    {data.section} Services Near You
                  </h1>

                  {/* RED UNDERLINE */}
                  <div className="h-[2px] w-120 bg-red-700 mb-6" />

                  <p className="text-neutral-700 leading-relaxed max-w-xl mb-8">
                    HnHHandyman offers a wide range of lighting services to enhance your home’s
                    functionality, ambiance, and security. No matter your lighting needs,
                    HnHHandyman provides expert service with quality you can trust.
                    Contact us today!
                  </p>

                  <Link href="/how-we-work">
                    <button className="bg-red-700 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold shadow">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative h-[360px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/img/0 (6).jpeg"  // 👈 replace with your image
                    alt="Lighting Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

              </div>
            </section>
          )}

          </div>
      </section>
      </div>
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
            <Link href="/request-service">
              <Button className="bg-blue-500 text-black hover:bg-yellow-500 font-semibold px-6">
                        Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl text-center"> 
          <h2 className="text-3xl md:text-4xl font-bold text-[#B21E23] mb-4">
            FAQs About {data.title} Services
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
                  What do your {data.title} services include?
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
                  How long do {data.title} usually take?
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:block">−</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 border-t">
                  Most {data.title} are completed in one day or less. Larger or more
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
        <FloatingChatButton />
      <section className="bg-[#B21E23] pt-1 pb-1 relative"></section>
      <Footer />
    </div>
  )
}

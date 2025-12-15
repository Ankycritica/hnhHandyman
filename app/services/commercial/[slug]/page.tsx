import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { getIcon } from "@/lib/icon-map"
import commercialServices from "@/data/services.commercial.json"

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
    return {
      title: "Service Not Found | HnHHandyman",
    }
  }

  return {
    title: `${service.title} | Commercial Services | HnHHandyman`,
    description: service.shortDescription,
  }
}

export default async function CommercialServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = commercialServices.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = getIcon(service.iconName)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Icon className="w-16 h-16 text-[var(--primary-blue)] mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--primary-blue)]">
                  {service.title}
                </h1>
                <p className="text-lg text-neutral-700 mb-6">
                  {service.shortDescription}
                </p>
                <p className="text-neutral-600">
                  Our experienced team provides professional {service.title.toLowerCase()} services
                  for commercial properties. We understand the importance of
                  minimizing business disruption while delivering quality results.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-[var(--primary-blue)]">
                  Let Us Call You
                </h2>
                <ContactForm serviceType={`Commercial - ${service.title}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-[var(--primary-blue)]">
              About {service.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-700 mb-4">
                Our {service.title.toLowerCase()} services are tailored to meet the
                specific needs of commercial properties. We work efficiently and
                professionally, ensuring minimal disruption to your business
                operations.
              </p>
              <p className="text-neutral-700 mb-4">
                Whether you need routine maintenance, emergency repairs, or
                facility improvements, our team has the expertise and equipment
                to get the job done right. We understand that commercial
                properties have unique requirements and timelines.
              </p>
              <p className="text-neutral-700">
                All our commercial work is backed by our satisfaction guarantee
                and is performed by licensed, insured professionals.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}


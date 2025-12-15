import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { getIcon } from "@/lib/icon-map"
import residentialServices from "@/data/services.residential.json"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return residentialServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = residentialServices.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: "Service Not Found | HnHHandyman",
    }
  }

  return {
    title: `${service.title} | Residential Services | HnHHandyman`,
    description: service.shortDescription,
  }
}

export default async function ResidentialServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = residentialServices.find((s) => s.slug === slug)

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
                  Our experienced technicians provide professional {service.title.toLowerCase()} services
                  for residential properties. We ensure quality workmanship and
                  customer satisfaction on every project.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-[var(--primary-blue)]">
                  Let Us Call You
                </h2>
                <ContactForm serviceType={`Residential - ${service.title}`} />
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
                Our {service.title.toLowerCase()} services are designed to meet the
                unique needs of residential property owners. We combine expertise,
                quality materials, and attention to detail to deliver results that
                exceed expectations.
              </p>
              <p className="text-neutral-700 mb-4">
                Whether you need a quick repair or a comprehensive improvement
                project, our team is equipped to handle it. We work efficiently
                and cleanly, minimizing disruption to your daily routine.
              </p>
              <p className="text-neutral-700">
                All our work is backed by our satisfaction guarantee. If you're
                not completely happy with the results, we'll make it right.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}


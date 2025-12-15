import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Handyman Services | HnHHandyman",
  description:
    "Professional residential handyman services including home repairs, painting, carpentry, electrical, plumbing, and more. Trusted professionals for your home.",
}

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


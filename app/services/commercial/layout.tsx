import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Handyman Services | HnHHandyman",
  description:
    "Professional commercial handyman services for offices, retail spaces, warehouses, and facilities. Expert maintenance, repairs, and improvements.",
}

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


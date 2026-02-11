import fs from "fs"
import path from "path"
import GalleryView from "./view"

import { Wrench, Building, Hammer, Paintbrush } from "lucide-react"

function shuffle<T>(arr: T[]) {
  return arr.sort(() => Math.random() - 0.5)
}

export default function GalleryPage() {
  const dir = path.join(process.cwd(), "public/new")

  const images = shuffle(
    fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
      .map((f) => `/new/${encodeURIComponent(f)}`)
  )

  const chunk = (arr: string[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    )

  const grouped = chunk(images, Math.ceil(images.length / 4))

  const sections = [
    {
      icon: <Wrench size={22} />,
      title: "Home Repair Services",
      images: grouped[0] || [],
    },
    {
      icon: <Building size={22} />,
      title: "Commercial Services",
      images: grouped[1] || [],
    },
    {
      icon: <Hammer size={22} />,
      title: "Carpentry Services",
      images: grouped[2] || [],
    },
    {
      icon: <Paintbrush size={22} />,
      title: "Remodeling Services",
      images: grouped[3] || [],
    },
  ]

  return <GalleryView sections={sections} />
}

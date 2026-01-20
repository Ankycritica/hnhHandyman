import { RESIDENTIAL_SERVICES } from "@/data/residential-services"

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export const getRepairCategory = () =>
  RESIDENTIAL_SERVICES.find(s => s.slug === "repair")

export const getRepairSection = (sectionSlug: string) => {
  const repair = getRepairCategory()
  if (!repair) return null

  return Object.entries(repair.sections).find(
    ([name]) => slugify(name) === sectionSlug
  )
}

export const getRepairService = (
  sectionSlug: string,
  serviceSlug: string
) => {
  const section = getRepairSection(sectionSlug)
  if (!section) return null

  return section[1].find(s => slugify(s) === serviceSlug)
}

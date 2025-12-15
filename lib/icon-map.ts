import {
  Wrench,
  Paintbrush,
  Hammer,
  Zap,
  Droplet,
  Square,
  Grid,
  Trees,
  Building,
  Store,
  Settings,
  Layout,
  Package,
  Utensils,
  Accessibility,
  LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Paintbrush,
  Hammer,
  Zap,
  Droplet,
  Square,
  Grid,
  Trees,
  Building,
  Store,
  Settings,
  Layout,
  Package,
  Utensils,
  Accessibility,
}

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Wrench
}


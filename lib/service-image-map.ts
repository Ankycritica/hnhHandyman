export const SECTION_IMAGE_MAP: Record<string, string> = {
  // REPAIR
  "interior-repair": "/icon/mrh-sheetrock-repair-desktop-624x322-rs.webp",
  "exterior-repair": "/images/services/exterior-repair.jpg",
  "garage-repair": "/images/services/garage-repair.jpg",
  "more-local-repair-services": "/images/services/more-repair.jpg",

  // DRYWALL
  "walls-and-ceilings": "/icon/mrh_breaking_wall_desktop_272x180_rs.webp",

  // REMODEL
  bathroom: "/icon/mrh_service_caulking_desktop_272x180_rs.webp",
  kitchen: "/icon/mrh_kitchen_interior_sink_desktop_272x180_rs.webp",
  "rooms-and-other-services": "/icon/mrh_house_livingarea_desktop_272x180_rs.webp",
  

  // WINDOWS & DOORS
  doors: "/icon/mrh_service_doors_desktop_272x180_rs.webp",
  windows: "/icon/mrh_kitchen_sink_desktop_272x180_rs.webp",

  // Safety & Accessibility
 "bath-and-bedroom": "/icon/mrh_handicap_bathroom_desktop_272x180_rs.webp",
 "doors-and-floors": "/icon/mrh_den_desktop_272x180_rs.webp",
 "ramps-and-railings": "/icon/mrh_ramp1_desktop_272x180_rs.webp",

 //assembly services
 "sports-equipment": "/icon/mrh_home_gym_desktop_272x180_rs.webp",
    "furniture": "/icon/mrh_assembly1_desktop_272x180_rs.webp",
    "patio-and-yard": "/icon/mrh_swingset_desktop_272x180_rs.webp",

//flooring
    "more-local-floor-installation-and-repair-services": "/new/mrh-placing-ceramic-floortile-desktop-656x371-rs.webp",
   
    "tile-and-vinyl": "/icon/mrh_laying_tile_desktop_272x180_rs.webp",
    "wood-and-laminate": "/icon/mrh_wood_flooring_desktop_272x180_rs.webp",

  // PAINTING
  "interior-painting": "/icon/mrh_painting_desktop_272x180_rs.webp",
  "exterior-painting": "/icon/mrh_blue_garage_door_desktop_272x180_rs.webp",
  "wallpaper": "/icon/mrh_house_men_livingarea_desktop_272x180_rs.webp",

  //carpentry insatllation and repair
  "exterior-carpentry": "/img/0 (7).jpeg",
  "interior-carpentry": "/icon/mrh_walltile_fixing_desktop_272x180_rs.webp",
  "other-carpentry": "/icon/mrh_house_white_livingarea_desktop_272x180_rs.webp",
  "more-local-carpentry-services": "/img/0 (1).jpeg",

  //plumbing
  "repair-and-replace": "/icon/mrh_tap_leaking_desktop_272x180_rs.webp",
  "other-plumbing-services": "/icon/mrh_toilet_tak_desktop_272x180_rs.webp",

  //electrical
  "lighting": "/icon/mrh_house_night_desktop_272x180_rs.webp",
  "carbon-monoxide-and-smoke-detector": "/icon/mrh_white_electronic_device_desktop_272x180_rs.webp",
  "home-automation-and-smart-home": "/icon/mrh_home_automtion_desktop_272x180_rs.webp",
  "electrical-services-and-installation": "/img/0 (10).webp",

  //other services
  "other-services": "/icon/mrh_dryer_vent3_other-cat_desktop_656x371.webp",
  // DEFAULT
  default: "/icon/mrh_dryer_vent3_other-cat_desktop_656x371.webp",
}

export function getSectionImage(sectionName: string) {
  return (
    SECTION_IMAGE_MAP[sectionName] ||
    SECTION_IMAGE_MAP["default"]
  )
}

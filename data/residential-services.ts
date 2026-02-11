import { title } from "process"

export interface SubService {
  title: string
  image: string
  desc: string
  bullets: string[]
}
export type ResidentialService = {
  label: string,
  slug: string,
  icon: string,
  image:string,
  desc:string,
  sections: Record<string, SubService[]>,
}

export type CommercialServices ={
  title:string,
  shortDescription:string,
  iconName:string,
  slug:string,
}
function make(title: string, image:string): SubService {
  return {
    title,
    image,
    desc: `Professional ${title.toLowerCase()} service by certified Hand and Hand Handyman experts with clean finishing and guaranteed workmanship.`,
    bullets: [
      "Experienced licensed technicians",
      "Clean and damage-free work",
      "Material guidance provided",
      "Post service inspection"
    ]
  }
}

export const RESIDENTIAL_SERVICES: ResidentialService[] = [

/* =========================================================
   REPAIR
========================================================= */
{
label: "Repair",
slug: "repair",
image:"/new/WhatsApp Image 2026-02-04 at 9.39.44 AM.jpeg",
desc:"Homes that aren't maintained can quickly degrade, bringing down their aesthetic and value. From the exterior of your home to your closets, keeping up with home repairs is easy with HnHHandyman® by your side.",
icon: "/icon/mrh_repair_revised_red_icon_55x55.svg",

sections: {

"Interior Repair": [
make("TV Wall Mount Installation", "/new/mrh-tvbracket-lcd_display-desktop-624x322-rs.webp"),
make("Shelving Installation", "/new/mrh_floating_glass_shelves_empty_desktop-hero_624x322.webp"),
make("Ceiling Fan Installation", "/new/mrh-fan-roof-desktop-624x322-rs.webp"),
make("Child Proofing", "/new/mrh-steps-babyproofing-desktop-624x322-rs.webp"),
make("Picture Hanging", "/new/mrh-picture-holding-hand-desktop-624x322-rs.webp"),
make("Closet Shelving", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Bathroom Caulking", "/new/WhatsApp Image 2026-02-04 at 9.53.04 AM.jpeg"),
make("Exhaust Fan Installation and Repair", "/new/mrh_airduct_fixing_roof_desktop_624x322_rs.webp"),
make("Furniture Painting and Staining", "/new/mrh_carpenter_applying_protectivevanish_desktop_624x322_rs.webp"),
make("Curtains and Drapes Installation and Replacement", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Hanging Blinds Installation and Replacement", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg")
],

"Exterior Repair": [
make("Window Frame Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.30 AM.jpeg"),
make("Weatherproofing", "/new/mrh-window-beading-hand-desktop-624x322-rs.webp"),
make("Debris Removal", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Gutter Installation and Repair", "/new/mrh_corner_roofgutter_rooftop_desktop_656x371_rs.webp"),
make("Masonry and Concrete Services", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg")
],

"Garage Repair": [
make("Garage Storage and Organization", "/new/mrh_organized_shelving_desktop_624x322.webp"),
make("Garage Shelving", "/new/mrh-emptyshelves-greenbasket-desktop-656x371-rs.webp")
],

"More Local Repair Services":[
make("Other Repair Services", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg")
]

}
},

/* =========================================================
   DRYWALL AND CEILING
========================================================= */
{
label: "Drywall And Ceiling",
slug: "drywall-and-ceiling",
image:"/icon/mrh_drywall-ceiling-service_sheetrock_hero_desktop_1440x634.webp",
desc:"Keeping your walls and ceilings in great condition is easy with HnHHandyman®.",
icon: "/icon/mrh_drywall_red_icon.svg",

sections: {
"Walls and Ceilings": [
make("Drywall Patching and Repair", "/new/mrh-wall-paint-door-desktop-624x322-rs.webp"),
make("Drywall Finishing", "/new/mrh-working-woodenframe-desktop-656x371-rs.webp"),
make("Drywall Installation", "/new/mrh-room-design-electricwork-desktop-656x371-rs.webp"),
make("Wall Finishing", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Ceiling Repair and Replacement", "/new/mrh_leak_damage_desktop_656x371_rs.webp")
]
}
},

/* =========================================================
   REMODEL
========================================================= */
{
label: "Remodel",
slug: "remodel",
image:"/icon/mrh-employee-client-kitchen-talking-desktop-624x322-rs.webp",
desc:"Bring your dream home to life with professional remodeling.",
icon: "/icon/mrh_remodel_red_icon_55x55.svg",

sections: {

"Bathroom": [
make("Bathroom Remodeling and Repair", "/new/mrh-washroom-glass-bathtub-desktop-624x322-rs.webp"),
make("Vanity and Bathroom Mirror Installation", "/new/mrh-mirrors-desktop-624x322-rs.webp"),
make("Tub Enclosure Installation and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.47 AM (3).jpeg"),
make("Bathtub Repair and Replacement", "/new/WhatsApp Image 2026-02-04 at 9.39.48 AM (2).jpeg"),
make("Walk In Tub Installation and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Shower Tile Installation and Repair", "/new/mrh_marble_bathroom_shower_sink_glassdoor_desktop_656x371.webp")
],

"Kitchen": [
make("Kitchen Remodeling and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Kitchen Backsplash Installation", "/new/mrh-stovetop-desktop-624x322-rs.webp"),
make("Cabinet Installation and Repair", "/new/mrh-hand-drawer-pulls-desktop-624x322-rs.webp"),
make("Countertop Installation and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.46 AM (3).jpeg"),
make("Custom Kitchen Island Installation", "/new/WhatsApp Image 2026-02-04 at 9.39.43 AM.jpeg")
],

"Rooms and Other Services": [
make("Bedroom Remodeling and Repair", "/new/mrh-room-window-door-desktop-624x322-rs.webp"),
make("Basement Remodeling and Repair", "/new/mrh-basement-desktop-624x322.webp"),
make("Attic Remodeling and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Dining Room Remodeling and Repair", "/new/mrh-home-light-desktop-656x371-rs.webp"),
make("Home Office Remodeling and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Living Room Remodeling and Repair", "/new/mrh-home-light-desktop-656x371-rs.webp"),
make("Safety and Mobility Services", "/new/mrh-hand-handrail-wall-desktop-624x322-rs.webp"),
make("Acoustic Ceiling Removal", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Ceiling Texture Service", "/new/mrh-home-light-desktop-656x371-rs.webp"),
make("Popcorn Ceiling Removal", "/new/mrh-home-light-desktop-656x371-rs.webp")
],

"More Local Remodeling Services": [
make("Other Remodeling Services", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg")
]

}
},

/* =========================================================
   WINDOW AND DOOR SERVICES
========================================================= */
{
label: "Window and Door Services",
slug: "window-and-door-services",
image:"/icon/mrh-frontdoor-entrance-windows-desktop-624x322-rs.webp",
desc:"Expert window and door solutions.",
icon: "/icon/mrh_window_door_red_icon_55x55.svg",

sections: {

"Doors": [
make("Patio Door Installation and Repair", "/new/mrh-glassdoors-desktop-624x322-rs.webp"),
make("Screen Door Installation and Repair", "/new/mrh-yellowhouse-desktop-624x322-rs.webp"),
make("Sliding Door Installation and Repair", "/new/mrh-sliding-door-desktop-624x322-rs.webp"),
make("Pet Door Installation and Repair", "/new/mrh-petdoor-desktop-624x322-rs.webp"),
make("Pocket Door Installation and Repair", "/new/mrh-pocketdoor-desktop-624x322-rs.webp"),
make("Barn Door Installation and Repair", "/new/mrh-home-interiorlight-desktop-656x371-rs.webp"),
make("Exterior Door Installation and Replacement", "/new/WhatsApp Image 2026-02-04 at 9.39.36 AM.jpeg"),
make("Keyless Entry Installation and Replacement", "/new/WhatsApp Image 2026-02-04 at 9.39.36 AM.jpeg"),
make("Storefront Door and Window Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.36 AM.jpeg"),
make("Storm Door Installation and Replacement", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Door Closer Installation and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.36 AM.jpeg"),
make("Interior Door Installation and Repair", "/new/WhatsApp Image 2026-02-04 at 9.39.36 AM.jpeg")
],

"Windows": [
make("Window Installation and Replacement", "/new/mrh-window-house-656x371-rs.webp"),
make("Window Screen Repair and Replacement", "/new/mrh_screens_closeup_metalnet_whiteframe_desktop_656x371.webp"),
make("Window Screen Installation", "/new/WhatsApp Image 2026-02-04 at 9.39.49 AM (3).jpeg")
],

"More Window and Door Services":[
make("Other Window and Door Services", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg")
]

}
},

/* =========================================================
   SAFETY AND MOBILITY
========================================================= */
{
label: "Safety and Mobility Services",
slug: "safety-and-mobility-services",
image:"/icon/mrh-wheelchairramp-modern-building-desktop-624x322-rs.webp",
desc:"Accessibility improvements for safe living.",
icon: "/icon/mrh_shield_red_icon_55x55.svg",

sections: {

"Bath and Bedroom":[
make("Cabinet Door and Drawer Pull Upgrades", "/new/mrh-hand-drawer-pulls-desktop-624x322-rs (1).webp"),
make("Shelf and Closet Rod Lowering Service", "/new/mrh_shelves_room_desktop_624x322_rs.webp"),
make("Grab Bar Installation and Replacement", "/new/mrh_steelhandle_handle_wall_desktop_624x322_rs.webp")
],

"Doors and Floors":[
make("Lever Door Handle Installation and Replacement", "/new/mrh-doorknob-lever-desktop-624x322-rs.webp"),
make("Doorway Widening Service", "/new/mrh-room-door-bushes-desktop-624x322-rs.webp"),
make("Interior Threshold Lowering Service", "/new/mrh-threshhold-desktop-624x322-rs.webp"),
make("Solid Surface Flooring Installation and Replacement", "/new/mrh_empty_room_double_painted_glass_doors_wood_floors_desktop_656x371.webp")
],

"Ramps and Railings":[
make("Handrail Installation and Replacement", "/new/mrh-staircase-naturalwood-handle-desktop-624x322_rs.webp"),
make("Ramp Installation and Replacement", "/new/mrh-wooden-wheelchair-ramp-desktop-624x322-rs.webp")
]

}
},

/* =========================================================
   ASSEMBLY SERVICE
========================================================= */
{
label:"Assembly Service",
slug:"assembly-service",
image:"/icon/mrh-screws-paper-tool-desktop-624x322-rs.webp",
desc:"Professional assembly services.",
icon:"/icon/mrh_assembly_service_red_icon_55x55.svg",

sections: {

"Sports Equipment":[
make("Bike Assembly", "/new/mrh_bike_assembly_desktop_656x371.webp")
],

"Furniture":[
make("Furniture Assembly", "/new/mrh-furniture-assembling-hand-desktop-624x322-rs.webp"),
make("Cabinet Assembly", "/new/mrh-assembly2-desktop-656x371-rs.webp")
],

"Patio and Yard":[
make("Grill Assembly", "/new/mrh-pergola2-desktop-656x371-rs.webp"),
make("Fence Assembly", "/new/WhatsApp Image 2026-02-04 at 9.52.57 AM (2).jpeg")
]

}
},

/* =========================================================
   FLOOR INSTALLATION AND REPAIR
========================================================= */
{
label:"Floor Installation and Repair",
slug:"floor-installation-and-repair",
image:"/icon/mrh-employee-laying-woodenpanel-desktop-624x322-rs.webp",
desc:"Expert flooring solutions.",
icon:"/icon/mrh_floor_install_repair_red_icon_55x55.svg",

sections: {

"Tile and Vinyl":[
make("Floor Tile Installation and Repair", "/new/mrh-floortile-holding-desktop-624x322-rs.webp"),
make("Linoleum Installation and Repair", "/new/mrh-woodenfloor-desktop-624x322-rs.webp"),
make("Vinyl Flooring Installation and Repair", "/new/mrh-worker-vinyl-floor-desktop-624x322-rs.webp")
],

"Wood and Laminate":[
make("Laminate Floor Installation and Repair", "/new/mrh-vinyl-wood-desktop-624x322-rs.webp"),
make("Wood Floor Installation and Repair", "/new/mrh_wooden_floor_656x371_rs.webp")
],

"More Local Floor Installation and Repair Services":[
make("Other Floor Installation and Repair Services", "/new/mrh_wooden_floor_656x371_rs.webp")
]

}
},

/* =========================================================
   PAINTING
========================================================= */
{
label:"Painting",
slug:"painting",
image:"/icon/mrh-employeehand-painting-woodenwall-desktop-624x322-rs.webp",
desc:"Interior and exterior painting.",
icon:"/icon/mrh_paint_roller_red_icon_55x55.svg",

sections: {

"Exterior Painting":[
make("Fence Painting and Staining", "/new/mrh-woodenwall-brush-painting-desktop-624x322-rs.webp"),
make("Deck Painting and Staining", "/new/mrh-paint-tin-brush-desktop-624x322-rs.webp"),
make("Brick Painting and Treatments", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Concrete Sealing and Staining", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Exterior Staining", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Garage Door Painting", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Vinyl Siding Painting", "/newmrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Pool Decks", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Shed Painting", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Trim Painting", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Window Painting", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp"),
make("Wood Siding Painting", "/new/mrh_paint_gun_spraying_wood_desktop_656x371.webp")
],

"Interior Painting":[
make("Cabinet Painting and Refinishing", "/new/mrh_painting_wall_desktop_656x371_rs.webp"),
make("Single Room Painting", "/new/mrh_painting_wall_desktop_656x371_rs.webp"),
make("Multiple Room Painting", "/new/mrh_painting_wall_desktop_656x371_rs.webp"),
make("Crown Molding and Trim Painting", "/new/mrh_painting_wall_desktop_656x371_rs.webp"),
make("Garage Floor Coating and Painting", "/new/mrh_painting_wall_desktop_656x371_rs.webp"),
make("Door Painting", "/new/mrh_painting_wall_desktop_656x371_rs.webp"),
make("Other Painting Services", "/new/mrh_brush_interior_wall_painting_desktop-hero_624x322.webp")
],

"Wallpaper":[
make("wallpaper Installation", "/new/mrh-painting-blue-desktop-656x371-rs.webp"),
make("Wallpaper Removal", "/new/mrh-painting-blue-desktop-656x371-rs.webp")
]

}
},

/* =========================================================
   CARPENTRY
========================================================= */
{
label:"Carpentry Installation and Repair",
slug:"carpentry-installation-and-repair",
image:"/icon/mrh-door-molding-desktop-624x322-rs.webp",
desc:"Professional carpentry work.",
icon:"/icon/mrh_handsaw_red_icon_55x55.svg",

sections: {

"Exterior Carpentry":[
make("Deck and Patio Construction", "/new/mrh-setting-woodenframe-desktop-656x371-rs.webp"),
make("Siding Installation and Repair", "/new/mrh-plastic-panel-hand-desktop-624x322-rs.webp"),
make("Deck and Patio Repair and Service", "/new/mrh-setting-woodenframe-desktop-656x371-rs.webp"),
make("Handrail and Stairs Installation", "/new/mrh-woodensteps-wall-desktop-624-322-rs.webp"),
make("Fence Installation and Repair", "/new/mrh-wall-wooden-desktop-656x371-rs.webp"),
make("Wood Rot Repair", "/new/mrh_rotten_wood_houseporch_desktop_624x322_rs.webp")
],

"Interior Carpentry":[
make("Crown Molding Installation and Repair", "/new/mrh-wall-design-desktop-656x371-rs.webp"),
make("Wainscoting Installation and Repair", "/new/mrh_room_interior_wainscoting_wooden_floor_desktop-hero_624x322.webp"),
make("Wall Installation and Repair", "/new/mrh-wall-design-desktop-656x371-rs.webp"),
make("Custom Bookcases", "/new/mrh-wall-design-desktop-656x371-rs.webp"),
make("Custom Shelving", "/new/mrh-wall-design-desktop-656x371-rs.webp"),
make("Custom Cabinets", "/new/mrh-wall-design-desktop-656x371-rs.webp"),
make("Custom Mantels", "/new/mrh-wall-design-desktop-656x371-rs.webp"),
make("Mantel Installation", "/new/mrh-wall-design-desktop-656x371-rs.webp")
],

"Other Carpentry":[
make("Carpentry Construction and Installation", "/new/mrh-room-chair-hanginglight-shelves-desktop-624x322-rs.webp"),
make("Carpentry Remodeling and Repair", "/new/mrh-room-chair-hanginglight-shelves-desktop-624x322-rs.webp")
],

"More Local Carpentry Services":[
make("Other Carpentry Services", "/new/mrh-room-chair-hanginglight-shelves-desktop-624x322-rs.webp")
]

}
},

/* =========================================================
   PLUMBING
========================================================= */
{
label:"Plumbing",
slug:"plumbing",
image:"/icon/mrh-faucet-waterdrop-desktop-624x322-rs.webp",
desc:"Reliable plumbing fixes.",
icon:"/icon/mrh_plumbing_revised_red_icon_55x55.svg",

sections: {

"Repair and Replace":[
make("Faucet Repair and Replacement", "/new/mrh-pipe-working-desktop-656x371-rs.webp"),
make("Sink Repair and Replacement", "/new/mrh_pipe_washbase_656x371-2.webp"),
make("Sump Pump Repair and Replacement", "/new/mrh-submersible-water-pump-desktop-624x322-rs.webp"),
make("Toilet Repair and Replacement", "/new/mrh-holding-wrench-opentank-desktop-624x322-rs.webp"),
make("Basement Drain Repair and Replacement", "/new/mrh-pipefitting-worker-desktop-656x371-rs.webp"),
make("Drain Repair and Replacement", "/new/mrh-pipefitting-worker-desktop-656x371-rs.webp"),
make("Water Valve Repair and Replacement", "/new/mrh-pipefitting-worker-desktop-656x371-rs.webp")
],

"Other Plumbing Services":[
make("Pipe Insulation", "/new/mrh-pipe-insulation-desktop-624x322-rs.webp"),
make("Plumbing leak Detection", "/new/mrh-washbase-waterpipe-desktop-656x371-rs.webp")
]

}
},

/* =========================================================
   LIGHTING AND ELECTRICAL
========================================================= */
{
label:"Lighting And Electrical",
slug:"lighting-and-electrical",
image:"/icon/mrh-employee-repairing-outdoor-desktop-624x322-rs.webp",
desc:"Electrical installation services.",
icon:"/icon/mrh_lighting_electrical_red_icon_55x55.svg",

sections: {

"Lighting":[
make("Light Fixture Installation and Repair", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Light Dimmer Switch Installation and Service", "/new/mrh-switch-stonetiledwall-desktop-624x322-rs.webp"),
make("Light Timer Installation and Service", "/new/mrh-socketwithtimer-desktop-624x322-rs.webp"),
make("Motion Sensor Installation and Service", "/new/mrh-camera-outdoor-desktop-624x322-rs.webp"),
make("Accent Lighting Installation and Replacement", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Cabinet Lighting Installation and Replacement", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Deck Lighting Installation and Service", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Energy Efficient Lighting Replacement and Retrofit", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Light Sensor Installation and Service", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Lighting Installation", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Occupancy Sensor Installation and Service", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Patio Lighting Installation and Service", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Recessed Lighting Installation and Service", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Specialty Lighting Installation", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp"),
make("Track Lighting Services Installation and Replacement", "/new/mrh-dinein-kitchen-desktop-656x371-rs.webp")
],

"Carbon Monoxide and Smoke Detector":[
make("Carbon Monoxide Detector Installation and Replacement", "/new/mrh-fitting-light-desktop-656x371-rs.webp"),
make("Smoke Detector Inspection", "/new/mrh-fitting-light-desktop-656x371-rs.webp"),
make("Smoke Detector Installation and Replacement", "/new/mrh-fitting-light-desktop-656x371-rs.webp"),
make("Smoke Detector Repair and Service", "/new/mrh-fitting-light-desktop-656x371-rs.webp")
],

"Home Automation and Smart Home":[
make("Lighting Control Installation and Repair", "/new/mrh-thermostat-temperaturesensor-desktop-656x371-rs.webp"),
make("Smart Home Device Installation and Repair", "/new/mrh-thermostat-temperaturesensor-desktop-656x371-rs.webp")
],

"Electrical Services and Installation":[
make("Ballast and Light Bulb Installation and Replacement", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp"),
make("Light Switch Installation and Repair", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp"),
make("Outlet Installation and Replacement", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp"),
make("Outlet Repair and Service", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp"),
make("Outside Outlet Installation and Service", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp"),
make("Safety Outlet Installation and Replacement", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp"),
make("Tamper Resistant Outlet Installation and Service", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp"),
make("Wall Switch and Socket Repair", "/new/mrh-lightfitting-tubelight-desktop-656x371-rs.webp")
]

}
},

/* =========================================================
   OTHER SERVICES
========================================================= */
{
label:"Other Services",
slug:"other-services",
image:"/icon/mrh-stoneslab-cleaning-pressurecleaner-desktop-624x322-rs.webp",
desc:"General home services.",
icon:"/icon/mrh_other_services_red_icon_55x55.svg",

sections: {

"Other":[
make("Appliance Repair and Service", "/new/mrh-kitchen-desktop-624x322-rs.webp"),
make("Landscape Design and Installation", "/new/WhatsApp Image 2026-02-04 at 9.53.04 AM (1).jpeg"),
make("Dryer Vent Service and Repair", "/new/WhatsApp Image 2026-02-04 at 9.53.07 AM.jpeg"),
make("Garage Door Services", "/new/mrh-shutter-motor-desktop-656x371-rs.webp"),
make("Glass Services", "/new/WhatsApp Image 2026-02-04 at 9.39.34 AM.jpeg"),
make("Glide Out Shelving", "/new/mrh-slide-shelf-desktop-624x322.webp"),
make("Power and Pressure Washing", "/new/mrh-stoneslab-cleaning-pressurecleaner-desktop-624x322-rs.webp"),
make("Attic Insulation and Repairs", "/new/folding-attic-stairs-closeup-hardware.webp"),
make("Contents Services", "/new/mrh_fire_damage3_desktop_272x180_rs.webp"),
make("Holiday Lighting Installation", "/new/WhatsApp Image 2026-02-04 at 9.39.36 AM (1).jpeg")
]

}
}

]

export const COMMERCIEAL_SERVICES: CommercialServices[] = [
  {
    title: "Financial Institutions and Banks",
    shortDescription: "Professional handyman services for banks and financial institutions including repairs, security-focused upgrades, and facility maintenance.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "financial-institutions-banks"
  },
  {
    title: "Healthcare Facilities and Hospitals",
    shortDescription: "Specialized handyman services for healthcare facilities, hospitals, and clinics with a focus on safety, compliance, and minimal disruption.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "healthcare-facilities-hospitals"
  },
  {
    title: "Hotels and Hospitality",
    shortDescription: "Hospitality-focused repair and maintenance services for hotels, resorts, and lodging facilities to maintain guest-ready standards.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "hotels-hospitality"
  },
  {
    title: "Manufacturing Facilities",
    shortDescription: "Maintenance and repair services for manufacturing environments including structural repairs, safety upgrades, and workspace improvements.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "manufacturing"
  },
  {
    title: "Municipal and Government Buildings",
    shortDescription: "Reliable handyman services for municipal and government properties including offices, public buildings, and community facilities.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "municipal-government"
  },
  {
    title: "Restaurants and Food Services",
    shortDescription: "Commercial repair services for restaurants and food service businesses including dining areas, kitchens, and customer-facing spaces.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "restaurants-food-services"
  },
  {
    title: "Retail and Shopping Malls",
    shortDescription: "Retail property maintenance services for shopping centers and malls including storefront repairs, signage, and interior improvements.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "retail-shopping-malls"
  },
  {
    title: "Small Business and Corporate Offices",
    shortDescription: "Flexible handyman services for small businesses and corporate offices covering repairs, upgrades, and ongoing maintenance needs.",
    iconName: "/icon/mrh_drywall_red_icon.svg",
    slug: "small-business-corporate-offices"
  }
]

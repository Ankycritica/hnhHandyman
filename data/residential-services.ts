export type ResidentialService = {
  label: string,
  slug: string,
  icon: string,
  image:string,
  desc:string,
  sections: Record<string, string[]>,
}

export type CommercialServices ={
  title:string,
  shortDescription:string,
  iconName:string,
  slug:string,
}
export const RESIDENTIAL_SERVICES: ResidentialService[] = [
   {
    label: "Repair",
    slug: "repair",
    image:"/new/WhatsApp Image 2026-02-04 at 9.39.44 AM.jpeg",
    desc:"Homes that aren't maintained can quickly degrade, bringing down their aesthetic and value. From the exterior of your home to your closets, keeping up with home repairs is easy with HnHHandyman® by your side. Our convenient, one-call solution for house repair jobs makes getting it all done easier.",
    icon: "/icon/mrh_repair_revised_red_icon_55x55.svg",
    sections: {
        "Interior Repair":  [
          "TV Wall Mount Installation",
          "Shelving Installation",
          "Ceiling Fan Installation",
          "Child Proofing",
          "Picture Hanging",
          "Closet Shelving",
          "Bathroom Caulking",
          "Exhaust Fan Installation and Repair",
          "Furniture Painting and Staining",
          "Curtains and Drapes Installation and Replacement",
          "Hanging Blinds Installation and Replacement",
        ],
        "Exterior Repair": [
          "Window Frame Repair",
          "Weatherproofing",
          "Debris Removal",
          "Gutter Installation and Repair",
          "Masonry and Concrete Services",
        ],
        "Garage Repair": [
          "Garage Storage and Organization",
          "Garage Shelving",
        ],
        "More Local Repair Services":[
          "Other Repair Services",
        ],
      },
  },
  {
    label: "Drywall And Ceiling",
    slug: "drywall-and-ceiling",
    image:"/icon/mrh_drywall-ceiling-service_sheetrock_hero_desktop_1440x634.webp",
    desc:"Keeping your walls and ceilings in great condition is easy with HnHHandyman®. Whether you're building out a new space or upgrading your home's interior, our skilled professionals deliver smooth, seamless drywall and ceiling installations tailored to your needs. From basic wall finishing to custom ceiling features, we provide high-quality workmanship you can trust.",
    icon: "/icon/mrh_drywall_red_icon.svg",
    sections: {
      "Walls and Ceilings": [
        "Drywall Patching and Repair",
        "Drywall Finishing",
        "Drywall Installation",
        "Wall Finishing",
        "Ceiling Repair and Replacement",
      ],
    }
  },
  {
    label: "Remodel",
    slug: "remodel",
    image:"/icon/mrh-employee-client-kitchen-talking-desktop-624x322-rs.webp",
    desc:"Don't just dream about your perfect home—bring it to life with HnHHandyman®'s professional home remodeling services. For over 25 years, we've been the trusted choice for homeowners looking to upgrade their kitchens, bathrooms, basements, and more.",
    icon: "/icon/mrh_remodel_red_icon_55x55.svg",
    sections: {
      "Bathroom": [
          "Bathroom Remodeling and Repair",
          "Vanity and Bathroom Mirror Installation",
          "Tub Enclosure Installation and Repair",
          "Bathtub Repair and Replacement",
          "Walk In Tub Installation and Repair",
          "Shower Tile Installation and Repair",
      ],
      "Kitchen": [
          "Kitchen Remodeling and Repair",
          "Kitchen Backsplash Installation",
          "Cabinet Installation and Repair",
          "Countertop Installation and Repair",
          "Custom Kitchen Island Installation",
      ],
      "Rooms and Other Services": [
          "Bedroom Remodeling and Repair",
          "Basement Remodeling and Repair",
          "Attic Remodeling and Repair",
          "Dining Room Remodeling and Repair",
          "Home Office Remodeling and Repair",
          "Living Room Remodeling and Repair",
          "Safety and Mobility Services",
          "Acoustic Ceiling Removal",
          "Ceiling Texture Service",
          "Popcorn Ceiling Removal",
      ],
      "More Local Remodeling Services": [
          "Other Remodeling Services",
      ],
    },
  },
  {
    label: "Window and Door Services",
    slug: "window-and-door-services",
    image:"/icon/mrh-frontdoor-entrance-windows-desktop-624x322-rs.webp",
    desc:"Damaged or outdated windows and doors can lead to drafts, higher energy bills, and reduced home value. With HnHHandyman® by your side, keeping them in the best condition is easy. We ensure expert repairs, replacements, and installations so you can maintain a functional property.",
    icon: "/icon/mrh_window_door_red_icon_55x55.svg",
    sections: {
      "Doors": [
        "Patio Door Installation and Repair",
        "Screen Door Installation and Repair",
        "Sliding Door Installation and Repair",
        "Pet Door Installation and Repair", 
        "Pocket Door Installation and Repair",
        "Barn Door Installation and Repair",
        "Exterior Door Installation and Replacement",
        "Keyless Entry Installation and Replacement",
        "Storefront Door and Window Repair",
        "Storm Door Installation and Replacement",
        "Door Closer Installation and Repair",
        "Interior Door Installation and Repair",
      ],
      "Windows": [
        "Window Installation and Replacement",  
        "Window Screen Repair and Replacement",
        "Window Screen Installation",
      ],
      "More Window and Door Services": [
        "Other Window and Door Services",
      ],
    },
  },
  {
    label: "Safety and Mobility Services",
    slug: "safety-and-mobility-services",
    image:"/icon/mrh-wheelchairramp-modern-building-desktop-624x322-rs.webp",
    desc:"Everyone deserves a home that is safe, comfortable, and easy to navigate. Whether you need grab bars, wheelchair ramps, or other accessibility modifications, HnHHandyman® is here to help. Our trusted professionals provide expert installations to improve independence.",
    icon: "/icon/mrh_shield_red_icon_55x55.svg",
    sections: {
      "Bath and Bedroom": [
        "Cabinet Door and Drawer Pull Upgrades",
        "Shelf and Closet Rod Lowering Service",
        "Grab Bar Installation and Replacement",
      ],
      "Doors and Floors": [
        "Lever Door Handle Installation and Replacement",
        "Doorway Widening Service",
        "Interior Threshold Lowering Service",
        "Solid Surface Flooring Installation and Replacement",
      ],
      "Ramps and Railings": [
        "Handrail Installation and Replacement",
        "Ramp Installation and Replacement",
      ],
    },
  },
  {
    label: "Assembly Service",
    slug: "assembly-service",
    image:"/icon/mrh-screws-paper-tool-desktop-624x322-rs.webp",
    desc:"Successful furniture assembly shouldn't require a background in construction or take hours of your time to complete. There is an easier way to get your furniture assembled while saving your time for more enjoyable endeavors—HnHHandyman®!",
    icon: "/icon/mrh_assembly_service_red_icon_55x55.svg",
    sections: {
      "Sports Equipment": [
        "Bike Assembly",
      ],
      "Furniture": [
        "Furniture Assembly",
        "Cabinet Assembly",
      ],
      "Patio and Yard": [
        "Grill Assembly",
        "Fence Assembly",
      ],
    },
  },
  {
    label: "Floor Installation and Repair",
    slug: "floor-installation-and-repair",
    image:"/icon/mrh-employee-laying-woodenpanel-desktop-624x322-rs.webp",
    desc:"Could your floors use an upgrade? Whether you want to install new flooring or repair what you have, the experts at your local Mr. Handyman® can help. Our team of experienced local professionals has the expertise and tools needed to install a brand-new floor or repair the one you already have.",
    icon: "/icon/mrh_floor_install_repair_red_icon_55x55.svg",
    sections: {
      "Tile and Vinyl": [
        "Floor Tile Installation and Repair",
        "Linoleum Installation and Repair",
        "Vinyl Flooring Installation and Repair",
      ],
      "Wood and Laminate": [
        "Laminate Floor Installation and Repair",
        "Wood Floor Installation and Repair",
      ],
      "More Local Floor Installation and Repair Services": [
        "Other Floor Installation and Repair Services",
      ],
    },
  },
  {
    label: "Painting",
    slug: "painting",
    image:"/icon/mrh-employeehand-painting-woodenwall-desktop-624x322-rs.webp",
    desc:"A fresh coat of paint can breathe life into any room, exterior, or piece of furniture. Whether you have an indoor or outdoor paint job, Mr. Handyman® can help. We know what makes a great paint job. And it's our mission to deliver the level of detail and professionalism that you expect and deserve.",
    icon: "/icon/mrh_paint_roller_red_icon_55x55.svg",
    sections: {
      "Exterior Painting": [
        "Fence Painting and Staining",
        "Deck Painting and Staining",
        "Brick Painting and Treatments",
        "Concrete Sealing and Staining",
        "Exterior Staining",
        "Garage Door Painting",
        "Vinyl Siding Painting",
        "Pool Decks",
        "Shed Painting",
        "Trim Painting",
        "Window Painting",
        "Wood Siding Painting",
      ],
      "Interior Painting": [
        "Cabinet Painting and Refinishing",
        "Single Room Painting",
        "Multiple Room Painting",
        "Crown Molding and Trim Painting",
        "Garage Floor Coating and Painting",
        "Door Painting",
        "Other Painting Services",
      ],
      "Wallpaper": [
        "wallpaper Installation",
        "Wallpaper Removal",
      ],
    },
  },
  {
    label: "Carpentry Installation and Repair",
    slug: "carpentry-installation-and-repair",
    image:"/icon/mrh-door-molding-desktop-624x322-rs.webp",
    desc:"HnHHandyman® is the perfect choice for the best handyman carpentry services near you. When you need custom carpentry repair or installation, we can help you get it done right the first time. Our expert service professionals can build, construct, and install various carpentry projects.",
    icon: "/icon/mrh_handsaw_red_icon_55x55.svg",
    sections: {
      "Exterior Carpentry": [
        "Deck and Patio Construction",
        "Siding Installation and Repair",
        "Deck and Patio Repair and Service",
        "Handrail and Stairs Installation",
        "Fence Installation and Repair",
        "Wood Rot Repair",
      ],
      "Interior Carpentry": [
        "Crown Molding Installation and Repair",
        "Wainscoting Installation and Repair",
        "Wall Installation and Repair",
        "Custom Bookcases",
        "Custom Shelving",
        "Custom Cabinets",
        "Custom Mantels",
        "Mantel Installation",
      ],
      "Other Carpentry": [
        "Carpentry Construction and Installation",
        "Carpentry Remodeling and Repair",
      ],
      "More Local Carpentry Services": [
        "Other Carpentry Services",
      ],
    },
  },
  {
    label: "Plumbing",
    slug: "plumbing",
    image:"/icon/mrh-faucet-waterdrop-desktop-624x322-rs.webp",
    desc:"Leaky pipes and faucets can waste a lot of water–and money–if left alone. A professional plumber handyman from HnHHandyman® provides crucial services, including faucet repair, toilet replacement, pipe insulation, and more. No job is too big or too small for your local HnHHandyman.",
    icon: "/icon/mrh_plumbing_revised_red_icon_55x55.svg",
    sections: {
      "Repair and Replace": [
        "Faucet Repair and Replacement",
        "Sink Repair and Replacement",
        "Sump Pump Repair and Replacement",
        "Toilet Repair and Replacement",
        "Basement Drain Repair and Replacement",
        "Drain Repair and Replacement",
        "Water Valve Repair and Replacement",
      ],
      "Other Plumbing Services": [
        "Pipe Insulation",
        "Plumbing leak Detection",
      ],
    },
  },
  {
    label: "Lighting And Electrical",
    slug: "lighting-and-electrical",
    image:"/icon/mrh-employee-repairing-outdoor-desktop-624x322-rs.webp",
    desc:"HnHHandyman® is your one-stop resource for electrical repairs, installations, and upgrades. Looking to update your electric panel or add smart home wiring and devices? No matter your electrical needs, your local HnHHandyman has the expertise and experience to do the job right the first time.",
    icon: "/icon/mrh_lighting_electrical_red_icon_55x55.svg",
    sections: {
      "Lighting": [
        "Light Fixture Installation and Repair",
        "Light Dimmer Switch Installation and Service",
        "Light Timer Installation and Service",
        "Motion Sensor Installation and Service",
        "Accent Lighting Installation and Replacement",
        "Cabinet Lighting Installation and Replacement",
        "Deck Lighting Installation and Service",
        "Energy Efficient Lighting Replacement and Retrofit",
        "Light Sensor Installation and Service",
        "Lighting Installation",
        "Occupancy Sensor Installation and Service",
        "Patio Lighting Installation and Service",
        "Recessed Lighting Installation and Service",
        "Specialty Lighting Installation",
        "Track Lighting Services Installation and Replacement",
      ],
      "Carbon Monoxide and Smoke Detector": [

          "Carbon Monoxide Detector Installation and Replacement",
          "Smoke Detector Inspection",
          "Smoke Detector Installation and Replacement",
          "Smoke Detector Repair and Service",
      ],
      "Home Automation and Smart Home": [
          "Lighting Control Installation and Repair",
          "Smart Home Device Installation and Repair",
      ],
      "Electrical Services and Installation":[
          "Ballast and Light Bulb Installation and Replacement",
          "Light Switch Installation and Repair",
          "Outlet Installation and Replacement",
          "Outlet Repair and Service",
          "Outside Outlet Installation and Service",
          "Safety Outlet Installation and Replacement",
          "Tamper Resistant Outlet Installation and Service",
          "Wall Switch and Socket Repair",
      ],
    },  
  },
  {
    label: "Other Services",
    slug: "other-services",
    image:"/icon/mrh-stoneslab-cleaning-pressurecleaner-desktop-624x322-rs.webp",
    desc:"Need siding repairs, landscape design, dryer vent cleaning, garage door fixes, glass work, shelving installation, power washing, attic insulation, or fire and water damage solutions? HnHHandyman® offers a wide range of home services specially designed for your needs—and added comfort.",
    icon: "/icon/mrh_other_services_red_icon_55x55.svg",
    sections: {
      "Other": [
        "Appliance Repair and Service",
        "Landscape Design and Installation",
        "Dryer Vent Service and Repair",
        "Garage Door Services",
        "Glass Services",
        "Glide Out Shelving",
        "Power and Pressure Washing",
        "Attic Insulation and Repairs",
        "Contents Services",
        "Holiday Lighting Installation",],
    },
  },
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

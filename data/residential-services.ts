export type ResidentialService = {
  label: string
  slug: string
  icon: string
  sections: Record<string, string[]>
}

export const RESIDENTIAL_SERVICES: ResidentialService[] = [
   {
    label: "Repair",
    slug: "repair",
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
    icon: "/icon/mrh_other_services_red_icon_55x55.svg",
    sections: {
      "": [
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

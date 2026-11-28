import { company } from './company';
import { engineeringServices } from './expansion';

export const pages = [
  {
    "slug": "about",
    "label": "Company",
    "heading": "Engineering with purpose.",
    "intro": company.profile,
    "sections": [
      [
        "Our beginnings",
        "Established in 2014 in Dhaka, Bangladesh, GPE was founded by a team of highly experienced professional engineers."
      ],
      [
        "Our expertise",
        "Our engineers help clients define load requirements and select equipment for substations, standby power, distribution, industrial machinery and thermal systems."
      ],
      [
        "Our approach",
        "We start with the site and how it operates. Grid availability, backup priorities and the installation environment inform equipment selection and the scope of engineering work."
      ],
      [
        "Our portfolio",
        "Explore electrical, mechanical and thermal engineering equipment, including substations, standby power, solar systems, industrial machinery and thermal systems."
      ],
      ["Engineering and installation", "Our scope covers design, single-line diagrams, bills of quantities, resistance testing and turnkey electromechanical installation."],
      ["Renewable energy", "We plan grid-connected, off-grid and hybrid solar projects and help specify modules, installation accessories and portable power equipment."]
    ]
  },
  {
    "slug": "services",
    "label": "Scope of work",
    "heading": "From equipment to systems.",
    "intro": "Explore the engineering scope for industrial electrical and mechanical infrastructure.",
    "sections": [
      [
        "Substation equipment",
        "Transformers, HV and LV panels and power factor correction."
      ],
      [
        "Generator systems",
        "Standby and prime power applications."
      ],
      [
        "Busbar trunking",
        "Modular power distribution."
      ],
      [
        "Air compressors",
        "Industrial compressed air."
      ],
      [
        "Vacuum solutions",
        "Process vacuum equipment."
      ],
      [
        "Mechanical transmission",
        "Gearboxes, geared motors and fluid couplings."
      ],
      [
        "Distribution boards",
        "Main and sub distribution."
      ],
      [
        "Control panels",
        "MCC, ATS, synchronization and customized control."
      ],
      [
        "Cable trays",
        "Cable routing and supports."
      ],
      [
        "Cooling towers",
        "Industrial heat rejection."
      ],
      [
        "Heat exchangers",
        "Thermal transfer systems."
      ],
      [
        "Ventilation",
        "Air movement and extraction."
      ],
      [
        "Lightning protection",
        "Protection system requirements."
      ],
      [
        "Fire fighting",
        "Facility fire protection requirements."
      ],
      [
        "Room canopy systems",
        "Enclosure and canopy requirements."
      ],
      [
        "Industrial tools",
        "Assembly and production tooling."
      ],
      [
        "Generator overhauling",
        "Service and maintenance requirements."
      ],
      [
        "Electrical installation",
        "Equipment integration and electrical works."
      ],
      [
        "Mechanical installation",
        "Mechanical equipment integration."
      ],
      ...engineeringServices
    ]
  },
  {
    "slug": "solutions",
    "label": "Industrial solutions",
    "heading": "Systems that work together.",
    "intro": "Explore equipment by industrial application, from reliable power to controlled thermal environments.",
    "sections": [
      [
        "Manufacturing & production",
        "Electrical panels, compressed air, tools and mechanical drives."
      ],
      [
        "Infrastructure & buildings",
        "Transformers, busbar, standby generators and distribution."
      ],
      [
        "Food & process industries",
        "Vacuum, cooling and heat exchange applications."
      ],
      [
        "HVAC & thermal systems",
        "Cooling towers, ventilation, dry coolers and heat exchangers."
      ],
      ["Renewable energy", "On-grid, off-grid and hybrid solar systems, from rooftop photovoltaic arrays to portable backup power."]
    ]
  },
  {
    "slug": "resources",
    "label": "Resources & media",
    "heading": "Technical knowledge, organized.",
    "intro": "A dedicated destination for product documents, company updates and engineering resources.",
    "sections": [
      [
        "Product catalogues & datasheets",
        "Download Graphene Power Engineering equipment selection guides. Final model-specific datasheets are subject to supplier confirmation."
      ],
      [
        "News & updates",
        "Verified company announcements will appear here."
      ],
      [
        "Photos & video",
        "Approved project and equipment photography will appear here."
      ]
    ]
  }
];

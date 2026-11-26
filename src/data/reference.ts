export type Reference={brand:string;summary:string;facts:string[][];links:string[][];table:{headers:string[];rows:string[][]}|null;note:string};
export const referenceUrl="https://www.powerbreezebd.com/products/";
export const reference:Record<string,Reference>={
  "transformers": {
    "brand": "Powerbreeze reference",
    "summary": "Oil-filled power and distribution transformer configurations; free-breathing designs with conservators.",
    "facts": [
      [
        "Capacity",
        "Up to 20 MVA"
      ],
      [
        "Voltage class",
        "36 kV"
      ],
      [
        "Tap changer",
        "OLTC on power transformers"
      ],
      [
        "Distribution standard",
        "IEC 60076"
      ],
      [
        "Breather",
        "Silica gel / conservator"
      ]
    ],
    "links": [
      [
        "Transformer catalogue",
        "https://www.powerbreezebd.com/wp-content/uploads/2023/02/Transformers-Cataloge-Web.pdf"
      ]
    ],
    "table": null,
    "note": "The reference spells the power transformer standard FEC 60076 but identifies IEC 60076 for distribution transformers. Confirm the intended standard and rating."
  },
  "electrical-panels": {
    "brand": "Powerbreeze reference",
    "summary": "Switchgear and control assemblies for power distribution and motor operation.",
    "facts": [
      [
        "Voltage classes",
        "HV / LV"
      ],
      [
        "Power factor",
        "PFI plant"
      ],
      [
        "Motor control",
        "MCC"
      ],
      [
        "Distribution",
        "MDB / SDB"
      ],
      [
        "Control",
        "Synchronization and custom panels"
      ]
    ],
    "links": [
      [
        "Panel catalogue",
        "https://drive.google.com/file/d/1_4nZO5VcVNEHk8F8vb1Ms365prrJ58wp/view?usp=sharing"
      ]
    ],
    "table": null,
    "note": ""
  },
  "cable-trays": {
    "brand": "Powerbreeze reference",
    "summary": "Five cable tray designs with dimensional and finish options from the published brochure.",
    "facts": [
      [
        "Sheet tray finishes",
        "Pre-/mill galvanized, hot-dip galvanized, powder coated"
      ],
      [
        "Mesh finishes",
        "Electro-/hot-dip galvanized, stainless 304 / 316"
      ],
      [
        "Accessories",
        "Bends, junctions, dividers, covers, connectors; channel grommets; walkable floor supports"
      ],
      [
        "Manufacturing methods",
        "Chemical treatment, laser perforation, bending and coating"
      ]
    ],
    "links": [
      [
        "Cable tray catalogue PDF",
        "https://www.powerbreezebd.com/wp-content/uploads/2023/02/Cable-Tray-Catalouge.pdf"
      ]
    ],
    "table": {
      "headers": [
        "Type",
        "Height (mm)",
        "Width (mm)",
        "Thickness (mm)",
        "Length (m)"
      ],
      "rows": [
        [
          "Perforated",
          "35, 50, 75, 100, 125, 150",
          "50, 75, 100, 125, 150, 200, 250, 300, 400, 450, 500, 600",
          "1.2–2.5",
          "2.4"
        ],
        [
          "Ladder",
          "50, 75, 100, 125, 150, 200",
          "150, 200, 300, 400, 450, 500, 600, 800, 1000",
          "1.2–2.5",
          "2.4"
        ],
        [
          "Channel",
          "25, 35, 50",
          "50, 60, 75, 100",
          "0.8–1.2",
          "2.4"
        ],
        [
          "Walkable",
          "100, 110",
          "200, 300, 400, 500, 600",
          "2–4",
          "2.4"
        ],
        [
          "Wire mesh",
          "50, 75, 100, 150",
          "50, 100, 150, 200, 300, 400, 600",
          "5",
          "3"
        ]
      ]
    },
    "note": ""
  },
  "busbar-trunking": {
    "brand": "Gersan Electric / Turkey",
    "summary": "Modular busbar distribution equipment. The reference identifies Gersan as its supplier; individual ratings require manufacturer documentation.",
    "facts": [
      [
        "Reference brand",
        "Gersan Electric"
      ],
      [
        "Origin named",
        "Turkey"
      ],
      [
        "Model ratings",
        "Not specified on the reference page"
      ]
    ],
    "links": [
      [
        "Gersan manufacturer",
        "https://gersan.com.tr/"
      ]
    ],
    "table": null,
    "note": ""
  },
  "generators": {
    "brand": "mtu / Rolls-Royce Power Systems",
    "summary": "Diesel generating sets for standby, prime and continuous duty; designed for reliable power and efficient system integration.",
    "facts": [
      [
        "Headline range",
        "50–4,000 kVA"
      ],
      [
        "Generator set standard",
        "ISO 8528"
      ],
      [
        "Performance class",
        "G3 / ISO 8528-5"
      ],
      [
        "Emergency power standard referenced",
        "NFPA 110"
      ],
      [
        "Other standards cited",
        "NEMA MG1, BS 5000, DIN EN, IEC"
      ]
    ],
    "links": [
      [
        "mtu diesel portfolio",
        "https://www.mtu-solutions.com/seai/en/applications/power-generation/power-generation-products/diesel-generator-sets.html"
      ],
      [
        "mtu Series 4000",
        "https://www.mtu-solutions.com/trmea/en/applications/power-generation/power-generation-products/diesel-generator-sets/series/4000.html"
      ]
    ],
    "table": {
      "headers": [
        "Reference series",
        "Prime rating as listed"
      ],
      "rows": [
        [
          "mtu 0080 DS – 0225 DS",
          "30–94 kVA"
        ],
        [
          "mtu 1600 DS",
          "450–730 kVA"
        ],
        [
          "mtu 2000 DS G05/G06",
          "750–1,400 kVA"
        ],
        [
          "mtu 4000 DS",
          "1,600–4,000 kVA"
        ]
      ]
    },
    "note": "The headline starts at 50 kVA, but the first listed series starts at 30 kVA. Manufacturer Series 4000 data independently lists 1,600–4,000 kVA at 50 Hz. Confirm duty and actual model."
  },
  "air-compressors": {
    "brand": "Atlas Copco",
    "summary": "Standard and customized compressed-air systems. The reference describes equipment selection, installation and after-sales maintenance.",
    "facts": [
      [
        "Reference brand",
        "Atlas Copco"
      ],
      [
        "Service scope in reference",
        "Commissioning, troubleshooting, maintenance, AMC, health checks"
      ],
      [
        "Flow / pressure",
        "Select from manufacturer model data"
      ]
    ],
    "links": [
      [
        "Atlas Copco GA series",
        "https://www.atlascopco.com/en-bd/compressors/products/air-compressor/rotary-screw-compressor/ga-series"
      ],
      [
        "Compressor catalogue",
        "https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/brochures/CT%20Catalogue_Full.pdf"
      ]
    ],
    "table": null,
    "note": ""
  },
  "vacuum-pumps": {
    "brand": "Atlas Copco",
    "summary": "Vacuum technologies for forming, degassing, drying, refrigeration and packaging.",
    "facts": [
      [
        "Glass",
        "Moulding and container production"
      ],
      [
        "Plastics",
        "Extrusion, shaping, barrel degassing"
      ],
      [
        "Refrigeration",
        "Charging refrigerant; removing moisture and non-condensables"
      ],
      [
        "Electronics",
        "Handling and cleaning"
      ],
      [
        "Food",
        "Drying and packaging"
      ],
      [
        "Tobacco / other industries",
        "Production processes and drying"
      ]
    ],
    "links": [
      [
        "Atlas Copco GHS vacuum pumps",
        "https://www.atlascopco.com/en-bd/vacuum-solutions/products/oil-sealed-vacuum-pumps/oil-sealed-screw-pumps/ghs-vsd-plus-402-1002"
      ],
      [
        "Dry screw vacuum pumps",
        "https://www.atlascopco.com/en-bd/vacuum-solutions/products/dry-vacuum-pumps/dry-screw-vacuum-pumps"
      ]
    ],
    "table": null,
    "note": ""
  },
  "heat-exchangers": {
    "brand": "Thermowave / Thermofin",
    "summary": "Plate exchangers for HVAC, refrigeration, food, process industries and energy; additional thermal equipment includes dry coolers, remote radiators, evaporators, condensers and coils.",
    "facts": [
      [
        "Plate exchangers",
        "Thermowave"
      ],
      [
        "Cooling equipment",
        "Thermofin"
      ],
      [
        "Other brands named",
        "Alfa Laval (spelled Alfa Level in reference), GEA, HFM, APV, Funke"
      ],
      [
        "Selection",
        "Materials, frame, size and thermal duty"
      ]
    ],
    "links": [],
    "table": null,
    "note": "The reference mentions independent TÜV certification of Thermowave's testing procedure; this is not a Graphene certification."
  },
  "cooling-towers": {
    "brand": "Genius / Malaysia",
    "summary": "Round, square and rectangular cooling towers with compact, low-noise, high-temperature and dirty-water configurations.",
    "facts": [
      [
        "Special configuration",
        "Side discharge"
      ],
      [
        "Replacement",
        "Existing footprint matching"
      ],
      [
        "Maximum hot water, special design",
        "80 °C"
      ]
    ],
    "links": [
      [
        "Genius GPT catalogue PDF",
        "https://www.powerbreezebd.com/wp-content/uploads/2023/02/Genius-GPT-catalogue.pdf"
      ]
    ],
    "table": {
      "headers": [
        "Series",
        "Shape",
        "Capacity per cell (tons)"
      ],
      "rows": [
        [
          "GPT",
          "Round",
          "5–1,000"
        ],
        [
          "GD",
          "Square",
          "50–325"
        ],
        [
          "GDS",
          "Square",
          "350–1,500"
        ],
        [
          "GKS",
          "Rectangular",
          "350–1,500"
        ],
        [
          "GPC",
          "Rectangular",
          "100–320"
        ]
      ]
    },
    "note": ""
  },
  "mechanical-transmission": {
    "brand": "Premium Transmission",
    "summary": "Gear units, geared motors, fluid couplings and lift drive equipment.",
    "facts": [
      [
        "Reference brand",
        "Premium Transmission"
      ],
      [
        "Gear arrangements",
        "Helical, bevel helical, planetary, worm"
      ],
      [
        "Fluid couplings",
        "Constant and variable speed"
      ],
      [
        "Torque and ratios",
        "Model-specific; not listed on reference page"
      ]
    ],
    "links": [
      [
        "Manufacturer profile PDF",
        "https://www.premium-transmission.com/downloads/Company%20profile_Premium%20Transmission.pdf"
      ]
    ],
    "table": null,
    "note": ""
  },
  "ventilation": {
    "brand": "VENCO / Turkey",
    "summary": "Air movement, extraction, heat recovery and auxiliary control equipment.",
    "facts": [
      [
        "Air treatment",
        "Heat recovery ventilators / air handling units"
      ],
      [
        "Smoke control",
        "Jet, axial smoke exhaust and pressurization fans"
      ],
      [
        "Special environments",
        "Explosion-protected and shelter fans"
      ],
      [
        "Auxiliaries",
        "MCC, control systems, electric heaters, silencers and accessories"
      ]
    ],
    "links": [
      [
        "VENCO product catalogue",
        "https://venco.com.tr/?lang=en"
      ]
    ],
    "table": null,
    "note": ""
  },
  "industrial-tools": {
    "brand": "Atlas Copco Tools & Assembly Systems",
    "summary": "Industrial assembly tools; manufacturer catalogue also covers bolting, quality assurance, automation, material removal and workstation equipment.",
    "facts": [
      [
        "Reference brand",
        "Atlas Copco"
      ],
      [
        "Manufacturer categories",
        "Bolting, workstation, automation, QA, material removal"
      ],
      [
        "Torque and power",
        "Model-specific"
      ]
    ],
    "links": [
      [
        "Atlas Copco industrial tools",
        "https://www.atlascopco.com/en-bd/itba/products"
      ],
      [
        "Reference tools catalogue",
        "https://drive.google.com/file/d/179HJjS1kUOYkMM_PHKdF0OaSW98tj8b_/view?usp=share_link"
      ]
    ],
    "table": null,
    "note": ""
  }
};

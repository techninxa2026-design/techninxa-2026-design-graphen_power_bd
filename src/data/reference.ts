export type Reference={brand:string;summary:string;facts:string[][];links:string[][];table:{headers:string[];rows:string[][]}|null;note:string};
export const reference:Record<string,Reference>={
  "transformers": {
    "brand": "Industrial equipment",
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
    "links": [],
    "table": null,
    "note": "Indicative ranges for preliminary selection. Verify IEC 60076 applicability, tap changer configuration and guaranteed ratings with the selected manufacturer."
  },
  "electrical-panels": {
    "brand": "Industrial equipment",
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
    "links": [],
    "table": null,
    "note": ""
  },
  "cable-trays": {
    "brand": "Industrial equipment",
    "summary": "Five cable tray designs with dimensional and finish options for preliminary equipment selection.",
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
    "links": [],
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
    "summary": "Modular busbar distribution equipment. Individual ratings require manufacturer documentation. Gersan is an example manufacturer.",
    "facts": [
      [
        "Example manufacturer",
        "Gersan Electric"
      ],
      [
        "Manufacturer origin",
        "Turkey"
      ],
      [
        "Model ratings",
        "Confirm with selected manufacturer"
      ]
    ],
    "links": [],
    "table": null,
    "note": ""
  },
  "generators": {
    "brand": "mtu / Rolls-Royce Power Systems",
    "summary": "Diesel generating sets for standby, prime and continuous duty; designed for reliable power and efficient system integration.",
    "facts": [
      [
        "Indicative portfolio range",
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
        "Emergency power standard to consider",
        "NFPA 110"
      ],
      [
        "Other standards to consider",
        "NEMA MG1, BS 5000, DIN EN, IEC"
      ]
    ],
    "links": [],
    "table": {
      "headers": [
        "Equipment series",
        "Indicative prime rating"
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
    "note": "Series values are indicative and may vary by duty and frequency. The general range starts at 50 kVA, while the listed small series starts at 30 kVA; confirm exact model ratings."
  },
  "air-compressors": {
    "brand": "Atlas Copco",
    "summary": "Standard and customized compressed-air systems. Equipment selection, installation and maintenance should be specified for each project.",
    "facts": [
      [
        "Example manufacturer",
        "Atlas Copco"
      ],
      [
        "Typical service scope",
        "Commissioning, troubleshooting, maintenance, AMC, health checks"
      ],
      [
        "Flow / pressure",
        "Select from manufacturer model data"
      ]
    ],
    "links": [],
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
    "links": [],
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
        "Other example manufacturers",
        "Alfa Laval, GEA, HFM, APV, Funke"
      ],
      [
        "Selection",
        "Materials, frame, size and thermal duty"
      ]
    ],
    "links": [],
    "table": null,
    "note": "Verify product test records, materials, certifications and thermal performance with the selected manufacturer."
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
    "links": [],
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
        "Example manufacturer",
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
        "Model-specific; confirm with manufacturer"
      ]
    ],
    "links": [],
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
    "links": [],
    "table": null,
    "note": ""
  },
  "industrial-tools": {
    "brand": "Atlas Copco Tools & Assembly Systems",
    "summary": "Industrial assembly tools; manufacturer catalogue also covers bolting, quality assurance, automation, material removal and workstation equipment.",
    "facts": [
      [
        "Example manufacturer",
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
    "links": [],
    "table": null,
    "note": ""
  }
};

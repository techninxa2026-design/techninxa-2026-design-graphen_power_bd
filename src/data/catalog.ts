import { additions } from './expansion';

const originalProducts = [
  {
    "slug": "transformers",
    "name": "Transformers",
    "group": "Electrical",
    "description": "Power conversion for industrial distribution and substations.",
    "variants": [
      "Power transformers",
      "Oil-filled distribution transformers",
      "Dry-type cast-resin transformers"
    ],
    "specs": [
      "Rated capacity",
      "Primary and secondary voltage",
      "Cooling method",
      "Insulation class",
      "Installation environment"
    ],
    "number": "01"
  },
  {
    "slug": "electrical-panels",
    "name": "Electrical panels",
    "group": "Electrical",
    "description": "Control, protection and distribution equipment for electrical networks.",
    "variants": [
      "HV panels",
      "LV panels",
      "Power factor correction (PFI)",
      "Motor control centres (MCC)",
      "ATS panels",
      "Synchronizing panels",
      "MDB and SDB",
      "Custom control panels"
    ],
    "specs": [
      "Rated voltage",
      "Rated current",
      "Short-circuit withstand",
      "Ingress protection",
      "Control configuration"
    ],
    "number": "02"
  },
  {
    "slug": "cable-trays",
    "name": "Cable tray systems",
    "group": "Electrical",
    "description": "Structured cable routing and support for complex facilities.",
    "variants": [
      "Perforated trays",
      "Ladder trays",
      "Channel trays",
      "Walkable trays",
      "Wire mesh trays"
    ],
    "specs": [
      "Material",
      "Width and depth",
      "Thickness",
      "Finish",
      "Support spacing"
    ],
    "number": "03"
  },
  {
    "slug": "busbar-trunking",
    "name": "Busbar trunking",
    "group": "Electrical",
    "description": "Modular high-current power distribution within buildings and plants.",
    "variants": [
      "Feeder busbar",
      "Distribution busbar",
      "Tap-off units",
      "Installation accessories",
      "GNL & GL low-power busbar",
      "GGD medium-power busbar",
      "GS Compact high-power busbar"
    ],
    "specs": [
      "Current rating",
      "Voltage",
      "Conductor material",
      "Ingress protection",
      "Route length"
    ],
    "number": "04"
  },
  {
    "slug": "generators",
    "name": "Generators",
    "group": "Electrical",
    "description": "On-site power for standby, prime and continuous-duty applications.",
    "variants": [
      "Standby diesel generators",
      "Prime power generators",
      "Continuous power systems",
      "mtu 0080 DS – 0225 DS",
      "mtu 1600 DS",
      "mtu 2000 DS G05/G06",
      "mtu 4000 DS"
    ],
    "specs": [
      "Power rating (kVA)",
      "Duty classification",
      "Frequency",
      "Fuel system",
      "Acoustic enclosure"
    ],
    "number": "05"
  },
  {
    "slug": "air-compressors",
    "name": "Air compressors",
    "group": "Mechanical",
    "description": "Compressed-air infrastructure for manufacturing and process equipment.",
    "variants": [
      "Rotary screw compressors",
      "Oil-free compressors",
      "Air treatment",
      "Spare parts"
    ],
    "specs": [
      "Flow rate",
      "Operating pressure",
      "Drive power",
      "Air quality",
      "Duty cycle"
    ],
    "number": "06"
  },
  {
    "slug": "vacuum-pumps",
    "name": "Vacuum pumps",
    "group": "Mechanical",
    "description": "Vacuum technology for production, packaging and process applications.",
    "variants": [
      "Industrial vacuum pumps",
      "Process vacuum systems",
      "Vacuum accessories"
    ],
    "specs": [
      "Ultimate pressure",
      "Pumping speed",
      "Process gas",
      "Operating temperature",
      "Duty cycle"
    ],
    "number": "07"
  },
  {
    "slug": "heat-exchangers",
    "name": "Heat exchangers",
    "group": "Thermal",
    "description": "Thermal transfer equipment for process, energy and HVAC systems.",
    "variants": [
      "Plate heat exchangers",
      "Dry coolers",
      "Remote radiators",
      "Evaporators",
      "Condensers",
      "Coils"
    ],
    "specs": [
      "Thermal duty",
      "Fluid properties",
      "Flow rate",
      "Operating pressure",
      "Temperature range"
    ],
    "number": "08"
  },
  {
    "slug": "cooling-towers",
    "name": "Cooling towers",
    "group": "Thermal",
    "description": "Heat rejection equipment adapted to industrial operating conditions.",
    "variants": [
      "Round cooling towers",
      "Square cooling towers",
      "Rectangular cooling towers",
      "Low-noise configurations",
      "Custom cooling towers",
      "GPT series",
      "GD series",
      "GDS series",
      "GKS series",
      "GPC series",
      "Side-discharge towers",
      "High-temperature towers"
    ],
    "specs": [
      "Cooling capacity",
      "Water flow",
      "Approach temperature",
      "Ambient wet bulb",
      "Footprint"
    ],
    "number": "09"
  },
  {
    "slug": "mechanical-transmission",
    "name": "Mechanical transmission",
    "group": "Mechanical",
    "description": "Torque transfer and speed control for industrial machinery.",
    "variants": [
      "Helical gearboxes",
      "Bevel helical gearboxes",
      "Extruder gearboxes",
      "Mill gearboxes",
      "Crane duty gearboxes",
      "Pinion stand gearboxes",
      "Planetary gearboxes",
      "Geared motors",
      "Worm gearboxes",
      "Constant-speed fluid couplings",
      "Variable-speed fluid couplings",
      "Geared lift machines",
      "Bevel helical cooling tower gearbox",
      "Coal pulverizing mill gearbox",
      "Planetary mill duty gearbox",
      "Premium Stephan geared motor",
      "ALM series Altra worm gearbox"
    ],
    "specs": [
      "Torque",
      "Gear ratio",
      "Input speed",
      "Mounting",
      "Service factor"
    ],
    "number": "10"
  },
  {
    "slug": "ventilation",
    "name": "Ventilation systems",
    "group": "Thermal",
    "description": "Air movement and extraction for industrial and building environments.",
    "variants": [
      "Heat recovery ventilators",
      "Air handling units",
      "Jet fans",
      "Axial smoke exhaust fans",
      "Fresh air fans",
      "Pressurization fans",
      "Explosion-protected fans",
      "Roof and duct fans",
      "Silencers and accessories",
      "Fans with casing",
      "Automatic control systems and MCC panels",
      "Duct and AHU electric heaters",
      "Shelter fans",
      "Kitchen fans"
    ],
    "specs": [
      "Airflow",
      "Static pressure",
      "Temperature",
      "Noise level",
      "Motor rating"
    ],
    "number": "11"
  },
  {
    "slug": "industrial-tools",
    "name": "Industrial tools",
    "group": "Mechanical",
    "description": "Production tooling and assembly systems for industrial operations.",
    "variants": [
      "Assembly tools",
      "Industrial tightening tools",
      "Production accessories"
    ],
    "specs": [
      "Application",
      "Torque range",
      "Power source",
      "Ergonomics",
      "Control requirements"
    ],
    "number": "12"
  }
];

type Product = {
  slug: string;
  name: string;
  group: string;
  description: string;
  variants: string[];
  specs: string[];
  number: string;
  catalogue?: string;
};

export const products: Product[] = [
  ...originalProducts.map(product => ({
    ...product,
    catalogue: '/catalogues/graphene-' + product.slug + '.pdf',
  })),
  ...additions.map(({ photo, facts, variants, ...product }) => ({
    ...product,
    variants: variants.map(variant => variant.name),
  })),
];

export const groups = [...new Set(products.map(product => product.group))];

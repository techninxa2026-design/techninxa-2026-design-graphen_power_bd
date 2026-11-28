import { products } from './catalog';
import { additions } from './expansion';
import {assets} from './photos';
const catalogueItems = [
  {
    "id": "transformers-power-transformers",
    "name": "Power transformers",
    "family": "transformers",
    "familyName": "Transformers",
    "asset": "transformer",
    "source": "/catalogues/graphene-transformers.pdf",
    "number": "01.01",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "transformers-oil-filled-distribution-transformers",
    "name": "Oil-filled distribution transformers",
    "family": "transformers",
    "familyName": "Transformers",
    "asset": "distribution",
    "source": "/catalogues/graphene-transformers.pdf",
    "number": "01.02",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "transformers-dry-type-cast-resin-transformers",
    "name": "Dry-type cast-resin transformers",
    "family": "transformers",
    "familyName": "Transformers",
    "asset": "dryTransformer",
    "source": "/catalogues/graphene-transformers.pdf",
    "number": "01.03",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-hv-panels",
    "name": "HV panels",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.01",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-lv-panels",
    "name": "LV panels",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.02",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-power-factor-correction-pfi",
    "name": "Power factor correction (PFI)",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.03",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-motor-control-centres-mcc",
    "name": "Motor control centres (MCC)",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.04",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-ats-panels",
    "name": "ATS panels",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.05",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-synchronizing-panels",
    "name": "Synchronizing panels",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.06",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-mdb-and-sdb",
    "name": "MDB and SDB",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.07",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "electrical-panels-custom-control-panels",
    "name": "Custom control panels",
    "family": "electrical-panels",
    "familyName": "Electrical panels",
    "asset": "panel",
    "source": "/catalogues/graphene-electrical-panels.pdf",
    "number": "02.08",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "cable-trays-perforated-trays",
    "name": "Perforated trays",
    "family": "cable-trays",
    "familyName": "Cable tray systems",
    "asset": "trayPerforated",
    "source": "/catalogues/graphene-cable-trays.pdf",
    "number": "03.01",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "trayLadder"
    ]
  },
  {
    "id": "cable-trays-ladder-trays",
    "name": "Ladder trays",
    "family": "cable-trays",
    "familyName": "Cable tray systems",
    "asset": "trayLadder",
    "source": "/catalogues/graphene-cable-trays.pdf",
    "number": "03.02",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "trayPerforated"
    ]
  },
  {
    "id": "cable-trays-channel-trays",
    "name": "Channel trays",
    "family": "cable-trays",
    "familyName": "Cable tray systems",
    "asset": "trayPerforated",
    "source": "/catalogues/graphene-cable-trays.pdf",
    "number": "03.03",
    "imageMatch": "family",
    "imageFallbacks": [
      "trayLadder"
    ]
  },
  {
    "id": "cable-trays-walkable-trays",
    "name": "Walkable trays",
    "family": "cable-trays",
    "familyName": "Cable tray systems",
    "asset": "trayLadder",
    "source": "/catalogues/graphene-cable-trays.pdf",
    "number": "03.04",
    "imageMatch": "family",
    "imageFallbacks": [
      "trayPerforated"
    ]
  },
  {
    "id": "cable-trays-wire-mesh-trays",
    "name": "Wire mesh trays",
    "family": "cable-trays",
    "familyName": "Cable tray systems",
    "asset": "trayWire",
    "source": "/catalogues/graphene-cable-trays.pdf",
    "number": "03.05",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "busbar-trunking-feeder-busbar",
    "name": "Feeder busbar",
    "family": "busbar-trunking",
    "familyName": "Busbar trunking",
    "asset": "busHigh",
    "source": "/catalogues/graphene-busbar-trunking.pdf",
    "number": "04.01",
    "imageMatch": "family",
    "imageFallbacks": [
      "busInstalled"
    ]
  },
  {
    "id": "busbar-trunking-distribution-busbar",
    "name": "Distribution busbar",
    "family": "busbar-trunking",
    "familyName": "Busbar trunking",
    "asset": "busMedium",
    "source": "/catalogues/graphene-busbar-trunking.pdf",
    "number": "04.02",
    "imageMatch": "family",
    "imageFallbacks": [
      "busInstalled"
    ]
  },
  {
    "id": "busbar-trunking-tap-off-units",
    "name": "Tap-off units",
    "family": "busbar-trunking",
    "familyName": "Busbar trunking",
    "asset": "busInstalled",
    "source": "/catalogues/graphene-busbar-trunking.pdf",
    "number": "04.03",
    "imageMatch": "context",
    "imageFallbacks": [
      "busHigh"
    ]
  },
  {
    "id": "busbar-trunking-installation-accessories",
    "name": "Installation accessories",
    "family": "busbar-trunking",
    "familyName": "Busbar trunking",
    "asset": "busInstalled",
    "source": "/catalogues/graphene-busbar-trunking.pdf",
    "number": "04.04",
    "imageMatch": "context",
    "imageFallbacks": [
      "busHigh"
    ]
  },
  {
    "id": "busbar-trunking-gnl-gl-low-power-busbar",
    "name": "GNL & GL low-power busbar",
    "family": "busbar-trunking",
    "familyName": "Busbar trunking",
    "asset": "busLow",
    "source": "/catalogues/graphene-busbar-trunking.pdf",
    "number": "04.05",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "busInstalled"
    ]
  },
  {
    "id": "busbar-trunking-ggd-medium-power-busbar",
    "name": "GGD medium-power busbar",
    "family": "busbar-trunking",
    "familyName": "Busbar trunking",
    "asset": "busMedium",
    "source": "/catalogues/graphene-busbar-trunking.pdf",
    "number": "04.06",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "busInstalled"
    ]
  },
  {
    "id": "busbar-trunking-gs-compact-high-power-busbar",
    "name": "GS Compact high-power busbar",
    "family": "busbar-trunking",
    "familyName": "Busbar trunking",
    "asset": "busHigh",
    "source": "/catalogues/graphene-busbar-trunking.pdf",
    "number": "04.07",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "busInstalled"
    ]
  },
  {
    "id": "generators-standby-diesel-generators",
    "name": "Standby diesel generators",
    "family": "generators",
    "familyName": "Generators",
    "asset": "gen1600",
    "source": "/catalogues/graphene-generators.pdf",
    "number": "05.01",
    "imageMatch": "family",
    "imageFallbacks": [
      "gen2000"
    ]
  },
  {
    "id": "generators-prime-power-generators",
    "name": "Prime power generators",
    "family": "generators",
    "familyName": "Generators",
    "asset": "gen2000",
    "source": "/catalogues/graphene-generators.pdf",
    "number": "05.02",
    "imageMatch": "family",
    "imageFallbacks": [
      "gen1600"
    ]
  },
  {
    "id": "generators-continuous-power-systems",
    "name": "Continuous power systems",
    "family": "generators",
    "familyName": "Generators",
    "asset": "gen4000",
    "source": "/catalogues/graphene-generators.pdf",
    "number": "05.03",
    "imageMatch": "family",
    "imageFallbacks": [
      "gen2000"
    ]
  },
  {
    "id": "generators-mtu-0080-ds-0225-ds",
    "name": "mtu 0080 DS – 0225 DS",
    "family": "generators",
    "familyName": "Generators",
    "asset": "genSmall",
    "source": "/catalogues/graphene-generators.pdf",
    "number": "05.04",
    "imageMatch": "family",
    "imageFallbacks": [
      "gen1600"
    ]
  },
  {
    "id": "generators-mtu-1600-ds",
    "name": "mtu 1600 DS",
    "family": "generators",
    "familyName": "Generators",
    "asset": "gen1600",
    "source": "/catalogues/graphene-generators.pdf",
    "number": "05.05",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "gen2000"
    ]
  },
  {
    "id": "generators-mtu-2000-ds-g05-g06",
    "name": "mtu 2000 DS G05/G06",
    "family": "generators",
    "familyName": "Generators",
    "asset": "gen2000",
    "source": "/catalogues/graphene-generators.pdf",
    "number": "05.06",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "gen1600"
    ]
  },
  {
    "id": "generators-mtu-4000-ds",
    "name": "mtu 4000 DS",
    "family": "generators",
    "familyName": "Generators",
    "asset": "gen4000",
    "source": "/catalogues/graphene-generators.pdf",
    "number": "05.07",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "gen2000"
    ]
  },
  {
    "id": "air-compressors-rotary-screw-compressors",
    "name": "Rotary screw compressors",
    "family": "air-compressors",
    "familyName": "Air compressors",
    "asset": "compressor",
    "source": "/catalogues/graphene-air-compressors.pdf",
    "number": "06.01",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "air-compressors-oil-free-compressors",
    "name": "Oil-free compressors",
    "family": "air-compressors",
    "familyName": "Air compressors",
    "asset": "oilFree",
    "source": "/catalogues/graphene-air-compressors.pdf",
    "number": "06.02",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "air-compressors-air-treatment",
    "name": "Air treatment",
    "family": "air-compressors",
    "familyName": "Air compressors",
    "asset": "dryer",
    "source": "/catalogues/graphene-air-compressors.pdf",
    "number": "06.03",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "air-compressors-spare-parts",
    "name": "Spare parts",
    "family": "air-compressors",
    "familyName": "Air compressors",
    "asset": "compressor",
    "source": "/catalogues/graphene-air-compressors.pdf",
    "number": "06.04",
    "imageMatch": "context",
    "imageFallbacks": []
  },
  {
    "id": "vacuum-pumps-industrial-vacuum-pumps",
    "name": "Industrial vacuum pumps",
    "family": "vacuum-pumps",
    "familyName": "Vacuum pumps",
    "asset": "vacuum",
    "source": "/catalogues/graphene-vacuum-pumps.pdf",
    "number": "07.01",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "vacuum-pumps-process-vacuum-systems",
    "name": "Process vacuum systems",
    "family": "vacuum-pumps",
    "familyName": "Vacuum pumps",
    "asset": "vacuum",
    "source": "/catalogues/graphene-vacuum-pumps.pdf",
    "number": "07.02",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "vacuum-pumps-vacuum-accessories",
    "name": "Vacuum accessories",
    "family": "vacuum-pumps",
    "familyName": "Vacuum pumps",
    "asset": "vacuum",
    "source": "/catalogues/graphene-vacuum-pumps.pdf",
    "number": "07.03",
    "imageMatch": "context",
    "imageFallbacks": []
  },
  {
    "id": "heat-exchangers-plate-heat-exchangers",
    "name": "Plate heat exchangers",
    "family": "heat-exchangers",
    "familyName": "Heat exchangers",
    "asset": "plate",
    "source": "/catalogues/graphene-heat-exchangers.pdf",
    "number": "08.01",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "heat-exchangers-dry-coolers",
    "name": "Dry coolers",
    "family": "heat-exchangers",
    "familyName": "Heat exchangers",
    "asset": "dry",
    "source": "/catalogues/graphene-heat-exchangers.pdf",
    "number": "08.02",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "heat-exchangers-remote-radiators",
    "name": "Remote radiators",
    "family": "heat-exchangers",
    "familyName": "Heat exchangers",
    "asset": "dry",
    "source": "/catalogues/graphene-heat-exchangers.pdf",
    "number": "08.03",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "heat-exchangers-evaporators",
    "name": "Evaporators",
    "family": "heat-exchangers",
    "familyName": "Heat exchangers",
    "asset": "evap",
    "source": "/catalogues/graphene-heat-exchangers.pdf",
    "number": "08.04",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "heat-exchangers-condensers",
    "name": "Condensers",
    "family": "heat-exchangers",
    "familyName": "Heat exchangers",
    "asset": "cond",
    "source": "/catalogues/graphene-heat-exchangers.pdf",
    "number": "08.05",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "heat-exchangers-coils",
    "name": "Coils",
    "family": "heat-exchangers",
    "familyName": "Heat exchangers",
    "asset": "coil",
    "source": "/catalogues/graphene-heat-exchangers.pdf",
    "number": "08.06",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "cooling-towers-round-cooling-towers",
    "name": "Round cooling towers",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "round",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.01",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "cooling-towers-square-cooling-towers",
    "name": "Square cooling towers",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "rect",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.02",
    "imageMatch": "family",
    "imageFallbacks": [
      "towerIndustrial"
    ]
  },
  {
    "id": "cooling-towers-rectangular-cooling-towers",
    "name": "Rectangular cooling towers",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "rect",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.03",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "towerIndustrial"
    ]
  },
  {
    "id": "cooling-towers-low-noise-configurations",
    "name": "Low-noise configurations",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "towerIndustrial",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.04",
    "imageMatch": "family",
    "imageFallbacks": [
      "rect"
    ]
  },
  {
    "id": "cooling-towers-custom-cooling-towers",
    "name": "Custom cooling towers",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "towerIndustrial",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.05",
    "imageMatch": "family",
    "imageFallbacks": [
      "rect"
    ]
  },
  {
    "id": "cooling-towers-gpt-series",
    "name": "GPT series",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "round",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.06",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "cooling-towers-gd-series",
    "name": "GD series",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "rect",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.07",
    "imageMatch": "family",
    "imageFallbacks": [
      "towerIndustrial"
    ]
  },
  {
    "id": "cooling-towers-gds-series",
    "name": "GDS series",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "rect",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.08",
    "imageMatch": "family",
    "imageFallbacks": [
      "towerIndustrial"
    ]
  },
  {
    "id": "cooling-towers-gks-series",
    "name": "GKS series",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "rect",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.09",
    "imageMatch": "family",
    "imageFallbacks": [
      "towerIndustrial"
    ]
  },
  {
    "id": "cooling-towers-gpc-series",
    "name": "GPC series",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "rect",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.10",
    "imageMatch": "family",
    "imageFallbacks": [
      "towerIndustrial"
    ]
  },
  {
    "id": "cooling-towers-side-discharge-towers",
    "name": "Side-discharge towers",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "towerIndustrial",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.11",
    "imageMatch": "family",
    "imageFallbacks": [
      "rect"
    ]
  },
  {
    "id": "cooling-towers-high-temperature-towers",
    "name": "High-temperature towers",
    "family": "cooling-towers",
    "familyName": "Cooling towers",
    "asset": "towerIndustrial",
    "source": "/catalogues/graphene-cooling-towers.pdf",
    "number": "09.12",
    "imageMatch": "family",
    "imageFallbacks": [
      "rect"
    ]
  },
  {
    "id": "mechanical-transmission-helical-gearboxes",
    "name": "Helical gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "helical",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.01",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "bevel"
    ]
  },
  {
    "id": "mechanical-transmission-bevel-helical-gearboxes",
    "name": "Bevel helical gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "bevel",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.02",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "helical"
    ]
  },
  {
    "id": "mechanical-transmission-extruder-gearboxes",
    "name": "Extruder gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "helical",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.03",
    "imageMatch": "family",
    "imageFallbacks": [
      "bevel"
    ]
  },
  {
    "id": "mechanical-transmission-mill-gearboxes",
    "name": "Mill gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "helical",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.04",
    "imageMatch": "family",
    "imageFallbacks": [
      "bevel"
    ]
  },
  {
    "id": "mechanical-transmission-crane-duty-gearboxes",
    "name": "Crane duty gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "helical",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.05",
    "imageMatch": "family",
    "imageFallbacks": [
      "bevel"
    ]
  },
  {
    "id": "mechanical-transmission-pinion-stand-gearboxes",
    "name": "Pinion stand gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "helical",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.06",
    "imageMatch": "family",
    "imageFallbacks": [
      "bevel"
    ]
  },
  {
    "id": "mechanical-transmission-planetary-gearboxes",
    "name": "Planetary gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "planet",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.07",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-geared-motors",
    "name": "Geared motors",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "gearMotor",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.08",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-worm-gearboxes",
    "name": "Worm gearboxes",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "worm",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.09",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-constant-speed-fluid-couplings",
    "name": "Constant-speed fluid couplings",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "constant",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.10",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-variable-speed-fluid-couplings",
    "name": "Variable-speed fluid couplings",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "variable",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.11",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-geared-lift-machines",
    "name": "Geared lift machines",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "lift",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.12",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-bevel-helical-cooling-tower-gearbox",
    "name": "Bevel helical cooling tower gearbox",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "bevel",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.13",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "helical"
    ]
  },
  {
    "id": "mechanical-transmission-coal-pulverizing-mill-gearbox",
    "name": "Coal pulverizing mill gearbox",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "helical",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.14",
    "imageMatch": "family",
    "imageFallbacks": [
      "bevel"
    ]
  },
  {
    "id": "mechanical-transmission-planetary-mill-duty-gearbox",
    "name": "Planetary mill duty gearbox",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "planet",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.15",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-premium-stephan-geared-motor",
    "name": "Premium Stephan geared motor",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "gearMotor",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.16",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "mechanical-transmission-alm-series-altra-worm-gearbox",
    "name": "ALM series Altra worm gearbox",
    "family": "mechanical-transmission",
    "familyName": "Mechanical transmission",
    "asset": "altra",
    "source": "/catalogues/graphene-mechanical-transmission.pdf",
    "number": "10.17",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "ventilation-heat-recovery-ventilators",
    "name": "Heat recovery ventilators",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "heatRecovery",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.01",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "ventilation-air-handling-units",
    "name": "Air handling units",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "ahu",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.02",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "ventilation-jet-fans",
    "name": "Jet fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "jet",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.03",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "fan"
    ]
  },
  {
    "id": "ventilation-axial-smoke-exhaust-fans",
    "name": "Axial smoke exhaust fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "fanSmoke",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.04",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "fan"
    ]
  },
  {
    "id": "ventilation-fresh-air-fans",
    "name": "Fresh air fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "fan",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.05",
    "imageMatch": "family",
    "imageFallbacks": [
      "jet"
    ]
  },
  {
    "id": "ventilation-pressurization-fans",
    "name": "Pressurization fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "fan",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.06",
    "imageMatch": "family",
    "imageFallbacks": [
      "jet"
    ]
  },
  {
    "id": "ventilation-explosion-protected-fans",
    "name": "Explosion-protected fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "fanEx",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.07",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "fan"
    ]
  },
  {
    "id": "ventilation-roof-and-duct-fans",
    "name": "Roof and duct fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "roofFan",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.08",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "ventilation-silencers-and-accessories",
    "name": "Silencers and accessories",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "silencer",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.09",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "ventilation-fans-with-casing",
    "name": "Fans with casing",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "fan",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.10",
    "imageMatch": "subtype",
    "imageFallbacks": [
      "jet"
    ]
  },
  {
    "id": "ventilation-automatic-control-systems-and-mcc-panels",
    "name": "Automatic control systems and MCC panels",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "panel",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.11",
    "imageMatch": "family",
    "imageFallbacks": []
  },
  {
    "id": "ventilation-duct-and-ahu-electric-heaters",
    "name": "Duct and AHU electric heaters",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "ductHeater",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.12",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "ventilation-shelter-fans",
    "name": "Shelter fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "fan",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.13",
    "imageMatch": "family",
    "imageFallbacks": [
      "jet"
    ]
  },
  {
    "id": "ventilation-kitchen-fans",
    "name": "Kitchen fans",
    "family": "ventilation",
    "familyName": "Ventilation systems",
    "asset": "fan",
    "source": "/catalogues/graphene-ventilation.pdf",
    "number": "11.14",
    "imageMatch": "family",
    "imageFallbacks": [
      "jet"
    ]
  },
  {
    "id": "industrial-tools-assembly-tools",
    "name": "Assembly tools",
    "family": "industrial-tools",
    "familyName": "Industrial tools",
    "asset": "tool",
    "source": "/catalogues/graphene-industrial-tools.pdf",
    "number": "12.01",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "industrial-tools-industrial-tightening-tools",
    "name": "Industrial tightening tools",
    "family": "industrial-tools",
    "familyName": "Industrial tools",
    "asset": "tool",
    "source": "/catalogues/graphene-industrial-tools.pdf",
    "number": "12.02",
    "imageMatch": "subtype",
    "imageFallbacks": []
  },
  {
    "id": "industrial-tools-production-accessories",
    "name": "Production accessories",
    "family": "industrial-tools",
    "familyName": "Industrial tools",
    "asset": "tool",
    "source": "/catalogues/graphene-industrial-tools.pdf",
    "number": "12.03",
    "imageMatch": "context",
    "imageFallbacks": []
  },
  ...additions.flatMap(product => product.variants.map((variant, index) => ({
    id: product.slug + '-' + (index + 1),
    name: variant.name,
    family: product.slug,
    familyName: product.name,
    asset: variant.photo,
    source: '/products/' + product.slug + '/',
    number: product.number + '.' + String(index + 1).padStart(2, '0'),
    imageMatch: variant.imageMatch,
    imageFallbacks: [],
  })))
];
const familyGroups = new Map(products.map(product => [product.slug, product.group]));

export const equipment = catalogueItems.map(item => {
  const group = familyGroups.get(item.family);
  if (!group) throw new Error(`Unknown catalogue family: ${item.family}`);
  return { ...item, group };
});

export function imageFor(id:string|null){return id?assets[id]:undefined;}

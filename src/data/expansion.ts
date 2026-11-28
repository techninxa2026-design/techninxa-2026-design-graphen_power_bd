import type { portfolioPhotos } from './portfolio-photos';

type PhotoKey = keyof typeof portfolioPhotos;

type PortfolioFamily = {
  slug: string;
  name: string;
  group: string;
  number: string;
  description: string;
  specs: string[];
  photo: PhotoKey;
  variants: { name: string; photo: PhotoKey; imageMatch: 'subtype' | 'context' }[];
  facts: string[][];
};

export const additions: PortfolioFamily[] = [
  {
    slug: 'solar-energy',
    name: 'Solar energy systems',
    group: 'Renewable energy',
    number: '13',
    description: 'Grid-connected, standalone and hybrid solar systems for industrial and commercial sites.',
    photo: 'rooftopSolar',
    variants: [
      { name: 'On-grid solar systems', photo: 'rooftopSolar', imageMatch: 'context' },
      { name: 'Off-grid solar systems', photo: 'standaloneSolar', imageMatch: 'subtype' },
      { name: 'Hybrid solar systems', photo: 'solarStorage', imageMatch: 'context' },
    ],
    specs: ['Daily energy demand', 'Available roof area', 'Grid connection', 'Backup runtime'],
    facts: [
      ['On-grid', 'Choose a grid-connected design where the utility can serve as the primary supply.'],
      ['Off-grid', 'Size the array and storage for the loads that must run independently of the grid.'],
      ['Hybrid', 'Identify which loads need battery backup, and for how long.'],
    ],
  },
  {
    slug: 'solar-equipment',
    name: 'Solar equipment & portable power',
    group: 'Renewable energy',
    number: '14',
    description: 'Photovoltaic modules, installation accessories and portable power stations.',
    photo: 'solarModules',
    variants: [
      { name: 'Solar photovoltaic panels', photo: 'solarModules', imageMatch: 'subtype' },
      { name: 'Solar mounting and electrical accessories', photo: 'solarMounting', imageMatch: 'subtype' },
      { name: 'Portable solar power stations', photo: 'portablePower', imageMatch: 'subtype' },
    ],
    specs: ['Module wattage', 'Mounting surface', 'Output power', 'Storage capacity'],
    facts: [
      ['PV modules', 'Match module size and electrical characteristics to the available mounting area and inverter limits.'],
      ['Installation accessories', 'Select mounting and electrical components for the site and equipment ratings.'],
      ['Portable power', 'Check both the supported load in watts and the storage capacity in watt-hours.'],
    ],
  },
  {
    slug: 'substations',
    name: 'Substation systems',
    group: 'Electrical',
    number: '15',
    description: 'Integrated equipment for industrial power transformation, protection and distribution.',
    photo: 'substationTransformer',
    variants: [
      { name: 'Transformer substations', photo: 'substationTransformer', imageMatch: 'subtype' },
      { name: 'LT and HT switchgear', photo: 'substationSwitchgear', imageMatch: 'context' },
      { name: 'Power factor improvement panels', photo: 'powerFactorPanel', imageMatch: 'subtype' },
    ],
    specs: ['Incoming voltage', 'Demand load', 'Fault level', 'Power factor target'],
    facts: [
      ['Supply', 'Capture the incoming voltage, maximum demand and utility requirements.'],
      ['Protection', 'Coordinate transformer and switchgear selection with protection and fault-level studies.'],
      ['Power factor', 'Use load measurements to assess the need for reactive power compensation.'],
    ],
  },
  {
    slug: 'generator-controls',
    name: 'Generator controls & changeover',
    group: 'Electrical',
    number: '16',
    description: 'Controls for standby supply, power transfer and parallel generator operation.',
    photo: 'generatorTransfer',
    variants: [
      { name: 'Generator synchronizing panels', photo: 'controlCabinet', imageMatch: 'context' },
      { name: 'Automatic transfer panels', photo: 'automaticTransfer', imageMatch: 'subtype' },
      { name: 'Manual changeover panels', photo: 'generatorTransfer', imageMatch: 'context' },
    ],
    specs: ['Generator count', 'Load priority', 'Transfer method', 'Control interfaces'],
    facts: [
      ['Synchronization', 'Define the number of generator sets and the required operating and load-sharing modes.'],
      ['Automatic transfer', 'Confirm source priority, transfer sequence and return-to-utility behavior.'],
      ['Manual transfer', 'Identify operator access and the isolation and interlocking requirements.'],
    ],
  },
  {
    slug: 'lightning-protection',
    name: 'Lightning protection & earthing',
    group: 'Electrical',
    number: '17',
    description: 'External lightning protection and earthing components for industrial facilities.',
    photo: 'lightningTerminal',
    variants: [
      { name: 'Air termination systems', photo: 'lightningTerminal', imageMatch: 'subtype' },
      { name: 'Down conductors and bonding', photo: 'lightningConductor', imageMatch: 'subtype' },
      { name: 'Earth electrodes and inspection points', photo: 'earthingBusbars', imageMatch: 'context' },
    ],
    specs: ['Building dimensions', 'Roof construction', 'Protection design', 'Soil conditions'],
    facts: [
      ['Building survey', 'Review roof geometry and the locations of rooftop equipment.'],
      ['Conductor routing', 'Plan continuous paths to the earthing system and identify bonding points.'],
      ['Earthing', 'Review soil conditions and specify the inspection and testing requirements with the design.'],
    ],
  },
];

export const engineeringServices = [
  ['Electrical testing', 'Insulation resistance (IR) and earth resistance testing for installation checks and maintenance.'],
  ['Electrical consultancy', 'Single-line diagrams (SLDs), electrical design and project bills of quantities (BOQs).'],
  ['Standards implementation', 'Project-specific implementation work referencing NFPA, BNBC, ACCORD and RSC requirements where applicable.'],
  ['Turnkey electromechanical installation', 'Coordination and installation of electrical, mechanical and renewable energy systems.'],
  ['Solar project engineering', 'Project planning for on-grid, off-grid and hybrid solar installations.'],
];

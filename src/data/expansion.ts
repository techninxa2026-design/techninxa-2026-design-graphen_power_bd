import { serviceCategory, type CategoryName } from './categories';
import type { portfolioPhotos } from './portfolio-photos';

type PhotoKey = keyof typeof portfolioPhotos;

type PortfolioFamily = {
  slug: string;
  name: string;
  group: CategoryName;
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
    group: 'Standby power',
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
    group: 'Lightning protection',
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
  {
    slug: 'busbar-fittings',
    name: 'Busbar fittings & tap-off units',
    group: 'Busbar & cable systems',
    number: '18',
    description: 'Tap-off units, direction changes and feed connections for modular busbar trunking.',
    photo: 'busbarInstallation',
    variants: [
      { name: 'Busbar tap-off units', photo: 'busbarInstallation', imageMatch: 'context' },
      { name: 'Busbar feeds, bends and joints', photo: 'busbarInstallation', imageMatch: 'context' },
    ],
    specs: ['Busbar manufacturer and series', 'Current rating', 'Tap-off locations', 'Route and enclosure requirements'],
    facts: [
      ['Tap-off locations', 'Show where branch circuits connect to the main busbar run.'],
      ['Fittings', 'Share the run layout so feeds, bends and joints can be matched to the trunking system.'],
    ],
  },
  {
    slug: 'earthing-bonding',
    name: 'Earthing & bonding equipment',
    group: 'Lightning protection',
    number: '19',
    description: 'Earth bars, bonding conductors and associated connection points for electrical and lightning protection systems.',
    photo: 'earthingBusbars',
    variants: [
      { name: 'Main earth bars and terminals', photo: 'mainEarthBar', imageMatch: 'subtype' },
      { name: 'Bonding conductors and connections', photo: 'earthingBusbars', imageMatch: 'context' },
    ],
    specs: ['Earthing drawings', 'Conductor sizes', 'Connection materials', 'Installation environment'],
    facts: [
      ['Earthing terminals', 'Identify the equipment and conductors that need to connect to each earth bar.'],
      ['Bonding', 'Share the drawings and site conditions so connections can be selected for the project.'],
    ],
  },
  {
    slug: 'electrical-testing',
    name: 'Electrical resistance testing',
    group: serviceCategory,
    number: '20',
    description: 'Insulation resistance and earth resistance testing for electrical installations.',
    photo: 'substationTesting',
    variants: [
      { name: 'Insulation resistance testing (IR)', photo: 'insulationTester', imageMatch: 'context' },
      { name: 'Earth resistance testing', photo: 'earthTester', imageMatch: 'context' },
    ],
    specs: ['Site location', 'Circuits or earthing systems to inspect', 'Existing drawings or test records', 'Site access and shutdown windows'],
    facts: [
      ['Insulation resistance', 'Scope testing for the equipment and circuits identified in your project brief.'],
      ['Earth resistance', 'Identify the earthing systems or electrodes included in the survey.'],
    ],
  },
  {
    slug: 'electrical-consultancy',
    name: 'Electrical design & consultancy',
    group: serviceCategory,
    number: '21',
    description: 'Single-line diagrams, electrical design and project bills of quantities.',
    photo: 'electricalDrawings',
    variants: [
      { name: 'Single-line diagrams (SLDs)', photo: 'electricalDrawings', imageMatch: 'context' },
      { name: 'Electrical system design', photo: 'controlCabinet', imageMatch: 'context' },
      { name: 'Project bills of quantities (BOQs)', photo: 'electricalDrawings', imageMatch: 'context' },
    ],
    specs: ['Project scope', 'Existing drawings', 'Equipment and load schedule', 'Required deliverables and timeline'],
    facts: [
      ['Single-line diagrams', 'Document supply, distribution and equipment connections in the project scope.'],
      ['Design and quantities', 'Define the design deliverables and equipment quantities needed for the project.'],
    ],
  },
  {
    slug: 'standards-implementation',
    name: 'Standards implementation',
    group: serviceCategory,
    number: '22',
    description: 'Site-specific implementation work for applicable NFPA, BNBC, ACCORD and RSC requirements.',
    photo: 'equipmentInspection',
    variants: [
      { name: 'NFPA and BNBC implementation work', photo: 'equipmentInspection', imageMatch: 'context' },
      { name: 'ACCORD and RSC corrective work', photo: 'substationTesting', imageMatch: 'context' },
    ],
    specs: ['Applicable project requirements', 'Inspection report or corrective action list', 'Existing drawings', 'Agreed work scope'],
    facts: [
      ['Project requirements', 'Share the requirements and findings issued for the facility.'],
      ['Implementation scope', 'Agree on the electrical or electromechanical work covered by the project.'],
    ],
  },
  {
    slug: 'turnkey-installation',
    name: 'Turnkey electromechanical installation',
    group: serviceCategory,
    number: '23',
    description: 'Coordination and installation of electrical and mechanical systems for industrial sites.',
    photo: 'cableInstallation',
    variants: [
      { name: 'Electrical equipment installation', photo: 'cableInstallation', imageMatch: 'context' },
      { name: 'Mechanical equipment integration', photo: 'industrialCompressor', imageMatch: 'context' },
    ],
    specs: ['Project location', 'Equipment schedule', 'Installation drawings', 'Site readiness and work schedule'],
    facts: [
      ['Electrical installation', 'Define the distribution equipment, cable routes and system interfaces in the installation scope.'],
      ['Mechanical integration', 'Coordinate equipment layout, access and connection points with the site team.'],
    ],
  },
];

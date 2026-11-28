export const serviceCategory = 'Engineering services';

export const categories = [
  {
    slug: 'electrical',
    name: 'Electrical',
    description: 'Substations, transformers, switchgear and power factor correction.',
  },
  {
    slug: 'mechanical',
    name: 'Mechanical',
    description: 'Air compressors, vacuum systems, drives and industrial tooling.',
  },
  {
    slug: 'thermal',
    name: 'Thermal',
    description: 'Cooling towers, heat exchangers and industrial ventilation.',
  },
  {
    slug: 'renewable-energy',
    name: 'Renewable energy',
    description: 'Grid-connected, off-grid and hybrid solar, plus portable power.',
  },
  {
    slug: 'standby-power',
    name: 'Standby power',
    description: 'Generator sets, synchronizing panels and changeover systems.',
  },
  {
    slug: 'lightning-protection',
    name: 'Lightning protection',
    description: 'Air terminals, down conductors, earthing and bonding.',
  },
  {
    slug: 'busbar-cable-systems',
    name: 'Busbar & cable systems',
    description: 'Busbar trunking, tap-off units, cable trays and supports.',
  },
  {
    slug: 'engineering-services',
    name: serviceCategory,
    description: 'Resistance testing, electrical design, standards implementation and installation.',
  },
] as const;

export type CategoryName = (typeof categories)[number]['name'];

export function categoryUrl(name: CategoryName) {
  return '/products/?system=' + encodeURIComponent(name) + '#catalogue';
}

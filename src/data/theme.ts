// Display colors sampled from the navy lettering, green arc and red accents.
export const brandPalette = {
  primary: '#1f3b77',
  secondary: '#12843b',
  accent: '#d1101a',
} as const;

export const themePresets = [
  { name: 'Graphene', colors: Object.values(brandPalette) },
  { name: 'Energy', colors: ['#2449c7', '#52e5ef', '#ffab77'] },
  { name: 'Emerald', colors: ['#176848', '#65e6ac', '#f6c36b'] },
  { name: 'Solar', colors: ['#a13b16', '#ffca67', '#ef8ca9'] },
  { name: 'Aurora', colors: ['#6836b8', '#a6c9ff', '#f39ad2'] },
  { name: 'Graphite', colors: ['#435466', '#b8e6ed', '#e2b77b'] },
];

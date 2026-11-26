// Public reference imagery for design review only. Replace with licensed assets before launch.
const root='https://www.powerbreezebd.com/wp-content/uploads/';
export const heroPhoto=root+'2023/01/product-page.jpg';
export const photos: Record<string,{src:string;alt:string;fit?:string}> = {
  'transformers':{src:root+'2023/03/Powerbreeze.jpeg',alt:'Outdoor electrical transformer installation photographed by Powerbreeze'},
  'electrical-panels':{src:root+'2023/02/Panels.jpg',alt:'Industrial electrical distribution panels',fit:'contain'},
  'cable-trays':{src:root+'2023/02/Cable-Tray.png',alt:'Powerbreeze cable tray catalogue cover showing cable routing equipment',fit:'contain'},
  'heat-exchangers':{src:root+'2023/02/HEAT-Exchanger-with-piping-System-150x150.png',alt:'Installed plate heat exchanger with piping'},
  'cooling-towers':{src:root+'2023/02/Cooling-Tower-150x150.png',alt:'Rectangular industrial cooling tower',fit:'contain'}
};
export const source='https://www.powerbreezebd.com/products/';

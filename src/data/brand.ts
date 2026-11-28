import icon from '../assets/brand/graphene-icon.png';
import standardLogo from '../assets/brand/graphene-logo-standard.png';
import mediumLogo from '../assets/brand/graphene-logo-medium.png';
import largeLogo from '../assets/brand/graphene-logo.png';

export const brand = {
  icon,
  logo: largeLogo,
  logoFallback: standardLogo,
  logoSrcset: [standardLogo, mediumLogo, largeLogo]
    .map(image => `${image.src} ${image.width}w`)
    .join(', '),
};

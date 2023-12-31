import websiteLogoURL from '../../images/logo.svg';

const header = document.createElement('header');
header.className = 'home-header';

const h1 = document.createElement('h1');
h1.className = 'home-header__heading';
h1.style.backgroundColor = 'black'; // temp

const img = document.createElement('img');
img.src = websiteLogoURL;
img.className = 'home-header__logo';
img.alt = 'dine';

h1.appendChild(img);
header.appendChild(h1);

export default function renderHeader() {
  return header;
}

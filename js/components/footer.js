import websiteLogoURL from '../../images/logo.svg';

export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const logo = document.createElement('img');
  logo.src = websiteLogoURL;
  logo.className = 'footer__logo';

  const adress = document.createElement('adress');
  adress.className = 'footer__text-box';

  adress.appendChild(Span('marthwaite.sedbergh'));
  adress.appendChild(Span('cumbria'));
  adress.appendChild(Span('+00 44 123 4567'));

  const openTimes = document.createElement('div');
  openTimes.className = 'footer__text-box';

  openTimes.appendChild(Span('open times'));
  openTimes.appendChild(Span('mon - fri: 09:00 am - 10:00 pm'));
  openTimes.appendChild(Span('sat - sun: 09:00 am - 11:30 pm'));

  footer.appendChild(logo);
  footer.appendChild(adress);
  footer.appendChild(openTimes);

  return footer;
}

function Span(text) {
  const span = document.createElement('span');
  span.innerHTML = text;
  span.className = 'footer__span';
  return span;
}

import websiteLogoURL from '../../images/logo.svg';
import Button from './button';

export default function Header(headingText, paragraphText, page = 'home') {
  const header = document.createElement('header');
  header.className = `header header--${page}`;

  const h1 = document.createElement('h1');
  h1.className = `header__heading`;

  const img = document.createElement('img');
  img.src = websiteLogoURL;
  img.className = 'header__logo';
  img.alt = 'dine';

  h1.appendChild(img);

  const headerContentWrapper = document.createElement('div');
  headerContentWrapper.classList = 'header__content-wrapper';

  const headerContentHeading = document.createElement('h2');
  headerContentHeading.classList = 'header__content-heading';
  headerContentHeading.innerHTML = headingText;

  const headerContentText = document.createElement('p');
  headerContentText.classList = 'header__content';
  headerContentText.innerHTML = paragraphText;

  headerContentWrapper.appendChild(headerContentHeading);
  headerContentWrapper.appendChild(headerContentText);

  if (page === 'home') {
    const bookTableButton = Button('book a table', 'header__button');
    headerContentWrapper.appendChild(bookTableButton);
  }

  header.appendChild(h1);
  header.appendChild(headerContentWrapper);

  return header;
}

import websiteLogoURL from '../../images/logo.svg';
import BookTableButton from './book-table-button';

export default function renderHeader() {
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

  const headerContentWrapper = document.createElement('div');
  headerContentWrapper.classList = 'home-header__content-wrapper';

  const headerContentHeading = document.createElement('h2');
  headerContentHeading.classList = 'home-header__content-heading';
  headerContentHeading.innerHTML = 'Exquisite dining since 1989';

  const headerContentText = document.createElement('p');
  headerContentText.classList = 'home-header__content';
  headerContentText.innerHTML =
    'Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.';

  const bookTableButton = BookTableButton('home-header__button');

  headerContentWrapper.appendChild(headerContentHeading);
  headerContentWrapper.appendChild(headerContentText);
  headerContentWrapper.appendChild(bookTableButton);

  header.appendChild(h1);
  header.appendChild(headerContentWrapper);

  return header;
}

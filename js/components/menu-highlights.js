import Pattern from './pattern';
import Images from '../utils/imageImports';

export default function MenuHighlights() {
  const menuHighlights = document.createElement('section');
  menuHighlights.className = 'menu';

  const section = document.createElement('section');
  section.className = 'menu__introduction';

  const sectionH2 = document.createElement('h2');
  sectionH2.innerText = 'A few highlights from our menu';
  sectionH2.className = 'menu__introduction-heading';

  const sectionParagraph = document.createElement('p');
  sectionParagraph.innerText =
    'We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.';
  sectionParagraph.className = 'menu__introduction-text';

  section.appendChild(Pattern('divide', 'menu'));
  section.appendChild(sectionH2);
  section.appendChild(sectionParagraph);

  const list = document.createElement('ul');
  list.className = 'menu__list';

  list.appendChild(
    ListItem(
      'Seared Salmon Fillet',
      'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
      'salmon',
    ),
  );
  list.appendChild(
    ListItem(
      'Rosemary Filet Mignon',
      'Our prime beef served to your taste with a delicious choice of seasonal sides.',
      'beef',
    ),
  );
  list.appendChild(
    ListItem(
      'Summer Fruit Chocolate Mousse',
      'Creamy mousse combined with summer fruits and dark chocolate shavings.',
      'chocolate',
    ),
  );

  menuHighlights.appendChild(section);
  menuHighlights.appendChild(list);

  return menuHighlights;
}

function ListItem(heading, text, imgClass) {
  const listItem = document.createElement('li');
  listItem.className = 'menu__item';

  const div = document.createElement('div');
  div.className = 'menu__text-wrapper';

  const h3 = document.createElement('h3');
  h3.innerText = heading;
  h3.className = 'menu__heading';

  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  paragraph.className = 'menu__text';

  div.appendChild(h3);
  div.appendChild(paragraph);

  const picture = Picture(imgClass);
  picture.appendChild(Pattern('divide', 'menu-highlights'));

  listItem.appendChild(picture);
  listItem.appendChild(div);

  return listItem;
}

function Picture(srcName) {
  const picture = document.createElement('picture');
  picture.className = 'menu__image-wrapper';

  const sourceDesktop = document.createElement('source');
  sourceDesktop.srcset = `${Images[srcName].desktop2x} 2x, ${Images[srcName].desktop}`;
  sourceDesktop.media = '(min-width: 700px)';

  const sourceMobile = document.createElement('source');
  sourceMobile.srcset = `${Images[srcName].mobile2x} 2x, ${Images[srcName].mobile}`;

  const img = document.createElement('img');
  img.srcset = `${Images[srcName].desktop2x} 2x`;
  img.src = Images[srcName].desktop;
  img.alt = srcName;
  img.className = 'menu__image';

  picture.appendChild(sourceDesktop);
  picture.appendChild(sourceMobile);
  picture.appendChild(img);

  return picture;
}

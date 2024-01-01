export default function MenuHighlights() {
  const menuHighlights = document.createElement('section');

  const section = document.createElement('section');

  const sectionH2 = document.createElement('h2');
  sectionH2.innerHTML = 'A few highlights from our menu';

  const sectionParagraph = document.createElement('p');
  sectionParagraph.innerHTML =
    'We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.';

  section.appendChild(sectionH2);
  section.appendChild(sectionParagraph);

  const list = document.createElement('ul');

  list.appendChild(
    ListItem(
      'Seared Salmon Fillet',
      'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
    ),
  );
  list.appendChild(
    ListItem(
      'Rosemary Filet Mignon',
      'Our prime beef served to your taste with a delicious choice of seasonal sides.',
    ),
  );
  list.appendChild(
    ListItem(
      'Summer Fruit Chocolate Mousse',
      'Creamy mousse combined with summer fruits and dark chocolate shavings.',
    ),
  );

  menuHighlights.appendChild(section);
  menuHighlights.appendChild(list);

  return menuHighlights;
}

function ListItem(heading, text) {
  const listItem = document.createElement('li');

  const h3 = document.createElement('h3');
  h3.innerHTML = heading;

  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;

  listItem.appendChild(h3);
  listItem.appendChild(paragraph);

  return listItem;
}

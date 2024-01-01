export default function Section(heading, text) {
  const section = document.createElement('section');

  const h2 = document.createElement('h2');
  h2.innerHTML = heading;

  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;

  section.appendChild(h2);
  section.appendChild(paragraph);

  return section;
}

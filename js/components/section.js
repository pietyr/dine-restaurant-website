let id = 0;

export default function Section(heading, text) {
  const section = document.createElement('section');
  section.className = 'section';

  const imageWrapper = document.createElement('div');
  imageWrapper.classList = 'section__image-wrapper';

  const img = document.createElement('div');
  img.className = `section__image section__image--${
    id === 0 ? 'enjoyable-place' : 'locally-sourced'
  }`;

  imageWrapper.appendChild(img);

  const textWrapper = document.createElement('div');
  textWrapper.className = 'section__text-wrapper';

  const patternDivide = document.createElement('div');
  patternDivide.className = 'section__pattern section__pattern--divide';

  const h2 = document.createElement('h2');
  h2.innerHTML = heading;
  h2.className = 'section__heading';

  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  paragraph.className = 'section__text';

  textWrapper.appendChild(patternDivide);
  textWrapper.appendChild(h2);
  textWrapper.appendChild(paragraph);

  section.appendChild(imageWrapper);
  section.appendChild(textWrapper);

  if (id === 1) {
    const patternLines = document.createElement('div');
    patternLines.className = 'section__pattern section__pattern--lines';
    section.appendChild(patternLines);
  }

  id++;
  return section;
}

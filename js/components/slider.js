import Button from './button';

const content = [
  {
    title: 'Family Gathering',
    text: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
  },
  {
    title: 'Special Events',
    text: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
  },
  {
    title: ' Social Events',
    text: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
  },
];

export default function Slider() {
  const slider = document.createElement('section');

  content.forEach((slide) => slider.appendChild(Slide(slide)));

  return slider;
}

function Slide({ title, text }) {
  const slide = document.createElement('article');

  const imgWrapper = document.createElement('div');

  const textWrapper = document.createElement('div');

  const h2 = document.createElement('h2');
  h2.innerHTML = title;

  const paragraph = document.createElement('p');
  paragraph.innerText = text;

  const list = document.createElement('ul');

  content.forEach(({ title }) => {
    const li = document.createElement('li');
    li.innerHTML = title;
    list.appendChild(li);
  });

  textWrapper.appendChild(h2);
  textWrapper.appendChild(paragraph);
  textWrapper.appendChild(Button('book a table', 'slider__button', 'dark'));
  textWrapper.appendChild(list);

  slide.appendChild(imgWrapper);
  slide.appendChild(textWrapper);

  return slide;
}

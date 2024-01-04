import Button from './button';

let currentSlide = 0;

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

const slides = content.map((slideContent, index) => Slide(slideContent, index));

const slider = document.createElement('section');

// let interval = setInterval(intervalFunction, 3000);

export default function Slider() {
  slider.className = 'slider';

  slider.appendChild(slides[currentSlide]);

  return slider;
}

function Slide({ title, text }, slideIndex) {
  const slide = document.createElement('article');
  slide.className = 'slider__slide';

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'slider__img-wrapper';

  const img = document.createElement('div');
  img.className = `slider__img slider__img--${title
    .toLowerCase()
    .replace(' ', '-')}`;

  imgWrapper.appendChild(img);

  const textWrapper = document.createElement('div');
  textWrapper.className = 'slider__text-wrapper';

  const h2 = document.createElement('h2');
  h2.className = 'slider__heading';
  h2.innerHTML = title;

  const paragraph = document.createElement('p');
  paragraph.className = 'slider__text';
  paragraph.innerText = text;

  const list = document.createElement('ul');
  list.className = 'slider__list';

  content.forEach(({ title }, index) => {
    const li = document.createElement('li');
    li.className = 'slider__list-item';
    if (index === slideIndex) {
      li.classList.add('slider__list-item--active');
    }
    li.innerText = title;

    li.addEventListener('click', () => {
      clearInterval(interval);
      slider.innerHTML = '';
      slider.appendChild(slides[index]);
      currentSlide = index;
      interval = setInterval(intervalFunction, 3000);
    });

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

function intervalFunction() {
  slider.innerHTML = '';
  currentSlide = currentSlide === 2 ? 0 : currentSlide + 1;
  slider.appendChild(slides[currentSlide]);
}

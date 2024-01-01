import renderHeader from '../components/home-header';
import Section from '../components/section';

const page = document.createElement('div');
page.appendChild(renderHeader());
page.appendChild(
  Section(
    'Enjoyable place for all the family',
    'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
  ),
);
page.appendChild(
  Section(
    'The most locally sourced food',
    'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.',
  ),
);

export default function renderHome() {
  return page;
}

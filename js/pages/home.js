import Header from '../components/home-header';
import MenuHighlights from '../components/menu-highlights';
import Prefooter from '../components/prefooter';
import Section from '../components/section';
import Slider from '../components/slider';

export default function Home() {
  const page = document.createElement('div');
  page.appendChild(Header());
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
  page.appendChild(MenuHighlights());
  page.appendChild(Slider());
  page.appendChild(Prefooter());

  return page;
}

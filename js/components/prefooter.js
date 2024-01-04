import Button from './button';

export default function Prefooter() {
  const prefooter = document.createElement('section');
  prefooter.className = 'prefooter';

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Ready to make a reservation?';
  paragraph.className = 'prefooter__text';

  prefooter.appendChild(paragraph);
  prefooter.appendChild(
    Button('book a table', 'prefooter__button', 'transparent-dark'),
  );

  return prefooter;
}

import BookTableButton from './book-table-button';

export default function Prefooter() {
  const prefooter = document.createElement('section');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Ready to make a reservation?';

  prefooter.appendChild(paragraph);
  prefooter.appendChild(BookTableButton());

  return prefooter;
}

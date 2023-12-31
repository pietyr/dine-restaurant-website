export default function BookTableButton(className = '') {
  const button = document.createElement('button');
  button.className = `book-table-button ${className}`;
  button.innerHTML = 'book a table';
  return button;
}

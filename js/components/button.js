export default function Button(textContent, className = '') {
  const button = document.createElement('button');
  button.className = `button ${className}`;
  button.innerHTML = textContent;
  return button;
}

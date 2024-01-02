export default function Button(
  textContent,
  className = '',
  variant = 'transparent-dark',
) {
  const button = document.createElement('button');
  button.className = `button ${className} button--${variant}`;
  button.innerHTML = textContent;
  return button;
}

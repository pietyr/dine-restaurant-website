import Home from './js/pages/home';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app');
  app.appendChild(Home());
});

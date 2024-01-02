import Home from './js/pages/home';
import './sass/main.scss';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app');
  app.appendChild(Home());
});

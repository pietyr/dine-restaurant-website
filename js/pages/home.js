import renderHeader from '../components/home-header';

const page = document.createElement('div');
page.appendChild(renderHeader());

export default function renderHome() {
  return page;
}

export default function Pattern(type = 'divide', source = '', curveType = '') {
  const pattern = document.createElement('div');
  pattern.classList.add('pattern');
  pattern.classList.add(`pattern--${type}`);
  if (source !== '') {
    pattern.classList.add(`${source}__pattern`);
    pattern.classList.add(`${source}__pattern--${type}`);
  }
  if (type === 'curve' && curveType !== '') {
    pattern.classList.add(`pattern--${curveType}`);
  }
  return pattern;
}

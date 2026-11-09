'use strict';
const search = document.querySelector('#search');
const year = document.querySelector('#year');
const codeOnly = document.querySelector('#code-only');
const buttons = [...document.querySelectorAll('.filters button[data-category]')];
const works = [...document.querySelectorAll('.paper')];
const counter = document.querySelector('#result-count');
let category = 'all';
function filter() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  for (const work of works) {
    const show = (category === 'all' || work.dataset.category.split(' ').includes(category)) &&
      (!year.value || work.dataset.year === year.value) &&
      (!codeOnly.checked || work.dataset.code === 'true') &&
      (!query || work.dataset.search.includes(query));
    work.hidden = !show;
    if (show) visible++;
  }
  counter.textContent = `${visible} ${visible === 1 ? 'work' : 'works'}`;
  document.querySelector('#empty-state').hidden = visible > 0;
  for (const group of document.querySelectorAll('.catalog-group')) {
    const count = group.querySelectorAll('.paper:not([hidden])').length;
    group.hidden = count === 0;
    group.querySelector('.catalog-group-heading > p').textContent = `${count} ${count === 1 ? 'work' : 'works'}`;
  }
}
for (const button of buttons) button.addEventListener('click', () => {
  category = button.dataset.category;
  for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
  filter();
});
search.addEventListener('input', filter);
year.addEventListener('change', filter);
codeOnly.addEventListener('change', filter);
document.querySelector('#reset').addEventListener('click', () => {
  search.value = ''; year.value = ''; codeOnly.checked = false; category = 'all';
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.category === 'all'));
  filter(); search.focus();
});
const menu = document.querySelector('.mobile-menu');
for (const link of menu.querySelectorAll('a')) link.addEventListener('click', () => { menu.open = false; });
filter();
// Topic summaries link directly to individual works, including after filtering.
for (const anchor of document.querySelectorAll('a[href^="#paper-"], a[href^="#catalog-"]')) anchor.addEventListener('click', () => {
  const target = document.getElementById(anchor.hash.slice(1));
  if (target && (target.hidden || anchor.hash.startsWith('#catalog-'))) {
    search.value = ''; year.value = ''; codeOnly.checked = false; category = 'all';
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.category === 'all'));
    filter();
  }
});

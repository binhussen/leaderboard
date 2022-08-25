/** @format */

import './styles.css';

const scores = [
  {
    name: 'Mohammed',
    score: 100,
  },
  {
    name: 'Hussen',
    score: 90,
  },
  {
    name: 'Abdu',
    score: 90,
  },
];

const scoresEl = document.querySelector('.scores');
scores.forEach(({ name, score }) => {
  scoresEl.innerHTML += `<li class="score">${name} : ${score}</li>`;
});

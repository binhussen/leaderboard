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
];

const scoresEl = document.querySelector('.scores');
scores.forEach(({ name, score }) => {
  scoresEl.innerHTML += `${name} : ${score}`;
});

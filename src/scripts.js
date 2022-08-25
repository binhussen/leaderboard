/** @format */

import './styles.css';

// const scoresEl = document.querySelector('.scores');
const nameEl = document.querySelector('.name');
const scoreEl = document.querySelector('.score');
const submitEl = document.querySelector('.btn-submit');
const API_URL =
	'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ze1TjZFGUQAXVEhzCJJJ/scores/';

// scores.forEach(({ name, score }) => {
// 	scoresEl.innerHTML += `<li class="score">${name} : ${score}</li>`;
// });s

const addScore = async (event) => {
	event.preventDefault();
	await postGame({ user: nameEl.value, score: +scoreEl.value });
	nameEl.value = '';
	scoreEl.value = '';
};

const postGame = async (score) => {
	await fetch(API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(score),
	});
};

submitEl.addEventListener('click', addScore);

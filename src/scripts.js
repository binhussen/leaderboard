/** @format */

import './styles.css';

const scoresEl = document.querySelector('.scores');
const nameEl = document.querySelector('.name');
const scoreEl = document.querySelector('.score');
const submitEl = document.querySelector('.btn-submit');
const refreshEl = document.querySelector('.btn-refresh');

const API_URL =
	'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ze1TjZFGUQAXVEhzCJJJ/scores/';

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

const getGame = async () => {
	const fetchGame = await fetch(API_URL);
	const data = await fetchGame.json();
	renderScores(data.result);
};

const renderScores = async () => {
	const fetchPro = await fetch(API_URL);
	const data = await fetchPro.json();

	scoresEl.innerHTML = '';
	data.result.forEach(({ user, score }) => {
		scoresEl.innerHTML += `<li class="score__list">${user} : ${score}</li>`;
	});
};

submitEl.addEventListener('click', addScore);
refreshEl.addEventListener('click', renderScores);

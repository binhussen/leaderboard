/** @format */
import { postGame, getGame } from './operation';
import './styles.css';

const scoresEl = document.querySelector('.scores');
const nameEl = document.querySelector('.name');
const scoreEl = document.querySelector('.score');
const submitEl = document.querySelector('.btn-submit');
const refreshEl = document.querySelector('.btn-refresh');

const addScore = async (event) => {
	event.preventDefault();
	await postGame({ user: nameEl.value, score: +scoreEl.value });
	nameEl.value = '';
	scoreEl.value = '';
};

const renderScores = async () => {
	const scores = await getGame();
	scoresEl.innerHTML = '';
	scores.forEach(({ user, score }) => {
		scoresEl.innerHTML += `<li class="score__list">${user} : ${score}</li>`;
	});
};

submitEl.addEventListener('click', addScore);
refreshEl.addEventListener('click', renderScores);

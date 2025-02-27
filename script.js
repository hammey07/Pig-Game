'use strict';

let playing = true;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  document.querySelector('.current-score').textContent = 0;
  playing = true;
};
// };
init();
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  //Generate a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // disaply dice
    console.log(activePlayer);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check for rolled 1 : if true, switch to other player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      //switch to next player
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});

const nested = [2, 4, [6, 7], 9];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k], l] = nested;

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

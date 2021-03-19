/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

'use strict';

//Select DOM elements
const playerZeroHolder = document.querySelector('.player-0-panel');
const playerOneHolder = document.querySelector('.player-1-panel');
const scoreZeroHolder = document.getElementById('score-0');
const scoreOneHolder = document.getElementById('score-1');
const currentScoreZeroHolder = document.getElementById('current-0');
const currentScoreOneHolder = document.getElementById('current-1');

const diceHolder = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

let scores
let currentScore
let activePlayer
let activePlay

//Default starting conditions
scoreZeroHolder.textContent = 0;
scoreOneHolder.textContent = 0;
diceHolder.classList.add('hidden');

const startAgain = function () {
    scoreZeroHolder.textContent = 0;
    scoreOneHolder.textContent = 0;
    currentScoreZeroHolder.textContent = 0;
    currentScoreOneHolder.textContent = 0;

    diceHolder.classList.add('hidden');
    playerZeroHolder.classList.remove('winner');
    playerOneHolder.classList.remove('winner');
    playerZeroHolder.classList.add('active');
    playerOneHolder.classList.remove('active');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    activePlay = true;
}
startAgain();

const playerSwitch = function () {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0;
    }
    playerZeroHolder.classList.toggle('active');
    playerOneHolder.classList.toggle('active');
};

//Roll Dice event

btnRoll.addEventListener('click', function () {
    if (activePlay) {
        //Create random dice value
        const diceValue = Math.trunc(Math.random() * 6) + 1;
        console.log(diceValue);

        //Show dice value
        diceHolder.classList.remove('hidden');
        diceHolder.src = `dice-${diceValue}.png`;

        //Check if dice value is 1
        if (diceValue !== 1) {
            //Add dice value to current score
            currentScore += diceValue;
            console.log(activePlayer);
            document.getElementById(`current-${activePlayer}`).textContent = currentScore;

        } else {
            //Switch to other player
            playerSwitch();
        }
    }
})

//Hold Button
btnHold.addEventListener('click', function () {
    if (activePlay) {
        //Add current score to score of active player 
        scores[activePlayer] += currentScore;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        //Score reached 100?
        if (scores[activePlayer] >= 100) {
            //Finish game
            activePlay = false;
            diceHolder.classList.add('hidden');
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        } else {
            //Switch to other player
            playerSwitch();
        }
    }
});

btnNew.addEventListener('click', startAgain);


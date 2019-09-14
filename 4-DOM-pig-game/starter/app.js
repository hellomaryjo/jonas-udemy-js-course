/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, winningScore;

// init game
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        winningScore = document.getElementById('winningScoreInput').value;
        console.log(winningScore);
        // 1. Get random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // var dice = 6;

        // 2. Update Dice pic
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice === 1) {
            nextPlayer();
        } else if (dice === 6 && dice === previousDice) {
            // delete ENTIRE score when prev and current die are equal to 6
            // console.log('dice is equal to ' + dice + ' and previousDice is equal to ' + previousDice);
            document.querySelector('#score-' + activePlayer).textContent = 0;
            document.querySelector('#current-' + activePlayer).textContent = 0;
            // next player
            nextPlayer();
        } else {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        // set previousDice to current dice
        previousDice = dice;
        // restart game
        document.querySelector('.btn-new').textContent = 'Restart Game';
        // hide winning score input
        document.getElementById('winningScore').style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won game
        if (scores[activePlayer] >= winningScore) {
            // player wins
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('.winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('.winner');
            // prevent game from continuing
            gamePlaying = false;
            // show winning score input
            document.getElementById('winningScore').style.display = 'block';
            document.querySelector('.btn-new').textContent = 'New Game';
        } else {
            // next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;  

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', function() {
    init();
    document.getElementById('winningScore').style.display = 'none';
    winningScore = document.getElementById('winningScoreInput').value;
});

function init() {
    gamePlaying = true;

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    previousDice = null;

    document.querySelector('.btn-new').textContent = 'New Game';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.dice').style.display = 'none';
    
}

// Coding challenge!
// 1. A player loses ENTIRE score when they roll two 6 in a row, then it's next player's turn

// 2. Add input field so users can set winning score
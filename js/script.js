var buttonRock = document.getElementById('rock');
var buttonScissors = document.getElementById('scissors');
var buttonPaper = document.getElementById('paper');
var buttonNewGame = document.getElementById('new-game');
var output = document.getElementById('output');
var result = document.getElementById('result');
var round = document.getElementById('round');
var finalResult = document.getElementById('final-result');
var message = document.getElementById('message');
var roundCount = 0;
var playerWinCount = 0;
var computerWinCount = 0;
var numberOfRoundsToWin = 0;

buttonNewGame.addEventListener ('click', function() {
    numberOfRoundsToWin = window.prompt('How many rounds to win in this game?');
    roundCount = 0;
    playerWinCount = 0;
    computerWinCount = 0;
    output.innerHTML = 'New Game';
    gameRepeater(numberOfRoundsToWin);
});

function gameRepeater() {
    if ((numberOfRoundsToWin > playerWinCount) && (numberOfRoundsToWin > computerWinCount)) {

        // sprawdzam czy wartość zmiennych wychodzi poz funkcję ... i kicha
        message.innerHTML = 'mess: numberOfRoundsToWin: ' + numberOfRoundsToWin + ', playerWinCount: ' + playerWinCount + ', computerWinCount: ' + computerWinCount;

        buttonRock.addEventListener ('click', function() {
            var computerMove = getRandomIntInclusive(1, 3);
            if (computerMove == 1) {
                output.innerHTML = 'TIE: you played ROCK, computer played ROCK';
                roundCount++;
            } else if (computerMove == 2) {
                output.innerHTML = 'YOU WON: you played ROCK, computer played SCISSORS';
                roundCount++;
                playerWinCount++;
            } else {
                output.innerHTML = 'YOU LOST: you played ROCK, computer played PAPER';
                roundCount++;
                computerWinCount++;
            }
            displayBoard();

            // sprawdzam, czy wartość zmiennych jest widoczna wewnątrz funkcji ... i oczywiście jest
            finalResult.innerHTML = 'fnlR: numberOfRoundsToWin: ' + numberOfRoundsToWin + ' playerWinCount: ' + playerWinCount + ' computerWinCount: ' + computerWinCount;
        });

        buttonScissors.addEventListener ('click', function() {
            var computerMove = getRandomIntInclusive(1, 3);
            if (computerMove == 1) {
                output.innerHTML = 'YOU LOST: you played SCISSORS, computer played ROCK';
                roundCount++;
                computerWinCount++;
            } else if (computerMove == 2) {
                output.innerHTML = 'TIE: you played SCISSORS, computer played SCISSORS';
                roundCount++;
            } else {
                output.innerHTML = 'YOU WON: you played SCISSORS, computer played PAPER';
                roundCount++;
                playerWinCount++;
            }
            displayBoard();
        });

        buttonPaper.addEventListener ('click', function() {
            var computerMove = getRandomIntInclusive(1, 3);
            if (computerMove == 1) {
                output.innerHTML = 'YOU WON: you played PAPER, computer played ROCK';
                roundCount++;
                playerWinCount++;
            } else if (computerMove == 2) {
                output.innerHTML = 'YOU LOST: you played PAPER, computer played SCISSORS';
                roundCount++;
                computerWinCount++;
            } else {
                output.innerHTML = 'TIE: you played PAPER, computer played PAPER';
                roundCount++;
            }
            displayBoard();
        });

    } else if (playerWinCount > computerWinCount) {
        finalResult.innerHTML = 'YOU WON THE ENTIRE GAME !!!';
    } else {
        finalResult.innerHTML = 'COMPUTER WON ENTIRE GAME !!!';
    }

}

function displayBoard() {
    round.innerHTML = 'Rounds played: ' + roundCount;
    result.innerHTML = '(You) ' + playerWinCount + ' - ' + computerWinCount + ' (Computer)';
    output.innerHTML = output.innerHTML + '<br>' + 'The first one who wins ' + numberOfRoundsToWin + ' rounds is the entire game winner';
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var buttonRock = document.getElementById('rock');
var buttonScissors = document.getElementById('scissors');
var buttonPaper = document.getElementById('paper');
var output = document.getElementById('output');

buttonRock.addEventListener ('click', function() {
    var computerMove = getRandomIntInclusive(1, 3);
    if (computerMove == 1) {
        output.innerHTML = 'TIE: you played ROCK, computer played ROCK';
    } else if (computerMove == 2) {
        output.innerHTML = 'YOU WON: you played ROCK, computer played SCISSORS';
    } else if (computerMove == 3) {
        output.innerHTML = 'YOU LOST: you played ROCK, computer played PAPER';
    } else {
        output.innerHTML = 'FATAL ERROR';
    }
});

buttonScissors.addEventListener ('click', function() {
    var computerMove = getRandomIntInclusive(1, 3);
    if (computerMove == 1) {
        output.innerHTML = 'YOU LOST: you played SCISSORS, computer played ROCK';
    } else if (computerMove == 2) {
        output.innerHTML = 'TIE: you played SCISSORS, computer played SCISSORS';
    } else if (computerMove == 3) {
        output.innerHTML = 'YOU WON: you played SCISSORS, computer played PAPER';
    } else {
        output.innerHTML = 'FATAL ERROR';
    }
});

buttonPaper.addEventListener ('click', function() {
    var computerMove = getRandomIntInclusive(1, 3);
    if (computerMove == 1) {
        output.innerHTML = 'YOU WON: you played PAPER, computer played ROCK';
    } else if (computerMove == 2) {
        output.innerHTML = 'YOU LOST: you played PAPER, computer played SCISSORS';
    } else if (computerMove == 3) {
        output.innerHTML = 'TIE: you played PAPER, computer played PAPER';
    } else {
        output.innerHTML = 'FATAL ERROR';
    }
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};





/*
buttonRock.addEventListener('click', function() {
    var computerMove = getRandomIntInclusive(1, 3);
    var myMove = playermove(rock)
    var rock = 1;
    var scissors = 2;
    var paper = 3;
    if (computerMove == 1) {output.innerHTML += 'TIE'}
    else if (computerMove == 2) {output.innerHTML += 'YOU WON'}
    else if (computerMove == 3) {output.innerHTML += 'YOU LOST'}
    }); 

    output.innerHTML = 'wynik ' + computerMove + output.innerHTML; 

    output.innerHTML += 'test';

});
  

function playerMove(arg) {
    var playResult = playerMove(arg)
    if (arg == 1) {player(arg) == rock;}
    else if(arg == 2) {player(arg) == scissors;}
    else if(arg == 3) {player(arg) == paper;}
    else output.innerHTML += 'incorrect data';
}

var kki = playerMove(1);
output.innerHTML += '<br><br>' + 'wynik: ' + kki + '<br><br>';

*/
    /* if (computerMove == 1) {output.innerHTML += 'TIE'}
    else if (computerMove == 2) {output.innerHTML += 'YOU WON'}
    else if (computerMove == 3) {output.innerHTML += 'YOU LOST'}
    }); 

buttonScissors.addEventListener('click', function() {
    output.innerHTML = 'klikam scissors' + '<br>' + output.innerHTML;
});

buttonPaper.addEventListener('click', function() {
    output.innerHTML = 'klikam paper' + '<br>' + output.innerHTML;
});
*/

/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var computerMove = getRandomIntInclusive(1, 3);
output.innerHTML = 'wynik ' + computerMove + output.innerHTML; 
*/

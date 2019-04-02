var buttonRock = document.getElementById('rock');
var buttonScissors = document.getElementById('scissors');
var buttonPaper = document.getElementById('paper');
var output = document.getElementById('output');

buttonRock.addEventListener('click', function() {
    output.innerHTML = 'klikam rock' + '<br>' + output.innerHTML;
});

buttonScissors.addEventListener('click', function() {
    output.innerHTML = 'klikam scissors' + '<br>' + output.innerHTML;
});

buttonPaper.addEventListener('click', function() {
    output.innerHTML = 'klikam paper' + '<br>' + output.innerHTML;
});
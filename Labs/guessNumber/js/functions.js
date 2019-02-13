$("document").ready(function(){
    

var randomNum = Math.floor(Math.random() * 99) + 1;
console.log(randomNum); 
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';
guessField.focus();
// var resetButton;
function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount == 1) {
        guesses.innerHTML = "Previous guesses: ";
    }
    guesses.innerHTML += userGuess + ' ';

    if (userGuess == randomNum) {
        $('#lastResult').html('Congratulations! You got it right!');
        // lastResult.innerHTML = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
         $('#lowOrHi').html('');
        // lowOrHi.innerHTML = '';
        setGameOver();

    }
    else if (guessCount == 7) {
        $('#lastResult').html('Sorry, you lost!');
        // lastResult.innerHTML = 'Sorry, you lost!';
        setGameOver();
    }
    else {
        $('#lastResult').html('Wrong!');
        // lastResult.innerHTML = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNum) {
            $('#lowOrHi').html('Last guess was too low!');
            // lowOrHi.innerHTML = 'Last guess was to low!';
        }
        else if (userGuess > randomNum) {
            $('#lowOrHi').html('Last guess was too high!');
            // lowOrHi.innerHTML = 'Last guess was to high!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.style.display = 'none';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNum = Math.floor(Math.random() * 99) + 1;

}

})

// Generate a random number between low and high
const low = 1;
const high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
let attempts = 3;

function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (isNaN(guess) || guess < low || guess > high) {
        message.textContent = "Please enter a valid number between 1 and 10";
        return;
    }

    if (guess === correct_ans) {
        message.textContent = "You Win!";
        disableInput();
    } else if (guess < correct_ans) {
        message.textContent = "Correct answer is greater!";
        attempts--;
    } else {
        message.textContent = "Correct answer is smaller!";
        attempts--;
    }

    if (attempts === 0) {
        message.textContent = "You lose! The correct answer was " + correct_ans;
        disableInput();
    }
}

function disableInput() {
    document.getElementById("guess").disabled = true;
    document.querySelector("button").disabled = true;
}

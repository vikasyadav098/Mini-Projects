const randomNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector(".form");
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let previousGuess = [];
let attemptsLeft = 10;
let playGame = true;

function displayMessage(message) {
  lowOrHi.textContent = message;
}

function endGame() {
  playGame = false;
  userInput.disabled = true;
  submit.disabled = true;
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayMessage("Enter a valid number between 1 and 100.");
    return;
  }

  previousGuess.push(guess);
  guessSlot.textContent = previousGuess.join(", ");
  attemptsLeft -= 1;
  remaining.textContent = attemptsLeft;

  if (guess === randomNumber) {
    displayMessage("Congratulations! You guessed it right.");
    endGame();
    return;
  }

  if (attemptsLeft === 0) {
    displayMessage(`Game over. The random number was ${randomNumber}.`);
    endGame();
    return;
  }

  if (guess < randomNumber) {
    displayMessage("Your guess is too low.");
  } else {
    displayMessage("Your guess is too high.");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!playGame) {
    return;
  }

  const guess = parseInt(userInput.value, 10);
  validateGuess(guess);
  userInput.value = "";
});

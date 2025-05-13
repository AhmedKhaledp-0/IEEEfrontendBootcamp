// Game variables
let targetNumber;
let attempts = 0;
let gameOver = false;

// DOM elements
const userGuessInput = document.getElementById("user-guess");
const submitGuessButton = document.getElementById("submit-guess");
const gameMessageElement = document.getElementById("game-message");
const guessesListElement = document.getElementById("guesses-list");
const attemptsElement = document.getElementById("attempts");

// Initialize the game
function initGame() {
  // Generate a random number between 1 and 100
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;

  // Reset the UI
  attemptsElement.textContent = "0";
  gameMessageElement.textContent = "Enter a number and click 'Submit Guess'";
  gameMessageElement.className = ""; // Remove any success/error classes
  userGuessInput.value = "";
  guessesListElement.innerHTML = ""; // Clear previous guesses

  // Reset button state
  submitGuessButton.textContent = "Submit Guess";

  // Enable input and button
  userGuessInput.disabled = false;
  submitGuessButton.disabled = false;

  console.log("Game initialized with target number:", targetNumber);
}

// Handle the user's guess
function handleGuess() {
  // Don't do anything if the game is over
  if (gameOver && submitGuessButton.textContent === "Play Again") {
    initGame();
    return;
  }

  // Get the user's guess
  const userGuess = parseInt(userGuessInput.value);

  // Validate the guess
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    gameMessageElement.textContent =
      "Please enter a valid number between 1 and 100.";
    gameMessageElement.className = "error";
    return;
  }

  // Increment attempts
  attempts++;
  attemptsElement.textContent = attempts;

  // Add the guess to the history
  const newGuessItem = document.createElement("li");
  newGuessItem.textContent = userGuess;
  guessesListElement.appendChild(newGuessItem);

  // Check the guess against the target number
  if (userGuess === targetNumber) {
    // User guessed correctly
    gameMessageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
    gameMessageElement.className = "success";

    // Update UI for game over state
    gameOver = true;
    userGuessInput.disabled = true;
    submitGuessButton.textContent = "Play Again";

    // Highlight the correct guess
    newGuessItem.classList.add("correct");
  } else if (userGuess < targetNumber) {
    // User guessed too low
    gameMessageElement.textContent = "Too low! Try a higher number.";
    gameMessageElement.className = "hint";
    newGuessItem.classList.add("too-low");
  } else {
    // User guessed too high
    gameMessageElement.textContent = "Too high! Try a lower number.";
    gameMessageElement.className = "hint";
    newGuessItem.classList.add("too-high");
  }

  // Clear the input field
  userGuessInput.value = "";
  userGuessInput.focus();
}

// Event listeners
submitGuessButton.addEventListener("click", handleGuess);

userGuessInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", initGame);

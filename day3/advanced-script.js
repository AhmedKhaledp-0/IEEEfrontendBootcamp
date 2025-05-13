// Game variables
let targetNumber;
let minRange = 1;
let maxRange = 100;
let attempts = 0;
let hintsUsed = 0;
let gameOver = false;
let startTime;
let timerInterval;
let difficulty = "medium"; // default difficulty

// DOM elements
const userGuessInput = document.getElementById("user-guess");
const submitGuessButton = document.getElementById("submit-guess");
const hintButton = document.getElementById("hint-btn");
const gameMessageElement = document.getElementById("game-message");
const guessesListElement = document.getElementById("guesses-list");
const attemptsElement = document.getElementById("attempts");
const hintsUsedElement = document.getElementById("hints-used");
const minRangeElement = document.getElementById("min-range");
const maxRangeElement = document.getElementById("max-range");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const temperatureIndicator = document.querySelector(".temperature-indicator");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const winModal = document.getElementById("win-modal");
const winningNumberElement = document.getElementById("winning-number");
const winningAttemptsElement = document.getElementById("winning-attempts");
const winningTimeElement = document.getElementById("winning-time");
const finalScoreElement = document.getElementById("final-score");
const playerNameInput = document.getElementById("player-name");
const saveScoreButton = document.getElementById("save-score");
const playAgainButton = document.getElementById("play-again");
const highScoresList = document.getElementById("high-scores-list");

// Set difficulty ranges
const difficultySettings = {
  easy: { min: 1, max: 50 },
  medium: { min: 1, max: 100 },
  hard: { min: 1, max: 200 },
};

// Initialize the game
function initGame() {
  // Apply difficulty settings
  minRange = difficultySettings[difficulty].min;
  maxRange = difficultySettings[difficulty].max;

  // Generate a random number within the range
  targetNumber =
    Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

  // Reset game state
  attempts = 0;
  hintsUsed = 0;
  gameOver = false;

  // Update UI with range
  minRangeElement.textContent = minRange;
  maxRangeElement.textContent = maxRange;
  userGuessInput.min = minRange;
  userGuessInput.max = maxRange;
  userGuessInput.placeholder = `Enter a number (${minRange}-${maxRange})`;

  // Reset UI elements
  attemptsElement.textContent = "0";
  hintsUsedElement.textContent = "0";
  gameMessageElement.textContent = `Enter a number between ${minRange} and ${maxRange} and click "Submit Guess"`;
  gameMessageElement.className = "";
  userGuessInput.value = "";
  guessesListElement.innerHTML = "";
  temperatureIndicator.style.left = "0%";

  // Reset and start timer
  resetTimer();
  startTimer();

  // Enable input and buttons
  userGuessInput.disabled = false;
  submitGuessButton.disabled = false;
  hintButton.disabled = false;

  // Hide modal if visible
  winModal.style.display = "none";

  console.log("Game initialized with target number:", targetNumber);
}

// Timer functions
function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

function resetTimer() {
  clearInterval(timerInterval);
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
}

function getElapsedTimeString() {
  return `${minutesElement.textContent}:${secondsElement.textContent}`;
}

// Handle the user's guess
function handleGuess() {
  // Don't do anything if the game is over
  if (gameOver) return;

  // Get the user's guess
  const userGuess = parseInt(userGuessInput.value);

  // Validate the guess
  if (isNaN(userGuess) || userGuess < minRange || userGuess > maxRange) {
    gameMessageElement.textContent = `Please enter a valid number between ${minRange} and ${maxRange}.`;
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

  // Update temperature gauge
  updateTemperatureGauge(userGuess);

  // Check the guess against the target number
  if (userGuess === targetNumber) {
    // User guessed correctly
    handleCorrectGuess(newGuessItem);
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

// Handle a correct guess
function handleCorrectGuess(guessElement) {
  // Stop the timer
  clearInterval(timerInterval);

  // Update UI
  gameMessageElement.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts!`;
  gameMessageElement.className = "success";
  guessElement.classList.add("correct");

  // Update game state
  gameOver = true;
  userGuessInput.disabled = true;
  submitGuessButton.disabled = true;
  hintButton.disabled = true;

  // Calculate score
  const elapsedTime =
    parseInt(minutesElement.textContent) * 60 +
    parseInt(secondsElement.textContent);
  const score = calculateScore(attempts, hintsUsed, elapsedTime, difficulty);

  // Show win modal
  winningNumberElement.textContent = targetNumber;
  winningAttemptsElement.textContent = attempts;
  winningTimeElement.textContent = getElapsedTimeString();
  finalScoreElement.textContent = score;

  // Show the modal with slight delay to allow animations to complete
  setTimeout(() => {
    winModal.style.display = "flex";
    createConfetti();
  }, 800);
}

// Calculate score based on attempts, hints, time and difficulty
function calculateScore(attempts, hints, time, difficultyLevel) {
  // Base score depends on difficulty
  let difficultyMultiplier;
  switch (difficultyLevel) {
    case "easy":
      difficultyMultiplier = 1;
      break;
    case "medium":
      difficultyMultiplier = 1.5;
      break;
    case "hard":
      difficultyMultiplier = 2;
      break;
    default:
      difficultyMultiplier = 1;
  }

  // Calculate score: more attempts, hints and time reduce score
  let baseScore = 1000 * difficultyMultiplier;
  let attemptsPenalty = attempts * 50;
  let hintsPenalty = hints * 100;
  let timePenalty = Math.floor(time / 5) * 10;

  let finalScore = baseScore - attemptsPenalty - hintsPenalty - timePenalty;

  // Ensure score is positive
  return Math.max(finalScore, 0);
}

// Provide a hint
function getHint() {
  if (gameOver) return;

  hintsUsed++;
  hintsUsedElement.textContent = hintsUsed;

  // Calculate a narrower range around the target number
  let hintRange = Math.max(Math.floor((maxRange - minRange) / 4), 10);
  let newMin = Math.max(minRange, targetNumber - hintRange);
  let newMax = Math.min(maxRange, targetNumber + hintRange);

  // Make sure the range includes the target number
  if (targetNumber - newMin < 3) newMin = Math.max(minRange, targetNumber - 5);
  if (newMax - targetNumber < 3) newMax = Math.min(maxRange, targetNumber + 5);

  gameMessageElement.textContent = `Hint: The number is between ${newMin} and ${newMax}`;
  gameMessageElement.className = "hint";

  // Add hint to the game history
  const hintItem = document.createElement("li");
  hintItem.textContent = `Hint: ${newMin}-${newMax}`;
  hintItem.classList.add("hint-item");
  guessesListElement.appendChild(hintItem);
}

// Update the temperature gauge based on the guess
function updateTemperatureGauge(guess) {
  const totalRange = maxRange - minRange;
  const guessDistance = Math.abs(targetNumber - guess);

  // Calculate proximity (0 to 100, where 100 is closest to target)
  const proximity = 100 - (guessDistance / totalRange) * 100;

  // Update the indicator position
  temperatureIndicator.style.left = `${proximity}%`;
}

// Save the player's score
function saveScore() {
  const playerName = playerNameInput.value.trim() || "Anonymous";
  const score = parseInt(finalScoreElement.textContent);
  const gameData = {
    name: playerName,
    score: score,
    attempts: attempts,
    time: getElapsedTimeString(),
    difficulty: difficulty,
    date: new Date().toLocaleDateString(),
  };

  // Get existing scores from localStorage
  let highScores =
    JSON.parse(localStorage.getItem("numberGameHighScores")) || [];

  // Add the new score
  highScores.push(gameData);

  // Sort by score (highest first)
  highScores.sort((a, b) => b.score - a.score);

  // Keep only top 10 scores
  highScores = highScores.slice(0, 10);

  // Save back to localStorage
  localStorage.setItem("numberGameHighScores", JSON.stringify(highScores));

  // Update the display
  displayHighScores();

  // Close the modal
  winModal.style.display = "none";

  // Start a new game
  initGame();
}

// Display high scores
function displayHighScores() {
  let highScores =
    JSON.parse(localStorage.getItem("numberGameHighScores")) || [];
  highScoresList.innerHTML = "";

  highScores.slice(0, 5).forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${score.name}: ${score.score} (${score.difficulty})`;
    highScoresList.appendChild(listItem);
  });

  if (highScores.length === 0) {
    const listItem = document.createElement("li");
    listItem.textContent = "No high scores yet";
    highScoresList.appendChild(listItem);
  }
}

// Change difficulty
function changeDifficulty(newDifficulty) {
  difficulty = newDifficulty;

  // Update UI to show active difficulty
  difficultyButtons.forEach((button) => {
    if (button.dataset.difficulty === newDifficulty) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Start a new game with new difficulty
  initGame();
}

// Create confetti effect
function createConfetti() {
  const confettiCount = 100;
  const colors = [
    "#4a55a2",
    "#ff9800",
    "#4caf50",
    "#2196f3",
    "#f44336",
    "#9c27b0",
  ];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    // Remove confetti after animation completes
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Event listeners
submitGuessButton.addEventListener("click", handleGuess);

userGuessInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});

hintButton.addEventListener("click", getHint);

difficultyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    changeDifficulty(this.dataset.difficulty);
  });
});

saveScoreButton.addEventListener("click", saveScore);

playAgainButton.addEventListener("click", function () {
  winModal.style.display = "none";
  initGame();
});

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", function () {
  initGame();
  displayHighScores();
});

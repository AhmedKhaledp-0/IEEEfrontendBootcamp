# Game Extension Ideas

After completing the basic "Guess the Number" game, challenge yourself with these extension ideas to enhance your skills and make your game more engaging!

## Beginner Extensions

### 1. Game Rules Modal

Create a popup modal that explains the game rules when a "Help" or "Rules" button is clicked.

**Skills practiced:**

- HTML/CSS for modal design
- JavaScript DOM manipulation
- Event handling

**Implementation hints:**

```html
<button id="rules-btn">Game Rules</button>
<div id="rules-modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>How to Play</h2>
    <p>Game rules here...</p>
  </div>
</div>
```

```javascript
// Show modal when rules button is clicked
document.getElementById("rules-btn").addEventListener("click", function () {
  document.getElementById("rules-modal").style.display = "block";
});

// Close modal when X is clicked
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("rules-modal").style.display = "none";
});
```

### 2. Attempt Counter with Visual Feedback

Add a visual indicator (like stars or hearts) that decrease as attempts increase.

**Skills practiced:**

- DOM manipulation
- Conditional rendering
- CSS styling

**Implementation hints:**

```javascript
function updateAttemptVisuals(attempts) {
  const maxAttempts = 10;
  const attemptsLeft = maxAttempts - attempts;

  // Clear previous visuals
  document.getElementById("attempts-visual").innerHTML = "";

  // Add heart/star images based on attempts left
  for (let i = 0; i < attemptsLeft; i++) {
    const heart = document.createElement("img");
    heart.src = "heart.png";
    heart.classList.add("attempt-icon");
    document.getElementById("attempts-visual").appendChild(heart);
  }
}
```

### 3. Game History Log

Keep a detailed log of all guesses, showing "too high" or "too low" for each one.

**Skills practiced:**

- Array manipulation
- Dynamic HTML generation
- Data tracking

**Implementation hints:**

```javascript
const gameHistory = [];

function addToHistory(guess, result) {
  gameHistory.push({ guess, result, timestamp: new Date() });

  // Update the history display
  const historyList = document.getElementById("history-list");
  const entry = document.createElement("li");

  entry.textContent = `Guess: ${guess} - ${result}`;
  entry.classList.add(result.replace(" ", "-"));

  historyList.appendChild(entry);
}

// When processing a guess
if (userGuess < targetNumber) {
  addToHistory(userGuess, "too low");
} else if (userGuess > targetNumber) {
  addToHistory(userGuess, "too high");
} else {
  addToHistory(userGuess, "correct");
}
```

## Intermediate Extensions

### 4. Multiple Difficulty Levels

Add easy, medium, and hard difficulty levels with different number ranges and attempt limits.

**Skills practiced:**

- Game state management
- Conditional logic
- User interface design

**Implementation hints:**

```javascript
const difficultySettings = {
  easy: { min: 1, max: 50, attempts: 15 },
  medium: { min: 1, max: 100, attempts: 10 },
  hard: { min: 1, max: 200, attempts: 7 },
};

function setDifficulty(level) {
  const settings = difficultySettings[level];
  minRange = settings.min;
  maxRange = settings.max;
  maxAttempts = settings.attempts;

  // Update UI to reflect new settings
  document.getElementById("min-range").textContent = minRange;
  document.getElementById("max-range").textContent = maxRange;
  document.getElementById("max-attempts").textContent = maxAttempts;

  // Reset the game with new settings
  resetGame();
}

// Add event listeners to difficulty buttons
document.querySelectorAll(".difficulty-btn").forEach((button) => {
  button.addEventListener("click", function () {
    setDifficulty(this.dataset.level);
  });
});
```

### 5. Hot/Cold Indicator

Add a visual "temperature" indicator that shows how close the guess is to the correct number.

**Skills practiced:**

- Mathematical calculations
- CSS transitions/animations
- Data visualization

**Implementation hints:**

```javascript
function updateTemperatureGauge(guess) {
  const maxDistance = maxRange - minRange;
  const distance = Math.abs(targetNumber - guess);
  const proximity = 100 - (distance / maxDistance) * 100;

  // Update the visual temperature gauge
  const gauge = document.getElementById("temperature-gauge");

  // Change color based on proximity
  if (proximity > 90) {
    gauge.style.backgroundColor = "red"; // Very hot
  } else if (proximity > 70) {
    gauge.style.backgroundColor = "orange"; // Hot
  } else if (proximity > 50) {
    gauge.style.backgroundColor = "yellow"; // Warm
  } else if (proximity > 30) {
    gauge.style.backgroundColor = "lightblue"; // Cool
  } else {
    gauge.style.backgroundColor = "blue"; // Cold
  }

  // Update the width to show proximity
  gauge.style.width = proximity + "%";
}
```

### 6. Timer Challenge

Add a countdown timer to create pressure and award bonus points for quick guesses.

**Skills practiced:**

- JavaScript timing functions
- Score calculations
- Game state management

**Implementation hints:**

```javascript
let timeLeft = 60; // 60 seconds
let timerInterval;

function startTimer() {
  // Update timer display every second
  timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame(false); // Player loses due to timeout
    }
  }, 1000);
}

function calculateScore() {
  // Higher score for more time left and fewer attempts
  const timeBonus = timeLeft * 10;
  const attemptPenalty = attempts * 20;

  return 1000 + timeBonus - attemptPenalty;
}
```

## Advanced Extensions

### 7. High Scores System

Implement a high scores system using localStorage to persist between sessions.

**Skills practiced:**

- LocalStorage API
- JSON data handling
- Data sorting and filtering

**Implementation hints:**

```javascript
function saveHighScore(playerName, score) {
  // Get existing scores from localStorage
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score
  highScores.push({
    name: playerName,
    score: score,
    date: new Date().toLocaleDateString(),
  });

  // Sort by score (highest first)
  highScores.sort((a, b) => b.score - a.score);

  // Keep only top 10
  highScores = highScores.slice(0, 10);

  // Save back to localStorage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Update high scores display
  displayHighScores();
}

function displayHighScores() {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  const scoresList = document.getElementById("high-scores-list");

  scoresList.innerHTML = "";

  highScores.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${entry.name}: ${
      entry.score
    } points (${entry.date})`;
    scoresList.appendChild(listItem);
  });
}
```

### 8. Two-Player Mode

Add a two-player mode where one player sets the number and the other guesses.

**Skills practiced:**

- Game state management
- UI transitions between game modes
- Form validation

**Implementation hints:**

```javascript
let gameMode = "single"; // "single" or "two-player"
let playerTurn = 1; // Which player is active (player 1 sets, player 2 guesses)

function startTwoPlayerGame() {
  gameMode = "two-player";
  playerTurn = 1;

  // Show number setting screen for player 1
  document.getElementById("single-player").style.display = "none";
  document.getElementById("player1-setup").style.display = "block";
  document.getElementById("player2-game").style.display = "none";

  // Update instructions
  document.getElementById("game-instructions").textContent =
    "Player 1: Enter a number for Player 2 to guess";
}

function submitPlayerNumber() {
  // Get number from player 1
  const playerNumber = parseInt(
    document.getElementById("player-number-input").value
  );

  // Validate input
  if (
    isNaN(playerNumber) ||
    playerNumber < minRange ||
    playerNumber > maxRange
  ) {
    alert(`Please enter a valid number between ${minRange} and ${maxRange}`);
    return;
  }

  // Set as target number
  targetNumber = playerNumber;
  playerTurn = 2;

  // Transition to player 2's guessing screen
  document.getElementById("player1-setup").style.display = "none";
  document.getElementById("player2-game").style.display = "block";

  // Update instructions
  document.getElementById("game-instructions").textContent =
    "Player 2: Try to guess the number Player 1 chose";

  // Reset attempts etc.
  resetGameState();
}
```

### 9. Sound Effects and Animations

Add sound effects for guesses, wins, and losses, plus animations for key game events.

**Skills practiced:**

- Audio API
- CSS animations
- Event-driven programming

**Implementation hints:**

```javascript
// Initialize audio elements
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const winSound = new Audio("win.mp3");

function playSound(result) {
  switch (result) {
    case "correct":
      winSound.play();
      break;
    case "too high":
    case "too low":
      wrongSound.play();
      break;
  }
}

function animateResult(result) {
  const messageElement = document.getElementById("game-message");

  // Remove any existing animation classes
  messageElement.classList.remove("animate-correct", "animate-wrong");

  // Force browser to recognize the change
  void messageElement.offsetWidth;

  // Add appropriate animation class
  if (result === "correct") {
    messageElement.classList.add("animate-correct");
    createConfetti(); // Trigger confetti animation
  } else {
    messageElement.classList.add("animate-wrong");
  }
}

function createConfetti() {
  // Create and animate confetti elements
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    // Remove after animation completes
    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}
```

### 10. Theme Customization

Allow players to customize the game's colors, fonts, and background.

**Skills practiced:**

- CSS variables
- User preferences
- LocalStorage for saving settings

**Implementation hints:**

```javascript
// Default theme
let currentTheme = {
  primaryColor: "#4a55a2",
  backgroundColor: "#f9f9f9",
  textColor: "#333",
  fontFamily: "Arial, sans-serif",
};

function applyTheme(theme) {
  // Set CSS variables
  document.documentElement.style.setProperty(
    "--primary-color",
    theme.primaryColor
  );
  document.documentElement.style.setProperty(
    "--background-color",
    theme.backgroundColor
  );
  document.documentElement.style.setProperty("--text-color", theme.textColor);
  document.documentElement.style.setProperty("--font-family", theme.fontFamily);

  // Save theme to localStorage
  localStorage.setItem("gameTheme", JSON.stringify(theme));
}

function initThemeSelector() {
  // Load saved theme
  const savedTheme = localStorage.getItem("gameTheme");

  if (savedTheme) {
    currentTheme = JSON.parse(savedTheme);
    applyTheme(currentTheme);
  }

  // Set up theme customization controls
  document
    .getElementById("primary-color")
    .addEventListener("input", function (e) {
      currentTheme.primaryColor = e.target.value;
      applyTheme(currentTheme);
    });

  // Add similar event listeners for other theme properties
}
```

## Challenge Extensions

### 11. Multiple Game Modes

Implement different game variations like "Reverse Mode" (computer guesses your number) or "Time Attack" (guess as many numbers as possible in 60 seconds).

### 12. Multiplayer Online

Use Firebase or another backend service to create an online multiplayer version where players compete in real-time.

### 13. Adaptive Difficulty

Create an AI that adjusts difficulty based on player performance, making the game easier or harder depending on how well they're doing.

### 14. Game Statistics

Track and display detailed statistics about player performance over time, such as average attempts, best/worst games, and improvement over time.

### 15. Achievement System

Implement an achievement system that rewards players for reaching milestones (first win, winning streak, fast guesses, etc.).

## Getting Started with Extensions

To implement these extensions:

1. **Start simple** - Pick one basic extension first
2. **Plan your approach** - Outline the steps before coding
3. **Break it down** - Implement one small piece at a time
4. **Test frequently** - Make sure each piece works before adding more
5. **Learn as you go** - Use these extensions as opportunities to research and learn new techniques

Remember that extending your project is a great way to practice problem-solving skills and learn new aspects of web development. Don't worry if your implementation isn't perfect – the learning process is what matters most!

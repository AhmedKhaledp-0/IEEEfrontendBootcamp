# Day 3: JavaScript Basics & Game Logic

## Learning Objectives

By the end of today, you'll be able to:

- Understand JavaScript's role in web development
- Use variables, functions, conditionals, and loops
- Select and manipulate HTML elements using JavaScript
- Add event listeners to handle user interactions
- Build a fully functional "Guess the Number" game
- Apply interactive animations and transitions with JavaScript and CSS

## 1. Introduction to JavaScript

JavaScript is a programming language that brings interactivity to web pages. While HTML creates structure and CSS handles presentation, JavaScript provides dynamic behavior:

- Respond to user actions (clicks, keystrokes, form submissions)
- Modify HTML content and CSS styles on the fly
- Communicate with servers to update content without refreshing
- Create animations and visual effects
- Validate form data before submission
- Store and process data in the browser

### The Document Object Model (DOM)

The DOM is a programming interface for HTML documents. It represents the page as a tree of objects that JavaScript can access and manipulate:

- The browser creates a DOM representation of the page
- JavaScript can change all the HTML elements and attributes
- JavaScript can change all the CSS styles
- JavaScript can remove existing elements and attributes
- JavaScript can add new elements and attributes
- JavaScript can react to all existing events
- JavaScript can create new events

## 2. JavaScript Fundamentals

### Adding JavaScript to HTML

Like CSS, JavaScript can be added to HTML in three ways:

**Inline JavaScript:**

```html
<button onclick="alert('Hello, World!')">Click Me</button>
```

**Internal JavaScript:**

```html
<head>
  <script>
    function sayHello() {
      alert("Hello, World!");
    }
  </script>
</head>
```

**External JavaScript (preferred):**

```html
<head>
  <script src="script.js"></script>
</head>
```

For better performance, place `<script>` tags just before the closing `</body>` tag.

### Variables and Data Types

Variables store data that can be used and manipulated throughout your program:

```javascript
// Variable declaration with let (modern, preferred)
let playerName = "Player 1"; // String
let score = 0; // Number
let isGameOver = false; // Boolean
let guesses = [10, 25, 50]; // Array
let player = {
  // Object
  name: "Player 1",
  score: 0,
  isWinner: false,
};

// Constants (values that won't change)
const MAX_ATTEMPTS = 10;

// Older way to declare variables
var oldWayVariable = "Not recommended";
```

### Functions

Functions are reusable blocks of code that perform specific tasks:

```javascript
// Function declaration
function checkGuess(userGuess, targetNumber) {
  if (userGuess === targetNumber) {
    return "Correct!";
  } else if (userGuess < targetNumber) {
    return "Too low! Try again.";
  } else {
    return "Too high! Try again.";
  }
}

// Function with no parameters
function resetGame() {
  score = 0;
  isGameOver = false;
  // More code to reset the game...
}

// Arrow function (modern syntax)
const calculateScore = (attempts) => {
  return 100 - attempts * 10;
};
```

### Conditionals

Conditionals execute different code blocks based on different conditions:

```javascript
// if statement
if (score > 50) {
  console.log("You're doing great!");
}

// if-else statement
if (attempts < 5) {
  console.log("Keep trying!");
} else {
  console.log("Almost there!");
}

// if-else if-else statement
if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else if (score >= 50) {
  console.log("Not bad!");
} else {
  console.log("Keep practicing!");
}

// Ternary operator (shorthand for simple if-else)
let message = isGameOver ? "Game Over!" : "Keep playing!";
```

### Loops

Loops execute code blocks multiple times:

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log("Attempt #" + (i + 1));
}

// While loop
let counter = 0;
while (counter < 5) {
  console.log("Counter: " + counter);
  counter++;
}

// For...of loop (iterating over arrays)
const previousGuesses = [12, 25, 36];
for (const guess of previousGuesses) {
  console.log("You guessed: " + guess);
}

// For...in loop (iterating over object properties)
const playerStats = { name: "Player 1", score: 85, level: 4 };
for (const property in playerStats) {
  console.log(property + ": " + playerStats[property]);
}
```

## 3. DOM Selection and Manipulation

### Selecting Elements

JavaScript can select HTML elements using several methods:

```javascript
// By ID (returns a single element)
const gameArea = document.getElementById("game-area");

// By class name (returns a collection)
const buttons = document.getElementsByClassName("button");

// By tag name (returns a collection)
const paragraphs = document.getElementsByTagName("p");

// Using CSS selectors (modern, versatile)
const submitButton = document.querySelector("#submit-guess");
const allButtons = document.querySelectorAll("button");
```

### Modifying Elements

Once selected, elements can be modified:

```javascript
// Changing text content
document.getElementById("game-message").textContent = "You win!";

// Changing HTML content
document.getElementById("game-history").innerHTML = "<p>Game reset</p>";

// Changing attributes
document.getElementById("user-guess").value = "";
document.getElementById("submit-button").disabled = true;

// Changing styles
document.getElementById("game-message").style.color = "green";
document.getElementById("game-area").style.backgroundColor = "#f0f0f0";

// Adding/removing classes
document.getElementById("game-message").classList.add("success");
document.getElementById("game-message").classList.remove("error");
document.getElementById("game-message").classList.toggle("visible");
```

### Creating and Adding Elements

JavaScript can create new HTML elements:

```javascript
// Create a new element
const newGuessItem = document.createElement("li");

// Add content to the element
newGuessItem.textContent = "You guessed: 42";

// Add a class to the element
newGuessItem.classList.add("guess-item");

// Append the element to an existing element
document.getElementById("guesses-list").appendChild(newGuessItem);
```

## 4. Event Listeners and Handling

Event listeners detect user actions and execute code in response:

```javascript
// Add a click event listener to a button
document.getElementById("submit-guess").addEventListener("click", function () {
  // Code to run when button is clicked
  checkUserGuess();
});

// Using a named function
function handleKeyPress(event) {
  // Check if the Enter key was pressed
  if (event.key === "Enter") {
    checkUserGuess();
  }
}

// Add a keyup event listener to an input field
document.getElementById("user-guess").addEventListener("keyup", handleKeyPress);

// Common events:
// click - when an element is clicked
// submit - when a form is submitted
// keyup/keydown - when a key is pressed/released
// change - when an input value changes
// mouseover/mouseout - when the mouse enters/leaves an element
```

## 5. Building Our Game: Guess the Number

Now let's put everything together to create our fully functional game:

```javascript
// script.js

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

  // Enable input and button
  userGuessInput.disabled = false;
  submitGuessButton.disabled = false;

  console.log("Game initialized with target number:", targetNumber);
}

// Handle the user's guess
function handleGuess() {
  // Don't do anything if the game is over
  if (gameOver) return;

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
    submitGuessButton.removeEventListener("click", handleGuess);
    submitGuessButton.addEventListener("click", initGame);

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
```

Add this script to your HTML file before the closing `</body>` tag:

```html
<script src="script.js"></script>
```

## 6. Adding Animations and Interactive Effects

Let's enhance our game with some animations and effects:

Add these classes to your CSS file:

```css
/* Animation for correct guess */
.correct {
  background-color: #4caf50 !important;
  color: white;
  animation: pulse 1s infinite;
}

/* Animations for hints */
.too-low {
  background-color: #2196f3 !important;
  color: white;
}

.too-high {
  background-color: #ff9800 !important;
  color: white;
}

.success {
  background-color: #e8f5e9 !important;
  border-left: 5px solid #4caf50;
  padding-left: 15px;
}

.error {
  background-color: #ffebee !important;
  border-left: 5px solid #f44336;
  padding-left: 15px;
}

.hint {
  background-color: #e3f2fd !important;
  border-left: 5px solid #2196f3;
  padding-left: 15px;
}

/* Pulse animation */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Button animation */
button:active {
  transform: scale(0.98);
}

/* Fade-in animation for new guesses */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#guesses-list li {
  animation: fadeIn 0.3s ease-out;
}
```

## 7. Final Project: Complete Game Implementation

Let's put everything together for our final project. Make sure you have:

1. An HTML file with the game structure
2. A CSS file with all the styles
3. A JavaScript file with the game logic

Then enhance it with the following features:

- Add a "Give Up" button that reveals the number
- Display a "hot/cold" indicator as users get closer to the number
- Add sound effects for correct/incorrect guesses
- Implement difficulty levels (Easy: 1-50, Medium: 1-100, Hard: 1-200)
- Add a timer to track how long it takes to guess the number
- Create a high score system using `localStorage`

## 8. Mini Assignment: Extend Your Game

Now it's your turn to practice! Take the "Guess the Number" game we've built and extend it with at least two of the following features:

### Requirements

- Choose at least two of these features to implement:
  - Add a "hint" button that narrows down the range
  - Create different difficulty levels
  - Add a timer that starts when the game begins
  - Implement a scoring system based on attempts and time
  - Add sound effects or visual feedback for guesses
  - Create a "best score" tracker using localStorage
  - Add confetti animation when the player wins

### Steps

1. First make sure your basic game is working correctly
2. Plan the new features you want to add
3. Implement each feature one at a time
4. Test thoroughly after adding each feature
5. Style any new elements to match your existing design

## Congratulations

You've completed the 3-day front-end bootcamp and built your first interactive web application from scratch! Here's what you've learned:

- **Day 1**: HTML structure and elements to create the skeleton of your application
- **Day 2**: CSS styling to make your application visually appealing
- **Day 3**: JavaScript programming to add interactivity and game logic

You now have the fundamental skills to build many other types of web applications. Some ideas for your next projects:

- To-do list application
- Weather app using an API
- Quiz game with multiple questions
- Simple calculator
- Personal portfolio website

## Next Steps

To continue learning front-end development, consider:

1. **Learn a JavaScript framework** like React, Vue, or Angular
2. **Explore advanced CSS** with Flexbox, Grid, and Sass
3. **Study backend development** to create full-stack applications
4. **Contribute to open-source projects** to gain real-world experience
5. **Build a personal portfolio** showcasing your projects

Remember that practice is key to becoming a better developer. Challenge yourself to build something new regularly to reinforce what you've learned.

## Daily Mini-Challenges

Ready to cement your JavaScript skills? Try our JavaScript mini-challenges to reinforce today's coding concepts!

These challenges provide opportunities to practice JavaScript in different contexts and build confidence with the programming techniques we've covered.

[View Today's Mini-Challenges](challenges.md)

## Extending Your Game

Want to take your game to the next level? Check out our [Game Extension Ideas](../assets/extension-ideas.md) document for ways to enhance your game with additional features and functionality.

Happy coding!

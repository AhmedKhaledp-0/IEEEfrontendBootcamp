# Day 3: JavaScript Mini-Challenges

These mini-challenges are designed to reinforce the JavaScript concepts you've learned today. Try to complete them on your own, referring to the lesson material or cheatsheets as needed.

## Challenge 1: Enhanced Guess the Number Game

**Objective:** Add new features to your "Guess the Number" game.

**Requirements:**

1. Start with your existing game code
2. Add the following features:
   - Track and display the player's previous guesses
   - Add a "New Game" button that resets everything without refreshing the page
   - Implement a hint system that activates after 3 unsuccessful attempts
   - Add custom messages based on how close the guess is
   - Create a visual indicator showing the range narrowing down

**Bonus:** Add sound effects for correct/incorrect guesses

**Example JavaScript:**

```javascript
// Game variables
let secretNumber;
let attempts = 0;
let previousGuesses = [];
let gameOver = false;
const minRange = 1;
const maxRange = 100;

// Elements
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit-guess");
const newGameButton = document.getElementById("new-game");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const previousGuessesDisplay = document.getElementById("previous-guesses");
const hintButton = document.getElementById("hint");
const rangeIndicator = document.getElementById("range-indicator");

// Initialize game
function initializeGame() {
  secretNumber = Math.floor(Math.random() * maxRange) + minRange;
  attempts = 0;
  previousGuesses = [];
  gameOver = false;

  // Reset UI
  message.textContent = `Guess a number between ${minRange} and ${maxRange}`;
  message.className = "";
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  previousGuessesDisplay.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitButton.disabled = false;
  hintButton.disabled = true;

  // Reset range indicator
  updateRangeIndicator(minRange, maxRange);

  console.log(`Game initialized. Secret number: ${secretNumber}`); // For debugging
}

// Process the player's guess
function processGuess() {
  if (gameOver) return;

  const guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < minRange || guess > maxRange) {
    message.textContent = `Please enter a valid number between ${minRange} and ${maxRange}`;
    message.className = "warning";
    return;
  }

  // Update attempts and previous guesses
  attempts++;
  previousGuesses.push(guess);
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  previousGuessesDisplay.textContent = `Previous guesses: ${previousGuesses.join(
    ", "
  )}`;

  // Enable hint after 3 attempts
  if (attempts >= 3) {
    hintButton.disabled = false;
  }

  // Check guess
  if (guess === secretNumber) {
    // Correct guess
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
    message.className = "correct";
    gameOver = true;
    guessInput.disabled = true;
    submitButton.disabled = true;
    playSound("correct");
  } else {
    // Incorrect guess
    const difference = Math.abs(secretNumber - guess);
    let feedbackMessage;

    if (guess < secretNumber) {
      feedbackMessage = "Too low! ";
      updateRangeIndicator(guess, maxRange);
    } else {
      feedbackMessage = "Too high! ";
      updateRangeIndicator(minRange, guess);
    }

    // Add feedback based on how close they are
    if (difference <= 5) {
      feedbackMessage += "You're very close!";
    } else if (difference <= 10) {
      feedbackMessage += "You're getting closer!";
    } else if (difference <= 20) {
      feedbackMessage += "You're still quite far.";
    } else {
      feedbackMessage += "You're way off!";
    }

    message.textContent = feedbackMessage;
    message.className = "incorrect";
    playSound("incorrect");
  }

  // Clear input field
  guessInput.value = "";
  guessInput.focus();
}

// Provide a hint
function provideHint() {
  if (gameOver || attempts < 3) return;

  // Create a range around the secret number
  const rangeSize = Math.max(5, Math.floor(maxRange / 10));
  const minHint = Math.max(minRange, secretNumber - rangeSize);
  const maxHint = Math.min(maxRange, secretNumber + rangeSize);

  message.textContent = `Hint: The number is between ${minHint} and ${maxHint}`;
  message.className = "hint";

  // Disable hint button after use
  hintButton.disabled = true;
}

// Update the range indicator
function updateRangeIndicator(min, max) {
  // This would update a visual element showing the current possible range
  rangeIndicator.textContent = `Current range: ${min} - ${max}`;

  // If you have a graphical indicator, you could update it like this:
  // const totalRange = maxRange - minRange;
  // const leftPercent = ((min - minRange) / totalRange) * 100;
  // const rightPercent = 100 - ((maxRange - max) / totalRange) * 100;
  // rangeIndicator.style.left = `${leftPercent}%`;
  // rangeIndicator.style.right = `${100 - rightPercent}%`;
}

// Play sound effect
function playSound(type) {
  // If you implement sound effects:
  // const sound = new Audio(type === 'correct' ? 'correct.mp3' : 'incorrect.mp3');
  // sound.play();

  // For now, just log it
  console.log(`Playing ${type} sound`);
}

// Event listeners
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  processGuess();
});

guessInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    processGuess();
  }
});

newGameButton.addEventListener("click", function () {
  initializeGame();
});

hintButton.addEventListener("click", provideHint);

// Initialize the game when the page loads
initializeGame();
```

## Challenge 2: Interactive To-Do List

**Objective:** Create a simple to-do list application.

**Requirements:**

1. Create new HTML and CSS files for this project
2. Implement JavaScript functionality to:
   - Add new tasks from an input field
   - Mark tasks as completed (strike-through text)
   - Delete tasks
   - Display a count of remaining tasks
   - Clear all completed tasks with a button

**Bonus:** Add localStorage to save tasks between page reloads

**Example HTML:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To-Do List</title>
    <link rel="stylesheet" href="todo-styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>My To-Do List</h1>

      <div class="todo-form">
        <input type="text" id="task-input" placeholder="Add a new task..." />
        <button id="add-task">Add</button>
      </div>

      <div class="todo-stats">
        <span id="tasks-count">0 tasks remaining</span>
        <button id="clear-completed">Clear Completed</button>
      </div>

      <ul id="tasks-list">
        <!-- Tasks will be added here -->
      </ul>
    </div>

    <script src="todo-script.js"></script>
  </body>
</html>
```

**Example JavaScript:**

```javascript
// DOM Elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const tasksList = document.getElementById("tasks-list");
const tasksCount = document.getElementById("tasks-count");
const clearCompletedButton = document.getElementById("clear-completed");

// Task array
let tasks = [];

// Load tasks from localStorage
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";

  saveTasks();
  renderTasks();
}

// Toggle a task's completed status
function toggleTask(taskId) {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveTasks();
  renderTasks();
}

// Delete a task
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);

  saveTasks();
  renderTasks();
}

// Clear completed tasks
function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);

  saveTasks();
  renderTasks();
}

// Update the tasks count
function updateTasksCount() {
  const remainingTasks = tasks.filter((task) => !task.completed).length;
  tasksCount.textContent = `${remainingTasks} task${
    remainingTasks !== 1 ? "s" : ""
  } remaining`;
}

// Render all tasks
function renderTasks() {
  tasksList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    if (task.completed) {
      taskItem.classList.add("completed");
    }

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener("change", () => toggleTask(task.id));

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "×";
    deleteButton.classList.add("delete-task");
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);

    tasksList.appendChild(taskItem);
  });

  updateTasksCount();
}

// Event listeners
addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

clearCompletedButton.addEventListener("click", clearCompletedTasks);

// Initialize app
loadTasks();
```

## Challenge 3: Interactive Image Gallery

**Objective:** Create a simple image gallery with JavaScript functionality.

**Requirements:**

1. Create a new HTML file with a grid of thumbnail images
2. Implement JavaScript to:
   - Show a larger version of the image when a thumbnail is clicked
   - Add navigation buttons (previous/next) to browse through images
   - Include a caption for each image
   - Add a close button for the enlarged view
   - Implement keyboard navigation (arrow keys, escape)

**Bonus:** Add a slideshow feature with a play/pause button

**Example HTML:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image Gallery</title>
    <link rel="stylesheet" href="gallery-styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Image Gallery</h1>

      <div class="gallery">
        <div class="thumbnail" data-index="0">
          <img src="https://via.placeholder.com/150" alt="Image 1" />
        </div>
        <div class="thumbnail" data-index="1">
          <img src="https://via.placeholder.com/150" alt="Image 2" />
        </div>
        <div class="thumbnail" data-index="2">
          <img src="https://via.placeholder.com/150" alt="Image 3" />
        </div>
        <!-- Add more thumbnails as needed -->
      </div>

      <div id="lightbox" class="hidden">
        <button id="close-lightbox">×</button>
        <button id="prev-image">❮</button>
        <button id="next-image">❯</button>
        <div class="lightbox-content">
          <img id="lightbox-image" src="" alt="Enlarged image" />
          <div id="image-caption"></div>
        </div>
        <div class="slideshow-controls">
          <button id="play-pause">▶ Play Slideshow</button>
        </div>
      </div>
    </div>

    <script src="gallery-script.js"></script>
  </body>
</html>
```

**Example JavaScript:**

```javascript
// Gallery data
const galleryImages = [
  {
    src: "https://via.placeholder.com/800x500",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "https://via.placeholder.com/800x500",
    alt: "Image 2",
    caption: "Caption for Image 2",
  },
  {
    src: "https://via.placeholder.com/800x500",
    alt: "Image 3",
    caption: "Caption for Image 3",
  },
  // Add more images as needed
];

// DOM elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const imageCaption = document.getElementById("image-caption");
const closeLightbox = document.getElementById("close-lightbox");
const prevButton = document.getElementById("prev-image");
const nextButton = document.getElementById("next-image");
const playPauseButton = document.getElementById("play-pause");
const thumbnails = document.querySelectorAll(".thumbnail");

// Variables
let currentIndex = 0;
let slideshowActive = false;
let slideshowInterval;

// Open lightbox with specific image
function openLightbox(index) {
  if (index < 0 || index >= galleryImages.length) return;

  currentIndex = index;
  const image = galleryImages[currentIndex];

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  imageCaption.textContent = image.caption;

  lightbox.classList.remove("hidden");

  // Stop slideshow when manually navigating
  if (slideshowActive) {
    stopSlideshow();
  }
}

// Close lightbox
function closeLightboxHandler() {
  lightbox.classList.add("hidden");
  stopSlideshow();
}

// Navigate to previous image
function showPreviousImage() {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = galleryImages.length - 1;
  }
  openLightbox(newIndex);
}

// Navigate to next image
function showNextImage() {
  let newIndex = currentIndex + 1;
  if (newIndex >= galleryImages.length) {
    newIndex = 0;
  }
  openLightbox(newIndex);
}

// Toggle slideshow
function toggleSlideshow() {
  if (slideshowActive) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

// Start slideshow
function startSlideshow() {
  slideshowActive = true;
  playPauseButton.textContent = "❚❚ Pause Slideshow";

  // Change image every 3 seconds
  slideshowInterval = setInterval(showNextImage, 3000);
}

// Stop slideshow
function stopSlideshow() {
  slideshowActive = false;
  playPauseButton.textContent = "▶ Play Slideshow";

  clearInterval(slideshowInterval);
}

// Handle keyboard navigation
function handleKeydown(event) {
  if (lightbox.classList.contains("hidden")) return;

  switch (event.key) {
    case "ArrowLeft":
      showPreviousImage();
      break;
    case "ArrowRight":
      showNextImage();
      break;
    case "Escape":
      closeLightboxHandler();
      break;
  }
}

// Add event listeners
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    const index = parseInt(this.dataset.index);
    openLightbox(index);
  });
});

closeLightbox.addEventListener("click", closeLightboxHandler);
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);
playPauseButton.addEventListener("click", toggleSlideshow);
document.addEventListener("keydown", handleKeydown);
```

## Challenge 4: Simple Calculator

**Objective:** Build a basic calculator app with JavaScript.

**Requirements:**

1. Create a calculator interface with HTML/CSS
2. Implement JavaScript to:
   - Handle basic operations (addition, subtraction, multiplication, division)
   - Support decimal numbers
   - Include a clear button
   - Display the result in real-time
   - Handle errors (like division by zero)

**Bonus:** Add keyboard support for numbers and operations

**Example HTML:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="calculator-styles.css" />
  </head>
  <body>
    <div class="calculator">
      <div class="display">
        <div id="previous-operand"></div>
        <div id="current-operand">0</div>
      </div>

      <div class="buttons">
        <button class="operation" data-action="clear">AC</button>
        <button class="operation" data-action="delete">DEL</button>
        <button class="operation" data-action="%">%</button>
        <button class="operation" data-action="/">÷</button>

        <button class="number" data-number="7">7</button>
        <button class="number" data-number="8">8</button>
        <button class="number" data-number="9">9</button>
        <button class="operation" data-action="*">×</button>

        <button class="number" data-number="4">4</button>
        <button class="number" data-number="5">5</button>
        <button class="number" data-number="6">6</button>
        <button class="operation" data-action="-">-</button>

        <button class="number" data-number="1">1</button>
        <button class="number" data-number="2">2</button>
        <button class="number" data-number="3">3</button>
        <button class="operation" data-action="+">+</button>

        <button class="number" data-number="0">0</button>
        <button class="number" data-number=".">.</button>
        <button class="operation" data-action="equals" id="equals">=</button>
      </div>
    </div>

    <script src="calculator-script.js"></script>
  </body>
</html>
```

**Example JavaScript:**

```javascript
// DOM elements
const previousOperandElement = document.getElementById("previous-operand");
const currentOperandElement = document.getElementById("current-operand");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");

// Calculator state
let currentOperand = "0";
let previousOperand = "";
let operation = undefined;
let shouldResetDisplay = false;

// Add event listeners
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.dataset.number);
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleOperation(button.dataset.action);
    updateDisplay();
  });
});

// Add keyboard support
document.addEventListener("keydown", handleKeyboard);

// Append a number to the display
function appendNumber(number) {
  // Reset display if a new calculation is starting
  if (shouldResetDisplay) {
    currentOperand = "";
    shouldResetDisplay = false;
  }

  // Handle special cases
  if (number === "." && currentOperand.includes(".")) return;
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number;
  } else {
    currentOperand += number;
  }
}

// Handle various operations
function handleOperation(action) {
  // Don't allow operations on empty display
  if (currentOperand === "") return;

  switch (action) {
    case "clear":
      clear();
      break;
    case "delete":
      deleteNumber();
      break;
    case "equals":
      calculate();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      selectOperation(action);
      break;
  }
}

// Clear the calculator
function clear() {
  currentOperand = "0";
  previousOperand = "";
  operation = undefined;
}

// Delete the last digit
function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
  if (currentOperand === "") {
    currentOperand = "0";
  }
}

// Select an operation
function selectOperation(op) {
  if (operation !== undefined && previousOperand !== "") {
    calculate();
  }

  operation = op;
  previousOperand = currentOperand;
  shouldResetDisplay = true;
}

// Perform the calculation
function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        clear();
        return;
      }
      computation = prev / current;
      break;
    case "%":
      computation = prev % current;
      break;
    default:
      return;
  }

  // Format the result
  currentOperand = Math.round(computation * 1000000) / 1000000;
  previousOperand = "";
  operation = undefined;
  shouldResetDisplay = true;
}

// Update the display
function updateDisplay() {
  currentOperandElement.textContent = currentOperand;

  if (operation != null) {
    const operationSymbol = getOperationSymbol(operation);
    previousOperandElement.textContent = `${previousOperand} ${operationSymbol}`;
  } else {
    previousOperandElement.textContent = previousOperand;
  }
}

// Convert operation to display symbol
function getOperationSymbol(op) {
  switch (op) {
    case "+":
      return "+";
    case "-":
      return "-";
    case "*":
      return "×";
    case "/":
      return "÷";
    case "%":
      return "%";
    default:
      return "";
  }
}

// Handle keyboard input
function handleKeyboard(event) {
  // Numbers
  if (/^[0-9.]$/.test(event.key)) {
    appendNumber(event.key);
    updateDisplay();
    return;
  }

  // Operations
  switch (event.key) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      handleOperation(event.key);
      updateDisplay();
      break;
    case "Enter":
      handleOperation("equals");
      updateDisplay();
      break;
    case "Backspace":
      handleOperation("delete");
      updateDisplay();
      break;
    case "Escape":
      handleOperation("clear");
      updateDisplay();
      break;
  }
}

// Initialize calculator
updateDisplay();
```

## Submission Guidelines

1. Complete at least two of the four challenges
2. Make sure your JavaScript is properly linked to your HTML files
3. Test your applications to ensure they work correctly
4. Check for and fix any errors in the browser console
5. Add comments to explain your code and logic

## Helpful Tips

- Break down complex tasks into smaller functions
- Use console.log() to debug and test your code as you go
- Remember to handle edge cases (empty inputs, invalid values, etc.)
- Use descriptive variable and function names
- Test your code with different inputs to ensure it works in all cases
- Remember to add event listeners for all interactive elements
- Use arrow functions for shorter callback functions

# JavaScript Cheatsheet

This quick reference guide contains the most commonly used JavaScript syntax and concepts for your reference during the bootcamp.

## Variables and Data Types

```javascript
// Variables
let name = "John";              // Block-scoped variable (recommended)
const age = 30;                 // Constant (can't be reassigned)
var message = "Hello";          // Function-scoped variable (older style)

// Data Types
let string = "Hello, world!";   // String
let number = 42;                // Number
let decimal = 3.14;             // Also a Number
let boolean = true;             // Boolean (true or false)
let array = [1, 2, 3, 4];       // Array
let object = {                  // Object
  firstName: "John",
  lastName: "Doe",
  age: 30
};
let nothing = null;             // Null (intentional absence of value)
let undefined;                  // Undefined (variable declared but not assigned)
let func = function() {};       // Function
let symbol = Symbol("id");      // Symbol (unique identifier)
let bigInt = 9007199254740991n; // BigInt (for large integers)
```

## Operators

```javascript
// Arithmetic
let sum = 5 + 3;        // Addition
let diff = 5 - 3;       // Subtraction
let product = 5 * 3;    // Multiplication
let quotient = 5 / 3;   // Division
let remainder = 5 % 3;  // Modulus
let power = 5 ** 3;     // Exponentiation

// Increment/Decrement
let x = 5;
x++;                    // Increment by 1
x--;                    // Decrement by 1

// Assignment
let y = 10;             // Assign value
y += 5;                 // Same as: y = y + 5
y -= 5;                 // Same as: y = y - 5
y *= 2;                 // Same as: y = y * 2
y /= 2;                 // Same as: y = y / 2
y %= 3;                 // Same as: y = y % 3

// Comparison
let isEqual = 5 == "5";         // Equal (converts types)
let isStrictEqual = 5 === 5;    // Strict equal (no type conversion)
let isNotEqual = 5 != "6";      // Not equal
let isStrictNotEqual = 5 !== "5"; // Strict not equal
let isGreater = 5 > 3;          // Greater than
let isLess = 5 < 10;            // Less than
let isGreaterOrEqual = 5 >= 5;  // Greater than or equal
let isLessOrEqual = 5 <= 10;    // Less than or equal

// Logical
let and = true && false;        // Logical AND
let or = true || false;         // Logical OR
let not = !true;                // Logical NOT

// Ternary (Conditional)
let status = age >= 18 ? "Adult" : "Minor";
```

## Strings

```javascript
// String Creation
let single = 'Single quotes';
let double = "Double quotes";
let backticks = `Template literals ${2 + 2}`;

// String Properties
let length = "Hello".length;    // 5

// String Methods
let upperCase = "hello".toUpperCase();                 // "HELLO"
let lowerCase = "HELLO".toLowerCase();                 // "hello"
let substring = "Hello World".substring(0, 5);         // "Hello"
let slice = "Hello World".slice(6, 11);                // "World"
let replaced = "Hello World".replace("World", "John"); // "Hello John"
let split = "a,b,c".split(",");                        // ["a", "b", "c"]
let trim = "  Hello  ".trim();                         // "Hello"
let charAt = "Hello".charAt(1);                        // "e"
let indexOf = "Hello World".indexOf("World");          // 6
let includes = "Hello World".includes("World");        // true
let startsWith = "Hello World".startsWith("Hello");    // true
let endsWith = "Hello World".endsWith("World");        // true
let concat = "Hello".concat(" ", "World");             // "Hello World"
let repeat = "Ha".repeat(3);                           // "HaHaHa"
```

## Arrays

```javascript
// Array Creation
let fruits = ["apple", "banana", "orange"];
let mixed = [1, "two", true, null, {name: "John"}];
let newArray = new Array(3);  // Creates array with 3 empty slots

// Array Properties
let arrayLength = fruits.length;  // 3

// Accessing Elements
let firstFruit = fruits[0];      // "apple"
let lastFruit = fruits[fruits.length - 1];  // "orange"

// Modifying Arrays
fruits.push("grape");            // Add to end: ["apple", "banana", "orange", "grape"]
let lastItem = fruits.pop();     // Remove from end: returns "grape", fruits is ["apple", "banana", "orange"]
fruits.unshift("strawberry");    // Add to beginning: ["strawberry", "apple", "banana", "orange"]
let firstItem = fruits.shift();  // Remove from beginning: returns "strawberry", fruits is ["apple", "banana", "orange"]
fruits.splice(1, 1, "mango");    // Remove 1 element at index 1 and insert "mango": ["apple", "mango", "orange"]
let sliced = fruits.slice(1, 2); // Extract from index 1 to 2 (exclusive): ["mango"]

// Array Methods
let joined = fruits.join(", ");  // "apple, mango, orange"
fruits.reverse();                // Reverse in place: ["orange", "mango", "apple"]
let found = fruits.find(fruit => fruit === "mango");  // "mango"
let index = fruits.findIndex(fruit => fruit === "mango");  // 1
let exists = fruits.includes("apple");  // true
let filtered = fruits.filter(fruit => fruit.length > 5);  // ["orange"]
let mapped = fruits.map(fruit => fruit.toUpperCase());  // ["ORANGE", "MANGO", "APPLE"]
let sorted = [...fruits].sort();  // ["apple", "mango", "orange"] (without modifying original)
let everyLong = fruits.every(fruit => fruit.length > 3);  // true
let someLong = fruits.some(fruit => fruit.length > 5);  // true
let reduced = [1, 2, 3].reduce((sum, num) => sum + num, 0);  // 6
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));  // Logs each fruit with its index
```

## Control Flow

```javascript
// Conditional Statements
// if, else if, else
if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// switch
switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("It's some other fruit");
}

// For Loops
// Standard for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// for...of (arrays, strings, etc.)
for (const fruit of fruits) {
  console.log(fruit);  // Logs each fruit
}

// for...in (object properties)
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);  // "name: John", "age: 30"
}

// While Loops
let i = 0;
while (i < 5) {
  console.log(i);  // 0, 1, 2, 3, 4
  i++;
}

// Do...While Loop
let j = 0;
do {
  console.log(j);  // 0, 1, 2, 3, 4
  j++;
} while (j < 5);

// Break and Continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // Skip 3
  if (i === 7) break;     // Stop at 7
  console.log(i);  // 0, 1, 2, 4, 5, 6
}
```

## Functions

```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const sayHello = function(name) {
  return `Hello, ${name}!`;
};

// Arrow Function
const welcome = (name) => `Hello, ${name}!`;
const add = (a, b) => a + b;  // Implicit return
const doSomething = () => {
  // Multiple statements need braces
  const result = Math.random();
  return result > 0.5 ? "Heads" : "Tails";
};

// Default Parameters
function createUser(name, age = 25) {
  return { name, age };
}

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This runs immediately");
})();

// Function with callback
function fetchData(callback) {
  // Simulate API call
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log(data);  // { name: "John", age: 30 }
});
```

## Objects

```javascript
// Object Creation
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York"
  },
  hobbies: ["reading", "music"],
  greet: function() {
    return `Hello, I'm ${this.firstName}`;
  },
  // Method shorthand
  sayAge() {
    return `I am ${this.age} years old`;
  }
};

// Accessing Properties
const name = person.firstName;     // Dot notation
const city = person["address"]["city"];  // Bracket notation

// Object Methods
const keys = Object.keys(person);   // ["firstName", "lastName", "age", "address", "hobbies", "greet", "sayAge"]
const values = Object.values(person);  // [values of the properties]
const entries = Object.entries(person);  // [[key, value], [key, value], ...]
const hasProp = person.hasOwnProperty("age");  // true

// Copying and Merging Objects
const personCopy = Object.assign({}, person);  // Shallow copy
const personCopy2 = { ...person };  // Spread operator (shallow copy)
const merged = { ...person, occupation: "Developer" };  // Merge objects

// Destructuring
const { firstName, lastName, age } = person;
const { address: { city: userCity } } = person;  // Nested destructuring, userCity = "New York"
const [hobby1, hobby2] = person.hobbies;  // Array destructuring
```

## DOM Manipulation

```javascript
// Selecting Elements
const element = document.getElementById("myId");
const elements = document.getElementsByClassName("myClass");
const tags = document.getElementsByTagName("div");
const queryElement = document.querySelector(".myClass");  // First matching element
const queryElements = document.querySelectorAll("p");     // NodeList of all matching elements

// Creating and Adding Elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);

// Modifying Elements
element.textContent = "New text";  // Change text content
element.innerHTML = "<strong>Bold text</strong>";  // Change HTML content
element.setAttribute("title", "My Title");  // Set attribute
element.removeAttribute("title");  // Remove attribute

// Styling Elements
element.style.color = "red";
element.style.backgroundColor = "black";
element.classList.add("new-class");
element.classList.remove("old-class");
element.classList.toggle("active");
element.classList.contains("active");  // Check if class exists

// Navigating the DOM
const parent = element.parentNode;
const children = element.childNodes;  // NodeList of all child nodes
const firstChild = element.firstChild;
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;

// Removing Elements
element.remove();  // Remove itself
parent.removeChild(child);  // Remove child from parent
```

## Events

```javascript
// Adding Event Listeners
function handleClick(event) {
  console.log("Button clicked");
  console.log(event);  // Event object
}

const button = document.querySelector("button");
button.addEventListener("click", handleClick);

// Removing Event Listeners
button.removeEventListener("click", handleClick);

// Common Events
// Mouse events
element.addEventListener("click", function(e) {});
element.addEventListener("dblclick", function(e) {});
element.addEventListener("mouseenter", function(e) {});
element.addEventListener("mouseleave", function(e) {});
element.addEventListener("mousemove", function(e) {});

// Keyboard events
document.addEventListener("keydown", function(e) {
  console.log("Key pressed:", e.key);
});
document.addEventListener("keyup", function(e) {});

// Form events
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();  // Prevent form submission
  // Form processing logic
});

// Input events
const input = document.querySelector("input");
input.addEventListener("change", function(e) {});
input.addEventListener("input", function(e) {});
input.addEventListener("focus", function(e) {});
input.addEventListener("blur", function(e) {});

// Window events
window.addEventListener("load", function(e) {});
window.addEventListener("resize", function(e) {});
window.addEventListener("scroll", function(e) {});

// Event Delegation
document.getElementById("parent-list").addEventListener("click", function(e) {
  if (e.target.matches("li")) {
    console.log("List item clicked:", e.target.textContent);
  }
});
```

## Asynchronous JavaScript

```javascript
// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John" };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log(data);
});

// Promises
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Promise completed"));

// Chaining Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Promise.all (wait for all promises)
Promise.all([promise1, promise2, promise3])
  .then(results => {
    // results is an array of the resolved values
    console.log(results);
  })
  .catch(error => console.error(error));

// Async/Await
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

// Using the async function
fetchUserData().then(userData => {
  console.log(userData);
});
```

## LocalStorage

```javascript
// Storing data
localStorage.setItem("username", "John");
localStorage.setItem("preferences", JSON.stringify({ theme: "dark", fontSize: "large" }));

// Retrieving data
const username = localStorage.getItem("username");  // "John"
const preferences = JSON.parse(localStorage.getItem("preferences"));  // Object

// Removing data
localStorage.removeItem("username");  // Remove single item
localStorage.clear();  // Remove all items
```

## Error Handling

```javascript
// Try...Catch
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
} finally {
  // Code that runs regardless of whether an error occurred
  console.log("Operation attempt completed");
}

// Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);  // "Cannot divide by zero"
}
```

## Best Practices

1. Use `const` by default, `let` when you need to reassign variables
2. Avoid using `var` in modern JavaScript
3. Use camelCase for variables and functions
4. Use descriptive names for variables, functions, etc.
5. Keep functions small and focused on a single task
6. Comment your code where necessary
7. Use strict equality (`===`) instead of loose equality (`==`)
8. Use template literals for string interpolation
9. Handle errors properly with try/catch blocks
10. Use modern features like arrow functions, destructuring, and async/await
11. Use linting tools like ESLint to catch common mistakes
12. Write modular code that's easy to test and maintain

Happy coding!

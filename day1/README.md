# Day 1: HTML Basics & Building the Skeleton

## Learning Objectives

By the end of today, you'll be able to:

- Understand what HTML is and its role in web development
- Create a basic HTML document structure
- Use common HTML tags to build a web page layout
- Create the structure for a game interface using HTML

## Table of Contents

- [Day 1: HTML Basics \& Building the Skeleton](#day-1-html-basics--building-the-skeleton)
  - [Learning Objectives](#learning-objectives)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction to Web Development](#1-introduction-to-web-development)
    - [How Websites Work](#how-websites-work)
  - [2. What is HTML?](#2-what-is-html)
  - [3. Basic HTML Structure](#3-basic-html-structure)
  - [4. Essential HTML Tags](#4-essential-html-tags)
    - [Headings](#headings)
    - [Paragraphs](#paragraphs)
    - [Links](#links)
    - [Images](#images)
    - [Lists](#lists)
    - [Divs and Spans](#divs-and-spans)
    - [Input Elements](#input-elements)
  - [5. Building a Game Interface Layout](#5-building-a-game-interface-layout)
  - [6. Mini Assignment: Create Your Game Layout](#6-mini-assignment-create-your-game-layout)
    - [Requirements](#requirements)
    - [Starter Template](#starter-template)
    - [Submission](#submission)
  - [Today's Key Takeaways](#todays-key-takeaways)
  - [6. Daily Mini-Challenges](#6-daily-mini-challenges)
  - [Next Steps](#next-steps)

## 1. Introduction to Web Development

### How Websites Work

When you visit a website, several technologies work together to create what you see on screen:

1. **HTML** (HyperText Markup Language): Provides the structure and content
2. **CSS** (Cascading Style Sheets): Controls the presentation and styling
3. **JavaScript**: Adds interactivity and dynamic behavior

Think of a website like a house:

- HTML is the foundation and frame (structure)
- CSS is the paint, decorations, and furnishings (style)
- JavaScript is the electrical wiring, plumbing, and smart appliances (functionality)

A web browser (like Chrome, Firefox, Safari) reads these files and renders them as the visual interface you interact with.

## 2. What is HTML?

HTML is a markup language that defines the structure of web content. It uses a series of elements (represented by tags) to tell the browser how to display content.

HTML elements are the building blocks of web pages. They create a hierarchy of content by nesting elements inside each other.

```html
<tagname>Content goes here...</tagname>
```

Tags usually come in pairs: an opening tag `<tagname>` and a closing tag `</tagname>`. The content goes between these tags.

## 3. Basic HTML Structure

Every HTML document follows a standard structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata about the document goes here -->
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
    <h1>Hello, World!</h1>
  </body>
</html>
```

Let's break this down:

- `<!DOCTYPE html>`: Declares that this is an HTML5 document
- `<html>`: The root element of the HTML page
- `<head>`: Contains meta-information about the document (not visible on page)
- `<title>`: Sets the title shown in the browser tab
- `<body>`: Contains all the visible content of the page

## 4. Essential HTML Tags

### Headings

HTML offers six levels of headings, from `<h1>` (most important) to `<h6>` (least important):

```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

### Paragraphs

The `<p>` element defines a paragraph:

```html
<p>This is a paragraph of text. It can contain multiple sentences.</p>
```

### Links

The `<a>` (anchor) element creates hyperlinks:

```html
<a href="https://www.example.com">Click here to visit Example.com</a>
```

- `href` is an attribute that specifies the destination URL

### Images

The `<img>` element embeds images:

```html
<img src="image.jpg" alt="Description of the image" />
```

- `src` specifies the image path
- `alt` provides alternative text for screen readers or if the image fails to load

### Lists

HTML supports ordered lists (`<ol>`) and unordered lists (`<ul>`):

```html
<!-- Unordered list with bullets -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Ordered list with numbers -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Divs and Spans

These are container elements used to group content for styling and positioning:

- `<div>`: Block-level container (starts on a new line)
- `<span>`: Inline container (within the flow of text)

```html
<div>
  <p>This is a paragraph inside a div.</p>
</div>

<p>This text contains a <span>highlighted</span> word.</p>
```

### Input Elements

HTML offers various input elements for collecting user data:

```html
<!-- Text input -->
<input type="text" placeholder="Enter your name" />

<!-- Button -->
<button>Click Me</button>

<!-- Checkbox -->
<input type="checkbox" /> Check this box

<!-- Radio buttons -->
<input type="radio" name="option" /> Option 1
<input type="radio" name="option" /> Option 2
```

## 5. Building a Game Interface Layout

Now, let's apply what we've learned to create the structure for our game. We'll build a simple "Guess the Number" game interface:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Guess the Number Game</title>
  </head>
  <body>
    <header>
      <h1>Guess the Number</h1>
    </header>

    <main>
      <section id="game-rules">
        <h2>Game Rules</h2>
        <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>
        <p>Try to guess the number in as few attempts as possible!</p>
      </section>

      <section id="game-area">
        <div id="guess-input">
          <input
            type="number"
            id="user-guess"
            min="1"
            max="100"
            placeholder="Enter your guess..."
          />
          <button id="submit-guess">Submit Guess</button>
        </div>

        <div id="game-message">
          <p>Enter a number and click "Submit Guess"</p>
        </div>

        <div id="game-history">
          <h3>Your Guesses</h3>
          <ul id="guesses-list">
            <!-- Guesses will appear here -->
          </ul>
        </div>
      </section>

      <section id="game-stats">
        <div id="score">
          <h3>Score</h3>
          <p>Attempts: <span id="attempts">0</span></p>
        </div>
      </section>
    </main>

    <footer>
      <p>Created during the "Create Your First Website" Bootcamp</p>
    </footer>
  </body>
</html>
```

This structure creates a complete layout for our "Guess the Number" game, including:

- A header with the game title
- Game rules section
- Game area with input field and submit button
- Message area for feedback
- History section to display past guesses
- Statistics section to track attempts
- Footer with additional information

## 6. Mini Assignment: Create Your Game Layout

Now it's your turn to practice! Create an HTML document for a simple game of your choice. You can either:

1. Recreate the "Guess the Number" game layout we built above, or
2. Create a layout for a different simple game (like Rock, Paper, Scissors)

### Requirements

- Use proper HTML document structure
- Include at least 5 different types of HTML elements
- Organize your content with appropriate sections
- Add input elements for user interaction
- Include a game title, rules section, and gameplay area

### Starter Template

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Game</title>
  </head>
  <body>
    <header>
      <!-- Game title goes here -->
    </header>

    <main>
      <!-- Game sections go here -->
    </main>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </body>
</html>
```

### Submission

Save your HTML file and be ready to build on it tomorrow when we add CSS styling!

## Today's Key Takeaways

- HTML provides the structure and content of web pages
- HTML documents follow a standard structure with `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` elements
- HTML elements have opening and closing tags that contain content
- We can use various HTML elements to create headings, paragraphs, links, images, lists, and more
- HTML elements can be nested to create complex page structures
- Input elements allow for user interaction

## 6. Daily Mini-Challenges

Ready to practice what you've learned? Try our HTML mini-challenges to reinforce today's concepts!

These challenges will help you apply your HTML knowledge in different contexts and build confidence with the concepts we've covered.

[View Today's Mini-Challenges](../day1/challenges.md)

## Next Steps

Congratulations on completing Day 1 of the bootcamp! Tomorrow, we'll learn how to make our HTML look good with CSS styling.

[Continue to Day 2: CSS Styling →](../day2/README.md)

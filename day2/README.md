# Day 2: CSS Fundamentals & Styling the Page

## Learning Objectives

By the end of today, you'll be able to:

- Understand what CSS is and how it works
- Implement different ways to apply CSS to HTML
- Use CSS selectors to target specific elements
- Apply various CSS properties to style elements
- Create a responsive layout using Flexbox
- Add interactive effects with pseudo-classes

## 1. Introduction to CSS

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls how HTML elements appear on screen, giving your website its visual style and layout.

### CSS Syntax

CSS follows a simple syntax pattern:

```css
selector {
  property: value;
  another-property: another-value;
}
```

- **Selector**: Targets the HTML element(s) to style
- **Property**: The aspect you want to style (like color, font-size, etc.)
- **Value**: The setting you want to apply to the property

For example:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

This styles all `<h1>` elements to have blue text with a font size of 24 pixels.

## 2. Ways to Apply CSS

There are three methods to include CSS in your HTML document:

### Inline CSS

Applies styles directly to individual HTML elements using the `style` attribute:

```html
<p style="color: red; font-size: 16px;">This is a red paragraph.</p>
```

**Pros**: Immediately applies to that specific element
**Cons**: Hard to maintain, mixes content with presentation

### Internal CSS

Defines styles in the `<head>` section of the HTML document using the `<style>` tag:

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
```

**Pros**: Keeps all styles in one place
**Cons**: Only applies to the current HTML document

### External CSS

Links to a separate CSS file from the HTML document:

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

Then in `styles.css`:

```css
p {
  color: green;
  font-size: 20px;
}
```

**Pros**: Separation of concerns, reusable across multiple pages, better caching
**Cons**: Additional HTTP request (minor concern)

For our project, we'll use external CSS for better organization and maintainability.

## 3. CSS Selectors

CSS selectors determine which elements your styles will apply to. Here are the most common types:

### Element Selector

Selects all elements of a specified type:

```css
p {
  color: blue;
}
```

### ID Selector

Selects an element with a specific ID (should be unique on the page):

```css
#game-area {
  background-color: #f5f5f5;
}
```

### Class Selector

Selects all elements with a specific class (can be used multiple times):

```css
.button {
  background-color: green;
  color: white;
}
```

### Descendant Selector

Selects elements that are descendants of a specified element:

```css
#game-rules p {
  font-style: italic;
}
```

### Combining Selectors

You can combine selectors to make them more specific:

```css
.button.primary {
  background-color: blue;
}
```

## 4. Essential CSS Properties

### Text Styling

```css
p {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  text-decoration: underline;
}
```

### Box Model

Every element in HTML is represented as a rectangular box, with:

- **Content**: The actual content of the element
- **Padding**: Space between content and border
- **Border**: Line around the element
- **Margin**: Space outside the border

```css
div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

### Background

```css
body {
  background-color: #f0f0f0;
  background-image: url("background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

### Flexbox Layout

Flexbox is a powerful layout method for arranging items in rows or columns:

```css
.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: center; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  flex-wrap: wrap; /* allows items to wrap to next line */
  gap: 10px; /* space between items */
}
```

## 5. Styling Our Game Interface

Let's apply CSS to style our "Guess the Number" game from yesterday:

First, let's create a new CSS file:

```css
/* styles.css */

/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
}

body {
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

/* Layout */
header,
main,
footer {
  max-width: 800px;
  margin: 0 auto;
}

/* Header */
header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #4a55a2;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
}

/* Game Rules Section */
#game-rules {
  background-color: #e8f4fd;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 5px solid #4a55a2;
}

/* Game Area */
#game-area {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

#guess-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="number"] {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  flex-grow: 1;
}

button {
  background-color: #4a55a2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #363e7a;
}

#game-message {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
}

/* Game History */
#game-history {
  margin-bottom: 20px;
}

#guesses-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

#guesses-list li {
  background-color: #e8f4fd;
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: bold;
}

/* Game Stats */
#game-stats {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

#attempts {
  font-weight: bold;
  color: #4a55a2;
  font-size: 1.2rem;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  color: #777;
  border-top: 1px solid #ddd;
}

/* Responsive Design */
@media (max-width: 600px) {
  #guess-input {
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
  }
}
```

Then link it in our HTML file:

```html
<head>
  <title>Guess the Number Game</title>
  <link rel="stylesheet" href="styles.css" />
</head>
```

## 6. Pseudo-classes for Interactivity

Pseudo-classes select elements based on their state or position:

```css
/* Style for when mouse hovers over button */
button:hover {
  background-color: darkblue;
}

/* Style for when button is being clicked */
button:active {
  transform: scale(0.98);
}

/* Style for the first paragraph in the rules section */
#game-rules p:first-child {
  font-weight: bold;
}

/* Style for visited links */
a:visited {
  color: purple;
}
```

## 7. Responsive Design Basics

Responsive design ensures your website looks good on all devices:

### Media Queries

Media queries apply different styles based on the device's screen size:

```css
/* Styles for screens smaller than 600px */
@media (max-width: 600px) {
  body {
    padding: 10px;
  }

  h1 {
    font-size: 1.8rem;
  }

  #guess-input {
    flex-direction: column;
  }
}
```

### Viewport Meta Tag

Add this to the `<head>` of your HTML to ensure proper scaling on mobile devices:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 8. Mini Assignment: Style Your Game Interface

Now it's your turn to practice! Take the HTML game layout you created yesterday and style it using CSS.

### Requirements

- Create an external CSS file
- Use at least 5 different CSS properties
- Include hover effects for interactive elements
- Make your design responsive (works on mobile and desktop)
- Use a color scheme that enhances the game theme

### Steps

1. Create a new file called `styles.css`
2. Link it to your HTML document
3. Add global styles (fonts, colors, etc.)
4. Style individual sections of your game
5. Add hover effects for buttons
6. Include media queries for responsive design
7. Test your design at different screen sizes

### Starter Template

```css
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

/* Header Styles */
header {
  /* Your header styles here */
}

/* Add more sections as needed */
```

## Today's Key Takeaways

- CSS adds visual styling to HTML elements
- We can apply CSS through inline, internal, or external methods (external is preferred)
- Selectors target HTML elements for styling
- CSS properties control aspects like color, size, spacing, and layout
- The box model organizes content with padding, border, and margin
- Flexbox creates flexible layouts for modern web design
- Pseudo-classes add interactivity to elements
- Media queries enable responsive design for different screen sizes

## Daily Mini-Challenges

Ready to practice what you've learned? Try our CSS mini-challenges to reinforce today's styling concepts!

These challenges will help you apply your CSS knowledge in different contexts and build confidence with the styling techniques we've covered.

[View Today's Mini-Challenges](challenges.md)

## Coming Up Tomorrow

Tomorrow we'll add JavaScript to make our game fully interactive! We'll learn about variables, functions, DOM manipulation, and event handling to create a complete gaming experience.

[Continue to Day 3 →](../day3/README.md)

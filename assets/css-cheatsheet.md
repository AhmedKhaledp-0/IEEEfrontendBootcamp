# CSS Cheatsheet

This quick reference guide contains the most commonly used CSS properties and values for your reference during the bootcamp.

## CSS Syntax

```css
selector {
  property: value;
  another-property: another-value;
}
```

## Selectors

```css
/* Element Selector */
p {
  color: blue;
}

/* ID Selector */
#unique-element {
  color: red;
}

/* Class Selector */
.my-class {
  color: green;
}

/* Multiple Selectors */
h1, h2, h3 {
  color: purple;
}

/* Descendant Selector */
article p {
  color: orange;
}

/* Direct Child Selector */
ul > li {
  color: yellow;
}

/* Adjacent Sibling Selector */
h1 + p {
  color: teal;
}

/* Attribute Selector */
input[type="text"] {
  color: brown;
}

/* Pseudo-class Selector */
a:hover {
  color: pink;
}

/* Pseudo-element Selector */
p::first-line {
  color: gray;
}
```

## Colors

```css
/* Color Names */
color: red;
color: blue;
color: green;

/* Hex Colors */
color: #ff0000; /* Red */
color: #00ff00; /* Green */
color: #0000ff; /* Blue */
color: #fff;    /* White (shorthand) */

/* RGB/RGBA */
color: rgb(255, 0, 0);      /* Red */
color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */

/* HSL/HSLA */
color: hsl(0, 100%, 50%);      /* Red */
color: hsla(0, 100%, 50%, 0.5); /* Semi-transparent red */

/* Current color */
border-color: currentColor;
```

## Text Styling

```css
/* Font Family */
font-family: Arial, Helvetica, sans-serif;
font-family: 'Times New Roman', Times, serif;
font-family: 'Open Sans', sans-serif;

/* Font Size */
font-size: 16px;
font-size: 1.2em;
font-size: 1.2rem;
font-size: 90%;

/* Font Weight */
font-weight: normal;
font-weight: bold;
font-weight: 400;  /* Normal */
font-weight: 700;  /* Bold */

/* Font Style */
font-style: normal;
font-style: italic;

/* Text Alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Text Decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;

/* Text Transform */
text-transform: none;
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Line Height */
line-height: 1.5;
line-height: 20px;

/* Letter Spacing */
letter-spacing: 1px;
letter-spacing: 0.1em;

/* Text Shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
```

## Box Model

```css
/* Width and Height */
width: 100px;
height: 100px;
max-width: 100%;
min-height: 200px;

/* Margin */
margin: 10px;                  /* All sides */
margin: 10px 20px;             /* Top/bottom, left/right */
margin: 10px 20px 30px 40px;   /* Top, right, bottom, left */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Padding */
padding: 10px;                  /* All sides */
padding: 10px 20px;             /* Top/bottom, left/right */
padding: 10px 20px 30px 40px;   /* Top, right, bottom, left */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;

/* Border */
border: 1px solid black;
border-width: 1px;
border-style: solid;
border-color: black;
border-top: 2px dashed red;
border-radius: 5px;         /* Rounded corners */
border-radius: 50%;         /* Circle (if width = height) */

/* Box Sizing */
box-sizing: content-box;  /* Default */
box-sizing: border-box;   /* Include padding and border in width/height */
```

## Background

```css
/* Background Color */
background-color: #f0f0f0;
background-color: transparent;

/* Background Image */
background-image: url('image.jpg');
background-image: linear-gradient(to right, red, yellow);

/* Background Position */
background-position: center;
background-position: top left;
background-position: 50% 50%;

/* Background Size */
background-size: cover;
background-size: contain;
background-size: 100% 100%;

/* Background Repeat */
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;

/* Background Attachment */
background-attachment: scroll;
background-attachment: fixed;

/* Shorthand */
background: #f0f0f0 url('image.jpg') no-repeat center / cover;
```

## Display and Positioning

```css
/* Display */
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;

/* Position */
position: static;    /* Default */
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Positioning Properties */
top: 10px;
right: 20px;
bottom: 30px;
left: 40px;
z-index: 10;

/* Float */
float: left;
float: right;
float: none;

/* Clear */
clear: left;
clear: right;
clear: both;
```

## Flexbox

```css
/* Parent Container (Flex Container) */
.container {
  display: flex;
  flex-direction: row;          /* or: column, row-reverse, column-reverse */
  flex-wrap: nowrap;            /* or: wrap, wrap-reverse */
  justify-content: flex-start;  /* or: flex-end, center, space-between, space-around, space-evenly */
  align-items: stretch;         /* or: flex-start, flex-end, center, baseline */
  align-content: stretch;       /* or: flex-start, flex-end, center, space-between, space-around */
  gap: 10px;                    /* Space between flex items */
}

/* Child Elements (Flex Items) */
.item {
  flex-grow: 0;           /* Grow factor (default: 0) */
  flex-shrink: 1;         /* Shrink factor (default: 1) */
  flex-basis: auto;       /* Initial size (default: auto) */
  flex: 0 1 auto;         /* Shorthand for grow, shrink, basis */
  align-self: auto;       /* Override align-items for specific item */
  order: 0;               /* Order of the flex item (default: 0) */
}
```

## Grid

```css
/* Parent Container (Grid Container) */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;          /* Three columns */
  grid-template-columns: repeat(3, 1fr);       /* Three equal columns */
  grid-template-rows: 100px auto 100px;        /* Three rows */
  grid-gap: 10px;                              /* Space between grid items */
  gap: 10px;                                   /* Modern shorthand for grid-gap */
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

/* Child Elements (Grid Items) */
.item {
  grid-column: 1 / 3;          /* Start at line 1, end at line 3 */
  grid-column: 1 / span 2;     /* Start at line 1, span 2 cells */
  grid-row: 1 / 3;             /* Start at line 1, end at line 3 */
  grid-area: header;           /* Place in named grid area */
}
```

## Transitions and Animations

```css
/* Transitions */
transition: property duration timing-function delay;
transition: all 0.3s ease 0s;
transition: background-color 0.5s ease-in-out;

/* Individual Transition Properties */
transition-property: background-color, transform;
transition-duration: 0.3s;
transition-timing-function: ease;         /* or: linear, ease-in, ease-out, ease-in-out, cubic-bezier() */
transition-delay: 0.2s;

/* Animations */
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animated-element {
  animation: slide-in 1s ease-out forwards;
  animation-name: slide-in;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;           /* or: infinite */
  animation-direction: normal;            /* or: reverse, alternate, alternate-reverse */
  animation-fill-mode: forwards;          /* or: backwards, both, none */
  animation-play-state: running;          /* or: paused */
}
```

## Transforms

```css
/* 2D Transforms */
transform: translate(20px, 30px);
transform: translateX(20px);
transform: translateY(30px);
transform: scale(1.5);
transform: scaleX(1.5);
transform: scaleY(1.5);
transform: rotate(45deg);
transform: skew(10deg, 20deg);

/* 3D Transforms */
transform: perspective(500px);
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotateZ(45deg);
transform: translateZ(50px);

/* Multiple Transforms */
transform: translate(20px, 30px) rotate(45deg) scale(1.5);
```

## Media Queries

```css
/* Mobile First Approach */
/* Base styles for mobile */
body {
  font-size: 16px;
}

/* Tablets and larger */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* Desktops and larger */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
}

/* Desktop First Approach */
/* Base styles for desktop */
.container {
  width: 1200px;
}

/* Tablets */
@media (max-width: 1023px) {
  .container {
    width: 90%;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}

/* Orientation */
@media (orientation: landscape) {
  /* Styles for landscape orientation */
}

/* Print Styles */
@media print {
  /* Styles for print */
}
```

## Miscellaneous

```css
/* Opacity */
opacity: 0.5;

/* Visibility */
visibility: visible;
visibility: hidden;

/* Overflow */
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;

/* Cursor */
cursor: pointer;
cursor: default;
cursor: not-allowed;

/* List Styles */
list-style-type: none;
list-style-type: disc;
list-style-type: decimal;
list-style-position: inside;
list-style-position: outside;
list-style-image: url('bullet.png');
list-style: disc inside url('bullet.png');

/* Table Styles */
border-collapse: separate;
border-collapse: collapse;
border-spacing: 2px;
table-layout: auto;
table-layout: fixed;

/* Box Shadow */
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
box-shadow: 2px 2px red, -2px -2px blue;

/* Filter Effects */
filter: blur(5px);
filter: brightness(150%);
filter: contrast(200%);
filter: grayscale(100%);
filter: hue-rotate(90deg);
filter: invert(100%);
filter: opacity(50%);
filter: saturate(200%);
filter: sepia(100%);
filter: drop-shadow(5px 5px 10px black);
```

## Best Practices

1. Use a CSS reset or normalize.css to ensure consistent styles across browsers
2. Follow a consistent naming convention (BEM, SMACSS, etc.)
3. Organize your CSS logically (by component, section, etc.)
4. Use comments to organize and explain your styles
5. Use shorthand properties when possible (margin, padding, etc.)
6. Avoid using !important (use specific selectors instead)
7. Minimize specificity conflicts with careful selector usage
8. Use variables (custom properties) for repeated values
9. Consider using a preprocessor like Sass or Less for larger projects
10. Test your styles across different browsers and devices

Happy styling!

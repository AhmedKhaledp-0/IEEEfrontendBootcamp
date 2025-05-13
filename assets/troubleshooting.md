# Troubleshooting Guide

This guide will help you solve common issues that you might encounter during the bootcamp.

## HTML Issues

### Problem: My HTML file isn't displaying correctly in the browser

**Possible causes and solutions:**

1. **File not saved with .html extension**

   - Make sure your file is saved with the .html extension (e.g., index.html)

2. **Incorrect file path**

   - Double-check the file path in your browser. Try opening the file directly from your file explorer

3. **Missing or incorrect HTML structure**

   - Verify that your file has the basic HTML structure:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Page Title</title>
     </head>
     <body>
       Content here
     </body>
   </html>
   ```

4. **Unclosed tags**
   - Check that all tags are properly closed
   - Use your text editor's HTML validation if available

### Problem: Images aren't showing up

**Possible causes and solutions:**

1. **Incorrect file path**

   - Check that the path in your `src` attribute is correct
   - Remember that paths are case-sensitive
   - For relative paths, make sure you're using the correct directory structure

2. **File doesn't exist or has different name**

   - Verify that the image file exists and has the exact name you're referencing

3. **Unsupported file type**

   - Make sure you're using a supported image format (.jpg, .png, .gif, .svg, etc.)

4. **Missing alt attribute**
   - Always include an alt attribute for accessibility, though this won't affect whether the image displays:

   ```html
   <img src="image.jpg" alt="Description of image" />
   ```

## CSS Issues

### Problem: CSS styles aren't being applied

**Possible causes and solutions:**

1. **CSS file not linked properly**

   - Check that your link tag is correct:

   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

   - Verify the path to your CSS file is correct

2. **CSS rules specificity issues**

   - More specific selectors override less specific ones
   - Check if other rules might be overriding yours
   - Try using browser DevTools (F12) to inspect element styles

3. **Typos in class or ID names**

   - Make sure the class/ID names in your HTML match exactly what's in your CSS
   - Check for capitalization (classes and IDs are case-sensitive)

4. **Syntax errors in CSS**
   - Look for missing semicolons, braces, or other syntax errors
   - Each rule should have the format: `selector { property: value; }`

### Problem: Layout doesn't look right on different screen sizes

**Possible causes and solutions:**

1. **Missing viewport meta tag**

   - Add this in your HTML `<head>` section:

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

2. **Fixed pixel widths instead of relative units**

   - Use relative units like percentages, em, rem, or vh/vw instead of fixed pixels
   - Example: `width: 100%;` instead of `width: 600px;`

3. **No media queries for responsiveness**

   - Add media queries to adjust styles for different screen sizes:

   ```css
   @media (max-width: 768px) {
     /* Styles for screens smaller than 768px */
   }
   ```

4. **Not using responsive layout techniques**
   - Consider using Flexbox or Grid for layout
   - Example Flexbox container:

   ```css
   .container {
     display: flex;
     flex-wrap: wrap;
   }
   ```

## JavaScript Issues

### Problem: JavaScript code doesn't run at all

**Possible causes and solutions:**

1. **JavaScript file not linked properly**

   - Check your script tag:

   ```html
   <script src="script.js"></script>
   ```

   - Verify file path is correct
   - Place script tag before the closing `</body>` tag or use `defer` attribute

2. **Syntax errors stopping execution**

   - Open browser console (F12) to check for error messages
   - Look for missing parentheses, brackets, or semicolons
   - Check for typos in variable or function names

3. **JavaScript disabled in browser**
   - Ensure JavaScript is enabled in your browser settings

### Problem: JavaScript runs but doesn't work as expected

**Possible causes and solutions:**

1. **DOM elements not found**

   - Make sure the script runs after the DOM is loaded:

   ```javascript
   document.addEventListener("DOMContentLoaded", function () {
     // Your code here
   });
   ```

   - Check that element IDs match exactly what you're using in your selectors

2. **Console shows errors**

   - Check the browser console (F12) for specific error messages
   - Common errors include:
     - `TypeError: null is not an object` (trying to use an element that doesn't exist)
     - `Uncaught ReferenceError` (using a variable or function before it's defined)

3. **Logic errors in your code**

   - Use `console.log()` at different points to debug your code flow
   - Check that variable values are what you expect
   - Verify conditions in if statements are evaluating correctly

4. **Event listeners not working**
   - Make sure you're using the correct event type (click, submit, etc.)
   - Verify you're attaching the listener to the right element
   - Check that the listener function is defined correctly

### Problem: Form submission issues

**Possible causes and solutions:**

1. **Form submits and page refreshes immediately**

   - Prevent the default form submission:

   ```javascript
   document
     .getElementById("myForm")
     .addEventListener("submit", function (event) {
       event.preventDefault();
       // Your code here
     });
   ```

2. **Form validation not working**
   - Check that your validation logic runs before the form submission
   - Verify that error messages are being displayed
   - Look for logic errors in your validation conditions

## Game Functionality Issues

### Problem: Game doesn't generate a random number correctly

**Possible causes and solutions:**

1. **Random number generation logic**

   - Check your random number code:

   ```javascript
   // For a number between 1 and 100
   const randomNumber = Math.floor(Math.random() * 100) + 1;
   ```

2. **Variable scope issues**
   - Make sure your random number variable is accessible where needed
   - If it's a global variable, check that it's not being overwritten

### Problem: Guess checking logic doesn't work

**Possible causes and solutions:**

1. **Type mismatch**

   - Form inputs return strings, but you might be comparing with numbers
   - Convert string to number:

   ```javascript
   const userGuess = parseInt(document.getElementById("guess").value);
   ```

2. **Conditional logic errors**

   - Double-check your if/else conditions
   - Add console.log statements to see what values are being compared

3. **Comparison operators**
   - Make sure you're using the correct operators (==, ===, <, >, etc.)
   - Remember that == compares values while === compares values and types

### Problem: Game UI doesn't update properly

**Possible causes and solutions:**

1. **DOM selection errors**

   - Verify IDs and class names in your HTML match your JavaScript selectors
   - Check that elements exist when you're trying to update them

2. **Content updating issues**

   - To update text content use:

   ```javascript
   element.textContent = "New text";
   // or
   element.innerHTML = "New <strong>HTML</strong>";
   ```

3. **Class manipulation problems**

   - To add/remove classes (for styling changes):

   ```javascript
   element.classList.add("highlight");
   element.classList.remove("hidden");
   element.classList.toggle("active");
   ```

## Browser and Environment Issues

### Problem: Works in one browser but not another

**Possible causes and solutions:**

1. **Browser compatibility issues**

   - Some newer JavaScript features may not work in older browsers
   - Check browser compatibility on [MDN Web Docs](https://developer.mozilla.org/)
   - Consider using a polyfill for unsupported features

2. **CSS rendering differences**

   - Browsers may apply default styles differently
   - Use a CSS reset or normalize.css to start with consistent styling

3. **Vendor prefixes missing for CSS properties**
   - Some CSS properties need vendor prefixes for older browsers:

   ```css
   -webkit-transform: rotate(45deg); /* Safari */
   -moz-transform: rotate(45deg); /* Firefox */
   transform: rotate(45deg); /* Standard */
   ```

### Problem: Performance issues (game runs slowly)

**Possible causes and solutions:**

1. **Inefficient code**

   - Avoid unnecessary DOM operations
   - Use more efficient selectors
   - Minimize loops and complex calculations

2. **Large media files**

   - Optimize images and other media for web use
   - Consider using compressed formats and appropriate dimensions

3. **Memory leaks**
   - Make sure to remove event listeners when they're no longer needed
   - Watch for variables that grow continuously

## Debugging Techniques

### Using console.log

The simplest but most effective debugging tool:

```javascript
console.log("Value of variable x:", x);
console.log("Function was called!");
console.log("Data received:", data);
```

### Using the browser's DevTools

1. **Inspect element (right-click > Inspect)**

   - Examine and modify HTML/CSS in real-time
   - See applied styles and computed values

2. **Console (F12 > Console tab)**

   - View errors and logged messages
   - Run JavaScript directly in the console

3. **Breakpoints (F12 > Sources tab)**
   - Pause execution at specific points
   - Step through code line by line
   - Inspect variable values at each step

### Common debugging workflow

1. Identify the specific issue (what's not working?)
2. Check the console for errors
3. Add console.log statements to track code execution
4. Isolate the problem by testing smaller pieces of functionality
5. Fix the issue and test thoroughly
6. Remove debugging code (console.log statements) before finalizing

## Getting Help

If you've tried these troubleshooting steps and still have issues:

1. **Search online**

   - Use specific search terms describing your issue
   - Include error messages in your search
   - Check Stack Overflow for similar problems

2. **Read documentation**

   - MDN Web Docs for HTML, CSS, and JavaScript
   - W3Schools for tutorials and examples

3. **Ask clear questions**
   - Describe what you're trying to do
   - Explain what you've tried so far
   - Share relevant code snippets
   - Include any error messages

Remember: Debugging is a normal part of coding! Every programmer spends time troubleshooting issues, so don't get discouraged when you encounter problems.

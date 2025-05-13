# Frequently Asked Questions (FAQ)

## General Questions

### Q: Do I need any prior coding experience for this bootcamp?

**A:** No, this bootcamp is designed for complete beginners. We start from the very basics and guide you step by step.

### Q: What software do I need to install?

**A:** You only need:

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- A text editor (we recommend Visual Studio Code, which is free)
- No special software installations are required!

### Q: Can I follow along on any operating system?

**A:** Yes! The tools and technologies we use work the same way on Windows, macOS, and Linux.

### Q: How much time should I spend on each day's content?

**A:** We recommend allocating at least 3-4 hours per day to go through the material, try the exercises, and work on the mini-assignments.

### Q: What if I get stuck on a concept or exercise?

**A:** If you get stuck:

1. Re-read the relevant section
2. Check the cheatsheets in the assets folder
3. Try searching online (MDN Web Docs is an excellent resource)
4. Take a short break and come back with fresh eyes

## HTML Questions

### Q: What's the difference between HTML, CSS, and JavaScript?

**A:**

- **HTML** is for content and structure (the "what")
- **CSS** is for presentation and styling (the "how it looks")
- **JavaScript** is for behavior and interactivity (the "what it does")

### Q: Do I need to memorize all the HTML tags?

**A:** No, you don't need to memorize them all. Focus on understanding the common ones covered in the bootcamp. You can always refer to the HTML cheatsheet or look up specific tags as needed.

### Q: What's the difference between `<div>` and `<span>`?

**A:**

- `<div>` is a block-level element (starts on a new line and takes up the full width available)
- `<span>` is an inline element (stays in the flow of text and only takes as much width as necessary)

### Q: When should I use semantic elements vs. div elements?

**A:** Use semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, etc.) when the content has a specific meaning or purpose. Use `<div>` elements for general containers or when you need a container purely for styling purposes.

## CSS Questions

### Q: Why isn't my CSS styling being applied to my HTML?

**A:** Common reasons include:

1. The CSS file isn't properly linked to your HTML
2. Your CSS selectors don't match the HTML elements
3. There might be more specific selectors overriding your styles
4. Check for typos in class names or selectors
5. The file path to your CSS file might be incorrect

### Q: What's the difference between classes and IDs?

**A:**

- **Classes** can be reused across multiple elements and are selected with a dot (`.class-name`)
- **IDs** should be unique to one element on the page and are selected with a hash (`#id-name`)
- Use classes for styling that needs to be applied to multiple elements
- Use IDs for unique elements that need to be targeted specifically

### Q: How do I center an element with CSS?

**A:**
For text or inline elements:

```css
.element {
  text-align: center;
}
```

For block elements:

```css
.element {
  margin: 0 auto;
  width: [some width]; /* Must have a width */
}
```

Using Flexbox (for the parent container):

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Q: What's the difference between padding and margin?

**A:**

- **Padding** is the space inside an element, between its content and its border
- **Margin** is the space outside an element, between its border and neighboring elements

## JavaScript Questions

### Q: Why isn't my JavaScript working?

**A:** Common issues include:

1. The script is loaded before the HTML elements it tries to access
2. There are syntax errors (check the browser console with F12)
3. You're using the wrong selectors to access elements
4. The script file isn't properly linked to your HTML
5. You're trying to access elements before they're fully loaded in the DOM

### Q: What's the difference between `let`, `const`, and `var`?

**A:**

- `const`: Creates a constant that cannot be reassigned (preferred for values that don't change)
- `let`: Creates a block-scoped variable that can be reassigned (used when a value needs to change)
- `var`: Older way to declare variables (function-scoped, less predictable, generally avoided in modern code)

### Q: How do I debug my JavaScript code?

**A:**

1. Use `console.log()` to output values at different points in your code
2. Check the browser's developer tools (F12) to see error messages
3. Add breakpoints in the Sources panel of developer tools to pause execution
4. Use `debugger;` statement in your code to pause execution at that point

### Q: What's the difference between `==` and `===`?

**A:**

- `==` is the equality operator that performs type conversion
- `===` is the strict equality operator that checks both value and type
- It's generally better to use `===` for more predictable results

## Project Questions

### Q: Can I customize the game beyond what's shown in the tutorials?

**A:** Absolutely! We encourage you to get creative and add your own features, styles, and enhancements to the game after you've completed the core functionality.

### Q: What if I want to save my progress for later?

**A:** You can:

1. Save your files locally on your computer
2. Use a service like GitHub to create a repository for your project
3. Use cloud-based code editors like CodePen or Replit that save your work online

### Q: How can I share my completed game with friends?

**A:** You can:

1. Host your game on GitHub Pages (free)
2. Use a service like Netlify or Vercel to deploy your site
3. Share the files directly for someone to open locally on their computer
4. Use CodePen or similar services to create a shareable online version

### Q: Where can I learn more after finishing the bootcamp?

**A:** Check out these resources:

1. MDN Web Docs for in-depth documentation
2. freeCodeCamp for more free tutorials and projects
3. Frontend Mentor for real-world project practice
4. YouTube channels like Traversy Media, Web Dev Simplified, or Kevin Powell
5. Courses on platforms like Udemy, Coursera, or Pluralsight

## Technical Issues

### Q: My browser isn't showing the latest changes I made to my code

**A:** Try:

1. Hard refreshing the page (Ctrl+F5 or Cmd+Shift+R)
2. Clearing your browser cache
3. Opening the page in a private/incognito window
4. Checking for syntax errors in your code

### Q: How do I view the browser console to see errors?

**A:**

- Chrome/Edge: Press F12 or right-click > Inspect > Console tab
- Firefox: Press F12 or right-click > Inspect Element > Console tab
- Safari: Enable Developer Tools in preferences, then right-click > Inspect Element > Console tab

### Q: Can I use the bootcamp materials offline?

**A:** Yes, all the materials can be downloaded and used offline. Just make sure to download all the files and maintain the same folder structure.

# Day 2: CSS Mini-Challenges

These mini-challenges are designed to reinforce the CSS concepts you've learned today. Try to complete them on your own, referring to the lesson material or cheatsheets as needed.

## Challenge 1: Style Your Bio Page

**Objective:** Apply CSS styling to the bio page you created in Day 1.

**Requirements:**

1. Create a separate CSS file named `my-bio-styles.css`
2. Link it to your `my-bio.html` file
3. Apply styles to:
   - Set a custom font for the entire page (use Google Fonts or system fonts)
   - Create a color scheme with at least 3 coordinated colors
   - Add a border and padding to your image
   - Style your heading with a different color and font size
   - Add margins between sections
   - Style your list items with custom bullets or numbers
   - Make your email link change color when hovered

**Bonus:** Add a subtle background pattern or gradient

**Example CSS:**

```css
/* Base styles */
body {
  font-family: "Raleway", sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
}

/* Header styles */
h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

h2 {
  color: #2980b9;
  font-size: 1.8rem;
  margin-top: 30px;
}

/* Image styles */
img {
  max-width: 300px;
  border: 5px solid #3498db;
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  display: block;
  margin: 20px auto;
}

/* List styles */
ul {
  list-style-type: none;
  padding-left: 20px;
}

ul li {
  padding: 5px 0;
  position: relative;
}

ul li::before {
  content: "▹";
  color: #3498db;
  position: absolute;
  left: -20px;
}

/* Link styles */
a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  color: #e74c3c;
  text-decoration: underline;
}
```

## Challenge 2: Style Your Recipe Card

**Objective:** Transform your recipe HTML into an attractive recipe card with CSS.

**Requirements:**

1. Create a CSS file named `recipe-styles.css`
2. Link it to your `recipe.html` file
3. Apply styles to:
   - Create a card-like appearance with border and shadow
   - Style the recipe image (consider rounded corners or a frame effect)
   - Format preparation time and servings info with icons or distinctive styling
   - Style ingredients list differently from instructions list
   - Use different background colors for different sections
   - Add visual emphasis to section titles

**Bonus:** Create a print-friendly style with a media query

**Example CSS:**

```css
body {
  font-family: "Georgia", serif;
  line-height: 1.6;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}

.recipe-card {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

h1 {
  background-color: #ff6b6b;
  color: white;
  padding: 20px;
  margin: 0;
  text-align: center;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.recipe-info {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background-color: #f8f9fa;
  font-weight: bold;
  border-bottom: 1px dashed #ccc;
}

.ingredients,
.instructions,
.tips {
  padding: 20px;
}

.ingredients {
  background-color: #f8f9fa;
}

h2 {
  color: #ff6b6b;
  border-bottom: 2px solid #ff6b6b;
  padding-bottom: 5px;
}

ul li {
  padding: 5px 0;
}

ol li {
  padding: 10px 0;
}

/* Bonus: Print styles */
@media print {
  .recipe-card {
    box-shadow: none;
  }

  h1 {
    color: black;
    background-color: white;
  }

  h2 {
    color: black;
  }
}
```

## Challenge 3: Style the Game Interface

**Objective:** Apply CSS styling to your "Guess the Number" game.

**Requirements:**

1. Create a CSS file named `game-styles.css`
2. Link it to your game HTML file
3. Apply styles to:
   - Create a cohesive color scheme
   - Style the input field and button
   - Add visual feedback for correct/incorrect guesses (different colors)
   - Use different styles for different sections of the game
   - Improve the form layout with proper spacing
   - Add a hover effect to the button

**Bonus:** Make the design responsive with media queries

**Example CSS:**

```css
body {
  font-family: "Montserrat", sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #6200ea;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2rem;
  color: #666;
}

.game-info {
  background-color: #e8eaf6;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.game-play {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #d0d0d0;
  border-radius: 4px;
  font-size: 1rem;
}

input[type="number"]:focus,
input[type="text"]:focus {
  border-color: #6200ea;
  outline: none;
}

button {
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #7c4dff;
}

#message {
  margin: 20px 0;
  padding: 15px;
  border-radius: 4px;
}

#message.correct {
  background-color: #e6f7e6;
  color: #2e7d32;
  border-left: 4px solid #2e7d32;
}

#message.incorrect {
  background-color: #ffeaef;
  color: #c62828;
  border-left: 4px solid #c62828;
}

.high-scores {
  margin-top: 30px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

footer {
  margin-top: 40px;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

/* Bonus: Responsive design */
@media (max-width: 600px) {
  body {
    padding: 10px;
  }

  .game-play,
  .game-info {
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }
}
```

## Challenge 4: CSS Card Layout Challenge

**Objective:** Create a responsive layout of cards for product items.

**Requirements:**

1. Create a new HTML file named `cards.html` with basic structure
2. Create a CSS file named `cards-styles.css`
3. Build a grid of at least 6 product cards that:
   - Display in 3 columns on desktop
   - Display in 2 columns on tablets
   - Display in 1 column on mobile
4. Each card should include:
   - Product image
   - Product name
   - Price
   - Short description
   - "Add to Cart" button
5. Style the cards with:
   - Consistent spacing
   - Border or shadow
   - Hover effects
   - Styled buttons

**Bonus:** Add a "Featured" badge to one of the cards

**Example HTML:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product Cards</title>
    <link rel="stylesheet" href="cards-styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Featured Products</h1>

      <div class="cards-grid">
        <div class="card">
          <img src="https://via.placeholder.com/300" alt="Product 1" />
          <div class="card-content">
            <h2>Product Name</h2>
            <p class="price">$99.99</p>
            <p class="description">
              Short product description goes here. This explains the benefits of
              this item.
            </p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        </div>

        <!-- Repeat for other cards -->
      </div>
    </div>
  </body>
</html>
```

**Example CSS:**

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  background-color: #f8f9fa;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin: 30px 0;
  color: #333;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.price {
  font-weight: bold;
  color: #e63946;
  margin-bottom: 10px;
}

.description {
  color: #666;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.add-to-cart {
  display: block;
  width: 100%;
  background-color: #457b9d;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #1d3557;
}

/* Featured badge */
.featured::before {
  content: "Featured";
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e63946;
  color: white;
  padding: 5px 10px;
  font-size: 0.8rem;
}

/* Media Queries */
@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
```

## Submission Guidelines

1. Complete at least two of the four challenges
2. Make sure your CSS files are linked to your HTML files
3. Test your pages in a browser at different screen sizes
4. Check that all styles are working as expected
5. Organize your CSS with comments for different sections

## Helpful Tips

- Use CSS variables (custom properties) for colors and repeated values
- Group related styles together and use comments to organize your CSS
- Remember to test on different screen sizes for responsive designs
- Use browser developer tools to inspect and debug your styles
- Don't worry if things don't look exactly like the examples - be creative!
- Remember that margins collapse between elements

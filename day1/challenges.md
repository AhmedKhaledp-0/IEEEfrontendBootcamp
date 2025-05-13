# Day 1: HTML Mini-Challenges

These mini-challenges are designed to reinforce the HTML concepts you've learned today. Try to complete them on your own, referring to the lesson material or cheatsheets as needed.

## Challenge 1: Create a Simple Bio Page

**Objective:** Build a simple HTML page with your personal information.

**Requirements:**

1. Create a new HTML file named `my-bio.html`
2. Include all necessary HTML structure tags
3. Add a heading with your name
4. Include a small paragraph about yourself
5. Add a list of your hobbies (at least 3)
6. Include a "Contact Me" section with an email link
7. Add an image (can be a placeholder or avatar)

**Bonus:** Add a table with your education or work experiences

**Example Structure:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>About [Your Name]</title>
  </head>
  <body>
    <h1>[Your Name]</h1>

    <h2>About Me</h2>
    <p>...</p>

    <h2>My Hobbies</h2>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>

    <h2>Contact Me</h2>
    <p><a href="mailto:youremail@example.com">Email me</a></p>

    <img src="..." alt="My photo" />
  </body>
</html>
```

## Challenge 2: Build a Recipe Card

**Objective:** Create an HTML document for a favorite recipe.

**Requirements:**

1. Create a new HTML file named `recipe.html`
2. Include a main heading with the recipe name
3. Add an image of the dish (or a placeholder)
4. Create a section for "Ingredients" with an unordered list
5. Create a section for "Instructions" with an ordered list
6. Add information about preparation time and number of servings
7. Include a "Tips" section with at least one tip

**Bonus:** Add nutritional information in a table

**Example Structure:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Recipe: [Recipe Name]</title>
  </head>
  <body>
    <h1>[Recipe Name]</h1>
    <img src="..." alt="[Recipe Name]" />

    <p>Preparation Time: ... | Servings: ...</p>

    <h2>Ingredients</h2>
    <ul>
      <li>...</li>
      <!-- More ingredients -->
    </ul>

    <h2>Instructions</h2>
    <ol>
      <li>...</li>
      <!-- More steps -->
    </ol>

    <h2>Tips</h2>
    <p>...</p>
  </body>
</html>
```

## Challenge 3: Improve the Game HTML

**Objective:** Enhance the basic "Guess the Number" game HTML structure you created in today's lesson.

**Requirements:**

1. Open the `guess-the-number.html` file you created during the lesson
2. Add a header section with the game title and a short description
3. Organize the game into clear sections using appropriate semantic elements
4. Add a footer with your name and the year
5. Include an "About" section explaining the rules of the game
6. Add at least one more input field (e.g., player name)
7. Ensure all inputs have proper labels and attributes

**Bonus:** Add a "High Scores" section with a placeholder list

**Example Structure:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Guess the Number Game</title>
  </head>
  <body>
    <header>
      <h1>Guess the Number</h1>
      <p>A fun number guessing game</p>
    </header>

    <main>
      <section class="game-info">
        <h2>About the Game</h2>
        <p>Try to guess the secret number between 1 and 100.</p>
      </section>

      <section class="game-play">
        <form>
          <div>
            <label for="player-name">Your Name:</label>
            <input type="text" id="player-name" />
          </div>

          <div>
            <label for="guess">Your Guess:</label>
            <input type="number" id="guess" min="1" max="100" />
          </div>

          <button type="submit">Submit Guess</button>
        </form>

        <div id="message"></div>
        <div id="attempts">Attempts: 0</div>
      </section>

      <section class="high-scores">
        <h2>High Scores</h2>
        <ol>
          <li>Player 1 - 3 attempts</li>
          <li>Player 2 - 5 attempts</li>
          <li>Player 3 - 7 attempts</li>
        </ol>
      </section>
    </main>

    <footer>
      <p>Created by [Your Name] &copy; 2023</p>
    </footer>
  </body>
</html>
```

## Challenge 4: Create a Mini Product Page

**Objective:** Build a simple product page for a fictional product.

**Requirements:**

1. Create a new HTML file named `product.html`
2. Include a product name, image, price, and description
3. Add a list of product features/specifications
4. Include a form to select quantity and add to cart
5. Add customer ratings/reviews section
6. Include links to related products (can be dummy links)

**Bonus:** Add a color or size selection option with radio buttons

**Example Structure:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>[Product Name]</title>
  </head>
  <body>
    <h1>[Product Name]</h1>
    <img src="..." alt="[Product Name]" />

    <p class="price">$XX.XX</p>

    <h2>Description</h2>
    <p>...</p>

    <h2>Features</h2>
    <ul>
      <li>...</li>
      <!-- More features -->
    </ul>

    <form>
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" min="1" value="1" />

      <button type="submit">Add to Cart</button>
    </form>

    <h2>Customer Reviews</h2>
    <div class="review">
      <h3>Customer Name</h3>
      <p>Rating: ★★★★☆</p>
      <p>Review text...</p>
    </div>

    <h2>Related Products</h2>
    <ul>
      <li><a href="#">Related product 1</a></li>
      <li><a href="#">Related product 2</a></li>
    </ul>
  </body>
</html>
```

## Submission Guidelines

1. Complete at least two of the four challenges
2. Save your HTML files in your day1 folder
3. Test your pages by opening them in a web browser
4. Check that all HTML elements are properly closed and nested
5. Validate your HTML using [W3C Validator](https://validator.w3.org/) if possible

## Helpful Tips

- Focus on HTML structure only for now (we'll add CSS styling tomorrow)
- Use semantic HTML elements when appropriate (header, nav, section, etc.)
- Don't worry about how it looks yet - just make sure the structure is logical
- Use comments in your HTML to mark different sections
- Remember to include all required elements (DOCTYPE, html, head, body)
- Double-check that your file extension is .html

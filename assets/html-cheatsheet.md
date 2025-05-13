# HTML Cheatsheet

This quick reference guide contains the most commonly used HTML elements for your reference during the bootcamp.

## Document Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

## Text Elements

### Headings

```html
<h1>Heading Level 1 (Most Important)</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6 (Least Important)</h6>
```

### Paragraphs and Formatting

```html
<p>This is a paragraph.</p>
<br />
<!-- Line break -->
<hr />
<!-- Horizontal rule (line) -->
<strong>Bold text</strong> or <b>Bold text</b> <em>Italic text</em> or
<i>Italic text</i>
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted (strikethrough) text</del>
<sub>Subscript</sub> and <sup>Superscript</sup>
```

## Lists

### Unordered List (Bullets)

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Ordered List (Numbers)

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Definition List

```html
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
```

## Links and Images

### Links

```html
<a href="https://www.example.com">Link Text</a>
<a href="about.html">Internal Link</a>
<a href="mailto:email@example.com">Email Link</a>
<a href="tel:+1234567890">Phone Link</a>
<a href="#section-id">Link to page section</a>
<a href="https://www.example.com" target="_blank">Open in new tab</a>
```

### Images

```html
<img src="image.jpg" alt="Image description" />
<img src="image.jpg" alt="Image description" width="300" height="200" />
<figure>
  <img src="image.jpg" alt="Image description" />
  <figcaption>Caption for the image</figcaption>
</figure>
```

## Containers and Semantic Elements

### Containers

```html
<div>Generic container (block-level)</div>
<span>Generic container (inline)</span>
```

### Semantic Elements

```html
<header>Header area</header>
<nav>Navigation menu</nav>
<main>Main content</main>
<section>Document section</section>
<article>Independent content</article>
<aside>Sidebar content</aside>
<footer>Footer area</footer>
```

## Forms and Input Elements

### Form Structure

```html
<form action="/submit" method="post">
  <!-- Form inputs go here -->
  <input type="submit" value="Submit" />
</form>
```

### Text Inputs

```html
<input type="text" name="username" placeholder="Enter username" />
<input type="password" name="password" placeholder="Enter password" />
<input type="email" name="email" placeholder="Enter email" />
<input type="number" name="age" min="0" max="120" />
<textarea
  name="message"
  rows="5"
  cols="30"
  placeholder="Your message here"
></textarea>
```

### Selection Inputs

```html
<!-- Dropdown -->
<select name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="mx">Mexico</option>
</select>

<!-- Radio Buttons -->
<input type="radio" name="gender" value="male" id="male" />
<label for="male">Male</label>
<input type="radio" name="gender" value="female" id="female" />
<label for="female">Female</label>

<!-- Checkboxes -->
<input type="checkbox" name="subscribe" id="subscribe" />
<label for="subscribe">Subscribe to newsletter</label>
```

### Buttons

```html
<button type="button">Click Me</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
<input type="button" value="Input Button" />
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
```

### Other Input Types

```html
<input type="date" name="birthdate" />
<input type="time" name="meeting-time" />
<input type="color" name="favorite-color" />
<input type="range" name="volume" min="0" max="100" step="1" />
<input type="file" name="profile-picture" />
<input type="hidden" name="user-id" value="12345" />
```

## Tables

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>25</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>30</td>
      <td>Canada</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total: 2 people</td>
    </tr>
  </tfoot>
</table>
```

## Comments

```html
<!-- This is a comment and will not be displayed in the browser -->
```

## Special Characters

```html
&lt;
<!-- < (less than) -->
&gt;
<!-- > (greater than) -->
&amp;
<!-- & (ampersand) -->
&quot;
<!-- " (quotation mark) -->
&apos;
<!-- ' (apostrophe) -->
&copy;
<!-- © (copyright) -->
&reg;
<!-- ® (registered trademark) -->
&nbsp;
<!-- Non-breaking space -->
```

## Tips for Good HTML

1. Always close your tags
2. Use semantic elements when appropriate
3. Keep your HTML structure clean and organized
4. Use proper indentation to make code readable
5. Include alt text for all images
6. Validate your HTML using online validators
7. Make sure your page is accessible to all users
8. Use lowercase for element and attribute names

Happy coding!

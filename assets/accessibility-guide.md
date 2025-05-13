# Web Accessibility Guide

Making websites accessible ensures they can be used by people of all abilities and disabilities. This guide covers essential accessibility principles and techniques to create inclusive web experiences.

## Why Accessibility Matters

- **Inclusivity**: 15% of the world's population lives with some form of disability
- **Legal requirements**: Many countries have laws requiring digital accessibility
- **Better UX for everyone**: Accessibility improvements benefit all users
- **SEO benefits**: Many accessibility practices improve search engine rankings

## Core Accessibility Principles (POUR)

1. **Perceivable**: Information must be presentable to users in ways they can perceive
2. **Operable**: Interface components must be operable by a variety of users
3. **Understandable**: Information and operation must be understandable
4. **Robust**: Content must be robust enough to work with various technologies, including assistive devices

## Accessibility Checklist

### HTML Structure and Semantics

- [ ] Use semantic HTML elements (`nav`, `main`, `header`, `footer`, etc.)
- [ ] Ensure proper heading hierarchy (h1 → h2 → h3...)
- [ ] Include lang attribute on the html element:

  ```html
  <html lang="en"></html>
  ```

- [ ] Provide descriptive page titles:

  ```html
  <title>Specific, Concise Page Title - Site Name</title>
  ```

- [ ] Use ARIA landmarks when necessary (but prefer native semantic elements):

  ```html
  <div role="navigation" aria-label="Main Navigation"></div>
  ```

### Text and Typography

- [ ] Maintain sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] Don't rely solely on color to convey information
- [ ] Use relative units for font sizes (em, rem) rather than fixed units (px)
- [ ] Ensure text can be resized up to 200% without breaking layouts
- [ ] Avoid justified text which can create irregular spacing
- [ ] Maintain line height of at least 1.5 for readability

### Images and Media

- [ ] Provide alt text for all informative images:

  ```html
  <img src="chart.png" alt="Q4 sales increased by 25% compared to Q3" />
  ```

- [ ] Use empty alt text for decorative images:

  ```html
  <img src="decorative-line.png" alt="" />
  ```

- [ ] Provide transcripts for audio content
- [ ] Include captions and audio descriptions for video content
- [ ] Ensure media doesn't autoplay without user consent

### Forms and Interactive Elements

- [ ] Associate labels with form controls:

  ```html
  <label for="email">Email Address</label> <input id="email" type="email" />
  ```

- [ ] Provide clear error messages and instructions
- [ ] Group related form elements with fieldset and legend:

  ```html
  <fieldset>
    <legend>Shipping Address</legend>
    <!-- form fields -->
  </fieldset>
  ```

- [ ] Ensure all interactive elements are keyboard accessible
- [ ] Make sure form validation errors are clearly identified:

  ```html
  <input aria-invalid="true" aria-describedby="error-message" />
  <div id="error-message">Please enter a valid email address</div>
  ```

### Keyboard Accessibility

- [ ] Ensure all functionality is available using a keyboard alone
- [ ] Maintain logical tab order (matches visual order)
- [ ] Provide visible focus indicators:

  ```css
  :focus {
    outline: 3px solid #4a90e2;
  }
  ```

- [ ] Create skip links for navigation:

  ```html
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ```

- [ ] Ensure custom widgets are keyboard accessible (using ARIA and proper event listeners)

### Links and Navigation

- [ ] Use descriptive link text (avoid "click here" or "read more"):

  ```html
  <!-- Bad -->
  <a href="policy.html">Click here</a>

  <!-- Good -->
  <a href="policy.html">Privacy Policy</a>
  ```

- [ ] Indicate when links open in a new window:

  ```html
  <a href="https://example.com" target="_blank" rel="noopener">
    Example Website (opens in new window)
    <span class="sr-only">Opens in a new window</span>
  </a>
  ```

- [ ] Make navigation consistent across pages
- [ ] Provide multiple ways to find content (navigation, search, site map)

### Tables

- [ ] Use table headers properly:

  ```html
  <table>
    <caption>
      Monthly Expenses
    </caption>
    <thead>
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Rent</th>
        <td>$1,200</td>
      </tr>
      <!-- more rows -->
    </tbody>
  </table>
  ```

- [ ] Use captions and summaries for complex tables
- [ ] Avoid using tables for layout purposes

### ARIA (Accessible Rich Internet Applications)

- [ ] Use ARIA judiciously - prefer built-in HTML semantics when possible
- [ ] Ensure dynamically changing content is announced to screen readers:

  ```html
  <div aria-live="polite" role="status">
    Your form has been submitted successfully
  </div>
  ```

- [ ] Use appropriate ARIA roles, properties, and states for custom widgets
- [ ] Test ARIA implementations with screen readers

### Focus Management

- [ ] Trap focus within modal dialogs:

  ```javascript
  // Example of focus trapping in a modal
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // Handle tabbing in the modal
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
  ```

- [ ] Return focus to triggering element when a modal is closed
- [ ] Create logical focus order for dynamic content

### Responsive Design

- [ ] Ensure the site is usable at 320px width and up
- [ ] Design for touch with adequately sized tap targets (at least 44×44px)
- [ ] Ensure content reflows rather than requiring horizontal scrolling
- [ ] Test with screen magnification
- [ ] Support pinch-to-zoom (don't disable user scaling):

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ```

## Screen Reader Compatibility

- [ ] Test with at least one screen reader (NVDA, JAWS, VoiceOver)
- [ ] Ensure all content is announced correctly
- [ ] Verify that form controls have appropriate names and roles
- [ ] Add visually hidden text for screen readers when necessary:

  ```css
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  ```

## Testing Tools

### Automated Testing

- [WAVE Evaluation Tool](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)
- [Color Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/)

### Manual Testing

- Keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Zoom testing (200% zoom)
- Reduced motion testing
- High contrast mode testing

## Accessibility Standards

- **WCAG 2.1** (Web Content Accessibility Guidelines): The international standard for web accessibility

  - Level A: Essential
  - Level AA: Addresses the major barriers (most common target for compliance)
  - Level AAA: Highest level of accessibility

- **Section 508**: U.S. federal requirements for digital accessibility

## Applying Accessibility to Your "Guess the Number" Game

1. **Semantic Structure**:

   ```html
   <header>
     <h1>Guess the Number</h1>
   </header>
   <main>
     <section aria-live="polite">
       <p id="feedback">Enter a number between 1 and 100</p>
     </section>
     <!-- Game controls -->
   </main>
   ```

2. **Accessible Form**:

   ```html
   <form>
     <label for="guess">Your guess:</label>
     <input type="number" id="guess" min="1" max="100" required />
     <button type="submit">Submit Guess</button>
   </form>
   ```

3. **Keyboard Handling**:

   ```javascript
   // Make sure all game functions work with keyboard
   document.addEventListener("keydown", (e) => {
     if (e.key === "Enter" && gameActive) {
       // Same function as clicking submit
       checkGuess();
     }
   });
   ```

4. **Live Regions for Game Updates**:

   ```javascript
   // Game feedback uses aria-live to announce results
   function updateFeedback(message) {
     document.getElementById("feedback").textContent = message;
     // The aria-live attribute ensures screen readers announce this change
   }
   ```

Remember that accessibility is not a feature—it's a quality requirement. By making your websites accessible, you ensure that everyone can use and enjoy your content, regardless of their abilities or the devices they use.

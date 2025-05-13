document.addEventListener("DOMContentLoaded", function () {
  const mdLinks = document.querySelectorAll('a[href$=".md"]');
  mdLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const mdPath = this.getAttribute("href");
      convertAndDisplayMarkdown(mdPath);
    });
  });

  function convertAndDisplayMarkdown(mdPath) {
    fetch(mdPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((markdownText) => {
        const htmlContent = marked.parse(markdownText);

        let overlay = document.getElementById("md-content-overlay");
        if (!overlay) {
          overlay = document.createElement("div");
          overlay.id = "md-content-overlay";
          document.body.appendChild(overlay);
        }

        const fileName = mdPath.split("/").pop().replace(".md", "");
        const title =
          fileName.charAt(0).toUpperCase() +
          fileName.slice(1).replace(/-/g, " ");

        overlay.innerHTML = `
          <div class="md-content-container">
            <div class="md-header">
              <h1>${title}</h1>
              <button class="md-close-btn">&times;</button>
            </div>
            <div class="md-content">
              ${htmlContent}
            </div>
          </div>
        `;

        document
          .querySelector(".md-close-btn")
          .addEventListener("click", function () {
            overlay.style.display = "none";
          });

        overlay.addEventListener("click", function (e) {
          if (e.target === overlay) {
            overlay.style.display = "none";
          }
        });

        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && overlay.style.display === "flex") {
            overlay.style.display = "none";
          }
        });

        overlay.style.display = "flex";

        document.querySelectorAll(".md-content pre code").forEach((block) => {
          hljs.highlightBlock(block);
        });
      })
      .catch((error) => {
        // Handle errors
        alert(`Could not load markdown file: ${error.message}`);
      });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const mdParam = urlParams.get("md");
  if (mdParam) {
    convertAndDisplayMarkdown(mdParam);
  }
});

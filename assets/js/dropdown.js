window.addEventListener("load", function () {
  (function () {
    window.addEventListener("click", ({ target }) => {
      if (
        target.classList.contains("dropdown") ||
        target.parentNode.classList.contains("dropdown")
      ) {
        const dropdown = target.closest(".dropdown");

        // check if dropdown already has content
        if (dropdown.hasChildNodes("div.dropdown__content")) {
          const content = dropdown.querySelector(".dropdown__content");

          const position = dropdown.dataset.position;

          if (position === "top") {
            dropdown.style.setProperty("--triangle-deg", "-180deg");
            dropdown.style.setProperty("--triangle-origin", "bottom center");
            content.style.top = "unset";
            content.style.bottom = "calc(100% + 8px)";
          }
        }

        dropdown.classList.toggle("active");
      } else {
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.classList.remove("active");
        });
      }
    });
  })();
});

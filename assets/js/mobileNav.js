window.addEventListener("load", function () {
  (function() {
    const burger = document.querySelector(".menu-btn");
    const menu = document.querySelector(".mobile-menu");

    for (let i = 0; i < 3; i++) {
      burger.appendChild(document.createElement("span"));      
    }

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });

    const childDropdowns = document.querySelectorAll(
      ".menu__content-dropdown__container"
    );

    childDropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
      });
    });
  })();  
})
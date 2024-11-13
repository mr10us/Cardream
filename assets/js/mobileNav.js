window.addEventListener("load", function () {
  const burger = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu");

  for (let i = 0; i < 3; i++) {
    burger.appendChild(document.createElement("span"));
  }

  this.addEventListener("click", ({ target }) => {
    const isBurgerClicked = target === burger || target.parentNode === burger;
    if (isBurgerClicked) {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    }
    if (
      !target.closest(".mobile-menu") &&
      !isBurgerClicked
    ) {
      burger.classList.remove("active");
      menu.classList.remove("active");
    }
  });

  const childDropdowns = document.querySelectorAll(
    ".menu__content-dropdown__container"
  );

  childDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });
  });
});

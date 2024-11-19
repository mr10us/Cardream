function openPopup(popupName) {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("active");
  });

  const popup = document.querySelector(`.popup.${popupName}`);
  const closeButton = popup.querySelector(".popup__close");

  popup.classList.add("active");
  popup.addEventListener("click", ({ target }) => {
    if (target === popup) {
      popup.classList.remove("active");
    }
    if (target === closeButton) {
      popup.classList.remove("active");
    }
  });
}

window.addEventListener("keydown", function ({ key }) {
  if (key === "Escape") {
    const popups = Array.from(document.querySelectorAll(".popup.active"));

    popups.forEach((popup) => popup.querySelector(".popup__close").click());
  }
});

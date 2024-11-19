function openPopup(popupName) {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("active");
    document.body.style.overflowY = "auto";
  });

  const popup = document.querySelector(`.popup.${popupName}`);
  const closeButton = popup.querySelector(".popup__close");

  popup.classList.add("active");
  document.body.style.overflowY = "hidden";

  popup.addEventListener("click", ({ target }) => {
    if (target === popup) {
      popup.classList.remove("active");
      document.body.style.overflowY = "auto";
    }
    if (target === closeButton || target.parentNode === closeButton) {
      popup.classList.remove("active");
      document.body.style.overflowY = "auto";
    }
  });
}

window.addEventListener("keydown", function ({ key }) {
  if (key === "Escape") {
    const popups = Array.from(document.querySelectorAll(".popup.active"));

    popups.forEach((popup) => {
      popup.querySelector(".popup__close").click();
      document.body.style.overflowY = "auto"
    });
  }
});

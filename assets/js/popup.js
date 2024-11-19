const html = document.querySelector("html");
const body = document.body;

function openPopup(popupName) {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("active");
    body.style.overflowY = "auto";
    html.style.overflowY = "auto";
  });

  const popup = document.querySelector(`.popup.${popupName}`);
  const closeButton = popup.querySelector(".popup__close");

  popup.classList.add("active");
  html.style.overflowY = "hidden";
  body.style.overflowY = "hidden";

  popup.addEventListener("click", ({ target }) => {
    if (target === popup) {
      popup.classList.remove("active");
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
    }
    if (target === closeButton || target.parentNode === closeButton) {
      popup.classList.remove("active");
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
    }
  });
}

window.addEventListener("keydown", function ({ key }) {
  if (key === "Escape") {
    const popups = Array.from(document.querySelectorAll(".popup.active"));

    popups.forEach((popup) => {
      popup.querySelector(".popup__close").click();
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
    });
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const servicesList = Array.from(
    document.querySelector(".services ul").children
  );

  let lastLi = null;

  window.addEventListener("click", ({ target }) => {
    const targetUl = target.closest(".services ul");
    if (targetUl) {
      const newTarget = target.closest(".services ul li");

      if (newTarget == lastLi && !target.closest(".popup-l")) newTarget.classList.toggle("active");
      else {
        lastLi?.classList.remove("active");
        newTarget.classList.add("active");
      }

      lastLi = newTarget;
    } else servicesList.forEach((li) => li.classList.remove("active"));
  });
});

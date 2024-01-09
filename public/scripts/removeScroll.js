const field = document.querySelector(".field");
const scroll = document.querySelector(".scroll");
field.style.opacity = 1;
field.style.visibility = "visible";
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    field.classList.add("fadeOut");
    field.classList.remove("fadeIn");
  }
  if (window.scrollY == 0) {
    field.classList.add("fadeIn");
    field.classList.remove("fadeOut");
  }
});

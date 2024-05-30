const menuOpen = document.querySelector("#menu-open");
const navMenu = document.querySelector(".nav-menu");

menuOpen.addEventListener("click", () => {
  navMenu.classList.toggle("active")
});
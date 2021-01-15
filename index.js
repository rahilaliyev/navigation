const toggleOpenMenu = document.querySelector(".hamburger");
const toggleCloseMenu = document.querySelector(".closing");
const menu = document.getElementById("menu");
let condition = false;
toggleOpenMenu.addEventListener("click", () => {
  if (condition == false) {
    menu.style.opacity = 1;
    menu.style.width = "100%";
    condition = true;
  } else {
    menu.style.opacity = 0;
    menu.style.width = "0%";
    condition = false;
  }
});
toggleCloseMenu.addEventListener("click", () => {
  menu.style.opacity = 0;
  menu.style.width = "0%";
});
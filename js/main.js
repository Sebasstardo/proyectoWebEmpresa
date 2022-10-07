window.onscroll = function () {
  scroll = document.documentElement.scrollTop;
  header = document.getElementById("header");
  if (scroll > 20) {
    header.classList.add("nav_mod");
  } else if (scroll < 20) {
    header.classList.remove("nav_mod");
  }
};
menu = document.getElementById("header");
body = document.getElementById("main");
nav = document.getElementById("nav");

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("move_content");
    menu.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});

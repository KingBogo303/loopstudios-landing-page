let menu = document.querySelector(".hamburger");
let x = document.querySelector(".open-close");
let ham = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open");
  ham.classList.toggle("hide");
  x.classList.toggle("show");
};
window.onscroll = () => {
  navbar.classList.remove("open");
  ham.classList.remove("hide");
  x.classList.remove("show");
};

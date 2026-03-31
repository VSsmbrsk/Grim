let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");

hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  nav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove("active");
    hamburger.classList.remove("is-active");
  }
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("is-active");
  });
});

document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const popup = document.getElementById("popup");
const close = document.querySelector(".popup__close");

document.querySelectorAll(".btn-yellow, .btn-primary").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "flex";
  });
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

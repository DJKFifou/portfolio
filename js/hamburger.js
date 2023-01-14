const navBranding = document.querySelector(".nav-branding");
const height = document.querySelector(".non");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navBranding.classList.toggle("active");
    height.classList.toggle("active");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navBranding.classList.remove("active");
    height.classList.remove("active");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
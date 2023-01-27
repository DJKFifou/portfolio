const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

let curriculumVitae = document.querySelector(".cv");
let cv = document.querySelector(".btn-about");

curriculumVitae.addEventListener('mouseenter', () => curriculumVitae.textContent = 'Aussi appelé CV');
curriculumVitae.addEventListener('mouseleave', () => curriculumVitae.textContent = 'Curriculum Vitae');

cv.addEventListener('mouseenter', () => cv.textContent = 'Curriculum Vitae*');
cv.addEventListener('mouseleave', () => cv.textContent = 'Télécharger mon CV');

let count = 0;
let PP = document.getElementsByClassName("PP");

PP[0].addEventListener("mouseenter", function () {
    count++;
    if (count === 3) {
        alert("Aïe, ça fait mal !");
    }
    if (count === 6) {
        alert("Arrête par contre... vraiment !!");
    }
    if (count === 9) {
        alert("Tu me cherches c'est ça ??");
    }
    if (count === 12) {
        alert("Ok là par contre j'vais commencer à m'énerver.");
    }
    if (count === 15) {
        alert("Bon d'accord t'as gagné -.-");
    }
    if (count === 18) {
        alert("Par contre je vais pas m'amuser à créer 100 alert windows différentes... Donc J'te conseille d'aller voir ailleurs ;)");
    }
});
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
let rlq = document.querySelector(".PP");

curriculumVitae.addEventListener('mouseenter', () => curriculumVitae.textContent = 'Aussi appelé CV');
curriculumVitae.addEventListener('mouseleave', () => curriculumVitae.textContent = 'Curriculum Vitae');

cv.addEventListener('mouseenter', () => cv.textContent = 'Curriculum Vitae*');
cv.addEventListener('mouseleave', () => cv.textContent = 'Télécharger mon CV');

function hover(str) {
    document.querySelector(".PP");

    rlq.addEventListener('mouseenter', () => rlq = rlq + 1);

    rlq.forEach(mouseenter => {
        console.log(rlq);
    })
    // function myEnterFunction() {
    //     document.getElementById("photo") = x += 1;
    // }

    if (rlq == 3) {
        console.log("ça fait mal")
        window.alert("Hello world!");
        alert("ça fait mal...");
    }
}
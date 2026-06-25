
/* ------------ CODE DU BOUTON DÉMARRER DE LA PAGE D'ACCUEIL ---------- */

const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro");

if (startBtn && intro) {
    startBtn.addEventListener("click", function (e) {

    e.preventDefault();  /* empêche le lien de partir immédiatement */

    intro.classList.add("fade-out"); /* déclenche l'animation */

    setTimeout(() => {
        window.location.href = "selection.html";  /* ouvre la page au bout de 2000 ms */
    }, 2000);
});
}


/* ------------ PAGE SELECTION ---------- */

const choiceCards = document.querySelectorAll(".choice-card");
const scrollArrow = document.getElementById("scrollArrow");
const selectionPage = document.querySelector(".selection");

let currentSection = 0;

if (scrollArrow && choiceCards.length > 0) {
    scrollArrow.addEventListener("click", () => {
        currentSection++;

        if (currentSection < choiceCards.length) {
            choiceCards[currentSection].scrollIntoView({
                behavior: "smooth"
            });
        }

        if (currentSection >= choiceCards.length - 1) {
            scrollArrow.classList.add("hidden");
        }
    });
}

if (choiceCards.length > 0 && selectionPage) {
    choiceCards.forEach((card) => {
        card.addEventListener("click", function (e) {
            e.preventDefault();

            const targetUrl = this.getAttribute("href");

            selectionPage.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 2000);
        });
    });
}
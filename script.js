// ===== ANIMAÇÃO DE DIGITAÇÃO (HERO) =====

const phrases = [
    "Desenvolvedor Back-End",
    "Python • FastAPI • APIs REST",
    "Automação & IA / RAG",
    "Código limpo, pronto para produção"
];

const typingText = document.querySelector(".typing-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
        typingText.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        typingText.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 35 : 80);
}

typeEffect();

// ===== NAVBAR: FUNDO AO ROLAR =====

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
});

// ===== MENU MOBILE =====

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// ===== ANIMAÇÃO DE ENTRADA AO ROLAR =====

const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach((el) => observer.observe(el));

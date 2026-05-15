const button = document.querySelector(".projects-button")

button.addEventListener("click", () => {

    const projectsSection = document.querySelector("#projects")

    projectsSection.scrollIntoView({
        behavior: "smooth"
    })

})
const menuButton = document.querySelector(".menu-button")

const menu = document.querySelector(".menu")

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active")

})
const hiddenElements = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show")

        }

    })

})

hiddenElements.forEach((element) => observer.observe(element))

const barberSite = document.querySelector("#barber-site")

barberSite.addEventListener("click", () => {

    window.open("https://barbearia-pro-pi.vercel.app/", "_blank")

})

const barberGithub = document.querySelector("#barber-github")

barberGithub.addEventListener("click", () => {

    window.open("https://github.com/kauafernandomelo", "_blank")

})
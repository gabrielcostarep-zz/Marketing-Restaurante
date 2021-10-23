let menu = document.getElementById("menu-bars")
let navbar = document.getElementsByClassName("navbar")[0]
let menuOpen = false

function menuInitial() {
    menu.src = "./assets/bars.svg"
    navbar.style.display = "none"
    menuOpen = false
}

function WidthNow() {
    let windowWidth = window.innerWidth;

    if (windowWidth >= "901") {
        navbar.style.display = "flex"
        navbar.removeEventListener('click', menuInitial)
    }

    if (windowWidth <= "900") {
        menuInitial()
    }
}

window.addEventListener('resize', WidthNow)

menu.addEventListener("click", () => {
    if (!menuOpen) {
        navbar.addEventListener("click", menuInitial)

        menu.src = "./assets/bars-open.svg"
        navbar.style.display = "grid"

        menuOpen = true
    } else {
        menuInitial()
    }
})

let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
})
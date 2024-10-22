const sideNavArea = document.querySelector(".nav_side_div")
const collapsable = document.querySelector(".hamburger")

// sideNavArea.classList.add("hide");


collapsable.addEventListener('click', () => {
    sideNavArea.classList.toggle("hide");
})

if (window.innerWidth < 1120) {
    sideNavArea.classList.add("hide")
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 1120) {
        sideNavArea.classList.add("hide")
    }
})
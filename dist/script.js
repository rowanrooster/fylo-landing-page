const menuBtn = document.getElementById("menuBtn");
const menuBox = document.getElementById("fylo-nav");
const navBar = document.getElementById("fylo-navbar");

function toggleMenu() {
    if (menuBox.style.display === "flex") {
        menuBox.style.display = "none";
        menuBtn.src = "assets/images/icon-hamburger.svg";
        navBar.style.backgroundColor = "";
        
    } else {
        menuBox.style.display = "flex";
        menuBtn.src = "assets/images/icon-close.svg";
        navBar.style.backgroundColor = "var(--c-dblue-4)";
    }
};

menuBtn.addEventListener("click", toggleMenu);

window.addEventListener("scroll", () => {
    navBar.classList.add("active");

    if (window.scrollY < 100) {
        navBar.classList.remove("active");
    }
});
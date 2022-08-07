const itemEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")

itemEmail?.addEventListener("click", toggleSubMenu);
burgerMenuIcon?.addEventListener("click", toggleMobileMenu);

function toggleSubMenu(){
 desktopMenu?.classList.toggle('inactive'); // Alternará colocando y eliminando la clase inactive
}

function toggleMobileMenu(){
    mobileMenu?.classList.toggle("inactive");
}
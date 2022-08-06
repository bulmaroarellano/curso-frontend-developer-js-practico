const itemEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');


itemEmail?.addEventListener("click", toggleSubMenu);

function toggleSubMenu(){
 desktopMenu?.classList.toggle('inactive'); // Alternará colocando y eliminando la clase inactive
}
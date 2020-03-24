const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-id");

// function toggleMenu(){
//     menuNav.classList.toggle("menu-toggle");
// }

let toggleMenu = () => {menuNav.classList.toggle("menu-toggle")}; // es6 arrow FUNCTION
// (param) => {statement}

menuToggle.addEventListener("click", toggleMenu);

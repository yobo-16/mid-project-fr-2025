console.log("HAMBURGESA")
const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerIcon.classList.toggle('rotate');
    if (navBar.classList.contains('active')) {
        hamburgerIcon.src = '../src/img/close-icon.svg';
    } else {
        hamburgerIcon.src = '../src/img/burger-menu-left.svg';
    }

}
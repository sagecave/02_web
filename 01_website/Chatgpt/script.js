// // JavaScript
// document.querySelector('.mobile-menu').addEventListener('click', function () {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// });

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

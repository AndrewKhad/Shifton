'use strict';

let menuLang = document.querySelector('.header__lang');
let subMenu = document.querySelector('.header__submenu');
menuLang.addEventListener('click', function () {
    subMenu.classList.toggle('active');
});


let burgerButton = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header__navbar');
burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('work');
    menuLang.classList.toggle('push');
    burgerButton.classList.toggle('on');
    document.body.classList.toggle('lock');
})
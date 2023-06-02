'use strict';

//NAV-BAR

const hamburger = document.querySelector('#menu');

const navBar = document.querySelector('#nav-bar');

const link = document.querySelectorAll('.nav__item');


const body = document.querySelector('body');

function closeAll(){

    navBar.classList.remove('disp-flex');

    navBar.classList.add('disp-none');

    hamburger.classList.remove('disp-none');
};

hamburger.addEventListener('click', (e)=>{

    e.stopPropagation();

    navBar.classList.remove('disp-none');

    navBar.classList.add('disp-flex');

    hamburger.classList.add('disp-none');
});

body.addEventListener('click', closeAll);

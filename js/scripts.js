'use strict';
//COOKIES

import  {InfoCookies} from "./modules/InfoCookies.js";

const infCookie = new InfoCookies;

const closeLink = document.querySelector('.cookies__close a');

closeLink.addEventListener('click', (e) => {

    e.preventDefault();

    infCookie.setCookie();
});


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

//CONTACT FORM

const validate = function(e) {
    e.preventDefault();

    const mail  = this.mail.value;
    // console.log(mail);
 
    const placeError = document.querySelector('#error');
    
    // placeError.innerText = '';

    const errors = [];

    const mailPattern = /^[a-z\d]+[\w.-]*@[a-z\d]+[a-z\d-]*\.[a-z]{2,4}$/i;

    const testMail = mailPattern.test(mail);

    if(!testMail){

        errors.push('Podaj poprawny adres email');
    }

    if(errors.length>0){

        placeError.innerHTML = errors.join('<br>');
        
    } else {

        console.log('tu działamy z tymi danymi od użytkownika')
    }

    console.log(errors);
}

const form = document.querySelector('form');

form.addEventListener('submit', validate);
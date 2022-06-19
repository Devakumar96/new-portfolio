 'use strict';
const navToggle = document.getElementById ('hamburger');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () =>{
   nav.classList.toggle('active');
});
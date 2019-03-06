let nav = document.querySelector('nav');
let button1 = document.querySelector('.contact__button');
let presentation = document.querySelector('.intro__presentation');

button1.addEventListener('click', () =>{
  nav.classList.toggle('is-open');
  presentation.classList.toggle('is-close');
  console.log("menu open")
});
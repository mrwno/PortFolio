var nav = document.getElementsByClassName('nav');
var button1 = document.getElementsByClassName('contact__button');

function openav(){
  nav.classList.add('is-open');
};

button1.addEventListener('click', openav );
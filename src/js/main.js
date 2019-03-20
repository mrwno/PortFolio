let nav = document.querySelector('nav');
let button1 = document.querySelector('.contact__button');
let presentation = document.querySelector('.intro__presentation');

alert("Ce portfolio est en cours de developpement mais vous pouvez jeter un coup d'oeil si vous le souhaitez (Mettre la fenêtre en 1366 x 750 si votre viewport est plus grand que ce format).");

button1.addEventListener('click', () =>{
  nav.classList.toggle('is-open');
  presentation.classList.toggle('is-close');
  console.log("menu open")
});


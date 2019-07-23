'use strict';
const colapsable = document.querySelector('.container');
const colapsableClick = document.querySelector('.container__click');

function openColapsable() {
  
  if (colapsable.classList.contains('container--open') === true) {
    // Si está abierto (tiene la clase container--open), lo cierras
    colapsable.classList.remove('container--open');
  } else {
    // si está cerrado (no tiene la clase), lo abres
    colapsable.classList.add('container--open');
  }

}


colapsableClick.addEventListener('click', openColapsable);

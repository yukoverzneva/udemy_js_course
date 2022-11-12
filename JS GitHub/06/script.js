'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden'); //Don't use dot before cless name!!!
  overlay.classList.remove('hidden');
};
// for (let i = 0; i < btnsOpenModal.length; i++)
//   console.log(btnsOpenModal[i].textContent);
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

//Keypress Event
document.addEventListener(
  'keydown',
  function (event) {
    // console.log('A key was pressed');
    console.log(event.key);

    //way1
    // if (event.key === 'Escape') {
    //   if (!modal.classList.contains('hidden')) {
    //     closeModal();
    //   }
    // }
    //way2
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  }

  // console.log('Esc was pressed');
);

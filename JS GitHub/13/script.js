'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting Elements
console.log(document.documentElement); //entire <html>
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //first element that matches the selector
const allSections = document.querySelectorAll('.section'); //select multiple elements
// console.log(allSections); //NodeList

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); //HTMLCollection. Not NodeList, because it changes automatically when DOM changes
document.getElementsByClassName('btn'); //HTMLCollection

//Creating and Inserting Elements
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message); //Live-element in DOM that can't be at two places at one time
// header.append(message.cloneNode(true)); //Clone if need two same elements
// header.before(message);
// header.after(message);

//Deleting Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message); //how it was before remove()
  });

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
/*
console.log(message.style.height); //Works only with inline styles that we set ourselves using the style property
console.log(message.style.width); //120%
//But there is a way to read from DOM
console.log(getComputedStyle(message)); //Contains all of the properties, gets it from the page
// console.log(getComputedStyle(message.height));

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

logo.alt = 'Beautiful minimalist logo';

console.log(logo.src); //Works with standard properties
console.log(logo.getAttribute('src'));

//But there is a way to read from DOM
console.log(logo.designer); //Non-standard, does not work
console.log(logo.getAttribute('designer')); //Jonas
//Opposite of get
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //http://127.0.0.1:5500/#
console.log(link.getAttribute('href')); //#
//Data attributes
console.log(logo.dataset.versionNumber); //3.0

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');
//Don't use because this will overwrite all existing classes
logo.className = 'jonas';
*/
//Smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //Smoothing
  //Old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //Modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});


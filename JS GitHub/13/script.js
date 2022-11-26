'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
//Smooth scrolling
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
//Event Delegation: Implementing Page Navigation
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
//Cleaner way of doing smooth page navigation using bubbling
// //1. Add event listener to common parent element
// //2. Determine what element originated the event
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   //Matching strategy
//   if (e.target.classList.contains('.nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });
//Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));//Is a bad practice, will slow down the page-> use event delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //Added closest to get a button, not a span

  //Ignore clicks in area around buttons. Guard clause
  if (!clicked) return;
  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //Active tab
  clicked.classList.add('operations__tab--active');
  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
/*/////////////////////////////////////////////////////
LECTURES
////////////////////////////////////////////////////

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

//Types of Events and Event Handlers
const h1 = document.querySelector('h1');
//New way
const alertH1 = function (e) {
  alert('addEventListener: You are reading the heading! 🤓');
  // h1.removeEventListener('mouseenter', alertH1);//You can remove listener at any time
};
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//Old way
// h1.onmouseenter = function (e) {
//   alert('addEventListener: You are reading the heading! 🤓');
// };
//Using HTML. <h1 onclick="alert('HTML alert')">

//Event Propagation: Bubbling and Capturing
//Event Propagation
//rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0,255));
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); //true. currentTarget is exactly the same as this

  //Stop propagation
  // e.stopPropagation(); //Event never arrived to .nav__links and .nav. Only .nav__link has color
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  }
  // true. Implementing capturing -> NAV appears first in console (not used nowadays)
);

//DOM Traversing
const h1 = document.querySelector('h1');
//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';
//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';
//Going sideways: siblings. We can only access direct siblings: previous and next.
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//Trick to access all the siblings: moving up to parent and reading children
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

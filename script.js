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


// Creating and inserting elements
const message = document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML = 'We use cookies to improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

document.documentElement.style.setProperty('--color-primary', 'orangered')

//Implementing smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function(){
  section1.scrollIntoView({behavior:'smooth'})
})

// Remvoing event handler after certain period
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);




















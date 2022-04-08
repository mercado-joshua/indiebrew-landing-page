"use strict";

document.addEventListener('readystatechange', function (event) {
  if (event.target.readyState === 'complete') {
    init();
  }
});

function init() {
  var openBtn = document.querySelector('[data-js-open-btn]');
  var closeBtn = document.querySelector('[data-js-close-btn]');
  var navbar = document.querySelector('[data-js-menubar]');
  openBtn.addEventListener('click', function () {
    navbar.classList.add('-active', 'animate__animated', 'animate__slideInRight');
  });
  closeBtn.addEventListener('click', function () {
    navbar.classList.remove('-active', 'animate__animated', 'animate__slideInRight');
  });
}
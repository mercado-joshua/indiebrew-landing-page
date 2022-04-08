"use strict";

// web observer api + animate css library
var cb = function cb(entries, observer) {
  entries.forEach(function (entry) {
    entry.target.classList.toggle('animate__animated', entry.isIntersecting);
    entry.target.classList.toggle('animate__pulse', entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
};

var options = {
  root: null,
  threshold: 0,
  rootMargin: '-150px'
};

var animateSection = function animateSection() {
  var targetElements = document.querySelectorAll('[data-js-section]');
  var observer = new IntersectionObserver(cb, options); // start observing elements

  targetElements.forEach(function (element) {
    return observer.observe(element);
  });
};

if ('IntersectionObserver' in window) animateSection();
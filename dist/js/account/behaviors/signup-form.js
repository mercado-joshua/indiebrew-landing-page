"use strict";

var signupForm = function signupForm() {
  var email = document.querySelector('[data-js-email]');
  var fullname = document.querySelector('[data-js-fullname]');
  var password = document.querySelector('[data-js-password]');
  var agreeBtn = document.querySelector('[data-js-agree-btn]');
  var form = document.querySelector('[data-js-signup-form]');
  /** form validations */
  // email

  email.addEventListener('input', function () {
    email.setCustomValidity('');
    email.checkValidity();
  });
  email.addEventListener('invalid', function () {
    if (email.validity.valueMissing) {
      email.setCustomValidity('Enter your email address');
    } else if (email.validity.typeMismatch) {
      email.setCustomValidity('Entered value needs to be an email address');
    }
  }); // full name

  fullname.addEventListener('input', function () {
    fullname.setCustomValidity('');
    fullname.checkValidity();
  });
  fullname.addEventListener('invalid', function () {
    if (fullname.validity.valueMissing) {
      fullname.setCustomValidity('Enter your full name');
    } else if (fullname.validity.patternMismatch) {
      fullname.setCustomValidity('Your full name can only contain upper and lowercase letters. Try again');
    }
  }); // password

  password.addEventListener('input', function () {
    password.setCustomValidity('');
    password.checkValidity();
  });
  password.addEventListener('invalid', function () {
    if (password.validity.valueMissing) {
      password.setCustomValidity('Enter your password');
    } else if (password.validity.tooShort) {
      password.setCustomValidity("Password should be at least ".concat(password.minLength, " characters; you entered ").concat(password.value.length, "."));
    }
  }); // let the form submit, if there's no error

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!agreeBtn.checked) {
      alert('Please indicate that you accept the Terms and Conditions');
    } else {
      if (!fullname.validity.valid && !email.validity.valid && !password.validity.valid) {// show error code here ...
      } else {// submit data here ...
      }
    }
  });
};

document.addEventListener('readystatechange', function (event) {
  if (event.target.readyState === 'complete') {
    signupForm();
  }
});
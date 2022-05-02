const signupForm = () => {
    const email = document.querySelector('[data-js-email]');
    const fullname = document.querySelector('[data-js-fullname]');
    const password = document.querySelector('[data-js-password]');
    const agreeBtn = document.querySelector('[data-js-agree-btn]');
    const form = document.querySelector('[data-js-signup-form]');

    /** form validations */

    // email
    email.addEventListener('input', () => {
        email.setCustomValidity('');
        email.checkValidity();
    });

    email.addEventListener('invalid', () => {
        if ( email.validity.valueMissing ) {
            email.setCustomValidity('Enter your email address');
        }
        else if ( email.validity.typeMismatch ) {
            email.setCustomValidity('Entered value needs to be an email address');
        }
    });

    // full name
    fullname.addEventListener('input', () => {
        fullname.setCustomValidity('');
        fullname.checkValidity();
    });
    
    fullname.addEventListener('invalid', () => {
        if ( fullname.validity.valueMissing ) {
            fullname.setCustomValidity('Enter your full name');
        } else if ( fullname.validity.patternMismatch ) {
            fullname.setCustomValidity('Your full name can only contain upper and lowercase letters. Try again');
        }
    });

    // password
    password.addEventListener('input', () => {
        password.setCustomValidity('');
        password.checkValidity();
    });

    password.addEventListener('invalid', () => {
        if ( password.validity.valueMissing ) {
            password.setCustomValidity('Enter your password');
        }
        else if ( password.validity.tooShort ) {
            password.setCustomValidity(`Password should be at least ${ password.minLength } characters; you entered ${ password.value.length }.`);
        }
    });

    // let the form submit, if there's no error
    form.addEventListener('submit', ( event ) => {
        event.preventDefault();
    
        if ( !agreeBtn.checked ) alert( 'Please indicate that you accept the Terms and Conditions' );
  
        if ( !fullname.validity.valid && !email.validity.valid && !password.validity.valid ) alert( 'Please answer the form correctly' );

        // if all is well, submit data here ...
    });
};

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') signupForm();
});



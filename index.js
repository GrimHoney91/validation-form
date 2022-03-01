const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#c-password');
const submit = document.querySelector('#submitBtn');
const form = document.querySelector('form');

email.addEventListener('focusout', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity(`Don't forget the '@' symbol`);
        email.reportValidity();
    }
    else {
        email.setCustomValidity('');
    }
});
zip.addEventListener('focusout', (e) => {
    if (zip.validity.patternMismatch) {
        zip.setCustomValidity('Must contain 5 digits');
        zip.reportValidity();
    }
    else {
        zip.setCustomValidity('');

    }
});

password.addEventListener('focusout', (e) => {
    if (password.validity.patternMismatch) {
        password.setCustomValidity('Must contain 7 characters, one special character and one number');
        password.reportValidity();
    }
    else {
        password.setCustomValidity('');

    }
});

confirmPassword.addEventListener('focusout', (e) => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity('Does not match password');
        confirmPassword.reportValidity();
    }
    else {
        confirmPassword.setCustomValidity('');

    }
});

form.addEventListener('submit', (e) => {
    if ((email.validity.valueMissing || zip.validity.valueMissing) || (password.validity.valueMissing || confirmPassword.validity.valueMissing)) {
        e.preventDefault();
    }
    else if ((email.validity.typeMismatch || zip.validity.patternMismatch) || (password.validity.patternMismatch || confirmPassword.value !== password.value)) {
        e.preventDefault();
    }
});
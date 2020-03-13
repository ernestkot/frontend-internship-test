/* Here goes your JS code */

const divPopup = document.querySelector('div.popup');
const btnClickMe = document.querySelector('.btn-main');
const closeButton = document.querySelector('.btn-close');
const inputsInFormPopup = document.querySelectorAll('input');


btnClickMe.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);

function showPopup() {
    divPopup.classList.add('active');
}

function closePopup() {
    for (let i = 0; i < inputsInFormPopup.length; i++) {
        inputsInFormPopup[i].removeAttribute('required');
    }
    divPopup.classList.remove('active');
}


///////////////////////////////////////////////////
///////////////// Validation form /////////////////
///////////////////////////////////////////////////

const formPopup = document.querySelector('.popup-form');
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const inputCheckbox = document.querySelector('input[type="checkbox"]');
const emailErrorMessage = document.querySelector('.popup-form-email-error');
const checkboxErrorMessage = document.querySelector('.popup-form-checkbox-error');
const passwordErrorMessage = document.querySelector('.popup-form-password-error');

formPopup.setAttribute("novalidate", true);
formPopup.addEventListener('submit', function (event) {
    event.preventDefault();

    let formPopupErrors = [];

    if (inputEmail.checkValidity()) {
        emailErrorMessage.classList.remove('active');
    }

    if (inputPassword.checkValidity()) {
        passwordErrorMessage.classList.remove('active');
    }

    if (inputCheckbox.checkValidity()) {
        checkboxErrorMessage.classList.remove('active');
    }

    if (!inputEmail.checkValidity()) {
        formPopupErrors.push('');
        emailErrorMessage.classList.add('active');
    }
    if (!inputPassword.checkValidity()) {
        formPopupErrors.push("");
        passwordErrorMessage.classList.add('active');
    }

    if (!inputCheckbox.checkValidity()) {
        formPopupErrors.push("");
        checkboxErrorMessage.classList.add('active');
    }

    if (formPopupErrors.length == 0) {
        event.target.submit();
    } else {
        alert("Something went wrong");
    }
});
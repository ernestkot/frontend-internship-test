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
const successMessage = document.querySelector('.success-message');
const btnSubmit = document.querySelector('.btn-submit');


formPopup.setAttribute("novalidate", true);

closeButton.addEventListener('click', removeErrorMessages);
btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    checkPopupFormValidity();
});


function removeErrorMessages() {

    if (inputEmail.checkValidity()) {
        emailErrorMessage.classList.remove('active');
    }

    if (inputPassword.checkValidity()) {
        passwordErrorMessage.classList.remove('active');
    }

    if (inputCheckbox.checkValidity()) {
        checkboxErrorMessage.classList.remove('active');
    }
}

function checkPopupFormValidity() {
    let formPopupErrors = [];

    removeErrorMessages();

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
        setTimeout(showSuccessMessage, 3000);
    } else {
        alert("Something went wrong");
    }
}

function showSuccessMessage() {
    btnClickMe.classList.add('inactive');
    closePopup();
    successMessage.classList.add('active');
}
/* Here goes your JS code */

let divPopup = document.querySelector('div.popup');
let btnClickMe = document.querySelector('.btn-main');

btnClickMe.addEventListener('click', showPopup);

function showPopup() {
    divPopup.classList.add('active');
}
'use strict'

const showContactsButton = document.querySelector('#show-contacts'),
      modalWindow = document.querySelector('#modal-window');

showContactsButton.addEventListener('click', toggleContacts);
modalWindow.addEventListener('click', toggleContacts)

function toggleContacts() {
    modalWindow.classList.toggle('is-open');
}

new WOW().init();

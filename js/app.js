// Sign Up
const modal = document.querySelector('.modalcontainer');
const button = document.querySelector('.nav .button');
button.addEventListener('click', () => {
    modal.classList.toggle('modalhidden');
})
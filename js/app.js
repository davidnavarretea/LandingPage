// Sign In Variables
const modal = document.querySelector('.modalcontainer');
const button = document.querySelector('.nav .button');
// Button Modal
button.addEventListener('click', () => {
    modal.classList.toggle('modalhidden');
})
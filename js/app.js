// Sign In Variables
const modal = document.querySelector('.modalcontainer');
const button = document.querySelector('.nav .button');
const button2 = document.querySelector('.thankbutton .button')
// First Button Modal
button.addEventListener('click', () => {
    modal.classList.toggle('modalhidden');
})
// Second Button Modal
button2.addEventListener('click', () => {
    modal.classList.toggle('modalhidden');
})
// Sign In Variables
const modal = document.querySelector('.modalcontainer');
const button = document.querySelector('.nav .button');
const button2 = document.querySelector('.thankbutton .button')
// Button Modal
button.addEventListener('click', () => {
    modal.classList.toggle('modalhidden');
})
// Button 2 Modal
button2.addEventListener('click', () => {
    modal.classList.toggle('modalhidden');
})
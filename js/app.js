// Sign Up
const modal = document.querySelector('.modalcontainer');
const button = document.querySelector('.nav .button');
button.addEventListener('click', () => {
    if (modal.classList.length = 2){
        modal.classList.remove('modalhidden');
    } else {
        modal.classList.add('modalhidden');
    }
})
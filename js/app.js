// Sign In Variables
const modal = document.querySelector('.modalcontainer');
const button = document.querySelector('.nav .button');
// Button Modal
button.addEventListener('click', () => {
    modal.classList.toggle('modalhidden');
})
// Form Prevent Default
const form = document.querySelector('.form');
form.addEventListener('submit', preventForm);
// Second Form Prevent Default
const formbelow = document.querySelector('.emailsectionbelow .emailcontainer .form');
formbelow.addEventListener('submit', preventForm);
// Modal Form Prevent Default
const formodal = document.querySelector('.modal');
formodal.addEventListener('submit', e => {
    e.preventDefault();
});
// Function Prevent Default - Redirection Thanks Page
function preventForm (e) {
    e.preventDefault();
    window.open("../thanks.html", "_self")
}
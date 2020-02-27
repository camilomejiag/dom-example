const buttonEl = document.querySelector('.button-input');
buttonEl.addEventListener('click', () => {
    const textToAdd = 'Hello world';
    const inputEl = document.querySelector('.input-text');
    inputEl.value = textToAdd;
});

const passwordEl = document.querySelector('.password');
const confirmPasswordEl = document.querySelector('.confirm-password');
passwordEl.addEventListener('keyup', function () {
    // Code goes here
});

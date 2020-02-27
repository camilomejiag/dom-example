const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('click', () => {
    const textToAdd = 'Hello world';
    const inputEl = document.querySelector('.input-text');
    inputEl.value = textToAdd;
});


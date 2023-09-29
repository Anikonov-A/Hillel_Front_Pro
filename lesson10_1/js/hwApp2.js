//На сторінці є дві кнопки.
// При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
// при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
'use strict'
const firstButton = document.querySelector('.first_btn');
const secondButton = document.querySelector('.second_btn');
let userLink;
const getUserLink = text => {
    do {
        userLink = prompt(text)
    } while (!userLink || userLink === " ")
}

firstButton.addEventListener('click', () => {

    secondButton.classList.remove('hidden');

    getUserLink(`Please enter your link`)
    if (userLink.indexOf('http://') !== 0 && userLink.indexOf('https://') !== 0) {
        userLink = `https://${userLink}`;
    }

    console.log(userLink)
})
secondButton.addEventListener('click', () => {
    window.open(userLink, '_blank');
});

// Реализуйте функцию generateKey(length, characters),
// которая возвращает строку из случайных символов из набора characters длиной length.
'use strict'
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const getPasswordLengthFromUser = text => {
    let value;
    do {
        value = parseInt(prompt(text))
    } while (isNaN(value) || value <= 0 || value === '' || value === ' ')
    return value
}


const generateKey = (passwordLength, characters) => {
    let randomPassword = '';
    for (let i = 0; i < passwordLength; i++) {
        let symbolIndex;
        symbolIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[symbolIndex];
    }
    return randomPassword;
}

const passwordLength = getPasswordLengthFromUser(`What length of password do you want?`)

const userPassword = generateKey(passwordLength, characters)

console.log(userPassword)
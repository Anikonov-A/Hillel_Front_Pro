//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

let userValue = parseInt(prompt("Put your number here"));
let lastDigit = userValue % 10;

if (lastDigit % 2 === 0) {
    console.log(`you've got "${lastDigit}" and it's even`);
} else {
    console.log(`you've got "${lastDigit}" and it isn't even`);
}
console.log(`last digit is "${lastDigit}"`)
//------OR------------
// let useTernary=(lastDigit % 2 === 0) ? `you've got "${lastDigit}" and it's even` : `you've got "${lastDigit}" and it isn't even`;
// console.log(useTernary);
// console.log(`last digit is "${lastDigit}"`)
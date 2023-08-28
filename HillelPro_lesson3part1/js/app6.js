// Дано тризначне число.
//     Визначити чи є парною сума його цифр.
//     Визначити, чи кратна сума цифр п'яти.
//     Визначити чи є добуток його цифр більше 100.

let userValue = parseInt(prompt("Enter your three-digit number here"));//123

let lastDigit = userValue % 10;//3
let middleDigit = ((userValue - lastDigit) / 10) % 10;//2
let firstDigit = (((userValue - lastDigit) / 10) - middleDigit) / 10;//1

let sumOfThreeDigit = firstDigit + middleDigit + lastDigit;
let multiplyDigits = firstDigit * middleDigit * lastDigit;

//     Визначити чи є парною сума його цифр.
if (userValue < 100 || userValue > 999) { //Добавил проверку на трехзначность числа
    console.log(`It's not three digit number`);
} else if (sumOfThreeDigit % 2 === 0) {
    console.log(`the sum of digits is even`);
} else {
    console.log(`the sum of digits isn't even`)
}
//    Визначити, чи кратна сума цифр п'яти.
if (userValue < 100 || userValue > 999) {
    console.log(`It's not three digit number`);
} else if (sumOfThreeDigit % 5 === 0){
    console.log(`sum of digits are multiply of 5 `)
}else {
    console.log(`sum of digits aren't multiply of 5`)
}
//     Визначити чи є добуток його цифр більше 100.
let multiplyDigitsCollocation = (multiplyDigits > 100) ? "multiply bigger than 100" : "multiply lower than 100";
console.log(multiplyDigitsCollocation);
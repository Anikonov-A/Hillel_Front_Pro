//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let userValue = parseInt(prompt("Enter your two-digit number here"));
let lastDigit = userValue % 10;
let firstDigit = (userValue - lastDigit) / 10;


if (userValue < 10 || userValue > 99) { // Добавил проверку числа на двухзначность))
    console.log(`It's not two digit number`);
} else if (firstDigit > lastDigit) {
    console.log(`${firstDigit} bigger than ${lastDigit}`);
} else if (firstDigit < lastDigit) {
    console.log(`${lastDigit} bigger than ${firstDigit}`);
} else {
    console.log(`They are equal`);
}
// Дано натуральное число. Найти и вывести на страницу все его делители.
//     Определить количество его четных делителей
//     Найти сумму его четных делителей
//
let num1 = parseInt(prompt("Enter yor number"));
let str = "";
let evenDigitsCounter = 0;
let sumOfEvenDigits = 0;

for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        if (num1 === i) {
            str += `${i}.`
        } else {
            str += `${i}, `
        }
        if (i % 2 === 0) {
            evenDigitsCounter++;//счетчик четных делителей
            sumOfEvenDigits += i;//сумма этих делителей
        }
    }

}
console.log(str);
console.log(evenDigitsCounter)
console.log(sumOfEvenDigits)
//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
// let N = parseInt(prompt(`Enter your number from 1 to 100`));
let N;
let str = "";
let lastIteration;
let minValue = 1;
let maxValue = 100;

do {
    N = parseInt(prompt(`Enter your number from 1 to 100`));
} while (minValue > N || N > maxValue);

// Сохранил в переменную последнюю итерацию цикла для коректной работы условной конструкции
for (let i = 1; i ** 2 <= N; i++) {
    lastIteration = i;
}
// Теперь в N можно записать любое целое число.
for (let i = 1; i ** 2 <= N; i++) {
    if (i ** 2 !== lastIteration ** 2) {
        str += `${i}, `
    } else {
        str += `${i}.`
    }
}
console.log(str)

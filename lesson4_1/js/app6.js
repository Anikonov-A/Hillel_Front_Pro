//Найти среднее арифметическое всех целых чисел от 1 до 500
let num1 = 1;
const num2 = 500;
let sum = 0;

for (let i = num1; i <= num2; i++) {
    sum += i;
}
let arithmeticMean = sum / num2;

console.log(arithmeticMean);

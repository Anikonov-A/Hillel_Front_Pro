//Вивести квадрати чисел від 10 до 20

let num1 = 10;
let num2 = 20;

let str = "";

for (let i = num1; i <= num2; i++) {
    num1=i**2;
    if (i !== num2) {
        str += `${num1}, `
    } else {
        str += `${num1}.`
    }
}
console.log(str)
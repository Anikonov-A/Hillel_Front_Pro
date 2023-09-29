//Вивести на сторінку в один рядок через кому числа від 10 до 20
let num1 = 10;
let num2 = 20;

let str = "";

for (let i = num1; i <= num2; i++) {
    if (i < num2) {
        str += `${i}, `
    } else {
        str += `${i}.`
    }
}
console.log(str)

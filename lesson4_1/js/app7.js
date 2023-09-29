// //Вивести суму лише парних чисел у діапазоні від 30 до 80
let num1 = 30;
let num2 = 80;

let sum = 0;

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0){
        sum +=i;
    }
}
console.log(sum)


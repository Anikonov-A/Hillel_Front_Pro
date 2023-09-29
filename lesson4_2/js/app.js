//Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
let num1 = 20;
let num2 = 30;

let str = "";

for (let i = num1; i <= num2; i += 0.5) {
   if (i!==num2){
       str+=`${i} `
   }else{
       str+=`${i}`
   }
}
console.log(str);
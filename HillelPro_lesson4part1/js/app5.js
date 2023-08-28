//Знайти добуток усіх цілих чисел від 15 до 35
let num1 = 15;
let num2 = 35;
let multiply=1;


for (let i = num1; i <= num2; i++) {
    multiply *=i;
}
console.log(multiply)
//-----Or
console.log(BigInt(multiply));

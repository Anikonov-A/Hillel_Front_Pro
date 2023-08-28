//Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)
let userValue = parseInt(prompt(`Enter your value`));
let isPowerOfThree = false;

let i;

for (i = 0; 3 ** i <= userValue; i++) {
    if (3 ** i === userValue) {
        isPowerOfThree = true;
        break;
    }

}
if (isPowerOfThree){
    console.log(`3^${i} = ${userValue}`)
}else {
    console.log(`${userValue} is not a power of 3`)
}
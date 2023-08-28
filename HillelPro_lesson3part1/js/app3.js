//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let firstValue = parseInt(prompt("enter first value"));
let secondValue = parseInt(prompt("enter second value"));

if (firstValue % secondValue === 0) {
    console.log(`${secondValue} is a factor of ${firstValue}`);
} else {
    console.log(`${secondValue} is not a factor of ${firstValue}`);
}

if (secondValue % firstValue === 0) {
    console.log(`${firstValue} is a factor of ${secondValue}`);
} else {
    console.log(`${firstValue} is not a factor of ${secondValue}`);
}
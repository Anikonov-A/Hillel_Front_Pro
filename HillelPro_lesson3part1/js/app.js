//Дано два різні числа. Визначити, яке з них більше, а яке менше.
let firstDigit = parseInt(prompt("Enter your first digit here"));
let secondDigit = parseInt(prompt("Enter your second digit here"));

if (firstDigit > secondDigit) {
    console.log("The first digit is bigger");
} else if (firstDigit < secondDigit) {
    console.log(" The second digit is bigger");
} else {
    console.log("they are equal");
}
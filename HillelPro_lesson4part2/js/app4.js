let number = parseInt(prompt(`Enter your number`));
let isPrimeNumber = true;

while (number <= 1) {
    number = parseInt(prompt(`Please enter number bigger than 1`));
}

for (let i = 2; i <= number/2; i++) {
    if (number % i === 0) {
        isPrimeNumber = false;
        break;

    }
}

if (isPrimeNumber) {
    console.log(`It's prime number`)
} else {
    console.log(`It's not prime number`)
}
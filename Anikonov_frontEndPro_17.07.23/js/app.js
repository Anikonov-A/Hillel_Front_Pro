//----------------Task 1
let nameOfUser = prompt('Please enter your name');
alert(`"Hello ${nameOfUser}! How are you?"`);


// ----------------Task 2
let digit1 = prompt('Please enter digit 1 for addition');
let digit2 = prompt('Please enter digit 2 for addition');

digit1 = parseInt(digit1);
digit2 = parseInt(digit2);

let sumOfDigits = digit1 + digit2;
alert(`Digit addition = ${sumOfDigits}`);

digit1 = prompt('Please enter digit 1 for subtraction');
digit2 = prompt('Please enter digit 2 for subtraction');

let subtractionOfDigits = digit1 - digit2;
alert(`Result of subtracting = ${subtractionOfDigits}`);

digit1 = prompt('Please enter digit 1 for multiplying');
digit2 = prompt('Please enter digit 2 for multiplying');

let multiplyingOfDigits = digit1 * digit2;
alert(`Result of multiplying = ${multiplyingOfDigits}`);

digit1 = prompt('Please enter digit 1 for division');
digit2 = prompt('Please enter digit 2 for division');

let divisionOfDigits = digit1 / digit2;
alert(`Result of dividing = ${divisionOfDigits}`);


//-----------------Task 3
let firstValue = prompt('Please enter your first value to compare');
let secondValue = prompt('Please enter your second value to compare');

alert(firstValue === secondValue);


// ----------------Task 4
digit1 = prompt('Please enter your first digit for arithmetic mean');
digit1 = parseInt(digit1);

digit2 = prompt('Please enter your second digit for arithmetic mean');
digit2 = parseInt(digit2);

let digit3 = prompt('Please enter your third digit for arithmetic mean');
digit3 = parseInt(digit3)

let arithmeticMean = (digit1 + digit2 + digit3) / 3;
alert(arithmeticMean);


//-------------------Task 5
let number = prompt("Please enter your five digit number to divide it into numbers");

let dig5 = number % 10;
number = (number - dig5) / 10;

let dig4 = number % 10;
number = (number - dig4) / 10;

let dig3 = number % 10;
number = (number - dig3) / 10;

let dig2 = number % 10;
number = (number - dig2) / 10;

let dig = number % 10;

let result = `${dig} ${dig2} ${dig3} ${dig4} ${dig5}`;
alert(result);
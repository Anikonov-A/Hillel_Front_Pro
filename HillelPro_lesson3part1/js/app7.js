// //Дано тризначне число.
//   Чи правда, що всі цифри однакові?
let userValue = parseInt(prompt("Enter your three-digit number here"));//123

let lastDigit = userValue % 10;//3
let middleDigit = ((userValue - lastDigit) / 10) % 10;//2
let firstDigit = (((userValue - lastDigit) / 10) - middleDigit) / 10;//1

if (firstDigit === middleDigit && middleDigit === lastDigit) {
    console.log(`all digits are equal`);
} else {
    console.log(`all digits aren't equal`);
}
//----OR ternary
// let isAllDigitsEqual = (firstDigit === middleDigit && middleDigit === lastDigit) ? console.log(`all digits are equal`) : console.log(`all digits aren't equal`);
console.log((firstDigit === middleDigit && middleDigit === lastDigit) ? console.log(`all digits are equal`) : console.log(`all digits aren't equal`));

//   Чи є серед цифр цифри однакові?
//if else
if (firstDigit===middleDigit||middleDigit===lastDigit||lastDigit===firstDigit) {
    console.log(`there are equal digits`)
}else{
    console.log(`there aren't equal digits`)
}
//switch case вроде работает,не уверен что правильно написана условная конструкция,дай пожалуйста фидбек по коду ниже
// let areHereEqualDigits = true;
//
// switch (areHereEqualDigits) {
//     case firstDigit === middleDigit:
//     case firstDigit === lastDigit:
//     case middleDigit === lastDigit:
//         console.log("you have equal digits")
//         break;
//     default:
//         console.log("you haven't equal digits")
// }

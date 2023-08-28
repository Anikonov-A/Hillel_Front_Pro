let userValue = parseInt(prompt("Enter your six-digit number here"));

// let sixthDigit = userValue % 10;
// let fifthDigit = parseInt((userValue /10) %10);
// let fourthDigit =  parseInt((userValue /100) %10);
// let thirdDigit = parseInt((userValue /1000) %10);
// let secondDigit =  parseInt((userValue /10000) %10);
// let firstDigit =  parseInt((userValue /100000) %10);
// //123321
// let sixthDigit = userValue % 10;//1
// userValue = (userValue - sixthDigit) / 10;//(123321-1)/10
// console.log(userValue)//12332
// let fifthDigit = userValue % 10;//2
// userValue = (userValue - fifthDigit) / 10;//(12332-2)/10
// console.log(userValue)//1233
// let fourthDigit = userValue % 10;//3
// userValue = (userValue - fourthDigit) / 10;//(1233-3)/10
// console.log(userValue)//123
// let thirdDigit = userValue % 10;//3
// userValue = (userValue - thirdDigit) / 10;//(123-3)/10
// console.log(userValue)//12
// let secondDigit = userValue % 10;//2
// userValue = (userValue - secondDigit) / 10;//(12-2)/10
// console.log(userValue)//1
// let firstDigit = userValue % 10;//1
//
//


if( firstDigit===sixthDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit ){
    console.log(`This is a mirror number.`)
}else {
    console.log(`This isn't a mirror number.`)
}



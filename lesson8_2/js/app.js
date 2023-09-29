//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//
// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
//
// Ступінь передається як другий аргумент у функцію
//
const minNumber = 1;
const maxNumber = 20;
function getUserNumber(text) {
    let value;
    do {
        value = parseInt(prompt(text))
    } while (isNaN(value) || value <= 0 || value > maxNumber);
    return value
}

function pow(num, degree) {                    //pow(3,3)|pow(3,2)|pow(3,1)
    if (degree === 0) {                        //false   |false   |false
        return 1;                              //        |        |
    } else if (degree === 1) {                 //false   |false   |true
        return num;                            //        |        |return 3
    }
    return num * pow(num, degree - 1); //3*f(3,2)|3*f(3,1)| 3
}                                              //  3*(9)|  3*(3) | 3

const userNumber = getUserNumber(`Enter your digit from ${minNumber} to ${maxNumber}`)
const userDegreeNumber = getUserNumber(`Enter your degree value from ${minNumber} to ${maxNumber}`)

console.log(`${userNumber}^${userDegreeNumber}=${pow(userNumber, userDegreeNumber)}`);

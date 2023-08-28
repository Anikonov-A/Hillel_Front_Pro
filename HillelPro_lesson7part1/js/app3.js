// Написать функцию заполнения пользовательскими данными двумерного массива.
// Длину основного массива и внутренних массивов задаёт пользователь.
// Значения всех элементов всех массивов задаёт пользователь.

function getLengthOfArray(text) {
    let value;
    do {
        value = parseInt(prompt(text));
    } while (isNaN(value) || value <= 0);
    return value;
}
function getUserValueForArrays(text) {
    return prompt(text);
}

function twoDimensionalArr() {
    let userArr = [];
    for (let i = 0; i < userArrLength; i++) {
        let innerArr = [];
        for (let j = 0; j < innerArrLength; j++) {
            innerArr.push(getUserValueForArrays(`enter array element at [${i}][${j}]`))
        }
        userArr.push(innerArr);
    }
    return userArr
}

const userArrLength = getLengthOfArray(`enter your array length`)
const innerArrLength = getLengthOfArray(`enter your inner arrays length`)

const resultArr= twoDimensionalArr()
console.log(resultArr)
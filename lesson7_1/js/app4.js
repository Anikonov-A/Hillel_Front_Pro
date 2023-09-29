//Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor".
// Исходную строку и символы для удаления задаёт пользователь

function getUserString(text) {
    let value;
    do {
        value = prompt(text);
    } while (value === '' || value === ' ' || value === null)
    return value;
}

function getUserArrayLength(text) {
    let value;
    do {
        value = parseInt(prompt(text));
    } while (isNaN(value) || value < 0)
    return value

}

function addSymbolsForDelete(text) {
    let value;
    do {
        value = prompt(text);
    } while (value.length !== 1 || value === '')
    return value;
}

function addElementsToArray(userArrLength) {
    let userArr = []
    for (let i = 0; i < userArrLength; i++) {
        userArr.push(addSymbolsForDelete(`Enter your symbol to delete array`))
    }
    return userArr;
}

function stringEditing(userString, userArrWithElements) {
    let outputString = '';
    for (let i = 0; i < userString.length; i++) {
        let deleteSymbol= false;
        for (let j = 0; j <userArrWithElements.length;j++){
            if (userString[i]===userArrWithElements[j]){
                deleteSymbol  = true
                break
            }
        }
        if (!deleteSymbol){
            outputString += userString[i]
        }
    }
    console.log(outputString)
    return outputString
}

const userString = getUserString(`Enter your text here`);
// console.log(userString)
const userArrLength = getUserArrayLength(`How many symbols you wanna add to array?`)
// console.log(userArrLength)
const userArrWithElements = addElementsToArray(userArrLength);
// console.log(userArrWithElements)
stringEditing(userString, userArrWithElements)


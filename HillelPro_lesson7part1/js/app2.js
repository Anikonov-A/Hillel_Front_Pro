//Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
// В переменной znak может быть: +, -, *, /, %, ^ (степень).
// Вывести результат математического действия, указанного в переменной znak.
// Оба числа и знак получаются от пользователя.

function getNumber(text){
    let value;
    do {
        value=parseInt(prompt(text));
    }while(isNaN(value))
    return value;
}
function getOperator(text){
    let value;
    do{
        value=prompt(text)
    }while (!(value==='+'||value==='-'||value==='*'||value==='/'||value==='%'||value==='^'))
    return value;
}

function doMath(x, y, znak) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ^ y;
    }
}
let x = getNumber(`enter digit #1`);
let y = getNumber(`enter digit #2`);
let znak = getOperator(`enter math operator`);

console.log(`Your result is : ${doMath(x,y,znak)}`)
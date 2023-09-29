//Вывести все числа в диапазоне от 100 до 200 кратные 3


let num1 = 100;
let num2 = 200;

let str = "";
let lastIterationValue = num2 - (num2 % 3);

for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 ) {
        if (i === lastIterationValue) {
            str += `${i}.`
        }else {
            str +=`${i}, `
        }
    }
}


console.log(str)

//Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.

let arrLength = parseInt(prompt(`Enter your array length`));
let userArr = [];


for (let i = 0; i < arrLength; i++) {
    let digit = parseInt(prompt(`Enter digit# ${i + 1}`));
    userArr.push(digit);
}
document.write(userArr + "<br>")

userArr.sort(function compareNumbers(a, b) { //Добавил функцию для коректной сортировки чисел
    return a - b;
});
document.write(userArr + "<br>");

userArr.splice(1, 3);
document.write(userArr + "<br>");






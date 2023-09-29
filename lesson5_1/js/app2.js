//Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.   ---------------------------------DONE
//     Знайти мінімальний елемент масиву та його порядковий номер. ------------------DONE
//     Знайти максимальний елемент масиву та його порядковий номер.  ----------------DONE
//     Визначити кількість негативних елементів. ------------------------------------DONE
//     Знайти кількість непарних позитивних елементів. ------------------------------DONE
//     Визначити кількість парних позитивних елементів.------------------------------DONE
//     Знайти суму парних позитивних елементів.--------------------------------------DONE
//     Знайти суму непарних позитивних елементів.------------------------------------DONE
//     Знайти добуток позитивних елементів.------------------------------------------DONE
//     Знайти найбільший серед елементів масиву, решту занулити.---------------------DONE

let userArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfPositiveElements = 0;
let numberOfPositiveElements = 0;

let minElement = userArr[0];
let minElementIndex = 0;

let maxElement = userArr[0];
let maxElementIndex = 0;

let numberOfNegativeElements = 0;

let oddPositiveElements = 0;

let evenPositiveElements = 0;

let sumOfEvenPositiveElements = 0;
let sumOfOddPositiveElements = 0;
let productOfPositiveElements = 1;
let arrayWithOnlyMaxElement = [];


for (let i = 0; i < userArr.length; i++) {
    if (userArr[i] > 0) {
        sumOfPositiveElements += userArr[i];// Знайти суму та кількість позитивних елементів.1
        numberOfPositiveElements++
        productOfPositiveElements *= userArr[i];//     Знайти добуток позитивних елементів.9
    }
    if (userArr[i] < minElement) {
        minElement = userArr[i];//     Знайти мінімальний елемент масиву та його порядковий номер.2
        minElementIndex = i;
    }
    if (userArr[i] > maxElement) {
        maxElement = userArr[i];//     Знайти максимальний елемент масиву та його порядковий номер.3
        maxElementIndex = i;
    }
    if (userArr[i] < 0) {
        numberOfNegativeElements++;//     Визначити кількість негативних елементів.4
    }
    if (userArr[i] % 2 !== 0 && userArr[i] > 0) {
        oddPositiveElements++;//     Знайти кількість непарних позитивних елементів.5
        sumOfOddPositiveElements += userArr[i];//     Знайти суму непарних позитивних елементів.8
    }
    if (userArr[i] % 2 === 0 && userArr[i] > 0) {
        evenPositiveElements++;//     Визначити кількість парних позитивних елементів.6
        sumOfEvenPositiveElements += userArr[i];//     Знайти суму парних позитивних елементів.7
    }
}
for (let i = 0; i < userArr.length; i++) {
    if (userArr[i] !== maxElement) {
        userArr[i] = 0;                       //     Знайти найбільший серед елементів масиву, решту занулити.10
        arrayWithOnlyMaxElement = userArr;
    }
}

//Сума та кількість позитивних елементів.
console.log(`Sum of positive elements in array is ${sumOfPositiveElements}`)
console.log(`Quantity of positive elements in array is ${numberOfPositiveElements}`)
//мінімальний елемент масиву та його порядковий номер.
console.log(`Min element in array is ${minElement}`);
console.log(`His index is ${minElementIndex}`);
//     Знайти максимальний елемент масиву та його порядковий номер.
console.log(`Max element in array is ${maxElement}`);
console.log(`His index is ${maxElementIndex}`);
//     Визначити кількість негативних елементів.
console.log(`Quantity of negative elements in array is ${numberOfNegativeElements}`);
//     Знайти кількість непарних позитивних елементів.
console.log(`Quantity of odd positive elements in array is ${oddPositiveElements}`);
//     Визначити кількість парних позитивних елементів.
console.log(`Quantity of even positive elements in array is ${evenPositiveElements}`);
//     Знайти суму парних позитивних елементів.
console.log(`Sum of even positive elements in array is ${sumOfEvenPositiveElements}`);
//     Знайти суму непарних позитивних елементів.
console.log(`Sum of odd positive elements in array is ${sumOfOddPositiveElements}`);
//     Знайти добуток позитивних елементів.
console.log(`Product of positive elements in array is ${productOfPositiveElements}`)
//     Знайти найбільший серед елементів масиву, решту занулити.
console.log(`This array is with only biggest element and zeros ${arrayWithOnlyMaxElement}`)

1
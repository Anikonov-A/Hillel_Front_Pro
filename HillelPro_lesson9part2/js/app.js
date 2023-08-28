//Вам необходимо написать функцию, которая принимает в качестве аргумента другую функцию и добавляет возможность кешировать вызовы этой функции.
// Идея заключается в том, чтобы при вызове функции с одинаковыми аргументами нет смысла вызывать ее каждый раз, достаточно сохранить данные о аргументах и результате вызова функции с такими аргументами.
// Хранить необходимо последние 10 вызовов функции и при 11м вызове удалять данные о первом вызове, чтобы хранить данные о не более чем 10 вызовах.
'use strict'
const maxCashLength = 10;
const cacheArr = [];
function cacheWrapper(sumFunction, maxCashLength) {
    return function(...args) {
        let key = args.join(',');
        for (let value of cacheArr) {
            if (value.key === key) {
                return value.result;
            }
        }
        if (cacheArr.length >= maxCashLength) {
            cacheArr.shift();
        }

        const result = sumFunction(...args);
        cacheArr.push({ key, result });
        return result;
    };
}

const sumFunction = (a, b) => {
    return a + b;
}

const cachedFunction = cacheWrapper(sumFunction,maxCashLength)
cachedFunction(3, 2)
cachedFunction(4, 2)
cachedFunction(5, 2)
cachedFunction(6, 2)
cachedFunction(7, 2)
cachedFunction(10, 2)
cachedFunction(11, 2)
cachedFunction(12, 2)
cachedFunction(13, 2)
cachedFunction(8, 2)
cachedFunction(9, 2)
console.log(cacheArr)
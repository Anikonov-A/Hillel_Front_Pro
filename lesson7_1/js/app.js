//Написать функцию, которая принимает 1 параметр.
// При первом вызове, она его запоминает,
// при втором — суммирует переданный параметр с тем, что передали первый раз и тд.
// Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

function sumFunc(){
    let sum = 0
    return function (value){
         sum += value;
         return sum;
    };
}

let result = sumFunc();

console.log(result(3))
console.log(result(5))
console.log(result(20))

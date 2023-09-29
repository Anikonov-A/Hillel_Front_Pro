//Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список з елементів:ul li
//Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3], 3]) то робити вкладений список. Для перевірки масиву використовуйте Array.isArray()
'use strict'
const arr = [1, 2, 3, [1, 2, 3, 4, 5], 5, 6,[1,2,3,4,5]];
const container = document.querySelector('.container');

const generateList = (array) => {
    const ul = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");

        if (Array.isArray(array[i])) {
            const innerArr = array[i];
            const innerUl = document.createElement("ul");

            li.appendChild(innerUl);
            for (let j = 0; j < innerArr.length; j++) {
                const innerLi = document.createElement("li");
                innerLi.textContent = innerArr[j];
                innerUl.appendChild(innerLi);
            }
            li.appendChild(innerUl)
        } else {
            li.textContent = array[i];
        }

        container.appendChild(ul);
        ul.appendChild(li);
    }
};
generateList(arr);
//===========================================OR=================================================
const generateListRecursionMethod = (array,container) => {
    const ul = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");

        if (Array.isArray(array[i])) {
            generateListRecursionMethod(array[i],li)
            ul.appendChild(li);
        } else {
            li.textContent = array[i];
            ul.appendChild(li);
        }
        container.appendChild(ul);
    }
};

generateListRecursionMethod(arr,container);

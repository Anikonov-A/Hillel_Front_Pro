//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
'use strict'
const table = document.querySelector('.table');
const tableBtn = document.querySelector('.table_btn')
let counter = 1;
let maxCell = 100

const clickFunction = () => {
    createDynamicTable();
    tableBtn.removeEventListener('click',clickFunction);
}
tableBtn.addEventListener('click',clickFunction);

let createDynamicTable = () => {
    for (let i = 0; i < maxCell; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = counter++;
            table.appendChild(cell);

    }

}

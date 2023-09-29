//Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає
'use strict'
const inputField = document.querySelector('.input_field');
const infoDiv = document.querySelector('.info')

inputField.addEventListener('focus',()=>{
    infoDiv.classList.remove('hidden')
})
inputField.addEventListener('blur',()=>{
    infoDiv.classList.add('hidden')
})
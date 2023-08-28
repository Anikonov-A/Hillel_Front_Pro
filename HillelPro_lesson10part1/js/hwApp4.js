//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)
'use strict'
const imgBtn = document.querySelector('.img_btn')
const wrapperForImg = document.querySelector('.wrapper_for_img')
const numberOfImg = 9;
const folderPath = `./img/`
const fileFormat = `.jpg`

// imgBtn.addEventListener('click', () => {
//     const myImg = document.createElement('img');
//     const numberOfRandomPic = Math.floor(Math.random() * numberOfImg) + 1;
//     myImg.src = `${folderPath}${numberOfRandomPic}${fileFormat}`;
//
//     wrapperForImg.innerHTML='';
//     wrapperForImg.appendChild(myImg)
// })
//============OR======================
let getRandomImg = (numberOfImg,folderPath,fileFormat)=>{
    imgBtn.addEventListener('click', () => {
        const myImg = document.createElement('img');
        const numberOfRandomPic = Math.floor(Math.random() * numberOfImg) + 1;
        myImg.src = `${folderPath}${numberOfRandomPic}${fileFormat}`;

        wrapperForImg.innerHTML='';
        wrapperForImg.appendChild(myImg)
    })
}
getRandomImg(numberOfImg,folderPath,fileFormat)
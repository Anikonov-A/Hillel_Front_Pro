// window.document.getElementById('wrapper')//no
//
// const wrapperStyle = document.getElementById('wrapper');
// console.log(wrapperStyle.style.backgroundColor= 'yellow');
// console.log(wrapperStyle.style.color= 'blue');
// console.log(wrapperStyle.style.fontSize= '32px');
//
// const childElem = document.getElementById('wrapper').children[0];
// childElem.textContent = 'Laptop Macbook';
// document.getElementById('btn').addEventListener('click',function (event){
//     event.target.classList.add('clickedBtn');
//
//     // document.getElementById('wrapper').classList.remove('hidden')
//     document.getElementById('wrapper').classList.toggle('hidden')
// })
//
//
// // document.getElementsByTagName('a')[0].addEventListener('')
// document.querySelector('a').addEventListener('click',function (event){
//     event.preventDefault();
//     console.log('hello from Google')
// })

const products = ['Laptops', 'Phones', 'Tablets', 'Buds'];


document.getElementById('btn').addEventListener('click', function (event) {
    const wrapper = document.getElementById('wrapper');
    for (let value of products) {
        const div = document.createElement('div');
        div.classList.add('product');

        const span = document.createElement('span');
        span.textContent=value;
        div.appendChild(span);
        wrapper.appendChild(div);
    }
})


// document.getElementById('btn').addEventListener('click',function (event){
//     for (let value of products) {
//         document.getElementById('wrapper').innerHTML += `<div class="product><span>${value}</span></div>`
//     }
//
// })
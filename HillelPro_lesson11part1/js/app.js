let showCategories = () => {
    for (let categoryKey in categories) {
        const category = categories[categoryKey];

        let element = document.createElement('div');
        element.textContent = category.name;

        const parentElement = document.getElementById('left');
        element.setAttribute('data-category', categoryKey);
        parentElement.appendChild(element);
    }
}
let showProducts = (products, category) => {
    const parentElement = document.getElementById('center');
    parentElement.innerHTML = '';

    for (let product of products) {
        let element = document.createElement('div');
        element.textContent = `${product.name} $${product.price}`;
        element.setAttribute('data-product', product.id)
        element.setAttribute('data-category', category)
        parentElement.appendChild(element)
    }
}

document.getElementById('left').addEventListener('click', event => {
    const rightElement = document.getElementById('right')
    rightElement.innerHTML='';

    const popUpBlock = document.getElementById('popUpBlock');
    if (popUpBlock) {
        popUpBlock.remove();
    }

    if (event.target.nodeName === 'DIV') {
        const categoryKey = event.target.getAttribute('data-category');
        const categoryProducts = categories[categoryKey].products;
        showProducts(categoryProducts, categoryKey)

    }
})
document.getElementById('center').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const categoryKey = event.target.getAttribute('data-category');
        const productId = event.target.getAttribute('data-product');
        const product = categories[categoryKey].products.find(product => product.id == productId)
        showDescription(product)
    }
})
let showDescription = (product) =>{
    const buyBtn = document.createElement('button');
    const parentElement = document.getElementById('right');
    parentElement.innerHTML='';

    let element =document.createElement('div');
    element.innerHTML = `Product name: ${product.name} <br> Product description : ${product.description} <br> Price : $${product.price}`;
    parentElement.appendChild(element);

    buyBtn.textContent = `Buy me`;
    parentElement.appendChild(buyBtn);
    buy(buyBtn,parentElement);

}
let buy = (buyBtn,parentElement)=>{
    const centerField = document.getElementById('center');
    const body = document.getElementById('body');
    const element = document.createElement('div');
    element.id = 'popUpBlock';

    buyBtn.addEventListener('click',()=>{

        parentElement.innerHTML='';
        centerField.innerHTML='';
        body.appendChild(element)
        element.style.textAlign = 'center';
        element.textContent =`Thanks for buying`;

        setTimeout(() => {
            body.removeChild(element);
        }, 5000);
    })

}

showCategories()
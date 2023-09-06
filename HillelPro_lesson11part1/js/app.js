'use strict'
document.getElementById('left').addEventListener('click', event => {
    const rightElement = document.getElementById('right')
    rightElement.innerHTML = '';

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


showCategories()
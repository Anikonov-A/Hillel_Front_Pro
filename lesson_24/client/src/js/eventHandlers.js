import axios from "axios";
import {basicUrl} from './common.js';
import {createElement} from "./domHelpers.js";
import {Hamburger} from "./Hamburger.js";
import Modal from "bootstrap/js/src/modal.js";
import {validateData} from "./validation.js"

let products = [];
let cart = [];


const validationModal = new Modal(document.getElementById(`validationModal`))

export async function handleCategoryClick(event) {
    const categoryId = event.target.getAttribute('data-id');
    const contentParent = document.getElementById(`content`)

    const {data} = await axios(`${basicUrl}/api/products/${categoryId}`);
    products = data;

    contentParent.innerHTML = ''
    data.map(item => {

        const elementAttributes = {
            'data-category': categoryId,
            'data-product': item.id,
        };
        createElement(
            'div',
            '#content',
            `${item.name} $${item.price}`,
            elementAttributes,
            {click: item.configurable ? handleConfigurableItemClick : handleProductClick}
        );
    });


}

function showOrHideCheckoutBtn() {
    const checkoutBtn = document.getElementById(`checkout`)
    cart.length > 0 ? checkoutBtn.classList.remove('d-none') : checkoutBtn.classList.add('d-none');
}

function handleProductClick(event) {
    const categoryId = event.target.getAttribute('data-category');
    const productId = event.target.getAttribute('data-product');

    const myDrink = getProduct(productId)
    cart.push(myDrink)

    showCart()

    axios.post(`${basicUrl}/api/order`, {categoryId, productId, myDrink})
}
 function createModalWindow(){
    return new Modal(document.getElementById(`burgerModal`))
 }

function handleConfigurableItemClick(event) {
    const productId = event.target.getAttribute('data-product');
    const myProduct = getProduct(productId);

    const burgerModal = createModalWindow()
    burgerModal.show()

    const addToCardButton = document.getElementById('addToCard');

    addToCardButton.addEventListener('click', addToCardButtonClickHandler);

    function addToCardButtonClickHandler() {
        addBurgerToCart(productId, myProduct, burgerModal)
        clearBurgerModal()
        burgerModal.hide()
        addToCardButton.removeEventListener('click', addToCardButtonClickHandler);
    }

}

function addBurgerToCart(productId, myProduct) {
    const {hamburger, totalPrice} = createHamburger(myProduct)
    cart.push({productId, myProduct, hamburger, totalPrice})
    showCart()
}

function clearBurgerModal() {
    const configForm = document.querySelector(`.order-card`);
    const inputs = [...configForm.elements]

    inputs.map(item => {
        item.checked = item.id === 'big' && item.name === 'size';
    })
}

function clearValidationModal(){
    const validForm = document.querySelector('#validationForm');
    const inputs = [...validForm.elements]

    inputs.forEach(item => {
        item.value = '';
    })

}


function showCart() {
    const orderList = document.getElementById(`orderList`);
    let finalPrice = 0
    orderList.textContent = '';
    cart.forEach(item => {
        finalPrice += item.price || item.totalPrice;
        createElement(`li`, orderList, `${item.name || item.myProduct.name}`);
    })
    showOrHideCheckoutBtn()
    document.getElementById(`finalPrice`).textContent = `Final price: ${finalPrice} $`
}

function calculatePrice() {
    let finalPrice = 0;
    cart.map(item => {
        finalPrice += item.price || item.totalPrice;
    })
    return finalPrice
}

document.getElementById('checkout').addEventListener('click', () => {
    let totalPrice = calculatePrice()
    validationModal.show()
    getUserDataAndSendOrder(totalPrice)

})

function getUserDataAndSendOrder(totalPrice) {
    const myForm = document.getElementById(`validationForm`)
    document.getElementById(`validBtn`).addEventListener('click', () => {
        if (validateData()) {
            const userData = {
                name: myForm.elements.name.value,
                surname: myForm.elements.surname.value,
                address: myForm.elements.address.value
            }
            axios.post(`${basicUrl}/api/order`, {cart, totalPrice, userData})
                .then(_ =>{
                    validationModal.hide();
                    clearValidationModal();
                    console.log(cart)

                    cart=[];
                    document.getElementById('checkout').classList.add(`d-none`);
                    showCart()
                    document.getElementById(`finalPrice`).textContent = '';
                })
        }
    })
}
function createHamburger(myProduct) {
    const smallCheckBox = document.getElementById(`small`);
    const bigCheckBox = document.getElementById(`big`);
    let hamburgerSize;

    if (smallCheckBox.checked) {
        hamburgerSize = Hamburger.SIZE_SMALL;
    } else if (bigCheckBox.checked) {
        hamburgerSize = Hamburger.SIZE_BIG;
    } else if (!bigCheckBox.checked || !smallCheckBox.checked) {
        hamburgerSize = Hamburger.SIZE_BIG
    }

    const hamburger = new Hamburger(hamburgerSize);

    switch (true) {
        case document.getElementById(`cheese`).checked:
            hamburger.addTopping(Hamburger.STUFFING_CHEESE);
            break;
        case document.getElementById(`salad`).checked:
            hamburger.addTopping(Hamburger.STUFFING_SALAD);
            break;
        case document.getElementById(`fries`).checked:
            hamburger.addTopping(Hamburger.STUFFING_FRIES);
            break;
    }
    switch (true) {
        case document.getElementById(`seasoning`).checked:
            hamburger.addTopping(Hamburger.TOPPING_SEASONING);
            break;
        case document.getElementById(`mayo`).checked:
            hamburger.addTopping(Hamburger.TOPPING_MAYO);
            break;
    }

    const price = hamburger.calculatePrice()
    const totalPrice = price + myProduct.price;


    return {hamburger, totalPrice}


}

function getProduct(productId) {
    return products.find(item => item.id == productId);
}
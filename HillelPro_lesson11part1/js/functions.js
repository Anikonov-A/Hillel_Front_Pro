let showCategories = () => {
    for (let categoryKey in categories) {
        const category = categories[categoryKey];
        createElement('div', '#left', category.name, {'data-category': categoryKey})
    }
    myOrders()
}

function myOrders() {
    const leftBlock = document.getElementById('left');
    const centerBlock = document.getElementById('center');
    const rightBlock = document.getElementById('right');
    createElement(`button`, '#left', `You're order`, {type: 'button', id: 'orderBtn'}, {
        click: () => {
            leftBlock.innerHTML = '';
            rightBlock.innerHTML = '';
            centerBlock.innerHTML = '';
            createElement('ul', '#center', '', {id: 'centerUl'});
            orders.forEach((order, index) => {
                let userObj = JSON.parse(localStorage.getItem('userOrder')) || []
                const orderLi = createElement('li', '#centerUl', `Name: ${order.product},Total: ${order.sumPrice}$,Time: ${order.date}`,{}, {click:()=>{
                    showOrderCard(order)
                    }})
                const delBtn = createElement('button', orderLi, 'x', {type: 'button', 'data-order-index': index},{click:()=>{
                        const orderToDelete = delBtn.getAttribute('data-order-index');
                        orders.splice(orderToDelete, 1);
                        localStorage.setItem('userOrder', JSON.stringify(orders));
                        orderLi.remove();
                    }})
            })
            createElement('button', '#left', 'back to categories', {id: 'backBtn', type: 'button'}, {
                click: () => {
                    leftBlock.innerHTML = '';
                    centerBlock.innerHTML = '';
                    showCategories();
                }
            })
        }
    })
}

function addToLocalStorage(order) {
    orders.push(order);
    localStorage.setItem('userOrder', JSON.stringify(orders));
}
let showProducts = (products, category) => {
    const parentElement = document.getElementById('center');
    parentElement.innerHTML = '';
    for (let product of products) {
        createElement('div',
            '#center',
            `${product.name} $${product.price}`,
            {
                'data-product': product.id,
                'data-category': category
            },
            {})
    }
}
let showDescription = (product) => {
    const parentElement = document.getElementById('right');
    parentElement.innerHTML = '';
    const element = createElement('div', '#right', '', '', {})
    element.textContent = `Product name: ${product.name}
                         Product description : ${product.description}
                         Price : $${product.price}`;
    createElement('button', parentElement, `Buy me`, {id: 'buyMeBtn'}, {
        click: () => {
            document.getElementById(`center`).innerHTML = ``;
            document.getElementById(`right`).innerHTML = ``;
            buy(product);
        }
    });


}
let getValueFromObjectToSelect = (item, select) => {
    const valueArr = [];
    for (let keys in item) {
        createElement('option', select, `${item[keys]}`, {value: keys});
    }
    return valueArr;
}

let showError = (inputField, errorMessage) => {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = errorMessage;
    inputField.parentNode.insertBefore(errorElement, inputField.nextSibling);
}
let deleteErrors = () => {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((errorElement) => {
        errorElement.remove();
    });
}
let fullNameValidation = (name, input, errMsg) => {
    if (name === "" || name === " " || !isNaN(name)) {
        showError(input, errMsg);
        return;
    }
    return name
}
let postOfficeValidation = (value, input, errMsg) => {
    if (value <= 0) {
        showError(input, errMsg)
        return;
    }
    return value;
}
let validatePayment = (selectedValue, selectedValueName, cardNumber, fieldForCard, errMsg) => {
    if (selectedValue === 'cash') {
        return selectedValueName
    } else if (selectedValue === "card") {
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            showError(fieldForCard, errMsg);
            return;
        }
    }
    return cardNumber;
}
let validationProductsNum = (value, input, errMsg) => {
    if (value <= 0 || isNaN(value)) {
        showError(input, errMsg);
        return;
    }
    return value
}
function hideDisplayCardField(paymentSelect, fieldForCard) {
    const selectedPaymentMethod = paymentSelect.value;
    if (selectedPaymentMethod === "card") {
        fieldForCard.classList.remove('hidden')
    } else {
        fieldForCard.classList.add('hidden')
    }
}
let buy = (product) => {
    const chosenProduct = product;
    createForm(chosenProduct);
}
function createForm(chosenProduct) {
    const popUpCard = createElement('div', '#body', '', {id: 'popUpBlock'})
    //Create form
    const myForm = createElement('form', popUpCard, '', {id: 'myForm'})
    //Name field
    createElement('label', '#myForm', `Enter your full name below: `, {id: 'nameLabel'});
    const nameInput = createElement('input', '#nameLabel', '', {type: 'text', name: 'name'});
    //Cities field
    createElement('label', '#myForm', `Chose your city for delivery :`, {id: 'citiesLabel'});
    const citySelect = createElement('select', '#citiesLabel', '', {name: 'cities'});
    getValueFromObjectToSelect(cities, citySelect);
    //Post field
    createElement('label', '#myForm', `Enter your post office number: `, {id: 'postLabel'});
    const postInput = createElement(`input`, '#postLabel', '', {type: 'text', name: 'post'});
    //Payment method
    createElement('label', '#myForm', `Chose your payment method: `, {id: `payLabel`});
    const paymentSelect = createElement('select', `#payLabel`, '', {name: 'payments'}, {
        "change": () => {
            hideDisplayCardField(paymentSelect, fieldForCard)
        }
    });
    getValueFromObjectToSelect(payments, paymentSelect);

    const fieldForCard = createElement('input', `#payLabel`, '', {
        type: 'text',
        name: 'cardNumber',
        className: 'hidden'
    });
    //Product counter
    createElement(`label`, `#myForm`, `How many products you wanna buy?`, {id: 'productLabel'});
    const productInput = createElement(`input`, `#productLabel`, '', {type: 'number', name: 'numberOfProducts'});
    //Comment field
    createElement(`label`, `#myForm`, `Add your comment below`, {id: 'commentLabel'});
    const textArea = createElement(`textarea`, `#commentLabel`, ``, {name: `textarea`, id: `commentArea`});
    //Submit button
    createElement(`button`, `#myForm`, `BUY`, {name: `submitBtn`, type: `button`}, {
        click: () => {
            deleteErrors();
            const valueObj = getValueFromCard(nameInput, citySelect, postInput, paymentSelect, fieldForCard, productInput, textArea,myForm);
            if (validationFunction(valueObj)) {
                showOrderCard(valueObj,chosenProduct)
            }
        }
    });
}

const validationFunction = (valueObj) => {
    const validName = fullNameValidation(valueObj.fullName, valueObj.nameInput, 'Enter correct name');
    const validOffice = postOfficeValidation(valueObj.postOfficeNumber, valueObj.postInput, `Enter valid post number bigger than 0`);
    const validPayment = validatePayment(valueObj.selectedPayments, valueObj.selectedPaymentsName, valueObj.cardNumber, valueObj.cardInput, `Enter valid card number`);
    const validProducts = validationProductsNum(valueObj.numberOfProducts, valueObj.productsInput, `Enter correct number`)
    return validName && validOffice && validPayment && validProducts;
}

function getValueFromCard(nameInput, citySelect, postInput, paymentSelect, fieldForCard, productInput, textArea,myForm) {
    const valueObj = {
        cityValue: citySelect.value,
        selectedCityName: cities[citySelect.value],
        selectedPayments: paymentSelect.value,
        selectedPaymentsName: payments[paymentSelect.value],
        fullName: nameInput.value,
        nameInput: nameInput,
        postOfficeNumber: postInput.value,
        postInput: postInput,
        cardNumber: fieldForCard.value,
        cardInput: fieldForCard,
        numberOfProducts: productInput.value,
        productsInput: productInput,
        textAreaValue: textArea.value,
        myForm,
    }
    return valueObj
}

function showOrderCard(valueObj,chosenProduct) {
    const orderInfoCard = createElement(`div`,'#body','',{id:'order',className:'hidden'});
    const orderContent = createElement(`div`,orderInfoCard,'',{id:'oContent'});
    if (!(valueObj.sumPrice || valueObj.date || valueObj.date)){
        valueObj.sumPrice = chosenProduct.price * valueObj.numberOfProducts ;
        valueObj.date = new Date().toLocaleTimeString() ;
        valueObj.product = chosenProduct.name ;
    }
    const div = document.createElement('div');
    div.setAttribute('id', 'popUpBlock')
    orderContent.appendChild(div)
    orderContent.innerHTML = `
                <h3>Order info: </h3>
                <p>Name: ${valueObj.fullName}</p>
                <p>City: ${valueObj.selectedCityName}</p>
                <p>Post office Number: ${valueObj.postOfficeNumber}</p>
                <p>Pay method: ${valueObj.selectedPaymentsName}</p>`;
    if (valueObj.selectedPaymentsName === "card" || valueObj.cardNumber) {
        orderContent.innerHTML += `<p>Card number: ${valueObj.cardNumber}</p>`;
    }
    orderContent.innerHTML += `
                <p>Product: ${valueObj.product}</p>     
                <p>Number of products: ${valueObj.numberOfProducts}</p>
                <p>Comment to order: ${valueObj.textAreaValue}</p>`;
    orderInfoCard.innerHTML = '';
    orderInfoCard.appendChild(orderContent);
    orderInfoCard.classList.add('visible-card');
    const parentEl = document.getElementById('popUpBlock')
    parentEl.appendChild(orderInfoCard)
    valueObj.myForm.reset();
    valueObj.myForm.style.display = 'none';
    addToLocalStorage(valueObj);
}

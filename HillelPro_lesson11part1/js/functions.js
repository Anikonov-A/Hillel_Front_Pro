let showCategories = () => {
    for (let categoryKey in categories) {
        const category = categories[categoryKey];

        let element = document.createElement('div');
        element.textContent = category.name;

        const parentElement = document.getElementById('left');
        element.setAttribute('data-category', categoryKey);
        parentElement.appendChild(element);
    }
    myOrders()
}


let orders = [] ;


function myOrders() {
    const leftBlock = document.getElementById('left');
    const centerBlock = document.getElementById('center');
    const rightBlock = document.getElementById('right');

    const myOrders = document.createElement('button');
    const orderUl = document.createElement('ul');
    const orderLi = document.createElement('li');

    myOrders.setAttribute('type', 'button')
    myOrders.id = 'orderBtn';
    myOrders.textContent = 'Order btn';

    // const rightBlock = document.getElementById('left');
    const backBtn = document.createElement('button');
    backBtn.id = 'backBtn';
    backBtn.setAttribute('type', 'button');
    backBtn.textContent = 'Back to categories';

    leftBlock.appendChild(myOrders);

    myOrders.addEventListener('click', () => {
        leftBlock.innerHTML = '';
        rightBlock.innerHTML = '';
        centerBlock.innerHTML='';

        centerBlock.appendChild(orderUl);
        leftBlock.appendChild(backBtn);
        backBtn.addEventListener('click', () => {
            leftBlock.innerHTML = '';
            centerBlock.innerHTML= '';
            showCategories()
        });

        let order = JSON.parse(localStorage.getItem('userOrder')) || [];
        for (let i = 0; i < order.length; i++) {
            const orderParse = JSON.parse(order[i]);
            const btn = document.createElement('button');
            btn.setAttribute('type', 'button');
            btn.textContent = 'x';

            const orderLi = document.createElement('li');
            orderLi.textContent = `Name: ${orderParse.chosenProduct},Total: ${orderParse.sumPrice}$,Time: ${orderParse.date}`;
            const description = document.createElement('div')

            btn.setAttribute('data-order-index', i);
            orderUl.appendChild(orderLi)
            orderLi.appendChild(btn)
            btn.addEventListener('click',()=>{
                const orderToDelete = btn.getAttribute('data-order-index');
                orders.splice(orderToDelete, 1);
                localStorage.setItem('userOrder', JSON.stringify(orders));
                orderLi.remove();
                rightBlock.innerHTML='';
                // description.classList.add('hidden')
            })
            //create el for card
            const orderInfoCard = document.createElement('div')
            let orderObj = {
                fullName:orderParse.name,
                selectedCityName:orderParse.city,
                postOfficeNumber:orderParse.post,
                selectedPaymentsName:orderParse.typeOfPayment,
                cardNumber:orderParse.card,
                numberOfProducts:orderParse.sumPrice,
                textAreaValue:orderParse.comment,
                chosenProduct:orderParse.chosenProduct,
                orderInfoCard,
                //add new element here

            }

            orderLi.addEventListener('click', () => {
                rightBlock.innerHTML = '';
                showOrderCard(orderObj)

                // rightBlock.appendChild(description)
                // description.innerText = `Order info:
                //                         Name: ${orderParse.name}
                //                         City: ${orderParse.city}
                //                         Post office Number: ${orderParse.post}
                //                         Pay method: ${orderParse.typeOfPayment}`;
                // if (orderParse.typeOfPayment === "card" || orderParse.card) {
                //     description.innerText += `Card number: ${orderParse.card}`;
                // }
                // description.innerText += `
                //                         Product: ${orderParse.chosenProduct}
                //                         Total Price: ${orderParse.sumPrice}
                //                         Comment to order: ${orderParse.comment}
                //                         Date: ${orderParse.date}`;


            });

        }
    })
}
function showOrderCard(orderData) {
    const {
        fullName,
        selectedCityName,
        postOfficeNumber,
        selectedPaymentsName,
        cardNumber,
        numberOfProducts,
        textAreaValue,
        chosenProduct,
        orderInfoCard,
        myForm,

    } = orderData;
    const orderContent = document.createElement('div');
    orderContent.setAttribute("id", 'oContent');
    let sumPrice = chosenProduct.price * numberOfProducts;
    const date = new Date().toLocaleTimeString();
    // const userOrder = JSON.stringify(chosenProduct);

    const div = document.createElement('div');
    div.setAttribute('id','popUpBlock')
    orderContent.appendChild(div)
    orderContent.innerHTML = `
                <h3>Order info: </h3>
                <p>Name: ${fullName}</p>
                <p>City: ${selectedCityName}</p>
                <p>Post office Number: ${postOfficeNumber}</p>
                <p>Pay method: ${selectedPaymentsName}</p>`;
    if (selectedPaymentsName === "card" || cardNumber) {
        orderContent.innerHTML += `<p>Card number: ${cardNumber}</p>`;
    }
    orderContent.innerHTML += `
                <p>Product: ${chosenProduct.name}</p>     
                <p>Number of products: ${numberOfProducts}</p>
                <p>Comment to order: ${textAreaValue}</p>`;
//add sumPrice in <p>
    orderInfoCard.innerHTML = '';
    orderInfoCard.appendChild(orderContent);
    orderInfoCard.classList.add('visible-card');
    const parentEl = document.getElementById('popUpBlock')
    parentEl.appendChild(orderInfoCard)
    myForm.reset();
    myForm.style.display = 'none';
    let userObj = {
        name:fullName,
        city:selectedCityName,
        post:postOfficeNumber,
        typeOfPayment:selectedPaymentsName,
        card:cardNumber,
        numberOfProducts:numberOfProducts,
        comment:textAreaValue,
        chosenProduct:chosenProduct.name,
        sumPrice:sumPrice,
        date:date,
    }
    const userObject = JSON.stringify(userObj)

    orders.push(userObject);
    localStorage.setItem("userOrder",JSON.stringify(orders));
}


function addToLocalStorage(order) {
    const orders = JSON.parse(localStorage.getItem('userOrder')) || [];
    orders.push(order);
    localStorage.setItem('userOrder', JSON.stringify(orders));
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
let showDescription = (product) => {
    const buyBtn = document.createElement('button');
    const parentElement = document.getElementById('right');
    parentElement.innerHTML = '';

    let element = document.createElement('div');
    element.innerHTML = `Product name: ${product.name} <br>
                         Product description : ${product.description} <br>
                         Price : $${product.price}`;
    parentElement.appendChild(element);

    buyBtn.textContent = `Buy me`;
    buyBtn.setAttribute('id', 'buyMeBtn')
    parentElement.appendChild(buyBtn);
    buy(buyBtn, parentElement, product);//передаем выбраный продукт далее

}
let getValueFromObjectToSelect = (item, select) => {
    const valueArr = [];
    for (let keys in item) {
        const newOption = document.createElement('option');
        newOption.value = keys;
        newOption.textContent = item[keys];
        select.appendChild(newOption);
    }
    return valueArr
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


let buy = (buyBtn, parentElement, product) => {
    const chosenProduct = product;
    const centerField = document.getElementById('center');
    const body = document.getElementById('body');
    const element = document.createElement('div');

    element.setAttribute('id', 'popUpBlock')
    //Create form
    const myForm = document.createElement('form');
    myForm.setAttribute('id', 'myForm')
    //Name field
    const nameLabel = document.createElement('label');
    nameLabel.textContent = " Enter your full name below: ";
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    //Cities field
    const citiesLabel = document.createElement('label');
    citiesLabel.textContent = "Chose your city for delivery :";
    const citySelect = document.createElement('select');
    citySelect.name = 'cities';
    getValueFromObjectToSelect(cities, citySelect);
    //Post field
    const postLabel = document.createElement('label');
    postLabel.textContent = 'Enter your post office number: ';
    const postInput = document.createElement('input');
    postInput.type = 'text';
    postInput.name = 'post';
    //Payment method
    const paymentLabel = document.createElement('label');
    paymentLabel.textContent = 'Chose your payment method: '
    const paymentSelect = document.createElement('select');
    paymentSelect.style.marginBottom = '5px'
    paymentSelect.name = 'payments';
    getValueFromObjectToSelect(payments, paymentSelect);

    const fieldForCard = document.createElement('input');
    fieldForCard.type = 'text';
    fieldForCard.name = 'cardNumber';
    fieldForCard.classList.add('hidden');

    paymentSelect.addEventListener('change', () => {
        const selectedPaymentMethod = paymentSelect.value;
        if (selectedPaymentMethod === "card") {
            fieldForCard.classList.remove('hidden')
        } else {
            fieldForCard.classList.add('hidden')
        }

    });


    //Product counter
    const productsNumberLabel = document.createElement('label');
    productsNumberLabel.textContent = 'How many products you wanna buy?';
    const productsInput = document.createElement('input');
    productsInput.type = 'number';
    productsInput.name = 'numberOfProducts';
    //Comment field
    const commentAreaLabel = document.createElement('label');
    commentAreaLabel.textContent = 'Add your comment below';
    const commentArea = document.createElement('textarea');
    commentArea.name = 'textarea';
    commentArea.style.resize = 'none';
    //Submit button
    const submitBtn = document.createElement('button');
    submitBtn.name = 'submitBtn';
    submitBtn.textContent = 'BUY'
    submitBtn.type = 'button';


    buyBtn.addEventListener('click', () => {

        parentElement.innerHTML = '';
        centerField.innerHTML = '';
        body.appendChild(element);

        element.appendChild(myForm);

        myForm.appendChild(nameLabel);
        myForm.appendChild(input);
        myForm.appendChild(document.createElement('br'));

        myForm.appendChild(citiesLabel)
        myForm.appendChild(citySelect)
        myForm.appendChild(document.createElement('br'));

        myForm.appendChild(postLabel);
        myForm.appendChild(postInput);
        myForm.appendChild(document.createElement('br'));

        myForm.appendChild(paymentLabel);
        myForm.appendChild(paymentSelect);
        myForm.appendChild(fieldForCard);


        myForm.appendChild(document.createElement('br'));

        myForm.appendChild(productsNumberLabel);
        myForm.appendChild(productsInput);
        myForm.appendChild(document.createElement('br'));

        myForm.appendChild(commentAreaLabel);
        myForm.appendChild(commentArea);
        myForm.appendChild(document.createElement('br'));

        myForm.appendChild(submitBtn);

        submitBtn.addEventListener('click', () => {

            //city value
            const selectedCityValue = citySelect.value;
            const selectedCityName = cities[selectedCityValue];

            const selectedPayments = paymentSelect.value;
            const selectedPaymentsName = payments[selectedPayments];

            const fullName = input.value
            //post office
            const postOfficeNumber = postInput.value

            const cardNumber = fieldForCard.value;
            const numberOfProducts = productsInput.value;

            const textAreaValue = commentArea.value;

            const orderInfoCard = document.createElement('div');
            orderInfoCard.setAttribute('id', 'order');
            // orderInfoCard.style.display = 'none';
            orderInfoCard.classList.add('hidden')
            const validationFunction = () => {
                const validName = fullNameValidation(fullName, input, 'Enter correct name');
                const validOffice = postOfficeValidation(postOfficeNumber, postInput, `Enter valid post number bigger than 0`);
                const validPayment = validatePayment(selectedPayments, selectedPaymentsName, cardNumber, fieldForCard, `Enter valid card number`);
                const validProducts = validationProductsNum(numberOfProducts, productsInput, `Enter correct number`)
                return validName && validOffice && validPayment && validProducts;
            }
            deleteErrors();
            if (validationFunction()) {
                const orderData = {
                    fullName,
                    selectedCityName,
                    postOfficeNumber,
                    selectedPaymentsName,
                    cardNumber,
                    numberOfProducts,
                    textAreaValue,
                    chosenProduct,
                    orderInfoCard,
                    myForm,//?
                }
                showOrderCard(orderData);
            }
        })

    })
}
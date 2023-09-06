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
    parentElement.appendChild(buyBtn);
    buy(buyBtn, parentElement);

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

let isAnyErrorDisplayed = () => {
    const existingErrors = document.querySelectorAll('.error');
    return existingErrors.length > 0;
}

let buy = (buyBtn, parentElement) => {
    const centerField = document.getElementById('center');
    const body = document.getElementById('body');
    const element = document.createElement('div');

    element.id = 'popUpBlock';
    //Create form
    const myForm = document.createElement('form');
    myForm.id = 'myForm';
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
    // paymentSelect.addEventListener('input',()=>{
    //     const cardNumber = fieldForCard.value;
    //     if (cardNumber.length !== 16 || isNaN(cardNumber)){
    //         fieldForCard.parentNode.appendChild(error)
    //         error.innerHTML = 'please enter a correct card number'
    //     }else{
    //         error.innerHTML = ''
    //     }
    // })

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
        // element.style.textAlign = 'center';
        // element.textContent = `Thanks for buying`;
        //
        // setTimeout(() => {
        //     body.removeChild(element);
        // }, 5000);
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
            //add error message

            //delete all errors

            //name value
            const fullName = input.value
            if (fullName === "" || fullName === " " || !isNaN(fullName)) {
                if (isAnyErrorDisplayed()) {
                    deleteErrors();
                }
                showError(input, 'Enter correct name');

                return;
            }
            //city value
            const selectedCityValue = citySelect.value;
            const selectedCityName = cities[selectedCityValue];
            //post office
            const postOfficeNumber = postInput.value
            if (!postOfficeNumber.startsWith("№")||isNaN(postOfficeNumber.slice(1)) || postOfficeNumber <= 1) {
                if (isAnyErrorDisplayed()) {
                    deleteErrors();
                }
                showError(postInput, `Enter valid post number starting with №`)
                return;
            }
            //payments value
            const selectedPayments = paymentSelect.value;
            const selectedPaymentsName = payments[selectedPayments];
            const cardNumber = fieldForCard.value;
            if (selectedPayments === "card") {
                if (isAnyErrorDisplayed()) {
                    deleteErrors();
                }
                if (cardNumber.length !== 16 || isNaN(cardNumber)) {
                    showError(fieldForCard, `Enter valid card number`);
                    return;
                }
            }
            //Number of products value
            const numberOfProducts = productsInput.value;
            if (numberOfProducts <= 0 || isNaN(numberOfProducts)) {
                if (isAnyErrorDisplayed()) {
                    deleteErrors();
                }
                showError(productsInput, `Enter correct number`);
                return;
            }


            deleteErrors()
            //Comment value
            const textAreaValue = commentArea.value;

            const orderInfoCard = document.createElement('div');
            orderInfoCard.id = 'order';
            orderInfoCard.style.display = 'none';

            let showOrderCard = (fullName, selectedCityName, postOfficeNumber, selectedPaymentsName, cardNumber, numberOfProducts, textAreaValue) => {
                const orderContent = document.createElement('div');
                orderContent.id = 'oContent'
                orderContent.innerHTML = `
                <h3>Order info: </h3>
                <p>Name: ${fullName}</p>
                <p>City: ${selectedCityName}</p>
                <p>Post officeNumber: ${postOfficeNumber}</p>
                <p>Pay method: ${selectedPaymentsName}</p>`;
                if (selectedPaymentsName === "card" || cardNumber) {
                    orderContent.innerHTML += `<p>Card number: ${cardNumber}</p>`;
                }
                orderContent.innerHTML += `
                <p>Number of products: ${numberOfProducts}</p>
                <p>Comment to order: ${textAreaValue}</p>`;

                orderInfoCard.innerHTML = '';
                orderInfoCard.appendChild(orderContent);
                orderInfoCard.style.display = 'flex';
                orderInfoCard.style.alignItems = 'center';
                orderContent.style.border = '1px solid black'
                orderContent.style.width = '300px'
                orderContent.style.textAlign = 'center'
                orderContent.style.borderRadius = '16px'
                const parentEl = document.getElementById('popUpBlock')
                parentEl.appendChild(orderInfoCard)
                myForm.reset();
                myForm.style.display = 'none';
            }

            showOrderCard(fullName, selectedCityName, postOfficeNumber, selectedPaymentsName, cardNumber, numberOfProducts, textAreaValue)


        })

    })
}


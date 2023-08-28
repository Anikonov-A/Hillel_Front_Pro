function showCategories() {
    for (let i = 0; i < categories.length; i++) {
        console.log(`#${(i + 1)} Category: ${categories[i]} `);
    }
}
function showProducts() {
    for (let i = 0; i < products.length; i++) {
        console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
    }
}


function getNumericValue(text,maxValue){
    let value;
    do{
        value=parseInt(prompt(text))

    }while ( value < 1|| isNaN(value) || (maxValue && value > maxValue)  );
    return value
}

function getProduct(number) {
    return products[number - 1]
}

function calculateAndShowPrice(product, amount) {
    let price = getPrice(product.price, amount);
    console.log(`Price: $${price}`);
    if (isDiscountNeeded(price)) {
        price = getPriceWithDiscount(price);
        console.log(`Congrats! You got a discount, the final price is $${price}`);
    }
}


function getPrice(price, amount) {
    return price * amount;
}

function isDiscountNeeded(price) {
    const startDiscountFrom = 10000;
    return price >= startDiscountFrom
}
function getPriceWithDiscount(price){
    const discount = 20;
    const discountValue = (100 - discount) / 100;
    return  price * discountValue;
}


const categories = Object.keys(data);


showProducts();

const  productNumber= getNumericValue('Enter product number which you wanna buy:',products.length);

const productAmount = getNumericValue('Enter products amount:');

const selectedProduct = getProduct(productNumber)

calculatedAndShowPrice(selectedProduct,productAmount);



// let calculateAndShowPrice = function (selectedProduct, productsAmount) {
//     let initialPrice = selectedProduct.price * productsAmount;
//     console.log(`Price: $, ${initialPrice}`);
//     if (initialPrice >= startDiscountFrom) {
//         const finalPrice = initialPrice * discountValue;
//         console.log(`Congrats! You got a discount, the final price is $${finalPrice}`);
//     }
//
// }

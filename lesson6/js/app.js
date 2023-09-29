const categories = Object.keys(data);//[array with keys]

showCategories();

const categoryNumber = getNumericValue(`Enter category number`,categories.length)
const categoryName= categories[categoryNumber-1];
const products = data[categoryName]


showProducts();

const productNumber = getNumericValue(`Enter product number which you wanna buy:`,data.length)
const productsAmount = getNumericValue(`Enter products amount:`)

const selectedProduct = getProduct(productNumber)


calculateAndShowPrice(selectedProduct,productsAmount);


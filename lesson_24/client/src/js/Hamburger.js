export class Hamburger {
    constructor(size) {
        this.params = {
            size: size,
            topping: [],
            price:0
        }
        this.params.price = this.calculatePrice()

    }
    static SIZE_SMALL = {price: 50};
    static SIZE_BIG = {price: 100};

    static STUFFING_CHEESE = { price: 10};
    static STUFFING_SALAD = { price: 20};
    static STUFFING_FRIES = {price: 15};

    static TOPPING_SEASONING = { price: 15};
    static TOPPING_MAYO = { price: 20}

    addTopping(topping) {
        const chosenTopping = this.params.topping;
        chosenTopping.push(topping);
        this.params.price = this.calculatePrice()
    }

    calculatePrice() {
        const params = this.params;
        let finalPrice = 0;

        params.topping.forEach(topping => {
            finalPrice += topping.price;
        })

        return params.size.price + finalPrice;

    }

}
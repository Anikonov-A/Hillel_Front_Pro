class Hamburger {
    constructor(size) {
        this.params = {
            size: size,
            topping: [],
        }

    }

    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_BIG = {price: 100, calories: 40};

    static STUFFING_CHEESE = { price: 10, calories: 20};
    static STUFFING_SALAD = { price: 20, calories: 5};
    static STUFFING_FRIES = {price: 15, calories: 10};

    static TOPPING_SEASONING = { price: 15, calories: 0};
    static TOPPING_MAYO = { price: 20, calories: 5}


    addTopping(topping) {
        const chosenTopping = this.params.topping;
        chosenTopping.push(topping);
    }

    calculatePrice() {
        const params = this.params;
        let finalPrice = 0;

        params.topping.forEach(topping => {
            finalPrice += topping.price;
        })

        return params.size.price + finalPrice + ' tugriks';

    }

    calculateCalories() {
        const params = this.params;
        let finalCalories = 0;

        params.topping.forEach(topping => {
            finalCalories += topping.calories;
        })
        return params.size.calories + finalCalories +' calories';
    }
}

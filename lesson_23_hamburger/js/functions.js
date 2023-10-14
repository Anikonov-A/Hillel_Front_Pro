function calculateOrder() {
    const smallCheckBox = document.getElementById(`small`);
    const bigCheckBox = document.getElementById(`big`);
    let hamburgerSize = smallCheckBox.checked ? Hamburger.SIZE_SMALL : bigCheckBox.checked ? Hamburger.SIZE_BIG : null;

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
    calcPrice(hamburger)
    calcCalories(hamburger)

}
function calcPrice(hamburger){
    document.getElementById(`finalPrice`).textContent = hamburger.calculatePrice()
}
function calcCalories(hamburger){
    document.getElementById(`totalCalories`).textContent = hamburger.calculateCalories()
}
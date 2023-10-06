document.getElementById(`savePerson`).addEventListener('click', () => {
    if (validateData(regExpsForPerson)) {
        const personValue = getValueFromPersonFields();
        const {name, lastName, age, eyeColor} = personValue;
        const personObject = new Person(name, lastName, age, eyeColor);
        console.log(personObject)
        document.getElementById(`personCard`).style.visibility =`hidden`
    }
});
document.getElementById(`saveCar`).addEventListener('click', () => {
    if (validateData(regExpsForCars)) {
        const carValue = getValueFromCarFields();
        const {carBrand, carColor, engineSize, wheelsSize} = carValue;
        const carObject = new Car(carBrand, carColor, engineSize, wheelsSize);
        console.log(carObject)
    }
});


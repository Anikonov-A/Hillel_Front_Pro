let personObject;
document.getElementById(`savePerson`).addEventListener('click', () => {
    if (validateData(regExpsForPerson)) {
        const personValue = getValueFromPersonFields();
        const {name, lastName, age, eyeColor} = personValue;
        personObject = new Person(name, lastName, age, eyeColor);
        document.getElementById(`showPerson`).style.visibility = 'visible'

        showData(personObject,'showPerson')
    }
});

document.getElementById(`saveCar`).addEventListener('click', () => {
    if (validateData(regExpsForCars)) {
        const carValue = getValueFromCarFields();
        const {carBrand, carColor, engineSize, wheelsSize} = carValue;
        const carObject = new Car(carBrand, carColor, engineSize, wheelsSize);
        console.log(carObject)

        document.getElementById(`showCar`).style.visibility = 'visible';

        showData(carObject,'showCar')

        document.getElementById(`assignment`).style.display = 'block';
        assigmentData(carObject,personObject)

    }
});

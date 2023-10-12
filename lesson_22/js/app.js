function displayInputs(firstLabel, secondLabel, thirdLabel) {
    document.getElementById(`labelOne`).textContent = firstLabel;
    document.getElementById(`labelTwo`).textContent = secondLabel;
    document.getElementById(`labelThree`).textContent = thirdLabel;
}

function clearForm() {
    document.getElementById(`inputOne`).value = '';
    document.getElementById(`inputTwo`).value = '';
    document.getElementById(`inputThree`).value = '';
}


let currentApartment = null;
let currentPerson = null;
const house = new House('', '', [])
let dataEntryStep = 0;

function displayForm() {
    document.getElementById(`createHouse`).addEventListener('click', () => {
        document.getElementById(`formWrapper`).style.visibility = 'visible';
        displayInputs(`Enter your address`, `Enter number of floors`, `Enter number of flats`);
        dataEntryStep = 1;
    })
}

function createHouse() {
    const houseData = {
        address: document.getElementById(`inputOne`).value,
        floors: document.getElementById(`inputTwo`).value,
        flatsCounter: document.getElementById(`inputThree`).value,
    }
    console.log(houseData)

    house.address = houseData.address;
    house.floors = houseData.floors;
    house.apartCounter = houseData.flatsCounter;
    displayInputs(`enter flat number`, `enter rooms amount`, `Enter number of people`)

}

function createApartment() {
    const apartObj = {
        number: document.getElementById(`inputOne`).value,
        roomsAmount: document.getElementById(`inputTwo`).value,
        peopleCounter: document.getElementById(`inputThree`).value,
    }
    console.log(apartObj);
    const people = [];
    currentApartment = new Apartment(apartObj.number, apartObj.roomsAmount, people, apartObj.peopleCounter);
    house.apartments.push(currentApartment);
    displayInputs(`enter person Name`, `enter person last name`, `Enter person age`);
}

function createPerson() {
    const personData = {
        name: document.getElementById(`inputOne`).value,
        lastName: document.getElementById(`inputTwo`).value,
        age: document.getElementById(`inputThree`).value,
    }
    console.log(personData)
    currentPerson = new Person(personData.name, personData.lastName, personData.age)
    currentApartment.people.push(currentPerson)
    document.getElementById(`sendBtn`).value = 'Show Info';

    document.getElementById(`myForm`).style.display = 'none';
}

function sendForm() {
        document.getElementById(`sendBtn`).style.visibility = 'hidden';
        house.showInfo()
}

document.getElementById(`sendBtn`).addEventListener('click', () => {
    if (dataEntryStep === 1) {
        createHouse()
        dataEntryStep++
    } else if (dataEntryStep === 2) {
        createApartment()
        dataEntryStep++
    } else if (dataEntryStep === 3) {
        createPerson()
        dataEntryStep++
    } else if (dataEntryStep === 4) {
        sendForm()
        dataEntryStep = 0
    }
    clearForm()
})

displayForm()




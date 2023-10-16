let currentApartment = null;
let currentPerson = null;
const apartments = [];
const people = [];
const house = new House('', '', apartments);

function displayInputs(firstLabel, secondLabel, thirdLabel) {
    document.getElementById(`labelOne`).textContent = firstLabel;
    document.getElementById(`labelTwo`).textContent = secondLabel;
    document.getElementById(`labelThree`).textContent = thirdLabel;
}

function displayForm() {
    document.getElementById(`createHouse`).addEventListener(`click`, () => {
        document.getElementById(`formWrapper`).style.visibility = 'visible';
        displayInputs(`Enter your address`, `Enter number of floors`, `Enter number of flats`);
        createHouse()
    })
}

function createHouse() {
    document.getElementById(`sendBtn`).addEventListener(`click`, () => {
        const houseData = {
            address: document.getElementById(`inputOne`).value,
            floors: document.getElementById(`inputTwo`).value,
            flatsCounter: document.getElementById(`inputThree`).value,
        }
        console.log(houseData)

        house.address = houseData.address;
        house.floors = houseData.floors;
        house.apartCounter = houseData.flatsCounter;

        document.getElementById(`myForm`).style.display = 'none'
        createFormForApartment();

    })

}

function createFormForApartment() {
    const formForApartment = createElement(`form`, `#apartmentFormWrapper`, ``, {id: 'apartForm'});


    for (let i = 1; i <= house.apartCounter; i++) {
        createElement(`h2`, formForApartment, `Apartment ${i}`, {id: `apartment${i}`});
        createElement(`label`, formForApartment, `Enter your flat number`);
        createElement(`input`, formForApartment, ``, {type: 'text', id: `flatNumber${i}`})
        createElement(`label`, formForApartment, `Enter number of rooms`);
        createElement(`input`, formForApartment, ``, {type: 'text', id: `numberOfRooms${i}`});
        createElement(`label`, formForApartment, `Enter number of people`);
        createElement(`input`, formForApartment, ``, {type: 'text', id: `numberOfPeople${i}`});
    }
    createElement(`button`, formForApartment, `Submit`, {
        className: 'submit',
        type: 'button',
        id: `pushApartData`
    }, {'click': () => getDataFromApartment()});
}

function getDataFromApartment() {
    for (let i = 1; i <= house.apartCounter; i++) {
        const flatNumber = document.getElementById(`flatNumber${i}`);
        const numberOfRooms = document.getElementById(`numberOfRooms${i}`);
        const numberOfPeople = document.getElementById(`numberOfPeople${i}`);

        // const roomsInputs = [...document.getElementById(`numberOfRooms${i}`)];
        // const peopleInputs = [...document.getElementById(`numberOfPeople${i}`)];


        house.apartments.push(new Apartment(flatNumber.value, numberOfRooms.value, people, numberOfPeople.value));
        document.getElementById(`apartmentFormWrapper`).style.display = 'none'
        createFormForPeople()

    }
}

function createFormForPeople() {
    const formForPeople = createElement(`form`, `#peopleFormWrapper`, ``, {id: 'peopleForm'});
    console.log(house.apartments);

    house.apartments.forEach((apartment, index) => {
        if (apartment.hasOwnProperty('peopleCounter')) {
            const peopleCounter = apartment.peopleCounter;

            for (let i = 1; i <= peopleCounter; i++) {
                const inputId = `person${index + 1}_${i}`;

                if (!document.getElementById(inputId)) {
                    if (i === 1) {
                        createElement(`h2`, formForPeople, `Flat ${index + 1}`, {id: `personInFlat${index + 1}`});
                    }
                    createElement(`label`, formForPeople, `Enter your person name`);
                    createElement(`input`, formForPeople, ``, {type: 'text', id: inputId});
                }
            }
        }
    });

    createSendButton(formForPeople);


}

function createSendButton(formForPeople) {
    createElement(`button`, formForPeople, `Send People`, {type: 'button', id: "pushPeople"});
}

displayForm()
// apartment.people.forEach((_,pIndex)=>{
//     createElement(`h2`, formForPeople, `Flat${index+1}`, {id: `personInFlat${index+1}`});
//     createElement(`label`, formForPeople, `Enter your person name`);
//     createElement(`input`, formForPeople, ``, {type: 'text', id: `person${pIndex}`})
//
// })
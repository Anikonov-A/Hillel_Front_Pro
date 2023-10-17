const house = new House(``, ``);
function createBuilding() {
    const address = document.getElementById(`address`).value;
    const numApart = document.getElementById(`numApart`).value;
    if (validateFunc(`houseForm`, `house`)) {

        house.address = address;
        house.numberOfApartments = numApart;
        document.querySelector(`.house-form`).classList.add(`d-none`)


        createApartments()
    }
}
function createApartments() {
    const form = createForm();
    document.getElementById(`sendApart`).addEventListener('click', handleCreateApartments);
}

function createForm() {
    const form = createElement(`form`, `.apartments-form`, ``, {id: "apartmentForm"});
    for (let i = 0; i < house.numberOfApartments; i++) {
        createElement(`h2`, form, `Apartment# ${i + 1}`);
        createApartmentInput(form, i);
    }
    createElement(`button`, form, `Create apartments`, {type: 'button', id: 'sendApart'});
    return form;
}

function createApartmentInput(form, index) {
    createElement(`label`, form, `Add rooms in apartment: `);
    createElement(`input`, form, ``, {type: `number`, name: `apartment`, 'data-rooms': `${index}`});
    createElement(`label`, form, `Add number of people: `);
    createElement(`input`, form, ``, {type: `number`, name: 'apartment', 'data-people': `${index}`});
}

function handleCreateApartments() {
    if (validateFunc(`apartmentForm`, `apartment`)) {
        for (let i = 0; i < house.numberOfApartments; i++) {
            house.addApartment(new Apartment(i + 1, 0, []));
        }
        const roomsInputs = [...document.querySelectorAll('input[data-rooms]')];
        const peopleInputs = [...document.querySelectorAll('input[data-people]')];

        roomsInputs.forEach((input, index) => {
            const numberOfRooms = +input.value;
            const residents = +peopleInputs[index].value;
            console.log(residents)

            house.apartments[index].numberOfRooms = numberOfRooms;
            house.apartments[index].residents = Array(residents).fill(null);
        })
        document.querySelector(`.apartments-form`).classList.add(`d-none`)
        createPeople()
    }
}


function createPeople(){
    const form = createElement(`form`,`.people-form`,``,{id:'peopleForm'});

    house.apartments.forEach((apartment,apartIndex)=>{
        apartment.residents.forEach((_,personIndex)=>{
            createElement(`h2`,form,`Residents in flat# ${apartIndex+1}`);
            createElement(`label`,form,`Enter people name: `);
            createElement(`input`,form,``,{type:`text`,name:`name`,'data-person':`${personIndex}`,'data-apart':`${apartIndex}`})
            if (apartIndex===house.apartments.length-1 && personIndex === apartment.residents.length -1){
                createElement(`button`,form,`Create resident`,{id:'sendPeople',type:'button'})
            }

        })
    })
    addPeopleData()

}
function addPeopleData(){
    document.getElementById(`sendPeople`).addEventListener('click',()=>{
        if (validateFunc(`peopleForm`,`name`)){
            const nameInputs=[...document.querySelectorAll(`#peopleForm input[type="text"]`)];
            nameInputs.forEach(input=>{
                const personName = input.value;
                const apartIndex = +input.dataset.apart;
                const personIndex = +input.dataset.person;

                house.apartments[apartIndex].residents[personIndex] = new Person(personName)

            })
            document.querySelector(`.people-form`).classList.add(`d-none`)
            house.showInfo()
        }
    })
}



function validateFunc(form, name) {
    const myForm = document.getElementById(form);
    const inputs = myForm.querySelectorAll(`[name="${name}"]`)
    let booleanVariable = false

    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            input.classList.remove(`error`)
            input.placeholder = ''
            booleanVariable = true
        } else {
            input.classList.add(`error`)
            input.placeholder = 'Please enter your data'
            booleanVariable = false
        }
    })
    return booleanVariable
}